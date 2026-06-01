import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Default Japanese voice (Using standard ElevenLabs premade voice 'Rachel' for multilingual)
const DEFAULT_VOICE_ID = "21m00Tcm4TlvDq8ikWAM"; 
const BUCKET_NAME = "audio_cache";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function generateHash(text: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { text, voice_id } = await req.json();

    if (!text) {
      return new Response(JSON.stringify({ error: "Text is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const elevenLabsApiKey = Deno.env.get("ELEVENLABS_API_KEY");
    if (!elevenLabsApiKey) {
      return new Response(JSON.stringify({ error: "ElevenLabs API Key not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      { global: { headers: { Authorization: req.headers.get('Authorization')! } } }
    );

    const voiceId = voice_id || DEFAULT_VOICE_ID;
    const hash = await generateHash(`${voiceId}_${text}`);
    const fileName = `${hash}.mp3`;

    // Check if audio exists in cache
    const { data: fileExists } = await supabaseClient
      .storage
      .from(BUCKET_NAME)
      .createSignedUrl(fileName, 60);

    // Get public URL just in case we need to return it
    const { data: publicUrlData } = supabaseClient
      .storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    const publicUrl = publicUrlData.publicUrl;

    // We can check if it really exists by pinging the URL or checking list.
    // For simplicity, we check if createSignedUrl succeeded without an error.
    // Actually, createSignedUrl might not error if the file doesn't exist.
    // Let's do a quick list to be sure:
    const { data: files } = await supabaseClient
      .storage
      .from(BUCKET_NAME)
      .list('', { search: fileName });

    if (files && files.length > 0) {
      // CACHE HIT
      return new Response(JSON.stringify({ url: publicUrl, cached: true }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // CACHE MISS: Call ElevenLabs API
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': elevenLabsApiKey,
      },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`ElevenLabs API Error: ${errText}`);
    }

    const audioBlob = await response.blob();

    // Upload to Supabase Storage
    const { error: uploadError } = await supabaseClient
      .storage
      .from(BUCKET_NAME)
      .upload(fileName, audioBlob, {
        contentType: 'audio/mpeg',
        upsert: false
      });

    if (uploadError) {
      console.error("Storage upload error:", uploadError);
      // We can still return the generated audio if storage upload fails, 
      // but returning the binary or the URL is standard.
      // Since we want to return a URL, we might fail if we can't upload.
      // Alternatively, we could return the binary directly, but let's stick to URL.
      throw new Error(`Failed to upload to cache: ${uploadError.message}`);
    }

    // Successfully uploaded
    return new Response(JSON.stringify({ url: publicUrl, cached: false }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

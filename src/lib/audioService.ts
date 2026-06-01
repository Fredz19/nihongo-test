// Blob URL cache: stores pre-fetched audio as local blob URLs for instant playback
const blobUrlCache: Record<string, string> = {};
// In-flight fetch tracking to avoid duplicate requests for the same audio
const fetchingSet = new Set<string>();

const BUCKET_NAME = "audio_cache";
const SUPABASE_URL = "https://ozdsyadckqfwdhznjkmf.supabase.co";

/**
 * Preloads audio for a list of vocab items in the background.
 * Call this after vocab data loads. When user clicks speaker, audio is already in memory.
 */
export const preloadAudioBatch = (items: { id: string }[]) => {
  // Use a small delay to not compete with page rendering
  setTimeout(() => {
    items.forEach(({ id }) => {
      if (!blobUrlCache[id] && !fetchingSet.has(id)) {
        fetchingSet.add(id);
        const url = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${id}.mp3`;
        fetch(url)
          .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.blob();
          })
          .then(blob => {
            blobUrlCache[id] = URL.createObjectURL(blob);
          })
          .catch(() => {
            // File not in bucket, that's OK — will fall back at play time
          })
          .finally(() => {
            fetchingSet.delete(id);
          });
      }
    });
  }, 500);
};

export const playJapaneseAudio = async (id: string, kana: string) => {
  // 1. Best case: audio was preloaded as a blob URL — instant playback, zero network delay
  if (blobUrlCache[id]) {
    try {
      const audio = new Audio(blobUrlCache[id]);
      await audio.play();
      return;
    } catch (e) {
      console.warn('Failed to play preloaded audio, retrying...', e);
    }
  }

  // 2. Not preloaded yet: fetch the blob now (first-time click on this word)
  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${id}.mp3`;

  try {
    const res = await fetch(publicUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    blobUrlCache[id] = blobUrl;
    const audio = new Audio(blobUrl);
    await audio.play();
    return;
  } catch (error) {
    console.log(`Audio not in bucket for "${kana}" (${id}). Falling back to Edge Function...`);
  }

  // 3. Fallback: Supabase Edge Function (live TTS via ElevenLabs)
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
    const { data, error } = await supabase.functions.invoke('elevenlabs-tts', {
      body: { text: kana }
    });
    if (error) throw new Error(`Edge function error: ${error.message}`);
    if (data?.error) throw new Error(`API Error: ${data.error}`);
    if (data?.url) {
      const edgeAudio = new Audio(data.url);
      await edgeAudio.play();
      return;
    }
    throw new Error('No audio URL returned from edge function');
  } catch (error) {
    console.warn('ElevenLabs Edge Function TTS failed, falling back to browser SpeechSynthesis:', error);
    // 4. Ultimate Fallback: Browser's local SpeechSynthesis
    playFallbackTTS(kana);
  }
};

const playFallbackTTS = (text: string) => {
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ja-JP';
  const voices = window.speechSynthesis.getVoices();
  const jpVoices = voices.filter(v => v.lang === 'ja-JP' || v.lang === 'ja_JP');
  if (jpVoices.length > 0) {
    const preferred = jpVoices.find(v => v.name.includes('Google') || v.name.includes('Microsoft'));
    utterance.voice = preferred || jpVoices[0];
  }
  utterance.rate = 0.85;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
};

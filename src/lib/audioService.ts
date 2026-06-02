// AudioBuffer cache: stores pre-decoded AudioBuffers for instant user playback
const audioBufferCache: Record<string, AudioBuffer> = {};
// Blob URL cache as fallback
const blobUrlCache: Record<string, string> = {};
// In-flight fetch tracking to avoid duplicate requests
const fetchingSet = new Set<string>();

const BUCKET_NAME = "audio_cache";
const SUPABASE_URL = "https://ozdsyadckqfwdhznjkmf.supabase.co";

let offlineCtx: OfflineAudioContext | null = null;
let audioCtx: AudioContext | null = null;

/**
 * Gets a clean, warning-free OfflineAudioContext for background decoding.
 */
const getDecodeContext = (): OfflineAudioContext => {
  if (!offlineCtx) {
    offlineCtx = new OfflineAudioContext(1, 1, 44100);
  }
  return offlineCtx;
};

/**
 * Gets the active AudioContext for playback (resumed via user gesture).
 */
const getAudioContext = (): AudioContext => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
};

/**
 * Safely decodes an ArrayBuffer into an AudioBuffer using OfflineAudioContext.
 * Uses callback style wrapped in Promise for universal browser compatibility.
 */
const decodeAudioDataSafely = (arrayBuffer: ArrayBuffer): Promise<AudioBuffer> => {
  const ctx = getDecodeContext();
  return new Promise((resolve, reject) => {
    ctx.decodeAudioData(
      arrayBuffer,
      (buffer) => resolve(buffer),
      (err) => reject(err)
    );
  });
};

/**
 * Instantly plays a decoded AudioBuffer via Web Audio API.
 */
const playBuffer = (buffer: AudioBuffer) => {
  const ctx = getAudioContext();
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start(0);
};

/**
 * Preloads audio for a list of vocab items in the background.
 * Fetches and decodes the audio into memory so that playback on click is instantaneous.
 */
export const preloadAudioBatch = (items: { id: string }[]) => {
  // Use a small delay to avoid competing with initial page rendering
  setTimeout(() => {
    items.forEach(({ id }) => {
      if (!audioBufferCache[id] && !fetchingSet.has(id)) {
        fetchingSet.add(id);
        const url = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${id}.mp3`;
        fetch(url)
          .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.arrayBuffer();
          })
          .then(arrayBuffer => decodeAudioDataSafely(arrayBuffer))
          .then(buffer => {
            audioBufferCache[id] = buffer;
          })
          .catch(() => {
            // Fallback: pre-fetch as Blob URL if Web Audio decoding fails
            fetch(url)
              .then(res => res.blob())
              .then(blob => {
                blobUrlCache[id] = URL.createObjectURL(blob);
              })
              .catch(() => {});
          })
          .finally(() => {
            fetchingSet.delete(id);
          });
      }
    });
  }, 500);
};

/**
 * Plays the Japanese audio for a given word ID.
 * Prioritizes Web Audio API playback for 0ms delay.
 */
export const playJapaneseAudio = async (id: string, kana: string) => {
  // 1. BEST CASE: Audio is already decoded in memory - instant playback (0ms delay)
  if (audioBufferCache[id]) {
    try {
      playBuffer(audioBufferCache[id]);
      return;
    } catch (e) {
      console.warn('Failed to play decoded buffer, falling back...', e);
    }
  }

  // 2. SECOND BEST: Pre-fetched as Blob URL - play using standard Audio
  if (blobUrlCache[id]) {
    try {
      const audio = new Audio(blobUrlCache[id]);
      await audio.play();
      return;
    } catch (e) {
      console.warn('Failed to play blob URL, falling back...', e);
    }
  }

  // 3. NOT PRELOADED: Fetch, decode, cache, and play now
  const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${BUCKET_NAME}/${id}.mp3`;
  try {
    const res = await fetch(publicUrl);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const arrayBuffer = await res.arrayBuffer();
    const buffer = await decodeAudioDataSafely(arrayBuffer);
    audioBufferCache[id] = buffer;
    playBuffer(buffer);
    return;
  } catch (error) {
    console.log(`Audio not in bucket for "${kana}" (${id}). Falling back to Edge Function...`);
  }

  // 4. FALLBACK: Supabase Edge Function (live TTS via ElevenLabs)
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
    // 5. ULTIMATE FALLBACK: Browser's local SpeechSynthesis
    playFallbackTTS(kana);
  }
};

/**
 * Utterance speech synthesis fallback.
 */
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

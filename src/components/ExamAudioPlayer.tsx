import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Pause, Play, AlertCircle } from 'lucide-react';

interface ExamAudioPlayerProps {
  src: string;
  mode: 'simulasi' | 'belajar';
  title?: string;
  autoPlay?: boolean;
  onEnded?: () => void;
}

export default function ExamAudioPlayer({ 
  src, 
  mode, 
  title = "JLPT Choukai Audio", 
  autoPlay = true, 
  onEnded 
}: ExamAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
      setIsPlaying(false);
      setCurrentTime(0);

      // Apply current playback rate on load
      audioRef.current.playbackRate = playbackRate;

      // Autoplay on source change (for both simulasi and belajar modes) if enabled
      if (autoPlay) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch((err) => console.log("Autoplay blocked or interrupted:", err));
        }
      }
    }
  }, [src, autoPlay]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  const togglePlay = () => {
    if (!audioRef.current || mode === 'simulasi') return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const formatAudioTime = (time: number) => {
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (mode === 'simulasi') return;
    if (audioRef.current) {
      const val = parseFloat(e.target.value);
      audioRef.current.currentTime = val;
      setCurrentTime(val);
    }
  };

  return (
    <div className="bg-indigo-50/50 border border-indigo-100/50 rounded-xl p-6 mb-6">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => {
          setIsPlaying(false);
          if (onEnded) onEnded();
        }}
      />
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-indigo tracking-wider uppercase flex items-center gap-1.5">
          <Volume2 className="w-3.5 h-3.5" />
          {title}
        </span>
        <span className="text-xs text-sumi font-mono">{formatAudioTime(currentTime)} / {formatAudioTime(duration || 0)}</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={togglePlay}
          disabled={mode === 'simulasi'}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
            mode === 'simulasi'
              ? 'bg-indigo/20 text-indigo/40 cursor-not-allowed'
              : 'bg-indigo text-white hover:bg-indigo/90 shadow-sm'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        {/* Playback Speed Control */}
        <button
          type="button"
          onClick={() => {
            if (playbackRate === 0.8) setPlaybackRate(1.0);
            else if (playbackRate === 1.0) setPlaybackRate(1.2);
            else setPlaybackRate(0.8);
          }}
          disabled={mode === 'simulasi'}
          className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all ${
            mode === 'simulasi'
              ? 'text-indigo/40 bg-indigo/5 border-indigo-100/30 cursor-not-allowed'
              : 'text-indigo bg-indigo/10 border-indigo-200/50 hover:bg-indigo/20 hover:border-indigo-300'
          }`}
          title="Kecepatan Putar (Playback Speed)"
        >
          {playbackRate.toFixed(1)}x
        </button>

        <div className="flex-1">
          <input
            type="range"
            min="0"
            max={duration || 100}
            value={currentTime}
            onChange={handleSeek}
            disabled={mode === 'simulasi'}
            className={`w-full h-1.5 rounded-lg appearance-none bg-gray-200 accent-indigo ${
              mode === 'simulasi' ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
            }`}
          />
        </div>
      </div>
      {mode === 'simulasi' && (
        <p className="text-xs text-indigo/70 mt-3 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          Mode Simulasi: Audio diputar otomatis sekali, tombol kontrol dan penunjuk waktu dinonaktifkan.
        </p>
      )}
    </div>
  );
}

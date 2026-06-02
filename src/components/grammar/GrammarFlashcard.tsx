import React, { useState } from 'react';
import { RotateCcw, CheckCircle2, CircleDashed } from 'lucide-react';
import type { GrammarPattern, GrammarCategory, GrammarStatus } from '../../types/grammar';

interface GrammarFlashcardProps {
  pattern: GrammarPattern;
  status: GrammarStatus;
  onStatusChange: (id: string, status: GrammarStatus) => void;
  showFurigana: boolean;
  showRomaji: boolean;
}

const categoryColors: Record<GrammarCategory, { bg: string; text: string; border: string }> = {
  'Partikel Dasar': { bg: 'bg-indigo-50/80', text: 'text-indigo-700', border: 'border-indigo-100' },
  'Kopula & Keadaan': { bg: 'bg-slate-100/80', text: 'text-slate-700', border: 'border-slate-200' },
  'Bentuk Kata Kerja': { bg: 'bg-blue-50/80', text: 'text-blue-700', border: 'border-blue-100' },
  'Conditional': { bg: 'bg-amber-50/80', text: 'text-amber-700', border: 'border-amber-100' },
  'Ekspresi Waktu': { bg: 'bg-teal-50/80', text: 'text-teal-700', border: 'border-teal-100' },
  'Kata Sambung': { bg: 'bg-purple-50/80', text: 'text-purple-700', border: 'border-purple-100' },
  'Pola Lanjutan': { bg: 'bg-rose-50/80', text: 'text-rose-700', border: 'border-rose-100' }
};

// Helper: Highlights the grammar pattern inside Japanese sentences
function highlightPattern(text: string, patternStr: string) {
  const parts = patternStr.split(/[〜~]/).map(p => p.trim()).filter(Boolean);
  if (parts.length === 0) return <span>{text}</span>;

  const escapedParts = parts.map(p => p.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const regex = new RegExp(`(${escapedParts.join('|')})`, 'g');

  const segments = text.split(regex);
  return (
    <>
      {segments.map((seg, idx) => {
        const isMatch = parts.includes(seg);
        if (isMatch) {
          return (
            <span
              key={idx}
              className="text-vermillion font-bold bg-vermillion/10 px-0.5 rounded"
            >
              {seg}
            </span>
          );
        }
        return <span key={idx}>{seg}</span>;
      })}
    </>
  );
}

// Helper: Renders Furigana using HTML ruby tags or raw text depending on toggle
function renderFurigana(furiganaText: string, showFurigana: boolean, patternStr: string) {
  if (!showFurigana) {
    return highlightPattern(furiganaText.replace(/\[[^\]]+\]/g, ''), patternStr);
  }

  const toHiragana = (str: string) => {
    return str.replace(/[\u30a1-\u30f6]/g, (match) => {
      return String.fromCharCode(match.charCodeAt(0) - 0x60);
    });
  };

  const regex = /([^[\]]+)\[([^\]]+)\]/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(furiganaText)) !== null) {
    const matchIndex = match.index;
    
    if (matchIndex > lastIndex) {
      const plainText = furiganaText.substring(lastIndex, matchIndex);
      elements.push(<span key={`plain-${lastIndex}`}>{highlightPattern(plainText, patternStr)}</span>);
    }

    const base = match[1];
    const reading = match[2];

    // Right-to-left alignment parser to split plain prefix from ruby base
    let baseIdx = base.length - 1;
    let readIdx = reading.length - 1;

    while (baseIdx >= 0 && readIdx >= 0) {
      const char = base[baseIdx];
      const isKanji = /[一-龠々〆ヵヶ]/.test(char);
      if (isKanji) {
        baseIdx--;
      } else {
        const baseCharH = toHiragana(char);
        const readCharH = toHiragana(reading[readIdx]);
        if (baseCharH === readCharH) {
          baseIdx--;
          readIdx--;
        } else {
          break;
        }
      }
    }

    const prefix = base.substring(0, baseIdx + 1);
    const rubyBase = base.substring(baseIdx + 1);

    if (prefix) {
      elements.push(<span key={`pref-${matchIndex}`}>{highlightPattern(prefix, patternStr)}</span>);
    }

    elements.push(
      <ruby key={`ruby-${matchIndex}`} className="ruby-position mx-[1px]">
        {highlightPattern(rubyBase, patternStr)}
        <rt className="text-[9px] text-sumi select-none font-normal mb-0.5">{reading}</rt>
      </ruby>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < furiganaText.length) {
    const plainText = furiganaText.substring(lastIndex);
    elements.push(<span key={`plain-${lastIndex}`}>{highlightPattern(plainText, patternStr)}</span>);
  }

  return <>{elements}</>;
}

export default function GrammarFlashcard({
  pattern,
  status,
  onStatusChange,
  showFurigana,
  showRomaji
}: GrammarFlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const catTheme = categoryColors[pattern.category] || { bg: 'bg-gray-100 text-sumi border-gray-200', badgeColor: 'bg-gray-200 text-sumi' };

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleStatusChangeClick = (e: React.MouseEvent, nextStatus: GrammarStatus) => {
    e.stopPropagation(); // Avoid flipping the card
    onStatusChange(pattern.id, status === nextStatus ? 'new' : nextStatus);
  };

  // Get the first example for the back of card
  const mainExample = pattern.examples[0];

  return (
    <div className="h-72 relative perspective-1000 group w-full">
      <div 
        className={`w-full h-full transition-all duration-500 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={handleCardClick}
      >
        {/* FRONT OF CARD */}
        <div className="absolute inset-0 backface-hidden paper-card p-6 flex flex-col items-center justify-between text-center shadow-sm hover:shadow-md border border-gray-100">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] bg-ink/5 text-sumi font-semibold px-2 py-0.5 rounded-md font-mono">
                {pattern.level}
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catTheme.bg}`}>
                {pattern.category}
              </span>
            </div>
            <div className="flex gap-1">
              {status === 'mastered' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
              {status === 'learning' && <CircleDashed className="w-4 h-4 text-blue-500 animate-pulse" />}
            </div>
          </div>
          
          <div className="my-auto py-4">
            <h2 className="text-4xl sm:text-5xl font-serif text-ink tracking-tight font-bold mb-2">
              {pattern.pattern}
            </h2>
            <p className="text-sm text-sumi font-mono">{pattern.reading}</p>
          </div>
          
          <div className="flex items-center text-[10px] text-sumi/80 gap-1 font-medium select-none group-hover:text-vermillion transition-colors">
            <RotateCcw className="w-3 h-3" /> Klik untuk membalik
          </div>
        </div>

        {/* BACK OF CARD */}
        <div className="absolute inset-0 backface-hidden paper-card p-5 rotate-y-180 flex flex-col justify-between shadow-md border-vermillion/20 border-2">
          <div className="overflow-y-auto max-h-[190px] pr-1 scrollbar-thin">
            <div className="flex justify-between items-start gap-2 mb-2 pb-1 border-b border-gray-100">
              <h3 className="text-sm font-bold text-ink leading-tight">
                {pattern.meaning}
              </h3>
              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-gray-100 text-sumi rounded-full shrink-0 font-mono">
                {pattern.level}
              </span>
            </div>

            {/* Structure info */}
            <div className="mb-3">
              <p className="text-[9px] font-bold text-sumi uppercase tracking-wider mb-0.5">📐 Struktur</p>
              <div className="p-1.5 bg-white/70 border border-gray-100 rounded text-[11px] text-ink font-mono leading-relaxed">
                {pattern.structure}
              </div>
            </div>
            
            {/* Example sentence */}
            {mainExample && (
              <div className="mb-2">
                <p className="text-[9px] font-bold text-sumi uppercase tracking-wider mb-0.5">💬 Contoh Kalimat</p>
                <div className="bg-canvas/50 p-2 rounded border border-gray-50 text-left">
                  <div className="text-sm font-serif font-semibold text-ink leading-loose">
                    {renderFurigana(mainExample.furigana, showFurigana, pattern.pattern)}
                  </div>
                  {showRomaji && (
                    <p className="text-[10px] text-sumi font-mono mt-0.5">{mainExample.romaji}</p>
                  )}
                  <p className="text-[10px] text-ink/75 italic border-l border-vermillion/30 pl-2 mt-1">
                    {mainExample.translation}
                  </p>
                </div>
              </div>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="flex gap-2 pt-2 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={(e) => handleStatusChangeClick(e, 'learning')}
              className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border ${
                status === 'learning' 
                  ? 'bg-blue-100 text-blue-700 border-blue-200' 
                  : 'bg-gray-100 hover:bg-gray-200 text-sumi border-transparent'
              }`}
            >
              Belajar
            </button>
            <button 
              onClick={(e) => handleStatusChangeClick(e, 'mastered')}
              className={`flex-1 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors border ${
                status === 'mastered' 
                  ? 'bg-green-100 text-green-700 border-green-200' 
                  : 'bg-gray-100 hover:bg-gray-200 text-sumi border-transparent'
              }`}
            >
              Hafal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

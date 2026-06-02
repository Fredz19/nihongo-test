import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, BookOpen, CheckCircle2, CircleDashed, Sparkles } from 'lucide-react';
import type { GrammarPattern, GrammarCategory, GrammarStatus } from '../../types/grammar';

interface GrammarPatternCardProps {
  pattern: GrammarPattern;
  status: GrammarStatus;
  onStatusChange: (id: string, status: GrammarStatus) => void;
  isExpanded: boolean;
  onToggleExpand: () => void;
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
              className="text-vermillion font-bold bg-vermillion/10 px-0.5 rounded underline decoration-vermillion/40 underline-offset-4"
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

    const kanji = match[1];
    const kana = match[2];
    
    elements.push(
      <ruby key={`ruby-${matchIndex}`} className="ruby-position mx-[1px]">
        {highlightPattern(kanji, patternStr)}
        <rt className="text-[10px] text-sumi select-none font-normal tracking-normal mb-0.5">{kana}</rt>
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

export default function GrammarPatternCard({
  pattern,
  status,
  onStatusChange,
  isExpanded,
  onToggleExpand,
  showFurigana,
  showRomaji
}: GrammarPatternCardProps) {
  const [localRevealRomaji, setLocalRevealRomaji] = useState<Record<number, boolean>>({});
  const catTheme = categoryColors[pattern.category] || { bg: 'bg-gray-100', text: 'text-sumi', border: 'border-gray-200' };

  // Sub-variations progress (granular tracking like Bunpro)
  const [subProgress, setSubProgress] = useState<Record<string, boolean>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nihongo_grammar_variations_progress');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed[pattern.id]) {
          setSubProgress(parsed[pattern.id]);
        } else {
          setSubProgress({});
        }
      } else {
        setSubProgress({});
      }
    } catch (e) {
      console.error('Failed to load sub-variations progress:', e);
      setSubProgress({});
    }
  }, [pattern.id]);

  const handleToggleVariation = (variation: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = {
      ...subProgress,
      [variation]: !subProgress[variation]
    };
    setSubProgress(updated);

    try {
      const stored = localStorage.getItem('nihongo_grammar_variations_progress');
      const parsed = stored ? JSON.parse(stored) : {};
      parsed[pattern.id] = updated;
      localStorage.setItem('nihongo_grammar_variations_progress', JSON.stringify(parsed));

      // Auto-update parent state: if some are checked, mark parent as 'learning'
      // If all are checked, mark parent as 'mastered'
      // If none are checked, mark parent as 'new'
      if (pattern.variations) {
        const total = pattern.variations.length;
        const checkedCount = Object.keys(updated).filter(k => updated[k] && pattern.variations?.includes(k)).length;
        
        let newStatus: GrammarStatus = 'new';
        if (checkedCount === total) {
          newStatus = 'mastered';
        } else if (checkedCount > 0) {
          newStatus = 'learning';
        }
        
        if (newStatus !== status) {
          onStatusChange(pattern.id, newStatus);
        }
      }
    } catch (err) {
      console.error('Failed to save sub-variations progress:', err);
    }
  };

  const handleMainStatusChange = (newStatus: GrammarStatus) => {
    onStatusChange(pattern.id, newStatus);
    
    // Auto-update all sub-variations accordingly
    if (pattern.variations) {
      const updated: Record<string, boolean> = {};
      pattern.variations.forEach(v => {
        updated[v] = newStatus === 'mastered';
      });
      setSubProgress(updated);
      
      try {
        const stored = localStorage.getItem('nihongo_grammar_variations_progress');
        const parsed = stored ? JSON.parse(stored) : {};
        parsed[pattern.id] = updated;
        localStorage.setItem('nihongo_grammar_variations_progress', JSON.stringify(parsed));
      } catch (err) {
        console.error('Failed to sync variations on main status change:', err);
      }
    }
  };

  const masteredCount = pattern.variations
    ? pattern.variations.filter(v => subProgress[v]).length
    : 0;
  const totalCount = pattern.variations ? pattern.variations.length : 0;

  const handleToggleRomaji = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalRevealRomaji(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div 
      className={`paper-card overflow-hidden transition-all duration-300 border ${
        isExpanded ? 'ring-1 ring-vermillion/20 border-vermillion/20 shadow-md' : 'border-transparent hover:border-gray-100 shadow-sm'
      }`}
    >
      {/* CARD HEADER (Always visible) */}
      <div 
        onClick={onToggleExpand}
        className="p-5 flex items-center justify-between cursor-pointer select-none gap-4 hover:bg-white/40 transition-colors"
      >
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${catTheme.bg} ${catTheme.text} ${catTheme.border}`}>
              {pattern.category}
            </span>
            <span className="text-[10px] bg-ink/5 text-sumi font-semibold px-2 py-0.5 rounded-md font-mono">
              {pattern.level}
            </span>
            
            {/* Status indicators */}
            {status === 'mastered' && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                <CheckCircle2 className="w-3 h-3" /> Hafal
              </span>
            )}
            {status === 'learning' && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 animate-pulse">
                <CircleDashed className="w-3 h-3" /> Belajar
              </span>
            )}
            {totalCount > 0 && (
              <span className="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full border border-indigo-200 shadow-sm shrink-0">
                ⚡ {masteredCount}/{totalCount} Konjugasi (SRS)
              </span>
            )}
          </div>
          
          <div className="flex items-baseline gap-2.5">
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-ink tracking-tight">
              {pattern.pattern}
            </h3>
            <span className="text-xs text-sumi font-mono font-medium">({pattern.reading})</span>
          </div>
          <p className="text-sm font-semibold text-ink/80 mt-1 leading-snug line-clamp-1">
            {pattern.meaning}
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="p-2 text-sumi bg-canvas rounded-full border border-gray-100 hover:text-vermillion transition-colors">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>
      </div>

      {/* CARD BODY (Expanded view) */}
      <div 
        className={`transition-all duration-300 overflow-hidden ${
          isExpanded ? 'max-h-[1000px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 space-y-5 bg-white/30">
          {/* Detail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sumi mb-1">📐 Struktur Kalimat</h4>
                <div className="p-3 bg-white/70 border border-gray-100 rounded-lg text-sm font-semibold text-ink font-mono">
                  {pattern.structure}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-sumi mb-1">🎯 Fungsi JLPT</h4>
                <p className="text-sm text-ink/90 leading-relaxed font-sans">
                  {pattern.jlptFunction}
                </p>
              </div>
            </div>

            <div className="p-4 bg-vermillion/5 rounded-xl border border-vermillion/10 h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-vermillion mb-1">💡 Catatan Penggunaan</h4>
                <p className="text-xs text-ink/85 leading-relaxed">
                  {pattern.notes}
                </p>
              </div>
              {pattern.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-vermillion/10">
                  {pattern.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-bold text-vermillion/85 bg-white px-2 py-0.5 rounded-full border border-vermillion/10">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Sub-variations / Granular Conjugations Section (Bunpro style) */}
          {pattern.variations && pattern.variations.length > 0 && (
            <div className="p-4 bg-indigo-50/30 rounded-xl border border-indigo-100/60 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-700 flex items-center gap-1.5 font-serif">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Konjugasi & Variasi Granular (Versi Bunpro)
                </h4>
                <span className="text-[10px] font-mono font-bold text-indigo-600 bg-white px-2 py-0.5 rounded border border-indigo-100">
                  Progress: {Math.round((masteredCount / totalCount) * 100)}%
                </span>
              </div>
              
              <div className="h-1.5 bg-indigo-100/40 rounded-full overflow-hidden flex border border-indigo-100/20">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500 rounded"
                  style={{ width: `${(masteredCount / totalCount) * 100}%` }}
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1.5">
                {pattern.variations.map(variation => {
                  const isMastered = !!subProgress[variation];
                  return (
                    <button
                      key={variation}
                      onClick={(e) => handleToggleVariation(variation, e)}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold border transition-all duration-300 ${
                        isMastered
                          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm scale-102 font-bold'
                          : 'bg-white text-sumi border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-mono">{variation}</span>
                      <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center shrink-0 border ${
                        isMastered 
                          ? 'bg-white text-indigo-600 border-white' 
                          : 'border-gray-300 bg-canvas'
                      }`}>
                        {isMastered && <span className="text-[9px] font-bold">✓</span>}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="text-[10px] text-sumi leading-relaxed pl-1">
                💡 Tandai setiap variasi konjugasi di atas secara spesifik sesuai pemahaman Anda. Status utama konsep akan ter-update otomatis.
              </p>
            </div>
          )}

          {/* Example Sentences */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sumi flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5" /> Contoh Kalimat
            </h4>
            <div className="space-y-3">
              {pattern.examples.map((example, idx) => {
                const isRomajiVisible = showRomaji || localRevealRomaji[idx];
                return (
                  <div 
                    key={idx} 
                    className="p-3.5 bg-white/60 hover:bg-white border border-gray-100 rounded-lg transition-colors flex flex-col gap-1.5"
                  >
                    <div className="text-lg text-ink font-serif font-semibold leading-loose tracking-wide">
                      {renderFurigana(example.furigana, showFurigana, pattern.pattern)}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {isRomajiVisible ? (
                        <p className="text-xs text-sumi font-mono tracking-wide">
                          {example.romaji}
                        </p>
                      ) : (
                        <button
                          onClick={(e) => handleToggleRomaji(idx, e)}
                          className="text-[10px] text-sumi/80 hover:text-vermillion font-semibold underline decoration-dotted underline-offset-2 cursor-pointer font-mono"
                        >
                          [Tampilkan Romaji]
                        </button>
                      )}
                      {!showRomaji && isRomajiVisible && (
                        <button
                          onClick={(e) => handleToggleRomaji(idx, e)}
                          className="text-[9px] text-vermillion hover:underline"
                        >
                          Sembunyikan
                        </button>
                      )}
                    </div>
                    <p className="text-xs font-medium text-ink/75 border-l-2 border-vermillion/30 pl-2.5 py-0.5 italic">
                      {example.translation}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-3 border-t border-gray-100">
            <div className="text-xs text-sumi font-medium">
              Tandai progress pemahaman Anda
            </div>
            
            <div className="flex gap-2 w-full sm:w-auto">
              <button 
                onClick={() => handleMainStatusChange(status === 'learning' ? 'new' : 'learning')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
                  status === 'learning' 
                    ? 'bg-blue-100 text-blue-700 border-blue-200 shadow-sm' 
                    : 'bg-white text-sumi border-gray-200 hover:bg-gray-50'
                }`}
              >
                <CircleDashed className="w-3.5 h-3.5" />
                Belajar
              </button>
              <button 
                onClick={() => handleMainStatusChange(status === 'mastered' ? 'new' : 'mastered')}
                className={`flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all border ${
                  status === 'mastered' 
                    ? 'bg-green-100 text-green-700 border-green-200 shadow-sm' 
                    : 'bg-white text-sumi border-gray-200 hover:bg-gray-50'
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Hafal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

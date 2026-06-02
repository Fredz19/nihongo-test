import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, CheckCircle2, CircleDashed, Sparkles } from 'lucide-react';
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
        <rt className="text-[10px] text-sumi select-none font-normal tracking-normal mb-0.5">{reading}</rt>
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

interface ParsedTip {
  title: string;
  icon: string;
  theme: { bg: string; text: string; border: string; accent: string };
  content: string;
}

function getVariationNuance(variation: string): { badge: string; text: string; icon: string } {
  const v = variation.toLowerCase();
  if (
    v.endsWith('です') || 
    v.endsWith('でした') || 
    v.endsWith('ます') || 
    v.endsWith('ました') || 
    v.endsWith('ません') || 
    v.endsWith('ませんでした') || 
    v.endsWith('あります') || 
    v.endsWith('います')
  ) {
    return {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      text: 'Bentuk Sopan / Formal (Polite). Digunakan dalam situasi formal atau kepada orang yang belum akrab.',
      icon: '🗣️'
    };
  }
  
  if (
    v.endsWith('だ') || 
    v.endsWith('だった') || 
    v.endsWith('じゃない') || 
    v.endsWith('じゃなかった') || 
    v.endsWith('ない') || 
    v.endsWith('なかった') || 
    v.endsWith('た')
  ) {
    return {
      badge: 'bg-amber-50 text-amber-700 border-amber-200',
      text: 'Bentuk Biasa / Kasual (Informal). Digunakan kepada teman sebaya, keluarga, atau dalam tulisan kasual.',
      icon: '🗣️'
    };
  }

  return {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    text: 'Bentuk dasar atau perubahan tata bahasa standar. Digunakan untuk menyambung kalimat atau sesuai struktur tata bahasa.',
    icon: '💡'
  };
}

function findExampleForVariation(examples: any[], variation: string) {
  const matched = examples.find(ex => ex.japanese.includes(variation) || ex.furigana.includes(variation));
  return matched || examples[0];
}

function parseExclusiveTips(notes: string): ParsedTip[] {
  // Split notes by sentences (handling standard periods, question marks, exclamation marks)
  const sentences = notes
    .split(/(?<=[.!?。！？])\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 5); // ignore very short artifacts

  // If we couldn't split it into sentences properly, just use the entire notes as one tip
  const finalSentences = sentences.length > 0 ? sentences : [notes];

  return finalSentences.map((sentence) => {
    const sLower = sentence.toLowerCase();

    // 1. Peringatan/Pengecualian: jangan, tidak, hati-hati, kecuali, salah, bukan
    if (
      sLower.includes('jangan') ||
      sLower.includes('tidak') ||
      sLower.includes('hati-hati') ||
      sLower.includes('kecuali') ||
      sLower.includes('salah') ||
      sLower.includes('bukan')
    ) {
      return {
        title: 'Peringatan & Pengecualian',
        icon: '⚠️',
        theme: {
          bg: 'bg-amber-50/80',
          text: 'text-amber-800',
          border: 'border-amber-100 hover:border-amber-200',
          accent: 'bg-amber-500'
        },
        content: sentence
      };
    }

    // 2. Aturan Penulisan: partikel, tulis, huruf, kanji, hiragana, rumus
    if (
      sLower.includes('partikel') ||
      sLower.includes('tulis') ||
      sLower.includes('huruf') ||
      sLower.includes('kanji') ||
      sLower.includes('hiragana') ||
      sLower.includes('rumus')
    ) {
      return {
        title: 'Aturan Penulisan & Kanji',
        icon: '📝',
        theme: {
          bg: 'bg-blue-50/80',
          text: 'text-blue-800',
          border: 'border-blue-100 hover:border-blue-200',
          accent: 'bg-blue-500'
        },
        content: sentence
      };
    }

    // 3. Nuansa & Konteks: sopan, kasual, anime, percakapan, lisan
    if (
      sLower.includes('sopan') ||
      sLower.includes('kasual') ||
      sLower.includes('anime') ||
      sLower.includes('percakapan') ||
      sLower.includes('lisan')
    ) {
      return {
        title: 'Nuansa & Konteks Penggunaan',
        icon: '🗣️',
        theme: {
          bg: 'bg-purple-50/80',
          text: 'text-purple-800',
          border: 'border-purple-100 hover:border-purple-200',
          accent: 'bg-purple-500'
        },
        content: sentence
      };
    }

    // 4. Fallback: Tips Penggunaan
    return {
      title: 'Tips Penggunaan Eksklusif',
      icon: '💡',
      theme: {
        bg: 'bg-orange-50/50',
        text: 'text-orange-800',
        border: 'border-orange-100 hover:border-orange-200',
        accent: 'bg-orange-500'
      },
      content: sentence
    };
  });
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
  const [expandedVariation, setExpandedVariation] = useState<string | null>(null);
  const [expandedTips, setExpandedTips] = useState<Record<number, boolean>>({ 0: true });

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

  // Helper for dynamic tips parser inside Notes
  const parsedTips = parseExclusiveTips(pattern.notes);

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
                <CheckCircle2 className="w-3 h-3" /> Paham
              </span>
            )}
            {status === 'learning' && (
              <span className="flex items-center gap-1 text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200 animate-pulse">
                <CircleDashed className="w-3 h-3" /> Belajar
              </span>
            )}
            {totalCount > 0 && (
              <span className="text-[10px] bg-indigo-50 text-indigo-600 font-bold px-2 py-0.5 rounded-full border border-indigo-200 shadow-sm shrink-0">
                ⚡ {masteredCount}/{totalCount} Bentuk
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
          isExpanded ? 'max-h-[2500px] opacity-100 border-t border-gray-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="p-5 space-y-6 bg-white/30">
          
          {/* COMPONENT 1: KONSEP DASAR */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2 border-b pb-1.5 font-serif">
              <span className="text-vermillion">01</span> Konsep Dasar
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Struktur & Fungsi */}
              <div className="space-y-3.5">
                <div>
                  <h5 className="text-xs font-bold text-sumi mb-1 flex items-center gap-1.5">📐 Struktur Kalimat</h5>
                  <div className="p-3.5 bg-ink text-canvas border border-ink rounded-xl text-sm font-semibold font-mono tracking-wide shadow-inner relative overflow-hidden">
                    <div className="absolute right-0 top-0 translate-x-2 -translate-y-2 opacity-5 font-serif text-6xl font-bold select-none">式</div>
                    {pattern.structure}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-sumi mb-1 flex items-center gap-1.5">🎯 Fungsi JLPT</h5>
                  <p className="text-sm text-ink/90 leading-relaxed bg-white/50 border border-gray-100 p-3 rounded-xl font-medium">
                    {pattern.jlptFunction}
                  </p>
                </div>
              </div>

              {/* Catatan Sampingan */}
              <div className="p-4 bg-vermillion/[0.02] rounded-2xl border border-vermillion/10 flex flex-col justify-between">
                <div>
                  <h5 className="text-xs font-bold text-vermillion/90 mb-1.5 flex items-center gap-1.5">💡 Deskripsi Pola</h5>
                  <p className="text-xs text-ink/80 leading-relaxed font-medium">
                    Pola kalimat <strong className="text-vermillion font-serif text-sm">{pattern.pattern}</strong> ({pattern.reading}) ini digunakan dalam tingkatan {pattern.level} untuk menyatakan makna "{pattern.meaning}". Pelajari struktur di samping serta contoh kalimat di bawah secara saksama.
                  </p>
                </div>
                {pattern.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-4 pt-3 border-t border-vermillion/10">
                    {pattern.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-bold text-vermillion/85 bg-white px-2.5 py-1 rounded-full border border-vermillion/10 shadow-sm">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contoh Kalimat */}
            <div className="space-y-2.5 pt-2">
              <h5 className="text-xs font-bold text-sumi flex items-center gap-1.5">💬 Contoh Kalimat</h5>
              <div className="space-y-3">
                {pattern.examples.map((example, idx) => {
                  const isRomajiVisible = showRomaji || localRevealRomaji[idx];
                  return (
                    <div 
                      key={idx} 
                      className="p-4 bg-white/70 hover:bg-white border border-gray-100/70 hover:border-gray-200/80 rounded-2xl transition-all shadow-sm flex flex-col gap-2"
                    >
                      <div className="text-lg text-ink font-serif font-bold leading-loose tracking-wide">
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
                            className="text-[9px] text-vermillion hover:underline font-mono"
                          >
                            Sembunyikan
                          </button>
                        )}
                      </div>
                      <p className="text-xs font-semibold text-ink/75 border-l-2 border-vermillion/30 pl-3 py-0.5 italic">
                        {example.translation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COMPONENT 2: MATRIKS PERUBAHAN BENTUK */}
          {pattern.variations && pattern.variations.length > 0 && (
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between border-b pb-1.5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2 font-serif">
                  <span className="text-vermillion">02</span> Matriks Perubahan Bentuk
                </h4>
                <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full shadow-sm">
                  Variasi Terpahami: {Math.round((masteredCount / totalCount) * 100)}% ({masteredCount}/{totalCount})
                </span>
              </div>

              <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex border border-gray-200/40">
                <div 
                  className="h-full bg-indigo-600 transition-all duration-500 rounded"
                  style={{ width: `${(masteredCount / totalCount) * 100}%` }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1">
                {pattern.variations.map(variation => {
                  const isChecked = !!subProgress[variation];
                  const isExpandedVariation = expandedVariation === variation;
                  const nuance = getVariationNuance(variation);
                  const variationExample = findExampleForVariation(pattern.examples, variation);

                  return (
                    <div 
                      key={variation} 
                      className={`flex flex-col rounded-2xl border transition-all duration-300 bg-white shadow-sm overflow-hidden ${
                        isChecked 
                          ? 'border-indigo-200 ring-1 ring-indigo-50 bg-indigo-50/[0.01]' 
                          : 'border-gray-200/80 hover:border-gray-300'
                      } ${isExpandedVariation ? 'sm:col-span-2 md:col-span-2 shadow-md border-indigo-300' : ''}`}
                    >
                      {/* Grid Item Header Card */}
                      <div 
                        onClick={(e) => {
                          handleToggleVariation(variation, e);
                          // Toggle expansion of the clicked child card
                          setExpandedVariation(isExpandedVariation ? null : variation);
                        }}
                        className={`flex items-center justify-between px-4 py-3 cursor-pointer select-none transition-colors ${
                          isChecked ? 'bg-indigo-50/20' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                            isChecked 
                              ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' 
                              : 'border-gray-300 bg-white'
                          }`}>
                            {isChecked && <span className="text-[10px] font-bold">✓</span>}
                          </span>
                          <span className={`font-mono text-sm font-bold ${isChecked ? 'text-indigo-900' : 'text-ink'}`}>
                            {variation}
                          </span>
                        </div>
                        <div className="text-[10px] font-semibold text-sumi bg-canvas px-2 py-0.5 rounded-md border border-gray-100 flex items-center gap-1">
                          {isExpandedVariation ? 'Tutup' : 'Detail'}
                        </div>
                      </div>

                      {/* Micro-Accordion Panel */}
                      {isExpandedVariation && (
                        <div className="px-4 pb-4 pt-2 border-t border-gray-100 bg-indigo-50/10 space-y-3">
                          {/* Nuance badge and text */}
                          <div className="space-y-1">
                            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold border ${nuance.badge}`}>
                              {nuance.icon} {variation.endsWith('です') || variation.endsWith('ました') || variation.endsWith('ます') ? 'Formal' : 'Informal'}
                            </span>
                            <p className="text-[11px] text-ink/75 leading-relaxed pl-0.5">
                              {nuance.text}
                            </p>
                          </div>

                          {/* Sentence Example for this variation */}
                          {variationExample && (
                            <div className="p-3 bg-white border border-gray-100 rounded-xl space-y-1 shadow-sm">
                              <span className="text-[9px] font-bold text-sumi uppercase tracking-wider block">💬 Contoh Penggunaan</span>
                              <div className="text-xs font-serif font-bold text-ink leading-relaxed">
                                {renderFurigana(variationExample.furigana, showFurigana, variation)}
                              </div>
                              <p className="text-[10px] font-medium text-ink/70 border-l border-vermillion/30 pl-2 mt-1">
                                {variationExample.translation}
                              </p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* COMPONENT 3: KOTAK TIPS EKSKLUSIF */}
          <div className="space-y-3 pt-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-ink/70 flex items-center gap-2 border-b pb-1.5 font-serif">
              <span className="text-vermillion">03</span> Kotak Tips Eksklusif
            </h4>

            <div className="p-4 bg-gradient-to-br from-amber-50/30 to-orange-50/20 border border-orange-100 rounded-2xl shadow-sm space-y-3 relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-3 -translate-y-3 opacity-[0.03] select-none text-7xl">💡</div>
              
              <div className="flex items-center gap-2">
                <div className="p-1 bg-orange-100 text-orange-600 rounded-lg">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
                <h5 className="text-xs font-bold text-orange-950 uppercase tracking-wider">
                  Petunjuk Praktis & Poin Granular
                </h5>
              </div>

              <div className="space-y-2">
                {parsedTips.map((tip, idx) => {
                  const isOpen = !!expandedTips[idx];
                  return (
                    <div 
                      key={idx}
                      className={`border rounded-xl transition-all duration-300 overflow-hidden bg-white/95 shadow-sm ${
                        isOpen 
                          ? `${tip.theme.border} ring-1 ring-orange-100/50` 
                          : 'border-gray-200/70 hover:bg-gray-50/30'
                      }`}
                    >
                      {/* Accordion Trigger Header */}
                      <button
                        onClick={() => {
                          setExpandedTips(prev => ({
                            ...prev,
                            [idx]: !prev[idx]
                          }));
                        }}
                        className="w-full flex items-center justify-between px-4 py-3 text-left font-serif text-sm font-semibold select-none focus:outline-none"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-base select-none">{tip.icon}</span>
                          <span className={tip.theme.text}>{tip.title}</span>
                        </div>
                        <div className="text-sumi transition-transform duration-300">
                          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </div>
                      </button>

                      {/* Accordion Content Panel */}
                      <div 
                        className={`transition-all duration-300 overflow-hidden ${
                          isOpen ? 'max-h-[250px] border-t border-gray-100' : 'max-h-0'
                        }`}
                      >
                        <div className={`p-4 text-xs font-medium leading-relaxed text-ink/85 ${tip.theme.bg}`}>
                          <div className="flex gap-2.5 items-start">
                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${tip.theme.accent}`}></span>
                            <p>{tip.content}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* COMPONENT 4: TOMBOL UTAMA "SAYA PAHAM POLA INI" */}
          <div className="flex flex-col items-center justify-center pt-4 border-t border-gray-100 gap-3">
            <button
              onClick={() => handleMainStatusChange(status === 'mastered' ? 'new' : 'mastered')}
              className={`w-full max-w-md flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl text-sm font-bold tracking-wider uppercase transition-all duration-300 shadow-sm hover:shadow-md ${
                status === 'mastered'
                  ? 'bg-emerald-600 text-white border border-emerald-600 scale-102 font-bold'
                  : 'bg-white text-emerald-700 border-2 border-emerald-600/80 hover:bg-emerald-50/50'
              }`}
            >
              <CheckCircle2 className={`w-5 h-5 ${status === 'mastered' ? 'animate-bounce' : ''}`} />
              {status === 'mastered' ? 'Anda Sudah Paham Pola Ini' : 'Saya Paham Pola Ini'}
            </button>
            <p className="text-[10px] text-sumi text-center">
              {status === 'mastered' 
                ? 'Klik kembali jika ingin mengulang pemahaman pola grammar ini beserta variasi child-nya.' 
                : 'Menandai pola parent ini juga akan otomatis menandai seluruh variasi child di atas sebagai terkuasai.'
              }
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

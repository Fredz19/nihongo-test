import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Question, QuestionLevel } from '../types/question';
import { questionBanks } from '../data/mockQuestions';

interface ExamTemplate {
  vocab_count: number;
  grammar_count: number;
  reading_count: number;
  listening_count: number;
  time_limit_sec: number;
}

interface UseQuestionsResult {
  questions: Question[];
  template: ExamTemplate | null;
  isLoading: boolean;
  error: Error | null;
}

// Map Supabase row to our Question interface
function mapRow(row: Record<string, unknown>): Question {
  return {
    id: String(row.id),
    level: row.level as Question['level'],
    section: row.section as Question['section'],
    type: String(row.type),
    question: String(row.question),
    passage: row.passage ? String(row.passage) : undefined,
    highlight: row.highlight ? String(row.highlight) : undefined,
    audioUrl: row.audio_url ? String(row.audio_url) : undefined,
    imageUrl: row.image_url ? String(row.image_url) : undefined,
    options: Array.isArray(row.options) ? row.options as string[] : JSON.parse(String(row.options)),
    correct: Number(row.correct),
    explanation: String(row.explanation),
    source: row.source as Question['source'],
    topic: row.topic ? String(row.topic) : undefined,
    difficulty_level: row.difficulty_level as Question['difficulty_level'],
    package: row.package ? String(row.package) : undefined,
    question_number: row.question_number ? Number(row.question_number) : undefined,
  };
}

// Map legacy mockQuestions to our Question interface (id: number | string → string)
function mapLegacy(q: any): Question {
  return {
    ...q,
    id: String(q.id),
    level: q.level as Question['level'],
    section: q.section as Question['section'],
  };
}

// Shuffle array (Fisher-Yates)
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Session storage cache helpers
function getCacheKey(level: string, slug: string) {
  return `jlpt_questions_${level}_${slug}`;
}
function readCache(key: string): { questions: Question[]; template: ExamTemplate } | null {
  try {
    const raw = sessionStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
function writeCache(key: string, data: { questions: Question[]; template: ExamTemplate }) {
  try {
    sessionStorage.setItem(key, JSON.stringify(data));
  } catch {
    // sessionStorage full — ignore
  }
}

/**
 * Hook to fetch JLPT questions from Supabase for a given level and exam template.
 * Falls back to mockQuestions.ts if Supabase is unavailable.
 *
 * @param level     - 'N5' | 'N4' | 'N3'
 * @param slug      - exam template slug e.g. 'n5-full' | 'n4-quick'
 */
export function useQuestions(level: QuestionLevel, slug: string): UseQuestionsResult {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [template, setTemplate] = useState<ExamTemplate | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchQuestions() {
      setIsLoading(true);
      setError(null);

      // 1. Check session cache first
      const cacheKey = getCacheKey(level, slug);
      const cached = readCache(cacheKey);
      if (cached && cached.questions.length > 0) {
        if (!cancelled) {
          setQuestions(cached.questions);
          setTemplate(cached.template);
          setIsLoading(false);
        }
        return;
      }

      // 2. For N5 (Super Moshi/Tipe B) and N4 and N3 and below — use fallback immediately
      if (level === 'N5' || level === 'N4' || level === 'N3' || level === 'N2' || level === 'N1') {
        let bankKey = String(level);
        if (level === 'N4') {
          if (slug.includes('mojigoi')) {
            if (slug.endsWith('-1')) {
              bankKey = 'N4_MOJIGOI_A';
            } else if (slug.endsWith('-2')) {
              bankKey = 'N4_MOJIGOI_B';
            } else if (slug.endsWith('-3') || slug.endsWith('-C')) {
              bankKey = 'N4_MOJIGOI_C';
            } else {
              bankKey = 'N4_MOJIGOI_A';
            }
          } else if (slug.includes('bunpou')) {
            if (slug.endsWith('-1')) {
              bankKey = 'N4_BUNPOU_A';
            } else if (slug.endsWith('-2')) {
              bankKey = 'N4_BUNPOU_B';
            } else if (slug.endsWith('-3') || slug.endsWith('-C')) {
              bankKey = 'N4_BUNPOU_C';
            } else {
              bankKey = 'N4_BUNPOU_A';
            }
          } else {
            if (slug.endsWith('-1')) {
              bankKey = 'N4_CHOUKAI_A';
            } else if (slug.endsWith('-2')) {
              bankKey = 'N4_CHOUKAI_B';
            } else if (slug.endsWith('-3') || slug.endsWith('-C')) {
              bankKey = 'N4_CHOUKAI_C';
            } else {
              bankKey = 'N4_CHOUKAI_A';
            }
          }
        }
        if (level === 'N5') {
          if (slug.includes('mojigoi')) {
            if (slug.endsWith('-1')) {
              bankKey = 'N5_MOJIGOI_A';
            } else if (slug.endsWith('-2')) {
              bankKey = 'N5_MOJIGOI_B';
            } else if (slug.endsWith('-3')) {
              bankKey = 'N5_MOJIGOI_C';
            } else {
              bankKey = 'N5_MOJIGOI_A';
            }
          } else if (slug.includes('bunpou')) {
            if (slug.endsWith('-1')) {
              bankKey = 'N5_BUNPOU_A';
            } else if (slug.endsWith('-2')) {
              bankKey = 'N5_BUNPOU_B';
            } else if (slug.endsWith('-3')) {
              bankKey = 'N5_BUNPOU_C';
            } else {
              bankKey = 'N5_BUNPOU_A';
            }
          } else {
            if (slug.endsWith('-1')) {
              bankKey = 'N5_A';
            } else if (slug.endsWith('-2')) {
              bankKey = 'N5_B';
            } else {
              bankKey = 'N5_B'; // default fallback for package C/other packages
            }
          }
        }
        const fallback = (questionBanks[bankKey] || questionBanks[level] || questionBanks['N5']).map(mapLegacy);
        if (!cancelled) {
          setQuestions(fallback);
          setTemplate(null);
          setIsLoading(false);
        }
        return;
      }

      try {
        // 3. Fetch exam template
        const { data: templateData, error: tErr } = await supabase
          .from('exam_templates')
          .select('vocab_count, grammar_count, reading_count, listening_count, time_limit_sec')
          .eq('slug', slug)
          .eq('is_active', true)
          .single();

        if (tErr || !templateData) {
          throw new Error(`Template "${slug}" not found: ${tErr?.message ?? 'no data'}`);
        }

        const tmpl = templateData as ExamTemplate;

        // 4. Fetch questions
        let allQuestions: Question[] = [];
        const isTryout = slug.includes('tryout');

        if (isTryout) {
          const pkgLetter = slug.endsWith('-1') ? 'A' : (slug.endsWith('-2') ? 'B' : 'C');
          const { data, error: qErr } = await supabase
            .from('questions')
            .select('*')
            .eq('level', level)
            .eq('package', pkgLetter)
            .eq('is_active', true)
            .order('question_number', { ascending: true });

          if (qErr || !data) {
            throw new Error(`Failed to fetch tryout questions: ${qErr?.message}`);
          }
          allQuestions = data.map(mapRow);
        } else {
          // Fetch questions per section (only sections with count > 0)
          const sectionFetches: Promise<Question[]>[] = [];

          const sectionMap: [string, number][] = [
            ['Vocabulary', tmpl.vocab_count],
            ['Grammar', tmpl.grammar_count],
            ['Reading', tmpl.reading_count],
            ['Listening', tmpl.listening_count],
          ];

          for (const [section, count] of sectionMap) {
            if (count <= 0) continue;

            // Fetch 3x the needed count to have randomization headroom
            const fetchCount = Math.min(count * 3, 300);

            const promise = (async () => {
              const { data, error: qErr } = await supabase
                .from('questions')
                .select('*')
                .eq('level', level)
                .eq('section', section)
                .eq('is_active', true)
                .limit(fetchCount);

              if (qErr || !data) return [];
              const mapped = data.map(mapRow);
              return shuffle(mapped).slice(0, count);
            })();

            sectionFetches.push(promise);
          }

          const sectionResults = await Promise.all(sectionFetches);
          allQuestions = sectionResults.flat();
        }

        if (allQuestions.length === 0) {
          throw new Error('No questions returned from Supabase');
        }

        // 5. Cache and return
        const result = { questions: allQuestions, template: tmpl };
        writeCache(cacheKey, result);

        if (!cancelled) {
          setQuestions(allQuestions);
          setTemplate(tmpl);
          setIsLoading(false);
        }
      } catch (err) {
        // 6. Fallback to mockQuestions.ts
        console.warn('[useQuestions] Supabase fetch failed, falling back to mockQuestions:', err);
        const fallback = (questionBanks[level] || questionBanks['N5']).map(mapLegacy);

        if (!cancelled) {
          setQuestions(fallback);
          setTemplate(null);
          setError(err instanceof Error ? err : new Error(String(err)));
          setIsLoading(false);
        }
      }
    }

    fetchQuestions();
    return () => { cancelled = true; };
  }, [level, slug]);

  return { questions, template, isLoading, error };
}

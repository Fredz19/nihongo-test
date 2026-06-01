export type QuestionLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
export type QuestionSection = 'Vocabulary' | 'Grammar' | 'Reading' | 'Listening';
export type QuestionSource = 'ai' | 'official' | 'manual' | 'imported';
export type DifficultyLevel = 1 | 2 | 3;

export interface Question {
  id: string;                        // UUID from Supabase (or string-converted number for legacy)
  level: QuestionLevel;
  section: QuestionSection;
  type: string;
  question: string;
  passage?: string;                  // Text passages for Reading section
  highlight?: string;                // Highlighted word for kanji-read type
  audioUrl?: string;                 // Phase 2: URL to Supabase Storage MP3
  options: string[];
  correct: number;                   // 0-indexed
  explanation: string;
  // DB-only fields (optional for backward compat with mockQuestions.ts)
  source?: QuestionSource;
  topic?: string;
  difficulty_level?: DifficultyLevel;
}


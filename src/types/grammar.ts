export type GrammarCategory = 
  | 'Partikel Dasar' 
  | 'Kopula & Keadaan' 
  | 'Bentuk Kata Kerja' 
  | 'Conditional' 
  | 'Ekspresi Waktu' 
  | 'Kata Sambung' 
  | 'Pola Lanjutan';

export type GrammarStatus = 'new' | 'learning' | 'mastered';

export interface GrammarExample {
  japanese: string;
  furigana: string; // Furigana or Kanji with kana in brackets/notation
  romaji: string;
  translation: string;
}

export interface GrammarPattern {
  id: string;
  level: 'N5' | 'N4';
  pattern: string;
  reading: string;
  meaning: string;
  category: GrammarCategory;
  jlptFunction: string;
  structure: string;
  notes: string;
  examples: GrammarExample[];
  relatedPatterns: string[];
  tags: string[];
  variations?: string[];
}

export interface GrammarProgress {
  grammarId: string;
  status: GrammarStatus;
  updatedAt: string;
}

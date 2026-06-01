export type JLPTLevel = 'N5' | 'N4' | 'N3' | 'N2' | 'N1';

export interface VocabExample {
  id: string;
  japanese: string;
  reading: string;
  translation: string;
}

export interface Vocabulary {
  id: string;
  level: JLPTLevel;
  kanji: string | null;
  kana: string;
  romaji: string;
  meaning: string;
  type: string; // e.g. "Noun", "Verb (Ichidan)", "Adjective (Na)"
  examples: VocabExample[];
}

export interface VocabProgress {
  vocabId: string;
  status: 'new' | 'learning' | 'mastered';
  lastReviewed: string | null;
  nextReview: string | null;
}

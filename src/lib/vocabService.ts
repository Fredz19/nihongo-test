import { supabase } from './supabase';
import type { Vocabulary, JLPTLevel } from '../types/vocabulary';

export const fetchVocabByLevel = async (level: JLPTLevel): Promise<Vocabulary[]> => {
  const { data, error } = await supabase
    .from('vocabularies')
    .select(`
      *,
      examples:vocabulary_examples(*)
    `)
    .eq('level', level)
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching vocabulary:', error);
    throw new Error(error.message);
  }

  // Supabase returns related tables as an array matching the foreign key relation
  return (data || []) as unknown as Vocabulary[];
};

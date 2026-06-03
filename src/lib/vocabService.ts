import { supabase } from './supabase';
import type { Vocabulary, JLPTLevel } from '../types/vocabulary';

export const fetchVocabByLevel = async (level: JLPTLevel): Promise<Vocabulary[]> => {
  let allData: any[] = [];
  let from = 0;
  const limit = 1000;
  let hasMore = true;

  while (hasMore) {
    const { data, error } = await supabase
      .from('vocabularies')
      .select(`
        *,
        examples:vocabulary_examples(*)
      `)
      .eq('level', level)
      .order('id', { ascending: true })
      .range(from, from + limit - 1);

    if (error) {
      console.error('Error fetching vocabulary:', error);
      throw new Error(error.message);
    }

    if (data && data.length > 0) {
      allData = [...allData, ...data];
      from += limit;
      if (data.length < limit) {
        hasMore = false;
      }
    } else {
      hasMore = false;
    }
  }

  // Supabase returns related tables as an array matching the foreign key relation
  return allData as unknown as Vocabulary[];
};

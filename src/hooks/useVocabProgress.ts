import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { VocabProgress } from '../types/vocabulary';
import { useAuthStore } from './useAuthStore';

export function useVocabProgress() {
  const [progressData, setProgressData] = useState<Record<string, VocabProgress>>({});
  const { user } = useAuthStore();

  const fetchProgress = useCallback(async () => {
    if (!user) {
      setProgressData({});
      return;
    }
    
    const { data, error } = await supabase
      .from('user_vocab_progress')
      .select('*')
      .eq('user_id', user.id);
      
    if (error) {
      console.error('Error fetching progress:', error);
      return;
    }
    
    if (data) {
      const formatted: Record<string, VocabProgress> = {};
      data.forEach(item => {
        formatted[item.vocab_id] = {
          vocabId: item.vocab_id,
          status: item.status,
          lastReviewed: item.last_reviewed,
          nextReview: item.next_review
        };
      });
      setProgressData(formatted);
    }
  }, [user]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  const updateStatus = useCallback(async (vocabId: string, status: VocabProgress['status']) => {
    if (!user) return;
    
    const now = new Date().toISOString();
    const nextReview = status === 'mastered' ? null : new Date(Date.now() + 86400000).toISOString();
    
    // Optimistic UI update
    setProgressData(prev => ({
      ...prev,
      [vocabId]: {
        vocabId,
        status,
        lastReviewed: now,
        nextReview
      }
    }));
    
    // UPSERT to Supabase
    const { error } = await supabase
      .from('user_vocab_progress')
      .upsert({
        user_id: user.id,
        vocab_id: vocabId,
        status,
        last_reviewed: now,
        next_review: nextReview
      }, { onConflict: 'user_id, vocab_id' });
      
    if (error) {
      console.error('Failed to save progress to Supabase:', error);
      // Revert optimistic update could be implemented here
    }
  }, [user]);

  const getProgress = useCallback((vocabId: string): VocabProgress | null => {
    return progressData[vocabId] || null;
  }, [progressData]);

  return {
    progressData,
    updateStatus,
    getProgress,
    refreshProgress: fetchProgress
  };
}

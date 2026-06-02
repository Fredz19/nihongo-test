import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { GrammarProgress, GrammarStatus } from '../types/grammar';
import { useAuthStore } from './useAuthStore';

const LOCAL_STORAGE_KEY = 'nihongo_grammar_progress_local';

export function useGrammarProgress() {
  const [progressData, setProgressData] = useState<Record<string, GrammarProgress>>({});
  const { user } = useAuthStore();
  const [loading, setLoading] = useState(true);

  // Fetch grammar progress from either Supabase or LocalStorage
  const fetchProgress = useCallback(async () => {
    setLoading(true);
    if (!user) {
      // Fallback: Read from LocalStorage if unauthenticated
      try {
        const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localData) {
          setProgressData(JSON.parse(localData));
        } else {
          setProgressData({});
        }
      } catch (err) {
        console.error('Failed to parse grammar progress from local storage:', err);
        setProgressData({});
      }
      setLoading(false);
      return;
    }

    // Authenticated: Fetch from Supabase
    try {
      const { data, error } = await supabase
        .from('grammar_progress')
        .select('*')
        .eq('user_id', user.id);

      if (error) {
        // Fallback to local storage if supabase request fails or table does not exist yet
        console.warn('Supabase fetch failed or table grammar_progress missing. Falling back to local storage.', error);
        const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (localData) {
          setProgressData(JSON.parse(localData));
        }
        setLoading(false);
        return;
      }

      if (data) {
        const formatted: Record<string, GrammarProgress> = {};
        data.forEach(item => {
          formatted[item.grammar_id] = {
            grammarId: item.grammar_id,
            status: item.status as GrammarStatus,
            updatedAt: item.updated_at
          };
        });
        setProgressData(formatted);
      }
    } catch (err) {
      console.error('Error fetching grammar progress:', err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  // Refetch when user changes
  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Update status with optimistic UI updates
  const updateStatus = useCallback(async (grammarId: string, status: GrammarStatus) => {
    const now = new Date().toISOString();
    const updatedRecord: GrammarProgress = {
      grammarId,
      status,
      updatedAt: now
    };

    // 1. Optimistic Update in State
    setProgressData(prev => {
      const next = {
        ...prev,
        [grammarId]: updatedRecord
      };
      
      // Sync to localStorage as local backup/fallback
      if (!user) {
        try {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(next));
        } catch (err) {
          console.error('Failed to write grammar progress to localStorage:', err);
        }
      }
      
      return next;
    });

    if (!user) {
      // For unauthenticated users, we already updated state and localStorage.
      return;
    }

    // 2. Authenticated: Upsert to Supabase
    try {
      const { error } = await supabase
        .from('grammar_progress')
        .upsert({
          user_id: user.id,
          grammar_id: grammarId,
          status,
          updated_at: now
        }, { onConflict: 'user_id, grammar_id' });

      if (error) {
        console.error('Failed to sync grammar progress to Supabase:', error);
        // Save in localStorage as a backup in case DB is offline/fails
        try {
          const currentLocal = localStorage.getItem(LOCAL_STORAGE_KEY);
          const parsed = currentLocal ? JSON.parse(currentLocal) : {};
          parsed[grammarId] = updatedRecord;
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
        } catch (localErr) {
          console.error('Failed to save fallback progress in localStorage:', localErr);
        }
      }
    } catch (err) {
      console.error('Unexpected error syncing grammar progress:', err);
    }
  }, [user]);

  // Get status of a specific grammar pattern
  const getProgress = useCallback((grammarId: string): GrammarProgress | null => {
    return progressData[grammarId] || null;
  }, [progressData]);

  // Clear local progress (e.g. on logout or reset)
  const resetLocalProgress = useCallback(() => {
    if (!user) {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setProgressData({});
    }
  }, [user]);

  return {
    progressData,
    updateStatus,
    getProgress,
    isLoading: loading,
    refreshProgress: fetchProgress,
    resetLocalProgress
  };
}

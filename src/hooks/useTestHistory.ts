import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import { useAuthStore } from './useAuthStore';
import { toast } from 'sonner';

export interface DatabaseTestResult {
  id: string;
  user_id: string;
  level: string;
  mode: string;
  vocab_score: number;
  grammar_score: number;
  reading_score: number;
  listening_score: number;
  total_score: number;
  correct_count: number;
  total_questions: number;
  time_spent: number;
  weaknesses: string[];
  answers_history: any;
  created_at: string;
}

export function useTestHistory() {
  const [history, setHistory] = useState<DatabaseTestResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = useAuthStore(state => state.user);

  const fetchHistory = useCallback(async () => {
    if (!user) return;
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase
        .from('test_results')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setHistory(data as DatabaseTestResult[]);
    } catch (err: any) {
      console.error('Error fetching history:', err);
      toast.error('Gagal memuat riwayat ujian.');
    } finally {
      setIsLoading(false);
    }
  }, [user]);

  const saveResult = async (result: any) => {
    if (!user) return null;

    try {
      // Map the local TestResult to the Database Schema
      const dbPayload = {
        user_id: user.id,
        level: result.level,
        mode: result.mode,
        vocab_score: result.vocabScore || 0,
        grammar_score: result.grammarScore || 0,
        reading_score: result.readingScore || 0,
        listening_score: result.listeningScore || 0,
        total_score: result.totalScore || 0,
        correct_count: result.correctCount || 0,
        total_questions: result.totalQuestions || 0,
        time_spent: result.timeSpent || 0,
        weaknesses: result.weaknesses || [],
        answers_history: result.answersHistory || {},
      };

      const { data, error } = await supabase
        .from('test_results')
        .insert([dbPayload])
        .select()
        .single();

      if (error) throw error;
      
      // Update local state without fetching again
      setHistory(prev => [data as DatabaseTestResult, ...prev]);
      return data;
    } catch (err: any) {
      console.error('Error saving result:', err);
      toast.error('Skor tidak tersimpan di database, tetapi masih ada secara lokal.');
      return null;
    }
  };

  return {
    history,
    isLoading,
    fetchHistory,
    saveResult
  };
}

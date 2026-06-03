-- Migration: Add package and question_number columns to public.questions, and configure DELETE RLS policies for user progress tables.
-- Run this in the Supabase SQL Editor.

-- 1. Add columns to questions table
ALTER TABLE public.questions 
  ADD COLUMN IF NOT EXISTS package text,
  ADD COLUMN IF NOT EXISTS question_number integer;

-- 2. Add Row Level Security delete policies
ALTER TABLE public.user_vocab_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can delete their own progress" ON public.user_vocab_progress;
CREATE POLICY "Users can delete their own progress" ON public.user_vocab_progress
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

ALTER TABLE public.grammar_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can delete their own grammar progress" ON public.grammar_progress;
CREATE POLICY "Users can delete their own grammar progress" ON public.grammar_progress
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can delete their own test results" ON public.test_results;
CREATE POLICY "Users can delete their own test results" ON public.test_results
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

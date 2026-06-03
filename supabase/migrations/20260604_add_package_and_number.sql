-- Migration: Create grammar_progress table, add package/number columns, and configure RLS policies.
-- Run this in the Supabase SQL Editor.

-- 1. Add columns to questions table
ALTER TABLE public.questions 
  ADD COLUMN IF NOT EXISTS package text,
  ADD COLUMN IF NOT EXISTS question_number integer;

-- 2. Create grammar_progress table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.grammar_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    grammar_id TEXT NOT NULL,
    status TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, grammar_id)
);

-- 3. Add Row Level Security delete policies for user_vocab_progress
ALTER TABLE public.user_vocab_progress ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can delete their own progress" ON public.user_vocab_progress;
CREATE POLICY "Users can delete their own progress" ON public.user_vocab_progress
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- 4. Add RLS policies for grammar_progress (SELECT, INSERT, UPDATE, DELETE)
ALTER TABLE public.grammar_progress ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view their own grammar progress" ON public.grammar_progress;
CREATE POLICY "Users can view their own grammar progress" ON public.grammar_progress
    FOR SELECT TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert their own grammar progress" ON public.grammar_progress;
CREATE POLICY "Users can insert their own grammar progress" ON public.grammar_progress
    FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update their own grammar progress" ON public.grammar_progress;
CREATE POLICY "Users can update their own grammar progress" ON public.grammar_progress
    FOR UPDATE TO authenticated USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete their own grammar progress" ON public.grammar_progress;
CREATE POLICY "Users can delete their own grammar progress" ON public.grammar_progress
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- 5. Add Row Level Security delete policies for test_results
ALTER TABLE public.test_results ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Users can delete their own test results" ON public.test_results;
CREATE POLICY "Users can delete their own test results" ON public.test_results
    FOR DELETE TO authenticated USING (auth.uid() = user_id);

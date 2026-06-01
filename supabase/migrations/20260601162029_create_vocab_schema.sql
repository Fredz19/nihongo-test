-- Create vocabularies table
CREATE TABLE public.vocabularies (
    id TEXT PRIMARY KEY,
    level TEXT NOT NULL,
    kanji TEXT,
    kana TEXT NOT NULL,
    romaji TEXT NOT NULL,
    meaning TEXT NOT NULL,
    type TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create vocabulary_examples table
CREATE TABLE public.vocabulary_examples (
    id TEXT PRIMARY KEY,
    vocab_id TEXT NOT NULL REFERENCES public.vocabularies(id) ON DELETE CASCADE,
    japanese TEXT NOT NULL,
    reading TEXT NOT NULL,
    translation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create user_vocab_progress table
CREATE TABLE public.user_vocab_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vocab_id TEXT NOT NULL REFERENCES public.vocabularies(id) ON DELETE CASCADE,
    status TEXT NOT NULL DEFAULT 'new',
    last_reviewed TIMESTAMP WITH TIME ZONE,
    next_review TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    UNIQUE(user_id, vocab_id)
);

-- Enable RLS
ALTER TABLE public.vocabularies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vocabulary_examples ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_vocab_progress ENABLE ROW LEVEL SECURITY;

-- Public read access for vocabularies and examples
CREATE POLICY "Allow public read access on vocabularies"
    ON public.vocabularies FOR SELECT
    USING (true);

CREATE POLICY "Allow public read access on vocabulary_examples"
    ON public.vocabulary_examples FOR SELECT
    USING (true);

-- Authenticated user policies for user_vocab_progress
CREATE POLICY "Users can view their own progress"
    ON public.user_vocab_progress FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
    ON public.user_vocab_progress FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
    ON public.user_vocab_progress FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id);

-- ============================================================
-- JLPT NihonGo — Phase 4 Database Migration
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- ============================================================
-- TABLE: questions
-- ============================================================
DROP TABLE IF EXISTS questions CASCADE;

CREATE TABLE questions (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  level            text NOT NULL CHECK (level IN ('N5','N4','N3','N2','N1')),
  section          text NOT NULL CHECK (section IN ('Vocabulary','Grammar','Reading','Listening')),
  type             text NOT NULL,
  -- kanji-read | context | paraphrase | usage
  -- grammar-1 | grammar-2 | grammar-3
  -- reading-short | reading-medium | reading-complex
  -- audio-listening

  question         text NOT NULL,
  passage          text,             -- Text passages for Reading section
  highlight        text,             -- Highlighted kanji word for kanji-read type
  audio_url        text,             -- NULL in Phase 1; filled in Phase 2 (Listening)

  options          jsonb NOT NULL,   -- ["opsi A","opsi B","opsi C","opsi D"]
  correct          int  NOT NULL CHECK (correct BETWEEN 0 AND 3),
  explanation      text NOT NULL,

  source           text NOT NULL DEFAULT 'ai'
                   CHECK (source IN ('ai','official','manual','imported')),

  topic            text,
  -- Vocabulary: 'Numbers'|'Time'|'Family'|'Food'|'Transportation'|
  --             'Colors'|'Body'|'Weather'|'School'|'Work'|'Nature'|
  --             'Daily Life'|'Feelings'|'Actions'
  -- Grammar:    'Te Form'|'Nai Form'|'Potential Form'|'Volitional Form'|
  --             'Particles'|'Conditionals'|'Comparatives'|'Conjunctions'|
  --             'Giving Receiving'|'Causative'|'Passive'|'Honorifics'
  -- Reading:    'Advertisement'|'Notice'|'Daily Conversation'|'Email'|
  --             'Story'|'Announcement'|'Schedule'|'Instructions'

  difficulty_level int  NOT NULL DEFAULT 1 CHECK (difficulty_level BETWEEN 1 AND 3),
  -- 1 = Easy   (fundamental patterns, very common vocabulary)
  -- 2 = Medium  (standard JLPT exam difficulty)
  -- 3 = Hard    (tricky distractors, complex context)

  is_active        boolean DEFAULT true,
  created_at       timestamptz DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_questions_level_section
  ON questions (level, section)
  WHERE is_active = true;

CREATE INDEX IF NOT EXISTS idx_questions_topic
  ON questions (level, section, topic)
  WHERE is_active = true;

CREATE INDEX IF NOT EXISTS idx_questions_source
  ON questions (source);

CREATE INDEX IF NOT EXISTS idx_questions_difficulty
  ON questions (level, difficulty_level)
  WHERE is_active = true;

-- RLS
ALTER TABLE questions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON questions;
CREATE POLICY "Allow public read" ON questions FOR SELECT USING (true);

-- Allow anon insert (for seed script using anon key)
DROP POLICY IF EXISTS "Allow anon insert" ON questions;
CREATE POLICY "Allow anon insert" ON questions FOR INSERT WITH CHECK (true);

-- Allow anon delete (for re-seeding)
DROP POLICY IF EXISTS "Allow anon delete" ON questions;
CREATE POLICY "Allow anon delete" ON questions FOR DELETE USING (true);


-- ============================================================
-- TABLE: exam_templates
-- ============================================================
DROP TABLE IF EXISTS exam_templates CASCADE;

CREATE TABLE exam_templates (
  id               uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  level            text NOT NULL CHECK (level IN ('N5','N4','N3','N2','N1')),
  name             text NOT NULL,
  slug             text UNIQUE NOT NULL,
  vocab_count      int NOT NULL DEFAULT 0,
  grammar_count    int NOT NULL DEFAULT 0,
  reading_count    int NOT NULL DEFAULT 0,
  listening_count  int NOT NULL DEFAULT 0,
  time_limit_sec   int NOT NULL,
  is_active        boolean DEFAULT true,
  created_at       timestamptz DEFAULT now()
);

-- RLS
ALTER TABLE exam_templates ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read" ON exam_templates;
CREATE POLICY "Allow public read" ON exam_templates FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow anon insert" ON exam_templates;
CREATE POLICY "Allow anon insert" ON exam_templates FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anon delete" ON exam_templates;
CREATE POLICY "Allow anon delete" ON exam_templates FOR DELETE USING (true);


-- ============================================================
-- VERIFICATION QUERY (run after migration)
-- ============================================================
SELECT
  table_name,
  (SELECT count(*) FROM information_schema.columns c
   WHERE c.table_name = t.table_name) AS column_count
FROM information_schema.tables t
WHERE table_schema = 'public'
  AND table_name IN ('questions', 'exam_templates')
ORDER BY table_name;

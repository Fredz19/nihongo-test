-- Migration: Add image_url and audio_url columns to public.questions
-- Run this in the Supabase SQL Editor if working on remote database, or it will be applied locally on db reset.

ALTER TABLE public.questions 
  ADD COLUMN IF NOT EXISTS image_url text,
  ADD COLUMN IF NOT EXISTS audio_url text;

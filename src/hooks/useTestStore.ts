import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Question } from '../types/question';

export interface ActiveSession {
  level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  mode: 'simulasi' | 'belajar';
  currentQuestionIndex: number;
  answers: Record<string, number>; // Maps questionId (string UUID) -> optionIndex
  flagged: number[]; // Array of questionIndexes that are flagged
  timeLeft: number;
  status: 'idle' | 'instruction' | 'running' | 'paused' | 'completed';
  packageLetter?: 'A' | 'B' | 'C';
  slug?: string;
}

export interface TestResult {
  level: string;
  mode: string;
  vocabScore: number;
  grammarScore: number;
  readingScore: number;
  listeningScore: number;
  totalScore: number;
  correctCount: number;
  totalQuestions: number;
  timeSpent: number;
  weaknesses: string[];
  answersHistory: Record<string, number>;
  questions: (Question & { userAnswer: number | undefined; isCorrect: boolean })[];
}

interface TestStore {
  activeSession: ActiveSession | null;
  lastResult: TestResult | null;
  sessionQuestions: Question[]; // Questions for the current session (set by MockTest)

  // Actions
  startTest: (
    level: 'N5' | 'N4' | 'N3' | 'N2' | 'N1',
    mode: 'simulasi' | 'belajar',
    packageLetter?: 'A' | 'B' | 'C',
    slug?: string
  ) => void;
  setSessionQuestions: (questions: Question[]) => void;
  answerQuestion: (questionId: string, optionIndex: number) => void;
  toggleFlag: (questionIndex: number) => void;
  tickTime: () => void;
  setStatus: (status: ActiveSession['status']) => void;
  setQuestionIndex: (index: number) => void;
  finishTest: (questions: Question[]) => void;
  resetSession: () => void;
}


const getInitialTime = (level: string, slug?: string): number => {
  if (slug) {
    if (slug.includes('mojigoi')) {
      return 20 * 60; // 20 minutes
    }
    if (slug.includes('bunpou')) {
      return 40 * 60; // 40 minutes
    }
    if (slug.includes('tryout')) {
      if (level === 'N5') return 105 * 60;
      if (level === 'N4') return 125 * 60;
    } else if (slug.includes('quick')) {
      if (level === 'N5') return 40 * 60;
      if (level === 'N4') return 50 * 60;
    } else if (slug.includes('full')) {
      if (level === 'N5') return 90 * 60;
      if (level === 'N4') return 105 * 60;
    }
  }

  switch (level) {
    case 'N5': return 90 * 60;
    case 'N4': return 105 * 60;
    case 'N3': return 130 * 60;
    default: return 90 * 60;
  }
};

export const useTestStore = create<TestStore>()(
  persist(
    (set, get) => ({
      activeSession: null,
      lastResult: null,
      sessionQuestions: [],

      startTest: (level, mode, packageLetter, slug) => {
        set({
          sessionQuestions: [], // clear previous session questions
          activeSession: {
            level,
            mode,
            currentQuestionIndex: 0,
            answers: {},
            flagged: [],
            timeLeft: getInitialTime(level, slug),
            status: 'instruction',
            packageLetter,
            slug
          }
        });
      },

      setSessionQuestions: (questions) => {
        set({ sessionQuestions: questions });
      },
      answerQuestion: (questionId, optionIndex) => {
        const { activeSession } = get();
        if (!activeSession) return;

        set({
          activeSession: {
            ...activeSession,
            answers: {
              ...activeSession.answers,
              [questionId]: optionIndex
            }
          }
        });
      },

      toggleFlag: (questionIndex) => {
        const { activeSession } = get();
        if (!activeSession) return;

        const isFlagged = activeSession.flagged.includes(questionIndex);
        const nextFlagged = isFlagged
          ? activeSession.flagged.filter(idx => idx !== questionIndex)
          : [...activeSession.flagged, questionIndex];

        set({
          activeSession: {
            ...activeSession,
            flagged: nextFlagged
          }
        });
      },

      tickTime: () => {
        const { activeSession, sessionQuestions, finishTest } = get();
        if (!activeSession || activeSession.status !== 'running') return;

        if (activeSession.timeLeft <= 1) {
          finishTest(sessionQuestions); // use stored questions for timer-based finish
        } else {
          set({
            activeSession: {
              ...activeSession,
              timeLeft: activeSession.timeLeft - 1
            }
          });
        }
      },

      setStatus: (status) => {
        const { activeSession } = get();
        if (!activeSession) return;

        set({
          activeSession: {
            ...activeSession,
            status
          }
        });
      },

      setQuestionIndex: (index) => {
        const { activeSession } = get();
        if (!activeSession) return;

        set({
          activeSession: {
            ...activeSession,
            currentQuestionIndex: index
          }
        });
      },

      finishTest: (questions) => {
        const { activeSession } = get();
        if (!activeSession) return;

        const { level, mode, answers, timeLeft } = activeSession;

        let correctCount = 0;
        let vocabScore = 0;
        let grammarScore = 0;
        let readingScore = 0;
        let listeningScore = 0;

        const sectionQuestions: Record<string, { isCorrect: boolean; topic?: string }[]> = {};

        const evaluatedQuestions = questions.map(q => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correct;

          if (isCorrect) {
            correctCount++;
            if (q.section === 'Vocabulary') vocabScore += 2;
            if (q.section === 'Grammar') grammarScore += 2;
            if (q.section === 'Reading') readingScore += 2;
            if (q.section === 'Listening') listeningScore += 2;
          }

          const questionWithAnswer = { ...q, userAnswer, isCorrect };

          if (!sectionQuestions[q.section]) sectionQuestions[q.section] = [];
          sectionQuestions[q.section].push({ isCorrect, topic: q.topic });

          return questionWithAnswer;
        });

        const totalScore = questions.length > 0 ? (correctCount / questions.length) * 180 : 0;
        const totalQuestions = questions.length;
        const initialTime = getInitialTime(level, activeSession.slug);
        const timeSpent = initialTime - timeLeft;

        // Weakness detection — by section and by topic if available
        const weaknesses: string[] = [];
        Object.entries(sectionQuestions).forEach(([section, qs]) => {
          const sectionCorrect = qs.filter(sq => sq.isCorrect).length;
          const sectionRate = sectionCorrect / qs.length;
          if (sectionRate < 0.6) {
            weaknesses.push(`${section} (${Math.round(sectionRate * 100)}% akurasi)`);
          }

          // Topic-level weakness detection
          const topicMap: Record<string, { correct: number; total: number }> = {};
          for (const sq of qs) {
            if (!sq.topic) continue;
            if (!topicMap[sq.topic]) topicMap[sq.topic] = { correct: 0, total: 0 };
            topicMap[sq.topic].total++;
            if (sq.isCorrect) topicMap[sq.topic].correct++;
          }
          Object.entries(topicMap).forEach(([topic, { correct, total }]) => {
            if (total >= 3 && correct / total < 0.5) {
              weaknesses.push(`${section} - ${topic} (${Math.round((correct / total) * 100)}%)`);
            }
          });
        });

        const result: TestResult = {
          level,
          mode,
          vocabScore,
          grammarScore,
          readingScore,
          listeningScore,
          totalScore,
          correctCount,
          totalQuestions,
          timeSpent,
          weaknesses,
          answersHistory: answers,
          questions: evaluatedQuestions,
        };

        set({
          lastResult: result,
          activeSession: { ...activeSession, status: 'completed' },
        });
      },

      resetSession: () => {
        set({ activeSession: null });
      }
    }),
    {
      name: 'jlpt-test-store',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

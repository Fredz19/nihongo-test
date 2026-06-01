import { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  XCircle,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
  Filter,
  Type,
  Volume2
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTestStore } from '../hooks/useTestStore';

export default function ReviewMode() {
  const location = useLocation();
  const navigate = useNavigate();
  const lastResult = useTestStore(state => state.lastResult);
  
  const result = location.state?.result || lastResult;
  
  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#f7f5f0' }}>
        <div className="text-center">
          <p className="text-sumi mb-4">Tidak ada data untuk diulas kembali.</p>
          <button onClick={() => navigate('/dashboard')} className="btn-vermillion">Kembali ke Dashboard</button>
        </div>
      </div>
    );
  }

  const [currentQ, setCurrentQ] = useState(0);
  const [showExplanation, setShowExplanation] = useState(true);
  const [filter, setFilter] = useState<'all' | 'wrong'>('all');

  const allQuestions = result.questions || [];
  const answers = result.answers || result.answersHistory || {};

  // Apply filter
  let filteredQuestions = allQuestions.map((q: any, idx: number) => ({ ...q, originalIndex: idx }));
  if (filter === 'wrong') {
    filteredQuestions = filteredQuestions.filter((q: any) => {
      const userAnswer = answers[q.id];
      return userAnswer !== q.correct;
    });
  }

  const q = filteredQuestions[currentQ];
  const isCorrect = q ? answers[q.id] === q.correct : false;
  const userAnswer = q ? answers[q.id] : null;

  const wrongCount = allQuestions.filter((q: any) => answers[q.id] !== q.correct).length;
  const correctCount = allQuestions.filter((q: any) => answers[q.id] === q.correct).length;

  // Grammar pattern helper
  function extractGrammarPatterns(text: string) {
    const patterns: string[] = [];
    if (text.includes('と')) patterns.push('Partikel と (bersama)');
    if (text.includes('に')) patterns.push('Partikel に (kepada/tempat)');
    if (text.includes('で')) patterns.push('Partikel で (tempat/aktivitas)');
    if (text.includes('を')) patterns.push('Partikel を (objek)');
    if (text.includes('へ')) patterns.push('Partikel へ (arah)');
    if (text.includes('たら')) patterns.push('Bentuk たら (kondisional)');
    if (text.includes('ので')) patterns.push('Bentuk ので (alasan)');
    if (text.includes('ば')) patterns.push('Bentuk ば (kondisional)');
    if (text.includes('ながら')) patterns.push('Bentuk ながら (sambil)');
    if (text.includes('て')) patterns.push('Te-form');
    return patterns.length > 0 ? patterns : ['Grammar dasar N5'];
  }

  return (
    <div className="min-h-screen" style={{ background: '#f7f5f0' }}>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/results', { state: { result } })} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-serif">Review Mode</h1>
            <p className="text-xs text-sumi">Pelajari dari kesalahanmu</p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Stats Bar */}
        <div className="paper-card p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">{correctCount} Benar</span>
            </div>
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-vermillion" />
              <span className="text-sm font-medium">{wrongCount} Salah</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-sumi" />
            <select
              value={filter}
              onChange={(e) => { setFilter(e.target.value as any); setCurrentQ(0); }}
              className="text-sm border rounded-lg px-3 py-1.5 bg-transparent cursor-pointer"
              style={{ borderColor: 'rgba(26,26,26,0.2)' }}
            >
              <option value="all">Semua Soal ({allQuestions.length})</option>
              <option value="wrong">Hanya Salah ({wrongCount})</option>
            </select>
          </div>
        </div>

        {filteredQuestions.length === 0 ? (
          <div className="paper-card p-12 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h2 className="text-xl font-serif mb-2">Semua Benar!</h2>
            <p className="text-sumi">Tidak ada soal yang perlu direview.</p>
          </div>
        ) : (
          <>
            {/* Question Review Card */}
            <div className="paper-card p-6 md:p-10 mb-6">
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="section-label">{q.section} &middot; Soal {q.originalIndex + 1}</span>
                </div>
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${
                  isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-vermillion'
                }`}>
                  {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  {isCorrect ? 'Benar' : 'Salah'}
                </div>
              </div>

              {/* Question */}
              <div className="mb-6">
                {q.passage && (
                  <div className="mb-4 p-4 rounded-lg border-l-4 bg-white" style={{ borderColor: '#1d3557' }}>
                    <p className="text-base leading-relaxed font-serif whitespace-pre-line">{q.passage}</p>
                  </div>
                )}
                <p className="text-lg leading-relaxed">{q.question}</p>

                {/* Highlight word */}
                {q.highlight && (
                  <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-indigo/5 border border-indigo/20">
                    <span className="text-2xl font-serif text-indigo">{q.highlight}</span>
                  </div>
                )}
              </div>

              {/* Options */}
              <div className="space-y-3 mb-8">
                {q.options.map((option: string, i: number) => {
                  const isSelected = userAnswer === i;
                  const isAnswer = q.correct === i;
                  let bgClass = 'bg-gray-50 border-transparent';
                  let borderClass = '';

                  if (isAnswer) {
                    bgClass = 'bg-green-50';
                    borderClass = 'border-2 border-green-500';
                  } else if (isSelected && !isCorrect) {
                    bgClass = 'bg-red-50';
                    borderClass = 'border-2 border-vermillion';
                  }

                  return (
                    <div
                      key={i}
                      className={`p-4 rounded-lg ${bgClass} ${borderClass}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                          isAnswer ? 'bg-green-500 text-white' : isSelected ? 'bg-vermillion text-white' : 'bg-white border text-sumi'
                        }`}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className="text-base">{option}</span>
                        {isAnswer && <CheckCircle2 className="w-5 h-5 text-green-500 ml-auto" />}
                        {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-vermillion ml-auto" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Explanation Toggle */}
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex items-center gap-2 text-sm font-medium text-indigo hover:underline mb-4"
              >
                <Lightbulb className="w-4 h-4" />
                {showExplanation ? 'Sembunyikan' : 'Lihat'} Penjelasan Detail
              </button>

              {/* Explanation Panel */}
              {showExplanation && (
                <div className="space-y-4">
                  {/* Main Explanation */}
                  <div className="p-5 rounded-lg bg-indigo/5 border border-indigo/10">
                    <h4 className="text-sm font-semibold text-indigo mb-2">Penjelasan</h4>
                    <p className="text-sm leading-relaxed">{q.explanation}</p>
                  </div>

                  {/* Kanji Analysis */}
                  {q.highlight && (
                    <div className="p-5 rounded-lg border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Type className="w-4 h-4" />
                        Analisis Kanji
                      </h4>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <div className="text-5xl font-serif p-4 rounded-lg bg-gray-50 border w-24 h-24 flex items-center justify-center">{q.highlight}</div>
                        <div className="space-y-1">
                          <div className="text-sm"><strong>On'yomi:</strong> <span className="font-serif">{q.highlight === '山' ? 'サン (san)' : q.highlight === '学校' ? 'ガッ / コウ (ga/kou)' : q.highlight === '散歩' ? 'サン / ホ (san/ho)' : q.highlight === '必要' ? 'ヒツ / ヨウ (hitsu/you)' : '-'}</span></div>
                          <div className="text-sm"><strong>Kun'yomi:</strong> <span className="font-serif">{q.highlight === '山' ? 'やま (yama)' : q.highlight === '学校' ? 'まな-bu / -be (mana-bu)' : q.highlight === '散歩' ? 'ち-る (chi-ru) / ある-く (aru-ku)' : q.highlight === '必要' ? 'いる (iru) / かなめ (kaname)' : '-'}</span></div>
                          <div className="text-sm"><strong>Arti:</strong> {q.highlight === '山' ? 'Gunung' : q.highlight === '学校' ? 'Sekolah' : q.highlight === '散歩' ? 'Jalan-jalan' : q.highlight === '必要' ? 'Penting / Diperlukan' : '-'}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Grammar Patterns */}
                  {(q.section === 'Grammar' || q.type?.includes('grammar')) && (
                    <div className="p-5 rounded-lg border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Pola Grammar
                      </h4>
                      <div className="space-y-2">
                        {extractGrammarPatterns(q.question).map((pattern: string, i: number) => (
                          <div key={i} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo" />
                            {pattern}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vocabulary Insight */}
                  {q.section === 'Vocabulary' && (
                    <div className="p-5 rounded-lg border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                      <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                        <Volume2 className="w-4 h-4" />
                        Insight Kosakata
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Kosakata ini termasuk tingkat {result.level}. Dalam ujian JLPT, kosakata ini sering muncul 
                        dalam konteks {q.type === 'context' ? 'pengisian rumpang kalimat' : q.type === 'paraphrase' ? 'persamaan kata / sinonim' : 'cara baca kanji'}.
                        Fokuslah pada cara penggabungan kata dengan partikel yang tepat.
                      </p>
                    </div>
                  )}

                  {/* Learning Tip */}
                  <div className="p-5 rounded-lg bg-amber-50 border border-amber-200">
                    <h4 className="text-sm font-semibold text-amber-800 mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Tips Belajar
                    </h4>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      {isCorrect
                        ? 'Luar biasa! Kamu sudah menguasai konsep ini dengan baik. Pertahankan!'
                        : `Pelajari kembali konsep dari seksi ${q.section}. Cobalah membuat 3 contoh kalimat sendiri menggunakan pola atau kosakata ini agar lebih melekat di ingatan.`}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
                disabled={currentQ === 0}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-all bg-white"
                style={{ borderColor: 'rgba(26,26,26,0.2)' }}
              >
                <ChevronLeft className="w-4 h-4" />
                Sebelumnya
              </button>

              <span className="text-sm text-sumi">
                {currentQ + 1} / {filteredQuestions.length}
              </span>

              <button
                onClick={() => setCurrentQ(Math.min(filteredQuestions.length - 1, currentQ + 1))}
                disabled={currentQ === filteredQuestions.length - 1}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-all bg-white"
                style={{ borderColor: 'rgba(26,26,26,0.2)' }}
              >
                Selanjutnya
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Question Grid */}
            <div className="mt-10 paper-card p-6">
              <h3 className="text-sm font-semibold mb-4">Navigasi Soal</h3>
              <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                {filteredQuestions.map((fq: any, i: number) => {
                  const fqIsCorrect = answers[fq.id] === fq.correct;
                  return (
                    <button
                      key={i}
                      onClick={() => setCurrentQ(i)}
                      className={`w-full aspect-square rounded-lg text-sm font-medium transition-all ${
                        i === currentQ
                          ? 'bg-indigo text-white shadow-sm'
                          : fqIsCorrect
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-red-100 text-vermillion hover:bg-red-200'
                      }`}
                    >
                      {fq.originalIndex + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate(`/mocktest/${result?.level || 'N5'}`)} className="btn-vermillion flex-1">
            Coba Ujian Lagi
          </button>
          <button onClick={() => navigate('/dashboard')} className="btn-outline flex-1">
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

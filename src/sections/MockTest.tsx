import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Clock, ChevronLeft, ChevronRight, Flag, AlertCircle, Pause, Play, Volume2, Loader2 } from 'lucide-react';
import { useTestStore } from '../hooks/useTestStore';
import { useTestHistory } from '../hooks/useTestHistory';
import { useQuestions } from '../hooks/useQuestions';
import { playJapaneseAudio } from '../lib/audioService';
import ExamAudioPlayer from '../components/ExamAudioPlayer';

// Timer formatting
function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function MockTest() {
  const { level = 'N5' } = useParams();
  const navigate = useNavigate();
  
  // Zustand State Store
  const activeSession = useTestStore(state => state.activeSession);
  const startTest = useTestStore(state => state.startTest);
  const setSessionQuestions = useTestStore(state => state.setSessionQuestions);
  const answerQuestion = useTestStore(state => state.answerQuestion);
  const toggleFlag = useTestStore(state => state.toggleFlag);
  const tickTime = useTestStore(state => state.tickTime);
  const setStatus = useTestStore(state => state.setStatus);
  const setQuestionIndex = useTestStore(state => state.setQuestionIndex);
  const finishTest = useTestStore(state => state.finishTest);
  const resetSession = useTestStore(state => state.resetSession);

  const setCurrentQ = (index: number) => {
    setQuestionIndex(index);
  };

  const [selectedPackage, setSelectedPackage] = useState<'1' | '2' | '3'>('1');
  const [examType, setExamType] = useState<'choukai' | 'mojigoi' | 'bunpou'>('choukai');
  const [selectedMode, setSelectedMode] = useState<'simulasi' | 'belajar'>('simulasi');
  const [showConfirmEnd, setShowConfirmEnd] = useState(false);
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const { saveResult } = useTestHistory();

  // Determine exam template slug based on level, exam type and selected package
  const templateSlug =
    (level === 'N5' || level === 'N4') && examType === 'mojigoi' ? `${level.toLowerCase()}-mojigoi-${selectedPackage}`
    : (level === 'N5' || level === 'N4') && examType === 'bunpou' ? `${level.toLowerCase()}-bunpou-${selectedPackage}`
    : `${level.toLowerCase()}-tryout-${selectedPackage}`;
  const { questions, isLoading: isLoadingQuestions } = useQuestions(
    (level as 'N5' | 'N4' | 'N3'),
    templateSlug
  );

  // Load or auto-resume test session
  useEffect(() => {
    if (!activeSession || activeSession.level !== level) {
      const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
      startTest(level as any, selectedMode, pkgLetter, templateSlug);
    } else if (activeSession.status === 'completed') {
      navigate('/results', { replace: true });
    } else {
      setSelectedMode(activeSession.mode);
      if (activeSession.slug) {
        if (activeSession.slug.includes('mojigoi')) {
          setExamType('mojigoi');
        } else if (activeSession.slug.includes('bunpou')) {
          setExamType('bunpou');
        } else {
          setExamType('choukai');
        }
        const pkgNum = activeSession.slug.split('-').pop();
        if (pkgNum === '1' || pkgNum === '2' || pkgNum === '3') {
          setSelectedPackage(pkgNum as any);
        }
      }
    }
  }, [level, startTest, navigate]);

  // Sync loaded questions into store so tickTime can finishTest on timer expiry
  useEffect(() => {
    if (!isLoadingQuestions && questions.length > 0) {
      setSessionQuestions(questions);
    }
  }, [questions, isLoadingQuestions, setSessionQuestions]);

  // Handle ticking timer and auto-submit
  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | null = null;
    
    // Auto-save and navigate if test just got completed by the timer
    if (activeSession?.status === 'completed' && !isSaving) {
      const autoSave = async () => {
        setIsSaving(true);
        const result = useTestStore.getState().lastResult;
        if (result) {
          await saveResult(result);
        }
        navigate('/results', { replace: true });
      };
      autoSave();
      return;
    }

    if (activeSession && activeSession.status === 'running') {
      timer = setInterval(() => {
        tickTime();
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [activeSession?.status, tickTime, navigate, isSaving, saveResult]);

  if (!activeSession || isLoadingQuestions) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-canvas">
        <div className="text-center">
          <Loader2 className="w-10 h-10 text-indigo animate-spin mx-auto mb-4" />
          <p className="text-sumi font-medium">
            {!activeSession ? 'Memuat sesi ujian...' : 'Menyiapkan soal dari database...'}
          </p>
          {isLoadingQuestions && (
            <p className="text-xs text-sumi/50 mt-2">Ini mungkin memakan beberapa detik pertama kali.</p>
          )}
        </div>
      </div>
    );
  }

  const currentQ = activeSession.currentQuestionIndex;
  const q = questions[currentQ];
  const answers = activeSession.answers;
  const flagged = activeSession.flagged;
  const timeLeft = activeSession.timeLeft;
  const status = activeSession.status;

  const isPaused = status === 'paused';
  const showInstructions = status === 'instruction';

  const handleStart = () => {
    const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
    startTest(level as any, selectedMode, pkgLetter, templateSlug);
    setStatus('running');
  };

  const handleAnswer = (optionIndex: number) => {
    if (q) {
      answerQuestion(q.id, optionIndex);
    }
  };

  const handleFlag = () => {
    toggleFlag(currentQ);
  };

  const handlePauseToggle = () => {
    if (status === 'running') {
      setStatus('paused');
    } else if (status === 'paused') {
      setStatus('running');
    }
  };

  const handleFinish = async () => {
    setIsSaving(true);
    finishTest(questions); // pass fetched questions to calculate result

    const result = useTestStore.getState().lastResult;
    if (result) {
      await saveResult(result);
    }

    navigate('/results', { replace: true });
  };

  const handleRestart = () => {
    resetSession();
    const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
    startTest(level as any, selectedMode, pkgLetter, templateSlug);
    setShowConfirmReset(false);
  };

  // Navigational logic considering listening simulation constraints
  const canGoPrevious = currentQ > 0 && !(selectedMode === 'simulasi' && q?.section === 'Listening');

  // Instructions overlay
  if (showInstructions) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ background: '#f7f5f0' }}>
        <div className="max-w-lg w-full paper-card p-8 md:p-12">
          <h1 className="text-3xl font-serif mb-2">Try Out {level}</h1>
          <p className="text-sumi mb-8">Bacalah instruksi berikut sebelum memulai.</p>

          <div className="space-y-4 mb-8">
            {/* Exam Type Selector (N5 & N4) */}
            {(level === 'N5' || level === 'N4') && (
              <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
                <label className="text-xs font-semibold text-sumi block mb-2">PILIH JENIS UJIAN</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setExamType('choukai');
                      const nextSlug = `${level.toLowerCase()}-tryout-${selectedPackage}`;
                      const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
                      startTest(level as any, selectedMode, pkgLetter, nextSlug);
                    }}
                    className={`py-2 px-1 text-[11px] rounded-lg font-medium transition-all ${
                      examType === 'choukai'
                        ? 'bg-indigo text-white shadow-sm font-semibold'
                        : 'bg-white text-sumi border hover:bg-gray-100'
                    }`}
                  >
                    🎧 Choukai
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setExamType('mojigoi');
                      const nextSlug = `${level.toLowerCase()}-mojigoi-${selectedPackage}`;
                      const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
                      startTest(level as any, selectedMode, pkgLetter, nextSlug);
                    }}
                    className={`py-2 px-1 text-[11px] rounded-lg font-medium transition-all ${
                      examType === 'mojigoi'
                        ? 'bg-indigo text-white shadow-sm font-semibold'
                        : 'bg-white text-sumi border hover:bg-gray-100'
                    }`}
                  >
                    📝 Mojigoi
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setExamType('bunpou');
                      const nextSlug = `${level.toLowerCase()}-bunpou-${selectedPackage}`;
                      const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
                      startTest(level as any, selectedMode, pkgLetter, nextSlug);
                    }}
                    className={`py-2 px-1 text-[11px] rounded-lg font-medium transition-all ${
                      examType === 'bunpou'
                        ? 'bg-indigo text-white shadow-sm font-semibold'
                        : 'bg-white text-sumi border hover:bg-gray-100'
                    }`}
                  >
                    📝 Bunpou & Dokkai
                  </button>
                </div>
              </div>
            )}

            {/* Package Selector */}
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <label className="text-xs font-semibold text-sumi block mb-2">PILIH PAKET TRY OUT</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '1', name: 'Try Out 1', code: 'Paket A' },
                  { id: '2', name: 'Try Out 2', code: 'Paket B' },
                  { id: '3', name: 'Try Out 3', code: 'Paket C' },
                ].map((pkg) => {
                  const isDisabled = level === 'N4' && pkg.id !== '1';
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      disabled={isDisabled}
                      onClick={() => {
                        setSelectedPackage(pkg.id as any);
                        const nextSlug =
                          (level === 'N5' || level === 'N4') && examType === 'mojigoi' ? `${level.toLowerCase()}-mojigoi-${pkg.id}`
                          : (level === 'N5' || level === 'N4') && examType === 'bunpou' ? `${level.toLowerCase()}-bunpou-${pkg.id}`
                          : `${level.toLowerCase()}-tryout-${pkg.id}`;
                        const pkgLetter = pkg.id === '1' ? 'A' : (pkg.id === '2' ? 'B' : 'C');
                        startTest(level as any, selectedMode, pkgLetter, nextSlug);
                      }}
                      className={`py-2 px-1 text-xs rounded-lg font-medium transition-all ${
                        isDisabled
                          ? 'bg-gray-100 text-gray-400 border-dashed border opacity-50 cursor-not-allowed'
                          : selectedPackage === pkg.id
                            ? 'bg-indigo text-white shadow-sm font-semibold'
                            : 'bg-white text-sumi border hover:bg-gray-100'
                      }`}
                    >
                      <div>{pkg.name}</div>
                      <div className="text-[10px] opacity-80 font-normal">
                        {isDisabled ? 'Segera Hadir' : pkg.code}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mode Selector */}
            <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
              <label className="text-xs font-semibold text-sumi block mb-2">PILIH MODE BELAJAR</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMode('simulasi');
                    const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
                    startTest(level as any, 'simulasi', pkgLetter, templateSlug);
                  }}
                  className={`py-2 px-3 text-sm rounded-lg font-medium transition-all ${
                    selectedMode === 'simulasi'
                      ? 'bg-indigo text-white shadow-sm'
                      : 'bg-white text-sumi border hover:bg-gray-100'
                  }`}
                >
                  Simulasi Asli
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedMode('belajar');
                    const pkgLetter = selectedPackage === '1' ? 'A' : (selectedPackage === '2' ? 'B' : 'C');
                    startTest(level as any, 'belajar', pkgLetter, templateSlug);
                  }}
                  className={`py-2 px-3 text-sm rounded-lg font-medium transition-all ${
                    selectedMode === 'belajar'
                      ? 'bg-indigo text-white shadow-sm'
                      : 'bg-white text-sumi border hover:bg-gray-100'
                  }`}
                >
                  Mode Belajar
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-indigo" />
              </div>
              <div>
                <div className="font-medium">Durasi Ujian</div>
                <div className="text-sm text-sumi">
                  {level === 'N5' 
                    ? (examType === 'mojigoi' ? '20 menit' : examType === 'bunpou' ? '40 menit' : '30 menit') 
                    : level === 'N4'
                      ? (examType === 'mojigoi' ? '25 menit' : examType === 'bunpou' ? '55 menit' : '35 menit')
                      : '130 menit'}
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-vermillion/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-vermillion" />
              </div>
              <div>
                <div className="font-medium">Format Soal</div>
                <div className="text-sm text-sumi">{questions.length} soal pilihan ganda</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <Flag className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="font-medium">Tandai Soal</div>
                <div className="text-sm text-sumi">Tandai soal yang ragu-ragu untuk diulas kembali</div>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8">
            <p className="text-sm text-amber-800">
              {selectedMode === 'simulasi' ? (
                <span><strong>Simulasi Asli:</strong> Pada bagian Listening (Mendengar), audio diputar otomatis satu kali dan Anda tidak dapat kembali ke soal sebelumnya.</span>
              ) : (
                <span><strong>Mode Belajar:</strong> Fleksibel. Anda bisa menjeda audio, melakukan seek penunjuk waktu, dan bebas bernavigasi bolak-balik soal.</span>
              )}
            </p>
          </div>

          <div className="flex gap-4">
            <button onClick={() => navigate('/dashboard')} className="btn-outline flex-1">Kembali</button>
            <button onClick={handleStart} className="btn-vermillion flex-1">Mulai Ujian</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#f7f5f0' }}>
      {/* Test Header */}
      <header className="sticky top-0 z-40 bg-white border-b px-4 md:px-8 py-3" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-xs font-bold tracking-widest hidden sm:block">NIHONGO</span>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-indigo/10 text-indigo">{level}</span>
            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 text-sumi capitalize">
              {selectedMode === 'simulasi' ? 'Simulasi' : 'Belajar'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg ${
              timeLeft < 300 ? 'bg-red-50 text-vermillion animate-pulse' : 'bg-gray-100'
            }`}>
              <Clock className="w-4 h-4" />
              {formatTime(timeLeft)}
            </div>
            <button
              onClick={handlePauseToggle}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowConfirmReset(true)}
              className="text-xs text-red-600 hover:text-red-800 font-medium px-3 py-2 rounded-lg transition-all"
            >
              Ulangi
            </button>
            <button
              onClick={() => setShowConfirmEnd(true)}
              className="text-sm px-4 py-2 rounded-lg border hover:bg-ink hover:text-white transition-all"
              style={{ borderColor: 'rgba(26,26,26,0.2)' }}
            >
              Selesai
            </button>
          </div>
        </div>
      </header>

      {/* Pause Overlay */}
      {isPaused && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 text-center max-w-sm w-full mx-6">
            <Pause className="w-12 h-12 mx-auto mb-4 text-sumi" />
            <h2 className="text-2xl font-serif mb-2">Ujian Dijeda</h2>
            <p className="text-sumi mb-6">Timer berhenti sementara. Klik tombol di bawah untuk melanjutkan.</p>
            <button onClick={() => setStatus('running')} className="btn-vermillion w-full">Lanjutkan</button>
          </div>
        </div>
      )}

      {/* Confirm End Overlay */}
      {showConfirmEnd && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-serif mb-2">Akhiri Ujian?</h2>
            <p className="text-sumi mb-6">
              {questions.length - Object.keys(answers).length} soal belum terjawab. 
              Yakin ingin mengakhiri sesi ujian?
            </p>
            <div className="flex gap-4">
              <button disabled={isSaving} onClick={() => setShowConfirmEnd(false)} className="btn-outline flex-1 disabled:opacity-50">Batal</button>
              <button disabled={isSaving} onClick={handleFinish} className="btn-vermillion flex-1 disabled:opacity-50 flex items-center justify-center gap-2">
                {isSaving ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Ya, Akhiri'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Reset Overlay */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-6">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-serif text-red-600 mb-2">Ulangi Ujian?</h2>
            <p className="text-sumi mb-6">
              Tindakan ini akan menghapus semua jawaban yang telah Anda simpan pada sesi ini dan memulai ulang waktu ujian. Apakah Anda yakin?
            </p>
            <div className="flex gap-4">
              <button onClick={() => setShowConfirmReset(false)} className="btn-outline flex-1">Batal</button>
              <button onClick={handleRestart} className="btn-vermillion bg-red-600 hover:bg-red-700 flex-1">Ya, Ulangi</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full px-4 md:px-8 py-8">
        {/* Progress Bar */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-sumi">Soal {currentQ + 1}/{questions.length}</span>
          <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,26,0.08)' }}>
            <div
              className="h-full rounded-full bg-indigo transition-all duration-300"
              style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-sumi">{Object.keys(answers).length}/{questions.length} terjawab</span>
        </div>

        {/* Question Card */}
        <div className="paper-card p-6 md:p-10 mb-6">
          {/* Section Label */}
          <div className="flex items-center justify-between mb-6">
            <span className="section-label">{q?.section} &middot; Soal {currentQ + 1}</span>
            <button
              onClick={handleFlag}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${
                flagged.includes(currentQ) ? 'bg-amber-100 text-amber-700 font-medium' : 'bg-gray-100 text-sumi hover:bg-amber-50'
              }`}
            >
              <Flag className="w-4 h-4" />
              {flagged.includes(currentQ) ? 'Ditandai' : 'Tandai'}
            </button>
          </div>

          {/* Mondai Section Headers */}
          {q?.mondai && (currentQ === 0 || questions[currentQ - 1]?.mondai !== q.mondai) && (
            <div className="mb-6 p-4 rounded-xl bg-indigo/5 border border-indigo/10">
              <h3 className="text-sm font-bold text-indigo tracking-wider uppercase">
                問題{q.mondai}
                <span className="ml-2 text-sumi font-normal normal-case">
                  {examType === 'mojigoi' && q.mondai === 1 && '— 漢字の読み方 (Kanji Reading)'}
                  {examType === 'mojigoi' && q.mondai === 2 && '— 表記 (Orthography)'}
                  {examType === 'mojigoi' && q.mondai === 3 && '— 文脈規定 (Contextual Vocabulary)'}
                  {examType === 'mojigoi' && q.mondai === 4 && '— 言い換え類義 (Paraphrase)'}

                  {examType === 'bunpou' && q.mondai === 1 && '— 文の文法1 (Grammar Fill-in)'}
                  {examType === 'bunpou' && q.mondai === 2 && '— 文の組み立て (Sentence Building)'}
                  {examType === 'bunpou' && q.mondai === 3 && '— 文章の文法 (Passage Grammar)'}
                  {examType === 'bunpou' && q.mondai === 4 && '— 内容理解・短文 (Short Passage Reading)'}
                  {examType === 'bunpou' && q.mondai === 5 && '— 内容理解・中文 (Medium Passage Reading)'}
                  {examType === 'bunpou' && q.mondai === 6 && '— 情報検索 (Information Retrieval)'}
                </span>
              </h3>
              <p className="text-xs text-sumi mt-1">
                {examType === 'mojigoi' && q.mondai === 1 && 'Pilih cara baca (hiragana) yang tepat untuk kanji yang bergaris bawah.'}
                {examType === 'mojigoi' && q.mondai === 2 && 'Pilih penulisan yang tepat (kanji/katakana) untuk kata yang bergaris bawah.'}
                {examType === 'mojigoi' && q.mondai === 3 && 'Pilih kata yang paling tepat untuk mengisi bagian yang kosong.'}
                {examType === 'mojigoi' && q.mondai === 4 && 'Pilih kata/ungkapan yang paling dekat artinya dengan kata yang bergaris bawah.'}

                {examType === 'bunpou' && q.mondai === 1 && 'Pilih kata yang paling tepat untuk mengisi (　　).'}
                {examType === 'bunpou' && q.mondai === 2 && 'Pilih susunan yang benar untuk melengkapi kalimat. Tentukan kata pada posisi ★.'}
                {examType === 'bunpou' && q.mondai === 3 && 'Baca paragraf berikut dan isi bagian yang kosong dengan grammar yang tepat.'}
                {examType === 'bunpou' && q.mondai === 4 && 'Baca teks berikut dan jawab pertanyaannya.'}
                {examType === 'bunpou' && q.mondai === 5 && 'Baca teks berikut dan jawab pertanyaannya.'}
                {examType === 'bunpou' && q.mondai === 6 && 'Baca informasi berikut dan temukan jawaban yang spesifik.'}
              </p>
            </div>
          )}

          {/* Question Text & Passage */}
          <div className="mb-8">
            {q?.passage && (
              <div className="mb-6 p-4 rounded-lg border-l-4 bg-white relative" style={{ borderColor: '#1d3557' }}>
                <p className="text-lg leading-relaxed font-serif pr-10" style={{ color: '#1a1a1a' }}>
                  <span dangerouslySetInnerHTML={{ __html: q.passage }} />
                </p>
                <button
                  type="button"
                  onClick={() => playJapaneseAudio(q.id, (q.passage || '').replace(/<[^>]*>/g, ''))}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-indigo transition-colors"
                  title="Putar Audio Teks"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* Render Audio Player if in Listening or Reading section */}
            {q?.section === 'Listening' && q?.audioUrl && (
              <ExamAudioPlayer
                src={q.audioUrl}
                mode={selectedMode}
              />
            )}
            {(q?.section === 'Reading' || q?.section === 'Grammar') && q?.audioUrl && (
              <ExamAudioPlayer
                src={q.audioUrl}
                mode="belajar"
                title="Audio Bacaan (Dokkai)"
                autoPlay={false}
              />
            )}

            {q?.section === 'Vocabulary' && q?.highlight ? (
              <p className="text-lg leading-relaxed font-serif" style={{ color: '#1a1a1a' }}>
                {q.question.split(q.highlight).map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <span className="underline decoration-2 decoration-indigo underline-offset-4 font-semibold text-indigo">
                        {q.highlight}
                      </span>
                    )}
                  </span>
                ))}
              </p>
            ) : (
              <p className="text-lg leading-relaxed font-serif" style={{ color: '#1a1a1a' }} dangerouslySetInnerHTML={{ __html: q?.question || '' }} />
            )}

            {q?.imageUrl && (
              <div className="my-6 flex justify-center">
                <img 
                  src={q.imageUrl} 
                  alt="Pilihan Visual" 
                  className="max-w-md w-full h-auto rounded-xl border border-gray-200 shadow-sm bg-white p-2" 
                />
              </div>
            )}

            {/* Highlight word for kanji reading questions (non-Vocabulary only) */}
            {q?.highlight && q?.section !== 'Vocabulary' && (
              <div className="mt-4 inline-block px-4 py-2 rounded-lg bg-indigo/5 border border-indigo/20">
                <span className="text-2xl font-serif text-indigo">{q.highlight}</span>
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {q?.options.map((option: any, i: number) => {
              const isNumberedOption = (level === 'N5' || level === 'N4') && (q?.section === 'Grammar' || q?.section === 'Reading');
              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                    answers[q.id] === i
                      ? 'border-indigo bg-indigo/5 shadow-sm'
                      : 'border-transparent bg-gray-50 hover:bg-white hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                      answers[q.id] === i ? 'bg-indigo text-white' : 'bg-white border text-sumi'
                    }`}>
                      {isNumberedOption ? (i + 1) : String.fromCharCode(65 + i)}
                    </div>
                    <span className="text-base">{option}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setCurrentQ(Math.max(0, currentQ - 1))}
            disabled={!canGoPrevious}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-all bg-white"
            style={{ borderColor: 'rgba(26,26,26,0.2)' }}
          >
            <ChevronLeft className="w-4 h-4" />
            Sebelumnya
          </button>

          <button
            onClick={() => setCurrentQ(Math.min(questions.length - 1, currentQ + 1))}
            disabled={currentQ === questions.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white transition-all bg-white"
            style={{ borderColor: 'rgba(26,26,26,0.2)' }}
          >
            Selanjutnya
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Question Grid Navigation */}
        {!activeSession?.slug?.includes('tryout') && (
          <div className="mt-10 paper-card p-6">
            <h3 className="text-sm font-semibold mb-4">Navigasi Soal</h3>
            <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
              {questions.map((item, i) => {
                const isListeningSim = selectedMode === 'simulasi' && item.section === 'Listening';
                const isSelectable = !isListeningSim || i === currentQ;
                
                return (
                  <button
                    key={i}
                    disabled={!isSelectable}
                    onClick={() => setCurrentQ(i)}
                    className={`w-full aspect-square rounded-lg text-sm font-medium transition-all ${
                      i === currentQ
                        ? 'bg-indigo text-white'
                        : answers[item.id] !== undefined
                        ? 'bg-green-100 text-green-700'
                        : flagged.includes(i)
                        ? 'bg-amber-100 text-amber-700'
                        : !isSelectable
                        ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                        : 'bg-gray-100 text-sumi hover:bg-gray-200'
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-100" /><span>Terjawab</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-indigo" /><span>Aktif</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-amber-100" /><span>Ditandai</span></div>
              <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-gray-100" /><span>Belum dikerjakan</span></div>
              {selectedMode === 'simulasi' && (
                <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-gray-50 border border-gray-100" /><span>Terkunci (Listening)</span></div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import {
  Trophy,
  Target,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Headphones,
  PenTool,
  Brain,
  ArrowLeft,
  Star,
  Zap,
  CheckCircle2,
  XCircle
} from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTestStore } from '../hooks/useTestStore';
import { useTestHistory } from '../hooks/useTestHistory';
import { useEffect, useMemo } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const sectionColors: Record<string, string> = {
  vocabulary: '#e63946',
  grammar: '#1d3557',
  reading: '#059669',
  listening: '#d97706'
};

const sectionLabels: Record<string, string> = {
  vocabulary: 'Kosakata',
  grammar: 'Grammar',
  reading: 'Membaca',
  listening: 'Mendengar'
};

const sectionIcons: Record<string, React.ReactNode> = {
  vocabulary: <BookOpen className="w-5 h-5" />,
  grammar: <PenTool className="w-5 h-5" />,
  reading: <Brain className="w-5 h-5" />,
  listening: <Headphones className="w-5 h-5" />
};

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const lastResult = useTestStore(state => state.lastResult);
  const { history, fetchHistory } = useTestHistory();
  
  const result = location.state?.result || lastResult;

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);
  
  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#f7f5f0' }}>
        <div className="text-center">
          <p className="text-sumi mb-4">Tidak ada data hasil ujian ditemukan.</p>
          <button onClick={() => navigate('/dashboard')} className="btn-vermillion">Kembali ke Dashboard</button>
        </div>
      </div>
    );
  }

  // Handle compatibility between old and new state models
  const level = result.level;
  const totalQuestions = result.totalQuestions;
  const correct = result.correct !== undefined ? result.correct : result.correctCount;
  const score = result.score !== undefined ? result.score : Math.round(result.totalScore);
  const timeSpent = result.timeSpent;
  const weaknesses = result.weaknesses || [];

  const sectionBreakdown = result.sectionBreakdown || {
    vocabulary: result.vocabScore || 0,
    grammar: result.grammarScore || 0,
    reading: result.readingScore || 0,
    listening: result.listeningScore || 0
  };

  let finalSectionQuestions = result.sectionQuestions;
  if (!finalSectionQuestions && result.questions) {
    finalSectionQuestions = {};
    result.questions.forEach((q: any) => {
      const secKey = q.section.toLowerCase();
      if (!finalSectionQuestions[secKey]) {
        finalSectionQuestions[secKey] = [];
      }
      finalSectionQuestions[secKey].push(q);
    });
  }

  const passingScore = level === 'N5' ? 80 : level === 'N4' ? 90 : 95;
  const passed = score >= passingScore;
  const accuracy = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0;

  // Format time
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  // Prepare data for Radar Chart
  const radarData = useMemo(() => {
    return Object.keys(sectionBreakdown)
      .filter(key => {
        const secKey = key.toLowerCase();
        const sq = finalSectionQuestions?.[secKey] || finalSectionQuestions?.[key] || [];
        return sq.length > 0;
      })
      .map(key => {
        const secKey = key.toLowerCase();
        const sq = finalSectionQuestions?.[secKey] || finalSectionQuestions?.[key] || [];
        const sectionCorrect = sq.filter((q: any) => q.isCorrect).length;
        const sectionTotal = sq.length;
        const accuracy = sectionTotal > 0 ? Math.round((sectionCorrect / sectionTotal) * 100) : 0;
        
        return {
          subject: sectionLabels[secKey] || key,
          A: accuracy,
          fullMark: 100,
        };
      });
  }, [sectionBreakdown, finalSectionQuestions]);

  // Prepare data for Line Chart
  const lineData = useMemo(() => {
    // Reverse history to show oldest to newest
    const sorted = [...history].reverse();
    const data = sorted.map((h, i) => ({
      name: `Try Out ${i + 1}`,
      skor: h.total_score,
      level: h.level
    }));
    
    // If no history yet, just show the current result as the first point
    if (data.length === 0) {
      return [{ name: 'Try Out 1', skor: score, level }];
    }
    return data;
  }, [history, score, level]);

  const scoreIncrease = lineData.length > 1 
    ? lineData[lineData.length - 1].skor - lineData[0].skor 
    : 0;

  return (
    <div className="min-h-screen" style={{ background: '#f7f5f0' }}>
      {/* Header */}
      <header className="bg-white border-b px-6 py-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <button onClick={() => navigate('/dashboard')} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-serif">Hasil Try Out {level}</h1>
            <p className="text-xs text-sumi">{new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Score Hero */}
        <div className="paper-card p-8 md:p-12 text-center mb-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
            passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {passed ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
            {passed ? 'SELAMAT, KAMU LULUS!' : 'BELUM LULUS, TETAP SEMANGAT!'}
          </div>

          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className={`w-8 h-8 ${passed ? 'text-yellow-500' : 'text-sumi'}`} />
          </div>
          <div className="text-6xl md:text-7xl font-bold font-serif mb-2" style={{ color: passed ? '#059669' : '#e63946' }}>
            {score}
          </div>
          <div className="text-sumi mb-6">dari 180 poin &middot; Passing score: {passingScore}</div>

          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold">{accuracy}%</div>
              <div className="text-xs text-sumi">Akurasi</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold">{correct}/{totalQuestions}</div>
              <div className="text-xs text-sumi">Benar</div>
            </div>
            <div className="p-4 rounded-lg bg-gray-50">
              <div className="text-2xl font-bold">{formatTime(timeSpent)}</div>
              <div className="text-xs text-sumi">Waktu</div>
            </div>
          </div>
        </div>

        {/* Breakdown & Radar Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="paper-card p-6 md:p-8">
            <h2 className="text-xl font-serif mb-6">Analisis per Section</h2>
            <div className="space-y-6">
              {Object.entries(sectionBreakdown)
                .filter(([section]) => {
                  const secKey = section.toLowerCase();
                  const sq = finalSectionQuestions?.[secKey] || finalSectionQuestions?.[section] || [];
                  return sq.length > 0;
                })
                .map(([section]) => {
                  const secKey = section.toLowerCase();
                  const sq = finalSectionQuestions?.[secKey] || finalSectionQuestions?.[section] || [];
                  const sectionCorrect = sq.filter((q: any) => q.isCorrect).length;
                  const sectionTotal = sq.length;
                  const sectionAccuracy = sectionTotal > 0 ? Math.round((sectionCorrect / sectionTotal) * 100) : 0;
                  const isWeak = sectionAccuracy < 60;

                  return (
                    <div key={section}>
                      <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg" style={{ background: `${sectionColors[secKey]}15` }}>
                          <span style={{ color: sectionColors[secKey] }}>{sectionIcons[secKey]}</span>
                        </div>
                        <div>
                          <div className="font-medium">{sectionLabels[secKey]}</div>
                          <div className="text-xs text-sumi">{sectionCorrect}/{sectionTotal} benar</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${isWeak ? 'text-vermillion' : 'text-indigo'}`}>
                          {sectionAccuracy}%
                        </div>
                      </div>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,26,0.06)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${sectionAccuracy}%`,
                          background: isWeak ? '#e63946' : sectionColors[secKey]
                        }}
                      />
                    </div>
                    {isWeak && (
                      <div className="flex items-center gap-2 mt-2 text-xs text-vermillion">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Area ini perlu perhatian ekstra</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Radar Chart */}
          <div className="paper-card p-6 md:p-8 flex flex-col items-center justify-center">
            <h2 className="text-xl font-serif mb-2 w-full text-left">Peta Kemampuan</h2>
            <p className="text-xs text-sumi mb-6 w-full text-left">Visualisasi keseimbangan skill JLPT kamu</p>
            <div className="w-full h-64 md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#4a4a4a', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Akurasi" dataKey="A" stroke="#1d3557" fill="#1d3557" fillOpacity={0.5} />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weakness Detection */}
          <div className="paper-card p-6 md:p-8" style={{ borderLeft: '4px solid #e63946' }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-lg bg-red-50">
                <Target className="w-5 h-5 text-vermillion" />
              </div>
              <div>
                <h2 className="text-xl font-serif">Deteksi Titik Lemah</h2>
                <p className="text-sm text-sumi">Fokus belajar pada area berikut</p>
              </div>
            </div>

            {weaknesses.length > 0 ? (
              <div className="space-y-3">
                {weaknesses.map((weakness: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-red-50">
                    <AlertTriangle className="w-5 h-5 text-vermillion flex-shrink-0" />
                    <span className="font-medium text-sm">{weakness}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 rounded-lg bg-green-50 text-green-700 text-center">
                <CheckCircle2 className="w-6 h-6 mx-auto mb-2" />
                <p className="font-medium">Hebat! Tidak ada titik lemah signifikan.</p>
              </div>
            )}

            <div className="mt-6 p-4 rounded-lg bg-indigo/5 border border-indigo/10">
              <h3 className="text-sm font-semibold text-indigo mb-2">Rekomendasi Belajar</h3>
              <ul className="space-y-2 text-sm">
                {weaknesses.length > 0 ? (
                  <>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-indigo mt-0.5 flex-shrink-0" />
                      <span>Kerjakan latihan tambahan di section dengan akurasi &lt; 60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BookOpen className="w-4 h-4 text-indigo mt-0.5 flex-shrink-0" />
                      <span>Review materi grammar dan vocabulary yang sering keluar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-indigo mt-0.5 flex-shrink-0" />
                      <span>Ikuti timed drill 10 menit setiap hari untuk mempercepat</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-indigo mt-0.5 flex-shrink-0" />
                      <span>Pertahankan performa! Coba naik ke level berikutnya</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="w-4 h-4 text-indigo mt-0.5 flex-shrink-0" />
                      <span>Kerjakan try out dengan batas waktu lebih ketat</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Performance Trend (Recharts LineChart) */}
          <div className="paper-card p-6 md:p-8">
            <h2 className="text-xl font-serif mb-6">Tren Performa Historis</h2>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#4a4a4a' }} dy={10} />
                  <YAxis domain={[0, 180]} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#4a4a4a' }} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="skor" 
                    stroke="#1d3557" 
                    strokeWidth={3}
                    dot={{ fill: '#e63946', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#e63946', stroke: '#fff' }}
                    animationDuration={1500}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            {lineData.length > 1 && (
              <p className="text-center text-sm text-sumi mt-4">
                Skor {scoreIncrease >= 0 ? 'meningkat' : 'turun'} <span className={`font-semibold ${scoreIncrease >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {scoreIncrease >= 0 ? '+' : ''}{scoreIncrease} poin
                </span> sejak try out pertama.
              </p>
            )}
            {lineData.length <= 1 && (
              <p className="text-center text-sm text-sumi mt-4">
                Selesaikan lebih banyak Try Out untuk melihat tren peningkatanmu.
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button onClick={() => navigate('/review', { state: { result } })} className="btn-vermillion flex-1 flex items-center justify-center gap-2">
            <BookOpen className="w-5 h-5" />
            Review Soal & Penjelasan
          </button>
          <button onClick={() => navigate(`/mocktest/${result?.level || 'N5'}`)} className="btn-outline flex-1 flex items-center justify-center gap-2">
            <Zap className="w-5 h-5" />
            Coba Lagi
          </button>
          <button onClick={() => navigate('/dashboard')} className="btn-outline flex-1">
            Kembali ke Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}

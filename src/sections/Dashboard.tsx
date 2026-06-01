import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import { useTestHistory } from '../hooks/useTestHistory';
import {
  LayoutDashboard,
  ClipboardList,
  BookOpen,
  PenTool,
  BarChart3,
  Settings,
  Flame,
  Trophy,
  TrendingUp,
  AlertTriangle,
  Target,
  Clock,
  Star,
  Zap,
  LogOut,
  Loader2
} from 'lucide-react';

const sidebarItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', page: 'dashboard' as const },
  { icon: <ClipboardList className="w-5 h-5" />, label: 'Try Out', page: 'mocktest' as const },
  { icon: <BookOpen className="w-5 h-5" />, label: 'Kosakata', page: 'kosakata' as const },
  { icon: <PenTool className="w-5 h-5" />, label: 'Grammar', page: 'dashboard' as const },
  { icon: <BarChart3 className="w-5 h-5" />, label: 'Analisis', page: 'results' as const },
  { icon: <Settings className="w-5 h-5" />, label: 'Pengaturan', page: 'dashboard' as const },
];

const jlptLevels = [
  {
    level: 'N5',
    name: 'Beginner',
    description: 'Dasar-dasar bahasa Jepang',
    progress: 75,
    modules: [
      { name: 'Kanji', completed: 80, total: 100 },
      { name: 'Kosakata', completed: 600, total: 800 },
      { name: 'Grammar', completed: 90, total: 120 },
      { name: 'Reading', completed: 15, total: 20 },
    ],
    color: '#4ade80'
  },
  {
    level: 'N4',
    name: 'Elementary',
    description: 'Percakapan sehari-hari',
    progress: 45,
    modules: [
      { name: 'Kanji', completed: 150, total: 300 },
      { name: 'Kosakata', completed: 700, total: 1500 },
      { name: 'Grammar', completed: 80, total: 150 },
      { name: 'Reading', completed: 10, total: 25 },
    ],
    color: '#60a5fa'
  },
  {
    level: 'N3',
    name: 'Intermediate',
    description: 'Membaca teks kompleks',
    progress: 20,
    modules: [
      { name: 'Kanji', completed: 200, total: 650 },
      { name: 'Kosakata', completed: 800, total: 3750 },
      { name: 'Grammar', completed: 50, total: 200 },
      { name: 'Reading', completed: 5, total: 30 },
    ],
    color: '#fbbf24'
  },
  {
    level: 'N2',
    name: 'Upper-Int',
    description: 'Bahasa kerja & formal',
    progress: 5,
    modules: [
      { name: 'Kanji', completed: 100, total: 1000 },
      { name: 'Kosakata', completed: 500, total: 6000 },
      { name: 'Grammar', completed: 30, total: 250 },
      { name: 'Reading', completed: 2, total: 40 },
    ],
    color: '#f97316'
  },
  {
    level: 'N1',
    name: 'Advanced',
    description: 'Mahir berbahasa Jepang',
    progress: 0,
    modules: [
      { name: 'Kanji', completed: 0, total: 2000 },
      { name: 'Kosakata', completed: 0, total: 10000 },
      { name: 'Grammar', completed: 0, total: 300 },
      { name: 'Reading', completed: 0, total: 50 },
    ],
    color: '#e63946'
  },
];

// ===== SHOJI DECK COMPONENT =====
function ShojiDeck() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-serif">Pilih Level JLPT</h2>
        <span className="text-sm text-sumi">Klik kartu untuk melihat detail</span>
      </div>

      <div ref={containerRef} className="deck-container rounded-lg overflow-hidden">
        {jlptLevels.map((level, i) => (
          <div
            key={level.level}
            className={`deck-item ${i === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(i)}
          >
            <div className="flex flex-col h-full w-full">
              <div className="title-wrapper" style={{ color: i === activeIndex ? '#1a1a1a' : '#4a4a4a' }}>
                {level.level}
              </div>
              {i === activeIndex && (
                <div className="content-wrapper mt-4">
                  <p className="text-sm text-sumi mb-2">{level.description}</p>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span className="font-semibold">{level.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,26,0.1)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${level.progress}%`, background: level.color }}
                      />
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {level.modules.map((mod) => (
                      <div key={mod.name} className="flex justify-between text-sm">
                        <span className="text-sumi">{mod.name}</span>
                        <span className="font-medium">{mod.completed}/{mod.total}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); navigate(`/mocktest/${level.level}`); }}
                    className="btn-vermillion text-sm py-2 px-6 w-full"
                  >
                    Mulai Try Out {level.level}
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== STAT CARD =====
function StatCard({ icon, label, value, subtext, color }: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  subtext: string;
  color: string;
}) {
  return (
    <div className="paper-card p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg" style={{ background: `${color}15` }}>
          <span style={{ color }}>{icon}</span>
        </div>
        <TrendingUp className="w-4 h-4 text-sumi" />
      </div>
      <div className="text-2xl font-bold font-serif mb-1">{value}</div>
      <div className="text-sm font-medium mb-1">{label}</div>
      <div className="text-xs text-sumi">{subtext}</div>
    </div>
  );
}

// ===== SIDEBAR =====
function Sidebar({ activeItem }: { activeItem: string }) {
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOut);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/auth');
    } catch (error) {
      console.error('Gagal keluar:', error);
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r bg-canvas" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
      <div className="p-6 border-b" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <button onClick={() => navigate('/')} className="text-xs font-bold tracking-widest">
          NIHONGO
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.page === 'mocktest' ? '/mocktest/N5' : `/${item.page}`)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
              activeItem === item.label
                ? 'font-semibold bg-white shadow-sm'
                : 'text-sumi hover:bg-white/50'
            }`}
            style={activeItem === item.label ? { borderLeft: '3px solid #e63946' } : {}}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="p-4 border-t" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <button onClick={handleSignOut} className="w-full flex items-center gap-3 px-4 py-3 text-sm text-sumi hover:text-vermillion transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}

// ===== MAIN DASHBOARD =====
export default function Dashboard() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  const { history, fetchHistory, isLoading } = useTestHistory();

  useEffect(() => {
    fetchHistory();
  }, [fetchHistory]);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Peserta';

  // Compute stats from history
  const stats = useMemo(() => {
    if (history.length === 0) return { avgScore: 0, testsCount: 0, weaknesses: [] };
    
    let totalPerc = 0;
    let weaknessMap: Record<string, number> = {};

    history.forEach(test => {
      totalPerc += (test.total_score / 180) * 100;
      test.weaknesses?.forEach(w => {
        weaknessMap[w] = (weaknessMap[w] || 0) + 1;
      });
    });

    const avgScore = Math.round(totalPerc / history.length);
    // Find most frequent weakness
    let topWeakness = 'Belum Ada';
    let max = 0;
    for (const [w, count] of Object.entries(weaknessMap)) {
      if (count > max) {
        max = count;
        topWeakness = w.split('(')[0].trim(); // Get the section name mostly
      }
    }

    return {
      avgScore,
      testsCount: history.length,
      topWeakness
    };
  }, [history]);

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Desktop Sidebar */}
      <Sidebar activeItem="Dashboard" />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-64 bg-canvas border-r shadow-xl">
            <div className="p-6 border-b flex justify-between items-center" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
              <span className="text-xs font-bold tracking-widest">NIHONGO</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-sumi">&times;</button>
            </div>
            <nav className="p-4 space-y-1">
              {sidebarItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => { navigate(item.page === 'mocktest' ? '/mocktest/N5' : `/${item.page}`); setMobileMenuOpen(false); }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm text-left hover:bg-white/50 transition-colors"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-canvas/90 backdrop-blur-md border-b px-6 py-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <div className="flex items-center justify-between max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
              </button>
              <div>
                <h1 className="text-xl font-serif">Selamat datang, {displayName}!</h1>
                <p className="text-xs text-sumi">Lanjutkan perjalanan JLPT-mu hari ini</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                <Flame className="w-4 h-4 text-vermillion" />
                <span className="text-sm font-semibold">12 hari</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-vermillion/10 flex items-center justify-center">
                <span className="text-sm font-bold text-vermillion">{displayName[0].toUpperCase()}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto px-6 py-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <StatCard
              icon={<Target className="w-5 h-5" />}
              label="Rata-rata Skor"
              value={`${stats.avgScore}%`}
              subtext="Dari seluruh tes"
              color="#1d3557"
            />
            <StatCard
              icon={<ClipboardList className="w-5 h-5" />}
              label="Try Out Selesai"
              value={stats.testsCount}
              subtext="Total riwayat ujian"
              color="#e63946"
            />
            <StatCard
              icon={<Flame className="w-5 h-5" />}
              label="Streak Belajar"
              value="12 hari"
              subtext="Terus pertahankan!"
              color="#f59e0b"
            />
            <StatCard
              icon={<AlertTriangle className="w-5 h-5" />}
              label="Titik Lemah"
              value={stats.topWeakness || 'Belum Ada'}
              subtext="Berdasarkan histori"
              color="#ef4444"
            />
          </div>

          {/* Shoji Deck - Level Selector */}
          <ShojiDeck />

          {/* Recent Tests + Weakness */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Tests */}
            <div className="paper-card p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-serif flex items-center gap-2">
                  Riwayat Try Out
                  {isLoading && <Loader2 className="w-4 h-4 animate-spin text-sumi" />}
                </h3>
                <button onClick={() => navigate('/results')} className="text-sm text-vermillion hover:underline">Lihat Semua</button>
              </div>
              <div className="space-y-4 flex-1">
                {history.length === 0 && !isLoading && (
                  <div className="text-center py-8 text-sumi text-sm border-2 border-dashed border-gray-200 rounded-lg">
                    Belum ada riwayat ujian. Mulai Try Out pertama kamu!
                  </div>
                )}
                {history.slice(0, 5).map((test) => {
                  const passingScore = test.level === 'N5' ? 80 : test.level === 'N4' ? 90 : 95;
                  const passed = test.total_score >= passingScore;

                  return (
                    <div key={test.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-white/50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold ${
                          passed ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {test.level}
                        </div>
                        <div>
                          <div className="text-sm font-medium capitalize">Mode {test.mode}</div>
                          <div className="text-xs text-sumi">
                            {new Date(test.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold">{test.total_score}/180</div>
                        <div className={`text-xs ${passed ? 'text-green-600' : 'text-red-600'}`}>
                          {passed ? 'Lulus' : 'Belum Lulus'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Simulated Dynamic Weakness Analysis */}
            <div className="paper-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-serif">Analisis Topik</h3>
                <Zap className="w-5 h-5 text-vermillion" />
              </div>
              <div className="space-y-5">
                {[
                  { area: 'Grammar N4 (たら/なら)', accuracy: 45, total: 20 },
                  { area: 'Kanji N4 (Transitive/Intransitive)', accuracy: 52, total: 15 },
                  { area: 'Listening - Point Comprehension', accuracy: 60, total: 12 },
                  { area: 'Vocabulary - Synonyms', accuracy: 68, total: 18 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium">{item.area}</span>
                      <span className="text-sumi">{item.accuracy}% benar</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(26,26,26,0.08)' }}>
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${item.accuracy}%`,
                          background: item.accuracy < 50 ? '#e63946' : item.accuracy < 70 ? '#f59e0b' : '#4ade80'
                        }}
                      />
                    </div>
                    <div className="text-xs text-sumi mt-1">{item.total} soal dikerjakan</div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('/review')}
                className="mt-6 w-full py-2.5 text-sm border rounded-lg hover:bg-ink hover:text-canvas transition-all"
                style={{ borderColor: 'rgba(26,26,26,0.2)' }}
              >
                Lihat Rekomendasi Belajar
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Clock className="w-5 h-5" />, label: 'Timed Drill', desc: '10 menit' },
              { icon: <Star className="w-5 h-5" />, label: 'Review Salah', desc: '23 soal' },
              { icon: <Trophy className="w-5 h-5" />, label: 'Leaderboard', desc: 'Rank #42' },
              { icon: <BookOpen className="w-5 h-5" />, label: 'Flashcards', desc: '150 kartu' },
            ].map((action, i) => (
              <button key={i} className="paper-card p-4 text-left hover:scale-[1.02] transition-transform">
                <div className="text-sumi mb-2">{action.icon}</div>
                <div className="text-sm font-medium">{action.label}</div>
                <div className="text-xs text-sumi">{action.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

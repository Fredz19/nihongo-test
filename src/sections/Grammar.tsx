import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar';
import { 
  Search, 
  LayoutList, 
  LayoutGrid, 
  CheckCircle2, 
  CircleDashed,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  PenTool,
  BarChart3,
  Settings,
  Compass,
  Activity,
  Flame,
  HelpCircle,
  Clock,
  Link as LinkIcon,
  Sparkles,
  Layers as LayersIcon,
  Eye,
  EyeOff,
  BookOpenCheck
} from 'lucide-react';
import { useGrammarProgress } from '../hooks/useGrammarProgress';
import { grammarN5Data } from '../data/grammarN5';
import { grammarN4Data } from '../data/grammarN4';
import GrammarPatternCard from '../components/grammar/GrammarPatternCard';
import GrammarFlashcard from '../components/grammar/GrammarFlashcard';


const sidebarItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', page: 'dashboard' as const },
  { icon: <ClipboardList className="w-5 h-5" />, label: 'Try Out', page: 'mocktest' as const },
  { icon: <BookOpen className="w-5 h-5" />, label: 'Kosakata', page: 'kosakata' as const },
  { icon: <PenTool className="w-5 h-5" />, label: 'Grammar', page: 'grammar' as const },
  { icon: <BarChart3 className="w-5 h-5" />, label: 'Analisis', page: 'results' as const },
  { icon: <Settings className="w-5 h-5" />, label: 'Pengaturan', page: 'dashboard' as const },
];

const categoriesConfig = [
  { id: 'all', name: 'Semua', icon: LayersIcon, color: 'bg-ink text-white border-ink', badgeColor: 'bg-white/20 text-white' },
  { id: 'partikel', name: 'Partikel Dasar', icon: Compass, color: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100', badgeColor: 'bg-indigo-100 text-indigo-800' },
  { id: 'kopula', name: 'Kopula & Keadaan', icon: Activity, color: 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100', badgeColor: 'bg-slate-100 text-slate-800' },
  { id: 'verba', name: 'Bentuk Kata Kerja', icon: Flame, color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100', badgeColor: 'bg-blue-100 text-blue-800' },
  { id: 'conditional', name: 'Conditional', icon: HelpCircle, color: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100', badgeColor: 'bg-amber-100 text-amber-800' },
  { id: 'temporal', name: 'Ekspresi Waktu', icon: Clock, color: 'bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100', badgeColor: 'bg-teal-100 text-teal-800' },
  { id: 'conjunction', name: 'Kata Sambung', icon: LinkIcon, color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100', badgeColor: 'bg-purple-100 text-purple-800' },
  { id: 'advanced', name: 'Pola Lanjutan', icon: Sparkles, color: 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100', badgeColor: 'bg-rose-100 text-rose-800' }
];

export default function Grammar() {
  const navigate = useNavigate();
  const [activeLevel, setActiveLevel] = useState<'N5' | 'N4'>('N5');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Expanded card state (accordion view in list mode)
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // Global visibility toggles
  const [showFurigana, setShowFurigana] = useState(true);
  const [showRomaji, setShowRomaji] = useState(false);

  // Hook for Supabase/LocalStorage progress
  const { progressData, updateStatus, getProgress, isLoading } = useGrammarProgress();

  // Load the static patterns based on selected level
  const basePatterns = useMemo(() => {
    return activeLevel === 'N5' ? grammarN5Data : grammarN4Data;
  }, [activeLevel]);

  // Apply search query filter
  const filteredPatterns = useMemo(() => {
    return basePatterns.filter(p => {
      const q = searchQuery.toLowerCase().trim();
      if (!q) return true;
      return (
        p.pattern.toLowerCase().includes(q) ||
        p.reading.toLowerCase().includes(q) ||
        p.meaning.toLowerCase().includes(q) ||
        p.structure.toLowerCase().includes(q) ||
        p.notes.toLowerCase().includes(q) ||
        p.tags.some(tag => tag.toLowerCase().includes(q))
      );
    });
  }, [basePatterns, searchQuery]);

  // Compute counts for category filters based on current search and level
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'Semua': filteredPatterns.length,
      'Partikel Dasar': 0,
      'Kopula & Keadaan': 0,
      'Bentuk Kata Kerja': 0,
      'Conditional': 0,
      'Ekspresi Waktu': 0,
      'Kata Sambung': 0,
      'Pola Lanjutan': 0
    };

    filteredPatterns.forEach(p => {
      if (counts[p.category] !== undefined) {
        counts[p.category]++;
      }
    });

    return counts;
  }, [filteredPatterns]);

  // Apply category filter for current displays
  const displayPatterns = useMemo(() => {
    if (selectedCategory === 'Semua') return filteredPatterns;
    return filteredPatterns.filter(p => p.category === selectedCategory);
  }, [filteredPatterns, selectedCategory]);

  // Compute overall progress stats for the selected level
  const stats = useMemo(() => {
    const total = basePatterns.length;
    let newCount = 0;
    let learningCount = 0;
    let masteredCount = 0;

    basePatterns.forEach(p => {
      const prog = getProgress(p.id);
      const status = prog ? prog.status : 'new';
      if (status === 'mastered') masteredCount++;
      else if (status === 'learning') learningCount++;
      else newCount++;
    });

    const progressPercent = total > 0 ? Math.round((masteredCount / total) * 100) : 0;
    const learningPercent = total > 0 ? Math.round((learningCount / total) * 100) : 0;

    return {
      total,
      newCount,
      learningCount,
      masteredCount,
      progressPercent,
      learningPercent
    };
  }, [basePatterns, progressData, getProgress]);

  // Reset category filters and expanded card on level change
  useEffect(() => {
    setSelectedCategory('Semua');
    setExpandedCardId(null);
  }, [activeLevel]);

  // Handle accordion toggle
  const handleToggleExpand = (id: string) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Desktop Sidebar */}
      <AppSidebar activeItem="Grammar" />

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

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        {/* Page Header */}
        <header className="flex-none sticky top-0 z-30 bg-canvas/90 backdrop-blur-md border-b px-6 py-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2">
                <LayoutDashboard className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-serif">Tata Bahasa (Grammar)</h1>
                <p className="text-xs text-sumi">Pelajari pola tata bahasa Jepang level JLPT N5 dan N4</p>
              </div>
            </div>
            
            {/* Level Selector */}
            <div className="flex items-center gap-2">
              <div className="flex bg-white/50 p-1 rounded-lg border border-gray-200/60 shadow-sm">
                {(['N5', 'N4'] as const).map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setActiveLevel(lvl)}
                    className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                      activeLevel === lvl 
                      ? 'bg-ink text-white shadow-sm' 
                      : 'text-sumi hover:bg-white/70'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Toolbar */}
        <div className="flex-none px-6 py-4 border-b bg-white/30" style={{ borderColor: 'rgba(26,26,26,0.05)' }}>
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-sumi" />
              <input 
                type="text" 
                placeholder="Cari pola, arti, romaji..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-vermillion/20 transition-all"
                style={{ borderColor: 'rgba(26,26,26,0.1)' }}
              />
            </div>
            
            {/* Global Visibility & Layout Toggles */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-end flex-wrap">
              {/* Furigana toggle */}
              <button 
                onClick={() => setShowFurigana(!showFurigana)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-lg transition-all ${
                  showFurigana 
                  ? 'bg-ink/5 text-ink border-gray-300' 
                  : 'bg-white text-sumi border-gray-200'
                }`}
                title="Tampilkan/Sembunyikan Furigana"
              >
                {showFurigana ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                Furigana
              </button>

              {/* Romaji toggle */}
              <button 
                onClick={() => setShowRomaji(!showRomaji)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border rounded-lg transition-all ${
                  showRomaji 
                  ? 'bg-ink/5 text-ink border-gray-300' 
                  : 'bg-white text-sumi border-gray-200'
                }`}
                title="Tampilkan/Sembunyikan Romaji"
              >
                {showRomaji ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                Romaji
              </button>
              
              {/* List vs Flashcard Mode toggle */}
              <div className="flex bg-white border rounded-lg overflow-hidden border-gray-200 shadow-sm shrink-0">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-ink text-white' : 'text-sumi hover:bg-gray-50'}`}
                  title="Tampilan Daftar"
                >
                  <LayoutList className="w-4.5 h-4.5" />
                </button>
                <button 
                  onClick={() => setViewMode('flashcard')}
                  className={`p-2 transition-colors ${viewMode === 'flashcard' ? 'bg-ink text-white' : 'text-sumi hover:bg-gray-50'}`}
                  title="Tampilan Flashcard"
                >
                  <LayoutGrid className="w-4.5 h-4.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global Progress & Stats bar */}
        <div className="flex-none px-6 py-3.5 bg-canvas/30 border-b border-gray-200/40">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between text-xs">
            {/* Interactive Stats Bar */}
            <div className="w-full md:w-1/2 flex items-center gap-3">
              <span className="font-semibold text-ink shrink-0 font-serif">Progress {activeLevel}</span>
              <div className="flex-1 h-3 bg-ink/5 rounded-full overflow-hidden flex border border-gray-100">
                <div 
                  className="h-full bg-green-500 transition-all duration-500 rounded-l"
                  style={{ width: `${stats.progressPercent}%` }}
                  title={`${stats.masteredCount} dipahami (${stats.progressPercent}%)`}
                />
                <div 
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${stats.learningPercent}%` }}
                  title={`${stats.learningCount} sedang dipelajari (${stats.learningPercent}%)`}
                />
              </div>
              <span className="font-mono font-bold text-ink/80 text-[11px] shrink-0">
                {stats.masteredCount}/{stats.total} Paham
              </span>
            </div>

            {/* Sub-counts details */}
            <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-wider font-mono text-sumi">
              <span className="flex items-center gap-1.5"><BookOpenCheck className="w-3.5 h-3.5 text-sumi" /> Total: {stats.total}</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Paham: {stats.masteredCount}</span>
              <span className="flex items-center gap-1.5"><CircleDashed className="w-3.5 h-3.5 text-blue-500" /> Belajar: {stats.learningCount}</span>
              <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span> Belum: {stats.newCount}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex-none px-6 py-2.5 bg-white/10 border-b border-gray-200/50 overflow-x-auto scrollbar-none">
          <div className="max-w-5xl mx-auto flex items-center gap-2 py-0.5">
            {categoriesConfig.map(cat => {
              const isActive = selectedCategory === cat.name;
              const Icon = cat.icon;
              const count = categoryCounts[cat.name] ?? 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all whitespace-nowrap shadow-sm ${
                    isActive
                      ? `${cat.color} border-current scale-102`
                      : 'bg-white text-sumi border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'animate-pulse' : 'opacity-65'}`} />
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                    isActive 
                      ? cat.badgeColor
                      : 'bg-gray-100 text-sumi border border-gray-200/20 font-mono'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Patterns List / Flashcards Render */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth bg-canvas/30">
          <div className="max-w-5xl mx-auto pb-16">
            {isLoading ? (
              <div className="text-center py-20 text-sumi flex flex-col items-center">
                <CircleDashed className="w-12 h-12 mb-4 animate-spin opacity-40 text-vermillion" />
                <p className="font-serif text-ink">Mengambil progress grammar...</p>
              </div>
            ) : displayPatterns.length === 0 ? (
              <div className="text-center py-20 text-sumi border border-dashed border-gray-200 rounded-2xl bg-white/50">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-25 text-sumi" />
                <p className="font-serif text-lg text-ink font-semibold">Pola grammar tidak ditemukan</p>
                <p className="text-xs text-sumi mt-1">Coba sesuaikan kata kunci pencarian atau kategori Anda.</p>
              </div>
            ) : viewMode === 'list' ? (
              // LIST VIEW
              <div className="space-y-4">
                {displayPatterns.map(pattern => {
                  const prog = getProgress(pattern.id);
                  const status = prog ? prog.status : 'new';
                  return (
                    <GrammarPatternCard
                      key={pattern.id}
                      pattern={pattern}
                      status={status}
                      onStatusChange={updateStatus}
                      isExpanded={expandedCardId === pattern.id}
                      onToggleExpand={() => handleToggleExpand(pattern.id)}
                      showFurigana={showFurigana}
                      showRomaji={showRomaji}
                    />
                  );
                })}
              </div>
            ) : (
              // FLASHCARD GRID VIEW
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayPatterns.map(pattern => {
                  const prog = getProgress(pattern.id);
                  const status = prog ? prog.status : 'new';
                  return (
                    <GrammarFlashcard
                      key={pattern.id}
                      pattern={pattern}
                      status={status}
                      onStatusChange={updateStatus}
                      showFurigana={showFurigana}
                      showRomaji={showRomaji}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </main>
      
      {/* 3D Flip Custom CSS */}
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        .scale-102 { transform: scale(1.02); }
      `}</style>
    </div>
  );
}

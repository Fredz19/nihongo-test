import { useState, useMemo, useEffect } from 'react';
import AppSidebar from '../components/AppSidebar';
import { 
  Search, 
  Filter, 
  LayoutList, 
  LayoutGrid, 
  Volume2, 
  CheckCircle2, 
  CircleDashed,
  LayoutDashboard,
  BookOpen,
  ClipboardList,
  PenTool,
  BarChart3,
  Settings,
  RotateCcw,
  Sparkles, 
  Heart, 
  Box, 
  Compass, 
  MessageSquare, 
  HelpCircle,
  Layers
} from 'lucide-react';
import { useVocabProgress } from '../hooks/useVocabProgress';
import { playJapaneseAudio, preloadAudioBatch } from '../lib/audioService';
import { fetchVocabByLevel } from '../lib/vocabService';
import type { JLPTLevel, Vocabulary } from '../types/vocabulary';

// Configuration for word categories with their corresponding colors and icons
const categoriesConfig = [
  { 
    id: 'all', 
    name: 'Semua', 
    icon: Layers, 
    color: 'bg-ink text-white border-ink', 
    badgeColor: 'bg-white/20 text-white' 
  },
  { 
    id: 'noun', 
    name: 'Kata Benda', 
    icon: Box, 
    color: 'bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100', 
    badgeColor: 'bg-indigo-100 text-indigo-800' 
  },
  { 
    id: 'verb', 
    name: 'Kata Kerja', 
    icon: Sparkles, 
    color: 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100', 
    badgeColor: 'bg-blue-100 text-blue-800' 
  },
  { 
    id: 'adjective', 
    name: 'Kata Sifat', 
    icon: Heart, 
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100', 
    badgeColor: 'bg-emerald-100 text-emerald-800' 
  },
  { 
    id: 'adverb', 
    name: 'Kata Keterangan', 
    icon: Compass, 
    color: 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100', 
    badgeColor: 'bg-amber-100 text-amber-800' 
  },
  { 
    id: 'expression', 
    name: 'Ungkapan', 
    icon: MessageSquare, 
    color: 'bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100', 
    badgeColor: 'bg-purple-100 text-purple-800' 
  },
  { 
    id: 'other', 
    name: 'Lainnya', 
    icon: HelpCircle, 
    color: 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100', 
    badgeColor: 'bg-rose-100 text-rose-800' 
  }
];

// Smart classifier helper to categorize words into dynamic Indonesian groups
const getVocabCategory = (vocab: Vocabulary): string => {
  const type = (vocab.type || '').toLowerCase();
  const meaning = (vocab.meaning || '').toLowerCase();

  // 1. Ungkapan (Expressions / Phrases / Conversational formulas)
  if (
    type.includes('expression') || 
    type.includes('phrase') || 
    type.includes('ungkapan') ||
    meaning.includes('hello') ||
    meaning.includes('goodbye') ||
    meaning.includes('thank you') ||
    meaning.includes('sorry') ||
    meaning.includes('welcome')
  ) {
    return 'Ungkapan';
  }

  // 2. Kata Kerja (Verbs)
  if (
    type.includes('verb') || 
    meaning.startsWith('to ') || 
    meaning.startsWith('to-') ||
    meaning.includes('to drink') ||
    meaning.includes('to eat') ||
    meaning.includes('to go') ||
    meaning.includes('to come') ||
    meaning.includes('to do') ||
    meaning.includes('to speak') ||
    meaning.includes('to write') ||
    meaning.includes('to read') ||
    // Common Indonesian verb meanings
    ['makan', 'minum', 'pergi', 'datang', 'belajar', 'bermain', 'membaca', 'menulis', 'mendengar', 'bertanya', 'berbicara', 'melihat', 'menonton', 'mandi', 'tidur', 'berjalan', 'berlari', 'melakukan'].some(v => meaning.includes(v))
  ) {
    return 'Kata Kerja';
  }

  // 3. Kata Sifat (Adjectives)
  if (
    type.includes('adjective') || 
    type.includes('sifat') || 
    type.includes('adj')
  ) {
    return 'Kata Sifat';
  }

  // Common N5/N4 adjectives list based on English meaning keywords
  const commonAdjectives = [
    'hot', 'cold', 'big', 'small', 'new', 'old', 'good', 'bad', 'expensive', 'cheap', 'near', 'far',
    'delicious', 'tasty', 'difficult', 'easy', 'heavy', 'light', 'wide', 'narrow', 'busy', 'dirty',
    'cute', 'pretty', 'quiet', 'famous', 'convenient', 'useful', 'kind', 'warm', 'cool', 'spicy',
    'sweet', 'painful', 'unpleasant', 'boring', 'noisy', 'annoying', 'splendid', 'strong', 'durable',
    'luke warm', 'yellow', 'brown', 'red', 'black', 'white', 'blue', 'green', 'tall', 'short', 'low',
    'young', 'thick', 'thin', 'weak', 'besar', 'kecil', 'baru', 'lama', 'tinggi', 'rendah', 'mahal',
    'murah', 'enak', 'lezat', 'sulit', 'mudah', 'berat', 'ringan', 'luas', 'sempit', 'sibuk', 'kotor',
    'lucu', 'cantik', 'tenang', 'terkenal', 'praktis', 'berguna', 'baik', 'hangat', 'sejuk', 'pedas',
    'manis', 'sakit', 'membosankan', 'bising', 'ramai', 'kuat', 'muda', 'tebal', 'tipis', 'lemah'
  ];
  const words = meaning.split(/[\s,()!?.]+/);
  if (words.some(w => commonAdjectives.includes(w)) && !type.includes('noun')) {
    return 'Kata Sifat';
  }

  // 4. Kata Keterangan (Adverbs)
  if (
    type.includes('adverb') || 
    type.includes('keterangan') || 
    type.includes('adv') ||
    ['sometimes', 'always', 'often', 'gradually', 'probably', 'very', 'sometime', 'really', 'well', 'especially', 'kadangkala', 'selalu', 'sering', 'mungkin', 'sangat'].some(w => meaning.includes(w))
  ) {
    return 'Kata Keterangan';
  }

  // 5. Kata Benda (Nouns)
  if (
    type.includes('noun') || 
    type.includes('benda') || 
    type.includes('temporal') || 
    type.includes('location') || 
    type.includes('proper')
  ) {
    return 'Kata Benda';
  }

  // Default to Kata Benda for nouns & other entities
  return 'Kata Benda';
};

// Reusing Sidebar items from Dashboard
const sidebarItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', page: 'dashboard' as const },
  { icon: <ClipboardList className="w-5 h-5" />, label: 'Try Out', page: 'mocktest' as const },
  { icon: <BookOpen className="w-5 h-5" />, label: 'Kosakata', page: 'kosakata' as const },
  { icon: <PenTool className="w-5 h-5" />, label: 'Grammar', page: 'grammar' as const },
  { icon: <BarChart3 className="w-5 h-5" />, label: 'Analisis', page: 'results' as const },
  { icon: <Settings className="w-5 h-5" />, label: 'Pengaturan', page: 'dashboard' as const },
];

export default function Kosakata() {
  const [activeLevel, setActiveLevel] = useState<JLPTLevel>('N5');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'flashcard'>('list');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});
  
  // New States for Grouping and Categories
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [isGroupedView, setIsGroupedView] = useState<boolean>(true);
  
  const [vocabData, setVocabData] = useState<Vocabulary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { updateStatus, getProgress } = useVocabProgress();

  useEffect(() => {
    let mounted = true;
    const loadData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchVocabByLevel(activeLevel);
        if (mounted) {
          setVocabData(data);
          // Preload audio in background so speaker clicks are instant
          preloadAudioBatch(data.map(v => ({ id: v.id })));
        }
      } catch (error) {
        console.error("Failed to load vocabulary:", error);
      } finally {
        if (mounted) setIsLoading(false);
      }
    };
    
    loadData();
    return () => { mounted = false; };
  }, [activeLevel]);

  // Reset category selection when level changes to avoid showing empty categories
  useEffect(() => {
    setSelectedCategory('Semua');
  }, [activeLevel]);

  // 1. Get filtered vocabulary based on search query and level (no category filter yet)
  const baseFilteredVocab = useMemo(() => {
    return vocabData.filter(v => {
      const matchLevel = v.level === activeLevel;
      const q = searchQuery.toLowerCase();
      return matchLevel && (
        q === '' || 
        (v.kanji?.toLowerCase().includes(q)) || 
        v.kana.toLowerCase().includes(q) || 
        v.romaji.toLowerCase().includes(q) || 
        v.meaning.toLowerCase().includes(q)
      );
    });
  }, [activeLevel, searchQuery, vocabData]);

  // 2. Map baseFilteredVocab to include detected categories
  const vocabWithCategories = useMemo(() => {
    return baseFilteredVocab.map(v => ({
      ...v,
      detectedCategory: getVocabCategory(v)
    }));
  }, [baseFilteredVocab]);

  // 3. Compute count for each category dynamically based on level & search query
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'Semua': vocabWithCategories.length,
      'Kata Benda': 0,
      'Kata Kerja': 0,
      'Kata Sifat': 0,
      'Kata Keterangan': 0,
      'Ungkapan': 0,
      'Lainnya': 0
    };
    
    vocabWithCategories.forEach(v => {
      const cat = v.detectedCategory;
      if (counts[cat] !== undefined) {
        counts[cat]++;
      } else {
        counts['Lainnya']++;
      }
    });
    
    return counts;
  }, [vocabWithCategories]);

  // 4. Apply selected category filter to get final list of items to display
  const displayVocab = useMemo(() => {
    if (selectedCategory === 'Semua') {
      return vocabWithCategories;
    }
    return vocabWithCategories.filter(v => v.detectedCategory === selectedCategory);
  }, [selectedCategory, vocabWithCategories]);

  // 5. Group displayVocab by category if Grouped View is active
  const groupedVocab = useMemo(() => {
    const groups: Record<string, typeof vocabWithCategories> = {
      'Kata Benda': [],
      'Kata Kerja': [],
      'Kata Sifat': [],
      'Kata Keterangan': [],
      'Ungkapan': [],
      'Lainnya': []
    };
    
    displayVocab.forEach(v => {
      const cat = v.detectedCategory;
      if (groups[cat] !== undefined) {
        groups[cat].push(v);
      } else {
        groups['Lainnya'].push(v);
      }
    });

    // Remove empty categories to keep the UI clean
    return Object.fromEntries(
      Object.entries(groups).filter(([_, items]) => items.length > 0)
    );
  }, [displayVocab]);

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const speak = async (id: string, kana: string) => {
    await playJapaneseAudio(id, kana);
  };

  // Modular rendering for a Single List Item (List View)
  const renderVocabListItem = (vocab: Vocabulary & { detectedCategory?: string }) => {
    const status = getProgress(vocab.id)?.status;
    const catConfig = categoriesConfig.find(c => c.name === (vocab.detectedCategory || getVocabCategory(vocab)));
    const catColor = catConfig?.color || 'bg-gray-100 text-sumi';

    return (
      <div 
        key={vocab.id} 
        className="paper-card p-4 hover:shadow-md transition-all duration-200 group flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between border border-transparent hover:border-gray-100"
      >
        <div className="flex-1 min-w-0 flex gap-4">
          <div className="w-20 sm:w-24 flex-none text-center flex flex-col justify-center border-r pr-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
            <div className="text-2xl sm:text-3xl font-serif text-ink tracking-tight">{vocab.kanji || vocab.kana}</div>
            {vocab.kanji && <div className="text-xs text-sumi mt-1 tracking-wide">{vocab.kana}</div>}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-lg font-semibold text-ink leading-tight">{vocab.meaning}</span>
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${catColor}`}>
                {vocab.detectedCategory || getVocabCategory(vocab)}
              </span>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 bg-gray-100/70 text-sumi rounded-full border border-gray-200/50">
                {vocab.type}
              </span>
            </div>
            <div className="text-sm text-sumi mb-2 font-mono tracking-wide">{vocab.romaji}</div>
            {vocab.examples.length > 0 && (
              <div className="text-xs border-l-2 border-vermillion/30 pl-3 py-1 bg-vermillion/5 rounded-r-lg">
                <div className="font-semibold text-ink mb-0.5">{vocab.examples[0].japanese}</div>
                <div className="text-sumi">{vocab.examples[0].translation}</div>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <button 
            onClick={() => speak(vocab.id, vocab.kana)}
            className="p-2 text-sumi hover:text-vermillion hover:bg-vermillion/10 rounded-full transition-colors shrink-0"
            title="Dengarkan Pengucapan"
          >
            <Volume2 className="w-5 h-5" />
          </button>
          <div className="flex flex-col gap-1 w-24">
            <button 
              onClick={() => updateStatus(vocab.id, status === 'learning' ? 'new' : 'learning')}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all ${
                status === 'learning' 
                ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                : 'bg-gray-50 text-sumi border border-gray-100 hover:bg-gray-100'
              }`}
            >
              <CircleDashed className="w-3 h-3" />
              Belajar
            </button>
            <button 
              onClick={() => updateStatus(vocab.id, status === 'mastered' ? 'new' : 'mastered')}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all ${
                status === 'mastered' 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-gray-50 text-sumi border border-gray-100 hover:bg-gray-100'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              Hafal
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Modular rendering for a Single Flashcard Card (Flashcard View)
  const renderVocabCardItem = (vocab: Vocabulary & { detectedCategory?: string }) => {
    const isFlipped = flippedCards[vocab.id] || false;
    const status = getProgress(vocab.id)?.status;
    const catConfig = categoriesConfig.find(c => c.name === (vocab.detectedCategory || getVocabCategory(vocab)));
    const catColor = catConfig?.color || 'bg-gray-100 text-sumi';
    
    return (
      <div key={vocab.id} className="h-64 relative perspective-1000 group">
        <div 
          className={`w-full h-full transition-all duration-500 transform-style-preserve-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => toggleFlip(vocab.id)}
        >
          {/* Front of Card */}
          <div className="absolute inset-0 backface-hidden paper-card p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md border border-gray-100">
            <div className="absolute top-4 right-4 flex gap-2">
              {status === 'mastered' && <CheckCircle2 className="w-5 h-5 text-green-500" />}
              {status === 'learning' && <CircleDashed className="w-5 h-5 text-blue-500" />}
            </div>
            <div className="absolute top-4 left-4 flex flex-col gap-1 items-start">
              <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${catColor}`}>
                {vocab.detectedCategory || getVocabCategory(vocab)}
              </span>
            </div>
            
            <h2 className="text-5xl font-serif mb-2 mt-4 text-ink tracking-tight">{vocab.kanji || vocab.kana}</h2>
            {vocab.kanji && <p className="text-lg text-sumi font-sans">{vocab.kana}</p>}
            
            <div className="absolute bottom-4 flex items-center text-[10px] text-sumi gap-1 font-medium opacity-65 group-hover:opacity-100 transition-opacity">
              <RotateCcw className="w-3 h-3" /> Klik untuk membalik
            </div>
          </div>

          {/* Back of Card */}
          <div className="absolute inset-0 backface-hidden paper-card p-6 rotate-y-180 flex flex-col justify-between shadow-md border-vermillion/20 border-2">
            <div className="overflow-y-auto max-h-[160px] pr-1">
              <div className="flex justify-between items-start gap-2 mb-1">
                <h3 className="text-lg font-bold text-ink leading-tight">{vocab.meaning}</h3>
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-gray-100 text-sumi rounded-full shrink-0 font-medium">
                  {vocab.type}
                </span>
              </div>
              <p className="text-xs text-sumi mb-3 font-mono">{vocab.romaji}</p>
              
              {vocab.examples.length > 0 && (
                <div className="text-[11px] bg-gray-50 p-2.5 rounded-lg text-left border border-gray-100">
                  <div className="font-semibold text-ink mb-0.5">{vocab.examples[0].japanese}</div>
                  <div className="text-sumi">{vocab.examples[0].translation}</div>
                </div>
              )}
            </div>
            
            <div className="flex gap-2 mt-3 pt-2 border-t border-gray-100" onClick={(e) => e.stopPropagation()}>
              <button 
                onClick={() => speak(vocab.id, vocab.kana)}
                className="p-2 text-sumi hover:bg-gray-100 rounded-lg transition-colors flex-none"
                title="Dengarkan Pengucapan"
              >
                <Volume2 className="w-5 h-5" />
              </button>
              <button 
                onClick={() => updateStatus(vocab.id, 'learning')}
                className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${status === 'learning' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 hover:bg-gray-200 text-sumi'}`}
              >
                Belajar
              </button>
              <button 
                onClick={() => updateStatus(vocab.id, 'mastered')}
                className={`flex-1 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-colors ${status === 'mastered' ? 'bg-green-100 text-green-700' : 'bg-gray-100 hover:bg-gray-200 text-sumi'}`}
              >
                Hafal
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-canvas">
      <AppSidebar activeItem="Kosakata" />

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
                  onClick={() => { window.location.href = item.page === 'mocktest' ? '/mocktest/N5' : `/${item.page}`; setMobileMenuOpen(false); }}
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
      <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="flex-none sticky top-0 z-30 bg-canvas/90 backdrop-blur-md border-b px-6 py-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-4">
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden p-2 -ml-2">
                <LayoutDashboard className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-serif">Kosakata (Vocabulary)</h1>
                <p className="text-xs text-sumi">Belajar kosakata JLPT standar dengan efisien</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex bg-white/50 p-1 rounded-lg border" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
                {(['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setActiveLevel(lvl)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      activeLevel === lvl 
                      ? 'bg-ink text-white shadow-sm' 
                      : 'text-sumi hover:bg-white'
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
            <div className="relative w-full sm:w-96">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-sumi" />
              <input 
                type="text" 
                placeholder="Cari kanji, romaji, atau arti..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-vermillion/20 transition-all"
                style={{ borderColor: 'rgba(26,26,26,0.1)' }}
              />
            </div>
            
            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              {/* Grouping Toggle Switch */}
              {selectedCategory === 'Semua' && (
                <button 
                  onClick={() => setIsGroupedView(!isGroupedView)}
                  className={`flex items-center gap-2 px-3 py-2 text-sm border rounded-lg transition-all ${
                    isGroupedView 
                    ? 'bg-ink text-white border-ink shadow-sm' 
                    : 'text-sumi bg-white hover:bg-gray-50 border-gray-200'
                  }`}
                  title="Kelompokkan menurut Jenis Kata"
                >
                  <Filter className="w-4 h-4" />
                  <span className="hidden sm:inline">Kelompokkan</span>
                </button>
              )}
              
              <div className="flex bg-white border rounded-lg overflow-hidden border-gray-200">
                <button 
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${viewMode === 'list' ? 'bg-ink text-white' : 'text-sumi hover:bg-gray-50'}`}
                  title="Tampilan Daftar"
                >
                  <LayoutList className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setViewMode('flashcard')}
                  className={`p-2 transition-colors ${viewMode === 'flashcard' ? 'bg-ink text-white' : 'text-sumi hover:bg-gray-50'}`}
                  title="Tampilan Flashcard"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex-none px-6 py-2.5 bg-white/10 border-b border-gray-200/50 overflow-x-auto scrollbar-none">
          <div className="max-w-5xl mx-auto flex items-center gap-2 py-0.5">
            {categoriesConfig.map(cat => {
              const isActive = selectedCategory === cat.name;
              const Icon = cat.icon;
              const count = categoryCounts[cat.name] || 0;
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all whitespace-nowrap ${
                    isActive
                      ? `${cat.color} border-current shadow-sm scale-102`
                      : 'bg-white text-sumi border-gray-200/60 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'animate-pulse' : 'opacity-65'}`} />
                  <span>{cat.name}</span>
                  <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold ${
                    isActive 
                      ? cat.badgeColor
                      : 'bg-gray-100 text-sumi border border-gray-200/20'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 scroll-smooth bg-canvas/30">
          <div className="max-w-5xl mx-auto">
            {isLoading ? (
              <div className="text-center py-20 text-sumi flex flex-col items-center">
                <CircleDashed className="w-12 h-12 mb-4 animate-spin opacity-40 text-vermillion" />
                <p className="font-serif">Mengambil data kosakata dari server...</p>
              </div>
            ) : displayVocab.length === 0 ? (
              <div className="text-center py-20 text-sumi border border-dashed border-gray-200 rounded-2xl bg-white/50">
                <Search className="w-12 h-12 mx-auto mb-4 opacity-25 text-sumi" />
                <p className="font-serif text-lg text-ink">Tidak ada kosakata ditemukan</p>
                <p className="text-xs text-sumi mt-1">Coba sesuaikan kata kunci pencarian atau kategori Anda.</p>
              </div>
            ) : (
              selectedCategory === 'Semua' && isGroupedView ? (
                // Grouped View (Layout by Category)
                <div className="space-y-10 pb-10">
                  {Object.entries(groupedVocab).map(([categoryName, items]) => {
                    const catConfig = categoriesConfig.find(c => c.name === categoryName);
                    const Icon = catConfig?.icon || HelpCircle;
                    const catColor = catConfig?.color || 'bg-slate-50 text-slate-700';
                    
                    return (
                      <div key={categoryName} className="space-y-4">
                        {/* Beautiful Section Sticky Header */}
                        <div 
                          className="sticky top-0 z-10 py-3 bg-canvas/95 backdrop-blur-sm flex items-center justify-between border-b pb-2 mb-3 shadow-[0_1px_0_0_rgba(26,26,26,0.02)]"
                          style={{ borderColor: 'rgba(26,26,26,0.06)' }}
                        >
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-lg border shadow-sm ${catColor}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <h2 className="text-lg font-bold tracking-tight text-ink font-serif">{categoryName}</h2>
                          </div>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${catColor} shadow-sm`}>
                            {items.length} Kata
                          </span>
                        </div>

                        {viewMode === 'list' ? (
                          <div className="space-y-3">
                            {items.map(vocab => renderVocabListItem(vocab))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {items.map(vocab => renderVocabCardItem(vocab))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Flat View (List view or individual Category filter active)
                <div className="pb-10">
                  {viewMode === 'list' ? (
                    <div className="space-y-3">
                      {displayVocab.map(vocab => renderVocabListItem(vocab))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {displayVocab.map(vocab => renderVocabCardItem(vocab))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </main>

      {/* Global Styles for 3D Flip (can be moved to index.css) */}
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

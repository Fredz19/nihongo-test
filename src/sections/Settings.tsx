import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../hooks/useAuthStore';
import AppSidebar from '../components/AppSidebar';
import { 
  Settings as SettingsIcon, 
  Trash2, 
  BookOpen, 
  PenTool, 
  ClipboardList, 
  AlertTriangle, 
  RefreshCw, 
  X,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

export default function Settings() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  
  const [loadingType, setLoadingType] = useState<string | null>(null);
  
  // Confirmation state
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    type: 'vocab' | 'grammar' | 'tryout' | 'all';
    title: string;
    description: string;
    doubleConfirm?: boolean;
  } | null>(null);

  const [doubleConfirmText, setDoubleConfirmText] = useState('');

  const handleResetVocab = async () => {
    if (!user) return;
    setLoadingType('vocab');
    try {
      const { error } = await supabase
        .from('user_vocab_progress')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;
      toast.success('Progress kosakata berhasil di-reset!');
    } catch (err: any) {
      console.error(err);
      toast.error('Gagal me-reset progress kosakata: ' + err.message);
    } finally {
      setLoadingType(null);
      setConfirmModal(null);
    }
  };

  const handleResetGrammar = async () => {
    if (!user) return;
    setLoadingType('grammar');
    try {
      const { error } = await supabase
        .from('grammar_progress')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;

      // Clear local storage keys
      localStorage.removeItem('nihongo_grammar_progress_local');
      localStorage.removeItem('nihongo_grammar_variations_progress');
      
      toast.success('Progress grammar berhasil di-reset!');
    } catch (err: any) {
      console.error(err);
      toast.error('Gagal me-reset progress grammar: ' + err.message);
    } finally {
      setLoadingType(null);
      setConfirmModal(null);
    }
  };

  const handleResetTryout = async () => {
    if (!user) return;
    setLoadingType('tryout');
    try {
      const { error } = await supabase
        .from('test_results')
        .delete()
        .eq('user_id', user.id);

      if (error) throw error;
      toast.success('Riwayat Try Out berhasil di-reset!');
    } catch (err: any) {
      console.error(err);
      toast.error('Gagal me-reset riwayat Try Out: ' + err.message);
    } finally {
      setLoadingType(null);
      setConfirmModal(null);
    }
  };

  const handleResetAll = async () => {
    if (!user) return;
    if (doubleConfirmText !== 'RESET SEMUA') {
      toast.error('Harap ketik "RESET SEMUA" dengan benar.');
      return;
    }
    setLoadingType('all');
    try {
      // 1. Reset Vocab
      const { error: err1 } = await supabase
        .from('user_vocab_progress')
        .delete()
        .eq('user_id', user.id);
      if (err1) throw err1;

      // 2. Reset Grammar
      const { error: err2 } = await supabase
        .from('grammar_progress')
        .delete()
        .eq('user_id', user.id);
      if (err2) throw err2;
      localStorage.removeItem('nihongo_grammar_progress_local');
      localStorage.removeItem('nihongo_grammar_variations_progress');

      // 3. Reset Tryouts
      const { error: err3 } = await supabase
        .from('test_results')
        .delete()
        .eq('user_id', user.id);
      if (err3) throw err3;

      toast.success('Semua progress belajar Anda telah berhasil di-reset!');
      setDoubleConfirmText('');
    } catch (err: any) {
      console.error(err);
      toast.error('Gagal me-reset semua progress: ' + err.message);
    } finally {
      setLoadingType(null);
      setConfirmModal(null);
    }
  };

  const triggerConfirm = (type: 'vocab' | 'grammar' | 'tryout' | 'all') => {
    if (type === 'vocab') {
      setConfirmModal({
        isOpen: true,
        type: 'vocab',
        title: 'Reset Progress Kosakata?',
        description: 'Tindakan ini akan menghapus seluruh data hafalan kata dan progress belajar kosakata Anda secara permanen. Anda harus mengulang dari awal.'
      });
    } else if (type === 'grammar') {
      setConfirmModal({
        isOpen: true,
        type: 'grammar',
        title: 'Reset Progress Grammar?',
        description: 'Tindakan ini akan menghapus progress belajar grammar/tata bahasa baik di database maupun di penyimpanan lokal (localStorage) Anda.'
      });
    } else if (type === 'tryout') {
      setConfirmModal({
        isOpen: true,
        type: 'tryout',
        title: 'Reset Riwayat Try Out?',
        description: 'Tindakan ini akan menghapus seluruh nilai, hasil ujian, riwayat skor, serta analisis kelemahan Try Out Anda. Riwayat ini tidak dapat dikembalikan.'
      });
    } else if (type === 'all') {
      setDoubleConfirmText('');
      setConfirmModal({
        isOpen: true,
        type: 'all',
        title: 'RESET SELURUH PROGRESS BELAJAR?',
        description: 'Peringatan keras! Tindakan ini akan menghapus kosakata, grammar, riwayat Try Out, dan semua progress belajar Anda dari awal. Ini adalah reset total.',
        doubleConfirm: true
      });
    }
  };

  const handleAction = () => {
    if (!confirmModal) return;
    if (confirmModal.type === 'vocab') handleResetVocab();
    if (confirmModal.type === 'grammar') handleResetGrammar();
    if (confirmModal.type === 'tryout') handleResetTryout();
    if (confirmModal.type === 'all') handleResetAll();
  };

  return (
    <div className="flex min-h-screen bg-canvas">
      {/* Sidebar */}
      <AppSidebar activeItem="Pengaturan" />

      {/* Main Content */}
      <main className="flex-1 min-w-0 max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8 border-b pb-4" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
          <SettingsIcon className="w-8 h-8 text-vermillion" />
          <div>
            <h1 className="text-3xl font-serif">Pengaturan</h1>
            <p className="text-sm text-sumi">Kelola akun dan progress belajar Anda</p>
          </div>
        </div>

        {/* Account Details Summary */}
        <div className="paper-card p-6 mb-8 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <h2 className="text-lg font-serif mb-4 text-ink">Informasi Akun</h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-sumi">EMAIL TERDAFTAR</div>
              <div className="text-base font-semibold text-ink font-mono">{user?.email || 'Tidak terdeteksi'}</div>
            </div>
            <button 
              onClick={() => navigate('/dashboard')}
              className="btn-outline text-xs px-4 py-2 hover:bg-gray-50 self-start sm:self-auto"
            >
              Kembali ke Dashboard
            </button>
          </div>
        </div>

        {/* Reset Actions Grid */}
        <h2 className="text-xl font-serif mb-4 text-ink">Manajemen Progress Belajar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Reset Kosakata */}
          <div className="paper-card p-6 flex flex-col justify-between border border-gray-100 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-50 rounded-xl text-green-600">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="text-[10px] bg-green-100 text-green-800 font-semibold px-2 py-0.5 rounded-full uppercase">KOSAKATA</span>
              </div>
              <h3 className="text-lg font-serif mb-2 text-ink">Reset Progress Kosakata</h3>
              <p className="text-xs text-sumi leading-relaxed mb-6">
                Hapus seluruh kata yang telah Anda tandai sebagai hafal atau sedang dipelajari.
              </p>
            </div>
            <button
              onClick={() => triggerConfirm('vocab')}
              disabled={loadingType !== null}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Reset Kosakata
            </button>
          </div>

          {/* Reset Grammar */}
          <div className="paper-card p-6 flex flex-col justify-between border border-gray-100 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                  <PenTool className="w-6 h-6" />
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full uppercase">GRAMMAR</span>
              </div>
              <h3 className="text-lg font-serif mb-2 text-ink">Reset Progress Grammar</h3>
              <p className="text-xs text-sumi leading-relaxed mb-6">
                Bersihkan data penguasaan grammar serta variasi latihan grammar di DB dan lokal.
              </p>
            </div>
            <button
              onClick={() => triggerConfirm('grammar')}
              disabled={loadingType !== null}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Reset Grammar
            </button>
          </div>

          {/* Reset Try Out History */}
          <div className="paper-card p-6 flex flex-col justify-between border border-gray-100 hover:shadow-md transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-indigo-50 rounded-xl text-indigo">
                  <ClipboardList className="w-6 h-6" />
                </div>
                <span className="text-[10px] bg-indigo-100 text-indigo font-semibold px-2 py-0.5 rounded-full uppercase">TRY OUT</span>
              </div>
              <h3 className="text-lg font-serif mb-2 text-ink">Reset Riwayat Try Out</h3>
              <p className="text-xs text-sumi leading-relaxed mb-6">
                Hapus nilai, statistik ujian, dan riwayat lembar jawaban dari seluruh Try Out.
              </p>
            </div>
            <button
              onClick={() => triggerConfirm('tryout')}
              disabled={loadingType !== null}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold rounded-xl bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Reset Try Out
            </button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50/50 border border-red-200/60 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-3 text-red-700">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="text-lg font-serif">Zona Bahaya</h3>
          </div>
          <p className="text-xs text-red-700/80 mb-6 leading-relaxed">
            Tindakan di bawah ini bersifat merusak secara permanen dan tidak dapat dibatalkan. Mohon pikirkan baik-baik sebelum menekan tombol.
          </p>
          <button
            onClick={() => triggerConfirm('all')}
            disabled={loadingType !== null}
            className="flex items-center gap-2 py-3 px-6 text-sm font-bold text-white bg-red-600 hover:bg-red-700 disabled:bg-red-400 rounded-xl shadow-sm transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" />
            Reset Semua Progress Belajar
          </button>
        </div>

        {/* Confirmation Modal Overlay */}
        {confirmModal && confirmModal.isOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 max-w-md w-full p-8 relative overflow-hidden animate-scale-in">
              <button 
                onClick={() => setConfirmModal(null)} 
                className="absolute right-4 top-4 text-sumi hover:text-ink transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
                  <AlertTriangle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif text-ink">{confirmModal.title}</h3>
                <p className="text-xs text-sumi mt-2 leading-relaxed">{confirmModal.description}</p>
              </div>

              {confirmModal.doubleConfirm && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 text-left">
                  <label className="text-xs font-bold text-red-800 block mb-2">
                    Ketik "RESET SEMUA" di bawah untuk mengonfirmasi:
                  </label>
                  <input
                    type="text"
                    value={doubleConfirmText}
                    onChange={(e) => setDoubleConfirmText(e.target.value)}
                    placeholder="RESET SEMUA"
                    className="w-full text-sm font-semibold border-2 border-red-200 rounded-lg px-3 py-2 bg-white text-ink uppercase focus:outline-none focus:border-red-500 font-mono text-center tracking-wider"
                  />
                </div>
              )}

              <div className="flex gap-4">
                <button
                  disabled={loadingType !== null}
                  onClick={() => setConfirmModal(null)}
                  className="btn-outline flex-1 py-2.5 rounded-xl disabled:opacity-50 text-xs"
                >
                  Batal
                </button>
                <button
                  disabled={
                    loadingType !== null || 
                    (confirmModal.doubleConfirm && doubleConfirmText !== 'RESET SEMUA')
                  }
                  onClick={handleAction}
                  className="btn-vermillion flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-50 text-xs flex items-center justify-center gap-2"
                >
                  {loadingType !== null ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    'Ya, Reset'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

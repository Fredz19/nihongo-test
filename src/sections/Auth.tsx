import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Mail, Lock, User, ArrowRight, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // Registering a new user
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) throw error;

        if (data.user && data.session === null) {
          toast.success('Pendaftaran berhasil! Silakan cek email kamu untuk konfirmasi.', {
            duration: 5000,
          });
        } else {
          toast.success('Pendaftaran berhasil!');
          navigate('/dashboard');
        }
      } else {
        // Logging in
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        toast.success('Berhasil masuk!');
        navigate('/dashboard');
      }
    } catch (err: any) {
      console.error(err);
      toast.error(err.message || 'Terjadi kesalahan saat autentikasi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas p-4">
      {/* Soft minimalist grid background detail */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e6394605_1px,transparent_1px),linear-gradient(to_bottom,#e6394605_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <div className="relative z-10 w-full max-w-md overflow-hidden rounded-lg bg-white p-8 shadow-xl border border-paper-border transition-all duration-300">
        
        {/* Japanese Calligraphy / Minimal Logo */}
        <div className="mb-8 flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-vermillion text-white shadow-md">
            <BookOpen className="h-6 w-6" />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">
            Nihongo Test
          </h1>
          <p className="mt-2 text-sm text-sumi">
            {isSignUp 
              ? 'Mulai perjalanan persiapan JLPT kamu hari ini' 
              : 'Masuk untuk melanjutkan latihan simulasi JLPT'}
          </p>
        </div>

        <form onSubmit={handleAuth} className="space-y-5">
          {isSignUp && (
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-sumi" htmlFor="fullName">
                Nama Lengkap
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sumi" />
                <input
                  id="fullName"
                  type="text"
                  required
                  disabled={loading}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Nama Lengkap Kamu"
                  className="w-full rounded border border-input bg-canvas py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-all focus:border-vermillion focus:ring-1 focus:ring-vermillion disabled:opacity-50"
                />
              </div>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wider text-sumi" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sumi" />
              <input
                id="email"
                type="email"
                required
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full rounded border border-input bg-canvas py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-all focus:border-vermillion focus:ring-1 focus:ring-vermillion disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold uppercase tracking-wider text-sumi" htmlFor="password">
                Password
              </label>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sumi" />
              <input
                id="password"
                type="password"
                required
                disabled={loading}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Minimal 6 karakter"
                minLength={6}
                className="w-full rounded border border-input bg-canvas py-2.5 pl-10 pr-4 text-sm text-ink outline-none transition-all focus:border-vermillion focus:ring-1 focus:ring-vermillion disabled:opacity-50"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded bg-vermillion py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg disabled:opacity-50"
          >
            {loading ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <>
                <span>{isSignUp ? 'Daftar Sekarang' : 'Masuk'}</span>
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 border-t border-paper-border pt-4 text-center">
          <button
            type="button"
            disabled={loading}
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-xs font-semibold uppercase tracking-wider text-indigo transition-all hover:text-vermillion disabled:opacity-50"
          >
            {isSignUp ? 'Sudah punya akun? Masuk' : 'Belum punya akun? Daftar'}
          </button>
        </div>
      </div>
    </div>
  );
}

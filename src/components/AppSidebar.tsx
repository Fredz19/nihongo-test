import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../hooks/useAuthStore';
import {
  LayoutDashboard,
  ClipboardList,
  BookOpen,
  PenTool,
  BarChart3,
  Settings,
  LogOut
} from 'lucide-react';

const sidebarItems = [
  { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', page: 'dashboard' },
  { icon: <ClipboardList className="w-5 h-5" />, label: 'Try Out', page: 'mocktest' },
  { icon: <BookOpen className="w-5 h-5" />, label: 'Kosakata', page: 'kosakata' },
  { icon: <PenTool className="w-5 h-5" />, label: 'Grammar', page: 'grammar' },
  { icon: <BarChart3 className="w-5 h-5" />, label: 'Analisis', page: 'results' },
  { icon: <Settings className="w-5 h-5" />, label: 'Pengaturan', page: 'dashboard' }, // Fallback to dashboard for settings
];

interface AppSidebarProps {
  activeItem: 'Dashboard' | 'Try Out' | 'Kosakata' | 'Grammar' | 'Analisis' | 'Pengaturan';
}

export default function AppSidebar({ activeItem }: AppSidebarProps) {
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

  const handleNavigation = (page: string) => {
    if (page === 'mocktest') {
      navigate('/mocktest/N5');
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <aside className="hidden lg:flex flex-col w-64 h-screen sticky top-0 border-r bg-canvas" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
      <div className="p-6 border-b" style={{ borderColor: 'rgba(26,26,26,0.1)' }}>
        <button onClick={() => navigate('/')} className="text-xs font-bold tracking-widest hover:text-vermillion transition-colors">
          NIHONGO
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = activeItem === item.label;
          return (
            <button
              key={item.label}
              onClick={() => handleNavigation(item.page)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                isActive
                  ? 'font-semibold bg-white shadow-sm text-ink'
                  : 'text-sumi hover:bg-white/50 hover:text-ink'
              }`}
              style={isActive ? { borderLeft: '3px solid #e63946' } : {}}
            >
              <span className={isActive ? 'text-vermillion' : 'text-sumi'}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
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

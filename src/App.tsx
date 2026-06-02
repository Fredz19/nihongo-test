import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useAuthStore } from './hooks/useAuthStore';
import ProtectedRoute from './components/ProtectedRoute';
import LandingPage from './sections/LandingPage';
import Dashboard from './sections/Dashboard';
import MockTest from './sections/MockTest';
import Results from './sections/Results';
import ReviewMode from './sections/ReviewMode';
import PricingPage from './sections/PricingPage';
import Auth from './sections/Auth';
import Kosakata from './sections/Kosakata';
import Grammar from './sections/Grammar';

function App() {
  const initializeAuth = useAuthStore((state) => state.initializeAuth);

  useEffect(() => {
    const unsubscribe = initializeAuth();
    return () => unsubscribe();
  }, [initializeAuth]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-canvas">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/auth" element={<Auth />} />

          {/* Protected Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/mocktest/:level" 
            element={
              <ProtectedRoute>
                <MockTest />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/results" 
            element={
              <ProtectedRoute>
                <Results />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/review" 
            element={
              <ProtectedRoute>
                <ReviewMode />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/kosakata" 
            element={
              <ProtectedRoute>
                <Kosakata />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/grammar" 
            element={
              <ProtectedRoute>
                <Grammar />
              </ProtectedRoute>
            } 
          />
        </Routes>
        
        {/* Sleek toast notification settings */}
        <Toaster position="top-right" richColors closeButton />
      </div>
    </BrowserRouter>
  );
}

export default App;


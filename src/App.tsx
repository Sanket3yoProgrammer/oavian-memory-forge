import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";
import { LoadingScreen } from "./components/loading-screen";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense, lazy } from "react";

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const MemoriesPage = lazy(() => import('./pages/MemoriesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const FriendsPage = lazy(() => import('./pages/FriendsPage'));
const MusicPage = lazy(() => import('./pages/MusicPage'));

// Import the AdminDashboard
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="oavian-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Protected routes (would have authentication in real app) */}
              <Route element={<AppLayout />}>
                <Route path="/home" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/memories" element={<MemoriesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/music" element={<MusicPage />} />
                <Route path="/notifications" element={<h1 className="p-6 text-2xl">Notifications (Coming Soon)</h1>} />
                <Route path="/profile" element={<h1 className="p-6 text-2xl">Profile (Coming Soon)</h1>} />
                <Route path="/settings" element={<h1 className="p-6 text-2xl">Settings (Coming Soon)</h1>} />
              </Route>
              
              {/* Auth routes */}
              <Route path="/auth/login" element={<h1 className="p-6 text-2xl">Login (Coming Soon)</h1>} />
              <Route path="/auth/register" element={<h1 className="p-6 text-2xl">Register (Coming Soon)</h1>} />
              
              {/* Fallback routes */}
              <Route path="/index" element={<Navigate to="/" replace />} />
              <Route path="*" element={<NotFound />} />
              
              {/* Admin routes */}
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

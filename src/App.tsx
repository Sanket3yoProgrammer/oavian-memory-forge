
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/app-layout";
import { LoadingScreen } from "./components/loading-screen";
import { Suspense, lazy } from "react";

// Lazy load pages
const LandingPage = lazy(() => import('./pages/LandingPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
              <Route path="/memories" element={<h1 className="p-6 text-2xl">Memories (Coming Soon)</h1>} />
              <Route path="/gallery" element={<h1 className="p-6 text-2xl">Gallery (Coming Soon)</h1>} />
              <Route path="/friends" element={<h1 className="p-6 text-2xl">Friends (Coming Soon)</h1>} />
              <Route path="/music" element={<h1 className="p-6 text-2xl">Music (Coming Soon)</h1>} />
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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

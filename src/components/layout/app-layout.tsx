
import { Outlet } from "react-router-dom";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { MusicPlayer } from "@/components/music-player";
import { useEffect, useState } from "react";
import { SidebarRail } from "@/components/ui/sidebar";
import { PanelLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/components/ui/sidebar";

// Create a SidebarToggleButton component
const SidebarToggleButton = () => {
  const { state, toggleSidebar } = useSidebar();
  
  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleSidebar}
      className={cn(
        "fixed left-4 top-4 z-50 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border shadow-md md:hidden",
        state === "expanded" ? "hidden" : "flex"
      )}
      aria-label="Open Sidebar"
    >
      <PanelLeft className="h-4 w-4" />
    </Button>
  );
};

export function AppLayout() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);
  
  return (
    <ThemeProvider defaultTheme="light" storageKey="oavian-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <SidebarRail /> {/* For desktop resizing */}
          <SidebarToggleButton /> {/* For mobile sidebar toggle */}
          <main className="flex-1 overflow-auto transition-all relative">
            <div className="animate-fade-in w-full">
              <Outlet />
            </div>
            {isMounted && <MusicPlayer />}
          </main>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}

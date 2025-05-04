
import { Link, useLocation } from "react-router-dom";
import { 
  Album, Bell, Home, Image, Landmark, LogIn, Music, Search, Settings, User, Users, PieChart 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarFooter, 
  SidebarGroup, 
  SidebarGroupContent, 
  SidebarGroupLabel, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarTrigger 
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: Album, label: "Memories", path: "/memories" },
    { icon: Image, label: "Gallery", path: "/gallery" },
    { icon: Users, label: "Friends", path: "/friends" },
    { icon: Music, label: "Music", path: "/music" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Landmark, label: "About OAV", path: "/about" },
  ];

  const adminItems = [
    { icon: PieChart, label: "Admin Dashboard", path: "/admin" },
  ];

  const accountItems = [
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/T25gK6Bg/images-23.png" 
            alt="OAV Logo" 
            className="h-8 w-8"
          />
          <span className="text-lg font-bold bg-gradient-to-r from-oavian-blue to-oavian-orange bg-clip-text text-transparent">
            Oavian Memories
          </span>
        </div>
        <div className="flex items-center mt-2">
          <div className="flex-1">
            <SidebarTrigger />
          </div>
          <ThemeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={isActive(item.path)} tooltip={item.label}>
                    <Link to={item.path} className={cn(
                      "flex items-center gap-3 relative overflow-hidden focus-ring",
                      isActive(item.path) && "after:absolute after:content-[''] after:w-1 after:h-full after:rounded-r-md after:bg-gradient-to-b after:from-oavian-blue after:to-oavian-orange after:left-0 after:top-0"
                    )}>
                      <item.icon className={cn(
                        "h-5 w-5 transition-transform",
                        isActive(item.path) ? "text-sidebar-accent-foreground" : "text-sidebar-foreground/70"
                      )} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={isActive(item.path)} tooltip={item.label}>
                    <Link to={item.path} className={cn(
                      "flex items-center gap-3 relative overflow-hidden focus-ring",
                      isActive(item.path) && "after:absolute after:content-[''] after:w-1 after:h-full after:rounded-r-md after:bg-gradient-to-b after:from-oavian-blue after:to-oavian-orange after:left-0 after:top-0"
                    )}>
                      <item.icon className={cn(
                        "h-5 w-5 transition-transform",
                        isActive(item.path) ? "text-sidebar-accent-foreground" : "text-sidebar-foreground/70"
                      )} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild isActive={isActive(item.path)} tooltip={item.label}>
                    <Link to={item.path} className={cn(
                      "flex items-center gap-3 relative overflow-hidden focus-ring",
                      isActive(item.path) && "after:absolute after:content-[''] after:w-1 after:h-full after:rounded-r-md after:bg-gradient-to-b after:from-oavian-blue after:to-oavian-orange after:left-0 after:top-0"
                    )}>
                      <item.icon className={cn(
                        "h-5 w-5 transition-transform",
                        isActive(item.path) ? "text-sidebar-accent-foreground" : "text-sidebar-foreground/70"
                      )} />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <Link 
          to="/auth/login" 
          className={cn(
            "flex items-center justify-center gap-2 px-4 py-2 rounded-md w-full",
            "bg-gradient-to-r from-oavian-blue to-oavian-orange text-white hover:opacity-90 transition-opacity"
          )}
        >
          <LogIn className="h-4 w-4" />
          <span>Sign In</span>
        </Link>
        <div className="mt-4 text-xs text-center text-muted-foreground">
          Made with ❤️ by sanket3yoprogrammer
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

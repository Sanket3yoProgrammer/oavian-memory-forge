
import { Link } from "react-router-dom";
import { 
  Album, Bell, Home, Image, Landmark, LogIn, Music, Search, Settings, User, Users 
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
  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Album, label: "Memories", path: "/memories" },
    { icon: Image, label: "Gallery", path: "/gallery" },
    { icon: Users, label: "Friends", path: "/friends" },
    { icon: Music, label: "Music", path: "/music" },
    { icon: Bell, label: "Notifications", path: "/notifications" },
    { icon: Landmark, label: "About OAV", path: "/about" },
  ];

  const accountItems = [
    { icon: User, label: "Profile", path: "/profile" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <img 
            src="https://i.postimg.cc/T25gK6Bg/images-23.png" 
            alt="OAV Logo" 
            className="h-8 w-8"
          />
          <span className="text-lg font-bold">Oavian Memories</span>
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
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
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
                  <SidebarMenuButton asChild>
                    <Link to={item.path} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
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
            "flex items-center gap-2 px-4 py-2 rounded-md w-full",
            "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          <LogIn className="h-4 w-4" />
          <span>Sign In</span>
        </Link>
        <div className="mt-4 text-xs text-center text-muted-foreground">
          Once an Oavian, Always an Oavian
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}

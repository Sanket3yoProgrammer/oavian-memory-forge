
import { Bell } from "lucide-react";

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="flex flex-col items-center">
        <div className="relative">
          <Bell className="h-16 w-16 text-primary animate-bell-ring" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <img 
              src="https://i.postimg.cc/T25gK6Bg/images-23.png" 
              alt="OAV Logo" 
              className="h-8 w-8 animate-bounce-light"
            />
          </div>
        </div>
        <h2 className="mt-4 text-2xl font-bold text-primary">Oavian Memories</h2>
        <p className="mt-2 text-muted-foreground">Loading your school memories...</p>
      </div>
    </div>
  );
}

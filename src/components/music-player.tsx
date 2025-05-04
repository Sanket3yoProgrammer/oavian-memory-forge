
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { 
  ChevronUp, Maximize2, Minimize2, Music, Pause, Play, SkipBack, SkipForward, Volume2 
} from "lucide-react";

type Song = {
  id: string;
  title: string;
  artist: string;
  duration: number;
  cover: string;
  audioUrl: string;
};

// Demo songs - in a real app these would come from an API
const demoSongs: Song[] = [
  {
    id: "1",
    title: "OAV School Anthem",
    artist: "OAV Choir",
    duration: 180,
    cover: "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl: "https://example.com/sample.mp3"
  },
  {
    id: "2",
    title: "Memories of School",
    artist: "Oavian Band",
    duration: 210,
    cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    audioUrl: "https://example.com/sample2.mp3"
  }
];

export function MusicPlayer() {
  const [expanded, setExpanded] = useState(false);
  const [minimized, setMinimized] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState<Song>(demoSongs[0]);
  const [volume, setVolume] = useState([50]);
  const [progress, setProgress] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, we'd control the audio playback here
    // if (audioRef.current) {
    //   if (isPlaying) audioRef.current.pause();
    //   else audioRef.current.play();
    // }
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
    if (minimized) setMinimized(false);
  };

  const toggleMinimize = () => {
    setMinimized(!minimized);
    if (!minimized && expanded) setExpanded(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const nextSong = () => {
    const currentIndex = demoSongs.findIndex(song => song.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % demoSongs.length;
    setCurrentSong(demoSongs[nextIndex]);
    setProgress(0);
    if (isPlaying && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const prevSong = () => {
    const currentIndex = demoSongs.findIndex(song => song.id === currentSong.id);
    const prevIndex = (currentIndex - 1 + demoSongs.length) % demoSongs.length;
    setCurrentSong(demoSongs[prevIndex]);
    setProgress(0);
    if (isPlaying && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  if (minimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-12 w-12 bg-primary text-primary-foreground hover:bg-primary/90 button-glow"
          onClick={toggleMinimize}
        >
          <Music className="h-5 w-5" />
        </Button>
      </div>
    );
  }

  return (
    <div 
      className={cn(
        "fixed bottom-4 right-4 z-50 rounded-2xl shadow-lg glass-card",
        "transition-all duration-300 ease-in-out",
        expanded ? "w-80 h-96" : "w-80 h-24"
      )}
    >
      <div className="p-4 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={toggleMinimize}>
            <ChevronUp className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">Music Player</span>
          <Button variant="ghost" size="icon" onClick={toggleExpand}>
            {expanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {expanded && (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="w-40 h-40 rounded-lg overflow-hidden mb-4">
                <img src={currentSong.cover} alt={currentSong.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h3 className="font-bold">{currentSong.title}</h3>
                <p className="text-sm text-muted-foreground">{currentSong.artist}</p>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="mt-auto">
          {expanded && (
            <div className="mb-2">
              <Slider 
                value={[progress]} 
                min={0} 
                max={currentSong.duration} 
                step={1}
                onValueChange={(values) => setProgress(values[0])}
                className="mb-1"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{formatTime(progress)}</span>
                <span>{formatTime(currentSong.duration)}</span>
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between gap-2">
            <Button variant="ghost" size="icon" onClick={prevSong}>
              <SkipBack className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              className="rounded-full h-10 w-10 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </Button>
            
            <Button variant="ghost" size="icon" onClick={nextSong}>
              <SkipForward className="h-4 w-4" />
            </Button>
            
            {expanded && (
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                <Slider 
                  value={volume} 
                  min={0} 
                  max={100} 
                  step={1}
                  onValueChange={setVolume}
                  className="w-20" 
                />
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Hidden audio element - would be used in a real implementation */}
      <audio ref={audioRef} src={currentSong.audioUrl} />
    </div>
  );
}

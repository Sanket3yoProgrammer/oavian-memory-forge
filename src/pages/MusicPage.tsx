
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Heart, Library, ListMusic, Music, Pause, Play, Plus, Radio, 
  Repeat, Search, Shuffle, SkipBack, SkipForward, Volume2 
} from 'lucide-react';

const MusicPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(null);
  
  // Demo data - in a real app this would come from an API
  const playlists = [
    {
      id: 'nostalgia',
      name: 'Nostalgia Hits',
      description: 'Songs that remind us of school days',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      songs: 12
    },
    {
      id: 'graduation',
      name: 'Graduation Day',
      description: 'Perfect soundtrack for the big day',
      cover: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      songs: 8
    },
    {
      id: 'study',
      name: 'Study Session',
      description: 'Focus music for exam preparations',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      songs: 15
    },
    {
      id: 'dance',
      name: 'Dance Party',
      description: 'Upbeat tracks for celebrations',
      cover: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      songs: 10
    },
  ];
  
  // Songs data for demo
  const songs = [
    {
      id: '1',
      title: 'School Days',
      artist: 'Memory Lane',
      album: 'Nostalgia Hits',
      duration: '3:45',
      cover: 'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'nostalgia'
    },
    {
      id: '2',
      title: 'Friendship Forever',
      artist: 'The Classmates',
      album: 'Nostalgia Hits',
      duration: '4:12',
      cover: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'nostalgia'
    },
    {
      id: '3',
      title: 'Last Bell',
      artist: 'School Anthem',
      album: 'Nostalgia Hits',
      duration: '3:58',
      cover: 'https://images.unsplash.com/photo-1531104985437-603d6490e6d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'nostalgia'
    },
    {
      id: '4',
      title: 'Graduation March',
      artist: 'Academic Ensemble',
      album: 'Graduation Day',
      duration: '5:20',
      cover: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'graduation'
    },
    {
      id: '5',
      title: 'New Beginnings',
      artist: 'Future Path',
      album: 'Graduation Day',
      duration: '4:05',
      cover: 'https://images.unsplash.com/photo-1465409042654-5314e9d1754b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'graduation'
    },
    {
      id: '6',
      title: 'Focus Flow',
      artist: 'Study Zone',
      album: 'Study Session',
      duration: '6:30',
      cover: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'study'
    },
    {
      id: '7',
      title: 'Deep Concentration',
      artist: 'Brain Waves',
      album: 'Study Session',
      duration: '8:15',
      cover: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'study'
    },
    {
      id: '8',
      title: 'Dance Floor Anthem',
      artist: 'Party Crew',
      album: 'Dance Party',
      duration: '3:45',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      playlistId: 'dance'
    }
  ];
  
  const featuredSongs = songs.slice(0, 3);
  const filteredSongs = currentPlaylist 
    ? songs.filter(song => song.playlistId === currentPlaylist)
    : songs;
    
  // Currently playing song (for demo)
  const currentSong = songs[0];

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-blue-yellow mb-2">Music Player</h1>
          <p className="text-muted-foreground">
            Listen to the soundtrack of your school memories!
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left sidebar: Playlists */}
          <div className="w-full lg:w-64 shrink-0 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search music..." 
                className="pl-9" 
              />
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-3 flex items-center">
                <ListMusic className="h-5 w-5 mr-2" />
                Your Playlists
              </h2>
              
              <div className="space-y-2">
                <Button
                  variant={currentPlaylist === null ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setCurrentPlaylist(null)}
                >
                  <Library className="h-4 w-4 mr-2" />
                  All Songs
                </Button>
                
                {playlists.map((playlist) => (
                  <Button
                    key={playlist.id}
                    variant={currentPlaylist === playlist.id ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => setCurrentPlaylist(playlist.id)}
                  >
                    <Music className="h-4 w-4 mr-2" />
                    {playlist.name}
                  </Button>
                ))}
                
                <Button variant="ghost" className="w-full justify-start text-muted-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Create Playlist
                </Button>
              </div>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold mb-3">Categories</h2>
              <div className="flex flex-wrap gap-2">
                {["Pop", "Rock", "Classical", "Hip-Hop", "Jazz", "Lofi", "Ambient"].map((genre) => (
                  <Badge key={genre} variant="secondary" className="cursor-pointer">
                    {genre}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="flex-1">
            {/* Featured section */}
            {!currentPlaylist && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Featured Tracks</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {featuredSongs.map((song) => (
                    <Card key={song.id} className="overflow-hidden group cursor-pointer hover:shadow-md transition-all">
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={song.cover}
                          alt={song.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                          <Button variant="secondary" size="icon" className="rounded-full h-12 w-12 bg-white/20 backdrop-blur-sm">
                            <Play className="h-6 w-6" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold truncate">{song.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
            
            {/* Current playlist or all songs */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                {currentPlaylist 
                  ? playlists.find(p => p.id === currentPlaylist)?.name 
                  : 'All Songs'}
              </h2>
              
              <Card>
                <ScrollArea className="h-[400px] rounded-md">
                  <table className="w-full">
                    <thead className="sticky top-0 bg-card">
                      <tr className="border-b">
                        <th className="text-left p-3 text-muted-foreground font-medium text-sm w-10">#</th>
                        <th className="text-left p-3 text-muted-foreground font-medium text-sm">Title</th>
                        <th className="text-left p-3 text-muted-foreground font-medium text-sm hidden md:table-cell">Album</th>
                        <th className="text-left p-3 text-muted-foreground font-medium text-sm hidden sm:table-cell">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredSongs.map((song, index) => (
                        <tr 
                          key={song.id} 
                          className="border-b hover:bg-muted/30 transition-colors cursor-pointer"
                          onClick={() => setIsPlaying(!isPlaying)}
                        >
                          <td className="p-3 w-10">{index + 1}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-3">
                              <div className="relative w-10 h-10 shrink-0">
                                <img 
                                  src={song.cover}
                                  alt={song.title}
                                  className="w-full h-full object-cover rounded"
                                />
                              </div>
                              <div>
                                <p className="font-medium">{song.title}</p>
                                <p className="text-sm text-muted-foreground">{song.artist}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-3 hidden md:table-cell text-muted-foreground">{song.album}</td>
                          <td className="p-3 hidden sm:table-cell text-muted-foreground">{song.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ScrollArea>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Music player (fixed at bottom) */}
      <div className="fixed left-0 bottom-0 w-full bg-background/80 backdrop-blur-md border-t border-border p-2 z-40">
        <div className="container flex items-center gap-4">
          <div className="flex items-center gap-3 w-1/4">
            <img 
              src={currentSong.cover}
              alt={currentSong.title}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="truncate">
              <p className="font-medium truncate">{currentSong.title}</p>
              <p className="text-sm text-muted-foreground truncate">{currentSong.artist}</p>
            </div>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex flex-col flex-1 items-center">
            <div className="flex items-center gap-2 mb-1">
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Shuffle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <SkipBack className="h-5 w-5" />
              </Button>
              <Button 
                variant="secondary" 
                size="icon" 
                className="rounded-full h-8 w-8"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground">
                <Repeat className="h-4 w-4" />
              </Button>
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="text-xs text-muted-foreground">1:26</span>
              <Progress value={33} className="h-1" />
              <span className="text-xs text-muted-foreground">{currentSong.duration}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 w-1/6">
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <Volume2 className="h-5 w-5" />
            </Button>
            <Progress value={75} className="h-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPage;

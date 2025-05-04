
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Camera, Download, Filter, Heart, Image, Layers, Search, Share, Tag } from 'lucide-react';

const GalleryPage = () => {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);
  
  // Demo data - in a real app this would come from an API
  const albums = [
    {
      id: 'annual-day',
      name: 'Annual Day',
      description: 'Cultural performances and celebrations',
      cover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      count: 24,
      date: 'Dec 2024'
    },
    {
      id: 'sports-day',
      name: 'Sports Day',
      description: 'Athletic events and team competitions',
      cover: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      count: 36,
      date: 'Jan 2025'
    },
    {
      id: 'science-exhibition',
      name: 'Science Exhibition',
      description: 'Innovations and scientific discoveries',
      cover: 'https://images.unsplash.com/photo-1567168544646-208fa5d408fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      count: 18,
      date: 'Nov 2024'
    },
    {
      id: 'graduation',
      name: 'Graduation',
      description: 'Farewell and new beginnings',
      cover: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      count: 42,
      date: 'Mar 2025'
    },
    {
      id: 'field-trip',
      name: 'Field Trip',
      description: 'Exploring nature and wildlife',
      cover: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      count: 29,
      date: 'Oct 2024'
    },
    {
      id: 'debate',
      name: 'Debate Competition',
      description: 'Articulating ideas with clarity',
      cover: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      count: 15,
      date: 'Feb 2025'
    }
  ];
  
  // Photos for each album - simplified for demo
  const photos = [
    {
      id: '1',
      albumId: 'annual-day',
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Opening ceremony with traditional lamp lighting',
      likes: 24
    },
    {
      id: '2',
      albumId: 'annual-day',
      url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Classical dance performance by senior students',
      likes: 31
    },
    {
      id: '3',
      albumId: 'annual-day',
      url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Drama club presenting their annual play',
      likes: 18
    },
    {
      id: '4',
      albumId: 'annual-day',
      url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Principal addressing the gathering',
      likes: 12
    },
    {
      id: '5',
      albumId: 'annual-day',
      url: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Award ceremony for outstanding students',
      likes: 29
    },
    {
      id: '6',
      albumId: 'annual-day',
      url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Group folk dance performance',
      likes: 35
    },
    {
      id: '7',
      albumId: 'sports-day',
      url: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Students ready for 100m sprint',
      likes: 22
    },
    {
      id: '8',
      albumId: 'sports-day',
      url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Long jump competition finals',
      likes: 19
    },
    {
      id: '9',
      albumId: 'sports-day',
      url: 'https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Relay race handoffs',
      likes: 26
    },
    // Adding more sample photos to show grid
    {
      id: '10',
      albumId: 'sports-day',
      url: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Basketball tournament finals',
      likes: 28
    },
    {
      id: '11',
      albumId: 'sports-day',
      url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Volleyball match in progress',
      likes: 17
    },
    {
      id: '12',
      albumId: 'sports-day',
      url: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      caption: 'Trophy presentation ceremony',
      likes: 33
    }
  ];

  const filteredPhotos = activeAlbum 
    ? photos.filter(photo => photo.albumId === activeAlbum)
    : [];

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-blue-yellow mb-2">Photo Gallery</h1>
          <p className="text-muted-foreground">
            Browse through our collection of memorable moments!
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search photos..." 
              className="pl-9" 
            />
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="transition-all">
              <Filter className="h-4 w-4 mr-1" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="transition-all">
              <Tag className="h-4 w-4 mr-1" />
              Tags
            </Button>
            <Button variant="default" size="sm" className="transition-all">
              <Camera className="h-4 w-4 mr-1" />
              Upload
            </Button>
          </div>
        </div>
        
        {/* Album Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Layers className="h-5 w-5 mr-2" />
            Albums
          </h2>
          
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex gap-4 pb-2">
              <Card 
                className={`w-[200px] flex-shrink-0 cursor-pointer transition-all hover:shadow-md ${activeAlbum === null ? 'ring-2 ring-primary' : ''}`}
                onClick={() => setActiveAlbum(null)}
              >
                <div className="p-4 flex items-center justify-center h-[120px]">
                  <div className="text-center">
                    <Image className="h-8 w-8 mx-auto mb-2 opacity-70" />
                    <p className="font-medium">View All Albums</p>
                  </div>
                </div>
              </Card>
              
              {albums.map((album) => (
                <Card 
                  key={album.id} 
                  className={`w-[200px] flex-shrink-0 cursor-pointer transition-all hover:shadow-md ${activeAlbum === album.id ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setActiveAlbum(album.id)}
                >
                  <div className="relative h-[120px] overflow-hidden">
                    <img
                      src={album.cover}
                      alt={album.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent flex flex-col justify-end p-3">
                      <p className="text-white font-medium">{album.name}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-xs">{album.count} photos</span>
                        <span className="text-white/80 text-xs">{album.date}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>
        
        {/* Photo Grid or Album Grid */}
        {activeAlbum ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">
                {albums.find(a => a.id === activeAlbum)?.name} Album
              </h2>
              <Button variant="ghost" size="sm" onClick={() => setActiveAlbum(null)}>
                Back to Albums
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredPhotos.map((photo) => (
                <Card 
                  key={photo.id} 
                  className="overflow-hidden group cursor-pointer transition-all hover:shadow-md"
                >
                  <AspectRatio ratio={4/3}>
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                      <p className="text-white text-sm line-clamp-2">{photo.caption}</p>
                    </div>
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-1">
                      <Button variant="secondary" size="icon" className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-sm">
                        <Heart className="h-3 w-3" />
                      </Button>
                      <Button variant="secondary" size="icon" className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-sm">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button variant="secondary" size="icon" className="h-7 w-7 rounded-full bg-white/20 backdrop-blur-sm">
                        <Share className="h-3 w-3" />
                      </Button>
                    </div>
                  </AspectRatio>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Card 
                key={album.id} 
                className="overflow-hidden cursor-pointer transition-all hover:shadow-lg group"
                onClick={() => setActiveAlbum(album.id)}
              >
                <div className="relative h-[200px] overflow-hidden">
                  <img
                    src={album.cover}
                    alt={album.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent/20 flex flex-col justify-end p-4">
                    <h3 className="text-white text-xl font-semibold mb-1">{album.name}</h3>
                    <p className="text-white/80 text-sm mb-2">{album.description}</p>
                    <div className="flex justify-between">
                      <span className="text-white/70 text-xs">{album.count} photos</span>
                      <span className="text-white/70 text-xs">{album.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;

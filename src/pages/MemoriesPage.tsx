
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Calendar, Camera, Clock, Filter, Heart, MessageSquare, Search, Tag, ThumbsUp, User 
} from 'lucide-react';

const MemoriesPage = () => {
  const [filter, setFilter] = useState('all');

  // Demo data - in a real app this would come from an API
  const memories = [
    {
      id: '1',
      title: 'Annual Day Performance',
      description: 'The cultural extravaganza where talents shine bright!',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: 'December 15, 2024',
      likes: 42,
      comments: 12,
      tags: ['cultural', 'performance', 'dance'],
      category: 'events',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://i.pravatar.cc/150?img=32'
      }
    },
    {
      id: '2',
      title: 'Science Exhibition',
      description: 'Showcasing innovation and scientific curiosity at its best!',
      image: 'https://images.unsplash.com/photo-1567168544646-208fa5d408fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: 'November 10, 2024',
      likes: 36,
      comments: 8,
      tags: ['science', 'exhibition', 'innovation'],
      category: 'academic',
      author: {
        name: 'Rahul Kumar',
        avatar: 'https://i.pravatar.cc/150?img=67'
      }
    },
    {
      id: '3',
      title: 'Sports Day',
      description: 'A day of athletic prowess, teamwork, and sportsmanship.',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: 'January 22, 2025',
      likes: 58,
      comments: 15,
      tags: ['sports', 'athletics', 'competition'],
      category: 'sports',
      author: {
        name: 'Anjali Patel',
        avatar: 'https://i.pravatar.cc/150?img=23'
      }
    },
    {
      id: '4',
      title: 'Graduation Day',
      description: 'Celebrating achievements and new beginnings!',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: 'March 5, 2025',
      likes: 87,
      comments: 32,
      tags: ['graduation', 'celebration', 'achievement'],
      category: 'events',
      author: {
        name: 'Vikram Singh',
        avatar: 'https://i.pravatar.cc/150?img=12'
      }
    },
    {
      id: '5',
      title: 'Field Trip to Wildlife Sanctuary',
      description: 'Exploring nature and wildlife in their natural habitat.',
      image: 'https://images.unsplash.com/photo-1543946207-39bd91e70ca7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: 'October 8, 2024',
      likes: 45,
      comments: 17,
      tags: ['field-trip', 'wildlife', 'nature'],
      category: 'trips',
      author: {
        name: 'Neha Gupta',
        avatar: 'https://i.pravatar.cc/150?img=45'
      }
    },
    {
      id: '6',
      title: 'Debate Competition',
      description: 'Articulating ideas with clarity, conviction, and charisma.',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      date: 'February 18, 2025',
      likes: 29,
      comments: 13,
      tags: ['debate', 'public-speaking', 'competition'],
      category: 'academic',
      author: {
        name: 'Arjun Menon',
        avatar: 'https://i.pravatar.cc/150?img=54'
      }
    }
  ];

  const filteredMemories = filter === 'all' ? memories : memories.filter(memory => memory.category === filter);

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-blue-yellow mb-2">Memories Gallery</h1>
          <p className="text-muted-foreground">
            Relive your favorite OAV moments here!
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search memories..." 
              className="pl-9" 
            />
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Button 
              variant={filter === 'all' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('all')}
              className="transition-all"
            >
              All
            </Button>
            <Button 
              variant={filter === 'events' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('events')}
              className="transition-all"
            >
              <Calendar className="h-4 w-4 mr-1" />
              Events
            </Button>
            <Button 
              variant={filter === 'academic' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('academic')}
              className="transition-all"
            >
              Book
            </Button>
            <Button 
              variant={filter === 'sports' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('sports')}
              className="transition-all"
            >
              Sports
            </Button>
            <Button 
              variant={filter === 'trips' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setFilter('trips')}
              className="transition-all"
            >
              Trips
            </Button>
            <Button variant="outline" size="sm" className="transition-all">
              <Filter className="h-4 w-4 mr-1" />
              More Filters
            </Button>
          </div>
        </div>
        
        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMemories.map((memory) => (
            <Card 
              key={memory.id} 
              className="overflow-hidden transition-all hover:shadow-lg memory-card group"
            >
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold mb-1">{memory.title}</h3>
                  <p className="text-white/80 text-sm line-clamp-2">{memory.description}</p>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <img 
                      src={memory.author.avatar}
                      alt={memory.author.name}
                      className="h-6 w-6 rounded-full border border-border"
                    />
                    <span className="text-sm font-medium">{memory.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-xs">{memory.date}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {memory.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 p-0 h-auto">
                      <Heart className="h-4 w-4 text-oavian-orange" />
                      <span className="text-xs">{memory.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center gap-1 p-0 h-auto">
                      <MessageSquare className="h-4 w-4 text-oavian-blue" />
                      <span className="text-xs">{memory.comments}</span>
                    </Button>
                  </div>
                  <Button variant="outline" size="sm">View</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemoriesPage;

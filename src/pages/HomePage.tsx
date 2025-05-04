
import { Card, CardContent } from '@/components/ui/card';
import { MusicPlayer } from '@/components/music-player';
import { Badge } from '@/components/ui/badge';
import { Bell, MessageSquare, ThumbsUp } from 'lucide-react';

const HomePage = () => {
  // Demo data - in a real app this would come from an API
  const recentMemories = [
    {
      id: '1',
      title: 'Annual Day Performance',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      likes: 24,
      comments: 5,
      date: '2 days ago'
    },
    {
      id: '2',
      title: 'Science Exhibition',
      image: 'https://images.unsplash.com/photo-1567168544646-208fa5d408fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      likes: 18,
      comments: 3,
      date: '1 week ago'
    },
    {
      id: '3',
      title: 'Sports Day',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      likes: 32,
      comments: 7,
      date: '2 weeks ago'
    }
  ];

  const notifications = [
    {
      id: '1',
      message: 'Annual Day photos have been uploaded',
      time: '1 hour ago'
    },
    {
      id: '2',
      message: 'Rahul commented on your photo',
      time: '3 hours ago'
    },
    {
      id: '3',
      message: 'New poll: "Favorite School Event"',
      time: '1 day ago'
    }
  ];

  const upcomingEvents = [
    {
      id: '1',
      title: 'Alumni Meet',
      date: 'June 15, 2025',
      location: 'OAV Main Hall'
    },
    {
      id: '2',
      title: 'Batch Reunion',
      date: 'July 22, 2025',
      location: 'Virtual Meeting'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <MusicPlayer />
      
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Welcome back, Oavian!</h1>
        <p className="text-muted-foreground">Let's explore your school memories</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Memories', value: '124', color: 'bg-oavian-orange/10 text-oavian-orange' },
              { title: 'Friends', value: '56', color: 'bg-oavian-blue/10 text-oavian-blue' },
              { title: 'Albums', value: '8', color: 'bg-oavian-teal/10 text-oavian-teal' }
            ].map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className={`text-sm font-medium ${stat.color} inline-block px-2 py-1 rounded-md mb-2`}>
                    {stat.title}
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Recent Memories */}
          <div>
            <h2 className="text-xl font-bold mb-4">Recent Memories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recentMemories.map(memory => (
                <div key={memory.id} className="memory-card group">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={memory.image} 
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-3">
                        <h3 className="text-white font-medium">{memory.title}</h3>
                        <p className="text-white/70 text-sm">{memory.date}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{memory.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{memory.comments}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className="text-xs">{memory.date}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          {/* Notifications */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Notifications</h2>
                <Badge className="bg-oavian-orange">{notifications.length}</Badge>
              </div>
              <div className="space-y-4">
                {notifications.map(notification => (
                  <div key={notification.id} className="flex gap-3 items-start">
                    <div className="bg-muted rounded-full p-2">
                      <Bell className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Events</h2>
              <div className="space-y-4">
                {upcomingEvents.map(event => (
                  <div key={event.id} className="border-l-2 border-primary pl-4">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Links */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <div className="space-y-2">
                {[
                  'Upload Photos',
                  'Create Album',
                  'Find Friends',
                  'View Timeline',
                  'Vote in Polls'
                ].map((link, index) => (
                  <div key={index} className="p-2 hover:bg-muted rounded-md cursor-pointer">
                    {link}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

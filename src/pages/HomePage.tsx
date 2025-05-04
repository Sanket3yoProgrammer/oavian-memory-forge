
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Bell, Calendar, ChevronRight, MessageSquare, ThumbsUp, User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const HomePage = () => {
  // Demo data - in a real app this would come from an API
  const recentMemories = [
    {
      id: '1',
      title: 'Annual Day Performance',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      likes: 24,
      comments: 5,
      date: '2 days ago',
      user: {
        name: 'Rahul M.',
        avatar: 'https://i.pravatar.cc/150?img=11'
      }
    },
    {
      id: '2',
      title: 'Science Exhibition',
      image: 'https://images.unsplash.com/photo-1567168544646-208fa5d408fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      likes: 18,
      comments: 3,
      date: '1 week ago',
      user: {
        name: 'Priya S.',
        avatar: 'https://i.pravatar.cc/150?img=20'
      }
    },
    {
      id: '3',
      title: 'Sports Day',
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      likes: 32,
      comments: 7,
      date: '2 weeks ago',
      user: {
        name: 'Amit K.',
        avatar: 'https://i.pravatar.cc/150?img=33'
      }
    }
  ];

  const notifications = [
    {
      id: '1',
      message: 'Annual Day photos have been uploaded',
      time: '1 hour ago',
      type: 'info'
    },
    {
      id: '2',
      message: 'Rahul commented on your photo',
      time: '3 hours ago',
      type: 'comment'
    },
    {
      id: '3',
      message: 'New poll: "Favorite School Event"',
      time: '1 day ago',
      type: 'poll'
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
  
  const friendSuggestions = [
    {
      id: '1',
      name: 'Kavita Sharma',
      avatar: 'https://i.pravatar.cc/150?img=28',
      class: 'Batch 2016'
    },
    {
      id: '2',
      name: 'Arjun Reddy',
      avatar: 'https://i.pravatar.cc/150?img=12',
      class: 'Batch 2016'
    },
    {
      id: '3',
      name: 'Neha Gupta',
      avatar: 'https://i.pravatar.cc/150?img=26',
      class: 'Batch 2016'
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="mb-6 animate-fade-in">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-oavian-blue to-oavian-orange bg-clip-text text-transparent">Welcome back, Oavian!</h1>
        <p className="text-muted-foreground">Let's explore your school memories</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: 'Memories', value: '124', color: 'bg-gradient-to-br from-oavian-orange to-oavian-yellow text-white', icon: ThumbsUp },
              { title: 'Friends', value: '56', color: 'bg-gradient-to-br from-oavian-blue to-oavian-teal text-white', icon: User },
              { title: 'Albums', value: '8', color: 'bg-gradient-to-br from-oavian-teal to-oavian-blue text-white', icon: Calendar }
            ].map((stat, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`${stat.color} p-6`}>
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium text-white/90 mb-2">
                      {stat.title}
                    </div>
                    <stat.icon className="h-6 w-6 text-white/70" />
                  </div>
                  <div className="text-3xl font-bold">{stat.value}</div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Feed area */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Recent Memories</h2>
              <Button variant="ghost" size="sm" className="text-oavian-blue flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {recentMemories.map((memory, index) => (
                <div 
                  key={memory.id} 
                  className="memory-card group animate-fade-in hover:shadow-lg transition-all" 
                  style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={memory.image} 
                      alt={memory.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-3">
                        <h3 className="text-white font-medium">{memory.title}</h3>
                        <p className="text-white/70 text-sm">{memory.date}</p>
                      </div>
                    </div>
                    <div className="absolute top-2 left-2">
                      <Avatar className="h-8 w-8 border-2 border-white">
                        <AvatarImage src={memory.user.avatar} alt={memory.user.name} />
                        <AvatarFallback>{memory.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="outline" className="text-xs bg-black/30 text-white border-none backdrop-blur-sm">{memory.date}</Badge>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium mb-1 truncate">{memory.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="h-4 w-4 text-oavian-blue" />
                          <span className="text-sm">{memory.likes}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4 text-oavian-orange" />
                          <span className="text-sm">{memory.comments}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Friend suggestions */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">People You May Know</h2>
              <Button variant="ghost" size="sm" className="text-oavian-blue flex items-center gap-1">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {friendSuggestions.map((friend, index) => (
                <Card key={friend.id} className="hover:shadow-md transition-all">
                  <CardContent className="p-4 flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={friend.avatar} alt={friend.name} />
                      <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-medium">{friend.name}</p>
                      <p className="text-xs text-muted-foreground">{friend.class}</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-oavian-blue text-oavian-blue hover:bg-oavian-blue/5">
                      Add
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {/* Profile card */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-oavian-blue to-oavian-teal h-24 relative">
              <div className="absolute -bottom-10 left-4">
                <Avatar className="h-20 w-20 border-4 border-background">
                  <AvatarImage src="https://i.pravatar.cc/150?img=57" alt="Your Avatar" />
                  <AvatarFallback>YA</AvatarFallback>
                </Avatar>
              </div>
            </div>
            <CardContent className="pt-12 pb-4">
              <h3 className="font-bold text-lg">Vikram Sharma</h3>
              <p className="text-sm text-muted-foreground">Batch of 2016</p>
              
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div>
                  <p className="font-bold">124</p>
                  <p className="text-xs text-muted-foreground">Memories</p>
                </div>
                <div>
                  <p className="font-bold">56</p>
                  <p className="text-xs text-muted-foreground">Friends</p>
                </div>
                <div>
                  <p className="font-bold">8</p>
                  <p className="text-xs text-muted-foreground">Albums</p>
                </div>
              </div>
              
              <div className="mt-4">
                <Button className="w-full bg-gradient-to-r from-oavian-blue to-oavian-orange text-white">
                  View Profile
                </Button>
              </div>
            </CardContent>
          </Card>
        
          {/* Notifications */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-oavian-blue to-oavian-teal p-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-white">Notifications</h2>
                <Badge className="bg-white text-oavian-blue">{notifications.length}</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div key={notification.id} className="flex gap-3 items-start hover:bg-muted/30 p-2 rounded-md transition-colors cursor-pointer">
                    <div className="bg-gradient-to-br from-oavian-blue to-oavian-orange rounded-full p-2 shrink-0">
                      <Bell className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm">{notification.message}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="ghost" size="sm" className="text-oavian-blue text-sm">
                  View All Notifications
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Upcoming Events */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-oavian-orange to-oavian-yellow p-4">
              <h2 className="text-xl font-bold text-white">Upcoming Events</h2>
            </div>
            <CardContent className="p-4">
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border-l-2 border-oavian-orange pl-4 hover:bg-muted/30 p-2 rounded-r-md transition-colors cursor-pointer">
                    <h3 className="font-medium">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.date}</p>
                    <p className="text-xs text-muted-foreground">{event.location}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="ghost" size="sm" className="text-oavian-orange text-sm">
                  View Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Quick Links */}
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-oavian-teal to-oavian-blue p-4">
              <h2 className="text-xl font-bold text-white">Quick Links</h2>
            </div>
            <CardContent className="p-4">
              <div className="space-y-1">
                {[
                  'Upload Photos',
                  'Create Album',
                  'Find Friends',
                  'View Timeline',
                  'Vote in Polls'
                ].map((link, index) => (
                  <div key={index} className="p-2 hover:bg-muted rounded-md cursor-pointer transition-colors flex items-center justify-between group">
                    <div className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-oavian-blue to-oavian-orange mr-2"></div>
                      {link}
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <Button className="w-full" variant="outline">
                  View All Features
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="text-center text-xs text-muted-foreground">
            <p className="flex items-center justify-center">
              Made with <span className="text-red-500 mx-1">❤️</span> by sanket3yoprogrammer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

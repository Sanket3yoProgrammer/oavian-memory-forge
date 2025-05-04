
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MessageSquare, Search, UserPlus, Users } from 'lucide-react';

const FriendsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Demo data - in a real app this would come from an API
  const friends = [
    {
      id: '1',
      name: 'Rahul Kumar',
      batch: '2020-2021',
      avatar: 'https://i.pravatar.cc/150?img=33',
      status: 'online',
      lastActive: 'Now',
      bio: 'Always curious, always learning!',
      interests: ['Photography', 'Coding', 'Chess']
    },
    {
      id: '2',
      name: 'Priya Sharma',
      batch: '2020-2021',
      avatar: 'https://i.pravatar.cc/150?img=48',
      status: 'offline',
      lastActive: '3 hours ago',
      bio: 'Dream big, achieve bigger!',
      interests: ['Dancing', 'Poetry', 'Painting']
    },
    {
      id: '3',
      name: 'Vikram Singh',
      batch: '2019-2020',
      avatar: 'https://i.pravatar.cc/150?img=12',
      status: 'online',
      lastActive: 'Now',
      bio: 'Sports enthusiast and tech geek',
      interests: ['Cricket', 'Technology', 'Traveling']
    },
    {
      id: '4',
      name: 'Neha Gupta',
      batch: '2021-2022',
      avatar: 'https://i.pravatar.cc/150?img=25',
      status: 'offline',
      lastActive: '1 day ago',
      bio: 'Life is short, make it sweet!',
      interests: ['Music', 'Cooking', 'Reading']
    },
    {
      id: '5',
      name: 'Amit Patel',
      batch: '2020-2021',
      avatar: 'https://i.pravatar.cc/150?img=67',
      status: 'online',
      lastActive: 'Now',
      bio: 'Science lover and future engineer',
      interests: ['Robotics', 'Mathematics', 'Gaming']
    },
    {
      id: '6',
      name: 'Sneha Reddy',
      batch: '2019-2020',
      avatar: 'https://i.pravatar.cc/150?img=44',
      status: 'offline',
      lastActive: '5 hours ago',
      bio: 'Creating art from chaos',
      interests: ['Drawing', 'Literature', 'Psychology']
    },
    {
      id: '7',
      name: 'Arjun Menon',
      batch: '2021-2022',
      avatar: 'https://i.pravatar.cc/150?img=54',
      status: 'online',
      lastActive: 'Now',
      bio: 'Debater and critical thinker',
      interests: ['Debating', 'Politics', 'Philosophy']
    },
    {
      id: '8',
      name: 'Anjali Patel',
      batch: '2020-2021',
      avatar: 'https://i.pravatar.cc/150?img=45',
      status: 'offline',
      lastActive: '2 days ago',
      bio: 'Dreamer, achiever, explorer!',
      interests: ['Astronomy', 'Hiking', 'Photography']
    }
  ];

  const suggestions = [
    {
      id: '9',
      name: 'Rohit Sharma',
      batch: '2019-2020',
      avatar: 'https://i.pravatar.cc/150?img=60',
      mutualFriends: 3,
      interests: ['Cricket', 'Music', 'Movies']
    },
    {
      id: '10',
      name: 'Ananya Singh',
      batch: '2021-2022',
      avatar: 'https://i.pravatar.cc/150?img=29',
      mutualFriends: 5,
      interests: ['Dance', 'Fashion', 'Travel']
    },
    {
      id: '11',
      name: 'Karthik Reddy',
      batch: '2020-2021',
      avatar: 'https://i.pravatar.cc/150?img=70',
      mutualFriends: 2,
      interests: ['Basketball', 'Photography', 'Gaming']
    },
    {
      id: '12',
      name: 'Meera Joshi',
      batch: '2019-2020',
      avatar: 'https://i.pravatar.cc/150?img=49',
      mutualFriends: 4,
      interests: ['Singing', 'Yoga', 'Cooking']
    }
  ];

  const filteredFriends = friends.filter(friend => 
    friend.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen p-6 animate-fade-in">
      <div className="flex flex-col">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient-blue-yellow mb-2">Friends</h1>
          <p className="text-muted-foreground">
            Connect with fellow Oavians and build lasting friendships!
          </p>
        </div>
        
        <Tabs defaultValue="friends" className="mb-8">
          <TabsList className="mb-6">
            <TabsTrigger value="friends" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="h-4 w-4 mr-2" />
              My Friends
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <UserPlus className="h-4 w-4 mr-2" />
              Friend Suggestions
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="friends" className="space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search friends..." 
                className="pl-9" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* Friends Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredFriends.map((friend) => (
                <Card 
                  key={friend.id} 
                  className="overflow-hidden transition-all hover:shadow-lg relative group"
                >
                  <div className="absolute top-3 right-3 z-10">
                    <div className={`h-2 w-2 rounded-full ${friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                  </div>
                  
                  <div className="p-4 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-3 border-2 border-primary">
                      <AvatarImage src={friend.avatar} alt={friend.name} />
                      <AvatarFallback>{friend.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{friend.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Batch: {friend.batch}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {friend.status === 'online' ? 'Online Now' : `Last seen ${friend.lastActive}`}
                    </p>
                    
                    <p className="text-sm mb-3 line-clamp-2 italic">"{friend.bio}"</p>
                    
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {friend.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-center gap-2">
                      <Button size="sm" variant="outline" className="w-full">
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Message
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="suggestions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {suggestions.map((suggestion) => (
                <Card 
                  key={suggestion.id} 
                  className="overflow-hidden transition-all hover:shadow-lg"
                >
                  <div className="p-4 text-center">
                    <Avatar className="h-20 w-20 mx-auto mb-3 border-2 border-muted">
                      <AvatarImage src={suggestion.avatar} alt={suggestion.name} />
                      <AvatarFallback>{suggestion.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg mb-1">{suggestion.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">Batch: {suggestion.batch}</p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {suggestion.mutualFriends} mutual friends
                    </p>
                    
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {suggestion.interests.map((interest) => (
                        <Badge key={interest} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button size="sm" variant="default" className="w-full">
                      <UserPlus className="h-4 w-4 mr-1" />
                      Add Friend
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default FriendsPage;

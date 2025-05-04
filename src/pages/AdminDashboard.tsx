
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Edit, 
  Plus, 
  Search, 
  Trash, 
  Users, 
  Image, 
  MessageSquare, 
  Music, 
  Settings, 
  PieChart
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  // Demo data - in a real app, this would come from an API
  const users = [
    { id: 1, name: "Sanket Panda", email: "sanketpanda@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Amit Kumar", email: "amit@example.com", role: "Editor", status: "Active" },
    { id: 3, name: "Priya Sharma", email: "priya@example.com", role: "User", status: "Inactive" },
    { id: 4, name: "Rahul Verma", email: "rahul@example.com", role: "User", status: "Active" },
    { id: 5, name: "Neha Gupta", email: "neha@example.com", role: "Editor", status: "Active" },
  ];

  const memories = [
    { id: 1, title: "Annual Day 2023", author: "Sanket Panda", date: "2023-12-15", likes: 45 },
    { id: 2, title: "Sports Meet", author: "Amit Kumar", date: "2023-11-20", likes: 32 },
    { id: 3, title: "Graduation Ceremony", author: "Priya Sharma", date: "2024-02-10", likes: 67 },
    { id: 4, title: "Cultural Festival", author: "Rahul Verma", date: "2024-01-05", likes: 28 },
  ];

  const galleries = [
    { id: 1, title: "School Campus", imageCount: 24, createdAt: "2023-12-10" },
    { id: 2, title: "Science Exhibition", imageCount: 15, createdAt: "2023-11-15" },
    { id: 3, title: "Field Trip", imageCount: 32, createdAt: "2024-01-25" },
  ];

  const songs = [
    { id: 1, title: "School Anthem", artist: "OAV Choir", duration: "03:45" },
    { id: 2, title: "Graduation Song", artist: "School Band", duration: "04:12" },
    { id: 3, title: "Memories Theme", artist: "Music Club", duration: "02:58" },
  ];

  // Filter function for search
  const filterItems = (items, term) => {
    if (!term) return items;
    return items.filter(item => 
      Object.values(item).some(
        value => value.toString().toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <div className="container py-8 animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your Oavian Memories platform</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-full pl-9 md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="bg-gradient-to-r from-oavian-blue to-oavian-orange text-white hover:opacity-90">
            <Plus className="mr-1 h-4 w-4" /> Add New
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="admin-stat-card">
          <Users className="h-8 w-8 mb-2 text-oavian-blue" />
          <div className="text-2xl font-bold">{users.length}</div>
          <p className="text-sm text-muted-foreground">Total Users</p>
        </Card>
        <Card className="admin-stat-card">
          <MessageSquare className="h-8 w-8 mb-2 text-oavian-orange" />
          <div className="text-2xl font-bold">{memories.length}</div>
          <p className="text-sm text-muted-foreground">Memories</p>
        </Card>
        <Card className="admin-stat-card">
          <Image className="h-8 w-8 mb-2 text-oavian-teal" />
          <div className="text-2xl font-bold">{galleries.length}</div>
          <p className="text-sm text-muted-foreground">Galleries</p>
        </Card>
        <Card className="admin-stat-card">
          <Music className="h-8 w-8 mb-2 text-oavian-yellow" />
          <div className="text-2xl font-bold">{songs.length}</div>
          <p className="text-sm text-muted-foreground">Songs</p>
        </Card>
      </div>

      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={setActiveTab}
        className="w-full"
      >
        <TabsList className="mb-6">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <PieChart className="h-4 w-4" /> Overview
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <Users className="h-4 w-4" /> Users
          </TabsTrigger>
          <TabsTrigger value="memories" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" /> Memories
          </TabsTrigger>
          <TabsTrigger value="galleries" className="flex items-center gap-2">
            <Image className="h-4 w-4" /> Galleries
          </TabsTrigger>
          <TabsTrigger value="music" className="flex items-center gap-2">
            <Music className="h-4 w-4" /> Music
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" /> Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <h2 className="text-xl font-semibold mb-4">Platform Overview</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-4">
              <h3 className="font-medium mb-3">Recent User Activity</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-md">
                  <span>Sanket Panda created a new memory</span>
                  <span className="text-xs text-muted-foreground">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-md">
                  <span>Amit Kumar uploaded 5 new photos</span>
                  <span className="text-xs text-muted-foreground">Yesterday</span>
                </div>
                <div className="flex items-center justify-between p-2 bg-muted/30 rounded-md">
                  <span>Priya Sharma joined the platform</span>
                  <span className="text-xs text-muted-foreground">2 days ago</span>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <h3 className="font-medium mb-3">Popular Content</h3>
              <div className="space-y-2">
                {memories.slice(0, 3).map((memory) => (
                  <div key={memory.id} className="flex items-center justify-between p-2 bg-muted/30 rounded-md">
                    <span>{memory.title}</span>
                    <span className="text-xs">{memory.likes} likes</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Manage Users</h2>
              <Button>
                <Plus className="mr-1 h-4 w-4" /> Add User
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="admin-table-header admin-table-cell">ID</th>
                    <th className="admin-table-header admin-table-cell">Name</th>
                    <th className="admin-table-header admin-table-cell">Email</th>
                    <th className="admin-table-header admin-table-cell">Role</th>
                    <th className="admin-table-header admin-table-cell">Status</th>
                    <th className="admin-table-header admin-table-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterItems(users, searchTerm).map((user) => (
                    <tr key={user.id} className="admin-table-row">
                      <td className="admin-table-cell">{user.id}</td>
                      <td className="admin-table-cell font-medium">{user.name}</td>
                      <td className="admin-table-cell">{user.email}</td>
                      <td className="admin-table-cell">
                        <Badge variant={user.role === "Admin" ? "default" : "outline"}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="admin-table-cell">
                        <Badge 
                          variant={user.status === "Active" ? "success" : "secondary"}
                          className={user.status === "Active" ? "bg-green-500/20 text-green-700 dark:text-green-400" : ""}
                        >
                          {user.status}
                        </Badge>
                      </td>
                      <td className="admin-table-cell">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="memories">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Manage Memories</h2>
              <Button>
                <Plus className="mr-1 h-4 w-4" /> Add Memory
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="admin-table-header admin-table-cell">ID</th>
                    <th className="admin-table-header admin-table-cell">Title</th>
                    <th className="admin-table-header admin-table-cell">Author</th>
                    <th className="admin-table-header admin-table-cell">Date</th>
                    <th className="admin-table-header admin-table-cell">Likes</th>
                    <th className="admin-table-header admin-table-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterItems(memories, searchTerm).map((memory) => (
                    <tr key={memory.id} className="admin-table-row">
                      <td className="admin-table-cell">{memory.id}</td>
                      <td className="admin-table-cell font-medium">{memory.title}</td>
                      <td className="admin-table-cell">{memory.author}</td>
                      <td className="admin-table-cell">{memory.date}</td>
                      <td className="admin-table-cell">{memory.likes}</td>
                      <td className="admin-table-cell">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="galleries">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Manage Galleries</h2>
              <Button>
                <Plus className="mr-1 h-4 w-4" /> Add Gallery
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="admin-table-header admin-table-cell">ID</th>
                    <th className="admin-table-header admin-table-cell">Title</th>
                    <th className="admin-table-header admin-table-cell">Images</th>
                    <th className="admin-table-header admin-table-cell">Created At</th>
                    <th className="admin-table-header admin-table-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterItems(galleries, searchTerm).map((gallery) => (
                    <tr key={gallery.id} className="admin-table-row">
                      <td className="admin-table-cell">{gallery.id}</td>
                      <td className="admin-table-cell font-medium">{gallery.title}</td>
                      <td className="admin-table-cell">{gallery.imageCount}</td>
                      <td className="admin-table-cell">{gallery.createdAt}</td>
                      <td className="admin-table-cell">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="music">
          <Card className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Manage Music</h2>
              <Button>
                <Plus className="mr-1 h-4 w-4" /> Add Song
              </Button>
            </div>
            <div className="overflow-x-auto">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th className="admin-table-header admin-table-cell">ID</th>
                    <th className="admin-table-header admin-table-cell">Title</th>
                    <th className="admin-table-header admin-table-cell">Artist</th>
                    <th className="admin-table-header admin-table-cell">Duration</th>
                    <th className="admin-table-header admin-table-cell">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterItems(songs, searchTerm).map((song) => (
                    <tr key={song.id} className="admin-table-row">
                      <td className="admin-table-cell">{song.id}</td>
                      <td className="admin-table-cell font-medium">{song.title}</td>
                      <td className="admin-table-cell">{song.artist}</td>
                      <td className="admin-table-cell">{song.duration}</td>
                      <td className="admin-table-cell">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="p-4">
            <h2 className="text-xl font-semibold mb-4">Platform Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">General</h3>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Platform Name</label>
                      <Input defaultValue="Oavian Memories" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">School Name</label>
                      <Input defaultValue="Odisha Adarsha Vidyalaya" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Platform Description</label>
                    <Input defaultValue="Your ultimate digital yearbook to preserve and cherish all your school memories from Odisha Adarsha Vidyalaya." />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-2">Appearance</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Primary Color</label>
                      <Input type="color" defaultValue="#1e3a8a" className="h-10" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Secondary Color</label>
                      <Input type="color" defaultValue="#f97316" className="h-10" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button variant="outline">Cancel</Button>
                <Button>Save Changes</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;


import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, BookOpen, Landmark, Users } from 'lucide-react';
import { GoogleMap } from '@/components/map/google-map';

const AboutPage = () => {
  return (
    <div className="min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">About OAV</h1>
        <p className="text-muted-foreground">Learn about Odisha Adarsha Vidyalaya and Oavian Memories</p>
      </div>

      <Tabs defaultValue="school" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="school" className="flex gap-2 items-center justify-center">
            <Landmark className="h-4 w-4" /> 
            <span className="hidden sm:inline">School</span>
          </TabsTrigger>
          <TabsTrigger value="community" className="flex gap-2 items-center justify-center">
            <Users className="h-4 w-4" /> 
            <span className="hidden sm:inline">Community</span>
          </TabsTrigger>
          <TabsTrigger value="achievements" className="flex gap-2 items-center justify-center">
            <Award className="h-4 w-4" /> 
            <span className="hidden sm:inline">Achievements</span>
          </TabsTrigger>
          <TabsTrigger value="app" className="flex gap-2 items-center justify-center">
            <BookOpen className="h-4 w-4" /> 
            <span className="hidden sm:inline">About App</span>
          </TabsTrigger>
        </TabsList>
        
        {/* School Tab */}
        <TabsContent value="school">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-bold mb-4">Odisha Adarsha Vidyalaya</h2>
                    <img 
                      src="https://i.postimg.cc/T25gK6Bg/images-23.png" 
                      alt="OAV Logo"
                      className="h-12 w-12" 
                    />
                  </div>
                  
                  <p className="mb-4">
                    Odisha Adarsha Vidyalaya (OAV) is a premier educational institution in Odisha, India, 
                    dedicated to providing quality education and all-round development to students. 
                    The school follows the CBSE curriculum and focuses on holistic development.
                  </p>
                  
                  <p className="mb-4">
                    Founded with the vision of providing high-quality education to students from 
                    diverse backgrounds, OAV has established itself as a center of academic excellence 
                    and character building.
                  </p>
                  
                  <p>
                    The school is equipped with modern facilities including science laboratories, 
                    computer labs, a well-stocked library, sports facilities, and smart classrooms 
                    to provide a conducive learning environment.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Our Mission & Vision</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-lg text-primary">Mission</h3>
                      <p>
                        To provide quality education that nurtures intellectual curiosity, 
                        critical thinking, and a passion for lifelong learning, while fostering 
                        personal integrity, social responsibility, and cultural appreciation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg text-primary">Vision</h3>
                      <p>
                        To be a leading educational institution that empowers students to become 
                        confident, compassionate, and accomplished individuals who contribute 
                        positively to society and excel in their chosen fields.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg text-primary">Values</h3>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Excellence in education</li>
                        <li>Character development</li>
                        <li>Inclusivity and diversity</li>
                        <li>Innovation and creativity</li>
                        <li>Social responsibility</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">School Information</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-muted-foreground">Established</h4>
                      <p>2016</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-muted-foreground">Affiliation</h4>
                      <p>Central Board of Secondary Education (CBSE)</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-muted-foreground">Classes</h4>
                      <p>VI to XII</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-muted-foreground">Medium of Instruction</h4>
                      <p>English</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-muted-foreground">Contact</h4>
                      <p>info@oav.edu.in</p>
                      <p>+91 123 456 7890</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <p className="mb-4">
                    OAV is located in the heart of Odisha, providing a serene and conducive 
                    environment for learning and growth.
                  </p>
                  <GoogleMap />
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Community Tab */}
        <TabsContent value="community">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Our Oavian Community</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Faculty</h3>
                  <p className="mb-4">
                    Our dedicated team of educators are experts in their fields and are committed
                    to providing the best possible education to our students. They act not just as
                    teachers but as mentors who guide students in their academic and personal growth.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg"></div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Students</h3>
                  <p className="mb-4">
                    Our diverse student body brings together young minds from various backgrounds,
                    creating a rich learning environment where different perspectives are valued.
                    Oavians are known for their academic excellence, creativity, and leadership qualities.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg"></div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-3">Alumni Network</h3>
                <p className="mb-4">
                  Our alumni continue to be an integral part of the OAV family. Many have gone
                  on to achieve remarkable success in various fields including academics, sports,
                  arts, entrepreneurship, and public service. Through Oavian Memories, we aim to
                  strengthen the bond between current students and alumni, facilitating mentorship
                  and networking opportunities.
                </p>
                <p>
                  The alumni network organizes regular meetups, contributes to school development
                  initiatives, and provides guidance to current students through career counseling
                  sessions and workshops.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Achievements Tab */}
        <TabsContent value="achievements">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">School & Student Achievements</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Academic Excellence</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "100% Board Results",
                        description: "Consistently achieved 100% pass percentage in CBSE Board Examinations."
                      },
                      {
                        title: "Merit Scholarships",
                        description: "Over 50 students received national-level merit scholarships in the past 3 years."
                      },
                      {
                        title: "Olympiad Winners",
                        description: "Students have represented the school in International Science and Math Olympiads."
                      }
                    ].map((achievement, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-bold text-primary">{achievement.title}</h4>
                        <p className="text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Sports</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "State Champions",
                        description: "Won the state-level inter-school cricket tournament for 3 consecutive years."
                      },
                      {
                        title: "National Athletes",
                        description: "Five students selected for national-level athletic competitions."
                      },
                      {
                        title: "Chess Masters",
                        description: "School chess team ranked in the top 5 in the national CBSE Chess Championship."
                      }
                    ].map((achievement, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-bold text-primary">{achievement.title}</h4>
                        <p className="text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Co-curricular Activities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Debate Champions",
                        description: "Won the Regional Inter-school Debate Competition 2024."
                      },
                      {
                        title: "Art Exhibition",
                        description: "Students' artwork featured in the State Art Gallery."
                      },
                      {
                        title: "Robotics Team",
                        description: "Secured 2nd position in the National Robotics Challenge."
                      }
                    ].map((achievement, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-bold text-primary">{achievement.title}</h4>
                        <p className="text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">School Recognition</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Best School Award",
                        description: "Received the 'Best CBSE School in the Region' award for educational excellence in 2023."
                      },
                      {
                        title: "Green School Certification",
                        description: "Recognized for environmental initiatives and sustainable practices."
                      }
                    ].map((achievement, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-bold text-primary">{achievement.title}</h4>
                        <p className="text-sm">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* App Tab */}
        <TabsContent value="app">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">About Oavian Memories</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">The Digital Yearbook</h3>
                  <p>
                    Oavian Memories is an interactive, modern, and playful digital yearbook web app created
                    specifically for the students of Odisha Adarsha Vidyalaya (OAV). It is designed to be
                    the ultimate space where students can relive their cherished memories, share photos,
                    videos, and other media, and stay connected even after they've left the school.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Photo & Video Galleries",
                      "Memory Wall for Sharing Messages",
                      "Interactive Timeline View",
                      "Polls & Class Superlatives",
                      "Real-time Chat with Classmates",
                      "Music Player Integration",
                      "Dark/Light Mode Options",
                      "Advanced Search Functionality"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                  <p>
                    Oavian Memories is not just a digital album; it's a living, interactive memory
                    space where OAV students can continue to stay connected long after they graduate.
                    Whether they're reminiscing over class photos, chatting with friends, listening
                    to their favorite songs, or voting for school superlatives, this app will keep
                    the spirit of OAV alive for generations.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">Created With Love</h3>
                  <p>
                    This app was created with love and care by a team of passionate developers who
                    believe in preserving the precious memories of school life. We've incorporated
                    the latest web technologies to ensure a smooth, enjoyable experience for all users.
                  </p>
                  <p className="mt-2">
                    We're constantly working to improve and add new features to Oavian Memories.
                    If you have suggestions or feedback, we'd love to hear from you!
                  </p>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-center italic">
                    "Once an Oavian, Always an Oavian"
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AboutPage;

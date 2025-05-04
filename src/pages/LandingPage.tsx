
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { GoogleMap } from '@/components/map/google-map';
import { ArrowRight, Award, Book, Camera, LogIn, MessageSquare, Music, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <img 
              src="https://i.postimg.cc/T25gK6Bg/images-23.png" 
              alt="OAV Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-oavian-blue to-oavian-orange bg-clip-text text-transparent">Oavian Memories</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild className="hover:bg-primary/5">
              <Link to="/auth/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-oavian-blue to-oavian-orange hover:opacity-90 transition-opacity">
              <Link to="/auth/register">Join Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-oavian-blue/5 via-transparent to-oavian-orange/5 z-0"></div>
        <div className="absolute inset-0 z-0">
          <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full w-full transform rotate-12 scale-150 opacity-10">
            {Array(25).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="rounded-lg bg-gradient-to-br from-oavian-blue to-oavian-orange animate-float"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Once an Oavian,</span>
              <span className="bg-gradient-to-r from-oavian-blue to-oavian-orange bg-clip-text text-transparent">Always an Oavian</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Your ultimate digital yearbook to preserve and cherish all your school memories from Odisha Adarsha Vidyalaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-gradient-to-r from-oavian-blue to-oavian-orange hover:opacity-90 transition-all hover:shadow-lg">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-oavian-blue hover:bg-oavian-blue/5">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Remember Every Moment</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Explore our comprehensive features designed to help you preserve and share your school memories.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Camera,
                title: "Photo Galleries",
                description: "Upload and browse photos from all your school events and activities."
              },
              {
                icon: Users,
                title: "Memory Wall",
                description: "Share messages and memories with your classmates and teachers."
              },
              {
                icon: Award,
                title: "Polls & Awards",
                description: "Vote for class superlatives like 'Most Likely to Succeed'."
              },
              {
                icon: Book,
                title: "Timeline View",
                description: "Browse memories chronologically through an interactive timeline."
              },
              {
                icon: Music,
                title: "Music Player",
                description: "Listen to your favorite tunes while browsing memories."
              },
              {
                icon: MessageSquare,
                title: "Real-time Chat",
                description: "Stay connected with your classmates through chat."
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 group">
                <div className="h-12 w-12 rounded-full bg-gradient-to-br from-oavian-blue to-oavian-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Location */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our School Location</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore where our school stands proud on the map of Odisha.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GoogleMap />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-oavian-blue to-oavian-orange text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Your Oavian Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Don't miss out on reconnecting with your classmates and preserving your precious school memories.
          </p>
          <Button size="lg" variant="secondary" asChild className="bg-white text-oavian-blue hover:bg-white/90">
            <Link to="/auth/register" className="flex items-center gap-2">
              <LogIn className="h-5 w-5" /> Join Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <img 
                src="https://i.postimg.cc/T25gK6Bg/images-23.png" 
                alt="OAV Logo" 
                className="h-8 w-8"
              />
              <span className="font-bold">Oavian Memories</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Oavian Memories. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Made with 💙 by sanket3yoprogrammer
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

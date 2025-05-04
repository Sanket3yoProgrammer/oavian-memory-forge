
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { SchoolGlobe } from '@/components/globe/school-globe';
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
            <span className="text-xl font-bold">Oavian Memories</span>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild>
              <Link to="/auth/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/auth/register">Join Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 hero-gradient">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-oavian-blue/20 via-transparent to-oavian-blue/20" />
          <div className="grid grid-cols-5 grid-rows-5 gap-4 h-full w-full transform rotate-12 scale-150">
            {Array(25).fill(0).map((_, i) => (
              <div 
                key={i} 
                className="rounded-lg bg-white/30 backdrop-blur-sm animate-float"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block">Once an Oavian,</span>
              <span className="text-primary">Always an Oavian</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Your ultimate digital yearbook to preserve and cherish all your school memories from Odisha Adarsha Vidyalaya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="button-glow">
                <Link to="/auth/register" className="flex items-center gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Remember Every Moment</h2>
          
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
              <div key={index} className="glass-card p-6">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
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
            <SchoolGlobe />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Join Your Oavian Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't miss out on reconnecting with your classmates and preserving your precious school memories.
          </p>
          <Button size="lg" variant="secondary" asChild>
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
                Made with 💙 by Oavians, for Oavians
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

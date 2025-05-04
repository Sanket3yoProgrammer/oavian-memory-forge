
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30">
      <div className="text-center max-w-md px-4">
        <div className="text-8xl mb-6 flex justify-center">
          <span className="animate-bounce-light inline-block">😢</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">Oops! You bunked this page</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Just like that time you skipped class, this page doesn't seem to exist.
        </p>
        <Button asChild size="lg" className="button-glow">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-5 w-5" /> 
            Back to School
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;

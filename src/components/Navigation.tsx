
import { Button } from "@/components/ui/button";
import { Home, Users, Monitor, Info } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🏡</span>
            <span className="text-xl font-bold text-white">Smart Home</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link to="/">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 flex items-center space-x-2 ${
                  location.pathname === '/' ? 'bg-white/10' : ''
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </Button>
            </Link>
            
            <Link to="/about">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 flex items-center space-x-2 ${
                  location.pathname === '/about' ? 'bg-white/10' : ''
                }`}
              >
                <Info className="w-4 h-4" />
                <span>About</span>
              </Button>
            </Link>
            
            <Link to="/team">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 flex items-center space-x-2 ${
                  location.pathname === '/team' ? 'bg-white/10' : ''
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Team</span>
              </Button>
            </Link>
            
            <Link to="/demo">
              <Button 
                variant="ghost" 
                className={`text-white hover:bg-white/10 flex items-center space-x-2 ${
                  location.pathname === '/demo' ? 'bg-white/10' : ''
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Demo</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

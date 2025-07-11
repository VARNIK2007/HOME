
import { Button } from "@/components/ui/button";
import { Home, Smartphone, Wifi, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Hero = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="flex justify-center mb-8 space-x-4">
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:scale-110 transition-transform duration-300">
            <Home className="w-12 h-12 text-cyan-400" />
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:scale-110 transition-transform duration-300 delay-150">
            <Smartphone className="w-12 h-12 text-blue-400" />
          </div>
          <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl transform hover:scale-110 transition-transform duration-300 delay-300">
            <Wifi className="w-12 h-12 text-purple-400" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          🏡 HOMENOVA
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Control your appliances remotely with ESP8266 and Blynk IoT. 
          Experience the future of home automation with real-time monitoring and smart safety features.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/demo">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Explore Demo
            </Button>
          </Link>
          
          <div className="relative">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 flex items-center gap-2"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Learn More
              <ChevronDown className="w-4 h-4" />
            </Button>
            
            {showDropdown && (
              <div className="absolute top-full mt-2 bg-black/80 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl min-w-[200px]">
                <Link to="/" onClick={() => setShowDropdown(false)}>
                  <div className="px-4 py-3 text-white hover:bg-white/10 transition-colors first:rounded-t-xl">
                    Home
                  </div>
                </Link>
                <Link to="/about" onClick={() => setShowDropdown(false)}>
                  <div className="px-4 py-3 text-white hover:bg-white/10 transition-colors">
                    About
                  </div>
                </Link>
                <Link to="/team" onClick={() => setShowDropdown(false)}>
                  <div className="px-4 py-3 text-white hover:bg-white/10 transition-colors">
                    Team
                  </div>
                </Link>
                <Link to="/demo" onClick={() => setShowDropdown(false)}>
                  <div className="px-4 py-3 text-white hover:bg-white/10 transition-colors last:rounded-b-xl">
                    Demo
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

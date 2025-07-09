
import { Shield, Smartphone, Zap, Wifi } from "lucide-react";

export const Solution = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            💡 Our Smart Solution
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-500/20 shadow-2xl">
            <p className="text-xl md:text-2xl text-center text-gray-200 mb-12 leading-relaxed">
              Our Smart Home Automation system enables users to control appliances like lights, geysers, 
              and fans using the <span className="text-cyan-400 font-semibold">Blynk IoT app</span>. 
              It offers remote access, real-time monitoring, safety, and energy efficiency.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Remote Control</h3>
                <p className="text-gray-300 text-sm">Control from anywhere via Blynk app</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wifi className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Real-time Monitoring</h3>
                <p className="text-gray-300 text-sm">Live status and sensor data</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Safety Features</h3>
                <p className="text-gray-300 text-sm">Gas leak & temperature alerts</p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Energy Efficiency</h3>
                <p className="text-gray-300 text-sm">Smart automation saves power</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

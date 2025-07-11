
import { Navigation } from "@/components/Navigation";
import { ExternalLink, Thermometer, Wind, Smartphone, Cog } from "lucide-react";

const Demo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      <div className="pt-24 px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              🎥 Live Demo
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Video Section */}
          <div className="mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="aspect-video bg-black/50 rounded-2xl flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <ExternalLink className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h2 className="text-white text-2xl font-bold mb-4">Click Here to Watch Demo Video</h2>
                  <a 
                    href="https://1drv.ms/v/c/ba99693dd075d1d0/EVkbB7QGu_5CkSzEeg2nYEIBAI6pUQQPMgk0A1VBs0IkHw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Watch Demo <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features Demo */}
          <div className="space-y-12">
            {/* Temperature Sensor */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <Thermometer className="w-8 h-8 text-red-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Temperature Sensor</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">Manual Control</h3>
                  <p className="text-gray-300 mb-4">
                    The temperature light can be controlled manually using push buttons or through the Blynk app interface.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-orange-400 mb-3">Automatic Control</h3>
                  <p className="text-gray-300 mb-4">
                    The temperature light automatically turns OFF when the heat reaches a certain temperature threshold, ensuring safety and energy efficiency.
                  </p>
                </div>
              </div>
            </div>

            {/* Gas Sensor */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <Wind className="w-8 h-8 text-green-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Gas Sensor</h2>
              </div>
              <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Automatic Safety Feature</h3>
                <p className="text-gray-300">
                  When the gas sensor detects gas levels above the safety threshold, it automatically triggers the safety protocols. 
                  The servo motor closes the gas valve and alerts are sent through the system to ensure maximum safety.
                </p>
              </div>
            </div>

            {/* Blynk App */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">Blynk App</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-semibold text-blue-400 mb-3">Control Widgets</h3>
                  <p className="text-gray-300 text-sm">
                    ON/OFF switches for lights, geyser, and other appliances with real-time control.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-400 mb-3">Sensor Readings</h3>
                  <p className="text-gray-300 text-sm">
                    Real-time temperature and gas sensor readings displayed through custom widgets.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                  <h3 className="text-lg font-semibold text-purple-400 mb-3">Servo Status</h3>
                  <p className="text-gray-300 text-sm">
                    Monitor and control servo motor status for gas valve operations.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <div className="flex items-center mb-6">
                <Cog className="w-8 h-8 text-yellow-400 mr-4" />
                <h2 className="text-2xl font-bold text-white">How It Works</h2>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 border border-yellow-500/20">
                <p className="text-gray-300 leading-relaxed text-lg">
                  We are using <span className="text-cyan-400 font-semibold">ESP8266</span> and 
                  <span className="text-green-400 font-semibold"> 4 Relay Module</span> where the 
                  <span className="text-blue-400 font-semibold"> AC Bulb</span> is connected to the relay module and 
                  <span className="text-red-400 font-semibold"> LED (Geyser Indication)</span> is connected to the relay module. 
                  These are the core hardware components we are implementing in this smart home automation system.
                </p>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Primary Components:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• ESP8266 NodeMCU (Main Controller)</li>
                      <li>• 4-Channel Relay Module</li>
                      <li>• AC Bulb (Load Simulation)</li>
                      <li>• LED Indicators (Status Display)</li>
                    </ul>
                  </div>
                  <div className="bg-black/20 rounded-lg p-4">
                    <h4 className="text-white font-semibold mb-2">Control Methods:</h4>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Manual Push Buttons</li>
                      <li>• Blynk Mobile App</li>
                      <li>• Automatic Sensor Triggers</li>
                      <li>• Real-time Monitoring</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

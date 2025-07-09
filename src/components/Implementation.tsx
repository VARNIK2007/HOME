
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Smartphone } from "lucide-react";

export const Implementation = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            🛠 Implementation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Hardware Setup</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-cyan-400">ESP8266:</strong> Main microcontroller</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-green-400">DS18B20:</strong> Temperature sensor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-red-400">MQ2:</strong> Gas leak detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-purple-400">Relay modules:</strong> Appliance control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-yellow-400">Push buttons & servo:</strong> Manual control</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Remote Control</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-cyan-400">Blynk App:</strong> User-friendly interface</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-green-400">Wi-Fi Connectivity:</strong> Seamless connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-purple-400">Virtual Dashboard:</strong> Real-time monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300"><strong className="text-yellow-400">Cloud Integration:</strong> Data storage & analytics</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

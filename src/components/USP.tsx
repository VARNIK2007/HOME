
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ToggleLeft, Shield } from "lucide-react";

export const USP = () => {
  return (
    <section className="py-20 px-6 bg-black/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ✨ Why Choose Us
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Cost-Effective</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                Built using low-cost and easily available components, making smart home automation accessible to everyone.
              </p>
              <div className="bg-green-500/20 rounded-xl p-4">
                <h4 className="text-green-400 font-semibold mb-2">Components Used:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• ESP8266 NodeMCU</li>
                  <li>• Standard relay modules</li>
                  <li>• Common sensors (DS18B20, MQ2)</li>
                  <li>• Basic electronic components</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border-blue-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <ToggleLeft className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Dual Operation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                Works through both physical switches and app interface, ensuring convenience and reliability.
              </p>
              <div className="bg-blue-500/20 rounded-xl p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Control Methods:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Physical wall switches</li>
                  <li>• Blynk mobile app</li>
                  <li>• Voice commands (optional)</li>
                  <li>• Automated scheduling</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm border-red-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl text-white">Safety Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 text-center">
                Automatically reacts to gas leaks and temperature thresholds to ensure home safety.
              </p>
              <div className="bg-red-500/20 rounded-xl p-4">
                <h4 className="text-red-400 font-semibold mb-2">Safety Alerts:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Gas leak detection & alerts</li>
                  <li>• Temperature monitoring</li>
                  <li>• Automatic shutoff features</li>
                  <li>• Emergency notifications</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

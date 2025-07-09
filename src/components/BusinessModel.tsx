
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Cloud } from "lucide-react";

export const BusinessModel = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            💼 Business Model
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm border-green-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">DIY Smart Kits</CardTitle>
              <p className="text-gray-300">Perfect for students & tech enthusiasts</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Starter Kit</span>
                  <span className="text-2xl font-bold text-green-400">₹2,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pro Kit</span>
                  <span className="text-2xl font-bold text-blue-400">₹4,999</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Complete Kit</span>
                  <span className="text-2xl font-bold text-purple-400">₹7,999</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• All hardware components included</li>
                <li>• Step-by-step assembly guide</li>
                <li>• Basic Blynk app setup</li>
                <li>• Email support included</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white">
                Order Kit
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">App-based Service</CardTitle>
              <p className="text-gray-300">Premium features & customization</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Basic Plan</span>
                  <span className="text-2xl font-bold text-purple-400">₹99/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Pro Plan</span>
                  <span className="text-2xl font-bold text-pink-400">₹299/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Enterprise</span>
                  <span className="text-2xl font-bold text-cyan-400">Custom</span>
                </div>
              </div>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Advanced analytics dashboard</li>
                <li>• Custom automation rules</li>
                <li>• Cloud data storage</li>
                <li>• Priority technical support</li>
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white">
                Start Free Trial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

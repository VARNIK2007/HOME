
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Building, Zap } from "lucide-react";

export const MarketAnalysis = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            📊 Market Analysis
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-cyan-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Growing Demand</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Smart home market is booming globally with exponential growth projected.
                </p>
                <div className="bg-cyan-500/20 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">$80B+</div>
                    <div className="text-sm text-gray-300">Global market size by 2025</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Urban Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Rapid adoption in cities and smart housing projects across India.
                </p>
                <div className="bg-green-500/20 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">75%</div>
                    <div className="text-sm text-gray-300">Urban households interested</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-sm border-yellow-500/20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Energy Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center mb-4">
                  Drives consumer interest in automation technologies for sustainable living.
                </p>
                <div className="bg-yellow-500/20 rounded-xl p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-1">30%</div>
                    <div className="text-sm text-gray-300">Average energy savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-6">Market Opportunity</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">Target Segments</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Tech-savvy millennials and Gen Z</li>
                  <li>• Engineering students and hobbyists</li>
                  <li>• Budget-conscious homeowners</li>
                  <li>• Small to medium enterprises</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3">Growth Drivers</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Increasing smartphone penetration</li>
                  <li>• Rising electricity costs</li>
                  <li>• Government smart city initiatives</li>
                  <li>• COVID-19 work-from-home trend</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

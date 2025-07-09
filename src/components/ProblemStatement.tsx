
import { AlertTriangle, Clock, Zap } from "lucide-react";

export const ProblemStatement = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            📌 The Problem We Solve
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Manual Operation</h3>
                <p className="text-gray-300 text-sm">Limited control and accessibility</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">No Remote Access</h3>
                <p className="text-gray-300 text-sm">Inconvenient when away from home</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Energy Waste</h3>
                <p className="text-gray-300 text-sm">Lack of smart automation features</p>
              </div>
            </div>
            
            <p className="text-xl text-gray-200 text-center leading-relaxed">
              Traditional appliances require manual operation, which lacks flexibility, remote access, 
              and smart automation features. This limits convenience, especially when the user is away from home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

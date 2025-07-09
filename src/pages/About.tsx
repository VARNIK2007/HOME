import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      <div className="pt-24 px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ℹ️ About the Project
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Hardware Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">🔧 Hardware Components</h2>
            
            <div className="space-y-12">
              {/* Microcontroller */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">📦 Microcontroller</h3>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-6 border border-cyan-500/20">
                      <img 
                        src="/lovable-uploads/7a40e4bd-48b1-45b4-bf88-50db682a4270.png" 
                        alt="ESP8266 NodeMCU" 
                        className="w-full h-48 object-contain"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-3">ESP8266 NodeMCU</h4>
                    <p className="text-gray-300 leading-relaxed">
                      A low-cost Wi-Fi-enabled microcontroller used for IoT applications. It connects to the Blynk cloud and controls devices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sensors */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-green-400 mb-6">🧠 Sensors</h3>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-6 border border-green-500/20">
                        <img 
                          src="/lovable-uploads/0db8e816-fef2-4dc3-a1c2-d92dda5da66e.png" 
                          alt="DS18B20 Temperature Sensor" 
                          className="w-full h-48 object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">DS18B20 Temperature Sensor</h4>
                      <p className="text-gray-300 leading-relaxed">
                        A digital sensor used to measure ambient temperature. It supports multiple sensors on a single wire.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-6 border border-red-500/20">
                        <img 
                          src="/lovable-uploads/577576d1-d720-434e-8a81-99b1bc8ddb80.png" 
                          alt="MQ2 Gas Sensor" 
                          className="w-full h-48 object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">MQ2 Gas Sensor</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Used to detect flammable gases like LPG, smoke, and methane in the environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actuators */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-purple-400 mb-6">⚡ Actuators</h3>
                <div className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                        <img 
                          src="/lovable-uploads/a8a21dd4-ddd7-437a-b0ba-f5378df0ed6b.png" 
                          alt="Relay Module" 
                          className="w-full h-48 object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Relay Module (3-Channel)</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Electrically operated switches to control AC appliances (like geyser, light, gas valve) from the ESP8266.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-2xl p-6 border border-blue-500/20">
                        <img 
                          src="/lovable-uploads/3e8d88b8-77d5-416d-96b3-1d3b49dc186b.png" 
                          alt="Servo Motor" 
                          className="w-full h-48 object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-3">Servo Motor (SG90 or MG90S)</h4>
                      <p className="text-gray-300 leading-relaxed">
                        Used to open/close the gas valve automatically based on gas levels.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Components */}
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                <h3 className="text-2xl font-semibold text-yellow-400 mb-6">🧰 Other Components</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-2xl p-6 mb-4 border border-yellow-500/20">
                      <div className="text-center">
                        <img 
                          src="/lovable-uploads/ab40fecb-8070-4f0f-87ce-67dddbf97757.png" 
                          alt="Push Button" 
                          className="w-20 h-20 object-contain mx-auto mb-4"
                        />
                        <h4 className="text-lg font-semibold text-white mt-2 mb-2">Push Buttons (2x)</h4>
                        <p className="text-gray-300 text-sm">For manual toggling of light and geyser locally.</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 rounded-2xl p-6 mb-4 border border-gray-500/20">
                      <div className="text-center">
                        <span className="text-3xl">💡</span>
                        <h4 className="text-lg font-semibold text-white mt-2 mb-2">AC Bulb or Fan (Load)</h4>
                        <p className="text-gray-300 text-sm">Connected to the relay to simulate real appliances.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-300">
                    <strong className="text-white">Additional:</strong> Wires, Breadboard, Power Supply for prototyping and wiring the circuit.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Software Section */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8 text-center">💻 Software Tools</h2>
            
            <div className="space-y-8">
              {/* Blynk IoT App */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📱</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-cyan-400">Blynk IoT App</h3>
                </div>
                <p className="text-gray-300 text-center leading-relaxed">
                  Blynk is a powerful platform that allows you to create custom IoT dashboards. Using the Blynk mobile app, 
                  you can control devices like geysers, lights, and fans wirelessly from anywhere. It connects to the ESP8266 
                  using the Blynk authentication token.
                </p>
              </div>

              {/* Arduino IDE */}
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20 shadow-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-green-400">Arduino IDE</h3>
                </div>
                <p className="text-gray-300 text-center leading-relaxed mb-4">
                  Used for writing, compiling, and uploading the ESP8266 firmware. Libraries like{" "}
                  <code className="bg-black/30 px-2 py-1 rounded text-cyan-400">DallasTemperature</code>,{" "}
                  <code className="bg-black/30 px-2 py-1 rounded text-cyan-400">Servo</code>, and{" "}
                  <code className="bg-black/30 px-2 py-1 rounded text-cyan-400">BlynkSimpleEsp8266</code>{" "}
                  are used for sensor and cloud integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

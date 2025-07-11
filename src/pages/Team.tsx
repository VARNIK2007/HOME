
import { Navigation } from "@/components/Navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "R. SATHWIK RAM",
      role: "CAPTAIN",
      photo: "/lovable-uploads/835e7502-8e8d-4a0a-8ec2-e7460076b0fe.png",
      initials: "SR"
    },
    {
      name: "S. VARNIK",
      role: "MEMBER",
      photo: "/lovable-uploads/f72344e5-7591-4365-adc9-2bee8f0db942.png",
      initials: "SV"
    },
    {
      name: "K. AKSHAY RAJ",
      role: "MEMBER",
      photo: "/lovable-uploads/e352c17e-f73b-4190-bb23-31eb2752b807.png",
      initials: "KA"
    },
    {
      name: "B. HARI",
      role: "MEMBER",
      photo: "/lovable-uploads/b55de84b-0bf8-45e6-989d-bbc1a7e96534.png",
      initials: "BH"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      <div className="pt-24 px-6 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              👥 Our Team
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl hover:bg-white/10 transition-all duration-300">
                <div className="text-center">
                  <div className="mb-6">
                    <Avatar className="w-32 h-32 mx-auto border-4 border-gradient-to-r from-cyan-500 to-blue-500">
                      <AvatarImage 
                        src={member.photo} 
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="inline-block">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      member.role === 'CAPTAIN' 
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white' 
                        : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                    }`}>
                      {member.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Team Vision</h2>
              <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Our dedicated team brings together diverse skills and expertise to create innovative IoT solutions 
                for smart home automation. We are committed to developing technology that makes homes safer, 
                more efficient, and user-friendly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

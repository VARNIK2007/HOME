
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProblemStatement } from "@/components/ProblemStatement";
import { Solution } from "@/components/Solution";
import { Implementation } from "@/components/Implementation";
import { USP } from "@/components/USP";
import { MarketAnalysis } from "@/components/MarketAnalysis";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <Solution />
      <Implementation />
      <USP />
      <MarketAnalysis />
      <Footer />
    </div>
  );
};

export default Index;

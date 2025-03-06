
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import LeaderboardPreview from "@/components/LeaderboardPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Compare AI - Advanced Face Comparison Technology";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <LeaderboardPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

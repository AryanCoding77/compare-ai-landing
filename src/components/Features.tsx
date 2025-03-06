
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ScanFace, Trophy, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: ScanFace,
    title: "AI Face Analysis",
    description: "Powered by Face++ API, our advanced AI technology analyzes facial features with remarkable precision."
  },
  {
    icon: Users,
    title: "Face Comparison",
    description: "Compare your face with friends, celebrities, or anyone else to see who shares the most similarities."
  },
  {
    icon: Trophy,
    title: "Global Leaderboard",
    description: "Win comparison matches to increase your score and climb the rankings on our global leaderboard."
  },
  {
    icon: Sparkles,
    title: "Continuous Innovation",
    description: "We're constantly adding new features to enhance your experience and provide more insights."
  }
];

const Features = () => {
  const [activeFeatures, setActiveFeatures] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Staggered animation
          const interval = setInterval(() => {
            setActiveFeatures(prev => {
              const nextIndex = prev.length;
              if (nextIndex < features.length) {
                return [...prev, nextIndex];
              }
              clearInterval(interval);
              return prev;
            });
          }, 150);
          
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Features</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Advanced AI-Powered Face Comparison
          </h3>
          <p className="text-lg text-foreground/80">
            Compare AI uses cutting-edge facial recognition technology to provide accurate, fun, and insightful comparisons.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-2xl p-6 shadow-soft card-hover border border-border/40 transition-all duration-500",
                activeFeatures.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                <feature.icon className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

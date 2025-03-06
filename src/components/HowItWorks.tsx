
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Upload Your Photos",
    description: "Upload a clear photo of yourself and another person you want to compare with."
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our advanced AI powered by Face++ analyzes key facial features of both photos."
  },
  {
    number: "03",
    title: "Get Comparison Results",
    description: "Receive detailed results showing similarity scores across multiple facial attributes."
  },
  {
    number: "04",
    title: "Join the Leaderboard",
    description: "Win comparison matches to increase your score and climb the global rankings."
  }
];

const HowItWorks = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Staggered animation
          const interval = setInterval(() => {
            setActiveSteps(prev => {
              const nextIndex = prev.length;
              if (nextIndex < steps.length) {
                return [...prev, nextIndex];
              }
              clearInterval(interval);
              return prev;
            });
          }, 200);
          
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
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-sm font-medium text-primary mb-3 uppercase tracking-wider">Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            How Compare AI Works
          </h3>
          <p className="text-lg text-foreground/80">
            Get started with our simple four-step process to compare faces and discover fascinating similarities.
          </p>
        </div>
        
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
        >
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "relative transition-all duration-500 ease-out",
                activeSteps.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="bg-white rounded-2xl p-8 shadow-soft border border-border/40 h-full">
                <div className="text-4xl font-extrabold text-primary/20 mb-4">{step.number}</div>
                <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-5 w-10 h-px bg-border z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

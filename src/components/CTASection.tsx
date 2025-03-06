
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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
    <section ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-10">
        <div className={cn(
          "relative bg-gradient-to-tr from-primary/90 to-primary rounded-3xl py-16 px-8 md:py-20 md:px-12 overflow-hidden transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}>
          {/* Background Elements */}
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
            <Sparkles className="text-white/80 mb-6" size={32} />
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to See Who You Look Like?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 mb-10">
              Start comparing faces today. Upload your photo and discover fascinating similarities with friends, celebrities, or historical figures.
            </p>
            
            <Button className="bg-white hover:bg-white/90 text-primary rounded-full px-8 py-6 text-lg font-semibold group">
              Get Started Free
              <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

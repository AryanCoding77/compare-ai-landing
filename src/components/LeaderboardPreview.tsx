
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample leaderboard data
const leaderboardData = [
  { rank: 1, name: "Alex Johnson", score: 2864, avatar: "" },
  { rank: 2, name: "Jamie Smith", score: 2731, avatar: "" },
  { rank: 3, name: "Taylor Wilson", score: 2603, avatar: "" },
  { rank: 4, name: "Morgan Lee", score: 2547, avatar: "" },
  { rank: 5, name: "Casey Brown", score: 2433, avatar: "" },
];

const LeaderboardPreview = () => {
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
    <section 
      id="leaderboard" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Leaderboard Content */}
          <div className={cn(
            "flex-1 transition-all duration-1000",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="flex items-center mb-4 space-x-2">
              <TrendingUp size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">Global Rankings</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Climb The Leaderboard
            </h2>
            
            <p className="text-lg text-foreground/80 mb-8 max-w-xl">
              Win comparison matches to increase your score and rise through the ranks. Compete with friends and users worldwide for the top position.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 py-5 group">
              View Full Leaderboard
              <ChevronRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Leaderboard Preview */}
          <div className={cn(
            "flex-1 w-full max-w-lg transition-all duration-1000 delay-200",
            isVisible ? "opacity-100" : "opacity-0 translate-y-10"
          )}>
            <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-border/40">
              <div className="bg-primary/5 px-6 py-4 border-b border-border/20">
                <h3 className="font-semibold text-lg flex items-center">
                  <TrendingUp size={18} className="text-primary mr-2" />
                  Top Performers
                </h3>
              </div>
              
              <div className="divide-y divide-border/20">
                {leaderboardData.map((entry, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "px-6 py-4 flex items-center transition-all duration-300",
                      index === 0 ? "bg-primary/5" : "hover:bg-secondary/50"
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-3",
                      index === 0 ? "bg-primary text-white" : "bg-secondary text-foreground/70"
                    )}>
                      {entry.rank}
                    </div>
                    
                    <div className="w-8 h-8 bg-secondary rounded-full mr-3"></div>
                    
                    <div className="flex-1">
                      <div className="font-medium">{entry.name}</div>
                    </div>
                    
                    <div className="font-semibold text-primary">
                      {entry.score} pts
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="px-6 py-4 bg-secondary/30 text-center">
                <Button variant="ghost" className="text-primary hover:text-primary/90 font-medium">
                  See Your Ranking
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeaderboardPreview;

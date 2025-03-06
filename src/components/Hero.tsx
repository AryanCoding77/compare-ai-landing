import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Sparkles } from "lucide-react";
const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-60 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-60 animate-pulse-slow animation-delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Hero Content */}
          <div className={`max-w-2xl transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center mb-4 space-x-2">
              <Sparkles size={16} className="text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Face Comparison</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight">
              Who Looks More Like <span className="text-primary">Their Celebrity Twin?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">Compare facial features with friends, using advanced AI technology. See who matches best and climb our global leaderboard.</p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg flex items-center justify-center group">
                Try For Free
                <ChevronRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="border-2 rounded-full px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className={`relative flex-1 min-w-[320px] transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mx-auto w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-primary/10 animate-pulse-slow"></div>
              </div>
              
              <div className="relative z-10 bg-white rounded-3xl shadow-medium overflow-hidden animate-float">
                <div className="bg-gradient-to-tr from-primary/80 to-primary p-1 rounded-3xl">
                  <div className="bg-white rounded-2xl overflow-hidden">
                    <div className="p-6 flex flex-col items-center">
                      <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="aspect-square bg-muted rounded-xl overflow-hidden animate-pulse-slow"></div>
                        <div className="aspect-square bg-muted rounded-xl overflow-hidden animate-pulse-slow"></div>
                      </div>
                      
                      <div className="mt-4 w-full space-y-2">
                        <div className="h-2 w-full bg-muted rounded-full"></div>
                        <div className="h-2 w-2/3 bg-muted rounded-full"></div>
                        <div className="h-8 w-full bg-primary/20 rounded-lg mt-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
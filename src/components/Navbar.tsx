
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-10",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="text-2xl font-bold text-foreground flex items-center">
            Compare AI
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors">How It Works</a>
          <a href="#leaderboard" className="text-foreground/80 hover:text-primary transition-colors">Leaderboard</a>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            Try Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-medium py-6 px-6 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#features" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#leaderboard" 
            className="text-foreground/80 hover:text-primary transition-colors py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Leaderboard
          </a>
          <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 w-full mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Try Now
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

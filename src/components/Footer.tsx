import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary/30 py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <a href="#" className="text-2xl font-bold text-foreground flex items-center">
                Compare AI
              </a>
            </div>
            
            <p className="text-foreground/70 mb-6 max-w-md">
              Advanced AI-powered face comparison technology. Compare facial features with friends, celebrities, or historical figures.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Our Story</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Terms of Use</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">API Documentation</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-foreground/70 hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/40 pt-6 flex flex-col md:flex-row items-center justify-between text-foreground/60 text-sm">
          <div>© {currentYear} Compare AI. All rights reserved.</div>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

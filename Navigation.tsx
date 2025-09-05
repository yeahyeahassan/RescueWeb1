import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Projects', id: 'projects' },
    { name: 'Achievements', id: 'achievements' },
    { name: 'Mission', id: 'mission' },
    { name: 'Team', id: 'team' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-background/90 backdrop-blur-md border-b border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div 
              className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover-glow cursor-pointer transition-all duration-300"
              onClick={() => scrollToSection('home')}
              data-testid="logo-button"
            >
              <Rocket className="text-primary-foreground h-5 w-5" />
            </div>
            <h1 className="text-2xl font-space font-bold text-primary cursor-pointer" onClick={() => scrollToSection('home')}>
              URR TEAM
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-primary transition-colors duration-300 cursor-pointer"
                data-testid={`nav-${item.id}`}
              >
                {item.name}
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              className="bg-primary text-primary-foreground hover:scale-105 hover-glow transition-all duration-300 hidden sm:flex"
              onClick={() => scrollToSection('contact')}
              data-testid="nav-join-mission"
            >
              Join Mission
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-foreground hover:text-primary"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="nav-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors duration-300 w-full text-left"
                  data-testid={`mobile-nav-${item.id}`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                className="w-full mt-4 bg-primary text-primary-foreground"
                onClick={() => scrollToSection('contact')}
                data-testid="mobile-nav-join-mission"
              >
                Join Mission
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

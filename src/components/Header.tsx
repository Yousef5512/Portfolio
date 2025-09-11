import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card gentle-transition">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary gentle-transition"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary gentle-transition"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary gentle-transition"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary gentle-transition"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary gentle-transition"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary gentle-transition"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary gentle-transition"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-foreground hover:text-primary gentle-transition"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-foreground hover:text-primary gentle-transition"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary gentle-transition"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
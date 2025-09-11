import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Download } from "lucide-react";
import profilePhoto from "/lovable-uploads/c6168e59-761b-4a71-bdc2-96e28f0bbb22.png";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm mb-6 gentle-transition">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Available for opportunities
            </div>
            
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Code className="w-8 h-8 text-primary mr-2" />
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-hero mb-4">
              Hello,<br />
              I'm <span className="text-primary">Yousef</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-hero-subtitle mb-4">
              Software Engineering Student
            </h2>
            
            <p className="text-lg text-hero-subtitle mb-6">
              Aspiring Full-Stack Developer
            </p>
            
            <p className="text-hero-subtitle mb-8 max-w-lg mx-auto lg:mx-0">
              Building clean, functional, and impactful web applications with .NET, Java, and modern web technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold gentle-transition animate-glow"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-white/30 text-hero bg-white/10 hover:bg-white/20 px-8 py-3 text-lg font-semibold gentle-transition"
              >
                Let's Contact
              </Button>
            </div>
            
            <p className="text-hero-subtitle mt-8 text-sm">
              Discover my journey
            </p>
          </div>
          
          {/* Right content - Profile image */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 animate-glow">
                <img 
                  src={profilePhoto} 
                  alt="Yousef - Software Engineering Student"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating download button */}
              <Button
                size="icon"
                className="absolute bottom-4 right-4 bg-red-500 hover:bg-red-600 text-white rounded-full w-12 h-12 animate-float"
                style={{ animationDelay: '1s' }}
              >
                <Download className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
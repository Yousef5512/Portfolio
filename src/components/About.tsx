import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, BookOpen, Target, User } from "lucide-react";
import profilePhoto from "/lovable-uploads/c6168e59-761b-4a71-bdc2-96e28f0bbb22.png";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const stats = [
    { label: "GPA", value: "3.85" },
    { label: "Projects", value: "5+" },
    { label: "Study Hours", value: "150+" }
  ];

  const drives = [
    "Clean, maintainable code architecture",
    "Solving complex technical challenges", 
    "Following industry best practices",
    "Creating impactful digital experiences"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about crafting innovative solutions through code and embracing continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div className="animate-fade-in">
            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              <Button
                variant={activeTab === "story" ? "default" : "outline"}
                onClick={() => setActiveTab("story")}
                className="gentle-transition"
              >
                <User className="w-4 h-4 mr-2" />
                My Story
              </Button>
              <Button
                variant={activeTab === "learning" ? "default" : "outline"}
                onClick={() => setActiveTab("learning")}
                className="gentle-transition"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Learning Journey
              </Button>
              <Button
                variant={activeTab === "vision" ? "default" : "outline"}
                onClick={() => setActiveTab("vision")}
                className="gentle-transition"
              >
                <Target className="w-4 h-4 mr-2" />
                Future Vision
              </Button>
            </div>

            {/* Tab content */}
            <div className="min-h-[400px]">
              {activeTab === "story" && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Who I Am</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm a dedicated Software Engineering student with a stellar 3.85 GPA, passionate about 
                    transforming complex problems into elegant digital solutions. My expertise spans across 
                    full-stack development using cutting-edge technologies like .NET, Java, and modern web frameworks.
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Beyond coding, I bring a deep understanding of software development lifecycle methodologies, 
                    including SDLC, UML modeling, and comprehensive system documentation. This holistic approach 
                    ensures that every project I work on is not just functional, but also maintainable and scalable.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "My goal is to contribute meaningfully to innovative projects where I can grow as a developer 
                    while adding substantial value to dynamic, forward-thinking teams."
                  </blockquote>
                </div>
              )}

              {activeTab === "learning" && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-foreground mb-4">What Drives Me</h3>
                  <div className="space-y-4">
                    {drives.map((drive, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Code className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <p className="text-muted-foreground">{drive}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "vision" && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Looking Forward</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    I'm actively seeking opportunities to join innovative teams where I can contribute to 
                    meaningful projects while continuing to grow as a developer. My focus is on companies 
                    that value clean code, continuous learning, and making a positive impact through technology.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Whether it's building scalable web applications, optimizing system performance, or 
                    collaborating on cutting-edge projects, I'm excited to bring my passion and skills 
                    to the next challenge.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right content - Profile card */}
          <div className="animate-slide-in-right">
            <Card className="p-8 text-center gentle-transition hover:shadow-xl">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20">
                <img 
                  src={profilePhoto} 
                  alt="Yousef Ahmed Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">Yousef Ahmed</h3>
              <p className="text-muted-foreground mb-6">Software Engineering Student</p>
              
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
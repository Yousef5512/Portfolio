import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import eventManagement from "@/assets/event-management.jpg";
import ecommercePlatform from "@/assets/ecommerce-platform.jpg";
import sjfScheduler from "@/assets/sjf-scheduler.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Event Management System",
      description: "A comprehensive event management platform with user registration, event creation, booking system, and real-time notifications. Built with modern web technologies for seamless user experience.",
      image: eventManagement,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
      liveLink: "https://github.com/Yousef5512",
      githubLink: "https://github.com/Yousef5512"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with product catalog, shopping cart, payment integration, order management, and admin dashboard. Responsive design with modern UI/UX.",
      image: ecommercePlatform,
      technologies: [".NET", "C#", "SQL Server", "React", "Stripe"],
      liveLink: "https://github.com/Yousef5512",
      githubLink: "https://github.com/Yousef5512"
    },
    {
      id: 3,
      title: "SJF Scheduling System",
      description: "Shortest Job First (SJF) CPU scheduling algorithm implementation with interactive visualization, performance metrics, and comparison with other scheduling algorithms.",
      image: sjfScheduler,
      technologies: ["Java", "JavaFX", "Algorithms", "Data Structures"],
      liveLink: "https://github.com/Yousef5512",
      githubLink: "https://github.com/Yousef5512"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            My Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've mastered
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden gentle-transition hover:shadow-xl hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover gentle-transition hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="flex-1 gentle-transition"
                    asChild
                  >
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm"
                    className="flex-1 gentle-transition"
                    asChild
                  >
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="gentle-transition"
            asChild
          >
            <a 
              href="https://github.com/Yousef5512" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
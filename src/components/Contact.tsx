import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yousefahmed551@gmail.com",
      href: "mailto:yousefahmed551@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "01097234250",
      href: "tel:01097234250"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Egypt, Giza",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yousef-ahmed-0a72a7357/",
      color: "hover:text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Yousef5512",
      color: "hover:text-gray-600"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/yousefahmed551/",
      color: "hover:text-pink-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate? I'd love to hear about your project and discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in">
            <Card className="p-8 h-full">
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href}
                          className="text-muted-foreground hover:text-primary gentle-transition"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-6">
                <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-muted-foreground gentle-transition ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    placeholder="Your full name"
                    required
                    className="gentle-transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="your.email@example.com"
                    required
                    className="gentle-transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    required
                    className="gentle-transition resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full gentle-transition"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
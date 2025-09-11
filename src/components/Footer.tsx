import { Linkedin, Github, Instagram, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yousef-ahmed-0a72a7357/",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Yousef5512",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/yousefahmed551/",
      label: "Instagram"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Yousef Ahmed</h3>
            <p className="text-muted-foreground">Software Engineering Student</p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 gentle-transition"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="text-sm text-muted-foreground hover:text-primary gentle-transition"
          >
            Back to Top ↑
          </button>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> by Yousef Ahmed
            <span className="mx-2">•</span>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Github, Linkedin, Download } from 'lucide-react';
import { Button } from './ui/button';

interface HeroProps {
  season: 'autumn' | 'winter' | 'spring' | 'summer';
}

export const Hero = ({ season }: HeroProps) => {
  const seasonColors = {
    autumn: 'from-[hsl(var(--autumn-primary))] to-[hsl(var(--autumn-accent))]',
    winter: 'from-[hsl(var(--winter-primary))] to-[hsl(var(--winter-accent))]',
    spring: 'from-[hsl(var(--spring-primary))] to-[hsl(var(--spring-accent))]',
    summer: 'from-[hsl(var(--summer-primary))] to-[hsl(var(--summer-accent))]',
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="max-w-6xl mx-auto text-center z-10 parallax-section">
        <h1 className={`text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r ${seasonColors[season]} bg-clip-text text-transparent animate-scale-in`}>
          A.S. Alisha
        </h1>
        
        <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
          UI/UX Designer & Web Developer
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          College Sophomore | Creative Technologist | Literary Club Member
        </p>

        <div className="flex flex-wrap gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-primary to-primary/80 hover:scale-105 transition-transform shadow-lg"
            onClick={() => window.scrollTo({ top: document.getElementById('projects')?.offsetTop || 0, behavior: 'smooth' })}
          >
            View Projects
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://github.com/alisha1806" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline"
            className="gap-2 hover:scale-105 transition-transform"
            asChild
          >
            <a href="https://www.linkedin.com/in/alisha-as-58aa7b33a" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </Button>

          <Button 
            size="lg" 
            variant="secondary"
            className="gap-2 hover:scale-105 transition-transform"
          >
            <Download className="w-5 h-5" />
            Download Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};

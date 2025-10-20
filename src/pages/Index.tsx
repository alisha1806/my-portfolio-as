import { useState, useEffect } from 'react';
import { SeasonalParticles } from '@/components/SeasonalParticles';
import { SeasonSelector } from '@/components/SeasonSelector';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';

type Season = 'autumn' | 'winter' | 'spring' | 'summer';

const Index = () => {
  const [currentSeason, setCurrentSeason] = useState<Season>('spring');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Auto-change season based on section
      const sections = [
        { id: 'home', season: 'spring' as Season },
        { id: 'about', season: 'autumn' as Season },
        { id: 'skills', season: 'spring' as Season },
        { id: 'projects', season: 'winter' as Season },
        { id: 'achievements', season: 'summer' as Season },
      ];
      
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setCurrentSeason(current.season);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gradientClass = {
    autumn: 'gradient-autumn',
    winter: 'gradient-winter',
    spring: 'gradient-spring',
    summer: 'gradient-summer',
  }[currentSeason];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Seasonal background */}
      <div 
        className={`fixed inset-0 ${gradientClass} transition-all duration-1000 -z-10`}
        style={{ 
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Particles */}
      <SeasonalParticles season={currentSeason} />
      
      {/* Season selector */}
      <SeasonSelector currentSeason={currentSeason} onSeasonChange={setCurrentSeason} />
      
      {/* Floating Navigation */}
      <Navigation />
      
      {/* Content sections */}
      <main>
        <section id="home">
          <Hero season={currentSeason} />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="achievements">
          <Achievements />
        </section>
        
        {/* Footer */}
        <footer className="relative py-12 px-4 text-center bg-card/30 backdrop-blur-sm border-t border-border/50">
          <p className="text-muted-foreground mb-4">
            © 2024 A.S. Alisha. Crafted with passion and innovation.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Built with React, TypeScript, and modern web technologies
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;

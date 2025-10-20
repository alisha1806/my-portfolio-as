import { useState, useEffect } from 'react';
import { Home, User, Code2, Trophy } from 'lucide-react';

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Projects', icon: Code2, href: '#projects' },
  { name: 'Achievements', icon: Trophy, href: '#achievements' },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block">
      <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-3 shadow-2xl border border-border/50">
        <div className="flex flex-col gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`group relative p-3 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-primary text-primary-foreground scale-110'
                    : 'hover:bg-muted hover:scale-105'
                }`}
                title={item.name}
              >
                <Icon className="w-5 h-5" />
                <span className="absolute left-full ml-4 px-3 py-1 bg-card text-foreground text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg border border-border/50">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

import { BookOpen, Code, Users } from 'lucide-react';

export const Clubs = () => {
  const clubs = [
    {
      name: 'Literary Club',
      icon: BookOpen,
      description: 'Exploring creative writing and literary analysis through engaging discussions and workshops.',
      color: 'hsl(var(--spring-primary))',
      bgColor: 'hsl(var(--spring-primary) / 0.1)',
    },
    {
      name: 'Byte Bash Blitz',
      icon: Code,
      description: 'Competitive coding challenges that sharpen problem-solving skills and algorithmic thinking.',
      color: 'hsl(var(--winter-primary))',
      bgColor: 'hsl(var(--winter-primary) / 0.1)',
    },
    {
      name: 'Tech Community',
      icon: Users,
      description: 'Collaborating with peers on innovative projects and staying updated with emerging technologies.',
      color: 'hsl(var(--autumn-primary))',
      bgColor: 'hsl(var(--autumn-primary) / 0.1)',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Clubs & Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => {
            const Icon = club.icon;
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border/50 hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  borderColor: club.color,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: club.bgColor }}
                >
                  <Icon className="w-8 h-8" style={{ color: club.color }} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4" style={{ color: club.color }}>
                  {club.name}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {club.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

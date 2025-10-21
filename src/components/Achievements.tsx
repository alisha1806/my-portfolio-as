import { Trophy, Award, Code, Lightbulb, BookOpen, Zap } from 'lucide-react';
import { Card } from './ui/card';

const achievements = [
  {
    title: '1st Prize - National Pi Day Paper Presentation',
    description: 'Presented innovative research on mathematical algorithms and their applications in computer science.',
    icon: Trophy,
    color: 'hsl(var(--summer-primary))',
    year: '2024',
  },
  {
    title: '2nd Prize - AI Quiz Competition',
    description: 'Demonstrated deep knowledge of artificial intelligence concepts and applications.',
    icon: Lightbulb,
    color: 'hsl(var(--summer-accent))',
    year: '2024',
  },
  {
    title: 'Microsoft Learn Courses',
    description: 'Completed comprehensive Microsoft Learn training courses in cloud technologies, development tools, and modern web development practices.',
    icon: Award,
    color: 'hsl(var(--summer-secondary))',
    year: '2024',
  },
  {
    title: 'Hackathon Participant',
    description: 'Collaborated with teams to build innovative solutions under time constraints, showcasing problem-solving and teamwork skills.',
    icon: Code,
    color: 'hsl(48 95% 60%)',
    year: '2024',
  },
  {
    title: 'Self Engineering Course - Karka Software Academy',
    description: 'Comprehensive training in modern web development technologies and best practices.',
    icon: Award,
    color: 'hsl(48 85% 50%)',
    year: '2023-2024',
  },
];

export const Achievements = () => {
  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          Achievements & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className="p-8 bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 border-border/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0"
                    style={{ backgroundColor: achievement.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold leading-tight">{achievement.title}</h3>
                      <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {achievement.year}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-center">Continuous Learning</h3>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            Beyond formal achievements, I'm committed to continuous learning through online courses, coding challenges, 
            and staying updated with the latest trends in web development and design.
          </p>
        </div>
      </div>
    </section>
  );
};

import { Progress } from './ui/progress';
import { Code2, Palette, Database, Layout } from 'lucide-react';

const skills = [
  { name: 'UI/UX Design', level: 90, icon: Palette, color: 'hsl(var(--autumn-primary))' },
  { name: 'Web Development', level: 85, icon: Code2, color: 'hsl(var(--winter-primary))' },
  { name: 'React & Modern Frameworks', level: 80, icon: Layout, color: 'hsl(var(--spring-primary))' },
  { name: 'Problem Solving', level: 88, icon: Database, color: 'hsl(var(--summer-primary))' },
];

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div 
                key={skill.name} 
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: skill.color }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{skill.name}</h3>
                    <p className="text-sm text-muted-foreground">{skill.level}% Proficiency</p>
                  </div>
                </div>
                
                <Progress value={skill.level} className="h-3" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/50">
          <h3 className="text-2xl font-bold mb-6 text-center">Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Git', 'Responsive Design', 'Accessibility', 'Performance Optimization'].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

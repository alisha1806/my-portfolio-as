import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const projects: any[] = [
  {
    title: 'Learn Sorting',
    description:
      'An interactive visualization tool that helps users understand sorting algorithms through animated steps and real-time comparisons. Designed for students and educators to grasp complex logic with ease.',
    highlight: true,
    features: [
      'Step-by-step animation of popular sorting algorithms',
      'Real-time performance metrics and comparisons',
      'User-controlled input arrays and speed settings',
    ],
    challenges:
      'Creating smooth, synchronized animations while maintaining algorithmic accuracy and performance across devices.',
    technologies: ['React', 'TypeScript', 'D3.js', 'Tailwind CSS'],
    sourceCode: 'https://github.com/username/learn-sorting',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`p-8 md:p-10 ${
                project.highlight
                  ? 'border-primary/50 shadow-2xl bg-gradient-to-br from-card/80 to-primary/5'
                  : 'bg-card/50'
              } backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  {project.highlight && (
                    <span className="inline-block px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold mb-4">
                      Featured Project
                    </span>
                  )}

                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.challenges && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-lg">Challenges Overcome:</h4>
                      <p className="text-muted-foreground italic">{project.challenges}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 rounded-lg text-sm border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2" asChild>
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
          <h3 className="text-2xl font-bold mb-4">Future Aspirations</h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Aspires to create AI-powered learning platforms that simplify complex ideas
          </p>
        </div>
      </div>
    </section>
  );
};

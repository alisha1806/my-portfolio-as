import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';

const projects = [
  {
    title: 'Learn Sorting',
    description: 'An interactive educational platform that visualizes sorting algorithms in real-time. Built with React and modern web technologies to make computer science concepts accessible and engaging.',
    features: [
      'Real-time algorithm visualization',
      'Interactive step-by-step execution',
      'Multiple sorting algorithms (Bubble, Quick, Merge, etc.)',
      'Performance comparisons and analytics',
    ],
    challenges: 'Implementing smooth animations while maintaining performance, creating an intuitive UI for complex concepts, and ensuring educational value.',
    technologies: ['React', 'TypeScript', 'Canvas API', 'Tailwind CSS'],
    highlight: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, interactive portfolio with seasonal particle effects and parallax scrolling. Features dynamic backgrounds and responsive design.',
    features: [
      'Seasonal particle animations',
      'Parallax scrolling effects',
      'Fully responsive design',
      'Interactive cursor effects',
    ],
    technologies: ['React', 'TypeScript', 'Canvas', 'Tailwind CSS'],
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`p-8 md:p-10 ${project.highlight ? 'border-primary/50 shadow-2xl bg-gradient-to-br from-card/80 to-primary/5' : 'bg-card/50'} backdrop-blur-sm hover:scale-[1.02] transition-all duration-300`}
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
                    <Button variant="default" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </Button>
                    <Button variant="outline" className="gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
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
            I'm excited to expand my portfolio with projects involving AI/ML integration, progressive web apps, and innovative user experiences. 
            My goal is to create solutions that make technology more accessible and enjoyable for everyone.
          </p>
        </div>
      </div>
    </section>
  );
};

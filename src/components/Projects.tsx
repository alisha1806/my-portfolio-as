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
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center" style={{ backgroundImage: 'url(/winter-background.jpg)' }}>
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent animate-fade-in">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`p-8 md:p-10 rounded-xl ${
                project.highlight
                  ? 'bg-white/10 border border-white/30 shadow-xl'
                  : 'bg-white/5 border border-white/20'
              } backdrop-blur-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  {project.highlight && (
                    <span className="inline-block px-4 py-1 bg-blue-500 text-white rounded-full text-sm font-semibold mb-4">
                      Featured Project
                    </span>
                  )}

                  <h3 className="text-3xl font-bold mb-4 text-white">{project.title}</h3>
                  <p className="text-lg text-white/80 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg text-white">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-blue-300 mt-1">▸</span>
                          <span className="text-white/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.challenges && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-lg text-white">Challenges Overcome:</h4>
                      <p className="text-white/70 italic">{project.challenges}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-300/20 rounded-lg text-sm border border-blue-300/30 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" className="gap-2 text-white border-white" asChild>
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

        <div className="mt-12 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/30">
          <h3 className="text-2xl font-bold mb-4 text-white">Future Aspirations</h3>
          <p className="text-lg text-white/80 leading-relaxed">
            Aspires to create AI-powered learning platforms that simplify complex ideas
          </p>
        </div>
      </div>
    </section>
  );
};

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
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center px-4 py-20 bg-cover bg-center"
      style={{ backgroundImage: 'url(/winter-background.jpg)' }} // Replace with your actual image path
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent animate-fade-in">
          Featured Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className={`p-8 md:p-10 rounded-xl ${
                project.highlight
                  ? 'bg-transparent border border-black/10 shadow-xl'
                  : 'bg-transparent border border-black/10'
              } hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  {project.highlight && (
                    <span className="inline-block px-4 py-1 bg-black text-white rounded-full text-sm font-semibold mb-4">
                      Featured Project
                    </span>
                  )}

                  <h3 className="text-3xl font-bold mb-4 text-black">{project.title}</h3>
                  <p className="text-lg text-black/80 mb-6">{project.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-lg text-black">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="text-black mt-1">▸</span>
                          <span className="text-black/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {project.challenges && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-lg text-black">Challenges Overcome:</h4>
                      <p className="text-black/70 italic">{project.challenges}</p>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-black">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/10 rounded-lg text-sm border border-black/20 text-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-transparent rounded-2xl p-8 border border-black/10">
          <h3 className="text-2xl font-bold mb-4 text-black">Future Aspirations</h3>
          <p className="text-lg text-black/80 leading-relaxed">
            Aspires to create AI-powered learning platforms that simplify complex ideas
          </p>
        </div>
      </div>
    </section>
  );
};

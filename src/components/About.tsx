export const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          About Me
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-border/50">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            I'm a passionate college sophomore specializing in <span className="font-semibold text-primary">Website Development</span> and <span className="font-semibold text-primary">UI/UX Design</span>. My journey in technology is driven by a desire to create beautiful, functional, and user-centric digital experiences.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            Currently enhancing my skills through the <span className="font-semibold text-primary">Self Engineering Course at Karka Software Academy</span> and <span className="font-semibold text-primary">Microsoft Learn courses</span>, I'm committed to continuous learning and innovation. I'm also an active member of the <span className="font-semibold text-primary">Literary Club</span>, where I explore creative writing and literary analysis.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            My approach combines technical expertise with creative problem-solving. Whether it's competitive coding at <span className="font-semibold text-primary">Byte Bash Blitz</span> or crafting elegant user interfaces, I believe in creating solutions that not only work seamlessly but also delight users.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            I built <span className="font-semibold text-primary">Learn Sorting</span>, an interactive educational platform that visualizes sorting algorithms in real-time. This project showcases my ability to make complex computer science concepts accessible through engaging, animated experiences using React, TypeScript, and the Canvas API.
          </p>

          <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
            <h3 className="text-xl font-semibold mb-2 text-primary">Education</h3>
            <p className="text-lg text-foreground/90">
              Currently pursuing B.Tech 2nd year in Artificial Intelligence and Data Science at Stella Mary's College of Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

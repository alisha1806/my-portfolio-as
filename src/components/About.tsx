export const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-border/50">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            I'm a passionate college sophomore specializing in <span className="font-semibold text-primary">Website Development</span> and <span className="font-semibold text-primary">UI/UX Design</span>. My journey in technology is driven by a desire to create beautiful, functional, and user-centric digital experiences.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            Currently enhancing my skills through the <span className="font-semibold text-primary">Self Engineering Course at Karka Software Academy</span>, I'm committed to continuous learning and innovation in the tech field.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            My approach combines technical expertise with creative problem-solving, allowing me to build solutions that not only work seamlessly but also delight users. I believe great design is invisible – it just works.
          </p>
        </div>
      </div>
    </section>
  );
};

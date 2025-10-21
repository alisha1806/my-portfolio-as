export const About = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
          About Me
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-border/50">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            I'm a passionate college sophomore specializing in <span className="font-semibold text-primary">Website Development</span> and <span className="font-semibold text-primary">UI/UX Design</span>. My journey in technology is driven by a desire to create beautiful and user-centric digital experiences.
          </p>

          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            My approach combines technical expertise with creative problem-solving. Whether it's competitive coding at <span className="font-semibold text-primary">Byte Bash Blitz</span> , I believe in creating solutions that not only work seamlessly but also delight users.
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

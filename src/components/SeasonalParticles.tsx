import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

interface SeasonalParticlesProps {
  season: 'autumn' | 'winter' | 'spring' | 'summer';
}

export const SeasonalParticles = ({ season }: SeasonalParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particleCount = season === 'winter' ? 150 : season === 'autumn' ? 100 : 80;
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * (season === 'winter' ? 0.5 : 1),
      vy: season === 'winter' ? Math.random() * 1 + 0.5 : Math.random() * 2 + 1,
      size: Math.random() * (season === 'winter' ? 4 : season === 'autumn' ? 8 : 6) + 2,
      opacity: Math.random() * 0.5 + 0.3,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Mouse interaction
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx -= (dx / distance) * force * 0.5;
          particle.vy -= (dy / distance) * force * 0.5;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;

        // Reset particles that go off screen
        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;

        // Draw particle based on season
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = particle.opacity;

        if (season === 'autumn') {
          // Leaf shape
          ctx.fillStyle = `hsl(${25 + Math.random() * 30}, 76%, ${40 + Math.random() * 20}%)`;
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.quadraticCurveTo(particle.size * 0.7, -particle.size * 0.3, particle.size * 0.5, particle.size);
          ctx.quadraticCurveTo(0, particle.size * 0.7, 0, particle.size * 0.9);
          ctx.quadraticCurveTo(0, particle.size * 0.7, -particle.size * 0.5, particle.size);
          ctx.quadraticCurveTo(-particle.size * 0.7, -particle.size * 0.3, 0, -particle.size);
          ctx.fill();
        } else if (season === 'winter') {
          // Snowflake
          ctx.strokeStyle = `hsl(200, 100%, ${80 + Math.random() * 20}%)`;
          ctx.lineWidth = 1;
          for (let i = 0; i < 6; i++) {
            ctx.rotate(Math.PI / 3);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -particle.size);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, -particle.size * 0.6);
            ctx.lineTo(-particle.size * 0.3, -particle.size * 0.8);
            ctx.moveTo(0, -particle.size * 0.6);
            ctx.lineTo(particle.size * 0.3, -particle.size * 0.8);
            ctx.stroke();
          }
        } else if (season === 'spring') {
          // Cherry blossom petal
          ctx.fillStyle = `hsl(340, 82%, ${75 + Math.random() * 15}%)`;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.7, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(particle.size * 0.4, -particle.size * 0.4, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else if (season === 'summer') {
          // Sun sparkle
          ctx.fillStyle = `hsl(48, 100%, ${60 + Math.random() * 20}%)`;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size * 0.4, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = ctx.fillStyle;
          ctx.lineWidth = 2;
          for (let i = 0; i < 8; i++) {
            ctx.rotate(Math.PI / 4);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, -particle.size);
            ctx.stroke();
          }
        }

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [season]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: season === 'summer' ? 'screen' : 'normal' }}
    />
  );
};

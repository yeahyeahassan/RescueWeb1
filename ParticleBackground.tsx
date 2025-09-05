import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * window.innerWidth + 'px';
      particle.style.animationDuration = (15 + Math.random() * 10) + 's';
      particle.style.animationDelay = Math.random() * 5 + 's';
      container.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 25000);
    };

    // Create initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createParticle, i * 500);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0" 
      data-testid="particle-background"
    />
  );
}

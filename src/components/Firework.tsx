'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
}

interface FireworkProps {
  x: number;
  y: number;
}

export function Firework({ x, y }: FireworkProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Check if mobile for performance optimization
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 50 : 100;
    const smokeCount = isMobile ? 10 : 20;

    // Create explosion particles
    const colors = [
      '#FFD700', '#FFA500', '#FF6347', '#FF1493', '#FF69B4',
      '#00CED1', '#00BFFF', '#1E90FF', '#9370DB', '#8A2BE2',
      '#32CD32', '#00FF00', '#ADFF2F', '#FFFF00', '#FF4500'
    ];

    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const velocity = Math.random() * 6 + 2;
      
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * velocity,
        vy: Math.sin(angle) * velocity,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: Math.random() * 0.015 + 0.005,
        gravity: 0.1
      });
    }

    // Add smoke particles
    for (let i = 0; i < smokeCount; i++) {
      particles.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * 2,
        size: Math.random() * 10 + 5,
        color: '#666666',
        alpha: 0.3,
        decay: 0.005,
        gravity: -0.05
      });
    }

    particlesRef.current = particles;

    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current = particlesRef.current.filter(particle => {
        particle.vx *= 0.99;
        particle.vy *= 0.99;
        particle.vy += particle.gravity;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.alpha -= particle.decay;

        if (particle.alpha <= 0) return false;

        // Draw particle with glow effect
        ctx.save();
        ctx.globalAlpha = particle.alpha;
        
        // Outer glow (skip on mobile for performance)
        if (!isMobile) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + '33';
          ctx.fill();
          
          // Middle glow
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = particle.color + '66';
          ctx.fill();
        }
        
        // Core particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        ctx.restore();

        return true;
      });

      if (particlesRef.current.length > 0) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [x, y]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-15"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Firework } from '@/components/Firework';
import { Diya } from '@/components/Diya';
import { Moon } from '@/components/Moon';
import { Cityscape } from '@/components/Cityscape';
import { Greeting } from '@/components/Greeting';
import { InteractiveControls } from '@/components/InteractiveControls';

type Theme = 'night' | 'dawn' | 'sunset';

export default function DiwaliPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showGreeting, setShowGreeting] = useState(false);
  const [fireworks, setFireworks] = useState<Array<{id: number, x: number, y: number}>>([]);
  const [autoFireworks, setAutoFireworks] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('night');
  const [isMobile, setIsMobile] = useState(false);
  const autoFireworksIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getThemeGradient = useCallback((theme: Theme) => {
    switch (theme) {
      case 'night':
        return 'from-slate-950 via-indigo-950 via-blue-950 to-purple-950';
      case 'dawn':
        return 'from-purple-950 via-pink-900 via-rose-800 to-orange-900';
      case 'sunset':
        return 'from-orange-950 via-red-900 via-rose-900 to-pink-900';
      default:
        return 'from-slate-950 via-indigo-950 via-blue-950 to-purple-950';
    }
  }, []);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowGreeting(true);
      
      // Auto-launch some fireworks
      setTimeout(() => launchFirework(window.innerWidth * 0.3, window.innerHeight * 0.3), 1000);
      setTimeout(() => launchFirework(window.innerWidth * 0.7, window.innerHeight * 0.4), 1500);
      setTimeout(() => launchFirework(window.innerWidth * 0.5, window.innerHeight * 0.2), 2000);
    }, 2000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (autoFireworks) {
      autoFireworksIntervalRef.current = setInterval(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight * 0.5);
        launchFirework(x, y);
      }, 2000);
    } else {
      if (autoFireworksIntervalRef.current) {
        clearInterval(autoFireworksIntervalRef.current);
        autoFireworksIntervalRef.current = null;
      }
    }

    return () => {
      if (autoFireworksIntervalRef.current) {
        clearInterval(autoFireworksIntervalRef.current);
      }
    };
  }, [autoFireworks]);

  const launchFirework = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    setFireworks(prev => [...prev, { id, x, y }]);
    
    // Remove firework after animation
    setTimeout(() => {
      setFireworks(prev => prev.filter(fw => fw.id !== id));
    }, 3000);
  }, []);

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      launchFirework(x, y);
    }
  };

  const handleAutoFireworks = useCallback((enabled: boolean) => {
    setAutoFireworks(enabled);
  }, []);

  const handleThemeChange = useCallback((theme: Theme) => {
    setCurrentTheme(theme);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin-slow">🪔</div>
          <h1 className="text-4xl font-bold text-yellow-400 animate-pulse tracking-wider">
            ILLUMINATING THE SKY...
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative w-full h-screen overflow-hidden bg-gradient-to-b ${getThemeGradient(currentTheme)} transition-all duration-1000`}>
      {/* Atmospheric layers */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-900/10" />
      
      {/* Nebula clouds */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-indigo-900/10 via-purple-900/5 to-transparent opacity-60" />
      <div className="absolute top-20 left-1/4 w-96 h-32 bg-gradient-radial from-purple-800/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-32 right-1/4 w-80 h-24 bg-gradient-radial from-blue-800/8 to-transparent rounded-full blur-3xl" />
      
      {/* Interactive Controls */}
      <InteractiveControls 
        onAutoFireworks={handleAutoFireworks}
        onThemeChange={handleThemeChange}
      />

      {/* Enhanced star field */}
      <div className="absolute inset-0">
        {/* Bright stars */}
        {[...Array(isMobile ? 15 : 50)].map((_, i) => (
          <div
            key={`bright-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 60}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 2 + 1}s`,
              opacity: Math.random() * 0.4 + 0.6,
              boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
        {/* Dim stars */}
        {[...Array(isMobile ? 35 : 150)].map((_, i) => (
          <div
            key={`dim-${i}`}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 70}%`,
              width: `${Math.random() * 1.5 + 0.5}px`,
              height: `${Math.random() * 1.5 + 0.5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
        {/* Twinkling stars */}
        {[...Array(isMobile ? 10 : 30)].map((_, i) => (
          <div
            key={`twinkle-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              width: '2px',
              height: '2px',
              animation: `twinkle ${Math.random() * 2 + 1}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              boxShadow: '0 0 8px rgba(255, 255, 255, 0.9)'
            }}
          />
        ))}
      </div>

      {/* Moon */}
      <Moon />

      {/* Realistic clouds */}
      <div className="absolute top-16 left-12 w-32 h-16 bg-gradient-to-br from-white/8 to-white/4 rounded-full blur-2xl opacity-40 animate-pulse" />
      <div className="absolute top-24 left-20 w-24 h-12 bg-gradient-to-br from-white/6 to-white/2 rounded-full blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-32 right-16 w-40 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-40 right-24 w-28 h-14 bg-gradient-to-br from-white/7 to-white/3 rounded-full blur-xl opacity-35 animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Cityscape */}
      <Cityscape />

      {/* Water reflection */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950/50 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/10 to-transparent animate-pulse" />
      </div>

      {/* Diyas */}
      <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-around px-4 sm:px-10">
        {[10, 25, 40, 55, 70, 85].map((position, index) => (
          <div key={index} className="relative" style={{ left: `${position}%` }}>
            <Diya delay={index * 0.5} />
          </div>
        ))}
      </div>

      {/* Canvas for fireworks */}
      <canvas
        ref={canvasRef}
        width={typeof window !== 'undefined' ? window.innerWidth : 1920}
        height={typeof window !== 'undefined' ? window.innerHeight : 1080}
        className="absolute inset-0 cursor-crosshair z-10"
        onClick={handleCanvasClick}
      />

      {/* Fireworks */}
      {fireworks.map(fw => (
        <Firework key={fw.id} x={fw.x} y={fw.y} />
      ))}

      {/* Greeting */}
      {showGreeting && <Greeting />}

      {/* Click hint */}
      <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white/60 text-lg tracking-widest animate-bounce z-20">
        CLICK TO LAUNCH FIREWORKS
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 text-6xl animate-spin-slow">✨</div>
      <div className="absolute top-10 right-10 text-6xl animate-spin-slow" style={{ animationDelay: '1s' }}>🪔</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-pulse">🎆</div>
      <div className="absolute bottom-20 right-20 text-4xl animate-pulse" style={{ animationDelay: '0.5s' }}>🎇</div>

      {/* Stats display */}
      <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-white/60 text-xs sm:text-sm z-30">
        <div>Active Fireworks: {fireworks.length}</div>
        <div>Theme: {currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1)}</div>
      </div>
    </div>
  );
}
'use client';

import { useEffect, useState } from 'react';

export function Greeting() {
  const [showGlitter, setShowGlitter] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowGlitter(true), 500);
  }, []);

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center px-4">
      {/* Main greeting with Fredericka font */}
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-transparent bg-clip-text animate-greeting drop-shadow-2xl"
        style={{
          fontFamily: "'Fredericka the Great', cursive",
          backgroundImage: "linear-gradient(135deg, #FFD700, #FFA500, #FFD700, #FFA500)",
          backgroundSize: "200% 200%",
          animation: "gradient 3s ease infinite, greeting 3s ease-out forwards",
          filter: "drop-shadow(0 0 40px rgba(255, 215, 0, 0.8)) drop-shadow(0 0 80px rgba(255, 165, 0, 0.6))",
          textShadow: "0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.6)"
        }}
      >
        ✨ Happy Diwali ✨
      </h1>
      
      {/* Glitter particles */}
      {showGlitter && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-glitter"
              style={{
                left: '50%',
                top: '50%',
                animationDelay: `${Math.random() * 3}s`,
                '--tx': `${(Math.random() - 0.5) * 300}px`,
                '--ty': `${(Math.random() - 0.5) * 300}px`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* Add Fredericka font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&display=swap');
        
        @keyframes greeting {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(20px) scale(0.8);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0) scale(1);
          }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes glitter {
          0% {
            opacity: 1;
            transform: translate(0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(var(--tx), var(--ty)) scale(0.3);
          }
        }
        
        .animate-glitter {
          animation: glitter 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
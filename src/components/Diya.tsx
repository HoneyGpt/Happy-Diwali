'use client';

interface DiyaProps {
  delay?: number;
}

export function Diya({ delay = 0 }: DiyaProps) {
  return (
    <div 
      className="relative animate-float"
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'float 4s ease-in-out infinite'
      }}
    >
      {/* Diya base */}
      <div className="relative">
        {/* Main bowl */}
        <div className="w-12 h-8 sm:w-14 sm:h-9 md:w-16 md:h-10 bg-gradient-to-b from-amber-700 to-amber-900 rounded-b-full shadow-lg relative overflow-hidden">
          {/* Oil effect */}
          <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-gradient-to-b from-amber-800/90 to-amber-900/95 rounded-b-full" />
          
          {/* Wick */}
          <div className="absolute bottom-2 sm:bottom-3 left-1/2 transform -translate-x-1/2 w-0.5 h-3 sm:h-4 bg-gradient-to-t from-gray-800 to-gray-600 rounded-t-sm" />
        </div>
        
        {/* Flame container */}
        <div className="absolute -top-6 sm:-top-7 md:-top-8 left-1/2 transform -translate-x-1/2">
          {/* Flame glow */}
          <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-radial from-yellow-400/40 via-orange-400/20 to-transparent rounded-full blur-xl animate-pulse" />
          
          {/* Main flame */}
          <div className="relative animate-flicker">
            <div className="w-4 h-6 sm:w-5 sm:h-7 md:w-6 md:h-8 bg-gradient-to-t from-red-500 via-orange-500 to-yellow-400 rounded-full blur-sm transform rotate-3" />
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-4 sm:w-4 sm:h-5 md:w-4 md:h-6 bg-gradient-to-t from-yellow-300 to-yellow-100 rounded-full" />
          </div>
          
          {/* Inner flame */}
          <div className="absolute top-1 sm:top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-3 sm:w-2 sm:h-4 md:w-2 md:h-4 bg-gradient-to-t from-white to-yellow-200 rounded-full animate-flicker-inner" />
        </div>
        
        {/* Reflection on surface */}
        <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-10 h-4 sm:w-12 sm:h-5 md:w-14 md:h-6 bg-gradient-to-b from-orange-400/30 to-transparent rounded-full blur-md" />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes flicker {
          0%, 100% { 
            opacity: 0.9; 
            transform: rotate(-2deg) scale(1);
          }
          50% { 
            opacity: 1; 
            transform: rotate(2deg) scale(1.1);
          }
        }
        
        @keyframes flicker-inner {
          0%, 100% { 
            opacity: 0.8; 
            transform: translateX(-50%) scale(1);
          }
          50% { 
            opacity: 1; 
            transform: translateX(-50%) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
}
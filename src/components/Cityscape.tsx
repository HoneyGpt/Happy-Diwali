'use client';

export function Cityscape() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-40 z-4">
      {/* City silhouette */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-gray-900 to-gray-800"
        style={{
          clipPath: 'polygon(0% 100%, 5% 80%, 10% 85%, 15% 70%, 20% 75%, 25% 60%, 30% 65%, 35% 55%, 40% 60%, 45% 50%, 50% 55%, 55% 45%, 60% 50%, 65% 40%, 70% 45%, 75% 35%, 80% 40%, 85% 30%, 90% 35%, 95% 25%, 100% 30%, 100% 100%)'
        }}
      />
      
      {/* Building windows with lights */}
      <div className="absolute bottom-0 left-0 right-0 h-full">
        {/* Window lights */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-pulse"
            style={{
              bottom: `${20 + Math.random() * 60}px`,
              left: `${5 + i * 5}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6 + Math.random() * 0.4
            }}
          />
        ))}
        
        {/* Additional window lights */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`window-${i}`}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-pulse"
            style={{
              bottom: `${30 + Math.random() * 50}px`,
              left: `${10 + i * 6}%`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.4 + Math.random() * 0.4
            }}
          />
        ))}
      </div>
    </div>
  );
}
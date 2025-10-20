'use client';

import { useState } from 'react';

interface InteractiveControlsProps {
  onAutoFireworks: (enabled: boolean) => void;
  onThemeChange: (theme: 'night' | 'dawn' | 'sunset') => void;
}

export function InteractiveControls({ 
  onAutoFireworks, 
  onThemeChange 
}: InteractiveControlsProps) {
  const [autoFireworks, setAutoFireworks] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<'night' | 'dawn' | 'sunset'>('night');

  const handleAutoFireworksToggle = () => {
    const newState = !autoFireworks;
    setAutoFireworks(newState);
    onAutoFireworks(newState);
  };

  const handleThemeChange = (theme: 'night' | 'dawn' | 'sunset') => {
    setCurrentTheme(theme);
    onThemeChange(theme);
  };

  return (
    <div className="absolute top-3 left-3 z-30 bg-white/10 backdrop-blur-md rounded-full p-2 flex items-center gap-2 shadow-lg border border-white/20">
      {/* Auto Fireworks Toggle */}
      <button
        onClick={handleAutoFireworksToggle}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
          autoFireworks 
            ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-white shadow-lg' 
            : 'bg-white/20 text-white/70 hover:bg-white/30'
        }`}
        title="Auto Fireworks"
      >
        <span className="text-sm">🎆</span>
      </button>

      {/* Theme Selector */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleThemeChange('night')}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
            currentTheme === 'night' 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
              : 'bg-white/20 text-white/70 hover:bg-white/30'
          }`}
          title="Night"
        >
          <span className="text-xs">🌙</span>
        </button>
        <button
          onClick={() => handleThemeChange('dawn')}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
            currentTheme === 'dawn' 
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md' 
              : 'bg-white/20 text-white/70 hover:bg-white/30'
          }`}
          title="Dawn"
        >
          <span className="text-xs">🌅</span>
        </button>
        <button
          onClick={() => handleThemeChange('sunset')}
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-all transform hover:scale-110 ${
            currentTheme === 'sunset' 
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md' 
              : 'bg-white/20 text-white/70 hover:bg-white/30'
          }`}
          title="Sunset"
        >
          <span className="text-xs">🌇</span>
        </button>
      </div>
    </div>
  );
}
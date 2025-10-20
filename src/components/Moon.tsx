'use client';

export function Moon() {
  return (
    <div className="absolute top-8 right-16 z-5">
      {/* Moon glow/halo */}
      <div className="absolute inset-0 w-40 h-40 bg-gradient-radial from-yellow-50/20 via-yellow-100/10 to-transparent rounded-full blur-3xl scale-150" />
      <div className="absolute inset-0 w-32 h-32 bg-gradient-radial from-yellow-100/30 via-yellow-200/15 to-transparent rounded-full blur-2xl scale-125" />
      
      {/* Main moon */}
      <div className="relative w-28 h-28 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 rounded-full shadow-2xl overflow-hidden">
        {/* Moon surface texture */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-gray-200/20 to-transparent rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-gray-300/10 to-transparent rounded-full" />
        
        {/* Realistic craters */}
        <div className="absolute top-6 left-8 w-6 h-6 bg-gray-400/20 rounded-full blur-sm">
          <div className="absolute top-1 left-1 w-3 h-3 bg-gray-500/15 rounded-full" />
        </div>
        <div className="absolute top-12 right-6 w-4 h-4 bg-gray-400/18 rounded-full blur-sm">
          <div className="absolute top-0.5 left-0.5 w-2 h-2 bg-gray-500/12 rounded-full" />
        </div>
        <div className="absolute bottom-8 left-10 w-8 h-8 bg-gray-400/15 rounded-full blur-md">
          <div className="absolute top-2 left-2 w-4 h-4 bg-gray-500/10 rounded-full" />
        </div>
        <div className="absolute bottom-6 right-8 w-3 h-3 bg-gray-400/22 rounded-full blur-sm">
          <div className="absolute top-0.5 left-0.5 w-1.5 h-1.5 bg-gray-500/15 rounded-full" />
        </div>
        <div className="absolute top-16 left-16 w-5 h-5 bg-gray-400/12 rounded-full blur-md">
          <div className="absolute top-1 left-1 w-2.5 h-2.5 bg-gray-500/8 rounded-full" />
        </div>
        
        {/* Subtle surface details */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-gray-300/10 rounded-full" />
        <div className="absolute top-20 right-12 w-1.5 h-1.5 bg-gray-300/8 rounded-full" />
        <div className="absolute bottom-12 left-6 w-1 h-1 bg-gray-300/12 rounded-full" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-radial from-yellow-50/10 via-transparent to-transparent rounded-full" />
      </div>
      
      {/* Moonlight rays */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-1 h-20 bg-gradient-to-b from-yellow-100/20 to-transparent transform rotate-12" />
        <div className="absolute w-1 h-16 bg-gradient-to-b from-yellow-100/15 to-transparent transform -rotate-6" />
        <div className="absolute w-1 h-24 bg-gradient-to-b from-yellow-100/10 to-transparent transform rotate-45" />
      </div>
    </div>
  );
}
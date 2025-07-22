export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Prominent gradient overlays */}
      <div className="absolute inset-0 opacity-30">
        {/* Large glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-yellow-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-red-500/20 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Animated gradient lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-400/40 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-400/40 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Vertical animated lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-green-400/40 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      {/* Corner glows */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-green-500/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-yellow-500/10 to-transparent"></div>
      
      {/* Center radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-blue-500/5 via-transparent to-transparent"></div>
      
      {/* Animated border glow */}
      <div className="absolute inset-0 border border-blue-500/20 rounded-lg animate-pulse" style={{animationDelay: '2.5s'}}></div>
      
      <style jsx>{`
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.05); 
          }
        }
        
        .bg-radial-gradient {
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%);
        }
      `}</style>
    </div>
  );
} 
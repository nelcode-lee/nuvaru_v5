export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Extremely prominent background effects */}
      
      {/* Large bright glowing circles */}
      <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-blue-400/30 rounded-full blur-md animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-green-400/40 rounded-full blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-36 h-36 bg-purple-400/35 rounded-full blur-md animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-yellow-400/45 rounded-full blur-md animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-red-400/50 rounded-full blur-md animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Bright horizontal lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>
      <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400/70 to-transparent"></div>
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/65 to-transparent"></div>
      <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/75 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-400/80 to-transparent"></div>
      
      {/* Bright vertical lines */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-blue-400/60 to-transparent"></div>
      <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-green-400/70 to-transparent"></div>
      <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-transparent via-purple-400/65 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-yellow-400/75 to-transparent"></div>
      
      {/* Corner bright glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-green-400/25 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-yellow-400/25 to-transparent"></div>
      
      {/* Center bright radial gradient */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, transparent 70%)'
      }}></div>
      
      {/* Bright border glow */}
      <div className="absolute inset-0 border-2 border-blue-400/40 rounded-lg"></div>
      
      {/* Additional bright spots */}
      <div className="absolute top-1/6 left-1/6 w-16 h-16 bg-white/30 rounded-full blur-sm"></div>
      <div className="absolute top-2/6 right-1/6 w-12 h-12 bg-blue-300/40 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/6 left-2/6 w-14 h-14 bg-green-300/35 rounded-full blur-sm"></div>
      <div className="absolute bottom-2/6 right-2/6 w-10 h-10 bg-purple-300/45 rounded-full blur-sm"></div>
      
      <style jsx>{`
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.1); 
          }
        }
      `}</style>
    </div>
  );
} 
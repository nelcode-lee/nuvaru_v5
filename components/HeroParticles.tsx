export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Static CSS-only particles */}
      <div className="absolute inset-0">
        {/* Large static particles */}
        <div className="absolute w-8 h-8 bg-white/40 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-6 h-6 bg-blue-400/50 rounded-full top-1/3 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-10 h-10 bg-white/30 rounded-full top-1/2 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-5 h-5 bg-yellow-300/60 rounded-full top-2/3 right-1/3 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute w-7 h-7 bg-blue-400/40 rounded-full top-3/4 left-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute w-9 h-9 bg-white/50 rounded-full top-1/6 right-1/2 animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute w-4 h-4 bg-green-400/50 rounded-full top-5/6 left-1/6 animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute w-6 h-6 bg-purple-400/40 rounded-full top-1/5 right-1/6 animate-pulse" style={{animationDelay: '7s'}}></div>
        
        {/* Medium particles */}
        <div className="absolute w-3 h-3 bg-white/60 rounded-full top-1/8 left-1/8 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute w-4 h-4 bg-blue-400/50 rounded-full top-2/8 right-2/8 animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute w-2 h-2 bg-yellow-300/70 rounded-full top-3/8 left-3/8 animate-pulse" style={{animationDelay: '2.5s'}}></div>
        <div className="absolute w-5 h-5 bg-white/40 rounded-full top-4/8 right-3/8 animate-pulse" style={{animationDelay: '3.5s'}}></div>
        <div className="absolute w-3 h-3 bg-green-400/60 rounded-full top-5/8 left-4/8 animate-pulse" style={{animationDelay: '4.5s'}}></div>
        <div className="absolute w-4 h-4 bg-purple-400/50 rounded-full top-6/8 right-4/8 animate-pulse" style={{animationDelay: '5.5s'}}></div>
        <div className="absolute w-2 h-2 bg-blue-400/70 rounded-full top-7/8 left-5/8 animate-pulse" style={{animationDelay: '6.5s'}}></div>
        <div className="absolute w-3 h-3 bg-white/50 rounded-full top-1/8 right-5/8 animate-pulse" style={{animationDelay: '7.5s'}}></div>
        
        {/* Small sparkles */}
        <div className="absolute w-1 h-1 bg-yellow-300/80 rounded-full top-1/16 left-1/16 animate-pulse" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute w-1 h-1 bg-white/70 rounded-full top-2/16 right-1/16 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/80 rounded-full top-3/16 left-2/16 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute w-1 h-1 bg-green-400/70 rounded-full top-4/16 right-2/16 animate-pulse" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-400/80 rounded-full top-5/16 left-3/16 animate-pulse" style={{animationDelay: '2.2s'}}></div>
        <div className="absolute w-1 h-1 bg-yellow-300/70 rounded-full top-6/16 right-3/16 animate-pulse" style={{animationDelay: '2.7s'}}></div>
        <div className="absolute w-1 h-1 bg-white/80 rounded-full top-7/16 left-4/16 animate-pulse" style={{animationDelay: '3.2s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/70 rounded-full top-8/16 right-4/16 animate-pulse" style={{animationDelay: '3.7s'}}></div>
        <div className="absolute w-1 h-1 bg-green-400/80 rounded-full top-9/16 left-5/16 animate-pulse" style={{animationDelay: '4.2s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-400/70 rounded-full top-10/16 right-5/16 animate-pulse" style={{animationDelay: '4.7s'}}></div>
        <div className="absolute w-1 h-1 bg-yellow-300/80 rounded-full top-11/16 left-6/16 animate-pulse" style={{animationDelay: '5.2s'}}></div>
        <div className="absolute w-1 h-1 bg-white/70 rounded-full top-12/16 right-6/16 animate-pulse" style={{animationDelay: '5.7s'}}></div>
        <div className="absolute w-1 h-1 bg-blue-400/80 rounded-full top-13/16 left-7/16 animate-pulse" style={{animationDelay: '6.2s'}}></div>
        <div className="absolute w-1 h-1 bg-green-400/70 rounded-full top-14/16 right-7/16 animate-pulse" style={{animationDelay: '6.7s'}}></div>
        <div className="absolute w-1 h-1 bg-purple-400/80 rounded-full top-15/16 left-8/16 animate-pulse" style={{animationDelay: '7.2s'}}></div>
        <div className="absolute w-1 h-1 bg-yellow-300/70 rounded-full top-16/16 right-8/16 animate-pulse" style={{animationDelay: '7.7s'}}></div>
        
        {/* Connection lines */}
        <div className="absolute w-px h-16 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-px h-20 bg-gradient-to-b from-transparent via-green-400/30 to-transparent top-1/3 right-1/4 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-px h-12 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent top-1/2 left-1/3 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute w-px h-18 bg-gradient-to-b from-transparent via-yellow-400/30 to-transparent top-2/3 right-1/3 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute w-px h-14 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent top-3/4 left-1/2 animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute w-px h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent top-1/6 right-1/2 animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute w-px h-10 bg-gradient-to-b from-transparent via-green-400/30 to-transparent top-5/6 left-1/6 animate-pulse" style={{animationDelay: '6s'}}></div>
        <div className="absolute w-px h-22 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent top-1/5 right-1/6 animate-pulse" style={{animationDelay: '7s'}}></div>
      </div>
      
      <style jsx>{`
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.1); 
          }
        }
      `}</style>
    </div>
  );
} 
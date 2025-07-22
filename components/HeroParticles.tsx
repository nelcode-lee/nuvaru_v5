"use client";

import { useEffect, useState } from "react";

export default function HeroParticles() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900" />
    );
  }

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Very large, prominent particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/40 rounded-full animate-float-slow"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Large blue particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`blue-${i}`}
            className="absolute bg-blue-400/50 rounded-full animate-pulse-slow"
            style={{
              width: `${15 + Math.random() * 20}px`,
              height: `${15 + Math.random() * 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Medium white particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`white-${i}`}
            className="absolute bg-white/60 rounded-full animate-twinkle"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Small sparkles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute bg-yellow-300/70 rounded-full animate-sparkle"
            style={{
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 7}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Connection lines */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-blue-400/40 to-transparent animate-float"
            style={{
              width: '2px',
              height: `${60 + Math.random() * 80}px`,
              left: `${5 + (i * 6)}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${7 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(-30px) translateX(10px); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-50px) translateX(-5px); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-20px) translateX(15px); 
            opacity: 0.7; 
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3); 
          }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1) rotate(0deg); 
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.2) rotate(90deg); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(180deg); 
          }
          75% { 
            opacity: 0.6; 
            transform: scale(1.1) rotate(270deg); 
          }
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-20px) translateX(8px); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-35px) translateX(-4px); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-15px) translateX(12px); 
            opacity: 0.6; 
          }
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 5s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 6s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </div>
  );
} 
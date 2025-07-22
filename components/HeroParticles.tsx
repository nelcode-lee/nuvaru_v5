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
      {/* Large floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/20 rounded-full animate-float"
            style={{
              width: `${8 + Math.random() * 12}px`,
              height: `${8 + Math.random() * 12}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Medium particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`medium-${i}`}
            className="absolute bg-blue-400/30 rounded-full animate-pulse"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Small sparkles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute bg-white/40 rounded-full animate-twinkle"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Connection lines */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-float"
            style={{
              width: '1px',
              height: `${40 + Math.random() * 60}px`,
              left: `${10 + (i * 7)}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-15px) translateX(5px); 
            opacity: 0.7; 
          }
          50% { 
            transform: translateY(-25px) translateX(-3px); 
            opacity: 1; 
          }
          75% { 
            transform: translateY(-10px) translateX(8px); 
            opacity: 0.6; 
          }
        }
        
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.2; 
            transform: scale(1); 
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2); 
          }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 4s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
} 
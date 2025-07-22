export default function HeroParticles() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Simple, static background that will definitely be visible */}
      
      {/* Solid gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/15 to-green-600/20"></div>
      
      {/* Simple geometric shapes */}
      <div className="absolute top-0 left-0 w-full h-1 bg-blue-400/50"></div>
      <div className="absolute top-1/4 left-0 w-full h-1 bg-green-400/50"></div>
      <div className="absolute top-1/2 left-0 w-full h-1 bg-purple-400/50"></div>
      <div className="absolute top-3/4 left-0 w-full h-1 bg-yellow-400/50"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-red-400/50"></div>
      
      {/* Vertical lines */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-blue-400/50"></div>
      <div className="absolute top-0 left-1/2 w-1 h-full bg-green-400/50"></div>
      <div className="absolute top-0 left-3/4 w-1 h-full bg-purple-400/50"></div>
      <div className="absolute top-0 right-1/4 w-1 h-full bg-yellow-400/50"></div>
      
      {/* Corner blocks */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-500/30"></div>
      
      {/* Center circle */}
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Border */}
      <div className="absolute inset-0 border-4 border-blue-400/30"></div>
    </div>
  );
} 
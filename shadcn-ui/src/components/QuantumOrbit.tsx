export default function QuantumOrbit() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large outer orbit */}
      <div className="quantum-orbit absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-aqua-neon rounded-full -translate-x-1/2 quantum-glow animate-pulse"></div>
      </div>
      
      {/* Medium orbit */}
      <div className="quantum-orbit absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 opacity-40" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
        <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-cyber-purple rounded-full -translate-x-1/2 quantum-glow animate-pulse"></div>
      </div>
      
      {/* Small inner orbit */}
      <div className="quantum-orbit absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 opacity-60" style={{ animationDuration: '6s' }}>
        <div className="absolute top-0 left-1/2 w-1 h-1 bg-neon-glow rounded-full -translate-x-1/2 quantum-glow animate-pulse"></div>
      </div>
      
      {/* Central nucleus */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 quantum-glow animate-pulse"></div>
    </div>
  );
}
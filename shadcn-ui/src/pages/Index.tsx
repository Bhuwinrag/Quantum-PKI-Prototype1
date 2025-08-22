import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import QuantumBackground from '@/components/QuantumBackground';
import QuantumOrbit from '@/components/QuantumOrbit';
import FeatureCard from '@/components/FeatureCard';
import QuantumDemo from '@/components/QuantumDemo';
import { Shield, Lock, Infinity as InfinityIcon, ArrowRight, Play, Download, Github } from 'lucide-react';

export default function QuantumPKILanding() {
  const [showDemo, setShowDemo] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openDemo = () => {
    setShowDemo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-x-hidden">
      <QuantumBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="orbitron text-xl font-bold quantum-text-glow">
              Quantum PKI
            </div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('features')} className="hover:text-cyan-400 transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('demo')} className="hover:text-cyan-400 transition-colors">
                Demo
              </button>
              <button onClick={() => scrollToSection('about')} className="hover:text-cyan-400 transition-colors">
                About
              </button>
            </div>
            <Button variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10">
              Contact
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <QuantumOrbit />
        
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            
            {/* Main Title */}
            <h1 className="orbitron text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent quantum-text-glow">
                Quantum PKI
              </span>
              <br />
              <span className="text-white text-3xl md:text-4xl lg:text-5xl">
                Next-Gen Security for the
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Quantum Era
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-in fade-in delay-300 duration-700">
              Prototype for Secure Key Registration & Authentication
              <br />
              <span className="text-cyan-400">Quantum-resistant cryptography for tomorrow's threats</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in fade-in delay-500 duration-700">
              <Button
                onClick={openDemo}
                size="lg"
                className="quantum-button text-white font-semibold px-8 py-4 text-lg quantum-glow hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Try Prototype
              </Button>
              
              <Button
                onClick={() => scrollToSection('features')}
                variant="outline"
                size="lg"
                className="border-2 border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-in fade-in delay-700 duration-700">
              <div className="text-center">
                <div className="orbitron text-3xl font-bold text-cyan-400 quantum-text-glow">256-bit</div>
                <div className="text-gray-400">Quantum Encryption</div>
              </div>
              <div className="text-center">
                <div className="orbitron text-3xl font-bold text-purple-400 quantum-text-glow">99.99%</div>
                <div className="text-gray-400">Security Guarantee</div>
              </div>
              <div className="text-center">
                <div className="orbitron text-3xl font-bold text-blue-400 quantum-text-glow">∞</div>
                <div className="text-gray-400">Future-Proof</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="orbitron text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Quantum Security Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Revolutionary cryptographic protection against classical and quantum computing threats
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Quantum-Safe Authentication"
              description="Post-quantum cryptographic algorithms that resist both classical and quantum computer attacks, ensuring your data remains secure in the quantum age."
            />
            
            <FeatureCard
              icon={<Lock className="w-8 h-8" />}
              title="Tamper-Proof Key Registration"
              description="Immutable key registration system using distributed ledger technology with quantum-resistant digital signatures for absolute integrity."
            />
            
            <FeatureCard
              icon={<InfinityIcon className="w-8 h-8" />}
              title="Future-Proof Security"
              description="Adaptive security protocols that evolve with emerging quantum technologies, providing long-term protection for critical infrastructure."
            />
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-purple-900/50 relative">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Interactive Prototype
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Experience the future of quantum-safe cryptography with our interactive demonstration platform
          </p>

          <Card className="bg-gradient-to-br from-slate-800/90 via-purple-900/30 to-slate-800/90 border border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-12">
              <div className="relative">
                {/* Prototype placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-700/50 to-purple-800/50 rounded-lg border-2 border-dashed border-cyan-400/30 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 flex items-center justify-center quantum-glow">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-gray-300 text-lg">Quantum PKI Prototype Interface</p>
                    <p className="text-gray-500 text-sm mt-2">Interactive demo environment</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={openDemo}
                    className="quantum-button text-white font-semibold px-6 py-3 quantum-glow hover:scale-105 transition-all duration-300"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Launch Prototype
                  </Button>
                  
                  <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-6 py-3 hover:scale-105 transition-all duration-300">
                    <Download className="mr-2 h-5 w-5" />
                    Download SDK
                  </Button>
                  
                  <Button variant="outline" className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10 font-semibold px-6 py-3 hover:scale-105 transition-all duration-300">
                    <Github className="mr-2 h-5 w-5" />
                    View Source
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="orbitron text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The Quantum Revolution
            </span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            As quantum computing advances threaten traditional cryptographic methods, 
            Quantum PKI represents the next evolution in cybersecurity. Our prototype 
            demonstrates how post-quantum cryptography can safeguard digital infrastructure 
            against both present and future computational capabilities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-6 bg-black/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="orbitron text-2xl font-bold mb-4 quantum-text-glow">
              Quantum PKI
            </div>
            <p className="text-gray-400 mb-6">
              Securing the future with quantum-resistant cryptography
            </p>
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                Privacy Policy
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                Terms of Service
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Quantum Demo Modal */}
      {showDemo && <QuantumDemo onClose={() => setShowDemo(false)} />}
    </div>
  );
}
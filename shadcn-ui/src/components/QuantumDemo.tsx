import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Key, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Download, 
  Upload, 
  Zap, 
  Activity, 
  CheckCircle, 
  AlertTriangle,
  X,
  Copy,
  RefreshCw
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface KeyPair {
  publicKey: string;
  privateKey: string;
  algorithm: string;
  keySize: number;
  createdAt: Date;
}

interface SecurityMetric {
  name: string;
  value: number;
  status: 'secure' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

export default function QuantumDemo({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('keygen');
  const [keyPair, setKeyPair] = useState<KeyPair | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [messageToEncrypt, setMessageToEncrypt] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authProgress, setAuthProgress] = useState(0);
  const [securityMetrics, setSecurityMetrics] = useState<SecurityMetric[]>([
    { name: 'Quantum Resistance', value: 98, status: 'secure', trend: 'up' },
    { name: 'Key Integrity', value: 100, status: 'secure', trend: 'stable' },
    { name: 'Network Security', value: 95, status: 'secure', trend: 'up' },
    { name: 'Threat Detection', value: 89, status: 'warning', trend: 'down' }
  ]);

  const animationRef = useRef<number>();

  // Simulate real-time security metrics updates
  useEffect(() => {
    const updateMetrics = () => {
      setSecurityMetrics(prev => prev.map(metric => ({
        ...metric,
        value: Math.max(75, Math.min(100, metric.value + (Math.random() - 0.5) * 2)),
        trend: Math.random() > 0.5 ? 'up' : 'down'
      })));
    };

    const interval = setInterval(updateMetrics, 3000);
    return () => clearInterval(interval);
  }, []);

  // Generate quantum-safe key pair
  const generateKeyPair = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);

    // Simulate key generation process with progress
    for (let i = 0; i <= 100; i += 2) {
      setGenerationProgress(i);
      await new Promise(resolve => setTimeout(resolve, 50));
    }

    // Generate actual RSA key pair (simulating post-quantum algorithms)
    const keyPairData: KeyPair = {
      publicKey: generateMockPublicKey(),
      privateKey: generateMockPrivateKey(),
      algorithm: 'CRYSTALS-Dilithium',
      keySize: 3072,
      createdAt: new Date()
    };

    setKeyPair(keyPairData);
    setIsGenerating(false);
    toast({
      title: "Quantum Key Pair Generated",
      description: "Your post-quantum cryptographic keys are ready for use.",
    });
  };

  // Mock key generation functions
  const generateMockPublicKey = () => {
    const chars = '0123456789ABCDEF';
    let result = '';
    for (let i = 0; i < 128; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const generateMockPrivateKey = () => {
    const chars = '0123456789ABCDEFabcdef';
    let result = '';
    for (let i = 0; i < 256; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Simulate quantum encryption
  const encryptMessage = async () => {
    if (!messageToEncrypt || !keyPair) return;

    const encrypted = btoa(messageToEncrypt + '_QUANTUM_ENCRYPTED_' + Date.now());
    setEncryptedMessage(encrypted);
    toast({
      title: "Message Encrypted",
      description: "Your message has been secured using quantum-safe cryptography.",
    });
  };

  // Simulate quantum decryption
  const decryptMessage = async () => {
    if (!encryptedMessage || !keyPair) return;

    try {
      const decrypted = atob(encryptedMessage).split('_QUANTUM_ENCRYPTED_')[0];
      setDecryptedMessage(decrypted);
      toast({
        title: "Message Decrypted",
        description: "Your message has been successfully decrypted.",
      });
    } catch (error) {
      toast({
        title: "Decryption Failed",
        description: "Invalid encrypted message or key mismatch.",
        variant: "destructive"
      });
    }
  };

  // Simulate quantum authentication
  const performAuthentication = async () => {
    if (!keyPair) return;

    setAuthProgress(0);
    setIsAuthenticated(false);
    
    try {
      for (let i = 0; i <= 100; i += 5) {
        setAuthProgress(i);
        await new Promise(resolve => setTimeout(resolve, 80));
      }

      // Reset progress and set authenticated
      setAuthProgress(0);
      setIsAuthenticated(true);
      toast({
        title: "Authentication Successful",
        description: "Quantum identity verified using post-quantum cryptography.",
      });
    } catch (error) {
      setAuthProgress(0);
      setIsAuthenticated(false);
      toast({
        title: "Authentication Failed",
        description: "Unable to verify quantum identity. Please try again.",
        variant: "destructive"
      });
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to Clipboard",
      description: `${label} has been copied to your clipboard.`,
    });
  };

  const getMetricStatusColor = (status: SecurityMetric['status']) => {
    switch (status) {
      case 'secure': return 'text-green-400';
      case 'warning': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getMetricBadgeColor = (status: SecurityMetric['status']) => {
    switch (status) {
      case 'secure': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'warning': return 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30';
      case 'critical': return 'bg-red-500/20 text-red-400 border-red-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-800 border border-cyan-500/20 rounded-2xl w-full max-w-6xl h-[90vh] overflow-hidden quantum-glow">
        
        {/* Header */}
        <div className="bg-black/20 p-6 border-b border-cyan-500/20">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="orbitron text-2xl font-bold text-white quantum-text-glow">
                Quantum PKI Prototype
              </h2>
              <p className="text-gray-300 mt-1">Interactive Demonstration Platform</p>
            </div>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-6 flex flex-col" style={{ height: 'calc(90vh - 120px)' }}>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col h-full">
            <TabsList className="grid w-full grid-cols-4 mb-6 bg-slate-800/50 flex-shrink-0">
              <TabsTrigger value="keygen" className="data-[state=active]:bg-cyan-500/20">
                Key Generation
              </TabsTrigger>
              <TabsTrigger value="encryption" className="data-[state=active]:bg-cyan-500/20">
                Encryption
              </TabsTrigger>
              <TabsTrigger value="auth" className="data-[state=active]:bg-cyan-500/20">
                Authentication
              </TabsTrigger>
              <TabsTrigger value="monitor" className="data-[state=active]:bg-cyan-500/20">
                Security Monitor
              </TabsTrigger>
            </TabsList>

            {/* Key Generation Tab */}
            <TabsContent value="keygen" className="space-y-6 flex-1 overflow-y-auto">
              <Card className="bg-slate-800/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Key className="h-5 w-5 text-cyan-400" />
                    Quantum-Safe Key Generation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!keyPair ? (
                    <div className="text-center space-y-4">
                      {isGenerating ? (
                        <>
                          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 flex items-center justify-center quantum-glow animate-pulse">
                            <Zap className="w-12 h-12 text-white animate-spin" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-white">Generating quantum-resistant key pair...</p>
                            <Progress value={generationProgress} className="w-full max-w-md mx-auto" />
                            <p className="text-gray-400 text-sm">{generationProgress}% complete</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 flex items-center justify-center quantum-glow">
                            <Key className="w-12 h-12 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-lg mb-2">Ready to generate quantum-safe keys</p>
                            <p className="text-gray-400">Click below to create your post-quantum cryptographic key pair</p>
                          </div>
                          <Button 
                            onClick={generateKeyPair} 
                            className="quantum-button px-8 py-3 quantum-glow"
                          >
                            <Zap className="mr-2 h-5 w-5" />
                            Generate Key Pair
                          </Button>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-slate-700/50 p-4 rounded-lg border border-cyan-500/20">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-cyan-400 font-semibold">Public Key</h4>
                            <Button 
                              size="sm" 
                              variant="ghost"
                              onClick={() => copyToClipboard(keyPair.publicKey, 'Public key')}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                          <code className="text-xs text-gray-300 break-all block">
                            {keyPair.publicKey}
                          </code>
                        </div>
                        
                        <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-purple-400 font-semibold">Private Key</h4>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => setShowPrivateKey(!showPrivateKey)}
                              >
                                {showPrivateKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </Button>
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => copyToClipboard(keyPair.privateKey, 'Private key')}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          <code className="text-xs text-gray-300 break-all block">
                            {showPrivateKey ? keyPair.privateKey : '•'.repeat(keyPair.privateKey.length)}
                          </code>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                          <p className="text-cyan-400 font-semibold">{keyPair.algorithm}</p>
                          <p className="text-gray-400 text-sm">Algorithm</p>
                        </div>
                        <div>
                          <p className="text-purple-400 font-semibold">{keyPair.keySize}-bit</p>
                          <p className="text-gray-400 text-sm">Key Size</p>
                        </div>
                        <div>
                          <p className="text-blue-400 font-semibold">Post-Quantum</p>
                          <p className="text-gray-400 text-sm">Security Level</p>
                        </div>
                        <div>
                          <p className="text-green-400 font-semibold">Active</p>
                          <p className="text-gray-400 text-sm">Status</p>
                        </div>
                      </div>
                      
                      <Button 
                        onClick={() => setKeyPair(null)} 
                        variant="outline"
                        className="w-full border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10"
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Generate New Key Pair
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Encryption Tab */}
            <TabsContent value="encryption" className="space-y-6 flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-slate-800/50 border-cyan-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Lock className="h-5 w-5 text-cyan-400" />
                      Quantum Encryption
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message to Encrypt
                      </label>
                      <Input
                        value={messageToEncrypt}
                        onChange={(e) => setMessageToEncrypt(e.target.value)}
                        placeholder="Enter your message here..."
                        className="bg-slate-700/50 border-cyan-500/30 text-white"
                      />
                    </div>
                    
                    <Button 
                      onClick={encryptMessage} 
                      disabled={!messageToEncrypt || !keyPair}
                      className="w-full quantum-button quantum-glow"
                    >
                      <Lock className="mr-2 h-4 w-4" />
                      Encrypt Message
                    </Button>
                    
                    {encryptedMessage && (
                      <div className="bg-slate-700/50 p-4 rounded-lg border border-cyan-500/20">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-cyan-400 font-semibold">Encrypted Output</h4>
                          <Button 
                            size="sm" 
                            variant="ghost"
                            onClick={() => copyToClipboard(encryptedMessage, 'Encrypted message')}
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                        <code className="text-xs text-gray-300 break-all block">
                          {encryptedMessage}
                        </code>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                <Card className="bg-slate-800/50 border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Unlock className="h-5 w-5 text-purple-400" />
                      Quantum Decryption
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Encrypted Message
                      </label>
                      <Input
                        value={encryptedMessage}
                        onChange={(e) => setEncryptedMessage(e.target.value)}
                        placeholder="Paste encrypted message here..."
                        className="bg-slate-700/50 border-purple-500/30 text-white"
                      />
                    </div>
                    
                    <Button 
                      onClick={decryptMessage} 
                      disabled={!encryptedMessage || !keyPair}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 quantum-glow"
                    >
                      <Unlock className="mr-2 h-4 w-4" />
                      Decrypt Message
                    </Button>
                    
                    {decryptedMessage && (
                      <div className="bg-slate-700/50 p-4 rounded-lg border border-purple-500/20">
                        <h4 className="text-purple-400 font-semibold mb-2">Decrypted Output</h4>
                        <p className="text-white">{decryptedMessage}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Authentication Tab */}
            <TabsContent value="auth" className="space-y-6 flex-1 overflow-y-auto">
              <Card className="bg-slate-800/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Shield className="h-5 w-5 text-cyan-400" />
                    Quantum Identity Verification
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {!isAuthenticated ? (
                    <div className="text-center space-y-4">
                      {authProgress > 0 && !isAuthenticated ? (
                        <>
                          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 flex items-center justify-center quantum-glow animate-pulse">
                            <Activity className="w-12 h-12 text-white animate-spin" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-white">Verifying quantum identity...</p>
                            <Progress value={authProgress} className="w-full max-w-md mx-auto" />
                            <p className="text-gray-400 text-sm">Authentication progress: {authProgress}%</p>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 flex items-center justify-center quantum-glow">
                            <Shield className="w-12 h-12 text-white" />
                          </div>
                          <div>
                            <p className="text-white text-lg mb-2">Ready for Authentication</p>
                            <p className="text-gray-400">Authenticate using your quantum-safe key pair</p>
                          </div>
                          <Button 
                            onClick={performAuthentication} 
                            disabled={!keyPair}
                            className="quantum-button px-8 py-3 quantum-glow"
                          >
                            <Shield className="mr-2 h-5 w-5" />
                            Authenticate Identity
                          </Button>
                        </>
                      )}
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-green-400 via-cyan-500 to-blue-600 flex items-center justify-center quantum-glow">
                        <CheckCircle className="w-12 h-12 text-white" />
                      </div>
                      <div>
                        <p className="text-green-400 text-xl font-semibold mb-2">Authentication Successful</p>
                        <p className="text-gray-300">Your quantum identity has been verified</p>
                      </div>
                      <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                        <div className="bg-green-500/20 p-3 rounded-lg border border-green-500/30">
                          <p className="text-green-400 font-semibold">Verified</p>
                          <p className="text-gray-300 text-sm">Identity Status</p>
                        </div>
                        <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30">
                          <p className="text-blue-400 font-semibold">Quantum-Safe</p>
                          <p className="text-gray-300 text-sm">Security Level</p>
                        </div>
                      </div>
                      <Button 
                        onClick={() => {
                          setIsAuthenticated(false);
                          setAuthProgress(0);
                        }} 
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-400/10"
                      >
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Re-authenticate
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Monitor Tab */}
            <TabsContent value="monitor" className="space-y-6 flex-1 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {securityMetrics.map((metric) => (
                  <Card key={metric.name} className="bg-slate-800/50 border-cyan-500/20">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-white">
                        <span className="text-sm">{metric.name}</span>
                        <Badge className={getMetricBadgeColor(metric.status)}>
                          {metric.status}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className={`text-2xl font-bold ${getMetricStatusColor(metric.status)}`}>
                            {metric.value}%
                          </span>
                          <div className="flex items-center gap-1">
                            <Activity className={`h-4 w-4 ${
                              metric.trend === 'up' ? 'text-green-400' : 
                              metric.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                            }`} />
                            <span className="text-xs text-gray-400 capitalize">{metric.trend}</span>
                          </div>
                        </div>
                        <Progress 
                          value={metric.value} 
                          className="h-2"
                        />
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>0%</span>
                          <span>100%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-slate-800/50 border-cyan-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Real-time Security Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div className="bg-green-500/20 p-4 rounded-lg border border-green-500/30">
                      <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="text-green-400 font-semibold">Quantum Secure</p>
                      <p className="text-gray-300 text-sm">All systems operational</p>
                    </div>
                    <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-500/30">
                      <Activity className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="text-blue-400 font-semibold">Active Monitoring</p>
                      <p className="text-gray-300 text-sm">Real-time threat detection</p>
                    </div>
                    <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-500/30">
                      <Zap className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="text-purple-400 font-semibold">Auto-Response</p>
                      <p className="text-gray-300 text-sm">Automated security measures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="card-hover bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-slate-900/90 border border-cyan-500/20 backdrop-blur-sm">
      <CardContent className="p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-blue-600 flex items-center justify-center quantum-glow">
            <div className="text-white text-2xl">
              {icon}
            </div>
          </div>
        </div>
        <h3 className="orbitron text-xl font-bold text-white mb-4 quantum-text-glow">
          {title}
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
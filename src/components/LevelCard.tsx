import Link from 'next/link';
import { useState } from 'react';

interface LevelCardProps {
  title: string;
  description: string;
  level: number;
  href: string;
  status: 'locked' | 'unlocked' | 'completed';
  icon: string;
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Expert';
  estimatedTime?: string;
  skills?: string[];
}

export default function LevelCard({
  title,
  description,
  level,
  href,
  status,
  icon,
  difficulty,
  estimatedTime = "~15 min",
  skills = []
}: LevelCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'locked': return 'text-gray-500 border-gray-500';
      case 'unlocked': return 'text-cyber-green border-cyber-green';
      case 'completed': return 'text-cyber-blue border-cyber-blue';
      default: return 'text-cyber-green border-cyber-green';
    }
  };

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy': return 'text-cyber-green';
      case 'Medium': return 'text-cyber-yellow';
      case 'Hard': return 'text-cyber-purple';
      case 'Expert': return 'text-cyber-red';
      default: return 'text-cyber-green';
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'locked': return '🔒';
      case 'unlocked': return '🔓';
      case 'completed': return '✅';
      default: return '🔓';
    }
  };

  const playClickSound = () => {
    const audio = document.getElementById('clickSound') as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
  };

  if (status === 'locked') {
    return (
      <div className="cyber-card rounded-lg p-6 opacity-50 cursor-not-allowed relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black/20"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="font-bold text-gray-500">LEVEL {level}</h3>
                <span className="text-xs text-gray-600">LOCKED</span>
              </div>
            </div>
            <span className="text-2xl">{getStatusIcon()}</span>
          </div>
          
          <h4 className="text-lg font-bold text-gray-500 mb-2">{title}</h4>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          
          <div className="text-xs text-gray-600">
            Complete previous levels to unlock
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} onClick={playClickSound}>
      <div 
        className={`cyber-card rounded-lg p-6 cursor-pointer transition-all duration-300 relative overflow-hidden group ${getStatusColor()}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/5 to-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Scanning Line */}
        {isHovered && (
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-scan"></div>
        )}

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl group-hover:animate-pulse">{icon}</span>
              <div>
                <h3 className="font-bold cyber-text-primary">LEVEL {level}</h3>
                <span className={`text-xs ${getDifficultyColor()}`}>{difficulty.toUpperCase()}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl group-hover:scale-110 transition-transform">{getStatusIcon()}</span>
              {status === 'completed' && (
                <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse-blue"></div>
              )}
            </div>
          </div>
          
          {/* Title and Description */}
          <h4 className="text-lg font-bold cyber-text-primary mb-2 group-hover:text-cyber-blue transition-colors">
            {title}
          </h4>
          <p className="text-gray-300 text-sm mb-4 leading-relaxed">{description}</p>
          
          {/* Skills Tags */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-cyber-green"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
          
          {/* Footer */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center space-x-4">
              <span className="text-gray-400">
                ⏱️ {estimatedTime}
              </span>
              <span className={`${getDifficultyColor()}`}>
                🔥 {difficulty}
              </span>
            </div>
            
            <div className="flex items-center space-x-1 text-cyber-green">
              <span>ACCESS</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
          
          {/* Progress Bar for Completed */}
          {status === 'completed' && (
            <div className="mt-4 pt-2 border-t border-cyber-blue/30">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-cyber-blue">COMPLETED</span>
                <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyber-blue to-cyber-green animate-pulse"></div>
                </div>
                <span className="text-cyber-blue">100%</span>
              </div>
            </div>
          )}
        </div>

        {/* Corner Decorations */}
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyber-green/30 group-hover:border-cyber-blue/50 transition-colors"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyber-green/30 group-hover:border-cyber-blue/50 transition-colors"></div>
      </div>
    </Link>
  );
}
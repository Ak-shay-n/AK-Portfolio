"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LevelCard from '@/components/LevelCard';
import Terminal from '@/components/Terminal';
import LightRays from '@/components/LightRays';
import { CyberNavbar } from '@/components/CyberNavbar';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const welcomeText = "Welcome to My World";

  const levels = [
    {
      title: "SYSTEM ACCESS",
      description: "Gain entry to my digital fortress. Learn about my background, skills, and passion for cybersecurity.",
      level: 1,
      href: "/level1",
      status: "unlocked" as const,
      icon: "🔓",
      difficulty: "Easy" as const,
      estimatedTime: "~10 min",
      skills: ["Bio", "Skills", "Experience"]
    },
    {
      title: "DECRYPT PROJECTS",
      description: "Decode my project portfolio. Explore interactive demos and technical implementations.",
      level: 2,
      href: "/level2",
      status: "unlocked" as const,
      icon: "📊",
      difficulty: "Medium" as const,
      estimatedTime: "~20 min",
      skills: ["Web Apps", "Tools", "Demonstrations"]
    },
    {
      title: "SECURE CONTACT",
      description: "Establish encrypted communication. Multiple secure channels available for professional contact.",
      level: 3,
      href: "/level3",
      status: "unlocked" as const,
      icon: "🛡️",
      difficulty: "Hard" as const,
      estimatedTime: "~20 min",
      skills: ["Contact", "Network", "Verification"]
    },
    {
      title: "MISSION COMPLETE",
      description: "System fully compromised. You've successfully infiltrated all security layers.",
      level: 4,
      href: "/complete",
      status: "locked" as const,
      icon: "🏆",
      difficulty: "Expert" as const,
      estimatedTime: "~20 min",
      skills: ["Achievement", "Mastery", "Elite Status"]
    }
  ];

  // Typewriter effect
  useEffect(() => {
    if (!isClient) return;
    
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < welcomeText.length) {
        setCurrentText(welcomeText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsLoaded(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isClient]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    // Initialize dimensions
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-green-400 text-2xl font-mono">Initializing...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Light Rays Background */}
      <div className="fixed inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Cyber Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="cyber-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ff41" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="1" fill="#00ff41" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-grid)" />
        </svg>
      </div>



      {/* Navigation Header */}
      <div className="fixed top-0 w-full z-40">
        <CyberNavbar />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center relative">
          {/* Enhanced Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full opacity-40"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animation: `float ${5 + Math.random() * 10}s infinite ease-in-out alternate`
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="mb-16">
              {/* Enhanced Glitch Effect Title */}
              <div className="relative inline-block mb-8">
                <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 font-mono glitch-text">
                  AKSHAY KUMAR B
                </h1>
                <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-red-400 opacity-20 animate-pulse font-mono">
                  AKSHAY KUMAR B
                </div>
              </div>
              
              {/* Typewriter Effect */}
              <div className="text-2xl md:text-4xl font-mono text-green-400 mb-8 min-h-[3rem]">
                <span className="inline-block">
                  {currentText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-cyan-400`}>|</span>
                </span>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                <span className="text-red-400 font-bold font-mono">[CLASSIFIED]</span> Cybersecurity | Network Systems | AI Model Builder
                <br />
                <span className="text-cyan-400 font-mono">
                  "Defending the digital realm, one vulnerability at a time"
                </span>
              </p>

              {/* Enhanced System Status Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
                <div className="bg-black/70 border border-green-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-green-400 transition-all duration-300">
                  <div className="text-green-400 font-bold text-sm font-mono">FIREWALL</div>
                  <div className="text-green-400 text-xs">ACTIVE</div>
                </div>
                <div className="bg-black/70 border border-blue-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-blue-400 transition-all duration-300">
                  <div className="text-blue-400 font-bold text-sm font-mono">ENCRYPTION</div>
                  <div className="text-blue-400 text-xs font-mono">AES-256</div>
                </div>
                <div className="bg-black/70 border border-purple-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                  <div className="text-purple-400 font-bold text-sm font-mono">INTRUSION</div>
                  <div className="text-purple-400 text-xs">DETECTED</div>
                </div>
                <div className="bg-black/70 border border-yellow-400/30 rounded-lg p-4 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300">
                  <div className="text-yellow-400 font-bold text-sm font-mono">THREAT LVL</div>
                  <div className="text-green-400 text-xs">MINIMAL</div>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link href="/level1" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-black rounded-lg text-lg font-semibold text-white border border-green-400/50 hover:border-cyan-400 transition-all duration-300 font-mono">
                  <span className="text-green-400">[ </span>
                  BEGIN INFILTRATION
                  <span className="text-green-400"> ]</span>
                </div>
              </Link>
              
              <button 
                className="group relative"
                onClick={() => {
                  document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative px-8 py-4 bg-black rounded-lg text-lg font-semibold text-white border border-cyan-400/50 hover:border-blue-400 transition-all duration-300 font-mono">
                  <span className="text-cyan-400">[ </span>
                  SCAN SYSTEMS
                  <span className="text-cyan-400"> ]</span>
                </div>
              </button>
            </div>

            {/* Animated Scroll Indicator */}
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Levels Section */}
        <section id="levels" className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 font-mono">
              <span className="text-red-400">[</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-400">
                SECURITY LEVELS
              </span>
              <span className="text-red-400">]</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 text-lg font-mono">
              Navigate through increasingly complex security layers
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {levels.map((level, index) => (
                <div key={level.level} className="group relative">
                  {/* Enhanced Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-cyan-400 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                  
                  {/* Enhanced Card Content */}
                  <div className="relative bg-black/80 border border-green-400/30 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-3xl mb-2">{level.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                          LEVEL {level.level}: {level.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className={`px-2 py-1 rounded font-mono ${
                            level.difficulty === 'Easy' ? 'bg-green-400/20 text-green-400' :
                            level.difficulty === 'Medium' ? 'bg-yellow-400/20 text-yellow-400' :
                            level.difficulty === 'Hard' ? 'bg-red-400/20 text-red-400' :
                            'bg-purple-400/20 text-purple-400'
                          }`}>
                            {level.difficulty}
                          </span>
                          <span className="text-gray-400 font-mono">{level.estimatedTime}</span>
                          <span className={`font-mono ${level.status === 'unlocked' ? 'text-green-400' : 'text-red-400'}`}>
                            {level.status === 'unlocked' ? '● UNLOCKED' : '● LOCKED'}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {level.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="text-sm text-gray-400 mb-2 font-mono">REQUIRED SKILLS:</div>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map(skill => (
                          <span key={skill} className="px-2 py-1 bg-cyan-400/20 text-cyan-400 rounded text-xs font-mono">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={level.href}
                      className={`inline-block px-6 py-3 rounded-lg font-semibold transition-all duration-300 font-mono ${
                        level.status === 'unlocked' 
                          ? 'bg-green-400/20 text-green-400 border border-green-400/50 hover:bg-green-400/30 hover:border-green-400' 
                          : 'bg-gray-800/50 text-gray-500 border border-gray-700 cursor-not-allowed'
                      }`}
                    >
                      {level.status === 'unlocked' ? '[ ACCESS LEVEL ]' : '[ LOCKED ]'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Access Navigation */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-cyan-400 mb-8 font-mono">QUICK ACCESS NAVIGATION</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/level1" className="bg-green-400/20 text-green-400 px-4 py-2 rounded border border-green-400/50 hover:bg-green-400/30 transition-all font-mono">
                  → LEVEL 1
                </Link>
                <Link href="/level2" className="bg-blue-400/20 text-blue-400 px-4 py-2 rounded border border-blue-400/50 hover:bg-blue-400/30 transition-all font-mono">
                  → LEVEL 2
                </Link>
                <Link href="/level3" className="bg-red-400/20 text-red-400 px-4 py-2 rounded border border-red-400/50 hover:bg-red-400/30 transition-all font-mono">
                  → LEVEL 3
                </Link>
                <Link href="/complete" className="bg-purple-400/20 text-purple-400 px-4 py-2 rounded border border-purple-400/50 hover:bg-purple-400/30 transition-all font-mono">
                  → COMPLETE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-green-400/30 bg-black/50">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-400 font-mono">
              <span className="text-green-400">[</span>
              © 2025 AKSHAY KUMAR B - CYBER SECURITY SPECIALIST
              <span className="text-green-400">]</span>
            </p>
            <p className="text-green-400 text-sm mt-2 font-mono">
              System Status: OPERATIONAL | Security Level: MAXIMUM
            </p>
          </div>
        </footer>
        
        {/* Background Audio */}
        <audio id="backgroundAudio" loop>
          <source src="/sounds/cyber-ambient.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}

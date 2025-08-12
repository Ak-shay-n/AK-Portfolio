"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LevelCard from '@/components/LevelCard';
import Terminal from '@/components/Terminal';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const welcomeText = "Welcome to My Cyber Portfolio";
  const terminalCommands = [
    "sudo nmap -sS localhost",
    ">> Starting Nmap scan...",
    ">> Host is up (0.00050s latency)",
    "whoami && id",
    ">> akshay_kumar uid=1337(akshay) gid=1337(cyber)",
    "cat /etc/portfolio-release",
    ">> CYBER PORTFOLIO OS v2.1.0",
    ">> BUILD: PRODUCTION-STABLE",
    ">> SECURITY: MAXIMUM ENCRYPTION",
    "systemctl status portfolio.service",
    ">> ● portfolio.service - Cyber Portfolio System",
    ">>   Loaded: loaded (/etc/systemd/system/portfolio.service; enabled)",
    ">>   Active: active (running) since now",
    ">>   Status: \"Ready for exploration. All systems operational.\""
  ];

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
      estimatedTime: "~5 min",
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
      estimatedTime: "~∞",
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
    <>
      {/* Matrix Rain Background */}
      <div className="matrix"></div>
      
      {/* Circuit Pattern Overlay */}
      <div className="circuit-pattern"></div>

      {/* Mouse Tracker */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 border border-cyan-400 rounded-full mix-blend-difference transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'scale(1)',
        }}
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animation: 'float 10s infinite ease-in-out alternate'
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 text-center relative z-10">
            <div className="mb-16">
              <h1 className="glitch text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-6"
                  data-text="AKSHAY KUMAR B">
                AKSHAY KUMAR B
              </h1>
              
              <div className="text-2xl md:text-3xl font-mono text-green-400 mb-8 min-h-[2rem]">
                {currentText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </div>

              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Cybersecurity Specialist | Ethical Hacker | Digital Fortress Architect
                <br />
                <span className="text-cyan-400 font-mono">
                  "Defending the digital realm, one vulnerability at a time"
                </span>
              </p>
            </div>

            {/* System Status */}
            <div className="cyber-card p-6 mb-12 max-w-2xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
                <div className="text-center">
                  <div className="text-green-400 font-bold">FIREWALL</div>
                  <div className="text-gray-400">ACTIVE</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-bold">ENCRYPTION</div>
                  <div className="text-gray-400">AES-256</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-bold">INTRUSION</div>
                  <div className="text-gray-400">DETECTED</div>
                </div>
                <div className="text-center">
                  <div className="text-red-400 font-bold">THREAT LVL</div>
                  <div className="text-gray-400">MINIMAL</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/level1" className="cyber-btn px-8 py-4 text-lg font-semibold">
                BEGIN INFILTRATION
              </Link>
              <button 
                className="px-8 py-4 text-lg font-semibold border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg"
                onClick={() => {
                  document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                SCAN SYSTEMS
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Terminal Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              System Diagnostics
            </h2>
            <div className="max-w-4xl mx-auto">
              <Terminal commands={terminalCommands} />
            </div>
          </div>
        </section>

        {/* Levels/Challenges Section */}
        <section id="levels" className="py-20 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">
              Security Levels
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {levels.map((level, index) => (
                <LevelCard
                  key={level.level}
                  {...level}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Network Background */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <svg className="w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00ff41" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Background Audio */}
      <audio id="backgroundAudio" loop>
        <source src="/sounds/cyber-ambient.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}

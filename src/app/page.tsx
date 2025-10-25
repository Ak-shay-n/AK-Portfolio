"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LevelCard from '@/components/LevelCard';
import LightRays from '@/components/LightRays';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle scroll for navbar resize
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

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



      {/* Modern Navigation Header */}
      <nav className="fixed top-4 left-1/2 z-40" style={{ transform: 'translateX(-50%)' }}>
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-300 ease-out ${
          isScrolled 
            ? 'w-[85vw] max-w-4xl px-5 py-3'
            : 'w-[95vw] max-w-6xl px-8 py-4'
        }`}>
          <div className="flex items-center justify-between">
            <Link href="/" className={`font-bold text-white tracking-tight transition-all duration-300 hover:text-cyan-400 ${
              isScrolled 
                ? 'text-base' 
                : 'text-lg'
            }`}>
              Akshay Kumar
            </Link>
            <div className={`hidden md:flex items-center gap-2 transition-all duration-300 ${
              isScrolled 
                ? 'gap-2' 
                : 'gap-3'
            }`}>
              <button onClick={() => scrollToSection('home')} className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Home
              </button>
              <Link href="/level1" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                About
              </Link>
              <Link href="/level2" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Portfolio
              </Link>
              <Link href="/level3" className={`bg-white text-black rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-200 font-semibold shadow-lg ${
                isScrolled 
                  ? 'px-5 py-2 text-xs' 
                  : 'px-6 py-2 text-sm'
              }`}>
                Get Started
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              <svg className={`w-5 h-5 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu Dropdown */}
          <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-80 opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
          } overflow-hidden`}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Home
              </button>
              <Link 
                href="/level1"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                About
              </Link>
              <Link 
                href="/level2"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Portfolio
              </Link>
              <div className="pt-2">
                <Link 
                  href="/level3" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-white text-black px-4 py-3 rounded-xl hover:bg-white/90 transition-all duration-300 text-base font-medium text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-20">
          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Modern Hero Title */}
              <div className="mb-8">
                <div className="inline-block mb-6">
                  <span className="text-white/60 text-lg font-light tracking-wider uppercase">Hello, I'm</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
                  Akshay Kumar B
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8"></div>
              </div>
              
              {/* Dynamic Typewriter */}
              <div className="text-xl md:text-2xl text-white/80 mb-8 min-h-[2.5rem] font-light">
                <span className="inline-block">
                  {currentText}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity text-white/40 ml-1`}>|</span>
                </span>
              </div>

              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                Cybersecurity Professional • Network Systems Engineer • AI Developer
                <br />
                <span className="text-white/60 italic">
                  "Building secure digital experiences with innovative technology"
                </span>
              </p>

              {/* Modern Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">5+</div>
                    <div className="text-white/60 text-sm font-light">Years Experience</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">50+</div>
                    <div className="text-white/60 text-sm font-light">Projects Completed</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-white/60 text-sm font-light">Security Focus</div>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                    <div className="text-white/60 text-sm font-light">Uptime Record</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link href="/level1" className="group relative overflow-hidden">
                <div className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore My Work
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </div>
              </Link>
              
              <button 
                className="group relative"
                onClick={() => {
                  document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                  View Portfolio
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">↓</span>
                </div>
              </button>
            </div>

            {/* Elegant Scroll Indicator */}
            <div className="animate-bounce opacity-60">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="levels" className="py-24 relative">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-white/60 text-sm font-light tracking-wider uppercase">My Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8"></div>
              <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
                Explore my journey through cybersecurity, development, and innovation
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {levels.map((level, index) => (
                <div key={level.level} className="group relative">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className="text-4xl mb-4">{level.icon}</div>
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                          {level.title}
                        </h3>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            level.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' :
                            level.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' :
                            level.difficulty === 'Hard' ? 'bg-red-500/10 text-red-300 border-red-500/20' :
                            'bg-purple-500/10 text-purple-300 border-purple-500/20'
                          }`}>
                            {level.difficulty}
                          </span>
                          <span className="text-white/50 text-xs">{level.estimatedTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-6 leading-relaxed font-light">
                      {level.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-sm text-white/60 mb-3 font-medium">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={level.href}
                      className="inline-flex items-center justify-center w-full py-3 px-6 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 group"
                    >
                      Explore Project
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
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
      </div>  );
}

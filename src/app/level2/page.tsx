"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';

export default function Level2() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState('security');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Project categories
  const projectCategories = {
    security: {
      title: "Security & Cybersecurity",
      icon: "🔐",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
      projects: [
        {
          name: "Network Security Scanner",
          description: "Advanced network vulnerability assessment tool",
          tech: ["Python", "Nmap", "Scapy", "Flask"],
          status: "Production",
          link: "#"
        },
        {
          name: "Password Security Analyzer",
          description: "Real-time password strength and breach checking",
          tech: ["React", "Node.js", "MongoDB", "HIBP API"],
          status: "Live",
          link: "#"
        },
        {
          name: "OSINT Framework",
          description: "Open Source Intelligence gathering toolkit",
          tech: ["Python", "APIs", "Web Scraping", "ML"],
          status: "Development",
          link: "#"
        }
      ]
    },
    web: {
      title: "Web Applications",
      icon: "🌐",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30",
      projects: [
        {
          name: "E-Commerce Platform",
          description: "Full-stack secure shopping platform",
          tech: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
          status: "Production",
          link: "#"
        },
        {
          name: "Secure File Sharing",
          description: "End-to-end encrypted file sharing service",
          tech: ["React", "WebRTC", "Encryption", "AWS"],
          status: "Live",
          link: "#"
        },
        {
          name: "Real-time Chat App",
          description: "Secure messaging with E2E encryption",
          tech: ["Socket.io", "JWT", "Crypto", "Docker"],
          status: "Beta",
          link: "#"
        }
      ]
    },
    blockchain: {
      title: "Blockchain & DeFi",
      icon: "⛓️",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
      projects: [
        {
          name: "Voting DApp",
          description: "Decentralized voting system on Ethereum",
          tech: ["Solidity", "Web3.js", "IPFS", "MetaMask"],
          status: "Development",
          link: "#"
        },
        {
          name: "NFT Marketplace",
          description: "Secure NFT trading platform",
          tech: ["Smart Contracts", "React", "Polygon", "OpenSea API"],
          status: "Planning",
          link: "#"
        },
        {
          name: "DeFi Protocol",
          description: "Yield farming and liquidity protocol",
          tech: ["Solidity", "Hardhat", "Chainlink", "Uniswap"],
          status: "Research",
          link: "#"
        }
      ]
    }
  };

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        contentRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        contentRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      }
    };

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    handleResize();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-cyan-400 text-2xl font-mono">Initializing Level 2...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden" ref={contentRef}>
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
        <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-500 ease-in-out transform-gpu ${
          isScrolled 
            ? 'w-[80vw] max-w-3xl px-4 py-3'
            : 'w-[100vw] max-w-6xl px-6 py-4'
        }`} style={{ transformOrigin: 'center center' }}>
          <div className="flex items-center justify-between">
            <div className={`font-bold text-white tracking-tight transition-all duration-500 ${
              isScrolled 
                ? 'text-lg' 
                : 'text-xl'
            }`}>
              Level 2: Projects
            </div>
            <div className={`hidden md:flex items-center transition-all duration-500 ${
              isScrolled 
                ? 'space-x-3' 
                : 'space-x-6'
            }`}>
              <Link href="/" className={`text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Home
              </Link>
              <Link href="/level1" className={`text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 1
              </Link>
              <Link href="/level3" className={`text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 3
              </Link>
              <Link href="/complete" className={`bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 font-medium ${
                isScrolled 
                  ? 'px-4 py-2 text-xs' 
                  : 'px-6 py-2 text-sm'
              }`}>
                Complete
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
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Home
              </Link>
              <Link 
                href="/level1" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Level 1
              </Link>
              <Link 
                href="/level3" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Level 3
              </Link>
              <div className="pt-2">
                <Link 
                  href="/complete" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block bg-white text-black px-4 py-3 rounded-xl hover:bg-white/90 transition-all duration-300 text-base font-medium text-center"
                >
                  Complete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Project Categories Section */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-8">
          {/* Category Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-2 border border-white/10">
              {Object.entries(projectCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveProject(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeProject === key
                      ? `${category.bgColor} ${category.color} border ${category.borderColor}`
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span className="text-lg mr-2">{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCategories[activeProject as keyof typeof projectCategories].projects.map((project, index) => (
                <div key={index} className="group">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                          {project.name}
                        </h3>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            project.status === 'Production' || project.status === 'Live' 
                              ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' :
                            project.status === 'Beta' || project.status === 'Development'
                              ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' :
                              'bg-purple-500/10 text-purple-300 border-purple-500/20'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-sm text-white/60 mb-3 font-medium">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button className="w-full py-3 px-6 bg-white/10 text-white border border-white/20 rounded-2xl font-semibold hover:bg-white hover:text-black transition-all duration-300 group">
                      View Details
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation to Next Level */}
          <div className="mt-20 text-center">
            <div className="inline-block mb-6">
              <span className="text-white/60 text-sm font-light tracking-wider uppercase">Ready for the next challenge?</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/level3" className="group relative overflow-hidden">
                <div className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Proceed to Level 3
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </div>
              </Link>
              
              <Link href="/" className="group relative">
                <div className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                  Return Home
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">←</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20 bg-black/50 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-cyan-400">[</span>
            LEVEL 2: PROJECT VAULT - ACCESS GRANTED
            <span className="text-cyan-400">]</span>
          </p>
          <p className="text-cyan-400 text-sm mt-2 font-mono">
            Security Level: HIGH | Projects Loaded: SUCCESS
          </p>
        </div>
      </footer>
    </div>
  );
}

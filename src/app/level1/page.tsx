"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';

export default function Level1() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('bio');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    // Mouse tracking for 3D effects
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
    
    // Initialize dimensions
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

      if (scrollPosition <= 50) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-cyan-400 text-2xl font-mono">Initializing...</div>
      </div>
    );
  }

  const profileData = {
    bio: {
      title: "PERSONAL_BIO.txt",
      icon: "👤",
      content: `USER: Akshay Kumar B
ROLE: Cybersecurity Enthusiast | Frontend Designer | Blockchain Learner
STATUS: Active | Learning | Building
CLEARANCE: Level 1 - System Access ✓

═══════════════════════════════════════════════════════════════

PERSONAL PROFILE:
  A passionate cybersecurity student with a strong interest in ethical 
  hacking, network security, and penetration testing. I combine my love 
  for security with modern web development to create secure, interactive 
  applications that protect and serve.

  Currently exploring the intersection of cybersecurity and blockchain 
  technology while building real-world projects that make a difference.
  
SPECIALIZATIONS:
  • Network Security & Penetration Testing
  • Secure Web Application Development  
  • Blockchain Security & Smart Contract Auditing
  • OSINT & Digital Forensics
  • Ethical Hacking & Vulnerability Assessment

CURRENT MISSION:
  Building secure, innovative solutions while learning advanced 
  cybersecurity techniques. Always staying one step ahead of threats
  and continuously improving digital defense systems.

PERSONAL MOTTO:
  "Stay curious. Stay lazy. Stay secure. Never stop learning."
  
  "In a world of constant digital evolution, security isn't just
   a feature—it's the foundation of trust."

═══════════════════════════════════════════════════════════════

LOCATION: India 🇮🇳
TIMEZONE: UTC+5:30 (IST)
AVAILABILITY: Open to collaborations and learning opportunities
PREFERRED_CONTACT: Secure channels only`
    },
    skills: {
      title: "TECH_STACK.json",
      icon: "⚡",
      content: `{
  "cybersecurity": {
    "penetration_testing": {
      "tools": ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"],
      "techniques": ["Network Scanning", "Web App Testing", "Social Engineering"],
      "experience": "2+ years hands-on practice"
    },
    "network_security": {
      "protocols": ["TCP/IP", "HTTP/HTTPS", "SSH", "VPN", "TLS/SSL"],
      "monitoring": ["Wireshark", "tcpdump", "Snort", "pfSense"],
      "analysis": ["Traffic Analysis", "Intrusion Detection", "Log Analysis"]
    },
    "mobile_security": {
      "android": ["ADB", "Frida", "APK Analysis", "Root Detection Bypass"],
      "tools": ["Android Studio", "Genymotion", "MobSF"],
      "expertise": "Mobile App Security Assessment"
    },
    "certifications": {
      "in_progress": ["CEH (Certified Ethical Hacker)"],
      "planned": ["CISSP", "OSCP", "Security+"],
      "completed": ["Various CTF competitions"]
    }
  },
  
  "frontend_development": {
    "frameworks": {
      "react": {
        "version": "18+",
        "experience": "3+ years",
        "specialties": ["Hooks", "Context API", "Performance Optimization"]
      },
      "nextjs": {
        "version": "13+", 
        "features": ["App Router", "Server Components", "API Routes"],
        "deployment": ["Vercel", "Netlify", "AWS"]
      },
      "vue": {
        "version": "3+",
        "experience": "Learning",
        "focus": ["Composition API", "Pinia State Management"]
      }
    },
    "styling": {
      "tailwind_css": "Expert level - Component architecture",
      "styled_components": "Intermediate - Dynamic theming",
      "css3": "Advanced - Animations & Grid/Flexbox"
    },
    "tools": ["TypeScript", "JavaScript ES6+", "Webpack", "Vite", "Babel"]
  },
  
  "backend_development": {
    "languages": {
      "nodejs": "Express.js, Socket.io, RESTful APIs",
      "python": "Django, Flask, Security Scripts",
      "java": "Spring Boot, Servlet API"
    },
    "databases": {
      "sql": ["PostgreSQL", "MySQL", "SQLite"],
      "nosql": ["MongoDB", "Redis", "Firebase"],
      "orm": ["Prisma", "TypeORM", "Mongoose"]
    },
    "apis": ["REST", "GraphQL", "WebSocket", "gRPC"]
  },
  
  "blockchain_technology": {
    "platforms": {
      "ethereum": "Smart Contract Development",
      "solidity": "DeFi protocols, NFT marketplaces",
      "web3": "dApp integration and wallet connectivity"
    },
    "tools": ["Ganache", "Truffle", "Hardhat", "MetaMask", "Remix IDE"],
    "concepts": ["DeFi", "NFTs", "DAOs", "Decentralized Applications"],
    "security": ["Smart Contract Auditing", "Reentrancy Prevention"]
  },
  
  "additional_skills": {
    "programming_languages": ["C++", "Python", "Java", "JavaScript", "Go"],
    "version_control": ["Git", "GitHub", "GitLab", "Bitbucket"],
    "cloud_platforms": ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    "containerization": ["Docker", "Kubernetes", "Docker Compose"],
    "ci_cd": ["GitHub Actions", "Jenkins", "GitLab CI"],
    "operating_systems": ["Linux (Ubuntu, Kali)", "Windows", "macOS"]
  }
}`
    },
  };

  const tabs = [
    { id: 'bio', label: 'PERSONAL BIO', icon: '👤' },
    { id: 'skills', label: 'TECH STACK', icon: '⚡' }
  ];

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
            <pattern id="cyber-grid-level1" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ff41" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="1" fill="#00ff41" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-grid-level1)" />
        </svg>
      </div>

      {/* Modern Navigation Header */}
      <nav
        className="fixed top-4 left-1/2 z-40"
        style={{ transform: 'translateX(-50%)' }}
      >
        <div
          className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-500 ease-in-out transform-gpu ${
            isScrolled
              ? 'w-[80vw] max-w-3xl px-4 py-3'
              : 'w-[100vw] max-w-6xl px-6 py-4'
          }`}
          style={{ transformOrigin: 'center center' }}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className={`font-bold text-white tracking-tight transition-all duration-500 hover:text-cyan-400 ${
              isScrolled 
                ? 'text-lg' 
                : 'text-xl'
            }`}>
              Akshay Kumar
            </Link>
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
              <Link href="/level1" className={`text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-medium px-3 py-2 rounded-full bg-cyan-400/10 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 1
              </Link>
              <Link href="/level2" className={`text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 2
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
                className="block text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl bg-cyan-400/10"
              >
                Level 1
              </Link>
              <Link 
                href="/level2" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Level 2
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

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-8" ref={contentRef}>

          {/* Hero Section */}
          <section className="min-h-[60vh] flex items-center justify-center mb-20">
            <div className="max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                {/* Level Badge */}
                <div className="inline-block mb-6">
                  <div className="bg-gradient-to-r from-cyan-400/20 to-blue-400/20 border border-cyan-400/30 rounded-full px-6 py-3 backdrop-blur-sm">
                    <span className="text-cyan-400 font-mono text-sm tracking-wider uppercase">Level 1: System Access</span>
                  </div>
                </div>
                
                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Akshay</span>
                </h1>
                
                {/* Divider Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 mx-auto mb-8"></div>
                
                {/* Description */}
                <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-12 font-light">
                  Explore my professional journey, technical expertise, and current projects through this interactive profile system.
                </p>
              </div>
            </div>
          </section>
          
          {/* Content Sections */}
          <div className="max-w-5xl mx-auto space-y-20">
            
            {/* Navigation Pills */}
            <div className="flex justify-center mb-16">
              <div className="flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-full p-1 space-x-1">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveSection(tab.id)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSection === tab.id
                        ? 'bg-white text-black shadow-lg'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Display */}
            <div className="relative">
              <div className={`transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Content Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
                  <div className="max-w-4xl mx-auto">
                    
                    {/* Section Header */}
                    <div className="text-center mb-12">
                      <div className="text-6xl md:text-7xl mb-4">
                        {profileData[activeSection as keyof typeof profileData].icon}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {profileData[activeSection as keyof typeof profileData].title}
                      </h2>
                      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto"></div>
                    </div>

                    {/* Section Content */}
                    <div className="prose prose-lg prose-invert max-w-none">
                      <div className="text-white/80 leading-relaxed whitespace-pre-line text-center md:text-left">
                        {profileData[activeSection as keyof typeof profileData].content}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="text-center">
              <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-medium">Level 1: Complete</span>
                <div className="text-white/60 text-sm">25% Progress</div>
              </div>
            </div>

            {/* Next Level CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12">
                <div className="max-w-2xl mx-auto">
                  <div className="text-5xl mb-6">🚀</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Ready for the Next Level?
                  </h3>
                  <p className="text-white/70 mb-8 text-lg">
                    Dive deeper into my professional journey and explore my projects and achievements.
                  </p>
                  <Link 
                    href="/level2"
                    className="inline-flex items-center bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/90 transition-all duration-300 transform hover:scale-105 group"
                  >
                    Continue to Level 2
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
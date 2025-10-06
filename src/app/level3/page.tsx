"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';
import ProfileCard from '../../components/ProfileCard';

export default function Level3() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedContact, setSelectedContact] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  const contactMethods = [
    {
      id: 'email',
      name: 'Secure Email',
      icon: '📧',
      description: 'End-to-end encrypted communication',
      value: 'akshay.kumar@secure.mail',
      status: 'verified',
      security: 'PGP Encrypted'
    },
    {
      id: 'linkedin',
      name: 'Professional Network',
      icon: '💼',
      description: 'Professional networking and collaborations',
      value: 'linkedin.com/in/akshay-kumar-cyber',
      status: 'active',
      security: 'OAuth 2.0'
    },
    {
      id: 'github',
      name: 'Code Repository',
      icon: '👨‍💻',
      description: 'Open source projects and contributions',
      value: 'github.com/akshaykumar-cyber',
      status: 'public',
      security: '2FA Enabled'
    },
    {
      id: 'telegram',
      name: 'Encrypted Messaging',
      icon: '🔒',
      description: 'Real-time secure communications',
      value: '@akshay_cyber_security',
      status: 'private',
      security: 'MTProto 2.0'
    }
  ];

  const securityFeatures = [
    'End-to-end encryption',
    'Zero-knowledge architecture',
    'Multi-factor authentication',
    'Perfect forward secrecy',
    'Identity verification'
  ];

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
        <div className="text-cyan-400 text-2xl font-mono">Initializing Level 3...</div>
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
              Level 3: Contact
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
              <Link href="/level2" className={`text-white/80 hover:text-white transition-all duration-300 font-medium px-3 py-2 rounded-full hover:bg-white/10 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 2
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
                href="/level2" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
              >
                Level 2
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

      <main className="relative z-10 pb-24 pt-32">
        <div className="container mx-auto px-8">
          {/* Profile Card Section */}
          <div className="flex justify-center mb-16 mt-16">
            <div className="w-full max-w-md">
              <ProfileCard
                name="Akshay Kumar B"
                title="Cybersecurity Specialist"
                handle="akshaykumar"
                status="Available"
                contactText="Secure Contact"
                avatarUrl="/my-photo.png"
                miniAvatarUrl="/my-photo.png"
                behindGradient={undefined}
                innerGradient={undefined}
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => {
                  console.log('Secure contact initiated');
                  setSelectedContact('email');
                }}
              />
            </div>
          </div>

          {/* Security Info */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              🔐 ESTABLISH SECURE COMMUNICATION
            </h2>
            <p className="text-white/70 text-lg text-center leading-relaxed font-light">
              All communication channels are secured with military-grade encryption. 
              Select your preferred method of contact for professional inquiries, 
              collaborations, or cybersecurity discussions.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                onClick={() => setSelectedContact(method.id)}
                className={`
                  bg-white/5 backdrop-blur-md border rounded-3xl p-8 cursor-pointer transition-all duration-500 transform hover:scale-105
                  ${selectedContact === method.id 
                    ? 'border-green-400/50 shadow-lg shadow-green-400/20 bg-green-400/10' 
                    : 'border-white/10 hover:border-white/20 hover:bg-white/10'
                  }
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{method.name}</h3>
                    <p className="text-white/70 mb-4 font-light">{method.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Contact:</span>
                        <span className="text-cyan-400 font-mono">{method.value}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Status:</span>
                        <span className={`font-bold ${
                          method.status === 'verified' ? 'text-green-400' :
                          method.status === 'active' ? 'text-blue-400' :
                          method.status === 'public' ? 'text-purple-400' :
                          'text-yellow-400'
                        }`}>
                          {method.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-white/60">Security:</span>
                        <span className="text-green-400">{method.security}</span>
                      </div>
                    </div>
                    
                    {selectedContact === method.id && (
                      <div className="mt-6 animate-pulse">
                        <button className="w-full px-6 py-3 bg-white text-black font-bold rounded-2xl hover:bg-white/90 transition-all duration-300">
                          🚀 INITIATE CONTACT
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {selectedContact === method.id && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation to Next Level */}
          <div className="mt-20 text-center">
            <div className="inline-block mb-6">
              <span className="text-white/60 text-sm font-light tracking-wider uppercase">Final Challenge Awaits</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link href="/complete" className="group relative overflow-hidden">
                <div className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  🏆 Mission Complete
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
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 max-w-2xl mx-auto rounded-3xl">
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-white/60">Progress:</span>
                  <span className="text-green-400 font-bold">Level 3 Complete ✓</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-white/60">Final Stage:</span>
                  <span className="text-yellow-400 font-bold">Mission Complete 🏆</span>
                </div>
              </div>
              
              <div className="mt-4 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20 bg-black/50 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400 font-mono">
            <span className="text-cyan-400">[</span>
            LEVEL 3: SECURE CONTACT - ENCRYPTED CHANNELS ACTIVE
            <span className="text-cyan-400">]</span>
          </p>
          <p className="text-cyan-400 text-sm mt-2 font-mono">
            Security Level: MAXIMUM | Communication Status: SECURED
          </p>
        </div>
      </footer>
    </div>
  );
}

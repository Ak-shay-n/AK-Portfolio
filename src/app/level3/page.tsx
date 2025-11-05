"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';
import ProfileCard from '../../components/ProfileCard';

export default function Level3() {
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Form states
  // Form states
  const [currentInput, setCurrentInput] = useState('');
  const [terminalLines, setTerminalLines] = useState<Array<{type: string, content: string}>>([]);
  const [currentStep, setCurrentStep] = useState<'name' | 'email' | 'message' | 'complete'>('name');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [userLocation, setUserLocation] = useState<string>('Detecting...');
  const [showSecurityCompromised, setShowSecurityCompromised] = useState(false);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    { name: 'LinkedIn', icon: '/social media icons/linkedin.png', url: 'https://www.linkedin.com/in/akshaykumarb17/', color: 'text-blue-400' },
    { name: 'GitHub', icon: '/social media icons/github.png', url: 'https://github.com/Ak-shay-n', color: 'text-purple-400' },
    { name: 'Email', icon: '/social media icons/email.png', url: 'mailto:personalakshay17@gmail.com', color: 'text-green-400' },
    { name: 'X', icon: '/social media icons/x.png', url: '#', color: 'text-pink-400' }
  ];

  // Type text animation
  const typeText = async (text: string) => {
    for (let i = 0; i <= text.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 30));
      setTerminalLines(prev => {
        const newLines = [...prev];
        if (newLines.length > 0 && newLines[newLines.length - 1].type === 'typing') {
          newLines[newLines.length - 1].content = text.substring(0, i);
        }
        return newLines;
      });
    }
  };

  // Initialize terminal with welcome message
  useEffect(() => {
    if (isClient) {
      const init = async () => {
        const now = new Date();
        setCurrentTime(now);
        
        setTerminalLines([
          { type: 'typing', content: '' }
        ]);
        
        // Get user location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              try {
                const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
                const data = await response.json();
                const location = data.address.suburb || data.address.city || data.address.town || data.address.village || 'Unknown Location';
                setUserLocation(location);
              } catch (error) {
                setUserLocation('Location unavailable');
              }
            },
            () => {
              setUserLocation('Location access denied');
            }
          );
        } else {
          setUserLocation('Geolocation not supported');
        }
        
        await new Promise(resolve => setTimeout(resolve, 500));
        await typeText('root@secure-terminal:~$ ENTER_NAME');
        
        setTimeout(() => {
          inputRef.current?.focus();
        }, 100);
      };
      
      init();
    }
  }, [isClient]);

  // Controlled scroll - only scroll terminal container, not the whole page
  const terminalContainerRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    setTimeout(() => {
      if (terminalContainerRef.current) {
        terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
      }
    }, 100);
  };

  // Handle Enter key press
  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && currentInput.trim()) {
      e.preventDefault();
      
      // Add user input to terminal
      setTerminalLines(prev => [
        ...prev.slice(0, -1),
        { type: 'prompt', content: `root@secure-terminal:~$ ${currentInput}` }
      ]);

      const input = currentInput.trim();
      setCurrentInput('');

      await new Promise(resolve => setTimeout(resolve, 200));

      if (currentStep === 'name') {
        setFormData(prev => ({ ...prev, name: input }));
        setShowSecurityCompromised(true);
        setTerminalLines(prev => [...prev, 
          { type: 'success', content: `✓ NAME VERIFIED: ${input}` },
          { type: 'divider', content: '' },
          { type: 'typing', content: '' }
        ]);
        await typeText('root@secure-terminal:~$ ENTER_EMAIL');
        setCurrentStep('email');
        
      } else if (currentStep === 'email') {
        // Basic email validation
        if (!input.includes('@')) {
          setTerminalLines(prev => [...prev,
            { type: 'error', content: '✗ ERROR: INVALID EMAIL FORMAT' },
            { type: 'error', content: '✗ PLEASE ENTER A VALID EMAIL ADDRESS' },
            { type: 'typing', content: '' }
          ]);
          await typeText('root@secure-terminal:~$ ENTER_EMAIL');
          return;
        }
        
        setFormData(prev => ({ ...prev, email: input }));
        setTerminalLines(prev => [...prev,
          { type: 'success', content: `✓ EMAIL VERIFIED: ${input}` },
          { type: 'divider', content: '' },
          { type: 'typing', content: '' }
        ]);
        await typeText('root@secure-terminal:~$ ENTER_MESSAGE');
        setCurrentStep('message');
        
      } else if (currentStep === 'message') {
        setFormData(prev => ({ ...prev, message: input }));
        setTerminalLines(prev => [...prev,
          { type: 'success', content: `✓ MESSAGE RECEIVED: "${input.substring(0, 50)}${input.length > 50 ? '...' : ''}"` },
          { type: 'divider', content: '─'.repeat(60) },
          { type: 'info', content: '> PREPARING TRANSMISSION...' }
        ]);
        
        setCurrentStep('complete');
        setIsTransmitting(true);
        
        // Transmission sequence
        await new Promise(resolve => setTimeout(resolve, 800));
        setTerminalLines(prev => [...prev, { type: 'loading', content: '> ENCRYPTING MESSAGE... [AES-256]' }]);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTerminalLines(prev => [...prev, { type: 'loading', content: '> ESTABLISHING SECURE TUNNEL... [RSA-4096]' }]);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTerminalLines(prev => [...prev, { type: 'loading', content: '> TRANSMITTING DATA PACKETS... [0x7FA2B3C4]' }]);
        
        await new Promise(resolve => setTimeout(resolve, 1200));
        setTerminalLines(prev => [...prev, 
          { type: 'success', content: '✓ TRANSMISSION SUCCESSFUL' },
          { type: 'success', content: '✓ MESSAGE DELIVERED TO: akshay@cyber-sec.node' },
          { type: 'divider', content: '─'.repeat(60) },
          { type: 'info', content: '> AWAITING RESPONSE FROM RECIPIENT...' },
          { type: 'info', content: `> SESSION ID: ${Date.now().toString(16).toUpperCase()}` }
        ]);
        
        setIsTransmitting(false);
        // Hide security compromised message after transmission
        setShowSecurityCompromised(false);
        
        // Reset after 5 seconds
        setTimeout(() => {
          setTerminalLines([
            { type: 'system', content: '> SESSION TERMINATED' },
            { type: 'system', content: '> STARTING NEW SESSION...' },
            { type: 'divider', content: '─'.repeat(60) },
            { type: 'typing', content: '' }
          ]);
          
          typeText('root@secure-terminal:~$ ENTER_NAME');
          setFormData({ name: '', email: '', message: '' });
          setCurrentStep('name');
        }, 5000);
      }
      
      // Scroll after processing and refocus
      scrollToBottom();
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  // Update current time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
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
              Level 3: Contact
            </Link>
            <div className={`hidden md:flex items-center gap-2 transition-all duration-300 ${
              isScrolled 
                ? 'gap-2' 
                : 'gap-3'
            }`}>
              <Link href="/" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Home
              </Link>
              <Link href="/level1" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 1
              </Link>
              <Link href="/level2" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 2
              </Link>
              <Link href="/level3" className={`text-cyan-400 bg-cyan-400/20 border border-cyan-400/30 hover:bg-cyan-400/30 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>
                Level 3
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
              <Link 
                href="/level3" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-cyan-400 bg-cyan-400/20 border border-cyan-400/30 transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl"
              >
                Level 3
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pb-24 pt-32">
        <div className="container mx-auto px-8">
          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto min-h-screen">
            
            {/* Left Column - Fixed Profile Card (Centered Vertically) */}
            <div className="lg:w-1/3 lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-[calc((100vw-80rem)/2+2rem)] xl:left-[calc((100vw-80rem)/2+2rem)]">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <ProfileCard
                  name="Akshay Kumar B"
                  title="Cybersecurity Enthusiast"
                  handle="akshaykumar"
                  status="Available"
                  contactText="Secure Contact"
                  avatarUrl="/my-photo.png"
                  miniAvatarUrl="/my-photo.png"
                  iconUrl="/holographic-pattern.svg"
                  grainUrl="/noise-texture.svg"
                  behindGradient={undefined}
                  innerGradient={undefined}
                  showBehindGradient={true}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    console.log('Secure contact initiated');
                    document.getElementById('terminal-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </div>
            </div>

            {/* Right Column - Scrollable Content */}
            <div className="lg:w-2/3 lg:ml-[calc(33.333333%+7rem)] space-y-16">
              
          {/* Terminal Header */}
          <div className="mb-8" id="terminal-form">
            <div className="text-center space-y-4 animate-fadeInUp">
              <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
                  INITIATE SECURE CONNECTION
                </span>
              </h1>
              {/* Location and Scan Time - Outside Terminal */}
              <div className="text-left max-w-3xl mx-auto font-mono text-sm space-y-1 pt-4">
                <div className="text-cyan-400">
                  Location: {userLocation}
                </div>
                <div className="text-green-400">
                  Starting scan at {currentTime.toDateString()} {currentTime.toLocaleTimeString('en-US', { hour12: false })}
                </div>
              </div>
            </div>
            {/* Security Compromised Message - Outside Terminal (Reserved Space) */}
            <div className="text-left max-w-3xl mx-auto font-mono text-sm mt-2 min-h-[24px]">
              {showSecurityCompromised && (
                <div className="text-red-500 font-bold animate-pulse animate-fadeIn">
                  System Security: COMPROMISED
                </div>
              )}
            </div>
          </div>

          {/* Terminal Form */}
          <div className="mb-16">
            <div className="bg-black/60 backdrop-blur-md border-2 border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/10">
              {/* Terminal Header Bar */}
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-b border-cyan-500/30 px-6 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-cyan-400 text-sm font-mono">terminal@akshay-secure-node</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-xs font-mono">ENCRYPTED</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div ref={terminalContainerRef} className="p-8 font-mono min-h-[400px] max-h-[600px] overflow-y-auto">
                {/* Terminal History */}
                <div className="space-y-1">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="animate-fadeInUp">
                      {line.type === 'system' && (
                        <div className="text-gray-400 text-sm">{line.content}</div>
                      )}
                      {line.type === 'info' && (
                        <div className="text-cyan-400 text-sm">{line.content}</div>
                      )}
                      {line.type === 'divider' && (
                        <div className="text-cyan-600/30 text-sm">{line.content}</div>
                      )}
                      {line.type === 'typing' && (
                        <div className="text-green-400 text-sm pt-3">
                          {line.content}<span className="animate-blink">_</span>
                        </div>
                      )}
                      {line.type === 'prompt' && (
                        <div className="flex items-center gap-2 pl-4">
                          <span className="text-cyan-400">&gt;&gt;</span>
                          <span className="text-white">{line.content}</span>
                        </div>
                      )}
                      {line.type === 'success' && (
                        <div className="text-green-400 text-sm flex items-center gap-2 pl-4">
                          <span>✓</span>
                          <span>{line.content}</span>
                        </div>
                      )}
                      {line.type === 'error' && (
                        <div className="text-red-400 text-sm flex items-center gap-2 pl-4">
                          <span>✗</span>
                          <span>{line.content}</span>
                        </div>
                      )}
                      {line.type === 'loading' && (
                        <div className="text-cyan-400 text-sm flex items-center gap-2 pl-4">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                          <span>{line.content}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Active Input Line */}
                {currentStep !== 'complete' && !isTransmitting && (
                  <div className="flex items-center gap-2 pl-4 pt-2">
                    <span className="text-cyan-400">&gt;&gt;</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder=""
                      className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-400/20 font-mono caret-green-400"
                      autoComplete="off"
                      autoFocus
                    />
                  </div>
                )}

                {/* Auto-scroll anchor */}
                <div ref={terminalEndRef}></div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white tracking-tight" style={{ letterSpacing: '-1px' }}>
                Let's Connect
              </h2>
            </div>
            
            <div className="social-container">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akshaykumarb17/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link linkedin"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ak-shay-n"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link github"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:personalakshay17@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link email"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link twitter"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          <style jsx>{`
            .social-container {
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              gap: 24px;
              flex-wrap: wrap;
            }

            .social-link {
              position: relative;
              width: 56px;
              height: 56px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              background: #e8e8e8;
              transition: all 0.3s ease;
              cursor: pointer;
            }

            .social-link:hover {
              transform: scale(1.1);
            }

            .social-link svg {
              width: 24px;
              height: 24px;
              fill: #8c8c8c;
              transition: fill 0.3s ease;
            }

            .linkedin:hover {
              background: #0077b5;
            }

            .github:hover {
              background: #333;
            }

            .email:hover {
              background: #ea4335;
            }

            .twitter:hover {
              background: #000;
            }

            .social-link:hover svg {
              fill: white;
            }

            @media (max-width: 600px) {
              .social-link {
                width: 48px;
                height: 48px;
              }

              .social-link svg {
                width: 20px;
                height: 20px;
              }
            }
          `}</style>

            </div>
            {/* End Right Column */}
          </div>
          {/* End Two Column Layout */}
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/20 bg-black/50 relative z-10">
        <div className="container mx-auto px-6 text-center font-mono">
          <p className="text-cyan-400/70 text-sm mb-2">
            <span className="text-green-400">&gt;</span> LEVEL 3: SECURE TERMINAL - ENCRYPTED CHANNEL ACTIVE
          </p>
          <p className="text-green-400 text-xs">
            Security Level: <span className="font-bold">MAXIMUM</span> | Communication Status: <span className="font-bold">SECURED</span>
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs">All systems operational</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

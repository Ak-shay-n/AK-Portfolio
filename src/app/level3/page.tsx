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
  const [currentInput, setCurrentInput] = useState('');
  const [terminalLines, setTerminalLines] = useState<Array<{type: string, content: string}>>([]);
  const [currentStep, setCurrentStep] = useState<'name' | 'email' | 'message' | 'complete'>('name');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  
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
        setTerminalLines([
          { type: 'system', content: '> SECURE TERMINAL v2.4.1 INITIALIZED' },
          { type: 'system', content: '> ENCRYPTION: AES-256 | STATUS: ACTIVE' },
          { type: 'system', content: '> CONNECTION TO NODE: akshay@cyber-sec.node' },
          { type: 'divider', content: '─'.repeat(60) },
          { type: 'info', content: '> Initiating secure message protocol...' },
          { type: 'info', content: '> Please provide the following credentials:' },
          { type: 'divider', content: '' },
          { type: 'typing', content: '' }
        ]);
        
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
          <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto min-h-screen">
            
            {/* Left Column - Fixed Profile Card (Centered Vertically) */}
            <div className="lg:w-1/3 lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-[calc((100vw-80rem)/2+2rem)] xl:left-[calc((100vw-80rem)/2+2rem)]">
              <div className="w-full max-w-md mx-auto lg:mx-0">
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
                    document.getElementById('terminal-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                />
              </div>
            </div>

            {/* Right Column - Scrollable Content */}
            <div className="lg:w-2/3 lg:ml-[calc(33.333333%+2rem)] space-y-16">
              
          {/* Terminal Header */}
          <div className="mb-8" id="terminal-form">
            <div className="text-center space-y-4 animate-fadeInUp">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-xs font-mono uppercase tracking-widest">System Status: ONLINE</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-mono tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400">
                  INITIATE SECURE CONNECTION
                </span>
              </h1>
              <p className="text-white/60 text-lg font-mono max-w-2xl mx-auto">
                <span className="text-green-400">&gt;</span> You've reached Akshay's encrypted node.<br />
                <span className="text-green-400">&gt;</span> Enter your credentials to send a message.
              </p>
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
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-cyan-400 font-mono uppercase tracking-wider mb-2">
                  <span className="text-green-400">&gt;</span> Connect via other nodes:
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-black/50 border border-cyan-500/20 hover:border-cyan-400/50 rounded-xl p-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-center space-y-2">
                      <div className="flex justify-center group-hover:scale-110 transition-transform duration-300">
                        <img src={link.icon} alt={link.name} className="w-8 h-8" />
                      </div>
                      <div className={`text-sm font-mono font-bold ${link.color} group-hover:text-white transition-colors duration-300`}>
                        {link.name}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* System Status Footer */}
          <div className="mb-16">
            <div className="bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 font-mono text-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
                <div>
                  <span className="text-cyan-400/60 uppercase tracking-wider block mb-1">&gt; System status:</span>
                  <span className="text-green-400 font-bold flex items-center justify-center md:justify-start gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    ONLINE
                  </span>
                </div>
                <div>
                  <span className="text-cyan-400/60 uppercase tracking-wider block mb-1">&gt; Encryption protocol:</span>
                  <span className="text-cyan-400 font-bold">AES-256</span>
                </div>
                <div>
                  <span className="text-cyan-400/60 uppercase tracking-wider block mb-1">&gt; Last ping:</span>
                  <span className="text-cyan-400 font-bold">{currentTime.toLocaleTimeString()}</span>
                </div>
              </div>
            </div>
          </div>

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

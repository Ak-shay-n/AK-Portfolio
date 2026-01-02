"use client"

import { useState, useEffect, useRef } from 'react';
import LightRays from '@/components/LightRays';
import ProfileCard from '../../components/ProfileCard';
import Header from '@/components/Header';

export default function Level3() {
  const [isClient, setIsClient] = useState(false);
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
  
  const inputRef = useRef<HTMLTextAreaElement>(null);
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
  const handleKeyPress = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey && currentInput.trim()) {
      e.preventDefault();
      
      // Reset textarea height
      if (inputRef.current) {
        inputRef.current.style.height = 'auto';
      }
      
      // Add user input to terminal
      setTerminalLines(prev => [
        ...prev.slice(0, -1),
        { type: 'prompt', content: currentInput }
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
          { type: 'divider', content: '─'.repeat(60) }
        ]);
        
        setCurrentStep('complete');
        setIsTransmitting(true);
        
        // Single transmission message
        await new Promise(resolve => setTimeout(resolve, 1000));
        setTerminalLines(prev => [...prev, 
          { type: 'loading', content: '> INITIATING SECURE TRANSMISSION PROTOCOL [0x7FA2B3C4]...' }
        ]);
        
        await new Promise(resolve => setTimeout(resolve, 2000));
        setTerminalLines(prev => [...prev, 
          { type: 'success', content: '✓ PAYLOAD DELIVERED TO: akshay@cyber-sec.node' }
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

      {/* Navigation Header */}
      <Header />

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
              <div ref={terminalContainerRef} className="p-8 font-mono min-h-[400px] max-h-[600px] overflow-y-auto transition-all duration-300 ease-in-out scroll-smooth">
                {/* Terminal History */}
                <div className="space-y-1 transition-all duration-300 ease-in-out">
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
                        <div className="flex items-start gap-2 pl-4 transition-all duration-300 ease-in-out">
                          <span className="text-cyan-400 mt-0.5">&gt;&gt;</span>
                          <span className="text-white whitespace-pre-wrap break-words flex-1">{line.content}</span>
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
                  <div className="flex items-start gap-2 pl-4 pt-2 transition-all duration-300 ease-in-out">
                    <span className="text-cyan-400 mt-0.5">&gt;&gt;</span>
                    <textarea
                      ref={inputRef}
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder=""
                      rows={1}
                      className="flex-1 bg-transparent border-none outline-none text-green-400 placeholder-green-400/20 font-mono caret-green-400 resize-none overflow-hidden transition-all duration-200 ease-in-out"
                      style={{
                        height: 'auto',
                        minHeight: '1.5rem',
                        maxHeight: '200px'
                      }}
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = 'auto';
                        target.style.height = target.scrollHeight + 'px';
                      }}
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
                I'm Here!
              </h2>
            </div>
            
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akshaykumarb17/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ak-shay-n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:personalakshay17@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/Akshay1726n"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-6.5 h-6.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
            
            {/* Thanks for visiting message */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-white/23"></div>
              <p className="text-white/60 text-lg font-light whitespace-nowrap tracking-tight">Thanks for visiting!</p>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-white/23"></div>
            </div>
          </div>

            </div>
            {/* End Right Column */}
          </div>
          {/* End Two Column Layout */}
        </div>
      </main>
    </div>
  );
}

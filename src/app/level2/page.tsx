"use client"

import React from "react";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';
import Header from '@/components/Header';

export default function Level2() {
  const [activeProject, setActiveProject] = useState('security');
  const [isClient, setIsClient] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  // Secret / access control for the Evervault flow
  const [secretInput, setSecretInput] = useState('');
  // showEvervault removed - vault door now reflects showProjects
  const [showProjects, setShowProjects] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  // Password masking - standard behavior (show last char briefly)
  const [displayPassword, setDisplayPassword] = useState('');
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [announce, setAnnounce] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [sessionStartTime, setSessionStartTime] = useState<number | null>(null);
  const sessionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  // Session timeout (4 minutes = 240000ms)
  const SESSION_TIMEOUT = 4 * 60 * 1000;

  // AES-256 Encryption Configuration
  // The correct password is 'cyber'
  // We'll hash it with salt and verify
  const CORRECT_PASSWORD = 'cyber';
  const SALT = 'akshay-portfolio-2024-secure-salt'; // Salt for additional security

  // AES-256 Password Verification using Web Crypto API
  async function verifyPassword(inputPassword: string): Promise<boolean> {
    try {
      // Convert input password to ArrayBuffer
      const encoder = new TextEncoder();
      const inputData = encoder.encode(inputPassword + SALT);
      const correctData = encoder.encode(CORRECT_PASSWORD + SALT);
      
      // Generate SHA-256 hash for both
      const inputHashBuffer = await crypto.subtle.digest('SHA-256', inputData);
      const correctHashBuffer = await crypto.subtle.digest('SHA-256', correctData);
      
      // Convert hashes to hex strings
      const inputHashArray = Array.from(new Uint8Array(inputHashBuffer));
      const inputHashHex = inputHashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      const correctHashArray = Array.from(new Uint8Array(correctHashBuffer));
      const correctHashHex = correctHashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      // Compare hashes
      return inputHashHex === correctHashHex;
    } catch (error) {
      console.error('Password verification failed:', error);
      return false;
    }
  }

  // Handle password input - standard behavior (show last character briefly for 500ms)
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const oldValue = secretInput;
    
    // Clear any existing hide timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    
    setSecretInput(newValue);
    setAccessDenied(false);
    
    if (newValue.length === 0) {
      // Empty password
      setDisplayPassword('');
    } else if (newValue.length > oldValue.length) {
      // Character added - show last character, hide rest
      const maskedPart = '*'.repeat(newValue.length - 1);
      const lastChar = newValue[newValue.length - 1];
      setDisplayPassword(maskedPart + lastChar);
      
      // Hide last character after 500ms (standard practice)
      hideTimerRef.current = setTimeout(() => {
        setDisplayPassword('*'.repeat(newValue.length));
      }, 500);
    } else {
      // Character removed - show all as asterisks
      setDisplayPassword('*'.repeat(newValue.length));
    }
  };

  // Handler for the "wanna find what?" action
  async function handleFind() {
    // Trigger vault check (visuals handled by project state)
    setAccessDenied(false);

    // Check secret after a short delay to allow the card animation
    setTimeout(async () => {
      const isValid = await verifyPassword(secretInput.trim());
      
      if (isValid) {
        setIsLoading(true);
        setLoadingProgress(0);
        
        // Simulate loading progress over 3 seconds
        const interval = setInterval(() => {
          setLoadingProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setTimeout(() => {
                setShowProjects(true);
                setIsLoading(false);
                // Start session timer when projects are shown
                setSessionStartTime(Date.now());
              }, 500); // Small delay before showing projects
              return 100;
            }
            return prev + 1; // Increment by 1% each time (100 steps to reach 100)
          });
        }, 30); // Update every 30ms (total 3 seconds: 100 steps × 30ms = 3000ms)
        
        setAccessDenied(false);
        setFailedAttempts(0);
        setAnnounce('✓ AES-256 Authentication Successful. Access granted.');
      } else {
        setShowProjects(false);
        setAccessDenied(true);
        setFailedAttempts((n) => n + 1);
        setAnnounce('✗ AES-256 Authentication Failed. Access denied.');
      }
    }, 350);
  }

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
    // Mouse tracking: only update CSS variables on the content container
    const handleMouseMove = (e: MouseEvent) => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        contentRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        contentRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Session timeout - lock after 4 minutes of inactivity
  useEffect(() => {
    if (sessionStartTime && showProjects) {
      // Clear any existing timer
      if (sessionTimerRef.current) {
        clearTimeout(sessionTimerRef.current);
      }

      // Set new timer
      sessionTimerRef.current = setTimeout(() => {
        // Lock the page after 4 minutes
        setShowProjects(false);
        setSessionStartTime(null);
        setSecretInput('');
        setDisplayPassword('');
        // Clear hide timer if exists
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
        setAccessDenied(true);
        setAnnounce('Session expired. Please re-authenticate.');
      }, SESSION_TIMEOUT);

      // Cleanup on unmount or when dependencies change
      return () => {
        if (sessionTimerRef.current) {
          clearTimeout(sessionTimerRef.current);
        }
      };
    }
  }, [sessionStartTime, showProjects]);

  // Cleanup hide timer on unmount
  useEffect(() => {
    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
      }
    };
  }, []);



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

      {/* Navigation Header */}
      <Header />

      {/* Hero Section with Cyber Vault */}
      <section className={`${showProjects ? 'pt-24 pb-0' : 'min-h-screen pt-32 pb-24'} flex items-center justify-center relative z-10`}>
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Cyber Vault Header */}
            {!showProjects && (
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  PROJECT VAULT
                </span>
              </h1>
            </div>
            )}

            {/* Minimal Vault Interface - Hide on successful auth */}
            {!showProjects && !isLoading && (
            <div className="max-w-2xl mx-auto mb-16 relative">
              {/* Vault Container */}
              <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
                {/* Top Bar - Warning Header */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-cyan-500/20 bg-black/30">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-red-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-sm font-mono text-red-500 animate-pulse font-bold uppercase tracking-wider">Access Restricted</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {!showProjects && (
                      <>
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                        <span className="text-xs font-mono text-cyan-400/60">awaiting auth</span>
                      </>
                    )}
                    {showProjects && (
                      <span className="text-xs font-mono text-green-400">authenticated</span>
                    )}
                  </div>
                </div>

                {/* Main Content */}
                <div className="p-8">
                  {/* Authentication Input */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="secret-input" className="block text-xs font-mono text-cyan-400/70 mb-2 uppercase tracking-wider">
                        Access Code
                      </label>
                      <div className="relative">
                        {/* Hidden input to capture real password */}
                        <input
                          type="password"
                          value={secretInput}
                          onChange={handlePasswordChange}
                          onKeyDown={(e) => { if (e.key === 'Enter') handleFind(); }}
                          className="absolute inset-0 opacity-0 w-full h-full z-10 cursor-text"
                          autoComplete="off"
                          ref={inputRef}
                        />
                        {/* Visible display input (shows masked password) */}
                        <input
                          id="secret-input"
                          type="text"
                          value={displayPassword}
                          readOnly
                          placeholder="Enter code..."
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-400 placeholder-cyan-400/20 focus:outline-none focus:border-cyan-400/60 focus:bg-black/70 transition-all duration-300 font-mono text-sm pointer-events-none"
                          aria-label="Secret key"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                          {secretInput && (
                            <svg className="w-4 h-4 text-cyan-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Status Indicator Box */}
                    <div className="bg-black/50 border border-cyan-500/20 rounded-lg px-4 py-3 min-h-[3rem] flex items-center overflow-hidden">
                      {accessDenied ? (
                        <div className="flex items-center gap-2 w-full animate-fadeInLeft">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0 animate-pulse-fast" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 animate-pulse-fast">
                              <span className="text-red-500 text-xs font-mono">[ERROR]</span>
                              <span className="text-red-400 text-xs font-mono typing-animation">ACCESS_DENIED: Invalid credentials</span>
                            </div>
                          </div>
                        </div>
                      ) : secretInput ? (
                        <div className="flex items-center gap-2 w-full animate-fadeInLeft">
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-500 text-xs font-mono">[INFO]</span>
                              <span className="text-cyan-400 text-xs font-mono typing-animation">Analyzing secret code </span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 w-full animate-fadeInLeft">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/30 flex-shrink-0 animate-pulse"></div>
                          <div className="flex-1">
                            <span className="text-cyan-400/50 text-xs font-mono">
                              <span className="text-cyan-400/30">&gt;</span> Awaiting authentication
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button
                      onClick={() => handleFind()}
                      className="group w-full py-3 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/60 text-cyan-400 rounded-lg font-mono text-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                      Authenticate
                    </button>

                    {/* Footer Helper */}
                    <div className="flex items-center justify-between pt-2">
                      <button
                        onClick={() => {
                          setSecretInput('');
                          setDisplayPassword('');
                          // Clear hide timer if exists
                          if (hideTimerRef.current) {
                            clearTimeout(hideTimerRef.current);
                            hideTimerRef.current = null;
                          }
                          inputRef.current?.focus();
                        }}
                        className="text-xs text-cyan-400/50 hover:text-cyan-400/80 transition-colors duration-300 font-mono"
                      >
                        Clear
                      </button>
                      <span className="text-xs text-cyan-400/30 font-mono">Press Enter ↵</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )}

            {/* Loading Animation */}
            {isLoading && (
              <div className="max-w-md mx-auto mb-16 animate-fadeInUp">
                <div className="relative bg-black/40 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-12">
                  
                  {/* Minimal Spinning Lock Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="relative w-20 h-20">
                      {/* Rotating ring */}
                      <div className="absolute inset-0">
                        <svg className="w-full h-full animate-spin" style={{ animationDuration: '3s' }} viewBox="0 0 100 100">
                          <circle 
                            cx="50" 
                            cy="50" 
                            r="45" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeDasharray="220" 
                            strokeDashoffset={220 - (220 * loadingProgress) / 100}
                            strokeLinecap="round"
                            className="text-cyan-400 transition-all duration-100"
                            style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                          />
                        </svg>
                      </div>
                      
                      {/* Glow effect */}
                      <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
                      
                      {/* Lock icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Clean Text */}
                  <div className="text-center space-y-2 mb-6">
                    <h3 className="text-xl font-bold text-cyan-400 font-mono">Decrypting</h3>
                    <p className="text-cyan-400/60 text-xs font-mono">
                      {loadingProgress < 33 && 'Authenticating...'}
                      {loadingProgress >= 33 && loadingProgress < 66 && 'Decrypting data...'}
                      {loadingProgress >= 66 && loadingProgress < 95 && 'Loading files...'}
                      {loadingProgress >= 95 && 'Complete!'}
                    </p>
                  </div>

                  {/* Minimal Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-cyan-400/60">Progress</span>
                      <span className="text-cyan-400 font-bold">{loadingProgress}%</span>
                    </div>
                    <div className="h-1.5 bg-black/50 rounded-full overflow-hidden border border-cyan-500/20">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-100 ease-out relative"
                        style={{ width: `${loadingProgress}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </div>

                  {/* Minimal Loading Dots */}
                  <div className="flex justify-center gap-1.5 mt-6">
                    {[0, 1, 2].map((i) => (
                      <div 
                        key={i}
                        className="w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-pulse"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ARIA live region for announcements */}
            <div className="sr-only" role="status" aria-live="polite">{announce}</div>

            {/* Vault visual removed. Vault state now represented by Access Granted banner and project cards. */}

          </div>
        </div>
      </section>

      {/* Project Categories Section (shown only after correct secret) */}
      {showProjects ? (
        <section className="py-20 relative z-10">
          <div className="container mx-auto px-6 max-w-7xl">
            
            {/* Modern Header */}
            <div className="text-center mb-16" ref={projectsRef} tabIndex={-1}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Project Portfolio
              </h2>
            </div>

            {/* Category Pills Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex gap-2 p-2 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                {Object.entries(projectCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => setActiveProject(key)}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${
                      activeProject === key
                        ? 'bg-white text-black shadow-lg'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center gap-2 text-sm">
                      <span>{category.icon}</span>
                      <span className="hidden sm:inline font-medium">{category.title}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid - Clean Modern Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectCategories[activeProject as keyof typeof projectCategories].projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group aspect-square"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: showProjects ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 w-full h-full flex flex-col hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] overflow-hidden">
                    
                    {/* Main Content - Default View */}
                    <div className={`transition-opacity duration-500 ${expandedProject === `${activeProject}-${index}` ? 'opacity-0 pointer-events-none' : 'opacity-100'} flex flex-col h-full`}>
                      {/* Status Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Production' || project.status === 'Live' 
                            ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                          project.status === 'Beta' || project.status === 'Development'
                            ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                            'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        }`}>
                          <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></div>
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Project Name */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {project.name}
                      </h3>
                      
                      {/* Short Description */}
                      <p className="text-white/60 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                        {project.description}
                      </p>
                      
                      {/* Tech Stack */}
                      <div className="mb-5">
                        <div className="text-xs text-white/40 mb-2 uppercase tracking-wider font-medium">Tech Stack</div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 4).map(tech => (
                            <span 
                              key={tech} 
                              className="px-2.5 py-1 bg-white/5 text-white/70 rounded-md text-xs font-medium border border-white/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 4 && (
                            <span className="px-2.5 py-1 bg-white/5 text-white/50 rounded-md text-xs font-medium border border-white/10">
                              +{project.tech.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      {/* View Button */}
                      <button 
                        onClick={() => setExpandedProject(`${activeProject}-${index}`)}
                        className="w-full py-3 bg-white/5 hover:bg-white text-white/80 hover:text-black border border-white/10 hover:border-white rounded-xl font-medium transition-all duration-300 group/btn cursor-pointer"
                      >
                        <span className="flex items-center justify-center gap-2 text-sm">
                          View Project
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Expanded Content - Detailed View */}
                    <div className={`absolute inset-0 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-md transition-opacity duration-500 ${expandedProject === `${activeProject}-${index}` ? 'opacity-100' : 'opacity-0 pointer-events-none'} flex flex-col`}>
                      {/* Close Button */}
                      <button 
                        onClick={() => setExpandedProject(null)}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 group/close z-10 cursor-pointer"
                      >
                        <svg className="w-5 h-5 text-white group-hover/close:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      {/* Concise Bullet Points */}
                      <div className="flex-grow flex items-center justify-center">
                        <ul className="space-y-3 text-white/90">
                          {project.description.split('.').filter(point => point.trim()).map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span className="text-sm leading-relaxed">{point.trim()}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <button className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-400 text-black rounded-xl font-medium transition-all duration-300 text-sm cursor-pointer">
                          View Live
                        </button>
                        <button className="flex-1 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-medium transition-all duration-300 text-sm cursor-pointer">
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation to Next Level */}
            <div className="mt-20 text-center">
              <div className="inline-block mb-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2">
                  <span className="text-white/50 text-sm font-medium">Ready for the next level?</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/level3" className="group">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                    <span className="flex items-center gap-2">
                      Level 3: Contact
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
                
                <Link href="/" className="group">
                  <div className="bg-white/5 border border-white/20 hover:border-white/40 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Home
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : null}

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

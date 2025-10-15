"use client"

import React from "react";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LightRays from '@/components/LightRays';

export default function Level2() {
  const [activeProject, setActiveProject] = useState('security');
  const [isClient, setIsClient] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  // Secret / access control for the Evervault flow
  const [secretInput, setSecretInput] = useState('');
  // showEvervault removed - vault door now reflects showProjects
  const [showProjects, setShowProjects] = useState(false);
  const [accessDenied, setAccessDenied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const [announce, setAnnounce] = useState('');

  // Handler for the "wanna find what?" action
  function handleFind() {
    // Trigger vault check (visuals handled by project state)
    setAccessDenied(false);

    // Check secret after a short delay to allow the card animation
    setTimeout(() => {
      if (secretInput.trim().toLowerCase() === 'cyber') {
        setShowProjects(true);
        setAccessDenied(false);
        setFailedAttempts(0);
        setAnnounce('Access granted. Projects unlocked.');

        // focus the project container after a short delay so keyboard users land there
        setTimeout(() => {
          projectsRef.current?.focus();
        }, 250);
      } else {
        setShowProjects(false);
        setAccessDenied(true);
        setFailedAttempts((n) => n + 1);
        setAnnounce('Access denied. Incorrect secret.');
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

      {/* Hero Section with Cyber Vault */}
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-32 pb-24">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto">
            
            {/* Cyber Vault Header */}
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center gap-3 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-xs font-mono tracking-wider uppercase">Level 2: Secure Project Vault</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  PROJECT VAULT
                </span>
              </h1>
              <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed font-mono">
                <span className="text-green-400">&gt;</span> Biometric authentication required
              </p>
            </div>

            {/* Minimal Vault Interface */}
            <div className="max-w-2xl mx-auto mb-16 relative">
              {/* Vault Container */}
              <div className="relative bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
                {/* Top Bar - Inbox Style */}
                <div className="flex items-center justify-between px-6 py-3 border-b border-cyan-500/20 bg-black/30">
                  <div className="flex items-center gap-3">
                    <svg className={`w-5 h-5 transition-colors duration-500 ${showProjects ? 'text-green-400' : 'text-cyan-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {showProjects ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      )}
                    </svg>
                    <span className="text-sm font-mono text-cyan-400/80">Project Vault</span>
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
                        <input
                          id="secret-input"
                          ref={inputRef}
                          value={secretInput}
                          onChange={(e) => { setSecretInput(e.target.value); setAccessDenied(false); }}
                          onKeyDown={(e) => { if (e.key === 'Enter') handleFind(); }}
                          placeholder="Enter code..."
                          className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-lg text-cyan-400 placeholder-cyan-400/20 focus:outline-none focus:border-cyan-400/60 focus:bg-black/70 transition-all duration-300 font-mono text-sm"
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
                    <div className="bg-black/50 border border-cyan-500/20 rounded-lg px-4 py-3 min-h-[3rem] flex items-center">
                      {accessDenied ? (
                        <div className="flex items-center gap-2 w-full">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-red-500 text-xs font-mono">[ERROR]</span>
                              <span className="text-red-400 text-xs font-mono">ACCESS_DENIED: Invalid credentials</span>
                            </div>
                          </div>
                        </div>
                      ) : secretInput ? (
                        <div className="flex items-center gap-2 w-full">
                          <div className="flex items-center gap-1.5 flex-shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-cyan-500 text-xs font-mono">[INFO]</span>
                              <span className="text-cyan-400 text-xs font-mono">Verifying access code...</span>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 w-full">
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

            {/* ARIA live region for announcements */}
            <div className="sr-only" role="status" aria-live="polite">{announce}</div>

            {/* Vault visual removed. Vault state now represented by Access Granted banner and project cards. */}

            {/* Security Hint Panel */}
            {!showProjects && failedAttempts >= 3 && (
              <div className="mt-12 text-center">
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-yellow-500/20 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-2xl px-8 py-4">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6 text-yellow-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="text-left">
                        <p className="text-yellow-300 text-sm font-bold font-mono uppercase tracking-wide">Security Hint Unlocked</p>
                        <p className="text-yellow-400/80 text-xs font-mono mt-1">Try: "cyber" (case-insensitive)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Categories Section (shown only after correct secret) */}
      {showProjects ? (
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-8">
            {/* Vault Unlocked Header */}
            <div className="text-center mb-16" ref={projectsRef} tabIndex={-1} aria-label="Unlocked projects">
              <div className="inline-block mb-6 relative">
                <div className="absolute inset-0 bg-green-500/20 blur-2xl animate-pulse"></div>
                <div className="relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border-2 border-green-400/40 rounded-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div className="absolute inset-0 bg-green-400/30 rounded-full blur-md animate-pulse"></div>
                    </div>
                    <div className="text-left">
                      <div className="text-green-400 text-xs font-mono uppercase tracking-widest">Vault Status</div>
                      <div className="text-green-300 text-lg font-bold font-mono">ACCESS GRANTED</div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent font-mono">
                  VAULT CONTENTS
                </span>
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto font-mono">
                <span className="text-cyan-400">&gt;</span> Displaying classified projects database
              </p>
            </div>

          {/* Category Navigation - Vault Sections */}
          <div className="flex justify-center mb-16">
            <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-4 border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
              {/* Scanner Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50"></div>
              
              <div className="flex flex-wrap justify-center gap-3">
              {Object.entries(projectCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveProject(key)}
                  className={`relative px-6 py-4 rounded-2xl font-bold transition-all duration-300 border-2 overflow-hidden group ${
                    activeProject === key
                      ? `${category.bgColor} ${category.color} ${category.borderColor} shadow-lg scale-105`
                      : 'text-white/70 hover:text-white hover:bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  {activeProject === key && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2 font-mono text-sm uppercase tracking-wide">
                    <span className="text-xl">{category.icon}</span>
                    <span className="hidden sm:inline">{category.title}</span>
                  </span>
                </button>
              ))}
              </div>
            </div>
          </div>

          {/* Project Grid - Vault Files */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectCategories[activeProject as keyof typeof projectCategories].projects.map((project, index) => (
                <div 
                  key={index} 
                  className="group transform transition-all duration-500 hover:scale-[1.03]"
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: showProjects ? 'fadeInUp 0.6s ease-out forwards' : 'none'
                  }}
                >
                  <div className="relative bg-gradient-to-br from-black/80 via-gray-900/70 to-black/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-cyan-500/20 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 h-full overflow-hidden">
                    {/* Data Stream Effect */}
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-cyan-400/0 via-cyan-400/50 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Corner Brackets */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-cyan-400/70 text-xs font-mono uppercase tracking-wider">File #{index + 1}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-cyan-400 transition-colors duration-300 font-mono">
                            {project.name}
                          </h3>
                          <div className="flex items-center space-x-3 mb-4">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold border-2 font-mono uppercase tracking-wide ${
                              project.status === 'Production' || project.status === 'Live' 
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/20' :
                              project.status === 'Beta' || project.status === 'Development'
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-lg shadow-amber-500/20' :
                                'bg-purple-500/20 text-purple-300 border-purple-500/50 shadow-lg shadow-purple-500/20'
                            }`}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-white/70 mb-6 leading-relaxed text-base">
                        {project.description}
                      </p>
                      
                      <div className="mb-8">
                        <div className="flex items-center gap-2 mb-3">
                          <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                          <div className="text-xs text-cyan-400/70 font-mono uppercase tracking-wider">Tech Stack</div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map(tech => (
                            <span key={tech} className="px-3 py-1.5 bg-black/40 text-green-400 rounded-lg text-xs border border-green-500/30 font-mono hover:border-green-400 hover:bg-green-500/10 transition-all duration-300">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-2 border-cyan-500/30 rounded-xl font-bold hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-black hover:border-cyan-400 transition-all duration-300 group/btn">
                        <span className="flex items-center justify-center gap-2 font-mono text-sm uppercase tracking-wider">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          Access File
                          <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation to Next Level */}
          <div className="mt-24 text-center">
            <div className="inline-block mb-8">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
                <span className="text-white/60 text-sm font-light tracking-wider uppercase">Ready for the next challenge?</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/level3" className="group relative overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl hover:shadow-cyan-400/40 transition-all duration-300 transform hover:scale-105">
                  <span className="flex items-center gap-2">
                    Proceed to Level 3
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              
              <Link href="/" className="group relative">
                <div className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-bold hover:border-white hover:bg-white/10 transition-all duration-300">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Return Home
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

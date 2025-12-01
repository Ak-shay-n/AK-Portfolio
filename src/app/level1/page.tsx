"use client"

import { useState, useEffect, useRef } from 'react';
import LightRays from '@/components/LightRays';
import ScrollReveal from '@/components/ScrollReveal';
import Header from '@/components/Header';

export default function Level1() {
  console.log('🚀 Level1 component loaded!');
  
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
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

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-cyan-400 text-2xl font-mono">Initializing...</div>
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
            <pattern id="cyber-grid-level1" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00ff41" strokeWidth="0.5"/>
              <circle cx="30" cy="30" r="1" fill="#00ff41" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cyber-grid-level1)" />
        </svg>
      </div>

      {/* Navigation Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-8" ref={contentRef}>

          {/* Hero Section - Full Screen - PINNED DURING ANIMATION */}
          <section id="hero-section" className="min-h-screen flex flex-col items-center justify-center relative pb-47">
            <div className="max-w-5xl mx-auto text-center">
              <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                
                {/* Main Title */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none">
                  About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Akshay</span>
                </h1>
                
                {/* Divider Line */}
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400/60 to-blue-400/60 mx-auto mb-8"></div>
                
                {/* Description with ScrollReveal Animation */}
                <ScrollReveal
                  baseOpacity={0.1}
                  enableBlur={false}
                  baseRotation={0}
                  blurStrength={0}
                  pinContainer={true}
                  textClassName="text-3xl md:text-4xl lg:text-6xl xl:text-7xl leading-relaxed font-light max-w-5xl mx-auto"
                  containerClassName="calibri-font"
                >
                  Explore my professional journey, technical expertise, and current projects through this interactive profile system.
                </ScrollReveal>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-35 left-1/2 -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center gap-2">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                  <div className="w-1 h-3 bg-white/60 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section - Figma Design */}
          <section className="relative py-20 overflow-hidden">
            <div className="relative mx-auto px-4" style={{ maxWidth: '895px', minHeight: '754px' }}>
              
              {/* Title Section */}
              <div className="relative text-center mb-12" style={{ maxWidth: '663px', margin: '0 auto 80px' }}>
                <p className="text-[24px] leading-[31px] tracking-[0.48px] text-white mb-0 font-light">
                  Skills 
                </p>
              </div>

              {/* Skills Orbital System - From Figma */}
              <div className="relative w-full mx-auto" style={{ maxWidth: '895px', height: '657px' }}>
                
                {/* Connection Lines from Figma - Subtle and refined */}
                <div className="absolute pointer-events-none" style={{ left: '461.57px', top: '182.5px', width: '122.427px', height: '277.5px' }}>
                  <svg viewBox="0 0 122.427 277.5" className="w-full h-full opacity-25">
                    <path d="M0,277.5 Q61,200 61,138.75 T61,0" fill="none" stroke="#7c3aed" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '452.01px', top: '199.5px', width: '70.489px', height: '270px' }}>
                  <svg viewBox="0 0 70.489 270" className="w-full h-full opacity-25">
                    <path d="M0,270 Q35,200 35,135 T35,0" fill="none" stroke="#7c3aed" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '436.5px', top: '198px', width: '34.5px', height: '291.5px' }}>
                  <svg viewBox="0 0 34.5 291.5" className="w-full h-full opacity-25">
                    <line x1="17.25" y1="291.5" x2="17.25" y2="0" stroke="#7c3aed" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '303.5px', top: '192px', width: '117.949px', height: '300.5px', transform: 'scaleX(-1)' }}>
                  <svg viewBox="0 0 117.949 300.5" className="w-full h-full opacity-25">
                    <path d="M0,300.5 Q59,220 59,150.25 T59,0" fill="none" stroke="#7c3aed" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '365px', top: '192px', width: '66.11px', height: '310px', transform: 'scaleX(-1)' }}>
                  <svg viewBox="0 0 66.11 310" className="w-full h-full opacity-25">
                    <path d="M0,310 Q33,230 33,155 T33,0" fill="none" stroke="#7c3aed" strokeWidth="0.8" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '414px', top: '195px', width: '21px', height: '313px', transform: 'scaleX(-1)' }}>
                  <svg viewBox="0 0 21 313" className="w-full h-full opacity-25">
                    <line x1="10.5" y1="313" x2="10.5" y2="0" stroke="#7c3aed" strokeWidth="0.8" />
                  </svg>
                </div>

                {/* Background Glow - Larger and more diffused */}
                <div className="absolute pointer-events-none" style={{ left: '120px', top: '400px', width: '660px', height: '380px' }}>
                  <svg viewBox="0 0 660 380" className="w-full h-full opacity-25">
                    <defs>
                      <radialGradient id="bgGlow" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.9" />
                        <stop offset="40%" stopColor="#6d28d9" stopOpacity="0.5" />
                        <stop offset="70%" stopColor="#5b21b6" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="330" cy="190" rx="325" ry="185" fill="url(#bgGlow)" />
                  </svg>
                </div>

                {/* Elliptical Orbits - 3 Concentric - EXACT Figma match */}
                <div className="absolute pointer-events-none" style={{ left: '-100px', top: '430px', width: '1095px', height: '240px' }}>
                  <svg viewBox="0 0 1095 240" className="w-full h-full opacity-40">
                    <ellipse cx="547.5" cy="120" rx="545" ry="115" fill="none" stroke="#7c3aed" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '0px', top: '445px', width: '895px', height: '210px' }}>
                  <svg viewBox="0 0 895 210" className="w-full h-full opacity-40">
                    <ellipse cx="447.5" cy="105" rx="445" ry="100" fill="none" stroke="#7c3aed" strokeWidth="1.2" />
                  </svg>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '90px', top: '460px', width: '715px', height: '180px' }}>
                  <svg viewBox="0 0 715 180" className="w-full h-full opacity-40">
                    <ellipse cx="357.5" cy="90" rx="355" ry="85" fill="none" stroke="#7c3aed" strokeWidth="1.2" />
                  </svg>
                </div>

                {/* Central Glow System - Enhanced */}
                <div className="absolute pointer-events-none z-10" style={{ left: '250px', top: '370px', width: '390px', height: '320px' }}>
                  <svg viewBox="0 0 390 320" className="w-full h-full">
                    <defs>
                      <radialGradient id="centralGlow" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.8" />
                        <stop offset="30%" stopColor="#8b5cf6" stopOpacity="0.6" />
                        <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#5b21b6" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <ellipse cx="195" cy="160" rx="190" ry="155" fill="url(#centralGlow)" />
                  </svg>
                </div>
                
                {/* Central Purple Sphere with Sigma - Enhanced glow */}
                <div className="absolute z-20" style={{ left: '350px', top: '448px', width: '180px', height: '180px' }}>
                  <svg viewBox="0 0 180 180" className="w-full h-full">
                    <defs>
                      <radialGradient id="sphereGradient" cx="45%" cy="45%">
                        <stop offset="0%" stopColor="#c4b5fd" />
                        <stop offset="30%" stopColor="#a78bfa" />
                        <stop offset="70%" stopColor="#7c3aed" />
                        <stop offset="100%" stopColor="#5b21b6" />
                      </radialGradient>
                      <filter id="sphereGlow">
                        <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <circle cx="90" cy="90" r="85" fill="url(#sphereGradient)" filter="url(#sphereGlow)" opacity="0.95" />
                    <text x="90" y="115" fontSize="85" fontWeight="200" fill="#ffffff" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">Σ</text>
                  </svg>
                </div>

                {/* Skill Icon Circles - Scattered on orbital paths like Figma */}
                <div className="absolute z-30" style={{ width: '895px', height: '657px' }}>
                  {/* Left side icons on outer orbits */}
                  <div className="absolute group cursor-pointer" style={{ left: '130px', top: '390px' }}>
                    <div className="relative size-[44px]">
                      {/* Progress Ring */}
                      <svg className="absolute -inset-1 size-[52px] transform -rotate-90" viewBox="0 0 52 52">
                        <circle cx="26" cy="26" r="20" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="26" cy="26" r="20" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="125.6" strokeDashoffset="18.84"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      {/* Icon Container */}
                      <div className="size-[44px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.8)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="w-[24px] h-[24px]" />
                      </div>
                      {/* Progress Percentage */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-purple-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">85%</div>
                    </div>
                  </div>
                  {/* LinkedIn - Left outer orbit */}
                  <div className="absolute group cursor-pointer" style={{ left: '155px', top: '185px' }}>
                    <div className="relative size-[40px]">
                      <svg className="absolute -inset-1 size-[48px] transform -rotate-90" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="18" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="24" cy="24" r="18" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="113" strokeDashoffset="17"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[40px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-[22px] h-[22px]" />
                      </div>
                    </div>
                  </div>
                  {/* GitHub - Left middle orbit */}
                  <div className="absolute group cursor-pointer" style={{ left: '265px', top: '290px' }}>
                    <div className="relative size-[38px]">
                      <svg className="absolute -inset-1 size-[46px] transform -rotate-90" viewBox="0 0 46 46">
                        <circle cx="23" cy="23" r="17" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="23" cy="23" r="17" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="107" strokeDashoffset="16"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[38px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-[20px] h-[20px] invert" />
                      </div>
                    </div>
                  </div>
                  {/* HTML5 - Left inner orbit */}
                  <div className="absolute group cursor-pointer" style={{ left: '135px', top: '390px' }}>
                    <div className="relative size-[38px]">
                      <svg className="absolute -inset-1 size-[46px] transform -rotate-90" viewBox="0 0 46 46">
                        <circle cx="23" cy="23" r="17" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="23" cy="23" r="17" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="107" strokeDashoffset="11"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[38px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* Illustrator - Top center */}
                  <div className="absolute group cursor-pointer" style={{ left: '428px', top: '310px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="15"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* React - Right outer */}
                  <div className="absolute group cursor-pointer" style={{ left: '750px', top: '400px' }}>
                    <div className="relative size-[38px]">
                      <svg className="absolute -inset-1 size-[46px] transform -rotate-90" viewBox="0 0 46 46">
                        <circle cx="23" cy="23" r="17" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="23" cy="23" r="17" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="107" strokeDashoffset="11"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[38px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-[22px] h-[22px]" />
                      </div>
                    </div>
                  </div>
                  {/* JavaScript - Right top */}
                  <div className="absolute group cursor-pointer" style={{ left: '695px', top: '345px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="12"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* XD - Right middle */}
                  <div className="absolute group cursor-pointer" style={{ left: '645px', top: '485px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="15"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg" alt="Adobe XD" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* TypeScript - Right */}
                  <div className="absolute group cursor-pointer" style={{ left: '715px', top: '520px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="17"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* Node.js - Right inner */}
                  <div className="absolute group cursor-pointer" style={{ left: '605px', top: '440px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="20"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-[22px] h-[22px]" />
                      </div>
                    </div>
                  </div>
                  {/* MongoDB - Bottom right */}
                  <div className="absolute group cursor-pointer" style={{ left: '565px', top: '570px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="22"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* Next.js - Bottom center */}
                  <div className="absolute group cursor-pointer" style={{ left: '460px', top: '590px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="40"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-[22px] h-[22px] invert" />
                      </div>
                    </div>
                  </div>
                  {/* Express - Bottom left */}
                  <div className="absolute group cursor-pointer" style={{ left: '335px', top: '570px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="32"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express.js" className="w-[22px] h-[22px] invert" />
                      </div>
                    </div>
                  </div>
                  {/* Gatsby - Left outer */}
                  <div className="absolute group cursor-pointer" style={{ left: '100px', top: '400px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="25"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-original.svg" alt="Gatsby" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                  {/* C - Top left */}
                  <div className="absolute group cursor-pointer" style={{ left: '205px', top: '345px' }}>
                    <div className="relative size-[36px]">
                      <svg className="absolute -inset-1 size-[44px] transform -rotate-90" viewBox="0 0 44 44">
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#1e1b4b" strokeWidth="1.5"/>
                        <circle cx="22" cy="22" r="16" fill="none" stroke="#7c3aed" strokeWidth="1.5" 
                          strokeLinecap="round" strokeDasharray="100" strokeDashoffset="18"
                          className="transition-all duration-700 ease-out"/>
                      </svg>
                      <div className="size-[36px] rounded-full flex items-center justify-center" style={{ background: 'rgba(42, 36, 56, 0.6)', border: '1px solid rgba(139, 92, 246, 0.3)', backdropFilter: 'blur(8px)' }}>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" className="w-[20px] h-[20px]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Side Icons */}
                <SideIcon src="https://www.figma.com/api/mcp/asset/b6da9bb1-80eb-41d4-b879-e4ac92de3ff5" label="LinkedIn" left="187px" top="535px" width="20px" height="20px" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/155928b8-6933-4bc7-9ca6-fc2d4f60d833" label="Adobe AI" left="771px" top="512px" width="13px" height="15px" side="right" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/5dd61af8-e7b0-474e-9e01-b9bd3f503628" label="Design" left="82px" top="577px" width="16px" height="22px" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/31e4b07e-ab20-4077-831d-14b69b1803fa" label="Security" left="766px" top="675px" width="11px" height="19px" side="right" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/41e94421-97b1-4667-a5c1-a8e406a3bd4e" label="Configuration" left="826px" top="607px" width="14px" height="15px" side="right" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/22023890-0c7f-48e0-84bb-8048e3f2b212" label="Mobile" left="709px" top="512px" width="20px" height="11px" side="right" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/28abf897-be7f-4ee6-b440-ac8ab394d0d0" label="Code" left="120px" top="577px" width="14px" height="17px" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/e1bdd6e2-187d-469f-bf2a-a4bec659675f" label="TypeScript" left="628px" top="646px" width="13px" height="20px" side="right" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/90dda598-d886-475c-9b89-8a47ee9a9c21" label="UI/UX" left="128px" top="655px" width="21px" height="18px" />
                <SideIcon src="https://www.figma.com/api/mcp/asset/fee91154-4efc-4697-8cbe-fee79224fad3" label="Target" left="771px" top="680px" width="12px" height="14px" side="right" />

              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

// Side Icon Component - Pixel Perfect Positioning
function SideIcon({ src, label, left, top, width, height, side = 'left' }: { 
  src: string; 
  label: string; 
  left: string; 
  top: string; 
  width: string; 
  height: string;
  side?: 'left' | 'right';
}) {
  return (
    <div className="absolute pointer-events-auto z-30 group cursor-pointer" style={{ left, top }}>
      <img src={src} alt={label} style={{ width, height }} className="transition-transform hover:scale-125 duration-300" />
      <span className={`absolute top-1/2 -translate-y-1/2 bg-purple-900/95 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
        side === 'right' ? 'right-full mr-2' : 'left-full ml-2'
      }`}>
        {label}
      </span>
    </div>
  );
} 
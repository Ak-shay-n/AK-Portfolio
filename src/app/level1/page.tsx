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

        </div>
      </div>
    </div>
  );
}
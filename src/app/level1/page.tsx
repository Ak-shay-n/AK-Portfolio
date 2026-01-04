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
      <div className="relative z-10 pt-9 pb-20">
        <div className="container mx-auto px-8 max-w-7xl">

          {/* About Me Section */}
          <section className="min-h-screen flex items-center">
            <div className="w-full">
              {/* Heading */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-mono text-white mb-4">
                  <span className="text-[#3b82f6]">/</span>about-me
                </h1>
                <p className="text-white/70 text-lg">Who am i?</p>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center mt-16">
                {/* Left Column - Text Content */}
                <div className="space-y-6 text-white/80 text-base leading-relaxed">
                  <p>Hello, i'm Akshay!</p>
                  
                  <p>
                    I'm a self-taught cybersecurity enthusiast and developer based in Chennai, India. 
                    I can develop secure applications from scratch and implement comprehensive security measures 
                    to protect modern user-friendly digital experiences.
                  </p>
                  
                  <p>
                    Transforming my knowledge of cybersecurity and development into practical solutions 
                    has been my passion for over 2 years. I have been helping various projects and organizations 
                    establish their security posture online. I always strive to learn about the newest technologies, 
                    security frameworks, and best practices.
                  </p>
                </div>

                {/* Right Column - Image with Decorative Elements */}
                <div className="relative flex justify-center lg:justify-end">
                  
                  {/* Blue Outlined Squares - Behind Image */}
                  <div className="absolute left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-72 top-20 z-0">
                    <div className="relative w-36 h-36">
                      {/* Large square - top left */}
                      <div className="absolute top-0 left-0 w-24 h-24 border-2 border-[#3b82f6] opacity-60"></div>
                      {/* Medium square - overlapping middle right */}
                      <div className="absolute top-8 left-14 w-20 h-20 border-2 border-[#3b82f6] opacity-50"></div>
                      {/* Small square - bottom left */}
                      <div className="absolute top-18 left-4 w-16 h-16 border-2 border-[#3b82f6] opacity-40"></div>
                    </div>
                  </div>
                  
                  {/* Main Image Container */}
                  <div className="relative z-10">
                    <img 
                      src="/image.png" 
                      alt="Profile" 
                      className="w-full max-w-md"
                    />
                    
                    {/* "Currently working on" Badge - Ultra Futuristic */}
                    <div className="absolute bottom-8 left-4 right-4 bg-black/80 backdrop-blur-xl border-2 border-[#3b82f6]/60 shadow-[0_0_30px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.1)] px-6 py-4 relative overflow-hidden group hover:shadow-[0_0_40px_rgba(59,130,246,0.6),inset_0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
                      {/* Corner accents */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#3b82f6]"></div>
                      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#3b82f6]"></div>
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#3b82f6]"></div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#3b82f6]"></div>
                      
                      {/* Scanning line effect */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent animate-[scan_2s_ease-in-out_infinite]" style={{top: '0%', animationDelay: '0s'}}></div>
                      </div>
                      
                      {/* Glitch effect overlay */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute h-[1px] w-full bg-[#3b82f6]/50 animate-[glitch_3s_infinite]" style={{top: '30%'}}></div>
                        <div className="absolute h-[1px] w-full bg-[#3b82f6]/30 animate-[glitch_2.5s_infinite]" style={{top: '60%', animationDelay: '0.5s'}}></div>
                        <div className="absolute h-[1px] w-full bg-[#3b82f6]/40 animate-[glitch_2.8s_infinite]" style={{top: '80%', animationDelay: '1s'}}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="relative flex items-center gap-4">
                        
                        
                        <div className="flex-1">
                          <p className="text-white text-sm font-mono tracking-wide flex items-center gap-2">
                            Currently working on 
                            <span className="text-[#3b82f6] font-bold group-hover:text-[#60a5fa] transition-colors relative">
                              True Lens
                              <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent"></span>
                            </span>
                          </p>
                        </div>
                        
                        {/* Status indicators */}
                        <div className="flex flex-col gap-1.5">
                          <div className="flex gap-1">
                            <div className="w-6 h-0.5 bg-[#3b82f6] shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                            <div className="w-4 h-0.5 bg-[#3b82f6]/60"></div>
                            <div className="w-2 h-0.5 bg-[#3b82f6]/30"></div>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-4 h-0.5 bg-[#3b82f6]/60"></div>
                            <div className="w-6 h-0.5 bg-[#3b82f6] shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                            <div className="w-2 h-0.5 bg-[#3b82f6]/30"></div>
                          </div>
                          <div className="flex gap-1">
                            <div className="w-2 h-0.5 bg-[#3b82f6]/30"></div>
                            <div className="w-4 h-0.5 bg-[#3b82f6]/60"></div>
                            <div className="w-6 h-0.5 bg-[#3b82f6] shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
                          </div>
                        </div>
                      </div>
                      
                      <style jsx>{`
                        @keyframes scan {
                          0%, 100% { top: 0%; opacity: 0; }
                          50% { top: 100%; opacity: 1; }
                        }
                        @keyframes glitch {
                          0%, 100% { transform: translateX(0); opacity: 0.2; }
                          10% { transform: translateX(-2px); opacity: 0.4; }
                          20% { transform: translateX(2px); opacity: 0.3; }
                          30%, 70% { transform: translateX(0); opacity: 0.2; }
                          80% { transform: translateX(1px); opacity: 0.35; }
                          90% { transform: translateX(-1px); opacity: 0.25; }
                        }
                      `}</style>
                    </div>
                  </div>

                  {/* Decorative Dots Grid - Right Side */}
                  <div className="absolute -right-4 top-1/3 grid grid-cols-5 gap-2 opacity-50 z-0">
                    {[...Array(25)].map((_, i) => (
                      <div key={`dot-right-${i}`} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
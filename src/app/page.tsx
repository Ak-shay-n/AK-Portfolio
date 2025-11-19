"use client"

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LevelCard from '@/components/LevelCard';
import LightRays from '@/components/LightRays';
import Header from '@/components/Header';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoading, setShowLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState(0);
  const [randomCode, setRandomCode] = useState('');
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);
  const [educationProgress, setEducationProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [showFooter, setShowFooter] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const education1Ref = useRef<HTMLDivElement>(null);
  const education2Ref = useRef<HTMLDivElement>(null);
  const education3Ref = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const word1 = "World";
  const word2 = "Portfolio";

  const levels = [
    {
      title: "SYSTEM ACCESS",
      description: "Gain entry to my digital fortress. Learn about my background, skills, and passion for cybersecurity.",
      level: 1,
      href: "/level1",
      status: "unlocked" as const,
      difficulty: "Easy" as const,
      skills: ["Bio", "Skills", "Experience"]
    },
    {
      title: "DECRYPT PROJECTS",
      description: "Decode my project portfolio. Explore interactive demos and technical implementations.",
      level: 2,
      href: "/level2",
      status: "unlocked" as const,
      difficulty: "Medium" as const,
      skills: ["Web Apps", "Tools", "Demonstrations"]
    },
    {
      title: "SECURE CONTACT",
      description: "Establish encrypted communication. Multiple secure channels available for professional contact.",
      level: 3,
      href: "/level3",
      status: "unlocked" as const,
      difficulty: "Hard" as const,
      skills: ["Contact", "Network", "Verification"]
    }
  ];

  // Advanced Typewriter effect - only animate "World" and "Portfolio"
  useEffect(() => {
    if (!isClient) return;
    
    let timeoutId: NodeJS.Timeout;
    let isCancelled = false;
    const typeSpeed = 100;
    const eraseSpeed = 50;
    const pauseDuration = 1500;

    const sequence = async () => {
      while (!isCancelled) {
        // Phase 1: Type "World"
        for (let i = 0; i <= word1.length; i++) {
          if (isCancelled) return;
          await new Promise(resolve => {
            timeoutId = setTimeout(() => {
              setCurrentText(word1.slice(0, i));
              resolve(null);
            }, typeSpeed);
          });
        }

        // Phase 2: Pause after "World"
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, pauseDuration);
        });
        if (isCancelled) return;

        // Phase 3: Erase "World"
        for (let i = word1.length; i >= 0; i--) {
          if (isCancelled) return;
          await new Promise(resolve => {
            timeoutId = setTimeout(() => {
              setCurrentText(word1.slice(0, i));
              resolve(null);
            }, eraseSpeed);
          });
        }

        // Phase 4: Type "Portfolio"
        for (let i = 0; i <= word2.length; i++) {
          if (isCancelled) return;
          await new Promise(resolve => {
            timeoutId = setTimeout(() => {
              setCurrentText(word2.slice(0, i));
              resolve(null);
            }, typeSpeed);
          });
        }

        // Phase 5: Pause after "Portfolio"
        await new Promise(resolve => {
          timeoutId = setTimeout(resolve, pauseDuration);
        });
        if (isCancelled) return;

        // Phase 6: Erase "Portfolio"
        for (let i = word2.length; i >= 0; i--) {
          if (isCancelled) return;
          await new Promise(resolve => {
            timeoutId = setTimeout(() => {
              setCurrentText(word2.slice(0, i));
              resolve(null);
            }, eraseSpeed);
          });
        }
      }
    };

    sequence();
    setIsLoaded(true);

    return () => {
      isCancelled = true;
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isClient]);

  // Mouse tracking
  useEffect(() => {
    if (!isClient) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Trigger content animations after loading
  useEffect(() => {
    if (!showLoading && isClient) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [showLoading, isClient]);

  // Simulate data fetching (replace with your actual API calls)
  useEffect(() => {
    if (!isClient || !showLoading) return;

    let animationFrameId: number;
    let cancelled = false;

    const fetchData = async () => {
      try {
        // Simulate fetching multiple data sources
        // Replace these with your actual API calls
        const fetchOperations = [
          new Promise(resolve => setTimeout(resolve, 600)),  // Simulated fetch 1
          new Promise(resolve => setTimeout(resolve, 900)),  // Simulated fetch 2
          new Promise(resolve => setTimeout(resolve, 1200)), // Simulated fetch 3
        ];

        const total = fetchOperations.length;
        let completed = 0;
        let currentProgress = 0;
        let targetProgress = 0;

        // Smooth animation loop
        const smoothAnimate = () => {
          if (cancelled) return;

          // Lerp (linear interpolation) for smooth animation
          const lerp = (start: number, end: number, factor: number) => {
            return start + (end - start) * factor;
          };

          // Smooth catch-up to target (slower = smoother)
          currentProgress = lerp(currentProgress, targetProgress, 0.1);

          setLoadingProgress(currentProgress);

          // Update phase based on progress
          if (currentProgress >= 80) setLoadingPhase(5);
          else if (currentProgress >= 60) setLoadingPhase(4);
          else if (currentProgress >= 45) setLoadingPhase(3);
          else if (currentProgress >= 30) setLoadingPhase(2);
          else if (currentProgress >= 15) setLoadingPhase(1);

          // Keep animating if not close enough to target
          if (Math.abs(targetProgress - currentProgress) > 0.1 || targetProgress < 100) {
            animationFrameId = requestAnimationFrame(smoothAnimate);
          } else if (targetProgress >= 100) {
            // Finished loading
            setDataLoaded(true);
            setTimeout(() => setShowLoading(false), 300);
          }
        };

        // Start smooth animation loop
        animationFrameId = requestAnimationFrame(smoothAnimate);

        // Process fetch operations
        for (const operation of fetchOperations) {
          await operation;
          completed++;
          targetProgress = (completed / total) * 100;
        }

      } catch (error) {
        console.error('Error loading data:', error);
        setTimeout(() => {
          setDataLoaded(true);
          setShowLoading(false);
        }, 2000);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isClient, showLoading]);

  // Random code generation for loading screen
  useEffect(() => {
    if (!showLoading) return;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01';
    const generateRandomCode = (length: number) => {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };

    // Initialize code
    setRandomCode(generateRandomCode(140));

    // Update random positions in code
    const codeInterval = setInterval(() => {
      setRandomCode(prev => {
        if (!prev) return generateRandomCode(140);
        
        const numChanges = Math.floor(Math.random() * 3) + 1;
        let newCodeString = prev.split('');
        
        for (let i = 0; i < numChanges; i++) {
          const pos = Math.floor(Math.random() * newCodeString.length);
          newCodeString[pos] = characters.charAt(Math.floor(Math.random() * characters.length));
        }
        
        return newCodeString.join('');
      });
    }, 80);

    return () => clearInterval(codeInterval);
  }, [showLoading]);

  // Handle education progress bar
  useEffect(() => {
    if (!isClient) return;

    const handleEducationScroll = () => {
      // Calculate education timeline progress based on scroll position
      if (educationRef.current && education1Ref.current && education2Ref.current) {
        const windowHeight = window.innerHeight;
        const viewportTrigger = windowHeight * 0.6; // Trigger point at 60% of viewport
        
        // Get icon positions (center of the circular icons)
        const item1Icon = education1Ref.current.querySelector('div[class*="absolute"]') as HTMLElement;
        const item2Icon = education2Ref.current.querySelector('div[class*="absolute"]') as HTMLElement;
        
        if (!item1Icon || !item2Icon) return;
        
        const icon1Rect = item1Icon.getBoundingClientRect();
        const icon2Rect = item2Icon.getBoundingClientRect();
        
        // Calculate icon centers (accounting for the icon size)
        const icon1Y = icon1Rect.top + (icon1Rect.height / 2);
        const icon2Y = icon2Rect.top + (icon2Rect.height / 2);
        
        // Total vertical distance between the two icons
        const totalDistance = icon2Y - icon1Y;
        
        // Calculate how much the timeline should be filled
        // Start filling when first icon reaches trigger point
        const startOffset = viewportTrigger - icon1Y;
        
        let progress = 0;
        
        if (startOffset <= 0) {
          // First icon hasn't reached trigger point yet
          progress = 0;
        } else if (startOffset >= totalDistance) {
          // Past the second icon - cap at 100%
          progress = 1;
        } else {
          // Between the two icons - proportional fill
          progress = startOffset / totalDistance;
        }
        
        // Clamp progress between 0 and 1 to prevent overflow
        progress = Math.max(0, Math.min(1, progress));
        
        setEducationProgress(progress);
      }
    };

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const optimizedScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleEducationScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizedScroll, { passive: true });
    handleEducationScroll(); // Call once on mount
    
    return () => {
      window.removeEventListener('scroll', optimizedScroll);
    };
  }, [isClient]);

  // Footer scroll animation
  useEffect(() => {
    if (!isClient || !footerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowFooter(true);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-50px'
      }
    );

    observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, [isClient]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Account for navbar height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-cyan-400">Loading...</div>
      </div>
    );
  }

  // Advanced loading screen
  if (showLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center px-8">
        <div className="w-[80%] max-w-[500px]">
          {/* LOADING text */}
          <div className="text-center mb-[20px]">
            <h1 
              className="text-white text-2xl font-bold uppercase tracking-[12px]"
              style={{ fontFamily: "'Horizon', 'Arial Black', sans-serif" }}
            >
              LOADING
            </h1>
          </div>

          {/* Top decoration: hyphen - thin line - hyphen */}
          <div className="flex items-center mb-[4px] gap-0">
            <div className="w-[30px] h-[4px] bg-white flex-shrink-0" />
            <div className="flex-grow h-[1.5px] bg-white" />
            <div className="w-[30px] h-[4px] bg-white flex-shrink-0" />
          </div>

          {/* Main progress bar */}
          <div className="relative bg-[#1a1a1a] h-[20px] border border-white shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <div 
              className="h-full bg-white relative overflow-hidden will-change-[width]"
              style={{ 
                width: `${loadingProgress}%`,
                transition: 'none'
              }}
            >
              {/* Shine effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                style={{ animation: 'shine 1.5s infinite' }}
              />
            </div>
          </div>

          {/* Bottom decoration: hyphen - code text - hyphen */}
          <div className="flex items-center mt-[4px] gap-0">
            <div className="w-[30px] h-[4px] bg-white flex-shrink-0 mt-0.5" />
            <div className="flex-grow overflow-hidden whitespace-nowrap pt-1 pl-2 pr-8">
              <div 
                className="text-[#888] text-[8px]  tracking-[0.3px] font-mono"
              >
                {randomCode}
              </div>
            </div>
            <div className="w-[30px] h-[4px] ml-2 bg-white flex-shrink-0 mt-1" />
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">
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

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-0">
          <div className="container mx-auto px-8 text-center relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Modern Hero Title */}
              <div className="mb-8">
                <div className={`inline-block mb-6 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                  <span className="text-white/60 text-lg font-light tracking-wider uppercase">Hello, I'm</span>
                </div>
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                  Akshay Kumar B
                </h1>
                <div className={`w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
              </div>
              
              {/* Dynamic Typewriter */}
              <div className={`text-xl md:text-2xl text-white/80 mb-8 min-h-[2.5rem] font-light transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="inline-block">
                  <span>Welcome to My </span>
                  <span className="inline-block min-w-[150px] text-left">{currentText}</span>                </span>
              </div>

              <p className={`text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12 font-light transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <span className="font-serif font-semibold text-white text-xl tracking-wide">Cybersecurity | Networking | AI Model Developer</span>
                <br />
                <span className="relative inline-block mt-4 group">
                  <span className="text-white font-mono text-lg font-semibold tracking-wider italic relative">
                    " If it's Smart, it's Vulnerable "
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-green-400/20 to-cyan-400/20 blur-xl group-hover:blur-2xl transition-all duration-500"></span>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent group-hover:via-cyan-400 transition-all duration-300"></span>
                </span>
              </p>

              {/* Modern Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                <div className={`group transition-all duration-1000 delay-[900ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">2+</div>
                    <div className="text-white/60 text-sm font-light">Years Experience</div>
                  </div>
                </div>
                <div className={`group transition-all duration-1000 delay-[1000ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">10+</div>
                    <div className="text-white/60 text-sm font-light">Projects Completed</div>
                  </div>
                </div>
                <div className={`group transition-all duration-1000 delay-[1100ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">95%</div>
                    <div className="text-white/60 text-sm font-light">Automated Compliance</div>
                  </div>
                </div>
                <div className={`group transition-all duration-1000 delay-[1200ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500">
                    <div className="text-3xl font-bold text-white mb-2">89.9%</div>
                    <div className="text-white/60 text-sm font-light">Model Accuracy</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 transition-all duration-1000 delay-[1400ms] ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <Link href="/level1" className="group relative overflow-hidden">
                <div className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore My Work
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </div>
              </Link>
              
              <button 
                className="group relative"
                onClick={() => {
                  document.getElementById('levels')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <div className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:border-white hover:bg-white/10 transition-all duration-300">
                  View Portfolio
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">↓</span>
                </div>
              </button>
            </div>

            {/* Elegant Scroll Indicator */}
            <div className={`animate-bounce transition-all duration-1000 delay-[1600ms] ${showContent ? 'opacity-60' : 'opacity-0'}`}>
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center mx-auto">
                <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section ref={educationRef} className="py-24 relative">
          <div className="container mx-auto px-8 max-w-5xl">
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                My <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Education</span>
              </h2>
            </div>

            <div className="relative space-y-8">
              {/* Background vertical line (unfilled) */}
              <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-green-400/20" />
              
              {/* Animated vertical progress line (fills up on scroll) */}
              <div 
                className="absolute left-0 top-6 w-0.5 bg-gradient-to-b from-green-400 to-cyan-400 transition-all duration-300 ease-out"
                style={{
                  height: `calc((100% - 3rem) * ${educationProgress})`,
                  boxShadow: `0 0 20px rgba(34, 197, 94, ${educationProgress * 0.8})`
                }}
              />

              {/* B.E - Computer Science */}
              <div ref={education1Ref} className="relative pl-12 pb-16">
                <div className="absolute left-0 top-0 w-12 h-12 -ml-6 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 z-10">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight">UG - B.E CSE (Cybersecurity)</h3>
                  <span className="text-sm text-white/50 font-light">Sep 2023 - May 2027</span>
                </div>
                <div className="space-y-1 text-white/70">
                  <p className="text-base font-light">Chennai Institute of Technology, Chennai</p>
                </div>
              </div>

              {/* HSC */}
              <div ref={education2Ref} className="relative pl-12 pb-16">
                <div className="absolute left-0 top-0 w-12 h-12 -ml-6 bg-gradient-to-br from-green-400 to-cyan-400 rounded-full flex items-center justify-center transition-all duration-300 z-10">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <h3 className="text-2xl font-bold text-white tracking-tight">HSC - Math & Computer Science</h3>
                  <span className="text-sm text-white/50 font-light">Jul 2019 - Apr 2021</span>
                </div>
                <div className="space-y-1 text-white/70">
                  <p className="text-base font-light">St.Joseph's Matric Hr.Sec School, Hosur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="levels" className="py-24 relative">
          <div className="container mx-auto px-8">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-white/60 text-sm font-light tracking-wider uppercase">My Work</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                Featured Projects
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-transparent mx-auto mb-8"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {levels.map((level, index) => (
                <div key={level.level} className="group relative">
                  <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-500 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                          {level.title}
                        </h3>
                        <div className="flex items-center space-x-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                            level.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' :
                            level.difficulty === 'Medium' ? 'bg-amber-500/10 text-amber-300 border-amber-500/20' :
                            level.difficulty === 'Hard' ? 'bg-red-500/10 text-red-300 border-red-500/20' :
                            'bg-purple-500/10 text-purple-300 border-purple-500/20'
                          }`}>
                            {level.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-6 leading-relaxed font-light">
                      {level.description}
                    </p>
                    
                    <div className="mb-8">
                      <div className="text-sm text-white/60 mb-3 font-medium">Technologies:</div>
                      <div className="flex flex-wrap gap-2">
                        {level.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs border border-white/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link 
                      href={level.href}
                      className="inline-flex items-center justify-center w-full py-3 px-6 bg-white text-black rounded-2xl font-semibold hover:bg-white/90 transition-all duration-300 group"
                    >
                      Explore Project
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer ref={footerRef} className="relative mt-auto pt-20 pb-0">
          <div className="container mx-auto px-8 max-w-5xl">
            {/* Quote Banner */}
            <div className={`relative rounded-t-xl bg-white/5 backdrop-blur-sm border border-white/10 py-6 px-8 text-center transition-all duration-1000 ${
              showFooter ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 italic">
                " There is no Patch for Human Stupidity "
              </h2>
              <p className="text-white/60 text-sm">
                ~ Kevin Mitnick
              </p>
            </div>
          </div>
        </footer>
      </div>  );
}

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
                
                {/* Connection Lines from Figma */}
                <div className="absolute pointer-events-none" style={{ left: '461.57px', top: '182.5px', width: '122.427px', height: '277.5px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/8ab54cdc-6367-4296-9b1c-913257c888ac" alt="" className="w-full h-full opacity-50" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '452.01px', top: '199.5px', width: '70.489px', height: '270px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/f193b84b-72e6-4134-9798-7315b6e85589" alt="" className="w-full h-full opacity-50" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '436.5px', top: '198px', width: '34.5px', height: '291.5px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/68225275-0692-4c2a-916e-a27c80964c28" alt="" className="w-full h-full opacity-50" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '303.5px', top: '192px', width: '117.949px', height: '300.5px' }}>
                  <div style={{ transform: 'rotateX(180deg) scaleY(-1)', width: '100%', height: '100%' }}>
                    <img src="https://www.figma.com/api/mcp/asset/ec5b8c03-99cb-46b2-94c3-2e715f9e987d" alt="" className="w-full h-full opacity-50" />
                  </div>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '365px', top: '192px', width: '66.11px', height: '310px' }}>
                  <div style={{ transform: 'rotateX(180deg) scaleY(-1)', width: '100%', height: '100%' }}>
                    <img src="https://www.figma.com/api/mcp/asset/1ec251fc-31e7-461f-94e1-867e2cb520eb" alt="" className="w-full h-full opacity-50" />
                  </div>
                </div>
                <div className="absolute pointer-events-none" style={{ left: '414px', top: '195px', width: '21px', height: '313px' }}>
                  <div style={{ transform: 'rotateX(180deg) scaleY(-1)', width: '100%', height: '100%' }}>
                    <img src="https://www.figma.com/api/mcp/asset/4f2da788-91f2-4bad-99f8-dbfa728a004f" alt="" className="w-full h-full opacity-50" />
                  </div>
                </div>

                {/* Background Glow */}
                <div className="absolute pointer-events-none" style={{ left: '181px', top: '424px', width: '542px', height: '330px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/c865ba0d-35c1-4b65-9591-88db870483e1" alt="" className="w-full h-full opacity-20" />
                </div>

                {/* Elliptical Orbits - 3 Concentric */}
                <div className="absolute pointer-events-none" style={{ left: '0px', top: '457px', width: '881px', height: '269px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/571c5d46-5c80-47cc-b715-872eca04da51" alt="" className="w-full h-full opacity-60" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '63px', top: '457px', width: '764px', height: '269px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/dae9767a-f33d-4e6e-9700-9163daffa06f" alt="" className="w-full h-full opacity-60" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '108px', top: '457px', width: '695px', height: '269px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/caf51923-b20a-48f7-bb58-338772bc9fc3" alt="" className="w-full h-full opacity-60" />
                </div>

                {/* Central Glow System */}
                <div className="absolute pointer-events-none z-10" style={{ left: '292px', top: '385px', width: '306px', height: '275px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/39b113f3-2f09-4b86-acca-faa856409dd2" alt="" className="w-full h-full opacity-90" />
                </div>
                
                {/* Central Purple Sphere with Sigma */}
                <div className="absolute z-20" style={{ left: '350px', top: '448px', width: '180px', height: '180px' }}>
                  <img src="https://www.figma.com/api/mcp/asset/670fae2e-4561-472e-9a11-1c2dd48189d1" alt="" className="w-full h-full" />
                  <div className="absolute" style={{ left: '52px', top: '45px', width: '76px', height: '90px' }}>
                    <img src="https://www.figma.com/api/mcp/asset/5fa9f248-59cf-4700-9982-b0a3270932a9" alt="Σ" className="w-full h-full" />
                  </div>
                </div>

                {/* Skill Icon Circles */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 z-30" style={{ width: '374px', marginLeft: '-187px', marginTop: '97px' }}>
                  {/* Top Row - 7 icons */}
                  <div className="absolute" style={{ left: '0px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/150196f0-28f1-43db-83fd-091fa2ba1830" alt="Figma" className="absolute" style={{ left: '12px', top: '8px', width: '21px', height: '28px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '55px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/5c427a26-bbb9-45d2-859b-bb35cb257518" alt="React" className="absolute" style={{ left: '6px', top: '8px', width: '32px', height: '28px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '110px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/6b73911c-2126-4b84-8e01-8704b92c5f6c" alt="C" className="absolute" style={{ left: '6px', top: '7px', width: '32px', height: '31px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '168px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/30bcdc6d-17ba-4d45-94cb-982a29486e4c" alt="Node.js" className="absolute mix-blend-lighten" style={{ left: '6px', top: '12px', width: '32px', height: '21px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '220px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/67a01c1b-13e9-4224-9034-c02108747a4c" alt="HTML" className="absolute" style={{ left: '9px', top: '8px', width: '26px', height: '25px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '275px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/f5ad6b19-0715-4315-83e8-cb3ca316f522" alt="Gatsby" className="absolute" style={{ left: '9px', top: '10px', width: '26px', height: '25px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '330px', top: '0px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/b0beb0b0-812b-4019-82ec-4e5691e48c8c" alt="JavaScript" className="absolute" style={{ left: '9px', top: '10px', width: '26px', height: '25px' }} />
                    </div>
                  </div>

                  {/* Bottom Row - 6 icons */}
                  <div className="absolute" style={{ left: '28px', top: '61px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/bcc5211c-418f-406c-ab24-f58e4070c1e1" alt="Adobe XD" className="absolute" style={{ left: '9px', top: '10px', width: '26px', height: '25px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '88px', top: '61px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/ade7f53c-ab82-4ff0-be90-9591832f247f" alt="Gatsby" className="absolute mix-blend-lighten" style={{ left: '5px', top: '14px', width: '33px', height: '15px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '140px', top: '61px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/4268cdc6-2ddf-4140-86ee-7ba383663caf" alt="Gatsby" className="absolute" style={{ left: '9px', top: '9px', width: '26px', height: '26px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '195px', top: '61px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/dcc8366f-2d63-4842-9c80-1f6bab333002" alt="Adobe AI" className="absolute" style={{ left: '9px', top: '10px', width: '26px', height: '25px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '254px', top: '61px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/1bf512c0-fe8f-4730-b020-94ce110ac752" alt="Express.js" className="absolute mix-blend-lighten" style={{ left: '3px', top: '17px', width: '39px', height: '11px' }} />
                    </div>
                  </div>
                  <div className="absolute" style={{ left: '309px', top: '61px' }}>
                    <div className="size-[44px] rounded-full" style={{ background: '#2a2438', border: '1px solid #3a3048' }}>
                      <img src="https://www.figma.com/api/mcp/asset/92073d5e-cd9a-4646-b103-c8956f9a11ae" alt="MongoDB" className="absolute mix-blend-lighten" style={{ left: '5px', top: '17px', width: '37px', height: '9px' }} />
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
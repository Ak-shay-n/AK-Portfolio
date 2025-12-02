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

          {/* Skills Section - Exact Figma Replication */}
          <section className="relative py-20 overflow-hidden">
            <div className="relative mx-auto px-4" style={{ maxWidth: '895px', minHeight: '754px' }}>
              
              {/* Title Section - Exact from Figma */}
              <div className="relative text-center mb-16">
                <p className="text-[24px] leading-[31px] tracking-[0.48px] text-white mb-2">
                  I'm currently looking to join a <span className="text-[#a362ff]">cross-functional</span> team
                </p>
                <p className="text-[17px] leading-[31px] tracking-[0.48px] text-white/70">
                  that values improving people's lives through accessible design
                </p>
              </div>

              {/* Skills Orbital System - Exact Figma Design */}
              <div className="relative w-full mx-auto" style={{ width: '895px', height: '657px' }}>
                
                {/* Connection Lines to Top Row Icons - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/acda6e02-e96b-4ba1-8b1d-51a266203c9c" alt="" className="absolute pointer-events-none" style={{ left: '461.57px', top: '182.5px', width: '122.427px', height: '277.5px', opacity: 0.3 }} />
                <img src="https://www.figma.com/api/mcp/asset/14f07567-8c3b-4ca7-8c0d-532a79dba33b" alt="" className="absolute pointer-events-none" style={{ left: '452.01px', top: '199.5px', width: '70.489px', height: '270px', opacity: 0.3 }} />
                <img src="https://www.figma.com/api/mcp/asset/2dc86e96-dd0d-4854-8b27-af8d8cf18ad1" alt="" className="absolute pointer-events-none" style={{ left: '436.5px', top: '198px', width: '34.5px', height: '291.5px', opacity: 0.3 }} />
                <img src="https://www.figma.com/api/mcp/asset/e428be46-3a7e-4425-a6b5-2c48b3ed8875" alt="" className="absolute pointer-events-none" style={{ left: '303.5px', top: '192px', width: '117.949px', height: '300.5px', opacity: 0.3, transform: 'scaleX(-1)' }} />
                <img src="https://www.figma.com/api/mcp/asset/959cf3ee-828b-44b3-a169-3dc6537db377" alt="" className="absolute pointer-events-none" style={{ left: '365px', top: '192px', width: '66.11px', height: '310px', opacity: 0.3, transform: 'scaleX(-1)' }} />
                <img src="https://www.figma.com/api/mcp/asset/627f5ffc-c16d-4374-8fc1-8a2d309beeeb" alt="" className="absolute pointer-events-none" style={{ left: '414px', top: '195px', width: '21px', height: '313px', opacity: 0.3, transform: 'scaleX(-1)' }} />

                {/* Background Ellipse Glow - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/66dbfd50-a9d3-4f2b-9f71-984afc8c8dce" alt="" className="absolute pointer-events-none" style={{ left: '181px', top: '424px', width: '542px', height: '330px', opacity: 0.4 }} />
                
                {/* Three Concentric Elliptical Orbits - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/f3b2a11e-0ff5-41cc-b2ed-35346b08ac1d" alt="" className="absolute pointer-events-none" style={{ left: '0px', top: '457px', width: '881px', height: '269px', opacity: 0.5 }} />
                <img src="https://www.figma.com/api/mcp/asset/3077c0d7-c280-4a8e-af7b-e2a91e68244f" alt="" className="absolute pointer-events-none" style={{ left: '63px', top: '457px', width: '764px', height: '269px', opacity: 0.5 }} />
                <img src="https://www.figma.com/api/mcp/asset/cfc5028f-ed95-467c-ab77-0bb62a7bb485" alt="" className="absolute pointer-events-none" style={{ left: '108px', top: '457px', width: '695px', height: '269px', opacity: 0.5 }} />

                {/* Central Glowing Sphere Group - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/b74caefc-7e5a-48e4-a963-79259751920c" alt="" className="absolute pointer-events-none z-10" style={{ left: '292px', top: '385px', width: '306px', height: '275px' }} />
                
                {/* Central Purple Sphere - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/6c2a5dad-7716-47d5-a70d-1605618afae3" alt="" className="absolute z-20" style={{ left: '350px', top: '448px', width: '180px', height: '180px' }} />
                
                {/* Sigma Symbol - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/94a43170-50ff-4f1c-9bce-9e93d69a9057" alt="" className="absolute z-30" style={{ left: '402.36px', top: '493.82px', width: '76.144px', height: '90px' }} />

                {/* Skill Icons - Two Rows at Top (Exact Figma Layout) */}
                <div className="absolute z-40" style={{ left: '255px', top: '97px' }}>
                  {/* Top Row - 7 Icons */}
                  <img src="https://www.figma.com/api/mcp/asset/6e538132-e7b7-44ae-b883-c27c88330864" alt="Figma" className="absolute" style={{ left: '0px', top: '0px', width: '21px', height: '28px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/e27117db-d571-4f4a-b756-18672651fa92" alt="React" className="absolute" style={{ left: '49px', top: '0px', width: '32px', height: '28px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/1c47badc-12a1-4cca-979c-c22d96a191e9" alt="C" className="absolute" style={{ left: '104px', top: '0px', width: '32px', height: '31px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/e6d2a819-47a9-4fd1-b44e-f6a1fab73856" alt="Node.js" className="absolute" style={{ left: '162px', top: '4px', width: '32px', height: '21px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/c456d780-6eaf-4652-b909-780c66a99626" alt="JavaScript" className="absolute" style={{ left: '272px', top: '2px', width: '26px', height: '25px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/bca0a93f-57ca-4764-a5fc-5bdd26766487" alt="CSS3" className="absolute" style={{ left: '327px', top: '2px', width: '26px', height: '25px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/485b1d87-5056-4799-87ab-05c6b882897c" alt="HTML5" className="absolute" style={{ left: '217px', top: '0px', width: '26px', height: '25px' }} />
                  
                  {/* Bottom Row - 6 Icons */}
                  <img src="https://www.figma.com/api/mcp/asset/142d3681-fad8-4911-bcfa-b8c974781998" alt="GitHub" className="absolute" style={{ left: '25px', top: '63px', width: '26px', height: '25px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/ca54cb8b-1ae7-4ad5-a7a1-10863ae44148" alt="Gatsby" className="absolute" style={{ left: '81px', top: '67px', width: '33px', height: '15px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/ea3bc858-c44d-477e-b805-c9ad46b7de2f" alt="TypeScript" className="absolute" style={{ left: '137px', top: '62px', width: '26px', height: '26px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/11ce063d-1f97-44d7-8c8b-e3b93957df42" alt="Illustrator" className="absolute" style={{ left: '192px', top: '63px', width: '26px', height: '25px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/8fdf84b2-f4ba-4318-bb7e-60ca27d9a62e" alt="Express" className="absolute" style={{ left: '245px', top: '70px', width: '39px', height: '11px' }} />
                  <img src="https://www.figma.com/api/mcp/asset/0cd1332e-590f-44ec-854e-ae111124f718" alt="MongoDB" className="absolute" style={{ left: '302px', top: '70px', width: '37px', height: '9px' }} />
                </div>

                {/* Circular Background for Icons */}
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '255px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '310px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '365px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '423px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '530px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '585px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '475px', top: '97px', width: '44px', height: '44px', opacity: 0.8 }} />
                
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '283px', top: '158px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '395px', top: '158px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '450px', top: '158px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '509px', top: '158px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '564px', top: '158px', width: '44px', height: '44px', opacity: 0.8 }} />
                <img src="https://www.figma.com/api/mcp/asset/02e7d9b4-b22d-4ecc-85af-4690748f4300" alt="" className="absolute z-35" style={{ left: '343px', top: '158px', width: '44px', height: '44px', opacity: 0.8 }} />
                
                {/* Side Icon Elements - From Figma */}
                <img src="https://www.figma.com/api/mcp/asset/5e24ef31-b257-4f69-b666-96c656e8f0b9" alt="" className="absolute z-35" style={{ left: '833px', top: '535.31px', width: '20.09px', height: '20.87px' }} />
                <img src="https://www.figma.com/api/mcp/asset/4e3f7785-a766-4673-8d9b-9ea8340a1c82" alt="" className="absolute z-35" style={{ left: '771px', top: '504.99px', width: '13px', height: '15.16px' }} />
                <img src="https://www.figma.com/api/mcp/asset/dc09f81c-9a8f-4480-88e7-120e033621f3" alt="" className="absolute z-35" style={{ left: '879px', top: '587.79px', width: '16px', height: '22.16px' }} />
                <img src="https://www.figma.com/api/mcp/asset/85c63714-2ff5-4492-866a-5b6a87839602" alt="" className="absolute z-35" style={{ left: '766px', top: '675.25px', width: '11px', height: '19.24px' }} />
                <img src="https://www.figma.com/api/mcp/asset/babc5e4d-ef8a-41d1-86d3-783407b61c5d" alt="" className="absolute z-35" style={{ left: '826px', top: '607.62px', width: '13.59px', height: '15.45px' }} />
                <img src="https://www.figma.com/api/mcp/asset/cb8d58e0-abf0-4712-9706-4137b9078fb1" alt="" className="absolute z-35" style={{ left: '709px', top: '512.18px', width: '20.31px', height: '11.49px' }} />
                <img src="https://www.figma.com/api/mcp/asset/1ad1b583-3940-4352-91db-22d8583efee4" alt="" className="absolute z-35" style={{ left: '120px', top: '577.29px', width: '14px', height: '17.49px' }} />
                <img src="https://www.figma.com/api/mcp/asset/81ce3fea-ae89-4513-bbf9-9a19ccd789b7" alt="" className="absolute z-35" style={{ left: '28px', top: '645.98px', width: '13px', height: '20.33px' }} />
                <img src="https://www.figma.com/api/mcp/asset/1ea26e9a-92c5-405c-9c66-9a4bb99eedab" alt="" className="absolute z-35" style={{ left: '187px', top: '484px', width: '12px', height: '14.74px' }} />
                <img src="https://www.figma.com/api/mcp/asset/c6882485-fa07-4f75-93c2-dea833114cf1" alt="" className="absolute z-35" style={{ left: '82px', top: '521.32px', width: '12.57px', height: '14.95px' }} />
                <img src="https://www.figma.com/api/mcp/asset/45cb095e-8f37-4f2f-a321-03a974d80ff6" alt="" className="absolute z-35" style={{ left: '128px', top: '655.43px', width: '21.71px', height: '18.66px' }} />

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
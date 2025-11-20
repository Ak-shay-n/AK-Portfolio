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

          {/* Skills Section - Pixel Perfect Figma Clone */}
          <section className="relative py-20 overflow-hidden">
            <div className="relative mx-auto px-4" style={{ maxWidth: '895px', minHeight: '754px' }}>
              
              {/* Title Section - Exact Figma Typography */}
              <div className="relative text-center mb-12" style={{ maxWidth: '663px', margin: '0 auto 80px' }}>
                <p className="text-[24px] leading-[31px] tracking-[0.48px] text-white mb-0 font-light">
                  I'm currently looking to join a <span className="text-[#a362ff] font-normal">cross-functional</span> team
                </p>
                <p className="text-[17px] leading-[31px] text-white/70 font-light">
                  that values improving people's lives through accessible design
                </p>
              </div>

              {/* Skills Orbital System - Pixel Perfect Coordinates */}
              <div className="relative w-full mx-auto" style={{ maxWidth: '895px', height: '657px' }}>
                
                {/* Background Large Ellipse Glow - Layer 1 */}
                <div className="absolute pointer-events-none" style={{ left: '181px', top: '424px', width: '542px', height: '330px' }}>
                  <img src="http://localhost:3845/assets/9cc5348805406181f6667e60b0c32eb382cfcd4b.svg" alt="" className="w-full h-full opacity-20" />
                </div>

                {/* Elliptical Orbits - Exact Figma SVG Assets (3 concentric) */}
                <div className="absolute pointer-events-none" style={{ left: '0px', top: '457px', width: '881px', height: '269px' }}>
                  <img src="http://localhost:3845/assets/6cfc904ee6e423ebed3b531f3f77160418c6955d.svg" alt="" className="w-full h-full opacity-60" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '63px', top: '457px', width: '764px', height: '269px' }}>
                  <img src="http://localhost:3845/assets/0a4edc9470497ae873f3b349b99b4137c77e1a6b.svg" alt="" className="w-full h-full opacity-60" />
                </div>
                <div className="absolute pointer-events-none" style={{ left: '108px', top: '457px', width: '695px', height: '269px' }}>
                  <img src="http://localhost:3845/assets/92c115ddd932f425a0b136c6734049c007f90859.svg" alt="" className="w-full h-full opacity-60" />
                </div>

                {/* Connection Lines - Pixel Perfect Vector Assets from Figma */}
                {/* Vector 25 - Right line 1 (1059.57, 1999.5) -> relative (461.57, 182.5) */}
                <div className="absolute pointer-events-none" style={{ left: '461.57px', top: '182.5px', width: '122.427px', height: '277.5px' }}>
                  <img src="http://localhost:3845/assets/80dc1a6789e45c436abc9a8aa1b8505a21c758a2.svg" alt="" className="w-full h-full opacity-50" />
                </div>
                {/* Vector 26 - Right line 2 (1050.01, 2016.5) -> relative (452.01, 199.5) */}
                <div className="absolute pointer-events-none" style={{ left: '452.01px', top: '199.5px', width: '70.489px', height: '270px' }}>
                  <img src="http://localhost:3845/assets/83009e905d437a281285cbc57d87e602ac260e19.svg" alt="" className="w-full h-full opacity-50" />
                </div>
                {/* Vector 27 - Right line 3 (1034.5, 2015) -> relative (436.5, 198) */}
                <div className="absolute pointer-events-none" style={{ left: '436.5px', top: '198px', width: '34.5px', height: '291.5px' }}>
                  <img src="http://localhost:3845/assets/76422de6e9c2a67d408a7c0558b25564e24a51c3.svg" alt="" className="w-full h-full opacity-50" />
                </div>
                {/* Vector 28 - Left line 1 (901.5, 2009) -> relative (303.5, 192) - Flipped */}
                <div className="absolute pointer-events-none" style={{ left: '303.5px', top: '192px', width: '117.949px', height: '300.5px' }}>
                  <div style={{ transform: 'rotateX(180deg) scaleY(-1)', width: '100%', height: '100%' }}>
                    <img src="http://localhost:3845/assets/63c70eaaa2da78ce8c8d47e7af2dfcb822fd719a.svg" alt="" className="w-full h-full opacity-50" />
                  </div>
                </div>
                {/* Vector 29 - Left line 2 (963, 2009) -> relative (365, 192) - Flipped */}
                <div className="absolute pointer-events-none" style={{ left: '365px', top: '192px', width: '66.11px', height: '310px' }}>
                  <div style={{ transform: 'rotateX(180deg) scaleY(-1)', width: '100%', height: '100%' }}>
                    <img src="http://localhost:3845/assets/e49af5d54a52430296622d435974c4f9140f7c2a.svg" alt="" className="w-full h-full opacity-50" />
                  </div>
                </div>
                {/* Vector 30 - Left line 3 (1012, 2012) -> relative (414, 195) - Flipped */}
                <div className="absolute pointer-events-none" style={{ left: '414px', top: '195px', width: '21px', height: '313px' }}>
                  <div style={{ transform: 'rotateX(180deg) scaleY(-1)', width: '100%', height: '100%' }}>
                    <img src="http://localhost:3845/assets/0284d03b63849f7b1e1fee5b815f70bc5b5b1d00.svg" alt="" className="w-full h-full opacity-50" />
                  </div>
                </div>

                {/* Central Glow System - Exact Figma Positioning */}
                <div className="absolute pointer-events-none z-10" style={{ left: '292px', top: '385px', width: '306px', height: '275px' }}>
                  <img src="http://localhost:3845/assets/68427fb9e9ef6ec6bd71768ec86cedbe17e3331d.svg" alt="" className="w-full h-full opacity-90" />
                </div>
                
                {/* Central Purple Sphere - 180px exact */}
                <div className="absolute z-20" style={{ left: '350px', top: '448px', width: '180px', height: '180px' }}>
                  <img src="http://localhost:3845/assets/1c455b9131eb43ecadb5583ed161eb8803ec14a5.svg" alt="" className="w-full h-full" />
                  
                  {/* Sigma Symbol */}
                  <div className="absolute" style={{ left: '52px', top: '45px', width: '76px', height: '90px' }}>
                    <img src="http://localhost:3845/assets/1f35fa19d8f838d59188d8d5beefd902984f23bc.svg" alt="Σ" className="w-full h-full" />
                  </div>
                </div>

                {/* Skill Icon Circles - Exact Figma Positions */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none" style={{ width: '374px', height: '158px', marginLeft: '-192px', marginTop: '97px' }}>
                  {/* All circles as per Figma */}
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '0px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '55px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '110px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '168px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '275px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '330px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '220px', top: '0px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '28px', top: '61px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '140px', top: '61px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '195px', top: '61px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '254px', top: '61px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '309px', top: '61px', backgroundColor: '#2a2438' }} />
                  <div className="absolute size-[44px] rounded-full border border-[#3a3048]" style={{ left: '88px', top: '61px', backgroundColor: '#2a2438' }} />
                </div>

                {/* Icon Images - Exact Figma Positions & Assets */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none" style={{ marginLeft: '-192px' }}>
                  {/* Top Row Icons */}
                  <img src="http://localhost:3845/assets/9a2177cf9e77f144133bf282a08a2f575cad7370.png" alt="Figma" className="absolute" style={{ left: '12px', top: '105px', width: '21px', height: '28px' }} />
                  <img src="http://localhost:3845/assets/8ba2191814908615f8a46560f0b228b9c16d74a7.png" alt="React" className="absolute" style={{ left: '61px', top: '105px', width: '32px', height: '28px' }} />
                  <img src="http://localhost:3845/assets/1d85dc0163cf0b673490fafe2ad8edc7a3d2f1c6.png" alt="C" className="absolute" style={{ left: '116px', top: '104px', width: '32px', height: '31px' }} />
                  <img src="http://localhost:3845/assets/fe9c7a522e036854e90e86205ac6eefc4a56eb24.png" alt="Node" className="absolute mix-blend-lighten" style={{ left: '174px', top: '109px', width: '32px', height: '21px' }} />
                  <img src="http://localhost:3845/assets/29d4980b040e9114b9105f8075bb28be34920982.png" alt="Gatsby" className="absolute" style={{ left: '284px', top: '107px', width: '26px', height: '25px' }} />
                  <img src="http://localhost:3845/assets/22d870b52c1b2e38580a02283b6d51cdfe340d48.png" alt="JS" className="absolute" style={{ left: '339px', top: '107px', width: '26px', height: '25px' }} />
                  <img src="http://localhost:3845/assets/5a7488c39fdbc8ed144ae7231a0962c724fa3d51.png" alt="HTML" className="absolute" style={{ left: '229px', top: '105px', width: '26px', height: '25px' }} />
                  
                  {/* Second Row Icons */}
                  <img src="http://localhost:3845/assets/5499e0322a534a57153368be7326f9341e53fa75.png" alt="XD" className="absolute" style={{ left: '37px', top: '168px', width: '26px', height: '25px' }} />
                  <img src="http://localhost:3845/assets/e1604408f9ccbb55161fd96b1f344e755081131c.png" alt="Next" className="absolute mix-blend-lighten" style={{ left: '93px', top: '172px', width: '33px', height: '15px' }} />
                  <img src="http://localhost:3845/assets/d2b2f715bb8ef05a1df9f87172633bc33d9e4aa8.png" alt="Gatsby" className="absolute" style={{ left: '149px', top: '167px', width: '26px', height: '26px' }} />
                  <img src="http://localhost:3845/assets/9ea8af4596611af2ba3291a8163ffa8bf33607b3.png" alt="AI" className="absolute" style={{ left: '204px', top: '168px', width: '26px', height: '25px' }} />
                  <img src="http://localhost:3845/assets/50b0912347ff8ef6e5a4d99ba0c1e1149f85a3b9.png" alt="Express" className="absolute mix-blend-lighten" style={{ left: '257px', top: '175px', width: '39px', height: '11px' }} />
                  <img src="http://localhost:3845/assets/a0c19aec216c3d83909a6e5a62c4c8fa941c6067.png" alt="Jasmine" className="absolute mix-blend-lighten" style={{ left: '314px', top: '175px', width: '37px', height: '9px' }} />
                </div>

                {/* Side Icons - Exact Figma Positions with Hover Labels */}
                <SideIcon src="http://localhost:3845/assets/2d86bb246a92f8c4d6134a162094c98124bb4450.svg" label="LinkedIn" left="187px" top="535px" width="20px" height="20px" />
                <SideIcon src="http://localhost:3845/assets/18d23cbbdb9ef27de666d2a23ae30801792e1187.svg" label="Adobe AI" left="771px" top="512px" width="13px" height="15px" side="right" />
                <SideIcon src="http://localhost:3845/assets/e671f942076abebbe6ba7602b4d53815761004ec.svg" label="Design" left="82px" top="577px" width="16px" height="22px" />
                <SideIcon src="http://localhost:3845/assets/39a6b5af072a0fa89b805320694967921b711f97.svg" label="Security" left="766px" top="675px" width="11px" height="19px" side="right" />
                <SideIcon src="http://localhost:3845/assets/0bea70bffe4d002779eb6796d028f433bb5a9b76.svg" label="Configuration" left="826px" top="607px" width="14px" height="15px" side="right" />
                <SideIcon src="http://localhost:3845/assets/95c777833d4e3e61355fc583b452fd6b453b59d6.svg" label="Mobile" left="709px" top="512px" width="20px" height="11px" side="right" />
                <SideIcon src="http://localhost:3845/assets/107d57f2b99aa98266e1f8d7332e810a7f9c420d.svg" label="Code" left="120px" top="577px" width="14px" height="17px" />
                <SideIcon src="http://localhost:3845/assets/e723959be24f1c1fcac262015f87c4477fa3c663.svg" label="TypeScript" left="628px" top="646px" width="13px" height="20px" side="right" />
                <SideIcon src="http://localhost:3845/assets/7cf96929114accd16ef85a2f8b1be3cf22032bde.svg" label="UI/UX" left="128px" top="655px" width="21px" height="18px" />
                <SideIcon src="http://localhost:3845/assets/651889263c54ce49b584c98f5562e417af4670e9.svg" label="Target" left="771px" top="680px" width="12px" height="14px" side="right" />

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
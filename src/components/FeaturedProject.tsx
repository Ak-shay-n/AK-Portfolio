"use client"

import React from 'react';

interface FeaturedProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  alignment: 'left' | 'right';
}

// Icon assets from Figma
const iconGroup = "https://www.figma.com/api/mcp/asset/2948408b-6520-4fa1-b277-e7cc99ff0e2f";
const iconGroup1 = "https://www.figma.com/api/mcp/asset/681868d0-ccb6-4a2f-8a59-34d642c9aef6";

// Glass card texture from Figma
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/c6712a31-61fc-4068-9f81-7f4fac82efe0";

export default function FeaturedProject({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
  githubUrl,
  alignment
}: FeaturedProjectProps) {
  
  return (
    <section className="relative w-full overflow-visible py-20 px-4">
      {/* Background with gradient blobs */}
      <div className="absolute inset-0 bg-[#0a021a] overflow-hidden">
        {/* Purple gradient blobs matching Figma */}
        <div 
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, #9857d3 0%, transparent 70%)',
            width: '642px',
            height: '720px',
            top: alignment === 'left' ? '10%' : '50%',
            left: alignment === 'left' ? '55%' : '5%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-[1440px] mx-auto">
        <div className={`relative flex flex-col lg:flex-row items-start gap-0 ${alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content Column */}
          <div className={`relative w-full lg:w-[40%] z-10 pt-16 ${alignment === 'left' ? 'lg:pr-0' : 'lg:pl-0'} ${alignment === 'left' ? '' : 'lg:text-right lg:items-end lg:flex lg:flex-col'}`}>
            
            {/* Featured Project Tag */}
            <div className="mb-4">
              <p className="font-['Poppins',sans-serif] font-semibold text-[16px] text-[#9857d3] tracking-[0.32px] leading-normal m-0">
                Featured  Project
              </p>
            </div>

            {/* Project Title */}
            <div className="mb-24">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[34px] text-[#ccd6f6] tracking-[0.68px] leading-[1.2] m-0">
                {title}
              </h3>
            </div>

            {/* Tech Stack */}
            <div className={`flex flex-wrap gap-x-5 gap-y-2 mb-6 ${alignment === 'left' ? '' : 'lg:justify-end'}`}>
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="font-['Poppins',sans-serif] font-medium text-[14px] text-[#ccd6f6]/70 hover:text-[#ccd6f6] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interaction Icons */}
            <div className={`flex items-center gap-4 mb-8 lg:mb-0 ${alignment === 'left' ? '' : 'lg:justify-end'}`}>
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[31px] h-[31px] overflow-clip transition-transform duration-300 hover:scale-110"
                  aria-label="View on GitHub"
                >
                  <div className="absolute inset-[8.33%_12.5%_12.5%_8.33%]">
                    <div className="absolute inset-[8.33%_12.5%_12.5%_8.33%]">
                      <div className="absolute inset-[-8.15%]">
                        <img alt="" className="block max-w-none w-full h-full" src={iconGroup} />
                      </div>
                    </div>
                  </div>
                  <img alt="" className="block max-w-none w-full h-full" src={iconGroup1} />
                </a>
              )}
              {projectUrl && (
                <a 
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[31px] h-[31px] overflow-clip transition-transform duration-300 hover:scale-110"
                  aria-label="View Project"
                >
                  <div className="absolute inset-[8.33%_12.5%_12.5%_8.33%]">
                    <div className="absolute inset-[8.33%_12.5%_12.5%_8.33%]">
                      <div className="absolute inset-[-8.15%]">
                        <img alt="" className="block max-w-none w-full h-full" src={iconGroup} />
                      </div>
                    </div>
                  </div>
                  <img alt="" className="block max-w-none w-full h-full" src={iconGroup1} />
                </a>
              )}
            </div>
          </div>

          {/* Browser Mockup */}
          <div className={`relative w-full lg:w-[55%] z-20 ${alignment === 'left' ? '' : ''}`}>
            {/* Glass Description Card - Positioned to overlap edge of browser */}
            <div 
              className={`absolute hidden lg:block z-30 ${alignment === 'left' ? 'left-[-250px]' : 'right-[-250px]'}`} 
              style={{ 
                top: '60%',
                transform: 'translateY(-50%)'
              }}
            >
              <div 
                className="rounded-[14px] overflow-hidden relative"
                style={{
                  width: '669px',
                  height: '165px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Backdrop blur layer with texture */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-[14px]"
                  style={{
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)'
                  }}
                >
                  <div className="absolute inset-0 rounded-[14px] bg-white/[0.02]"></div>
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-[0.08] rounded-[14px]"
                    style={{
                      backdropFilter: 'blur(40px)',
                      WebkitBackdropFilter: 'blur(40px)',
                      backgroundImage: `url('${imgRectangle2}')`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '925.35px 462.68px',
                      backgroundPosition: 'top left'
                    }}
                  ></div>
                </div>
                
                {/* Description Text */}
                <div className="relative z-10 p-8 flex items-center h-full">
                  <div className="font-['Poppins',sans-serif] font-medium text-[18px] text-[#ccd6f6] leading-[1.5]">
                    <p className="m-0">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Browser Window */}
              <div className="relative rounded-[15px] overflow-hidden shadow-2xl bg-[#2b0b3a]">
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-gray-900/50 to-transparent z-10 flex items-center px-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
                
                {/* Project Screenshot */}
                <div className="relative pt-8">
                  <img 
                    src={imageUrl} 
                    alt={`${title} preview`}
                    className="w-full h-auto object-cover"
                    style={{ minHeight: '450px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only description card */}
          <div className="lg:hidden w-full mt-6">
            <div 
              className="rounded-[14px] overflow-hidden relative shadow-xl"
              style={{
                width: '100%',
                minHeight: '140px'
              }}
            >
              <div 
                className="absolute inset-0 pointer-events-none rounded-[14px]"
                style={{
                  backdropFilter: 'blur(40px)',
                  WebkitBackdropFilter: 'blur(40px)'
                }}
              >
                <div className="absolute inset-0 rounded-[14px] bg-white/[0.02]"></div>
                <div 
                  className="absolute inset-0 mix-blend-overlay opacity-[0.08] rounded-[14px]"
                  style={{
                    backdropFilter: 'blur(40px)',
                    WebkitBackdropFilter: 'blur(40px)',
                    backgroundImage: `url('${imgRectangle2}')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '925.35px 462.68px',
                    backgroundPosition: 'top left'
                  }}
                ></div>
              </div>
              
              <div className="relative z-10 p-6">
                <div className="font-['Poppins',sans-serif] font-medium text-[16px] text-[#ccd6f6] leading-[1.5]">
                  <p className="m-0">{description}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

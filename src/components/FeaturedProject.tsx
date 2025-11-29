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
    <section className="relative w-full overflow-visible py-20 px-3">
      {/* Background with gradient blobs */}
      <div className="absolute inset-0 bg-[#0a021a] overflow-hidden">
        {/* Smaller, more subtle gradient blobs */}
        <div 
          className="absolute rounded-full blur-xl opacity-12"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 55%)',
            width: '240px',
            height: '280px',
            top: alignment === 'left' ? '30%' : '70%',
            left: alignment === 'left' ? '70%' : '20%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-[900px] mx-auto">
        <div className={`relative flex flex-col lg:flex-row items-start gap-4 lg:gap-6 ${alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content Column */}
          <div className={`relative w-full lg:w-[42%] z-10 pt-3 lg:pt-6 ${alignment === 'left' ? 'lg:pr-3' : 'lg:pl-3'} ${alignment === 'left' ? '' : 'lg:text-right lg:items-end lg:flex lg:flex-col'}`}>
            
            {/* Featured Project Tag */}
            <div className="mb-1.5">
              <p className="font-['Poppins',sans-serif] font-semibold text-[12px] text-[#3b82f6] tracking-[0.24px] leading-normal m-0">
                Featured Project
              </p>
            </div>

            {/* Project Title */}
            <div className="mb-3">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[20px] lg:text-[24px] text-[#ccd6f6] tracking-[0.4px] leading-[1.05] m-0">
                {title}
              </h3>
            </div>

            {/* Tech Stack */}
            <div className={`flex flex-wrap gap-x-3 gap-y-1 mb-36 ${alignment === 'left' ? '' : 'lg:justify-end'}`}>
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="font-['Poppins',sans-serif] font-medium text-[11px] text-[#ccd6f6]/70 hover:text-[#ccd6f6] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interaction Icons */}
            <div className={`flex items-center gap-2.5 mb-4 lg:mb-0 ${alignment === 'left' ? '' : 'lg:justify-end'}`}>
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[24px] h-[24px] overflow-clip transition-transform duration-300 hover:scale-110"
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
                  className="relative w-[24px] h-[24px] overflow-clip transition-transform duration-300 hover:scale-110"
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
          <div className={`relative w-full lg:w-[58%] z-20 ${alignment === 'left' ? '' : ''}`}>
            {/* Glass Description Card - Positioned to overlap edge of browser */}
            <div 
              className={`absolute hidden lg:block z-30 ${alignment === 'left' ? 'left-[-420px]' : 'right-[-420px]'}`} 
              style={{ 
                top: '60%',
                transform: 'translateY(-50%)'
              }}
            >
              <div 
                className="rounded-[10px] overflow-hidden relative"
                style={{
                  width: '450px',
                  height: '120px',
                  boxShadow: '0 15px 35px -6px rgba(0, 0, 0, 0.3)'
                }}
              >
                {/* Backdrop blur layer with texture */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-[12px]"
                  style={{
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)'
                  }}
                >
                  <div className="absolute inset-0 rounded-[12px] bg-white/[0.03]"></div>
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-[0.06] rounded-[12px]"
                    style={{
                      backdropFilter: 'blur(30px)',
                      WebkitBackdropFilter: 'blur(30px)',
                      backgroundImage: `url('${imgRectangle2}')`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '700px 350px',
                      backgroundPosition: 'top left'
                    }}
                  ></div>
                </div>
                
                {/* Description Text */}
                <div className="relative z-10 p-6 flex items-center h-full">
                  <div className="font-['Poppins',sans-serif] font-medium text-[14px] text-[#ccd6f6] leading-[1.4]">
                    <p className="m-0">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Browser Window */}
              <div className="relative rounded-[10px] overflow-hidden shadow-lg bg-[#2b0b3a]">
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-900/60 to-transparent z-10 flex items-center px-2.5">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
                
                {/* Project Screenshot */}
                <div className="relative pt-6">
                  <img 
                    src={imageUrl} 
                    alt={`${title} preview`}
                    className="w-full h-auto object-cover"
                    style={{ minHeight: '220px', maxHeight: '260px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile-only description card */}
          <div className="lg:hidden w-full mt-3">
            <div 
              className="rounded-[10px] overflow-hidden relative shadow-lg"
              style={{
                width: '100%',
                minHeight: '120px'
              }}
            >
              <div 
                className="absolute inset-0 pointer-events-none rounded-[10px]"
                style={{
                  backdropFilter: 'blur(30px)',
                  WebkitBackdropFilter: 'blur(30px)'
                }}
              >
                <div className="absolute inset-0 rounded-[10px] bg-white/[0.03]"></div>
                <div 
                  className="absolute inset-0 mix-blend-overlay opacity-[0.06] rounded-[10px]"
                  style={{
                    backdropFilter: 'blur(30px)',
                    WebkitBackdropFilter: 'blur(30px)',
                    backgroundImage: `url('${imgRectangle2}')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '700px 350px',
                    backgroundPosition: 'top left'
                  }}
                ></div>
              </div>
              
              <div className="relative z-10 p-5">
                <div className="font-['Poppins',sans-serif] font-medium text-[14px] text-[#ccd6f6] leading-[1.4]">
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

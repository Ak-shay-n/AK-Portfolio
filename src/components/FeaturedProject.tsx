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

// Icon assets from Figma - EXACT URLs
const iconGroup = "https://www.figma.com/api/mcp/asset/0a5c21a4-8933-458c-ae26-ebd27a479d83";
const iconGroup1 = "https://www.figma.com/api/mcp/asset/a3f86830-da3d-4573-804e-6d5fc2ed3990";

// Glass card texture from Figma
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/f1f96b92-4012-4af6-adea-f825d112b25f";
const imgRectangle2 = "https://www.figma.com/api/mcp/asset/afdd9acf-2dea-4f99-8438-a2d5c4f7b39a";

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
    <section className="relative w-full overflow-hidden" style={{ padding: '60px 20px' }}>
      {/* Figma Background */}
      <div className="absolute inset-0 bg-[#0a021a]"></div>
      
      {/* Content Container */}
      <div className="relative max-w-[1200px] mx-auto px-3">
        <div className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12 ${alignment === 'right' ? 'lg:grid-flow-dense' : ''}`}>
          
          {/* Left Column: Text Content */}
          <div className={`relative ${alignment === 'right' ? 'lg:col-start-2' : ''}`}>
            
            {/* Featured Project Tag */}
            <div className="mb-2">
              <p className="font-['Poppins',sans-serif] font-semibold text-[11px] text-[#9857d3] tracking-[0.22px] leading-normal m-0 uppercase">
                Featured Project
              </p>
            </div>

            {/* Project Title */}
            <div className="mb-3">
              <p className="font-['Poppins',sans-serif] font-semibold text-[22px] text-[#ccd6f6] tracking-[0.44px] leading-[1.2] m-0">
                {title}
              </p>
            </div>

            {/* Glass Description Card */}
            <div className="relative mb-3">
              <div 
                className="rounded-[10px] overflow-hidden relative"
                style={{
                  width: '100%',
                  maxWidth: '480px',
                  height: 'auto',
                  minHeight: '110px'
                }}
              >
                {/* Backdrop blur layer */}
                <div 
                  className="absolute inset-0 pointer-events-none rounded-[10px]"
                  style={{
                    backdropFilter: 'blur(32px)',
                    WebkitBackdropFilter: 'blur(32px)'
                  }}
                >
                  <div className="absolute inset-0 rounded-[10px] bg-black/5"></div>
                  <div 
                    className="absolute inset-0 mix-blend-overlay opacity-[0.08] rounded-[10px]"
                    style={{
                      backdropFilter: 'blur(32px)',
                      WebkitBackdropFilter: 'blur(32px)',
                      backgroundImage: `url('${imgRectangle2}')`,
                      backgroundRepeat: 'repeat',
                      backgroundSize: '925.35px 462.68px',
                      backgroundPosition: 'top left'
                    }}
                  ></div>
                </div>
                
                {/* Description Text */}
                <div className="relative z-10 p-5">
                  <div className="font-['Poppins',sans-serif] font-medium text-[13px] text-[#ccd6f6] leading-[1.6]">
                    <p className="m-0">{description}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="font-['Poppins',sans-serif] font-medium text-[10px] text-[#ccd6f6]/65 hover:text-[#ccd6f6] transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interaction Icons */}
            <div className="flex items-center gap-3">
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-[22px] h-[22px] overflow-clip transition-transform duration-300 hover:scale-110"
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
                  className="relative w-[22px] h-[22px] overflow-clip transition-transform duration-300 hover:scale-110"
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

          {/* Right Column: Browser Mockup */}
          <div className={`relative ${alignment === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
            <div className="relative group">
              {/* White Browser Window */}
              <div className="relative bg-white rounded-[12px] overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.01]">
                {/* Browser Top Bar */}
                <div className="bg-gradient-to-b from-gray-50 to-white h-8 flex items-center px-3 border-b border-gray-200">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                
                {/* Project Screenshot */}
                <div className="relative bg-[#2b0b3a]">
                  <img 
                    src={imageUrl} 
                    alt={`${title} preview`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Responsive Overrides */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section {
            padding: 50px 18px !important;
          }
        }
        @media (max-width: 768px) {
          section {
            padding: 35px 14px !important;
          }
        }
      `}</style>
    </section>
  );
}

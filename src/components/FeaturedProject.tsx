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
    <section className="relative w-full py-22 px-4">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div 
          className="absolute"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)',
            width: '100%',
            height: '100%',
            filter: 'blur(40px)'
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative max-w-[1000px] mx-auto">
        <div className={`relative flex flex-col lg:flex-row items-start gap-5 lg:gap-8 ${alignment === 'right' ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Text Content Column */}
          <div className={`relative w-full lg:w-[42%] z-10 pt-3 lg:pt-7 ${alignment === 'left' ? 'lg:pr-4' : 'lg:pl-4'} ${alignment === 'left' ? '' : 'lg:text-right lg:items-end lg:flex lg:flex-col'}`}>
            
            {/* Featured Project Tag */}
            <div className="mb-2">
              <p className="font-['Poppins',sans-serif] font-semibold text-[13px] text-[#3b82f6] tracking-[0.24px] leading-normal m-0">
                Featured Project
              </p>
            </div>

            {/* Project Title */}
            <div className="mb-4">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[24px] lg:text-[28px] text-[#ccd6f6] tracking-[0.4px] leading-[1.1] m-0">
                {title}
              </h3>
            </div>

            {/* Tech Stack */}
            <div className={`flex flex-wrap gap-x-4 gap-y-2 mb-7 ${alignment === 'left' ? '' : 'lg:justify-end'}`}>
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="font-['Poppins',sans-serif] font-normal text-[16px] text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Interaction Icons */}
            <div className={`flex items-center gap-3 mb-4 lg:mb-0 ${alignment === 'left' ? '' : 'lg:justify-end'}`}>
              {githubUrl && (
                <a 
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-300"
                  aria-label="View on GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
              {projectUrl && (
                <a 
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#3b82f6] transition-colors duration-300"
                  aria-label="View Project"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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
                className="rounded-[11px] overflow-hidden relative"
                style={{
                  width: '480px',
                  height: '135px',
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
                  <div className="font-['Poppins',sans-serif] font-medium text-[15px] text-[#ccd6f6] leading-[1.5]">
                    <p className="m-0">{description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* Browser Window */}
              <div className="relative rounded-[11px] overflow-hidden shadow-xl bg-[#0a1929]">
                {/* Browser Chrome */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-900/60 to-transparent z-10 flex items-center px-3">
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
                  </div>
                </div>
                
                {/* Project Screenshot */}
                <div className="relative pt-6 overflow-hidden">
                  <img 
                    src={imageUrl} 
                    alt={`${title} preview`}
                    className="w-full h-auto object-cover transition-all duration-500 ease-out hover:scale-105 hover:brightness-110 hover:contrast-105 cursor-pointer"
                    style={{ minHeight: '250px', maxHeight: '290px' }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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

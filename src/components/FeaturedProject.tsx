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
    <div className="relative w-full h-full group overflow-hidden rounded-[12px]">
      {/* Blue Gradient Background */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 80%)',
            filter: 'blur(40px)'
          }}
        />
      </div>

      {/* Glass Card Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 rounded-[12px]"
          style={{
            backdropFilter: 'blur(30px)',
            WebkitBackdropFilter: 'blur(30px)'
          }}
        >
          <div className="absolute inset-0 rounded-[12px] bg-white/[0.02] border border-white/[0.05]"></div>
          <div 
            className="absolute inset-0 mix-blend-overlay opacity-[0.04] rounded-[12px]"
            style={{
              backgroundImage: `url('${imgRectangle2}')`,
              backgroundRepeat: 'repeat',
              backgroundSize: '700px 350px',
              backgroundPosition: 'top left'
            }}
          ></div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col p-4 lg:p-5">
        {/* Browser Mockup - Top Section */}
        <div className="relative flex-shrink-0 mb-4">
          <div className="relative rounded-[8px] overflow-hidden shadow-xl bg-[#0a1929] group-hover:shadow-blue-500/20 transition-shadow duration-500">
            {/* Browser Chrome */}
            <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-gray-900/70 to-transparent z-10 flex items-center px-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500/80"></div>
              </div>
            </div>
            
            {/* Project Screenshot */}
            <div className="relative pt-5">
              <img 
                src={imageUrl} 
                alt={`${title} preview`}
                className="w-full h-[180px] object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Text Content - Bottom Section */}
        <div className="flex-1 flex flex-col">
          {/* Featured Tag */}
          <div className="mb-1">
            <p className="font-['Poppins',sans-serif] font-semibold text-[11px] text-[#3b82f6] tracking-[0.24px] leading-normal m-0">
              Featured Project
            </p>
          </div>

          {/* Project Title */}
          <div className="mb-2">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] lg:text-[20px] text-[#ccd6f6] tracking-[0.3px] leading-[1.2] m-0 group-hover:text-[#60A5FA] transition-colors duration-300">
              {title}
            </h3>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 mb-3">
            {technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index}
                className="font-['Poppins',sans-serif] font-normal text-[13px] text-[#8892b0] hover:text-[#3b82f6] transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="flex-1 mb-3">
            <p className="font-['Poppins',sans-serif] font-normal text-[13px] text-[#8892b0] leading-[1.5] m-0 line-clamp-3">
              {description}
            </p>
          </div>

          {/* Interaction Icons - Bottom */}
          <div className="flex items-center gap-3 mt-auto">
            {githubUrl && (
              <a 
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892b0] hover:text-[#3b82f6] transition-colors duration-300"
                aria-label="View on GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            )}
            {projectUrl && (
              <a 
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8892b0] hover:text-[#3b82f6] transition-colors duration-300"
                aria-label="View Project"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

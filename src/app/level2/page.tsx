"use client"

import React from "react";
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import FeaturedProject from '@/components/FeaturedProject';

export default function Level2() {
  const [isClient, setIsClient] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Featured Projects Data
  const featuredProjects = [
    {
      title: "Android Espion",
      description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      imageUrl: "https://www.figma.com/api/mcp/asset/c13e64c0-d645-4a1e-a979-f8b39928cc08",
      technologies: ["React", "Spotify API", "Node.js", "Express", "Chart.js", "OAuth 2.0"],
      projectUrl: "#",
      githubUrl: "#",
      alignment: "left" as const
    },
    {
      title: "Sentra AI",
      description: "Advanced network vulnerability assessment tool with real-time monitoring capabilities. Detects security threats, analyzes network traffic patterns, and provides comprehensive security reports. Features automated scanning schedules and customizable alert systems for enterprise environments.",
      imageUrl: "https://www.figma.com/api/mcp/asset/c13e64c0-d645-4a1e-a979-f8b39928cc08",
      technologies: ["Python", "Nmap", "Scapy", "Flask", "SQLAlchemy", "Redis"],
      projectUrl: "#",
      githubUrl: "#",
      alignment: "right" as const
    },
    {
      title: "Blockchain Voting DApp",
      description: "Decentralized voting system built on Ethereum blockchain ensuring transparent and tamper-proof elections. Features smart contract-based vote verification, anonymous voting through zero-knowledge proofs, and real-time results tracking with complete audit trails.",
      imageUrl: "https://www.figma.com/api/mcp/asset/c13e64c0-d645-4a1e-a979-f8b39928cc08",
      technologies: ["Solidity", "Web3.js", "IPFS", "MetaMask", "Truffle", "React"],
      projectUrl: "#",
      githubUrl: "#",
      alignment: "left" as const
    },
    {
      title: "Decepticon AI",
      description: "Intelligent code review assistant that analyzes pull requests using machine learning. Identifies bugs, security vulnerabilities, and suggests performance optimizations. Integrates seamlessly with GitHub and GitLab for automated code quality checks.",
      imageUrl: "https://www.figma.com/api/mcp/asset/c13e64c0-d645-4a1e-a979-f8b39928cc08",
      technologies: ["TypeScript", "OpenAI API", "Next.js", "PostgreSQL", "Docker", "GitHub API"],
      projectUrl: "#",
      githubUrl: "#",
      alignment: "right" as const
    }
  ];

  useEffect(() => {
    // Mouse tracking: only update CSS variables on the content container
    const handleMouseMove = (e: MouseEvent) => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        contentRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        contentRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);



  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <div className="text-cyan-400 text-2xl font-mono">Initializing Level 2...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-x-hidden">

      {/* Navigation Header */}
      <Header />

      {/* Featured Projects Section */}
      <section className="relative z-10" ref={contentRef} tabIndex={-1}>
            
        {/* Section Header */}
        <div className="relative py-20 text-center">
          <div className="relative z-10 container mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#60A5FA] to-white bg-clip-text text-transparent">
              Projects
            </h2>
          </div>
        </div>

        {/* Featured Projects - Full Width Sections */}
        <div>
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 translate-y-12"
              style={{ 
                animationDelay: `${index * 200}ms`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <FeaturedProject
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                technologies={project.technologies}
                projectUrl={project.projectUrl}
                githubUrl={project.githubUrl}
                alignment={project.alignment}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

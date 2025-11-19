'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle scroll for navbar resize
  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition <= 50) {
        setIsScrolled(false);
      } else {
        setIsScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isClient]);

  return (
    <nav className="fixed top-4 left-1/2 z-40" style={{ transform: 'translateX(-50%)' }}>
      <div className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-full transition-all duration-300 ease-out ${
        isScrolled 
          ? 'w-[85vw] max-w-4xl px-5 py-3'
          : 'w-[95vw] max-w-6xl px-8 py-4'
      }`}>
        <div className="flex items-center justify-between">
          <Link href="/" className={`group relative flex items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'w-8 h-8' 
              : 'w-9 h-9'
          }`}>
            <Image 
              src="/logo-icon.svg" 
              alt="Logo" 
              width={36}
              height={36}
              className="w-full h-full object-contain grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
              style={{
                filter: 'grayscale(100%) brightness(2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%) brightness(1) drop-shadow(0 0 10px rgba(34, 197, 94, 0.8)) hue-rotate(90deg) saturate(150%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%) brightness(2)';
              }}
            />
          </Link>
          <div className={`hidden md:flex items-center gap-2 transition-all duration-300 ${
            isScrolled 
              ? 'gap-2' 
              : 'gap-3'
          }`}>
            <Link href="/" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}>
              Home
            </Link>
            <Link href="/level1" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}>
              About Me
            </Link>
            <Link href="/level2" className={`text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium px-4 py-2 rounded-full ${
              isScrolled ? 'text-xs' : 'text-sm'
            }`}>
              Projects
            </Link>
            <Link href="/level3" className={`bg-white text-black rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-200 font-semibold shadow-lg ${
              isScrolled 
                ? 'px-5 py-2 text-xs' 
                : 'px-6 py-2 text-sm'
            }`}>
              Wanna Talk to me ?
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <svg className={`w-5 h-5 transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 space-y-2">
            <Link 
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
            >
              Home
            </Link>
            <Link 
              href="/level1"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
            >
              About Me
            </Link>
            <Link 
              href="/level2"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-left text-white/80 hover:text-white transition-all duration-300 text-base font-medium px-4 py-3 rounded-xl hover:bg-white/10"
            >
              Portfolio
            </Link>
            <div className="pt-2">
              <Link 
                href="/level3" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block bg-white text-black px-4 py-3 rounded-xl hover:bg-white/90 transition-all duration-300 text-base font-medium text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

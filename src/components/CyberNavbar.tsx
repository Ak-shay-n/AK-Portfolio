"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export function CyberNavbar() {
  const navItems = [
    {
      name: "HOME",
      link: "#home",
    },
    {
      name: "LEVELS",
      link: "#levels",
    },
    {
      name: "CONTACT",
      link: "/level3",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="bg-black/90 backdrop-blur-md border-b border-cyan-400/30 cyber-navbar">
        {/* Desktop Navigation */}
        <NavBody className="px-6 py-4">
          <div className="text-2xl font-bold text-cyan-400 font-mono hover:text-cyan-300 transition-colors">
            [AKSHAY_KUMAR]
          </div>
          <NavItems 
            items={navItems} 
            className="hidden md:flex space-x-8"
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="hidden md:flex items-center gap-4">
            <Link href="/level1">
              <NavbarButton variant="primary" className="bg-green-400/20 text-green-400 border border-green-400/50 hover:bg-green-400/30 hover:border-green-400 font-mono transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25">
                [ BEGIN INFILTRATION ]
              </NavbarButton>
            </Link>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="bg-black/95 backdrop-blur-md border-b border-cyan-400/30">
          <MobileNavHeader className="px-6 py-4">
            <div className="text-xl font-bold text-cyan-400 font-mono">
              [AKSHAY_KUMAR]
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)}
            className="bg-black/98 backdrop-blur-md border-t border-cyan-400/20"
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-green-400 hover:text-cyan-400 transition-all duration-300 font-mono py-4 px-6 block border-b border-gray-800/50 last:border-b-0 hover:bg-green-400/5 hover:shadow-inner"
              >
                <span className="block hover:translate-x-1 transition-transform">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 p-6 border-t border-gray-800/50">
              <Link href="/level1">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full bg-green-400/20 text-green-400 border border-green-400/50 hover:bg-green-400/30 hover:border-green-400 font-mono transition-all duration-300 hover:shadow-lg hover:shadow-green-400/25"
                >
                  [ BEGIN INFILTRATION ]
                </NavbarButton>
              </Link>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}

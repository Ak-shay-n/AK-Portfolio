'use client';

import { useEffect, useRef, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: string | React.ReactNode;
  scrollContainerRef?: React.RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
  pinContainer?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  pinContainer = true
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapperRef = useRef<HTMLDivElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    // Split into individual characters while preserving spaces
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return <span key={index} className="space"> </span>;
      }
      return (
        <span className="letter " key={index}>
          {char}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    const pinWrapper = pinWrapperRef.current;
    if (!el || !pinWrapper) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    const letterElements = el.querySelectorAll('.letter');
    const letterCount = letterElements.length;

    // Set initial state immediately
    gsap.set(letterElements, {
      color: 'rgba(255, 255, 255, 0.10)',
      willChange: 'color'
    });

    // Find the parent section to pin
    const parentSection = pinWrapper.closest('section');
    
    if (pinContainer && parentSection) {
      // Pin the ENTIRE SECTION - NOT just the text
      const pinTrigger = ScrollTrigger.create({
        trigger: parentSection,
        scroller,
        start: 'top top',
        end: `+=${letterCount * 20}`,
        pin: true,
        pinSpacing: true,
        scrub: true,
        anticipatePin: 1,
        markers: false,
        id: 'section-pin'
      });

      // Color animation from transparent to white - letter by letter
      gsap.to(
        letterElements,
        {
          color: 'rgba(255, 255, 255, 1)',
          stagger: {
            each: 0.008,
            from: 'start'
          },
          ease: 'none',
          scrollTrigger: {
            trigger: parentSection,
            scroller,
            start: 'top top',
            end: `+=${letterCount * 20}`,
            scrub: 0.3,
            markers: false,
            id: 'color-animation'
          }
        }
      );

      // Optional blur effect
      if (enableBlur) {
        gsap.set(letterElements, {
          filter: `blur(${blurStrength}px)`
        });

        gsap.to(
          letterElements,
          {
            filter: 'blur(0px)',
            stagger: {
              each: 0.008,
              from: 'start'
            },
            ease: 'none',
            scrollTrigger: {
              trigger: parentSection,
              scroller,
              start: 'top top',
              end: `+=${letterCount * 20}`,
              scrub: 0.3,
              id: 'blur-animation'
            }
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength, pinContainer]);

  return (
    <div ref={pinWrapperRef} className={`scroll-reveal-wrapper ${containerClassName}`}>
      <div ref={containerRef} className="scroll-reveal">
        <p className={`scroll-reveal-text ${textClassName}`}>{splitText}</p>
      </div>
    </div>
  );
};

export default ScrollReveal;

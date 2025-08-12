import { useEffect, useRef, useState } from 'react';

interface FloatingParticlesProps {
  count?: number;
  maxSize?: number;
  minSize?: number;
  speed?: number;
}

export default function FloatingParticles({ 
  count = 100, 
  maxSize = 3, 
  minSize = 1, 
  speed = 0.5 
}: FloatingParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  // Set client state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run if we're on the client side
    if (!isClient) return;

    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    const particles: HTMLDivElement[] = [];
    const colors = ['#00ff41', '#00d4ff', '#b300ff', '#ff073a', '#ffff00'];

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * (maxSize - minSize) + minSize;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        box-shadow: 0 0 ${size * 3}px ${color};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        pointer-events: none;
        z-index: 1;
        opacity: 0.6;
        animation: particleFloat${i} ${6 + Math.random() * 8}s ease-in-out infinite;
      `;

      // Create unique keyframes for each particle
      const keyframes = `
        @keyframes particleFloat${i} {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
            opacity: 0.3;
          }
          25% { 
            transform: translate(${(Math.random() - 0.5) * 100}px, ${(Math.random() - 0.5) * 100}px) scale(${1 + Math.random()}); 
            opacity: 1;
          }
          50% { 
            transform: translate(${(Math.random() - 0.5) * 80}px, ${(Math.random() - 0.5) * 80}px) scale(${0.5 + Math.random()}); 
            opacity: 0.7;
          }
          75% { 
            transform: translate(${(Math.random() - 0.5) * 120}px, ${(Math.random() - 0.5) * 120}px) scale(${1.2 + Math.random()}); 
            opacity: 1;
          }
        }
      `;

      // Add keyframes to head
      const style = document.createElement('style');
      style.textContent = keyframes;
      document.head.appendChild(style);

      particles.push(particle);
      container.appendChild(particle);
    }

    return () => {
      // Cleanup particles and styles
      particles.forEach(particle => {
        particle.remove();
      });
      // Remove added styles
      const styles = document.head.querySelectorAll('style');
      styles.forEach(style => {
        if (style.textContent?.includes('particleFloat')) {
          style.remove();
        }
      });
    };
  }, [isClient, count, maxSize, minSize, speed]);

  // Don't render until client-side
  if (!isClient) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    />
  );
}
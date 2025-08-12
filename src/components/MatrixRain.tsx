import { useEffect, useRef, useState } from 'react';

interface MatrixRainProps {
  intensity?: number;
  speed?: number;
  fontSize?: number;
}

export default function MatrixRain({ 
  intensity = 0.8, 
  speed = 50, 
  fontSize = 14 
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Set client state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run if we're on the client side
    if (!isClient) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = '01';
    const charArray = chars.split('');

    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height;
    }

    let lastTime = 0;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < speed) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px Courier New`;
      ctx.textAlign = 'center';

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Color gradient based on position
        const opacity = Math.random() * 0.5 + 0.5;
        
        // Leading character (brightest)
        if (drops[i] * fontSize < canvas.height) {
          ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
          ctx.shadowColor = '#00ff41';
          ctx.shadowBlur = 15;
          ctx.fillText(char, i * fontSize + fontSize/2, drops[i] * fontSize);
        }

        // Reset drop
        if (drops[i] * fontSize > canvas.height && Math.random() > 1 - intensity) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isClient, intensity, speed, fontSize]);

  // Don't render until client-side
  if (!isClient) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20"
      style={{ zIndex: -3 }}
    />
  );
}
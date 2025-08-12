import { useEffect, useState } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Set client state after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only run if we're on the client side
    if (!isClient) return;

    let timeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Clear existing timeout
      clearTimeout(timeout);
      
      // Set mouse as not moving after 100ms of no movement
      timeout = setTimeout(() => setIsMoving(false), 100);

      // Update CSS custom properties for cursor effects
      document.documentElement.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
    };

    const handleMouseEnter = () => setIsMoving(true);
    const handleMouseLeave = () => setIsMoving(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, [isClient]);

  // Don't render until client-side
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Cursor Core */}
        <div className={`
          w-2 h-2 bg-cyber-green rounded-full transition-all duration-200
          ${isMoving ? 'scale-150 shadow-lg' : 'scale-100'}
        `} 
        style={{
          boxShadow: isMoving ? '0 0 20px #00ff41' : '0 0 10px #00ff41',
        }} />
        
        {/* Cursor Ring */}
        <div className={`
          absolute top-1/2 left-1/2 w-8 h-8 border border-cyber-green rounded-full
          transition-all duration-300 ease-out
          ${isMoving ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}
        `}
        style={{
          transform: 'translate(-50%, -50%)',
        }} />
      </div>

      {/* Mouse Glow Effect */}
      <div
        className="fixed pointer-events-none z-40 transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)',
          opacity: isMoving ? 0.3 : 0,
        }}
      >
        <div 
          className="w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 65, 0.1) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </>
  );
}
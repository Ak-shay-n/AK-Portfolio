import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Header() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    
    // Update time every second
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        timeZone: 'UTC'
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const navItems = [
    { href: '/', label: '🏠 HOME', icon: '>' },
    { href: '/level1', label: '🔓 ACCESS', icon: '>' },
    { href: '/level2', label: '🧩 DECRYPT', icon: '>' },
    { href: '/level3', label: '🛠️ PATCH', icon: '>' },
    { href: '/complete', label: '🏁 COMPLETE', icon: '>' }
  ];

  const playClickSound = () => {
    const audio = document.getElementById('clickSound') as HTMLAudioElement;
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {}); // Ignore autoplay errors
    }
  };

  return (
    <>
      {/* Cyber Grid Background */}
      <div className="cyber-grid"></div>
      
      <header className="relative z-20 bg-gradient-to-r from-black via-cyber-gray-900 to-black border-b-2 border-cyber-green shadow-cyber-green font-cyber">
        {/* Top Status Bar */}
        <div className="border-b border-cyber-green/30 px-6 py-2 flex justify-between items-center text-xs">
          <div className="flex items-center space-x-4">
            <span className="cyber-text-primary">SYSTEM STATUS:</span>
            <span className="text-cyber-green pulse-green">● ONLINE</span>
            <span className="cyber-text-secondary">UTC: {currentTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="cyber-text-secondary">SECURITY LEVEL:</span>
            <span className="text-cyber-red font-bold">MAXIMUM</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <div className="glitch cyber-text-primary text-xl font-bold" data-text="AKSHAY.sys">
                AKSHAY.sys
              </div>
            </div>

            {/* Navigation Links */}
            <div className={`flex space-x-1 transition-all duration-1000 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
              {navItems.map((item, index) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={playClickSound}
                    className={`
                      cyber-btn relative px-4 py-2 text-sm transition-all duration-300
                      ${isActive 
                        ? 'border-cyber-blue text-cyber-blue shadow-cyber-blue' 
                        : 'border-cyber-green text-cyber-green hover:border-cyber-blue hover:text-cyber-blue hover:shadow-cyber-blue'
                      }
                      fade-in-delay-${index + 1}
                    `}
                  >
                    <span className="flex items-center space-x-2">
                      <span className="text-xs opacity-60">{item.icon}</span>
                      <span>{item.label}</span>
                    </span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-blue shadow-cyber-blue animate-pulse"></div>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Connection Status */}
            <div className="flex items-center space-x-2 text-xs">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse-green"></div>
              <span className="cyber-text-primary">CONNECTED</span>
            </div>
          </div>
        </nav>

        {/* Scanning Line Effect */}
        <div className="scan-line h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>
      </header>
    </>
  );
}

import { FaGithub, FaLinkedin, FaEnvelope, FaTerminal, FaShieldAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState('');
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
      setUptime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatUptime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const socialLinks = [
    {
      href: "https://github.com/Ak-shay-n",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-cyber-green hover:shadow-cyber-green",
      username: "@Ak-shay-n"
    },
    {
      href: "https://www.linkedin.com/in/akshay-kumar-b-643082290/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-cyber-blue hover:shadow-cyber-blue",
      username: "akshay-kumar-b"
    },
    {
      href: "mailto:personalakshay17@gmail.com",
      icon: FaEnvelope,
      label: "Email",
      color: "hover:text-cyber-red hover:shadow-cyber-red",
      username: "personalakshay17@gmail.com"
    }
  ];

  return (
    <footer className="relative z-10 bg-gradient-to-t from-black via-cyber-gray-900 to-black border-t-2 border-cyber-green font-cyber">
      {/* Scanning Line Effect */}
      <div className="scan-line h-0.5 bg-gradient-to-r from-transparent via-cyber-green to-transparent"></div>
      
      <div className="container mx-auto px-6 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* System Info */}
          <div className="space-y-4">
            <h3 className="flex items-center space-x-2 text-cyber-green font-bold">
              <FaTerminal className="text-lg" />
              <span>SYSTEM INFO</span>
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <span className="text-cyber-green flex items-center">
                  <div className="w-2 h-2 bg-cyber-green rounded-full mr-2 animate-pulse"></div>
                  ONLINE
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Uptime:</span>
                <span className="text-cyber-blue font-mono">{formatUptime(uptime)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Local Time:</span>
                <span className="text-cyber-purple font-mono">{currentTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Security:</span>
                <span className="text-cyber-red flex items-center">
                  <FaShieldAlt className="mr-1" />
                  MAXIMUM
                </span>
              </div>
            </div>
          </div>

          {/* Contact Matrix */}
          <div className="space-y-4">
            <h3 className="text-cyber-green font-bold">CONTACT_MATRIX</h3>
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`
                    group flex items-center space-x-3 p-2 rounded-lg
                    border border-gray-700 hover:border-cyber-green
                    transition-all duration-300 ${link.color}
                    fade-in-delay-${index + 1}
                  `}
                  aria-label={link.label}
                >
                  <link.icon className="text-xl transition-all duration-300 group-hover:scale-110" />
                  <div className="flex-1">
                    <div className="text-sm font-bold">{link.label}</div>
                    <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                      {link.username}
                    </div>
                  </div>
                  <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quote Terminal */}
          <div className="space-y-4">
            <h3 className="text-cyber-green font-bold">MOTIVATION.LOG</h3>
            <div className="terminal p-4 rounded-lg">
              <div className="text-cyber-green text-sm leading-relaxed">
                <div className="text-cyber-blue mb-2">$ cat motivation.txt</div>
                <div className="typewriter-slow">
                  "Stay curious. Stay secure. 
                  <br />Keep learning, keep building,
                  <br />keep breaking boundaries."
                </div>
                <div className="text-cyber-blue mt-3 flex items-center">
                  <span>akshay@portfolio:~$</span>
                  <span className="animate-blink ml-1">▋</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cyber-green/30 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <span className="text-cyber-green">©</span> 2024 
              <span className="text-cyber-blue mx-1">AKSHAY KUMAR B</span>
              <span className="text-gray-400">| All systems operational</span>
            </div>

            {/* Tech Stack */}
            <div className="flex items-center space-x-4 text-xs">
              <span className="text-gray-400">Powered by:</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-cyber-green/10 border border-cyber-green/30 rounded text-cyber-green">
                  Next.js
                </span>
                <span className="px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/30 rounded text-cyber-blue">
                  Tailwind
                </span>
                <span className="px-2 py-1 bg-cyber-purple/10 border border-cyber-purple/30 rounded text-cyber-purple">
                  TypeScript
                </span>
              </div>
            </div>

            {/* Version */}
            <div className="text-sm text-gray-400">
              <span className="text-cyber-green">v2.1.0</span>
              <span className="mx-2">|</span>
              <span className="text-cyber-blue">BUILD_STABLE</span>
            </div>
          </div>
        </div>

        {/* Matrix Effect Lines */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent animate-pulse"></div>
      </div>
    </footer>
  );
}

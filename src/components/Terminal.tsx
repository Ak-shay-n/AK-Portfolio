import { useState, useEffect, useRef } from 'react';

interface TerminalProps {
  commands?: string[];
  autoPlay?: boolean;
  showPrompt?: boolean;
  className?: string;
}

export default function Terminal({ 
  commands = [], 
  autoPlay = false, 
  showPrompt = true,
  className = ""
}: TerminalProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedCommands, setDisplayedCommands] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (autoPlay && commands.length > 0) {
      startTyping();
    }
  }, [autoPlay, commands]);

  const startTyping = () => {
    if (currentLine < commands.length) {
      setIsTyping(true);
      typeCommand(commands[currentLine]);
    }
  };

  const typeCommand = (command: string) => {
    if (currentChar < command.length) {
      setTimeout(() => {
        setDisplayedCommands(prev => {
          const newCommands = [...prev];
          if (newCommands[currentLine]) {
            newCommands[currentLine] = command.substring(0, currentChar + 1);
          } else {
            newCommands[currentLine] = command.substring(0, currentChar + 1);
          }
          return newCommands;
        });
        setCurrentChar(prev => prev + 1);
      }, Math.random() * 50 + 25); // Random typing speed
    } else {
      // Command complete, move to next line
      setTimeout(() => {
        setCurrentLine(prev => prev + 1);
        setCurrentChar(0);
        setIsTyping(false);
        
        // Continue to next command
        if (currentLine + 1 < commands.length) {
          setTimeout(() => startTyping(), 1000);
        }
      }, 500);
    }
  };

  useEffect(() => {
    if (isTyping && currentChar < commands[currentLine]?.length) {
      typeCommand(commands[currentLine]);
    }
  }, [currentChar, isTyping]);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedCommands]);

  return (
    <div className={`terminal bg-black border border-cyber-green rounded-lg p-4 font-cyber text-sm ${className}`}>
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-cyber-green/30">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-cyber-red rounded-full"></div>
          <div className="w-3 h-3 bg-cyber-yellow rounded-full"></div>
          <div className="w-3 h-3 bg-cyber-green rounded-full animate-pulse-green"></div>
        </div>
        <span className="text-cyber-green text-xs">CYBER-TERMINAL v2.1.0</span>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-cyber-green scrollbar-track-transparent"
      >
        {/* Welcome Message */}
        <div className="mb-4">
          <div className="text-cyber-green">
            <span className="text-cyber-blue">╭─</span>
            <span className="text-cyber-green">[</span>
            <span className="text-cyber-blue">akshay@cyber-portfolio</span>
            <span className="text-cyber-green">]</span>
            <span className="text-cyber-blue">─[</span>
            <span className="text-cyber-purple">~</span>
            <span className="text-cyber-blue">]</span>
          </div>
          <div className="text-cyber-blue">
            <span className="text-cyber-blue">╰─</span>
            <span className="text-cyber-red">$</span>
            <span className="text-cyber-green ml-1">Welcome to Cyber Portfolio Terminal</span>
          </div>
        </div>

        {/* Command History */}
        {displayedCommands.map((command, index) => (
          <div key={index} className="mb-2">
            {showPrompt && (
              <div className="text-cyber-green flex items-center">
                <span className="text-cyber-blue">╭─</span>
                <span className="text-cyber-green">[</span>
                <span className="text-cyber-blue">akshay@cyber-portfolio</span>
                <span className="text-cyber-green">]</span>
                <span className="text-cyber-blue">─[</span>
                <span className="text-cyber-purple">~</span>
                <span className="text-cyber-blue">]</span>
              </div>
            )}
            <div className="flex items-center">
              <span className="text-cyber-blue">╰─</span>
              <span className="text-cyber-red mr-2">$</span>
              <span className="text-cyber-green">{command}</span>
              {index === currentLine && isTyping && (
                <span className="text-cyber-green animate-blink ml-1">▋</span>
              )}
            </div>
          </div>
        ))}

        {/* Current Prompt */}
        {!isTyping && displayedCommands.length === commands.length && (
          <div className="flex items-center">
            <div className="text-cyber-green">
              <span className="text-cyber-blue">╭─</span>
              <span className="text-cyber-green">[</span>
              <span className="text-cyber-blue">akshay@cyber-portfolio</span>
              <span className="text-cyber-green">]</span>
              <span className="text-cyber-blue">─[</span>
              <span className="text-cyber-purple">~</span>
              <span className="text-cyber-blue">]</span>
            </div>
          </div>
        )}
        {!isTyping && displayedCommands.length === commands.length && (
          <div className="flex items-center">
            <span className="text-cyber-blue">╰─</span>
            <span className="text-cyber-red mr-2">$</span>
            <span className="text-cyber-green animate-blink">▋</span>
          </div>
        )}
      </div>

      {/* Control Buttons */}
      <div className="mt-4 pt-2 border-t border-cyber-green/30 flex justify-between items-center">
        <button
          onClick={() => {
            setCurrentLine(0);
            setCurrentChar(0);
            setDisplayedCommands([]);
            startTyping();
          }}
          className="cyber-btn text-xs px-3 py-1"
        >
          RESTART
        </button>
        <div className="text-xs text-cyber-green/60">
          Commands: {displayedCommands.length}/{commands.length}
        </div>
      </div>
    </div>
  );
}
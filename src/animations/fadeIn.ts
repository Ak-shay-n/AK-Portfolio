// Animation utility functions for cyber theme
export const fadeInVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const slideInFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -100,
    filter: "blur(5px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const slideInFromRight = {
  hidden: { 
    opacity: 0, 
    x: 100,
    filter: "blur(5px)"
  },
  visible: { 
    opacity: 1, 
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export const glitchVariants = {
  normal: {
    textShadow: "0 0 10px #00ff41"
  },
  glitch: {
    textShadow: [
      "0 0 10px #00ff41",
      "2px 2px 0px #ff073a, -2px -2px 0px #00d4ff",
      "0 0 10px #00ff41"
    ],
    transition: {
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export const cyberCardVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
    rotateX: -10
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    rotateX: 5,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Utility function to add cyber glow effect
export const addCyberGlow = (element: HTMLElement, color: string = '#00ff41') => {
  element.style.boxShadow = `0 0 20px ${color}`;
  element.style.textShadow = `0 0 10px ${color}`;
};

// Utility function to create typewriter effect
export const typewriterEffect = (text: string, speed: number = 50): Promise<void> => {
  return new Promise((resolve) => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        i++;
      } else {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
};

// Utility function for matrix rain effect
export const createMatrixRain = (container: HTMLElement) => {
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  for (let i = 0; i < 50; i++) {
    const span = document.createElement('span');
    span.innerText = chars[Math.floor(Math.random() * chars.length)];
    span.style.position = 'absolute';
    span.style.left = Math.random() * 100 + '%';
    span.style.animationDelay = Math.random() * 2 + 's';
    span.style.animationDuration = (Math.random() * 3 + 2) + 's';
    span.style.color = '#00ff41';
    span.style.fontSize = '14px';
    span.classList.add('matrix-char');
    container.appendChild(span);
  }
};

export default {
  fadeInVariants,
  slideInFromLeft,
  slideInFromRight,
  glitchVariants,
  cyberCardVariants,
  staggerContainer,
  addCyberGlow,
  typewriterEffect,
  createMatrixRain
};
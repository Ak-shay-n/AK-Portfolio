"use client"

import { useState, useEffect, useRef } from 'react';
import Terminal from '@/components/Terminal';

export default function Level1() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('bio');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const contentRef = useRef<HTMLDivElement>(null);

  const terminalCommands = [
    "sudo access /user/akshay/profile --level=1",
    ">> Authenticating credentials...",
    ">> [████████████████████] 100%",
    ">> Authentication successful ✓",
    ">> Welcome to Level 1: System Access",
    ">> Decrypting user profile data...",
    "cat /user/akshay/bio.txt",
    ">> Loading personal information...",
    ">> Profile data retrieved successfully ✓",
    "ls -la /user/akshay/",
    ">> drwxr-xr-x  bio.txt",
    ">> drwxr-xr-x  skills.json", 
    ">> drwxr-xr-x  projects.md",
    ">> -rwxr-xr-x  security_clearance.cert",
    "echo 'Access Level: GRANTED' > /tmp/status",
    ">> Level 1 unlocked successfully ✓"
  ];

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500);
    
    // Mouse tracking for 3D effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        
        contentRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        contentRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const profileData = {
    bio: {
      title: "PERSONAL_BIO.txt",
      icon: "👤",
      content: `USER: Akshay Kumar B
ROLE: Cybersecurity Enthusiast | Frontend Designer | Blockchain Learner
STATUS: Active | Learning | Building
CLEARANCE: Level 1 - System Access ✓

═══════════════════════════════════════════════════════════════

PERSONAL PROFILE:
  A passionate cybersecurity student with a strong interest in ethical 
  hacking, network security, and penetration testing. I combine my love 
  for security with modern web development to create secure, interactive 
  applications that protect and serve.

  Currently exploring the intersection of cybersecurity and blockchain 
  technology while building real-world projects that make a difference.
  
SPECIALIZATIONS:
  • Network Security & Penetration Testing
  • Secure Web Application Development  
  • Blockchain Security & Smart Contract Auditing
  • OSINT & Digital Forensics
  • Ethical Hacking & Vulnerability Assessment

CURRENT MISSION:
  Building secure, innovative solutions while learning advanced 
  cybersecurity techniques. Always staying one step ahead of threats
  and continuously improving digital defense systems.

PERSONAL MOTTO:
  "Stay curious. Stay secure. Never stop learning."
  
  "In a world of constant digital evolution, security isn't just
   a feature—it's the foundation of trust."

═══════════════════════════════════════════════════════════════

LOCATION: India 🇮🇳
TIMEZONE: UTC+5:30 (IST)
AVAILABILITY: Open to collaborations and learning opportunities
PREFERRED_CONTACT: Secure channels only`
    },
    skills: {
      title: "TECH_STACK.json",
      icon: "⚡",
      content: `{
  "cybersecurity": {
    "penetration_testing": {
      "tools": ["Wireshark", "Burp Suite", "Nmap", "Metasploit", "OWASP ZAP"],
      "techniques": ["Network Scanning", "Web App Testing", "Social Engineering"],
      "experience": "2+ years hands-on practice"
    },
    "network_security": {
      "protocols": ["TCP/IP", "HTTP/HTTPS", "SSH", "VPN", "TLS/SSL"],
      "monitoring": ["Wireshark", "tcpdump", "Snort", "pfSense"],
      "analysis": ["Traffic Analysis", "Intrusion Detection", "Log Analysis"]
    },
    "mobile_security": {
      "android": ["ADB", "Frida", "APK Analysis", "Root Detection Bypass"],
      "tools": ["Android Studio", "Genymotion", "MobSF"],
      "expertise": "Mobile App Security Assessment"
    },
    "certifications": {
      "in_progress": ["CEH (Certified Ethical Hacker)"],
      "planned": ["CISSP", "OSCP", "Security+"],
      "completed": ["Various CTF competitions"]
    }
  },
  
  "frontend_development": {
    "frameworks": {
      "react": {
        "version": "18+",
        "experience": "3+ years",
        "specialties": ["Hooks", "Context API", "Performance Optimization"]
      },
      "nextjs": {
        "version": "13+", 
        "features": ["App Router", "Server Components", "API Routes"],
        "deployment": ["Vercel", "Netlify", "AWS"]
      },
      "vue": {
        "version": "3+",
        "experience": "Learning",
        "focus": ["Composition API", "Pinia State Management"]
      }
    },
    "styling": {
      "tailwind_css": "Expert level - Component architecture",
      "styled_components": "Intermediate - Dynamic theming",
      "css3": "Advanced - Animations & Grid/Flexbox"
    },
    "tools": ["TypeScript", "JavaScript ES6+", "Webpack", "Vite", "Babel"]
  },
  
  "backend_development": {
    "languages": {
      "nodejs": "Express.js, Socket.io, RESTful APIs",
      "python": "Django, Flask, Security Scripts",
      "java": "Spring Boot, Servlet API"
    },
    "databases": {
      "sql": ["PostgreSQL", "MySQL", "SQLite"],
      "nosql": ["MongoDB", "Redis", "Firebase"],
      "orm": ["Prisma", "TypeORM", "Mongoose"]
    },
    "apis": ["REST", "GraphQL", "WebSocket", "gRPC"]
  },
  
  "blockchain_technology": {
    "platforms": {
      "ethereum": "Smart Contract Development",
      "solidity": "DeFi protocols, NFT marketplaces",
      "web3": "dApp integration and wallet connectivity"
    },
    "tools": ["Ganache", "Truffle", "Hardhat", "MetaMask", "Remix IDE"],
    "concepts": ["DeFi", "NFTs", "DAOs", "Decentralized Applications"],
    "security": ["Smart Contract Auditing", "Reentrancy Prevention"]
  },
  
  "additional_skills": {
    "programming_languages": ["C++", "Python", "Java", "JavaScript", "Go"],
    "version_control": ["Git", "GitHub", "GitLab", "Bitbucket"],
    "cloud_platforms": ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
    "containerization": ["Docker", "Kubernetes", "Docker Compose"],
    "ci_cd": ["GitHub Actions", "Jenkins", "GitLab CI"],
    "operating_systems": ["Linux (Ubuntu, Kali)", "Windows", "macOS"]
  }
}`
    },
    projects: {
      title: "PROJECT_PORTFOLIO.md",
      icon: "🚀",
      content: `# 🚀 ACTIVE PROJECT PORTFOLIO

## 🔐 CYBERSECURITY TOOLS & FRAMEWORKS

### Network Security Scanner
**Status:** Production Ready | **Tech:** Python, Scapy, Tkinter
- Advanced port scanner with GUI interface
- Vulnerability detection and reporting
- Network topology mapping
- Features: OS detection, service enumeration, security assessment

### Password Security Analyzer  
**Status:** Beta Testing | **Tech:** Python, Matplotlib, RegEx
- Real-time password strength assessment
- Dictionary attack simulation
- Entropy calculation and complexity analysis
- Visual security metrics dashboard

### OSINT Investigation Framework
**Status:** Active Development | **Tech:** Python, APIs, Web Scraping
- Automated information gathering toolkit
- Social media reconnaissance
- Domain and IP intelligence
- Data visualization and reporting engine

### Mobile Security Audit Suite
**Status:** Alpha | **Tech:** Java, ADB, Frida
- Android application security testing
- Root detection bypass mechanisms  
- Dynamic analysis and behavior monitoring
- Automated vulnerability scanning

---

## 🌐 WEB APPLICATIONS & PLATFORMS

### E-Commerce Security Platform
**Status:** Production | **Tech:** React, Node.js, PostgreSQL
- Full-stack secure shopping platform
- Implemented: JWT authentication, input validation, XSS protection
- Payment gateway integration with encryption
- Real-time fraud detection system

### This Cyber Portfolio Website
**Status:** Live | **Tech:** Next.js, TypeScript, Tailwind CSS
- Interactive cyberpunk-themed portfolio
- Advanced animations and 3D effects
- Responsive design with accessibility features
- Performance optimized with SEO best practices

### Secure File Sharing Platform  
**Status:** Development | **Tech:** Next.js, Express, MongoDB
- End-to-end encrypted file transfers
- Zero-knowledge architecture
- Self-destructing messages
- Multi-factor authentication

---

## ⛓️ BLOCKCHAIN & CRYPTOCURRENCY PROJECTS

### Decentralized Voting System
**Status:** Testnet | **Tech:** Solidity, Web3.js, React
- Transparent and tamper-proof voting
- Smart contract security auditing
- Gas optimization techniques
- Integration with IPFS for data storage

### NFT Marketplace with Security Focus
**Status:** Development | **Tech:** Solidity, Next.js, ethers.js
- Secure NFT trading platform
- Smart contract vulnerability prevention
- Royalty management system
- Cross-chain compatibility planning

### DeFi Yield Farming Protocol
**Status:** Research Phase | **Tech:** Solidity, Hardhat
- Automated liquidity provision
- Risk assessment algorithms
- Smart contract security analysis
- Flash loan protection mechanisms

---

## 🎓 LEARNING & RESEARCH PROJECTS

### Capture The Flag (CTF) Solutions
**Status:** Ongoing | **Tech:** Various
- Web exploitation challenges
- Cryptography puzzle solutions  
- Binary analysis and reverse engineering
- Network forensics investigations

### Penetration Testing Laboratory
**Status:** Personal Lab | **Tech:** VirtualBox, Kali Linux
- Vulnerable application testing
- Network infrastructure assessment
- Red team simulation exercises
- Defense mechanism evaluation

### Smart Contract Security Audits
**Status:** Academic | **Tech:** Solidity, Slither, MythX
- Common vulnerability pattern analysis
- Automated security testing tools
- Gas optimization techniques
- Best practices documentation

---

## 🚀 UPCOMING INITIATIVES

### Advanced Threat Detection System
**Planning Phase** | **Target:** Q1 2025
- AI-powered anomaly detection
- Real-time threat intelligence
- Automated incident response
- Machine learning security models

### Decentralized Identity Platform
**Research Phase** | **Target:** Q2 2025  
- Self-sovereign identity solution
- Zero-knowledge proof implementation
- Cross-platform compatibility
- Privacy-preserving authentication

### IoT Security Framework
**Concept Development** | **Target:** Q3 2025
- Edge device security assessment
- Firmware analysis automation
- Network segmentation strategies
- Vulnerability management system

---

## 📊 PROJECT STATISTICS

- **Total Projects:** 15+ active repositories
- **Lines of Code:** 50,000+ (across all projects)  
- **Technologies Used:** 25+ languages and frameworks
- **Security Vulnerabilities Fixed:** 100+ in personal projects
- **CTF Competitions:** 10+ participated, 3 podium finishes
- **Open Source Contributions:** 5+ repositories

---

## 🔗 COLLABORATION OPPORTUNITIES

**Currently Open For:**
- Cybersecurity research collaborations
- Open source security tool development
- Blockchain security consulting
- Educational content creation
- Speaking engagements and workshops

**Contact:** Secure channels only - See contact section for details`
    }
  };

  const tabs = [
    { id: 'bio', label: 'PERSONAL BIO', icon: '👤' },
    { id: 'skills', label: 'TECH STACK', icon: '⚡' },
    { id: 'projects', label: 'PROJECTS', icon: '🚀' }
  ];

  return (
    <div className="min-h-screen py-8 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative" ref={contentRef}>
        
        {/* Enhanced Header with 3D Effects */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-8 relative">
            <div className="w-20 h-20 border-4 border-green-400 rounded-full flex items-center justify-center mr-6 bg-green-400/10 group cursor-pointer">
              <span className="text-3xl group-hover:animate-spin transition-transform duration-500">🔓</span>
            </div>
            <div className="text-left">
              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
                LEVEL 1
              </h1>
              <p className="text-cyan-400 text-xl font-mono">SYSTEM ACCESS GRANTED</p>
              <div className="flex items-center mt-2 space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">SECURITY CLEARANCE: AUTHORIZED</span>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-green-400 mb-6 font-mono">
              ACCESSING USER PROFILE DATABASE...
            </h2>
            <div className="bg-black/50 border border-green-400/30 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed">
                Welcome to the first security level. Here you can explore my 
                <span className="text-green-400 font-bold"> background</span>, 
                <span className="text-blue-400 font-bold"> technical skills</span>, and 
                <span className="text-purple-400 font-bold"> current projects</span>. 
                Navigate through the tabs to uncover different aspects of my digital identity.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Terminal Section */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-2">SYSTEM AUTHENTICATION</h3>
            <p className="text-gray-400">Live security validation and profile access logs</p>
          </div>
          <div className="bg-black/80 border border-green-400/30 p-6 rounded-lg backdrop-blur-sm">
            <Terminal 
              commands={terminalCommands}
              autoPlay={true}
              className="max-w-5xl mx-auto"
            />
          </div>
        </div>

        {/* Enhanced Main Content */}
        <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          
          {/* Enhanced Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-black/50 rounded-xl p-2 border border-green-400/30 backdrop-blur-sm">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center space-x-3 px-8 py-4 rounded-lg font-mono transition-all duration-500 transform
                    ${activeTab === tab.id 
                      ? 'bg-gradient-to-r from-green-400 to-blue-400 text-black scale-105' 
                      : 'text-green-400 hover:bg-green-400/10 hover:scale-102'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-bold">{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Content Display */}
          <div className="max-w-6xl mx-auto">
            <div 
              className="bg-black/50 border border-green-400/30 rounded-xl p-10 relative overflow-hidden backdrop-blur-sm"
              style={{
                background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0, 255, 65, 0.1) 0%, transparent 50%)`
              }}
            >
              
              {/* Content Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">{profileData[activeTab as keyof typeof profileData].icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">
                      {profileData[activeTab as keyof typeof profileData].title}
                    </h3>
                    <p className="text-cyan-400">Classification: Level 1 Clearance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-bold">DECRYPTED</span>
                  <div className="px-3 py-1 bg-green-400/20 border border-green-400/50 rounded-full">
                    <span className="text-green-400 text-xs">SECURE</span>
                  </div>
                </div>
              </div>

              {/* Enhanced Content Body */}
              <div className="bg-black border border-green-400/20 p-8 rounded-xl mb-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black opacity-95"></div>
                <pre className="relative z-10 text-sm leading-relaxed whitespace-pre-wrap text-green-400 font-mono">
                  {profileData[activeTab as keyof typeof profileData].content}
                </pre>
                
                {/* Scanning Effect */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>

              {/* Enhanced Interactive Elements */}
              <div className="flex items-center justify-between p-6 bg-black/50 rounded-lg border border-green-400/30">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">FILE SIZE:</span>
                    <span className="text-cyan-400 font-mono">
                      {profileData[activeTab as keyof typeof profileData].content.length} bytes
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">ENCRYPTION:</span>
                    <span className="text-green-400">AES-256</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">MODIFIED:</span>
                    <span className="text-purple-400 font-mono">
                      {new Date().toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">ACCESS:</span>
                    <span className="text-red-400">read-only</span>
                  </div>
                </div>
                
                <div className="flex space-x-3 ml-6">
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded text-xs">
                    📁 EXPORT
                  </button>
                  <button className="px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 rounded text-xs">
                    🔗 SHARE
                  </button>
                </div>
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-400/30 group-hover:border-cyan-400/50 transition-colors"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-green-400/30 group-hover:border-cyan-400/50 transition-colors"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-900 ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a href="/" className="group">
              <button className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg">
                <span className="flex items-center space-x-2">
                  <span>🏠</span>
                  <span>RETURN TO BASE</span>
                </span>
              </button>
            </a>
            <a href="/level2" className="group">
              <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black hover:scale-105 transition-all duration-300 rounded-lg font-bold">
                <span className="flex items-center space-x-2">
                  <span>🚀</span>
                  <span>PROCEED TO LEVEL 2</span>
                </span>
              </button>
            </a>
          </div>
          
          <div className="bg-black/50 border border-green-400/30 p-6 max-w-2xl mx-auto rounded-lg backdrop-blur-sm">
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Progress:</span>
                <span className="text-green-400 font-bold">Level 1 Complete ✓</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Next Mission:</span>
                <span className="text-cyan-400 font-bold">Decrypt Projects 🧩</span>
              </div>
            </div>
            
            <div className="mt-4 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full w-1/4 bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

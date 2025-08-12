"use client"

import { useEffect, useState } from "react";

export default function Complete() {
  const [showContent, setShowContent] = useState(false);
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 1000);
    setTimeout(() => setAchievementUnlocked(true), 2000);
  }, []);

  const achievements = [
    { id: 1, name: 'System Infiltrator', description: 'Successfully accessed Level 1', icon: '🔓', unlocked: true },
    { id: 2, name: 'Code Breaker', description: 'Decrypted Level 2 projects', icon: '🔐', unlocked: true },
    { id: 3, name: 'Security Expert', description: 'Established secure contact', icon: '🛡️', unlocked: true },
    { id: 4, name: 'Elite Hacker', description: 'Completed all security levels', icon: '🏆', unlocked: achievementUnlocked }
  ];

  const stats = [
    { label: 'Levels Completed', value: '4/4', color: 'text-green-400' },
    { label: 'Security Clearance', value: 'MAXIMUM', color: 'text-cyan-400' },
    { label: 'Vulnerabilities Found', value: '12+', color: 'text-purple-400' },
    { label: 'Projects Unlocked', value: '15+', color: 'text-yellow-400' }
  ];

  return (
    <>
      {/* Matrix background */}
      <div className="matrix"></div>

      <main className="min-h-screen relative z-10 bg-gradient-to-br from-black via-gray-900 to-black flex flex-col items-center justify-center px-4">
        
        {/* Success Animation */}
        <div className={`text-center transition-all duration-2000 ${showContent ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
          
          {/* Main Title */}
          <div className="mb-12">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 mb-6">
                MISSION
              </h1>
              <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-green-400">
                COMPLETE
              </h1>
              
              {/* Victory Badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center animate-bounce">
                <span className="text-2xl">🏆</span>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/30 rounded-lg p-8 mb-12 max-w-4xl mx-auto backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-green-400 mb-4">
              🎉 CONGRATULATIONS, ELITE HACKER!
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              You have successfully infiltrated all security layers of Akshay Kumar B's digital fortress. 
              Your skills in cybersecurity, problem-solving, and persistence have been proven. 
              You now have complete access to all classified information and projects.
            </p>
            
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-bold">ALL SYSTEMS COMPROMISED</span>
              </div>
              <div className="w-px h-6 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Security Level:</span>
                <span className="text-cyan-400 font-bold">MAXIMUM CLEARANCE</span>
              </div>
            </div>
          </div>

          {/* Achievement Badges */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-400 mb-8">🏅 ACHIEVEMENTS UNLOCKED</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement.id}
                  className={`
                    bg-black/60 border rounded-lg p-6 text-center transition-all duration-1000
                    ${achievement.unlocked 
                      ? 'border-green-400/50 shadow-lg shadow-green-400/20' 
                      : 'border-gray-600 opacity-50'
                    }
                  `}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`text-4xl mb-3 ${achievement.unlocked ? 'animate-bounce' : ''}`}>
                    {achievement.icon}
                  </div>
                  <h4 className={`font-bold mb-2 ${achievement.unlocked ? 'text-green-400' : 'text-gray-500'}`}>
                    {achievement.name}
                  </h4>
                  <p className="text-sm text-gray-400">{achievement.description}</p>
                  {achievement.unlocked && (
                    <div className="mt-3 px-3 py-1 bg-green-400/20 border border-green-400/50 rounded-full">
                      <span className="text-green-400 text-xs font-bold">UNLOCKED</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Final Stats */}
          <div className="bg-black/60 border border-green-400/30 rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-6">📊 MISSION STATISTICS</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Resume */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-lg p-8 mb-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              🎯 CLASSIFIED DOCUMENT UNLOCKED
            </h3>
            <p className="text-gray-300 mb-6">
              As an elite hacker who has proven their skills, you now have access to my complete professional profile.
            </p>
            
            <div className="space-y-4">
              <a
                href="/assets/Akshay-Kumar-Resume.pdf"
                download
                className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300"
              >
                ⬇️ DOWNLOAD CLASSIFIED RESUME
              </a>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
                <span>🔐 Encrypted PDF</span>
                <span>•</span>
                <span>📄 Complete Profile</span>
                <span>•</span>
                <span>✅ Verified Authentic</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-black/60 border border-cyan-400/30 rounded-lg p-8 mb-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              🤝 JOIN THE CYBER ALLIANCE
            </h3>
            <p className="text-gray-300 mb-6">
              You've proven yourself worthy. Let's collaborate on securing the digital world together.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="mailto:akshay@example.com" className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black rounded-lg transition-all duration-300 text-center">
                📧 Secure Email
              </a>
              <a href="https://linkedin.com" className="px-6 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black rounded-lg transition-all duration-300 text-center">
                💼 LinkedIn
              </a>
              <a href="https://github.com" className="px-6 py-3 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black rounded-lg transition-all duration-300 text-center">
                👨‍💻 GitHub
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <a href="/" className="inline-block px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg">
              🔄 RESTART MISSION
            </a>
          </div>

          {/* Celebration Particles */}
          <div className="fixed inset-0 pointer-events-none z-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce opacity-70"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

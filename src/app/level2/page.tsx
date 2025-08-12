"use client"

import { useState } from "react";

export default function Level2() {
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const secret = "cyber";
  const encrypted = btoa(secret);

  const handleCheck = () => {
    setIsCorrect(input.toLowerCase() === secret);
  };

  return (
    <>
      {/* Matrix background */}
      <div className="matrix"></div>

      <main className="min-h-screen relative z-10 bg-gradient-to-br from-black via-gray-900 to-black text-green-400 font-mono p-6 flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-8 bg-black/80 p-8 rounded-lg border border-green-400/30 backdrop-blur-sm">
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 border-4 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-400/10">
              <span className="text-3xl">📊</span>
            </div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
              LEVEL 2
            </h1>
            <p className="text-cyan-400 text-xl">DECRYPT PROJECTS</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-green-400">🔓 DECRYPT THIS</h2>
            <p className="text-gray-300 text-lg">
              Decode the following Base64 string to reveal the access key:
            </p>

            <div className="bg-black border border-green-400/50 p-6 rounded-lg">
              <pre className="text-green-400 font-mono text-lg text-center tracking-wider">
                {encrypted}
              </pre>
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter decrypted value..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full p-4 bg-black/70 border border-green-400/50 text-green-300 rounded-lg focus:border-green-400 focus:outline-none text-lg font-mono"
              />

              <button
                onClick={handleCheck}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 text-lg"
              >
                🚀 DECRYPT & ACCESS
              </button>
            </div>

            {isCorrect && (
              <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/50 p-6 rounded-lg mt-8 animate-pulse">
                <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center">
                  <span className="mr-2">✅</span> ACCESS GRANTED - PROJECTS UNLOCKED
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-bold text-cyan-400">🔐 Security Projects</h4>
                    <ul className="space-y-1 text-gray-300 pl-4">
                      <li>• Network Security Scanner</li>
                      <li>• Password Security Analyzer</li>
                      <li>• OSINT Framework</li>
                      <li>• Mobile Security Suite</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-purple-400">🌐 Web Applications</h4>
                    <ul className="space-y-1 text-gray-300 pl-4">
                      <li>• E-Commerce Platform</li>
                      <li>• This Cyber Portfolio</li>
                      <li>• Secure File Sharing</li>
                      <li>• Real-time Chat App</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-yellow-400">⛓️ Blockchain</h4>
                    <ul className="space-y-1 text-gray-300 pl-4">
                      <li>• Voting DApp</li>
                      <li>• NFT Marketplace</li>
                      <li>• DeFi Protocol</li>
                      <li>• Smart Contracts</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-bold text-red-400">🎓 Learning</h4>
                    <ul className="space-y-1 text-gray-300 pl-4">
                      <li>• CTF Solutions</li>
                      <li>• Pentesting Lab</li>
                      <li>• Security Audits</li>
                      <li>• Research Papers</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/level3" className="px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300 text-center">
                    🛡️ PROCEED TO LEVEL 3
                  </a>
                  <a href="/" className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-lg transition-all duration-300 text-center">
                    🏠 RETURN TO BASE
                  </a>
                </div>
              </div>
            )}

            {!isCorrect && input && (
              <div className="bg-red-900/20 border border-red-400/50 p-4 rounded-lg">
                <p className="text-red-400 text-center">
                  ❌ Access Denied - Invalid decryption key
                </p>
              </div>
            )}
          </div>

          <div className="text-center text-gray-500 text-sm mt-8">
            <p>💡 Hint: This is a simple Base64 encoding challenge</p>
          </div>
        </div>
      </main>
    </>
  );
}

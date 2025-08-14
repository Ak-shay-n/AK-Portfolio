"use client"

import { useState } from "react";

export default function Level3() {
  const [selectedContact, setSelectedContact] = useState('');
  
  const contactMethods = [
    {
      id: 'email',
      name: 'Secure Email',
      icon: '📧',
      description: 'End-to-end encrypted communication',
      value: 'akshay.kumar@secure.mail',
      status: 'verified',
      security: 'PGP Encrypted'
    },
    {
      id: 'linkedin',
      name: 'Professional Network',
      icon: '💼',
      description: 'Professional networking and collaborations',
      value: 'linkedin.com/in/akshay-kumar-cyber',
      status: 'active',
      security: 'OAuth 2.0'
    },
    {
      id: 'github',
      name: 'Code Repository',
      icon: '👨‍💻',
      description: 'Open source projects and contributions',
      value: 'github.com/akshaykumar-cyber',
      status: 'public',
      security: '2FA Enabled'
    },
    {
      id: 'telegram',
      name: 'Encrypted Messaging',
      icon: '🔒',
      description: 'Real-time secure communications',
      value: '@akshay_cyber_security',
      status: 'private',
      security: 'MTProto 2.0'
    }
  ];

  const securityFeatures = [
    'End-to-end encryption',
    'Zero-knowledge architecture',
    'Multi-factor authentication',
    'Perfect forward secrecy',
    'Identity verification'
  ];

  return (
    <>
      {/* Matrix background */}
      <div className="matrix"></div>

      <main className="min-h-screen relative z-10 bg-gradient-to-br from-black via-gray-900 overflow-x-hidden to-black p-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="w-20 h-20 border-4 border-green-400 rounded-full flex items-center justify-center mx-auto mb-4 bg-green-400/10">
              <span className="text-3xl">🛡️</span>
            </div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
              LEVEL 3
            </h1>
            <p className="text-cyan-400 text-xl font-mono">SECURE CONTACT</p>
            <div className="flex items-center justify-center mt-4 space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">ALL CHANNELS ENCRYPTED</span>
            </div>
          </div>

          {/* Security Info */}
          <div className="bg-black/80 border border-green-400/30 p-8 rounded-lg backdrop-blur-sm mb-12">
            <h2 className="text-3xl font-bold text-green-400 mb-6 text-center">
              🔐 ESTABLISH SECURE COMMUNICATION
            </h2>
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              All communication channels are secured with military-grade encryption. 
              Select your preferred method of contact for professional inquiries, 
              collaborations, or cybersecurity discussions.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <div
                key={method.id}
                onClick={() => setSelectedContact(method.id)}
                className={`
                  bg-black/60 border rounded-lg p-8 cursor-pointer transition-all duration-500 transform hover:scale-105
                  ${selectedContact === method.id 
                    ? 'border-green-400 shadow-lg shadow-green-400/20 bg-green-400/5' 
                    : 'border-gray-600 hover:border-green-400/50'
                  }
                `}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-6">
                  <div className="text-4xl">{method.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-400 mb-2">{method.name}</h3>
                    <p className="text-gray-300 mb-4">{method.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Contact:</span>
                        <span className="text-cyan-400 font-mono">{method.value}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Status:</span>
                        <span className={`font-bold ${
                          method.status === 'verified' ? 'text-green-400' :
                          method.status === 'active' ? 'text-blue-400' :
                          method.status === 'public' ? 'text-purple-400' :
                          'text-yellow-400'
                        }`}>
                          {method.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-400">Security:</span>
                        <span className="text-green-400">{method.security}</span>
                      </div>
                    </div>
                    
                    {selectedContact === method.id && (
                      <div className="mt-6 animate-pulse">
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300">
                          🚀 INITIATE CONTACT
                        </button>
                      </div>
                    )}
                  </div>
                </div>
                
                {selectedContact === method.id && (
                  <div className="absolute -top-1 -right-1">
                    <div className="w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <a href="/complete">
                <button className="px-8 py-4 bg-gradient-to-r from-green-400 to-cyan-400 text-black font-bold rounded-lg hover:scale-105 transition-all duration-300">
                  🏆 MISSION COMPLETE
                </button>
              </a>
              <a href="/">
                <button className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg">
                  🏠 RETURN TO BASE
                </button>
              </a>
            </div>
            
            <div className="bg-black/50 border border-green-400/30 p-6 max-w-2xl mx-auto rounded-lg backdrop-blur-sm">
              <div className="flex items-center justify-center space-x-8 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Progress:</span>
                  <span className="text-green-400 font-bold">Level 3 Complete ✓</span>
                </div>
                <div className="w-px h-6 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400">Final Stage:</span>
                  <span className="text-yellow-400 font-bold">Mission Complete 🏆</span>
                </div>
              </div>
              
              <div className="mt-4 w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-green-400 to-cyan-400 animate-pulse"></div>
              </div>
            </div>
          </div>
      </main>
    </>
  );
}

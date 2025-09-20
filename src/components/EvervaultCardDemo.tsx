import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-green-400/30 bg-black/80 backdrop-blur-sm flex flex-col items-start max-w-lg mx-auto p-6 relative h-[35rem] rounded-lg shadow-2xl">
      {/* Corner Icons with cyber theme */}
      <Icon className="absolute h-8 w-8 -top-4 -left-4 text-green-400" />
      <Icon className="absolute h-8 w-8 -bottom-4 -left-4 text-cyan-400" />
      <Icon className="absolute h-8 w-8 -top-4 -right-4 text-blue-400" />
      <Icon className="absolute h-8 w-8 -bottom-4 -right-4 text-purple-400" />
      
      {/* Header Section */}
      <div className="w-full text-center mb-4">
        <div className="w-16 h-16 border-2 border-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 bg-cyan-400/10">
          <span className="text-2xl">🔐</span>
        </div>
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 font-mono mb-2">
          SECURITY MATRIX
        </h2>
      </div>
      
      {/* Evervault Card */}
      <EvervaultCard text="DECRYPT" />
      
      {/* Description */}
      <div className="mt-6 space-y-3">
        <h3 className="text-green-400 font-mono text-lg font-bold">
          [CLASSIFIED ACCESS]
        </h3>
        <p className="text-gray-300 font-mono text-sm leading-relaxed">
          Hover over the security matrix above to reveal encrypted data patterns. 
          Advanced encryption algorithms protect sensitive information.
        </p>
        <div className="flex items-center space-x-2 mt-4">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <p className="text-cyan-400 font-mono text-xs uppercase tracking-wider">
            System Status: Secure
          </p>
        </div>
      </div>
      
      {/* Action Button */}
      <div className="mt-auto w-full">
        <button className="w-full bg-green-400/20 text-green-400 border border-green-400/50 rounded font-mono text-sm py-2 px-4 hover:bg-green-400/30 hover:border-green-400 transition-all duration-300">
          [ACCESS GRANTED]
        </button>
      </div>
    </div>
  );
}
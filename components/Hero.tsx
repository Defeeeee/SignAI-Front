import React from 'react';
import { ArrowRight, Zap, Shield, Target, Camera, Code } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  openTrySignAI: () => void;
}

const Hero: React.FC<HeroProps> = ({ openTrySignAI }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-amber-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-400/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Sign Language
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Translation AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          An open-source AI-powered tool that translates sign language in real-time.
          Built with advanced computer vision and machine learning techniques.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={openTrySignAI}
            className="group bg-white text-orange-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 transition-all duration-300 flex items-center justify-center"
          >
            Try The Demo
            <Camera className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <Link href="https://github.com/signai" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-900 transition-all duration-300 flex items-center justify-center">
            View Source Code
            <Code className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Zap className="h-8 w-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Real-time Processing</h3>
              <p className="text-orange-100 text-sm">Optimized algorithms for low-latency translation on any device</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">Privacy-Focused</h3>
              <p className="text-orange-100 text-sm">All processing happens locally with no data stored on servers</p>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
              <Target className="h-8 w-8 text-orange-400 mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">State-of-the-Art Performance</h3>
              <p className="text-orange-100 text-sm">Low Word Error Rates (18-25%) on standard benchmarks</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

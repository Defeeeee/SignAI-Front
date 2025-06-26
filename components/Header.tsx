'use client'

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface HeaderProps {
  openTrySignAI: () => void;
}

const Header: React.FC<HeaderProps> = ({ openTrySignAI }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <img 
              src={isScrolled ? "/logo-signai.png" : "/logo-signai-white.png"}
              alt="SignAI" 
              className={`h-8 w-auto lg:h-10 ${
                isScrolled ? '' : 'filter brightness-100'
              }`}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#features" className={`font-medium transition-colors hover:text-[#FF7A00] ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Features
            </Link>
            <Link href="#about" className={`font-medium transition-colors hover:text-[#FF7A00] ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              About
            </Link>
            <button 
              onClick={openTrySignAI}
              className="bg-[#FF7A00] text-white px-6 py-2 rounded-full font-medium hover:bg-[#E06A00] transition-colors inline-block text-center"
            >
              Try SignAI
            </button>
          </nav>

          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-6 space-y-4">
            <Link href="#features" className="block text-gray-900 font-medium">Features</Link>
            <Link href="#about" className="block text-gray-900 font-medium">About</Link>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                openTrySignAI();
              }}
              className="block w-full bg-[#FF7A00] text-white px-6 py-2 rounded-full font-medium text-center"
            >
              Try SignAI
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react';
import { Twitter, Linkedin, Github, Mail, Code, BookOpen, FileCode, Server, Database, Globe } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/logo-signai-white.png" 
              alt="SignAI" 
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              An open-source AI project for real-time sign language translation using computer vision and deep learning.
              Built with TensorFlow, OpenCV, React, and Python.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/signai" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/signai_project" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://www.linkedin.com/company/signai" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@signai.dev" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Technology</h3>
            <ul className="space-y-2">
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center"><Code className="w-4 h-4 mr-2" />Computer Vision</Link></li>
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center"><Server className="w-4 h-4 mr-2" />Neural Networks</Link></li>
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center"><Database className="w-4 h-4 mr-2" />Data Processing</Link></li>
              <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors flex items-center"><Globe className="w-4 h-4 mr-2" />Web Integration</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/signai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center"><Github className="w-4 h-4 mr-2" />Source Code</a></li>
              <li><a href="https://github.com/signai/docs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center"><BookOpen className="w-4 h-4 mr-2" />Documentation</a></li>
              <li><a href="https://github.com/signai/examples" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center"><FileCode className="w-4 h-4 mr-2" />Examples</a></li>
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center"><Server className="w-4 h-4 mr-2" />Tech Stack</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 SignAI Project. Open source under MIT License.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/signai/license" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">License</a>
            <a href="https://github.com/signai/contributing" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Contributing</a>
            <a href="https://github.com/signai/security" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

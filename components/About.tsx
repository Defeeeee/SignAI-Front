import React from 'react';
import { CheckCircle, Code, Github, GitMerge, GitPullRequest, Terminal, Server, Database } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const techStack = [
    { title: "PyTorch", description: "Deep learning framework", icon: Server },
    { title: "OpenCV", description: "Computer vision library", icon: Terminal },
    { title: "React", description: "Frontend framework", icon: Code },
    { title: "JavaScript", description: "Backend language", icon: Database }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Project
              <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A40] bg-clip-text text-transparent"> Development</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              SignAI began as a research project at the intersection of computer vision and accessibility technology. 
              The project aims to create an open-source solution for real-time sign language translation 
              that can run efficiently on consumer hardware.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Development follows an iterative approach with continuous integration and testing. 
              The codebase is maintained on GitHub with a focus on modularity, performance, and 
              cross-platform compatibility.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <GitMerge className="h-6 w-6 text-[#FF7A00] mr-3" />
                <span className="text-gray-700">Modular architecture with independent components</span>
              </div>
              <div className="flex items-center">
                <GitPullRequest className="h-6 w-6 text-[#FF7A00] mr-3" />
                <span className="text-gray-700">Continuous integration with automated testing</span>
              </div>
              <div className="flex items-center">
                <Github className="h-6 w-6 text-[#FF7A00] mr-3" />
                <span className="text-gray-700">Open-source development with community contributions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-6 w-6 text-[#FF7A00] mr-3" />
                <span className="text-gray-700">MIT licensed for maximum adoption and collaboration</span>
              </div>
            </div>

            <div className="mt-8">
              <Link href="https://github.com/signai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-[#FF7A00] text-[#FF7A00] rounded-full hover:bg-[#FF7A00] hover:text-white transition-colors">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#FFF5EB] to-[#FFEFE0] rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Technology Stack</h3>
              <p className="text-gray-600 mb-8 text-center">
                SignAI is built using modern technologies for AI, computer vision, and web development.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {techStack.map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <item.icon className="h-8 w-8 text-[#FF7A00] mx-auto mb-3" />
                      <div className="text-xl font-bold text-gray-900 mb-1">{item.title}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-white rounded-xl border border-orange-100">
                <h4 className="font-semibold text-gray-900 mb-2">System Requirements</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Modern browser with WebRTC support</li>
                  <li>• 4GB RAM minimum (8GB recommended)</li>
                  <li>• Camera access for real-time translation</li>
                </ul>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF7A00] rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#FF7A00] rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Cpu, ArrowRight, MessageSquare, Upload, Video, BookOpen, Gamepad2, History, VolumeX, Volume2, Camera, Code, GitBranch, Database } from 'lucide-react';
import Link from 'next/link';

interface FeaturesProps {
  openTrySignAI: () => void;
}

const Features: React.FC<FeaturesProps> = ({ openTrySignAI }) => {
  // Technical features of SignAI
  const features = [
    {
      icon: Video,
      title: "Computer Vision Pipeline",
      description: "Advanced image processing algorithms detect and track hand movements and gestures."
    },
    {
      icon: Cpu,
      title: "Neural Network Model",
      description: "Custom-trained convolutional neural network for accurate sign recognition."
    },
    {
      icon: Database,
      title: "Multilingual Support",
      description: "Translation support for multiple sign language variants with expandable dataset."
    },
    {
      icon: Upload,
      title: "Offline Processing",
      description: "Process pre-recorded videos with higher accuracy and detailed analysis."
    },
    {
      icon: GitBranch,
      title: "Open Source",
      description: "Fully open-source codebase allowing community contributions and improvements."
    },
    {
      icon: MessageSquare,
      title: "Text-to-Speech",
      description: "Integrated TTS engine converts translations to spoken language in real-time."
    }
  ];

  // Technical applications of SignAI
  const applications = [
    "Education",
    "Healthcare",
    "Public Services",
    "Remote Work",
    "Media",
    "Accessibility"
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-[#FFF5EB] to-[#FFEFE0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo-signai.png" 
              alt="SignAI Logo" 
              className="h-20 w-auto"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technical
            <span className="bg-gradient-to-r from-[#FF7A00] to-[#FF9A40] bg-clip-text text-transparent"> Overview</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            An open-source AI system that translates sign language using computer vision and deep learning.
          </p>
        </div>

        {/* Project Architecture */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Project Architecture</h3>
            <p className="text-lg text-gray-700 mb-6">
              SignAI uses a modular architecture with three main components: video capture, AI processing, and translation output. The system processes video frames through a pipeline of computer vision algorithms and neural networks.
            </p>
          </div>
        </div>

        {/* Technical Challenges */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical Challenges</h3>
            <p className="text-gray-700 mb-6">
              The project addresses several complex technical challenges:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#FFF0E0] text-[#FF7A00] mr-3">
                  <span className="text-sm font-bold">1</span>
                </div>
                <p className="text-gray-700">
                  Real-time hand tracking and gesture recognition in varying lighting conditions and backgrounds.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#FFF0E0] text-[#FF7A00] mr-3">
                  <span className="text-sm font-bold">2</span>
                </div>
                <p className="text-gray-700">
                  Optimizing neural network performance for low-latency translation on consumer hardware.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Technical Features Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Technologies</h3>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            SignAI leverages cutting-edge technologies in computer vision, machine learning, and natural language processing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className="p-6">
                  <div className="bg-[#FFF0E0] rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-[#FF7A00]" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-[#FFF0E0] rounded-full w-12 h-12 flex items-center justify-center">
                  <Code className="h-6 w-6 text-[#FF7A00]" />
                </div>
                <p className="text-lg text-gray-700">
                  Built with PyTorch, OpenCV, and React for a seamless cross-platform experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SlowFast Architecture */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">SlowFast Architecture</h3>
            <p className="text-lg text-gray-700 mb-6">
              SignAI uses a SlowFast network architecture specifically designed for Continuous Sign Language Recognition (CSLR). This innovative approach processes video at two different frame rates simultaneously:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-[#FFF0E0] rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Slow Pathway</h4>
                <p className="text-gray-700">
                  Processes fewer frames per second to capture detailed spatial information like hand shapes and facial expressions with high resolution.
                </p>
              </div>

              <div className="bg-[#FFF0E0] rounded-2xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Fast Pathway</h4>
                <p className="text-gray-700">
                  Processes more frames per second to capture dynamic temporal information like movements and transitions between signs.
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              The architecture includes two specialized feature fusion methods:
            </p>

            <ul className="space-y-4 mb-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#FFF0E0] text-[#FF7A00] mr-3">
                  <span className="text-sm font-bold">1</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Bi-directional Feature Fusion (BFF):</span> Facilitates the exchange of information between the two pathways, transferring dynamic semantics into spatial semantics and vice versa.
                </p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-[#FFF0E0] text-[#FF7A00] mr-3">
                  <span className="text-sm font-bold">2</span>
                </div>
                <p className="text-gray-700">
                  <span className="font-semibold">Pathway Feature Enhancement (PFE):</span> Enriches both dynamic and spatial representations through auxiliary subnetworks without requiring extra inference time.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Implementation Details */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-16">
          <div className="p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Implementation Details</h3>
            <p className="text-lg text-gray-700 mb-6">
              The project is implemented as a web application with a React frontend and Python backend. The AI model is trained on datasets including PHOENIX2014, PHOENIX2014-T, and CSL-Daily.
            </p>

            <div className="bg-[#FFF0E0] rounded-2xl p-6 mt-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h4>
              <p className="text-gray-700 mb-4">
                The model achieves state-of-the-art performance with Word Error Rates (WER) of:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>PHOENIX2014: 18.01% (Dev) / 18.28% (Test)</li>
                <li>PHOENIX2014-T: 17.66% (Dev) / 18.71% (Test)</li>
                <li>CSL-Daily: 25.49% (Dev) / 24.85% (Test)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                <span className="italic">Note: Lower WER percentages indicate better performance.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Application Domains */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Application Domains</h3>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-4xl mx-auto">
            SignAI can be integrated into various domains to improve accessibility and communication.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 p-4 text-center">
                <p className="font-medium text-gray-800">{app}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 mb-12">
            Experience the technology behind SignAI with our interactive demo
          </p>

          <button
            onClick={openTrySignAI}
            className="group bg-[#FF7A00] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#E06A00] transition-all duration-300 flex items-center justify-center mx-auto"
          >
            Try The Demo
            <Camera className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;

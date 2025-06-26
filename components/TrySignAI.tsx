'use client'

import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';
import CameraCapture from './CameraCapture';
import VideoUpload from './VideoUpload';

interface TrySignAIProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrySignAI: React.FC<TrySignAIProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'select' | 'camera' | 'upload'>('select');

  if (!isOpen) return null;

  const handleClose = () => {
    setMode('select');
    onClose();
  };

  if (mode === 'camera') {
    return <CameraCapture onClose={handleClose} />;
  }

  if (mode === 'upload') {
    return <VideoUpload onClose={handleClose} />;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Try SignAI</h2>
          <p className="text-gray-600 mb-8">
            Choose how you want to translate sign language
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => setMode('camera')}
              className="bg-white border-2 border-[#FF7A00] hover:bg-[#FF7A00] hover:text-white text-[#FF7A00] rounded-2xl p-8 transition-all duration-300 flex flex-col items-center space-y-4 group"
            >
              <div className="bg-[#FFF0E0] group-hover:bg-white text-[#FF7A00] p-4 rounded-full transition-colors duration-300">
                <Camera className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Record Video</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                  Use your camera to record sign language in real-time
                </p>
              </div>
            </button>

            <button
              onClick={() => setMode('upload')}
              className="bg-white border-2 border-[#A100FF] hover:bg-[#A100FF] hover:text-white text-[#A100FF] rounded-2xl p-8 transition-all duration-300 flex flex-col items-center space-y-4 group"
            >
              <div className="bg-[#F0E0FF] group-hover:bg-white text-[#A100FF] p-4 rounded-full transition-colors duration-300">
                <Upload className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Video</h3>
                <p className="text-sm text-gray-500 group-hover:text-white/90 transition-colors duration-300">
                  Upload an existing sign language video for translation
                </p>
              </div>
            </button>
          </div>

          <button
            onClick={handleClose}
            className="mt-8 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrySignAI;
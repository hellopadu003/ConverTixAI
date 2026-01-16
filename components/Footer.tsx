import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <a href="#" className="flex items-center gap-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(139,92,246,0.5)]">
              C
            </div>
            <span className="font-bold text-xl text-white font-display">
              Convertix<span className="text-primary-400">AI</span>
            </span>
          </a>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-900 text-slate-400 hover:text-white"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-gray-900 text-slate-400 hover:text-white"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-gray-900 text-slate-400 hover:text-white"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; 2024 Convertix AI. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
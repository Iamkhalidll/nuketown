import React from 'react';
import { Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='footer' className="w-full  text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Media Icons */}
          <div className="flex space-x-8">
            <a 
              href="https://x.com/NUKETOWNCTO2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors duration-300"
            >
              <Twitter size={28} />
            </a>
            <a 
              href="https://t.me/NUKETOWNCTO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors duration-300"
            >
              <Send size={28} />
            </a>
          </div>

          {/* Copyright Text */}
          <div className="text-center text-md text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nuketown. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
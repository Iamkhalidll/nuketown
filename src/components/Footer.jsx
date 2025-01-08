import React from 'react';

const Footer = () => {
  return (
    <footer id='footer' className="w-full text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/*Social Media Icons*/}
          <div className="flex space-x-8">
            <a 
              href="https://x.com/NUKETOWNCTO2025" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors duration-300"
            >
               <img
                src="/twitter_x_new_logo_x_rounded_icon_256078.webp"
                alt="X Logo"
                className="w-9 h-9 object-contain"
              />
            </a>
            <a 
              href="https://t.me/NUKETOWNCTO" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors duration-300"
            >
              <img
                src="/telegram-svgrepo-com.svg"
                alt="Telegram Logo"
                className="w-9 h-9 object-contain"
              />
            </a>
            <a 
              href="https://pump.fun/coin/Brq9svC25ZJHP21VvKtkG7qrkPyCjHubRPUhVwdYpump" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors duration-300"
            >
              <img
                src="/pumpfun-logo.png"
                alt="Pumpfun Logo"
                className="w-9 h-8 object-contain"
              />
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

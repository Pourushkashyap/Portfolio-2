import React from 'react';
import { Code, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-surface/50 pt-16 pb-8" id="contact">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 text-primary mb-3">
              <Code size={28} />
              <span className="font-bold text-2xl text-gray-100">Pourush Kashyap</span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              B.Tech CSE Student @ CT University. Building scaleable solutions and engaging digital experiences.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="text-gray-200 font-medium">Let's connect</p>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/Pourushkashyap" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-primary hover:text-white transition-all">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pourush-kashyap-68890a289/" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-primary hover:text-white transition-all">
                <FaLinkedin size={20} />
              </a>
              <a href="https://leetcode.com/u/_pourush2005/" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-gray-300 hover:bg-[#FFA116] hover:text-white transition-all" title="Leetcode">
                <span className="font-bold text-sm tracking-wide">LC</span>
              </a>
            </div>
            <div className="flex flex-col gap-3 mt-4 items-center md:items-end">
              <a href="mailto:pourushkashyap06@gmail.com" className="text-primary text-sm font-medium flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={16} />
                pourushkashyap06@gmail.com
              </a>
              <p className="text-primary text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
                +91 7986355170
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5 text-gray-500 text-sm">
          © {new Date().getFullYear()} Pourush Kashyap. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

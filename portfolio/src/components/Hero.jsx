import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      {/* Background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[100px] md:blur-[120px] opacity-40 md:opacity-50 z-0 pointer-events-none mix-blend-screen"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center md:items-start text-center md:text-left mt-10 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite]"></span>
          <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white mb-6 leading-tight flex flex-col md:block"
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Pourush</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed font-light"
        >
          A passionate <strong className="text-gray-200 font-medium">B.Tech CSE Student</strong> & <strong className="text-gray-200 font-medium">Full-Stack Developer</strong> crafting scalable web apps and exploring the frontiers of Machine Learning & Generative AI.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#projects" className="w-full sm:w-auto justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            Explore My Work
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="w-full sm:w-auto justify-center px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 border border-white/10 transition-all text-center">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

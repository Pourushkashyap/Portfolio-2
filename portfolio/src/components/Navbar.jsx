import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${scrolled ? 'bg-surface/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 text-primary">
          <Code2 size={28} />
          <span className="font-bold text-xl tracking-tight text-gray-100">Pourush<span className="text-primary">.dev</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-primary transition-colors cursor-pointer">
              {link.name}
            </a>
          ))}
          <a href="https://github.com/Pourushkashyap" target="_blank" rel="noreferrer" className="px-5 py-2 text-sm font-medium bg-primary text-white rounded-full hover:bg-primary/90 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            GitHub
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="absolute top-full left-0 w-full bg-surface border-b border-white/10 py-4 px-6 flex flex-col space-y-4 shadow-2xl md:hidden overflow-hidden"
        >
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-primary transition-colors font-medium block w-full">
              {link.name}
            </a>
          ))}
          <a href="https://github.com/Pourushkashyap" target="_blank" rel="noreferrer" className="text-primary font-medium mt-2">
            View GitHub Profile &rarr;
          </a>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;

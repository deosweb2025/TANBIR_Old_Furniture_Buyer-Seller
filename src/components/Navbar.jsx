import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'hero';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Offset by 150px to account for the fixed navbar
        if (window.scrollY >= sectionTop - 150) {
          currentActive = section.getAttribute('id');
        }
      });
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)] py-4' 
          : 'bg-[#fdfbf7]/60 backdrop-blur-md border-b border-neutral-200/30 py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          
          <a href="#" className="font-serif text-3xl font-bold tracking-tight text-neutral-900 drop-shadow-sm">
            {siteData.company.name.split(' ').map((word, i) => (
              <span key={i} className={i === 0 ? 'text-accent' : ''}>
                {word}{' '}
              </span>
            ))}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[13px] font-bold tracking-[0.15em] uppercase transition-colors relative group ${
                  activeSection === link.href.substring(1) ? 'text-accent' : 'text-neutral-700 hover:text-accent'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-accent transition-all duration-300 ${
                  activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            <a
              href={`tel:${siteData.contact.phone}`}
              className="px-8 py-3 rounded-full text-sm font-bold tracking-wide uppercase transition-all duration-300 bg-accent text-white hover:bg-neutral-900 shadow-[0_4px_14px_rgba(217,119,6,0.3)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
            >
              Call Us
            </a>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden hover:text-accent transition-colors text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl flex flex-col md:hidden z-50 border-t"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-bold tracking-wide transition-colors border-b border-gray-100 py-4 px-6 ${
                  activeSection === link.href.substring(1) ? 'text-accent' : 'text-primary hover:text-accent'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="p-6">
              <a
                href={`tel:${siteData.contact.phone}`}
                className="block w-full p-4 bg-accent text-white text-center rounded-xl font-bold tracking-wide shadow-md hover:bg-accent-hover transition-colors"
              >
                Call {siteData.contact.phone}
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;


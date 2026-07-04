import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../utils';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About & Stats", href: "#about" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent py-8"
      )}>
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-white text-2xl font-serif tracking-tighter italic">
            AR
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium md:font-semibold text-white/50 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="bg-white text-black px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gray-200 transition-colors"
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white flex flex-col justify-center gap-1.5 w-6 h-6"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="w-full h-[1px] bg-white"></span>
            <span className="w-full h-[1px] bg-white"></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-white/10">
              <span className="text-white text-2xl font-serif tracking-tighter italic">AR</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white text-3xl font-light leading-none"
              >
                &times;
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8 p-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="text-lg md:text-2xl tracking-[0.3em] text-white uppercase font-light"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

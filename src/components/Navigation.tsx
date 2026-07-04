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
        scrolled ? "bg-canvas/90 backdrop-blur-md py-4 border-b border-border-light" : "bg-transparent py-8"
      )}>
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className={cn("text-2xl font-serif tracking-tighter italic transition-colors", scrolled ? "text-text-primary" : "text-white")}>
            AR
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className={cn("text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-medium md:font-semibold transition-colors", scrolled ? "text-text-secondary hover:text-[#F2DDE5]" : "text-white/70 hover:text-white")}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className={cn("px-6 py-3 text-[10px] tracking-[0.3em] uppercase font-bold transition-colors", scrolled ? "bg-pure-black text-white hover:bg-[#F2DDE5] hover:text-pure-black" : "bg-white text-black hover:bg-[#F2DDE5]")}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={cn("md:hidden flex flex-col justify-center gap-1.5 w-6 h-6", scrolled ? "text-text-primary" : "text-white")}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className={cn("w-full h-[1px]", scrolled ? "bg-text-primary" : "bg-white")}></span>
            <span className={cn("w-full h-[1px]", scrolled ? "bg-text-primary" : "bg-white")}></span>
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
            className="fixed inset-0 z-[60] bg-canvas flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-b border-border-light">
              <span className="text-text-primary text-2xl font-serif tracking-tighter italic">AR</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-primary text-3xl font-light leading-none"
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
                  className="text-lg md:text-2xl tracking-[0.3em] text-text-primary hover:text-[#F2DDE5] transition-colors uppercase font-light"
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

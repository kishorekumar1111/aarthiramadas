import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutStats from './components/AboutStats';
import Portfolio from './components/Portfolio';
import ContactFAQ from './components/ContactFAQ';
import { MODEL_DATA } from './data';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate luxury loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen selection:bg-white/20 font-sans">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl tracking-tighter italic font-serif mb-4"
            >
              AR
            </motion.div>
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "100%" }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute inset-y-0 left-0 w-1/2 bg-white/50"
               ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />
      
      <main>
        <Hero />
        <AboutStats />
        <Portfolio />
        <ContactFAQ />
      </main>

      <footer className="py-12 bg-[#0A0A0A] border-t border-white/5 text-center px-6">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-serif tracking-tighter italic">AR</div>
            <div className="text-[10px] tracking-[0.3em] uppercase opacity-40">
               &copy; {new Date().getFullYear()} {MODEL_DATA.name}. All rights reserved.
            </div>
            <div className="flex gap-6">
               <a href="#" className="text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity">Instagram</a>
               <a href="#" className="text-[10px] tracking-[0.3em] uppercase opacity-40 hover:opacity-100 transition-opacity">Models.com</a>
            </div>
         </div>
      </footer>
    </div>
  );
}

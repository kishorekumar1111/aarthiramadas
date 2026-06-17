import { motion } from 'motion/react';
import { MODEL_DATA } from '../data';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A0908] text-[#F4F1ED]" id="home">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/img7.jpeg"
          alt="Adithya S - Hero"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-[center_20%] opacity-50 sepia-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-[#0A0908]/40 to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-end pb-32">
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="text-[15vw] lg:text-[140px] font-serif leading-[0.85] tracking-tighter uppercase block"
          >
            <span className="block mb-2">{MODEL_DATA.name}</span>
          </motion.h1>
        </div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between pt-6 mt-8 gap-6 relative z-30">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-md"
          >
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4 opacity-60">
              {MODEL_DATA.title}
            </p>
            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-sm">
              {MODEL_DATA.tagline}
            </p>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1.2 }}
             className="flex items-center gap-6"
          >
             <a href="#portfolio" className="group flex items-center gap-2 cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.3em] text-white opacity-70 group-hover:opacity-100 transition-colors">Explore</span>
                <span className="w-10 h-[1px] bg-white opacity-70 group-hover:w-16 group-hover:opacity-100 transition-all duration-300"></span>
             </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MODEL_DATA } from '../data';
import { cn } from '../utils';

export default function Portfolio() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section id="portfolio" ref={targetRef} className="relative h-[400vh] bg-canvas text-text-primary">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-6 md:left-12 z-10 w-full flex justify-between pr-12">
            <h2 className="text-4xl md:text-6xl font-serif italic tracking-tighter">
              Archive
            </h2>
            <div className="hidden md:block text-[10px] tracking-[0.3em] uppercase text-text-muted">
              Scroll to explore
            </div>
        </div>

        <motion.div style={{ x }} className="flex gap-12 md:gap-24 px-6 md:px-32 items-center min-w-max h-full pt-16">
          {MODEL_DATA.portfolio.map((item, idx) => (
            <div 
              key={item.id} 
              className={cn(
                "group relative shrink-0 overflow-hidden bg-ivory shadow-sm border border-border-light",
                idx % 2 === 0 ? "w-[70vw] md:w-[40vw] aspect-[2/3]" : "w-[60vw] md:w-[35vw] aspect-[3/4]"
              )}
            >
              <img
                src={item.src}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-8 md:p-12">
                <span className="text-[10px] uppercase tracking-[0.3em] text-text-secondary">
                  {item.category}
                </span>
                <div className="overflow-hidden">
                   <h3 className="text-3xl md:text-5xl font-serif italic tracking-tighter text-text-primary transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)]">
                     {item.title}
                   </h3>
                </div>
              </div>
            </div>
          ))}
          
          <div className="shrink-0 w-[10vw]"></div>
        </motion.div>
      </div>
    </section>
  );
}


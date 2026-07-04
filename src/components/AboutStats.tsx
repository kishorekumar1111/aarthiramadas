import { motion } from 'motion/react';
import { MODEL_DATA } from '../data';

export default function AboutStats() {
  return (
    <section id="about" className="py-32 bg-ivory text-text-primary relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left: About Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-text-secondary mb-4">The Profile</div>
          <h2 className="text-3xl lg:text-4xl font-serif leading-tight mb-8">
            Defining the modern silhouette through <span className="italic font-light text-gold">cinematic poise</span> and high-fashion narrative.
          </h2>
          <div className="space-y-6 text-sm text-text-secondary leading-relaxed font-light mb-12 max-w-lg">
            <p>
              Based in Coimbatore and Mayiladuthurai, Aarthi Ramadass brings a strong, elegant, and versatile presence to every set. Recognized with the Vogue Modeling 2026 Fashion Icon Award, she has solidified her position in the industry, adapting seamlessly across a wide range of styles.
            </p>
            <p>
              Her dynamic look effortlessly transitions from editorial fashion and e-commerce campaigns to cinematic storytelling, highlighted by her upcoming 2025 supporting role in film. It's not just about wearing the garment; it's about inhabiting the narrative.
            </p>
          </div>
          
          <div className="mt-auto flex items-center justify-start gap-8">
            <a 
               href="#" 
               className="bg-pure-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#F2DDE5] hover:text-pure-black transition-colors"
            >
              Request Media Kit
            </a>
          </div>
        </motion.div>

        {/* Right: Stats & Measurement Grid */}
        <motion.div 
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 1 }}
           className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 lg:gap-y-12 border-t border-border-medium pt-10"
        >
            {MODEL_DATA.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[9px] uppercase tracking-[0.2em] text-text-muted mb-2">{stat.label}</div>
                <div className="text-xl font-serif italic text-text-primary">{stat.value}</div>
              </div>
            ))}
            {MODEL_DATA.agencies.map((agency) => (
              <div key={agency.name}>
                <div className="text-[9px] uppercase tracking-[0.2em] text-text-muted mb-2">{agency.name}</div>
                <div className="text-xl font-serif italic text-text-primary">{agency.location}</div>
              </div>
            ))}
        </motion.div>

      </div>
    </section>
  );
}

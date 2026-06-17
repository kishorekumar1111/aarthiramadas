import { motion } from 'motion/react';
import { MODEL_DATA } from '../data';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="py-32 bg-[#0C0B0A] text-[#F4F1ED] border-t border-white/5 relative">
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4 opacity-60">Casting & Press</div>
          <h2 className="text-4xl lg:text-5xl font-serif leading-none tracking-tighter mb-4">
            Booking Inquiries
          </h2>
          <p className="text-sm text-white/60 font-light mb-8 max-w-md">
            For direct bookings, castings, or press inquiries, please fill out the form below or contact me directly.
          </p>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-white/80 font-light">
            <a href={`mailto:${MODEL_DATA.contact.email}`} className="hover:text-white transition-colors">{MODEL_DATA.contact.email}</a>
            <span className="hidden sm:inline opacity-40">|</span>
            <a href={`tel:${MODEL_DATA.contact.phone}`} className="hover:text-white transition-colors">{MODEL_DATA.contact.phone}</a>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.2em] opacity-40">Name / Company</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-sm font-light focus:outline-none focus:border-white transition-colors rounded-none px-0" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.2em] opacity-40">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-sm font-light focus:outline-none focus:border-white transition-colors rounded-none px-0" 
                  placeholder="contact@brand.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.2em] opacity-40">Project Details</label>
              <textarea 
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-sm font-light focus:outline-none focus:border-white transition-colors rounded-none px-0 resize-none h-24" 
                placeholder="Dates, location, usage..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="bg-white text-black px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-gray-200 transition-colors w-full sm:w-auto mt-4"
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>

        {/* FAQs */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-4 opacity-60 hidden lg:block">&nbsp;</div>
          <h2 className="text-4xl lg:text-5xl font-serif leading-none tracking-tighter mb-12">
            FAQ
          </h2>
          <div className="space-y-1">
            {MODEL_DATA.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-white/10">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-lg font-light tracking-tight pr-8 group-hover:opacity-70 transition-opacity">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 opacity-40" /> : <ChevronDown className="w-4 h-4 opacity-40" />}
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-white/60 font-light text-sm leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

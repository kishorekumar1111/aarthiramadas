import { motion } from 'motion/react';
import { MODEL_DATA } from '../data';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ContactFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section id="contact" className="py-32 bg-ivory text-text-primary border-t border-border-light relative">
      <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
        
        {/* Contact Form */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="text-[10px] tracking-[0.3em] uppercase text-text-secondary mb-4">Casting & Press</div>
          <h2 className="text-4xl lg:text-5xl font-serif leading-none tracking-tighter mb-4">
            Booking Inquiries
          </h2>
          <p className="text-sm text-text-secondary font-light mb-8 max-w-md">
            For direct bookings, castings, or press inquiries, please fill out the form below or contact me directly.
          </p>

          <div className="mb-12 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-text-primary font-light">
            <a href={`mailto:${MODEL_DATA.contact.email}`} className="hover:text-[#F2DDE5] transition-colors">{MODEL_DATA.contact.email}</a>
            <span className="hidden sm:inline text-text-muted">|</span>
            <a href={`tel:${MODEL_DATA.contact.phone}`} className="hover:text-[#F2DDE5] transition-colors">{MODEL_DATA.contact.phone}</a>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.2em] text-text-muted">Name / Company</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-border-medium pb-4 text-text-primary text-sm font-light focus:outline-none focus:border-text-primary transition-colors rounded-none px-0 placeholder:text-text-disabled" 
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.2em] text-text-muted">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-transparent border-b border-border-medium pb-4 text-text-primary text-sm font-light focus:outline-none focus:border-text-primary transition-colors rounded-none px-0 placeholder:text-text-disabled" 
                  placeholder="contact@brand.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[9px] uppercase tracking-[0.2em] text-text-muted">Project Details</label>
              <textarea 
                className="w-full bg-transparent border-b border-border-medium pb-4 text-text-primary text-sm font-light focus:outline-none focus:border-text-primary transition-colors rounded-none px-0 resize-none h-24 placeholder:text-text-disabled" 
                placeholder="Dates, location, usage..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="bg-pure-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#F2DDE5] hover:text-pure-black transition-colors w-full sm:w-auto mt-4"
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
          <div className="text-[10px] tracking-[0.3em] uppercase text-text-secondary mb-4 hidden lg:block">&nbsp;</div>
          <h2 className="text-4xl lg:text-5xl font-serif leading-none tracking-tighter mb-12">
            FAQ
          </h2>
          <div className="space-y-1">
            {MODEL_DATA.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-border-medium">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-lg font-light tracking-tight pr-8 group-hover:text-[#F2DDE5] transition-colors">{faq.question}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-text-muted" /> : <ChevronDown className="w-4 h-4 text-text-muted" />}
                  </button>
                  <motion.div 
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-text-secondary font-light text-sm leading-relaxed max-w-lg">
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

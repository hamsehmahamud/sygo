import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'SDC', logo: '/images/sygo/partners/sdc.png' },
  { name: 'SRS Women & Children Affairs', logo: '/images/sygo/partners/srs-women.jpeg' },
  { name: 'Somali Regional State Youth & Sport Bureau', logo: '/images/sygo/partners/srsysb.jpeg' },
  { name: 'Plan International', logo: '/images/sygo/partners/plan-international.jpeg' },
  { name: 'WDRO', logo: '/images/sygo/partners/wdro.jpeg' },
];

const Sponsors: React.FC = () => {
  // Triple the partners array to ensure seamless infinite scroll
  const scrollPartners = [...partners, ...partners, ...partners];

  return (
    <section id="sponsors" className="py-24 bg-sygo-yellow-light/10 dark:bg-slate-950 transition-colors duration-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 justify-center lg:justify-start"
            >
              <div className="h-px w-10 bg-sygo-yellow/30"></div>
              <span className="text-sygo-yellow font-black uppercase tracking-[0.3em] text-[11px]">Collaborative Impact</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl md:text-7xl font-black text-sygo-red-dark dark:text-white tracking-tighter leading-none"
            >
              Our Strategic <span className="text-sygo-accent">Partners</span>
            </motion.h2>
            <p className="mt-8 text-sygo-red-dark/60 dark:text-slate-400 font-medium text-xl leading-relaxed">
              Working together with international and local organizations to drive sustainable growth and youth empowerment in Somalia.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 px-6 py-3 rounded-2xl glass-effect border-sygo-accent/10"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-sygo-accent/60">Trusted By Global Leaders</span>
          </motion.div>
        </div>

        {/* Horizontal Scrolling Marquee */}
        <div className="relative w-full overflow-hidden py-10 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-sygo-yellow-light/10 before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-sygo-yellow-light/10 after:to-transparent">
          <motion.div
            className="flex gap-8 items-center"
            animate={{
              x: [0, -100 * partners.length], // Adjust based on item width + gap
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {scrollPartners.map((partner, index) => (
              <motion.div
                key={index}
                className="flex flex-col justify-center items-center p-8 glass-card bg-white dark:bg-slate-900 border-none transition-all duration-500 group w-[300px] shrink-0"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-16 w-auto object-contain transition-all duration-700 mb-6 grayscale group-hover:grayscale-0 group-hover:scale-110"
                />
                <span className="text-[10px] font-black uppercase text-center tracking-widest text-sygo-red-dark/40 dark:text-slate-500 group-hover:text-sygo-accent transition-colors">
                  {partner.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 p-8 sm:p-12 md:p-20 bg-sygo-red-dark dark:bg-slate-900 rounded-[3rem] sm:rounded-[4rem] text-white flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 shadow-3xl relative overflow-hidden border border-white/5"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sygo-accent/10 dark:bg-white/5 skew-x-12 translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="flex -space-x-4">
              {partners.slice(0, 3).map((p, i) => (
                <div key={i} className="size-20 rounded-3xl bg-white p-4 shadow-2xl border-4 border-sygo-red-dark dark:border-slate-900 overflow-hidden">
                  <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight mb-4">Become a Partner</h3>
              <p className="text-white/50 font-medium text-xl max-w-md">Join our global network of organizations working for sustainable change.</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 bg-sygo-accent hover:bg-white hover:text-sygo-accent text-white font-black rounded-3xl shadow-2xl shadow-sygo-accent/20 transition-all text-base sm:text-lg"
          >
            Partner With Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;



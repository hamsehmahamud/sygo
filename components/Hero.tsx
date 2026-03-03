import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <img
            src="/images/sygo/hero.jpg"
            alt="SYGO Youth Empowerment"
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>

        {/* Modern Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sygo-yellow-light/95 via-sygo-yellow-light/70 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-sygo-yellow-light dark:from-slate-950 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
        <div className="max-w-3xl space-y-6 sm:space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl glass-effect border-sygo-red/10 dark:border-white/5"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sygo-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sygo-red"></span>
            </span>
            <span className="text-sygo-red dark:text-sygo-yellow text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]">
              Empowering Somali Youth
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sygo-red-dark dark:text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter"
            >
              Shaping <br /> Tomorrow's <br /> <span className="text-sygo-red stroke-text">Leaders</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-sygo-red-dark/70 dark:text-slate-400 text-base sm:text-xl md:text-2xl font-medium leading-relaxed max-w-xl"
            >
              SYGO is dedicated to fostering growth mindsets and creating sustainable opportunities for the next generation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap gap-3 sm:gap-5 pt-2 sm:pt-4"
          >
            <button className="group relative px-7 sm:px-10 py-4 sm:py-5 bg-sygo-red text-white text-base sm:text-lg font-black rounded-2xl shadow-2xl shadow-sygo-red/20 transition-all hover:scale-105 active:scale-95 overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-sygo-red-dark translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <button className="px-7 sm:px-10 py-4 sm:py-5 glass-effect text-sygo-red-dark dark:text-white text-base sm:text-lg font-black rounded-2xl hover:bg-sygo-yellow/20 transition-all active:scale-95">
              Learn More
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const VisionMission: React.FC = () => {
  const coreValues = [
    { name: "Collaboration", icon: "handshake" },
    { name: "Integrity", icon: "verified" },
    { name: "Commitment", icon: "favorite" },
    { name: "Team-Work", icon: "groups" },
    { name: "Result-Oriented", icon: "trending_up" },
    { name: "Sustainability", icon: "eco" },
    { name: "Accountability", icon: "assignment_turned_in" },
    { name: "Transparency", icon: "visibility" },
    { name: "Leadership", icon: "stars" },
    { name: "Impartiality", icon: "balance" },
    { name: "Inclusiveness", icon: "diversity_3" },
    { name: "Innovation", icon: "lightbulb" }
  ];

  return (
    <section id="vision" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Modern Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-sygo-red/30"></div>
              <span className="text-sygo-red font-black uppercase tracking-[0.3em] text-[11px]">
                Our Foundation
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl md:text-8xl font-black text-sygo-red-dark dark:text-white tracking-tighter leading-[0.85]"
            >
              Vision, Mission <br />
              <span className="text-sygo-accent">& Core Values</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sygo-red-dark/60 dark:text-slate-400 font-medium max-w-sm text-xl leading-snug"
          >
            Empowering Somali youth through inclusive leadership and sustainable economic opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Vision - Premium Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-12 glass-card bg-sygo-red-dark dark:bg-slate-900 border-none p-8 sm:p-12 md:p-20 text-white relative flex flex-col gap-8 sm:gap-12 items-center"
          >
            <div className="w-full relative h-[220px] sm:h-[300px] md:h-[400px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden group">
              <img
                src="/images/sygo/vision.jpg"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="SYGO Vision"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sygo-red-dark/60 to-transparent"></div>
            </div>

            <div className="w-full relative z-20 space-y-6 sm:space-y-8">
              <div className="inline-flex size-20 rounded-3xl bg-sygo-yellow/20 backdrop-blur-xl border border-sygo-yellow/20 items-center justify-center text-sygo-yellow shadow-2xl">
                <span className="material-symbols-outlined text-4xl font-bold">visibility</span>
              </div>
              <div>
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase mb-4 sm:mb-6 leading-none">Our Vision</h3>
                <p className="text-xl sm:text-3xl md:text-4xl leading-tight font-bold tracking-tight text-white/95 italic">
                  "A society where empowered youth and women lead inclusive and sustainable development."
                </p>
                <p className="mt-8 text-xl text-white/50 font-medium leading-relaxed max-w-lg">
                  We envision a future where every young person in Somalia has the tools to innovate and lead.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission - Dynamic Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 glass-card bg-sygo-yellow border-none p-8 sm:p-12 md:p-16 text-sygo-red-dark relative overflow-hidden flex flex-col justify-between min-h-[320px] sm:min-h-[400px] lg:min-h-[500px]"
          >
            <div className="absolute -bottom-20 -right-20 opacity-5 group-hover:scale-110 transition-transform duration-1000">
              <span className="material-symbols-outlined text-[25rem]">target</span>
            </div>

            <div className="relative z-10 space-y-10">
              <div className="size-16 rounded-2xl bg-sygo-red-dark flex items-center justify-center text-white shadow-2xl">
                <span className="material-symbols-outlined text-4xl font-bold">track_changes</span>
              </div>
              <div>
                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4 sm:mb-6">Our Mission</h3>
                <p className="text-lg sm:text-2xl md:text-3xl leading-tight font-black opacity-90">
                  To empower youth—especially young women—through skills development, leadership protection, and economic opportunities.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-4 mt-12">
              <div className="h-px w-10 bg-sygo-red-dark/30"></div>
              <span className="text-xs font-black uppercase tracking-widest opacity-60">Strategic Impact Focus</span>
            </div>
          </motion.div>

          {/* Core Values Wrapper */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-6 glass-card bg-sygo-accent/10 dark:bg-sygo-accent/5 p-8 sm:p-12 md:p-16 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-4xl font-black text-sygo-red-dark dark:text-white uppercase tracking-tighter">Core Values</h3>
                <div className="size-16 rounded-2xl bg-sygo-accent flex items-center justify-center text-white shadow-xl">
                  <span className="material-symbols-outlined text-3xl">diamond</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {coreValues.slice(0, 8).map((value, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white/50 dark:bg-white/5 border border-white/20 dark:border-white/5 hover:scale-105 transition-transform"
                  >
                    <span className="material-symbols-outlined text-sygo-accent text-xl">{value.icon}</span>
                    <span className="text-sm font-bold text-sygo-red-dark dark:text-slate-300">{value.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMission;



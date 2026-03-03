import React from 'react';
import { motion } from 'framer-motion';

const impactData = [
  { icon: 'school', value: '180', label: 'Youth trained in leadership', color: 'bg-sygo-red' },
  { icon: 'groups', value: '25', label: 'Active volunteers in the field', color: 'bg-sygo-accent' },
  { icon: 'verified', value: '100%', label: 'Commitment to community growth', color: 'bg-sygo-red-dark' },
  { icon: 'auto_graph', value: '10,000+', label: 'People reached via advocacy', color: 'bg-sygo-red' },
];

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-32 bg-sygo-yellow dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10 grayscale mix-blend-multiply dark:mix-blend-overlay">
        <img src="/input_file_9.png" className="w-full h-full object-cover" alt="Impact Background" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-24 -left-24 size-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 size-96 bg-sygo-red-dark/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-10 rounded-[3rem] bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-2xl group hover:bg-white dark:hover:bg-slate-700 hover:scale-105 transition-all duration-500"
            >
              <div className={`size-20 rounded-3xl ${item.color} flex items-center justify-center mb-8 shadow-xl group-hover:rotate-12 transition-transform duration-500`}>
                <span className="material-symbols-outlined text-4xl text-white">{item.icon}</span>
              </div>
              <p className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 tracking-tighter text-sygo-red-dark dark:text-white group-hover:text-sygo-red transition-colors">{item.value}</p>
              <p className="text-sm font-black text-sygo-red-dark/60 dark:text-slate-400 uppercase tracking-[0.2em] leading-tight max-w-[180px]">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote/Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="text-2xl md:text-3xl font-black text-sygo-red-dark/80 dark:text-slate-200 tracking-tight max-w-4xl mx-auto leading-tight">
            "Our impact is measured not just in numbers, but in the <span className="text-white">transformed lives</span> and strengthened communities we serve every day."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Impact;

import React from 'react';
import { motion } from 'framer-motion';

const newsItems = [
  {
    date: 'Dec 14, 2025',
    comments: 6,
    title: 'Training Organizational Governance and Administration',
    author: 'Mahamed Omer',
    imageUrl: '/images/sygo/project-2.jpg',
  },
  {
    date: 'Nov 30, 2025',
    comments: 4,
    title: 'Staff Training on Gender Equality and Youth Engagement',
    author: 'Mahamed Omer',
    imageUrl: '/images/sygo/hero.jpg',
  },
  {
    date: 'Oct 30, 2025',
    comments: 2,
    title: "Youth Peer to Peer Education Workshops in Jigjiga",
    author: 'Mahamed Omer',
    imageUrl: '/images/sygo/vision.jpg',
  }
];

const RecentNews: React.FC = () => {
  return (
    <section id="news" className="py-24 bg-sygo-yellow-light/20 dark:bg-slate-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-sygo-red/30"></div>
              <span className="text-sygo-red font-black uppercase tracking-[0.3em] text-[11px]">Latest Updates</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black text-sygo-red-dark dark:text-white tracking-tighter leading-[0.85]"
            >
              Impact <span className="text-sygo-yellow">Stories</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-sygo-red-dark/60 dark:text-slate-400 font-medium max-w-sm text-xl"
          >
            Insights and progress from our various initiatives across the Horn of Africa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group glass-card bg-white dark:bg-slate-900 border-none h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-[0.16, 1, 0.3, 1]"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-sygo-red/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-black text-white flex items-center gap-2 shadow-xl">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    {item.date}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black text-sygo-red-dark dark:text-white mb-6 leading-tight group-hover:text-sygo-red transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-sygo-red/5 dark:border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-sygo-yellow/20 flex items-center justify-center text-sygo-yellow overflow-hidden p-0.5">
                      <img src={`https://i.pravatar.cc/150?u=${item.author}`} className="w-full h-full object-cover rounded-[0.5rem]" alt={item.author} />
                    </div>
                    <span className="text-xs font-black text-sygo-red-dark dark:text-white uppercase tracking-widest">{item.author}</span>
                  </div>
                  <div className="size-10 rounded-xl bg-sygo-red/10 flex items-center justify-center text-sygo-red group-hover:bg-sygo-red group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-sm">arrow_outward</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentNews;


import React from 'react';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  target: number;
  reached: number; // Percentage
  backers: number;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imageUrl, category, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group glass-card bg-white dark:bg-slate-900 border-none flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[0.16, 1, 0.3, 1] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sygo-red-dark/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-lg bg-sygo-yellow text-sygo-red-dark text-[10px] font-black uppercase tracking-widest shadow-lg">
            {category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-2xl font-black text-sygo-red-dark dark:text-white leading-tight mb-4 group-hover:text-sygo-red transition-colors">
          {title}
        </h3>
        <p className="text-sm text-sygo-red-dark/60 dark:text-slate-400 font-medium leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto pt-6 border-t border-sygo-red/5 dark:border-white/5 flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-sygo-red/60">View Initiative</span>
          <span className="material-symbols-outlined text-sygo-red transform group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
        </div>
      </div>
    </motion.div>
  );
};


export default ProjectCard;
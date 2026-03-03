import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { ProjectCardProps } from './ProjectCard';

const allProjects: ProjectCardProps[] = [
  {
    category: 'Grants Application',
    title: 'Institutional Capacity Strengthening',
    description: 'Grant Type 2 Short Proposal Application. Flexible grants allowing WLOs to propose innovative activities, including technology-based solutions, to respond to GBV or mitigate risks.',
    target: 20000,
    reached: 10,
    backers: 15,
    imageUrl: '/input_file_21.png',
  },
  {
    category: 'Grants Application',
    title: 'Project Implementation',
    description: 'Grant Type 2. Flexible grants allowing WLOs to propose innovative activities, including technology-based solutions and new ideas that could assist in responding to GBV or mitigating GBV risks.',
    target: 40000,
    reached: 5,
    backers: 8,
    imageUrl: '/input_file_22.png',
  },
  {
    category: 'Humanitarian',
    title: 'GBV Prevention & Response',
    description: 'Providing essential support and material for survivor-centered, gender-responsive service provision at One Stop Centers.',
    target: 50000,
    reached: 65,
    backers: 420,
    imageUrl: '/images/sygo/project-3.jpg',
  },
  {
    category: 'Advocacy',
    title: 'Youth Radio Discourse & SBCC',
    description: 'Engaging youth through radio discourse and Social and Behavior Change Communication to promote positive community growth.',
    target: 25000,
    reached: 80,
    backers: 215,
    imageUrl: '/images/sygo/project-1.jpg',
  },
  {
    category: 'Leadership',
    title: 'Stakeholder Engagement',
    description: 'Fostering collaboration and networking among key stakeholders to strengthen organizational governance and community impact.',
    target: 15000,
    reached: 45,
    backers: 98,
    imageUrl: '/images/sygo/project-2.jpg'
  },
  {
    category: 'Education',
    title: 'Youth Peer-to-Peer Learning',
    description: 'Empowering the next generation through structured peer learning and growth mindset workshops across the region.',
    target: 30000,
    reached: 92,
    backers: 560,
    imageUrl: '/images/sygo/hero.jpg'
  },
  {
    category: 'Protection',
    title: 'Women\'s Rights & Safety',
    description: 'Dedicated initiatives for the protection of women and girls, focusing on equality and preventing harmful practices.',
    target: 20000,
    reached: 70,
    backers: 180,
    imageUrl: '/images/sygo/vision.jpg'
  }
];

const ActiveProjects: React.FC = () => {
  return (
    <section id="causes" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sygo-accent/10 border border-sygo-accent/10 mb-6"
          >
            <span className="text-sygo-accent text-[10px] font-black uppercase tracking-widest">Our Initiatives</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-sygo-red-dark dark:text-white mb-6 tracking-tighter leading-none"
          >
            Powering <span className="text-sygo-red">Real Change</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-sygo-red-dark/60 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Explore our active projects dedicated to humanitarian aid, education, and empowering the youth of Somalia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {allProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};


export default ActiveProjects;
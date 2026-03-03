import React from 'react';

const categories = [
  {
    title: 'GBV Prevention',
    description: 'Prevention and response to Gender-Based Violence in the Horn of Africa.',
    icon: 'security',
    color: 'text-sygo-yellow',
    bgColor: 'bg-sygo-yellow/10',
    image: '/input_file_5.png'
  },
  {
    title: 'Youth Empowerment',
    description: 'Empowering youth through skills development, leadership, and economic opportunities.',
    icon: 'groups',
    color: 'text-sygo-red',
    bgColor: 'bg-sygo-red/10',
    image: '/input_file_0.png'
  },
  {
    title: 'Education & Skills',
    description: 'Providing access to quality education and vocational training for a better future.',
    icon: 'school',
    color: 'text-sygo-yellow',
    bgColor: 'bg-sygo-yellow/10',
    image: '/input_file_6.png'
  },
  {
    title: 'Health & Nutrition',
    description: 'Improving community health through awareness, support, and essential resources.',
    icon: 'health_and_safety',
    color: 'text-sygo-red',
    bgColor: 'bg-sygo-red/10',
    image: '/input_file_4.png'
  }
];

const Categories: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sygo-red-dark dark:text-white mb-4 tracking-tight">Our Categories</h2>
          <p className="text-lg text-sygo-red/80 dark:text-slate-400 max-w-2xl mx-auto">
            We focus on key areas that drive sustainable development and empower communities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <div key={index} className="group relative p-6 sm:p-8 rounded-[2rem] sm:rounded-[3rem] border border-sygo-red/10 dark:border-white/5 hover:border-sygo-yellow/30 hover:shadow-2xl hover:shadow-sygo-yellow/5 transition-all duration-500 text-center flex flex-col items-center overflow-hidden bg-white dark:bg-slate-900">
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <img src={cat.image} className="w-full h-full object-cover" alt={cat.title} />
              </div>
              <div className={`relative z-10 size-20 rounded-2xl ${cat.bgColor} dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                <span className={`material-symbols-outlined text-4xl ${cat.color}`}>{cat.icon}</span>
              </div>
              <h3 className="relative z-10 text-xl font-black text-sygo-red-dark dark:text-white mb-4">{cat.title}</h3>
              <p className="relative z-10 text-sygo-red/80 dark:text-slate-400 leading-relaxed">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default Categories;

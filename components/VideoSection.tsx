import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-sygo-red-dark dark:text-white mb-8 sm:mb-12 tracking-tight px-4">We Empower The Poorest</h2>
        <div className="relative max-w-5xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl group cursor-pointer">
          <img
            src="/input_file_6.png"
            alt="Empowerment"
            className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-sygo-red-dark/20 group-hover:bg-sygo-red-dark/40 transition-colors"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <button className="size-16 sm:size-20 md:size-24 bg-sygo-yellow text-white rounded-full flex items-center justify-center shadow-2xl shadow-sygo-yellow/40 hover:scale-110 transition-transform hover:bg-sygo-red">
              <span className="material-symbols-outlined text-5xl fill-1">play_arrow</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

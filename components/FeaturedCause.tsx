import React from 'react';

const FeaturedCause: React.FC = () => {
  return (
    <section className="py-24 bg-sygo-yellow-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/input_file_1.png" 
                  alt="SYGO Activity" 
                  className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl"
                />
                <img 
                  src="/input_file_3.png" 
                  alt="SYGO Community" 
                  className="rounded-3xl w-full aspect-square object-cover shadow-2xl"
                />
              </div>
              <div className="pt-12 space-y-4">
                <img 
                  src="/input_file_7.png" 
                  alt="SYGO Support" 
                  className="rounded-3xl w-full aspect-square object-cover shadow-2xl"
                />
                <img 
                  src="/input_file_8.png" 
                  alt="SYGO Education" 
                  className="rounded-3xl w-full aspect-[3/4] object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-8">

            <h2 className="text-5xl sm:text-6xl font-black text-sygo-red-dark leading-tight tracking-tighter">
              Give a Helping hand to Those Who Need It?
            </h2>
            <p className="text-xl text-sygo-red/80 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl turpis, tempus nec egestas ac, auctor a est. Mauris vitae volutpat neque, ut sodales sem.
            </p>
            
            <div className="bg-sygo-yellow/5 p-8 rounded-3xl border border-sygo-red/10">
                <div className="flex justify-between items-end mb-4">
                    <div>
                        <p className="text-sygo-yellow font-black text-3xl">$36,000</p>
                        <p className="text-sm font-bold text-sygo-red/40 uppercase tracking-widest">Donation Needed</p>
                    </div>
                    <button className="px-8 py-3 bg-sygo-yellow hover:bg-sygo-red text-white font-bold rounded-xl transition-all shadow-lg shadow-sygo-yellow/20">
                        Donate Now
                    </button>
                </div>
                <div className="w-full bg-sygo-red/10 h-3 rounded-full overflow-hidden">
                    <div className="bg-sygo-yellow h-full w-[65%] rounded-full"></div>
                </div>
            </div>

            <button className="px-10 py-4 border-2 border-sygo-red-dark text-sygo-red-dark font-black rounded-xl hover:bg-sygo-red-dark hover:text-white transition-all">
              View Our Causes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCause;

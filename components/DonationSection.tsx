import React, { useState } from 'react';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    ethereum?: any;
  }
}

const DonationSection: React.FC = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const amounts = [10, 25, 50, 100];

  const connectWallet = async () => {
    setIsConnecting(true);
    setError(null);
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
      } else {
        throw new Error('MetaMask is not installed. Please install it to connect your wallet.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to connect to MetaMask');
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sygo-red via-sygo-yellow to-sygo-red opacity-20"></div>
      <div className="absolute -bottom-24 -left-24 size-96 bg-sygo-yellow rounded-full blur-[100px] opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2rem] sm:rounded-[3rem] lg:rounded-[4rem] shadow-2xl shadow-sygo-red/5 border border-sygo-red/5 overflow-hidden">
          <div className="flex flex-col lg:flex-row">

            {/* Left Content */}
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-20 bg-sygo-red-dark text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sygo-yellow font-black uppercase tracking-[0.3em] text-sm mb-6 block">Support Our Mission</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 tracking-tighter leading-none">
                  Make A <br /> <span className="text-sygo-yellow">Donation</span>
                </h2>
                <p className="text-xl text-white/70 font-medium leading-relaxed max-w-md mb-10">
                  Join us in creating a brighter, more compassionate world. Your contribution directly empowers youth and women in the Somali region.
                </p>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-sygo-red flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">volunteer_activism</span>
                  </div>
                  <span className="font-bold text-lg">100% of proceeds go to projects</span>
                </div>
              </motion.div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 p-8 sm:p-12 lg:p-20 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <label className="block text-xs font-black text-sygo-red/40 uppercase tracking-widest mb-6">Select Amount (USD)</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {amounts.map((amount) => (
                      <button
                        key={amount}
                        className="group relative py-4 px-2 bg-slate-50 border-2 border-transparent rounded-2xl font-black text-sygo-red-dark hover:border-sygo-yellow hover:bg-white transition-all shadow-sm overflow-hidden"
                      >
                        <span className="relative z-10">${amount}</span>
                        <div className="absolute inset-0 bg-sygo-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-xs font-black text-sygo-red/40 uppercase tracking-widest">Or enter custom amount</label>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <span className="absolute left-6 top-1/2 -translate-y-1/2 text-sygo-red-dark font-black text-xl">$</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        className="w-full pl-10 sm:pl-12 pr-4 sm:pr-6 py-4 sm:py-5 bg-sygo-yellow/5 border-2 border-sygo-red/5 rounded-2xl font-black text-lg sm:text-xl text-sygo-red-dark focus:border-sygo-yellow focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <button
                      onClick={connectWallet}
                      disabled={isConnecting}
                      className="px-8 sm:px-12 py-4 sm:py-5 bg-sygo-yellow hover:bg-sygo-red text-white font-black rounded-2xl shadow-xl shadow-sygo-yellow/20 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50 w-full sm:w-auto mt-4 sm:mt-0"
                    >
                      {isConnecting ? 'Connecting...' : account ? `Connected: ${account.substring(0, 6)}...` : 'Donate Now'}
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                  {error && (
                    <p className="text-sygo-red text-xs font-bold mt-2">{error}</p>
                  )}
                </div>

                <p className="text-center text-xs font-bold text-sygo-red/30">
                  Secure payment processing. Tax-deductible in applicable regions.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;


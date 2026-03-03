import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Logo from './Logo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [hasScrolled, setHasScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#vision' },
    { name: 'Causes', href: '#causes' },
    { name: 'Impact', href: '#impact' },
    { name: 'Contact', href: '#contact' },
  ];

  const [theme, setThemeState] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 40);
    };

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (t: 'light' | 'dark' | null) => {
      const activeTheme = t || (systemPrefersDark.matches ? 'dark' : 'light');

      if (activeTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      setThemeState(activeTheme);
    };

    applyTheme(savedTheme);

    const handleSystemThemeChange = () => {
      if (!localStorage.getItem('theme')) {
        applyTheme(null);
      }
    };

    systemPrefersDark.addEventListener('change', handleSystemThemeChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      systemPrefersDark.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const changeTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-sygo-red-dark text-sygo-yellow-light py-2.5 px-4 sm:px-6 lg:px-8 border-b border-sygo-yellow/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 text-xs font-medium text-sygo-yellow-light/80">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-sygo-yellow">location_on</span>
              Jigjig City, 06 Kebele
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-sygo-yellow">phone</span>
              +251 948677457, +251 915428533
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm text-sygo-yellow">mail</span>
              info@sygoet.org
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sygo-yellow/60 hover:text-sygo-yellow transition-colors" title="Facebook: Somali Youth Growth Mind Orginization">
              <span className="material-symbols-outlined text-sm">facebook</span>
            </a>
            <a href="#" className="text-sygo-yellow/60 hover:text-sygo-yellow transition-colors" title="Instagram: @sygo">
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </a>
            <a href="#" className="text-sygo-yellow/60 hover:text-sygo-yellow transition-colors">
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-sygo-yellow-light dark:bg-slate-900 shadow-xl' : 'bg-sygo-yellow-light/95 dark:bg-slate-900/95 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo Section */}
            <a href="#home" className="flex items-center gap-3 cursor-pointer group">
              <Logo />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-sygo-red/60 uppercase tracking-[0.2em] mt-1">Growth Mind Organization</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-black transition-colors relative group py-2 ${activeSection === item.href.substring(1)
                    ? 'text-sygo-red'
                    : 'text-sygo-red-dark dark:text-slate-300 hover:text-sygo-red dark:hover:text-sygo-yellow'
                    }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-sygo-red-dark dark:text-white rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors active:scale-90"
              >
                <span className="material-symbols-outlined text-3xl">
                  {isMenuOpen ? 'close' : 'more_horiz'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Modern Sidebar Drawer */}
      <AnimatePresence>
        {
          isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-40 bg-sygo-red-dark/20 dark:bg-black/40 backdrop-blur-sm lg:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 z-50 w-[85vw] max-w-sm bg-white dark:bg-slate-900 shadow-2xl lg:hidden flex flex-col border-l border-black/5 dark:border-white/5"
              >
                <div className="flex items-center justify-between p-6 border-b border-black/5 dark:border-white/5">
                  <span className="text-sm font-black text-sygo-red/60 uppercase tracking-widest">Menu</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 bg-sygo-yellow-light dark:bg-slate-800 text-sygo-red-dark dark:text-white rounded-xl shadow-sm border border-black/5 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl sm:text-2xl">close</span>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <nav className="flex flex-col gap-4">
                    {navLinks.map((item, idx) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center justify-between group py-3 px-4 rounded-2xl hover:bg-sygo-yellow-light dark:hover:bg-slate-800 transition-colors"
                      >
                        <span className="text-xl sm:text-2xl font-black text-sygo-red-dark dark:text-white group-hover:text-sygo-red transition-colors">{item.name}</span>
                        <span className="material-symbols-outlined opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 text-sygo-red transition-all">arrow_forward</span>
                      </motion.a>
                    ))}
                  </nav>
                </div>

                <div className="p-6 mt-auto border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-sygo-red-dark dark:text-white uppercase tracking-widest">
                      {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    <button
                      onClick={() => {
                        changeTheme(theme === 'dark' ? 'light' : 'dark');
                        setIsMenuOpen(false);
                      }}
                      className="p-3 sm:p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-black/5 dark:border-white/10 text-sygo-red dark:text-sygo-yellow transition-all active:scale-90 flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-[24px] block">
                        {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )
        }
      </AnimatePresence >
    </>
  );
};


export default Header;
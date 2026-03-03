import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sygo-red-dark text-sygo-yellow-light pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-3 group">
              <Logo size="size-10" />
              <span className="text-2xl font-black tracking-tighter">SYGO</span>
            </a>

            <p className="text-sygo-yellow-light/60 leading-relaxed">
              Somali Youth Growth Mind Organization (SYGO) is dedicated to empowering youth and creating lasting change through education and community growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sygo-yellow transition-all group" title="Facebook: Somali Youth Growth Mind Orginization">
                <span className="material-symbols-outlined text-lg">facebook</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sygo-yellow transition-all group" title="Instagram: @sygo">
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a href="#" className="size-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-sygo-yellow transition-all group">
                <span className="material-symbols-outlined text-lg">share</span>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-black mb-4 sm:mb-6">About</h3>
            <ul className="space-y-4 text-sygo-yellow-light/60">
              <li><a href="#vision" className="hover:text-sygo-yellow transition-colors">Our Story</a></li>
              <li><a href="#causes" className="hover:text-sygo-yellow transition-colors">Causes</a></li>
              <li><a href="#impact" className="hover:text-sygo-yellow transition-colors">Impact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 sm:mb-6">Discover</h3>
            <ul className="space-y-4 text-sygo-yellow-light/60">
              <li><a href="#" className="hover:text-sygo-yellow transition-colors">Where We Are</a></li>
              <li><a href="#" className="hover:text-sygo-yellow transition-colors">History</a></li>
              <li><a href="#" className="hover:text-sygo-yellow transition-colors">Communications</a></li>
              <li><a href="#" className="hover:text-sygo-yellow transition-colors">Join Our Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-black mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-4 text-sygo-yellow-light/60">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sygo-yellow text-sm">phone</span>
                <div className="flex flex-col">
                  <a href="tel:+251948677457" className="hover:text-sygo-yellow transition-colors">+251 948677457</a>
                  <a href="tel:+251915428533" className="hover:text-sygo-yellow transition-colors">+251 915428533</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sygo-yellow text-sm">mail</span>
                <a href="mailto:info@sygoet.org" className="hover:text-sygo-yellow transition-colors">info@sygoet.org</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-sygo-yellow text-sm">location_on</span>
                <span className="text-xs leading-tight">Jigjig City, 06 Kebele, Inside Jigjiga Youth Center</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-sygo-yellow-light/40">
          <p>© 2025 SYGO Organization. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-8 flex-wrap justify-center mt-4 md:mt-0">
            <a href="#" className="hover:text-sygo-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sygo-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

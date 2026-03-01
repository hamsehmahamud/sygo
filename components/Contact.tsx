import React from 'react';
import { motion } from 'framer-motion';

const contactDetails = {
    address: 'Jigjig City, 06 Kebele, Inside Jigjiga Youth Center (Located in front of Jigjiga Public Administration and Management College)',
    phone: '+251 948677457, +251 915428533',
    email: 'info@sygoet.org',
    website: 'sygoet.org',
    socialMedia: {
        facebook: 'Somali Youth Growth Mind Orginization',
        instagram: '@sygo'
    }
};

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sygo-red font-black uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Connect With Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-sygo-red-dark dark:text-white tracking-tighter"
          >
            Get in <span className="text-sygo-yellow">Touch</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Office Info Card - Modernized version of the image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 bg-sygo-yellow-light dark:bg-slate-800 p-10 md:p-14 rounded-[4rem] shadow-2xl border-2 border-sygo-red/5 dark:border-white/5 relative overflow-hidden group"
          >
            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
              <img src="/input_file_2.png" className="w-full h-full object-cover" alt="Office Background" />
            </div>
            <div className="absolute -top-20 -left-20 size-64 bg-sygo-yellow rounded-full blur-3xl opacity-20 z-10"></div>
            
            <div className="relative z-20 space-y-10">
              <div>
                <h3 className="text-4xl font-black text-sygo-red dark:text-sygo-yellow tracking-tighter mb-8">Our Office</h3>
              </div>

              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-xs font-black text-sygo-red/40 dark:text-slate-500 uppercase tracking-widest mb-2 group-hover:text-sygo-red dark:group-hover:text-sygo-yellow transition-colors">Address:</h4>
                  <p className="text-xl font-bold text-sygo-red-dark dark:text-slate-200 leading-tight">
                    {contactDetails.address}
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-xs font-black text-sygo-red/40 dark:text-slate-500 uppercase tracking-widest mb-2 group-hover:text-sygo-red dark:group-hover:text-sygo-yellow transition-colors">Phone:</h4>
                  <p className="text-xl font-bold text-sygo-red-dark dark:text-slate-200">
                    {contactDetails.phone}
                  </p>
                </div>

                <div className="group">
                  <h4 className="text-xs font-black text-sygo-red/40 dark:text-slate-500 uppercase tracking-widest mb-2 group-hover:text-sygo-red dark:group-hover:text-sygo-yellow transition-colors">Email:</h4>
                  <a href={`mailto:${contactDetails.email}`} className="text-xl font-bold text-sygo-red-dark dark:text-slate-200 hover:text-sygo-red dark:hover:text-sygo-yellow transition-colors">
                    {contactDetails.email}
                  </a>
                </div>

                <div className="group">
                  <h4 className="text-xs font-black text-sygo-red/40 dark:text-slate-500 uppercase tracking-widest mb-2 group-hover:text-sygo-red dark:group-hover:text-sygo-yellow transition-colors">Website:</h4>
                  <a href={`https://${contactDetails.website}`} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-sygo-red-dark dark:text-slate-200 hover:text-sygo-red dark:hover:text-sygo-yellow transition-colors">
                    {contactDetails.website}
                  </a>
                </div>

                <div className="pt-6 border-t border-sygo-red/10 dark:border-white/10">
                  <h4 className="text-xs font-black text-sygo-red/40 dark:text-slate-500 uppercase tracking-widest mb-4">Social Media:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-sygo-red/10 dark:bg-white/5 flex items-center justify-center text-sygo-red dark:text-sygo-yellow">
                        <span className="material-symbols-outlined text-lg">facebook</span>
                      </div>
                      <span className="font-bold text-sygo-red-dark dark:text-slate-300">{contactDetails.socialMedia.facebook}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-lg bg-sygo-red/10 dark:bg-white/5 flex items-center justify-center text-sygo-red dark:text-sygo-yellow">
                        <span className="material-symbols-outlined text-lg">photo_camera</span>
                      </div>
                      <span className="font-bold text-sygo-red-dark dark:text-slate-300">{contactDetails.socialMedia.instagram}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map & Form Section */}
          <div className="lg:col-span-7 space-y-8">
            {/* Map */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="h-[350px] rounded-[3rem] overflow-hidden shadow-xl border-2 border-sygo-red/5 dark:border-white/5 relative group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.341144509364!2d42.77!3d9.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1634590000000000%3A0x0!2zOcKwMjEnMDAuMCJOIDQywrA0NicwMC4wIkU!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set"
                width="100%"
                height="100%"
                className="absolute inset-0 grayscale dark:invert dark:opacity-80 group-hover:grayscale-0 dark:group-hover:invert-0 dark:group-hover:opacity-100 transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/10 dark:border-slate-900/10 rounded-[3rem]"></div>
            </motion.div>

            {/* Simple Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-sygo-red-dark dark:bg-slate-800 p-10 rounded-[3rem] text-white shadow-2xl"
            >
              <h3 className="text-2xl font-black mb-6 tracking-tight">Send us a Message</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/10 p-4 rounded-2xl focus:bg-white focus:text-sygo-red-dark outline-none transition-all font-bold" />
                <input type="email" placeholder="Email Address" className="bg-white/10 border border-white/10 p-4 rounded-2xl focus:bg-white focus:text-sygo-red-dark outline-none transition-all font-bold" />
                <textarea placeholder="How can we help?" rows={3} className="md:col-span-2 bg-white/10 border border-white/10 p-4 rounded-2xl focus:bg-white focus:text-sygo-red-dark outline-none transition-all font-bold"></textarea>
                <button className="md:col-span-2 py-4 bg-sygo-yellow hover:bg-white hover:text-sygo-red-dark text-sygo-red-dark font-black rounded-2xl transition-all active:scale-95 shadow-xl shadow-sygo-yellow/20">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;


import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Categories from './components/Categories';
import VideoSection from './components/VideoSection';
import Impact from './components/Impact';
import ActiveProjects from './components/ActiveProjects';
import RecentNews from './components/RecentNews';
import Sponsors from './components/Sponsors';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Section: React.FC<{ children: React.ReactNode; id: string }> = ({ children, id }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

const App: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 font-sans transition-colors duration-300 overflow-x-hidden">
      <Header />
      <main>
        <Section id="home">
          <Hero />
        </Section>
        <Section id="vision">
          <VisionMission />
        </Section>
        <Section id="categories">
          <Categories />
        </Section>
        <Section id="video">
          <VideoSection />
        </Section>
        <Section id="impact">
          <Impact />
        </Section>
        <Section id="causes">
          <ActiveProjects />
        </Section>
        <Section id="news">
          <RecentNews />
        </Section>
        <Section id="sponsors">
          <Sponsors />
        </Section>
        <Section id="contact">
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default App;


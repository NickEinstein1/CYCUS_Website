import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Marquee from '../components/Marquee';
import CaseStudies from '../components/CaseStudies';
import FeatureCards from '../components/FeatureCards';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';

/*
  Page order:
  Hero → Trust strip → Case studies → Why us → Services → Contact
*/
const Home = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <Hero />
        <TrustStrip />
        <Marquee speed={30} />
        <CaseStudies />
        <FeatureCards />
        <ServicesSection />
        <ContactSection />
    </motion.div>
);

export default Home;

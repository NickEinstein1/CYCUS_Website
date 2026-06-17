import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import Marquee from '../components/Marquee';
import StatsCounter from '../components/StatsCounter';
import CaseStudies from '../components/CaseStudies';
import FeatureCards from '../components/FeatureCards';
import ServicesSection from '../components/ServicesSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

/*
  Page order mirrors Vercept Digital:
  Hero → Trust strip → Case studies → Why us (2×2 grid) → Stats →
  Services accordion → Testimonials → Contact
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
        <StatsCounter />
        <ServicesSection />
        <Testimonials />
        <ContactSection />
    </motion.div>
);

export default Home;

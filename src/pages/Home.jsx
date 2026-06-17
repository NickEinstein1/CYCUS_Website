import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import StatsCounter from '../components/StatsCounter';
import ServicesSection from '../components/ServicesSection';
import CaseStudies from '../components/CaseStudies';
import FeatureCards from '../components/FeatureCards';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

const Home = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <Hero />
        <Marquee speed={30} />
        <StatsCounter />
        <ServicesSection />
        <CaseStudies />
        <FeatureCards />
        <Testimonials />
        <ContactSection />
    </motion.div>
);

export default Home;

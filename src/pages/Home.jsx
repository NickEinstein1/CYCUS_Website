import React from 'react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import FeatureCards from '../components/FeatureCards';
import CaseStudies from '../components/CaseStudies';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import SectionDivider from '../components/SectionDivider';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative"
        >
            <Hero />
            <StatsCounter />
            <SectionDivider />
            <FeatureCards />
            <SectionDivider />
            <CaseStudies />
            <SectionDivider />
            <Testimonials />
            <SectionDivider />
            <ContactSection />
        </motion.div>
    );
};

export default Home;

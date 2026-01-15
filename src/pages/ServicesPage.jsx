import React from 'react';
import ServicesSection from '../components/ServicesSection';
import { motion } from 'framer-motion';

const ServicesPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
            style={{ paddingTop: '80px' }}
        >
            <ServicesSection />
        </motion.div>
    );
};

export default ServicesPage;

import React from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen"
            style={{ paddingTop: '80px' }}
        >
            <ContactSection />
        </motion.div>
    );
};

export default ContactPage;

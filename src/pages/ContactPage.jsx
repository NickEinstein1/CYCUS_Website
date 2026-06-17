import React from 'react';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const ContactPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: 'var(--hh)' }}
        >
            <ContactSection />
        </motion.div>
    );
};

export default ContactPage;

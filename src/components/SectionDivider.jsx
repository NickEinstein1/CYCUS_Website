import React from 'react';
import { motion } from 'framer-motion';
import './SectionDivider.css';

const SectionDivider = () => {
    return (
        <div className="section-divider">
            <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className="divider-line"
            >
                <div className="divider-glow"></div>
            </motion.div>
        </div>
    );
};

export default SectionDivider;


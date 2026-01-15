import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './ScrollIndicator.css';

const ScrollIndicator = () => {
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="scroll-indicator"
            onClick={scrollToContent}
        >
            <div className="scroll-indicator-text">Scroll to explore</div>
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="scroll-icon"
            >
                <ChevronDown size={24} />
            </motion.div>
        </motion.div>
    );
};

export default ScrollIndicator;


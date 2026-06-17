import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            {/* Top meta row */}
            <div className="hero__meta">
                <span className="hero__meta-item">CYCUS Technologies</span>
                <span className="hero__meta-sep">×</span>
                <span className="hero__meta-item">Nairobi, Kenya</span>
                <span className="hero__meta-sep">×</span>
                <span className="hero__meta-item">Est. 2024</span>
            </div>

            {/* Main title */}
            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="hero__title"
            >
                <span className="hero__title-line">Architecting</span>
                <span className="hero__title-line hero__title-line--indent">the Future</span>
                <span className="hero__title-line">
                    of <em>Secure</em> <span className="hero__title-red">AI.</span>
                </span>
            </motion.h1>

            {/* Bottom row */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                className="hero__bottom"
            >
                <p className="hero__desc">
                    Pioneering sovereign intelligence and fortress-grade digital infrastructure
                    that powers the world's most critical operations.
                </p>
                <div className="hero__actions">
                    <Link to="/services" className="hero__cta">
                        Explore Services
                        <ArrowRight size={16} />
                    </Link>
                    <Link to="/contact" className="hero__link">
                        Start a project →
                    </Link>
                </div>
            </motion.div>

            {/* Corner label */}
            <div className="hero__corner">
                <span>Next-Gen Intelligence</span>
            </div>
        </section>
    );
};

export default Hero;

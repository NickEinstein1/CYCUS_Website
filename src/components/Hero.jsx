import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const cyclingServices = [
    'Enterprise AI Solutions',
    'Cyber Defense Systems',
    'Secure Cloud Infrastructure',
    'Data Intelligence Platforms',
    'HealthTech Innovation',
    'Smart Logistics Technology',
    'Web & Software Engineering',
];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setIndex(p => (p + 1) % cyclingServices.length);
        }, 2400);
        return () => clearInterval(id);
    }, []);

    return (
        <section className="hero">
            {/* ── Brand name ── */}
            <div className="hero__brand">
                <div className="hero__brand-name">
                    CYCUS<sup className="hero__brand-reg">®</sup>
                </div>
                <div className="hero__brand-sub">TECHNOLOGIES</div>
            </div>

            {/* ── Cycling service line ── */}
            <div className="hero__cycle-row">
                <span className="hero__cycle-label">Currently building</span>
                <div className="hero__cycle-wrap">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={index}
                            className="hero__cycle-text"
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -14 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                        >
                            {cyclingServices[index]}
                        </motion.span>
                    </AnimatePresence>
                </div>
                <span className="hero__cycle-context">→ From Startup to Enterprise</span>
            </div>

            {/* ── Main statement ── */}
            <div className="hero__statement">
                <h1 className="hero__statement-title">
                    Next-generation intelligence<br />
                    <em>for Africa's most ambitious</em><br />
                    organisations.
                </h1>
            </div>

            {/* ── Bottom row ── */}
            <div className="hero__bottom">
                <p className="hero__desc">
                    We build the AI systems, cyber architectures, and digital platforms that power
                    critical operations — from Nairobi to the world.
                </p>
                <div className="hero__actions">
                    <Link to="/services" className="hero__cta">
                        View Our Work →
                    </Link>
                    <Link to="/contact" className="hero__link">
                        Start a project
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;

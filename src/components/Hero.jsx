import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import ParticleField from './ParticleField';
import TechGrid from './TechGrid';
import ScrollIndicator from './ScrollIndicator';
import './Hero.css';

const Hero = () => {
    const handleScrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Account for fixed header
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    const wordVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: 'easeOut'
            }
        })
    };

    return (
        <div className="hero">
            <TechGrid />
            <ParticleField />

            {/* Background Gradient Orbs */}
            <div className="hero-bg-orb orb-primary" />
            <div className="hero-bg-orb orb-secondary" />
            <div className="hero-bg-orb orb-tertiary" />

            <div className="container hero-content">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="hero-inner"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="badge-wrapper"
                    >
                        <span className="badge">
                            <Sparkles size={14} className="badge-icon" />
                            NEXT-GEN INTELLIGENCE
                            <span className="badge-pulse"></span>
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={titleVariants}
                        className="hero-title"
                    >
                        <span className="title-line">
                            Architecting the
                        </span>
                        <br />
                        <span className="text-gradient">
                            Future of Secure AI
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="hero-description"
                    >
                        Pioneering the next era of <span className="highlight">sovereign intelligence</span>.
                        We build <span className="highlight">fortress-grade AI systems</span> and bespoke digital infrastructure
                        that power the world's most critical operations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="hero-actions"
                    >
                        <motion.button
                            onClick={() => handleScrollToSection('services')}
                            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)' }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary"
                        >
                            <span>Explore Services</span>
                            <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            onClick={() => handleScrollToSection('contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-outline"
                        >
                            <span>Get Started</span>
                            <ChevronRight size={18} />
                        </motion.button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <ScrollIndicator />

                    {/* Floating Elements */}
                    <div className="floating-elements">
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="floating-cube cube-1"
                        />
                        <motion.div
                            animate={{
                                y: [0, -30, 0],
                                rotate: [0, -5, 0]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            className="floating-cube cube-2"
                        />
                    </div>
                </motion.div>
            </div>

            <div className="hero-grid-overlay"></div>
        </div>
    );
};

export default Hero;

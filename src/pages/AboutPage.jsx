import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Award, Zap, Globe, TrendingUp } from 'lucide-react';
import './AboutPage.css';

const AboutPage = () => {
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const values = [
        {
            icon: Zap,
            title: 'Innovation at the Core',
            description: 'Pushing boundaries with cutting-edge technology and creative solutions',
            color: '#06b6d4'
        },
        {
            icon: Heart,
            title: 'Integrity & Transparency',
            description: 'Building trust through honest communication and ethical practices',
            color: '#ec4899'
        },
        {
            icon: Users,
            title: 'Community Focus',
            description: 'Empowering communities and creating positive social impact',
            color: '#8b5cf6'
        },
        {
            icon: Award,
            title: 'Excellence in Execution',
            description: 'Delivering exceptional quality in every project we undertake',
            color: '#10b981'
        }
    ];

    const stats = [
        { number: '500+', label: 'Projects Delivered' },
        { number: '150+', label: 'Happy Clients' },
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '24/7', label: 'Support Available' }
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about-page"
        >
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="about-hero-content"
                    >
                        <span className="about-badge">About CYCUS</span>
                        <h1 className="about-hero-title">
                            Reshaping Industries Through <span className="text-gradient">Innovation</span>
                        </h1>
                        <p className="about-hero-description">
                            CYCUS is focused on innovation and positive transformation.
                            Our mission is to reshape industries, empower businesses, and drive lasting impact
                            by weaving advanced technology into the fabric of various sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="about-stats-section">
                <div className="container">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="about-stats-grid"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="about-stat-card"
                            >
                                <div className="stat-number">{stat.number}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section className="about-vision-section">
                <div className="container">
                    <div className="about-vision-grid">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="vision-card"
                        >
                            <div className="vision-icon-wrapper" style={{ '--card-color': '#06b6d4' }}>
                                <Eye size={32} />
                            </div>
                            <h2 className="vision-title">Our Vision</h2>
                            <p className="vision-description">
                                To be the leading catalyst for technological advancement in the world,
                                redefining possibilities through AI-Driven Excellence in Healthcare, Logistics, and beyond.
                                We envision a future where technology seamlessly integrates with every aspect of business,
                                driving unprecedented growth and innovation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            transition={{ delay: 0.2 }}
                            className="vision-card"
                        >
                            <div className="vision-icon-wrapper" style={{ '--card-color': '#8b5cf6' }}>
                                <Target size={32} />
                            </div>
                            <h2 className="vision-title">Our Mission</h2>
                            <p className="vision-description">
                                To empower businesses with transformative technology solutions that drive measurable results.
                                We are committed to delivering excellence through innovation, integrity, and a deep understanding
                                of our clients' unique challenges. Our mission is to be more than a service provider—we are
                                your strategic technology partner.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="about-values-section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="section-header"
                    >
                        <h2 className="section-title">
                            Our Core <span className="text-gradient">Values</span>
                        </h2>
                        <p className="section-subtitle">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-100px' }}
                        className="values-grid"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="value-card"
                            >
                                <div
                                    className="value-icon-wrapper"
                                    style={{ '--value-color': value.color }}
                                >
                                    <value.icon size={28} />
                                </div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="about-why-section">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="section-header"
                    >
                        <h2 className="section-title">
                            Why Choose <span className="text-gradient">CYCUS</span>
                        </h2>
                        <p className="section-subtitle">
                            What sets us apart in the technology landscape
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="why-grid"
                    >
                        <motion.div variants={fadeInUp} className="why-card">
                            <Globe className="why-icon" size={40} />
                            <h3 className="why-title">Global Expertise, Local Understanding</h3>
                            <p className="why-description">
                                We combine world-class technical expertise with deep understanding of local markets,
                                ensuring solutions that work in your specific context.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="why-card">
                            <TrendingUp className="why-icon" size={40} />
                            <h3 className="why-title">Proven Track Record</h3>
                            <p className="why-description">
                                Our portfolio speaks for itself—successful projects across multiple industries,
                                delivering measurable ROI and transformative results.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="why-card">
                            <Users className="why-icon" size={40} />
                            <h3 className="why-title">Partnership Approach</h3>
                            <p className="why-description">
                                We don't just deliver projects—we build lasting partnerships, supporting your
                                growth journey every step of the way.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;

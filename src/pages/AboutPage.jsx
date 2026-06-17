import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Zap, Heart, Users, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const fadeUp = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const AboutPage = () => {
    const stats = [
        { number: '500+',  label: 'Projects Delivered' },
        { number: '150+',  label: 'Happy Clients' },
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '24/7',  label: 'Expert Support' },
    ];

    const values = [
        { icon: Zap,   title: 'Innovation First',          description: 'Relentlessly pushing boundaries with cutting-edge tech and creative, battle-tested solutions.',  color: '#D60606' },
        { icon: Heart, title: 'Integrity Always',          description: 'Building long-term trust through radical transparency, honesty, and ethical engineering practice.', color: '#E53535' },
        { icon: Users, title: 'Community Impact',          description: 'Empowering local and global communities by creating inclusive, positive social and economic impact.', color: '#C40000' },
        { icon: Award, title: 'Excellence in Execution',   description: 'Delivering exceptional quality—on time, on budget—in every single project we put our name on.',    color: '#AA0000' },
    ];

    const whyUs = [
        { icon: Globe,      title: 'Global Expertise, Local Understanding', description: 'World-class technical knowledge combined with deep insight into African and global market dynamics.' },
        { icon: TrendingUp, title: 'Proven Track Record',                   description: 'A portfolio of successful deliveries across multiple verticals with measurable ROI and transformative results.' },
        { icon: Users,      title: 'True Partnership Approach',             description: "We don't just deliver projects — we embed with your team and champion your growth at every stage." },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="about"
        >
            {/* Hero */}
            <section className="about__hero">
                <div className="about__hero-glow" />
                <div className="container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="about__hero-content"
                    >
                        <span className="section-badge">About CYCUS</span>
                        <h1 className="about__hero-title">
                            Reshaping Industries Through{' '}
                            <span className="text-gradient">Innovation</span>
                        </h1>
                        <p className="about__hero-desc">
                            CYCUS is a technology company laser-focused on positive transformation.
                            Our mission is to reshape industries, empower businesses, and drive lasting
                            impact by weaving advanced technology into the fabric of every sector we touch.
                        </p>
                        <div className="about__hero-actions">
                            <Link to="/services" className="btn btn-primary">
                                Our Services <ArrowRight size={16} />
                            </Link>
                            <Link to="/contact" className="btn btn-outline">
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="about__stats">
                <div className="container">
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="about__stats-grid"
                    >
                        {stats.map((s, i) => (
                            <motion.div key={i} variants={fadeUp} className="about__stat">
                                <div className="about__stat-number">{s.number}</div>
                                <div className="about__stat-label">{s.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="about__vm">
                <div className="container">
                    <div className="about__vm-grid">
                        {[
                            {
                                icon: Eye,
                                title: 'Our Vision',
                                color: '#D60606',
                                text: 'To be the leading catalyst for technological advancement globally — redefining possibilities through AI-driven excellence in Healthcare, Logistics, and beyond. We envision a future where technology seamlessly integrates with every aspect of business, driving unprecedented growth.',
                            },
                            {
                                icon: Target,
                                title: 'Our Mission',
                                color: '#A50505',
                                text: 'To empower businesses with transformative technology solutions that deliver measurable results. We are committed to excellence through innovation, integrity, and deep understanding of our clients\' unique challenges. We are more than a service provider — we are your strategic technology partner.',
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="about__vm-card"
                                style={{ '--card-accent': item.color }}
                            >
                                <div className="about__vm-icon">
                                    <item.icon size={28} />
                                </div>
                                <h2 className="about__vm-title">{item.title}</h2>
                                <p className="about__vm-text">{item.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about__values">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="about__section-header"
                    >
                        <span className="section-badge">What Drives Us</span>
                        <h2 className="about__section-title">
                            Our Core <span className="text-gradient">Values</span>
                        </h2>
                        <p className="about__section-subtitle">The principles that guide every decision we make.</p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                        className="about__values-grid"
                    >
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                                className="about__value-card"
                                style={{ '--accent': v.color }}
                            >
                                <div className="about__value-icon">
                                    <v.icon size={24} />
                                </div>
                                <h3 className="about__value-title">{v.title}</h3>
                                <p className="about__value-desc">{v.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Why CYCUS */}
            <section className="about__why">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="about__section-header"
                    >
                        <span className="section-badge">Why Choose Us</span>
                        <h2 className="about__section-title">
                            What Sets <span className="text-gradient">CYCUS Apart</span>
                        </h2>
                        <p className="about__section-subtitle">The qualities that make us the partner of choice for ambitious organisations.</p>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="about__why-grid"
                    >
                        {whyUs.map((w, i) => (
                            <motion.div key={i} variants={fadeUp} className="about__why-card">
                                <div className="about__why-icon">
                                    <w.icon size={26} />
                                </div>
                                <h3 className="about__why-title">{w.title}</h3>
                                <p className="about__why-desc">{w.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA */}
            <section className="about__cta">
                <div className="container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="about__cta-card"
                    >
                        <h2 className="about__cta-title">
                            Ready to transform your business?
                        </h2>
                        <p className="about__cta-text">
                            Let's have a conversation about your goals. Our team will craft a tailored technology roadmap for your organisation.
                        </p>
                        <div className="about__cta-actions">
                            <Link to="/contact" className="btn btn-primary">
                                Start a Conversation <ArrowRight size={16} />
                            </Link>
                            <Link to="/services" className="btn btn-outline">
                                View Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    );
};

export default AboutPage;

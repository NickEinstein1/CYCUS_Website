import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './AboutPage.css';

const fadeUp = {
    hidden:  { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const values = [
    { num: '01', title: 'Innovation First',        body: 'We never settle for yesterday\'s solutions. Every engagement starts with fresh thinking, cutting-edge frameworks, and a relentless pursuit of what\'s next.' },
    { num: '02', title: 'Integrity Always',         body: 'Radical transparency in everything we do — our pricing, our timelines, our trade-offs. If something isn\'t working, you\'ll hear it from us first.' },
    { num: '03', title: 'Community Impact',         body: 'Technology should lift communities, not just corporations. We build solutions that create economic inclusion and positive social outcomes across Africa and beyond.' },
    { num: '04', title: 'Excellence in Execution',  body: 'Quality isn\'t a checkbox — it\'s the standard we hold every line of code and every deliverable to. On time. On budget. Without compromise.' },
];

const stats = [
    { value: '500+',    label: 'Projects Delivered', desc: 'across enterprise clients' },
    { value: '150+',    label: 'Enterprise Clients',  desc: 'in 20+ countries' },
    { value: '24/7',    label: 'Expert Support',      desc: 'always available' },
    { value: '99.99%',  label: 'Uptime Guarantee',    desc: 'on managed systems' },
];

const AboutPage = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="about"
    >
        {/* ── Hero ── */}
        <section className="about__hero">
            <div className="container">
                <div className="about__hero-meta">
                    <span>About CYCUS</span>
                    <span className="about__hero-meta-sep">×</span>
                    <span>Est. 2024</span>
                    <span className="about__hero-meta-sep">×</span>
                    <span>Nairobi, Kenya</span>
                </div>
                <motion.h1
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="about__hero-title"
                >
                    <span>Reshaping</span>
                    <span className="about__hero-title--indent">Industries Through</span>
                    <span>
                        <em>Technology.</em>
                    </span>
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.65 }}
                    className="about__hero-bottom"
                >
                    <p className="about__hero-desc">
                        CYCUS is a technology company built on hard questions and impossible ideas.
                        We exist to solve what others won't — across AI, cybersecurity,
                        infrastructure, and every sector we touch.
                    </p>
                    <div className="about__hero-actions">
                        <Link to="/services" className="about__cta-btn">
                            Our Services <ArrowUpRight size={15} />
                        </Link>
                        <Link to="/contact" className="about__ghost-btn">
                            Get in Touch
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>

        {/* ── Stats ── */}
        <section className="about__stats">
            <div className="container">
                <div className="about__stats-grid">
                    {stats.map((s, i) => (
                        <motion.div
                            key={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            transition={{ delay: i * 0.06 }}
                            className="about__stat"
                        >
                            <div className="about__stat-val">{s.value}</div>
                            <div className="about__stat-label">{s.label}</div>
                            <div className="about__stat-desc">{s.desc}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Vision & Mission ── */}
        <section className="about__vm">
            <div className="container">
                <div className="about__vm-header">
                    <p className="about__section-label">Our Direction</p>
                    <h2 className="about__section-title">
                        Vision &amp;<br /><em>Mission</em>
                    </h2>
                </div>
                <div className="about__vm-grid">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="about__vm-card"
                    >
                        <span className="about__vm-num">01</span>
                        <h3 className="about__vm-title">Our Vision</h3>
                        <p className="about__vm-text">
                            To be the leading catalyst for technological advancement globally — redefining possibilities
                            through AI-driven excellence in Healthcare, Logistics, and beyond. We envision a future
                            where technology seamlessly integrates with every aspect of business, driving unprecedented growth.
                        </p>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        transition={{ delay: 0.12 }}
                        className="about__vm-card"
                    >
                        <span className="about__vm-num">02</span>
                        <h3 className="about__vm-title">Our Mission</h3>
                        <p className="about__vm-text">
                            To empower businesses with transformative technology solutions that deliver measurable results.
                            Committed to excellence through innovation, integrity, and deep understanding of our clients'
                            unique challenges — we are your strategic technology partner, not just a vendor.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* ── Core Values ── */}
        <section className="about__values">
            <div className="container">
                <div className="about__values-head">
                    <div>
                        <p className="about__section-label">What Drives Us</p>
                        <h2 className="about__section-title">
                            Core<br /><em>Values</em>
                        </h2>
                    </div>
                    <p className="about__values-desc">
                        Four principles that guide every decision, every line of code, and every
                        client relationship we build.
                    </p>
                </div>
                <div className="about__values-list">
                    {values.map((v, i) => (
                        <motion.div
                            key={v.num}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={fadeUp}
                            transition={{ delay: i * 0.07 }}
                            className="about__value-item"
                        >
                            <span className="about__value-num">{v.num} /</span>
                            <div className="about__value-content">
                                <h3 className="about__value-title">{v.title}</h3>
                                <p className="about__value-body">{v.body}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* ── Why CYCUS ── */}
        <section className="about__why">
            <div className="container">
                <div className="about__why-inner">
                    <div className="about__why-left">
                        <p className="about__section-label">Why Choose Us</p>
                        <h2 className="about__section-title">
                            What Sets<br /><em>CYCUS Apart</em>
                        </h2>
                        <p className="about__why-sub">
                            The qualities that make us the partner of choice for ambitious organisations
                            across Africa and globally.
                        </p>
                        <Link to="/contact" className="about__cta-btn" style={{ marginTop: '2rem' }}>
                            Start a conversation <ArrowUpRight size={15} />
                        </Link>
                    </div>
                    <div className="about__why-right">
                        {[
                            { title: 'Global Expertise, Local Understanding',   body: 'World-class technical knowledge combined with deep insight into African and global market dynamics. We know the terrain.' },
                            { title: 'Proven Track Record',                      body: 'A portfolio of successful deliveries across multiple verticals with measurable ROI and truly transformative outcomes.' },
                            { title: 'True Partnership Approach',                body: "We don't just deliver projects — we embed with your team, align to your goals, and champion your growth at every stage." },
                        ].map((w, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                transition={{ delay: i * 0.08 }}
                                className="about__why-item"
                            >
                                <span className="about__why-num">0{i + 1}</span>
                                <div>
                                    <h3 className="about__why-title">{w.title}</h3>
                                    <p className="about__why-body">{w.body}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* ── CTA ── */}
        <section className="about__cta">
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="about__cta-inner"
                >
                    <h2 className="about__cta-title">
                        Ready to transform<br />your business?
                    </h2>
                    <div className="about__cta-right">
                        <p className="about__cta-text">
                        We work with a focused number of organisations at a time. If you're ready to
                        ask harder questions, the next step is a short conversation.
                        </p>
                        <div className="about__cta-actions">
                            <Link to="/contact" className="about__cta-btn">
                                Start a Conversation <ArrowUpRight size={15} />
                            </Link>
                            <Link to="/services" className="about__ghost-btn">
                                View Services
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    </motion.div>
);

export default AboutPage;

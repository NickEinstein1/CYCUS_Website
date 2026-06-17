import React from 'react';
import { motion } from 'framer-motion';
import './FeatureCards.css';

const reasons = [
    {
        num: '01',
        title: 'Innovation at Every Layer',
        body: 'We don\'t retrofit old thinking. Our teams architect solutions from the ground up using the latest AI, cloud-native, and security frameworks — so what we build never becomes technical debt.',
    },
    {
        num: '02',
        title: 'Military-Grade Security',
        body: 'Every system we ship is hardened by default. Zero-trust architecture, end-to-end encryption, and continuous threat monitoring are standard — not optional add-ons.',
    },
    {
        num: '03',
        title: 'Proven Across Verticals',
        body: 'From FinTech to HealthTech and Logistics, we bring battle-tested experience to each engagement. Your industry has nuance — we\'ve already navigated it.',
    },
    {
        num: '04',
        title: 'Partners, Not Vendors',
        body: 'We embed with your team, align to your goals, and stay accountable beyond delivery. Your success is our KPI — not just a signed statement of work.',
    },
];

const FeatureCards = () => (
    <section className="why">
        <div className="container">
            {/* Header */}
            <div className="why__head">
                <p className="why__label">Why CYCUS</p>
                <h2 className="why__title">
                    We Close the Gap Between
                    <br /><em>Ambition and Execution.</em>
                </h2>
            </div>

            {/* Numbered reasons */}
            <div className="why__list">
                {reasons.map((r, i) => (
                    <motion.div
                        key={r.num}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: i * 0.08, duration: 0.55, ease: 'easeOut' }}
                        className="why__item"
                    >
                        <span className="why__num">{r.num} /</span>
                        <div className="why__content">
                            <h3 className="why__item-title">{r.title}</h3>
                            <p className="why__item-body">{r.body}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default FeatureCards;

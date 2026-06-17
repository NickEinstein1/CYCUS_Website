import React from 'react';
import { motion } from 'framer-motion';
import './FeatureCards.css';

/* 2×2 grid — mirrors Vercept's "Why Vercept?" section exactly */
const reasons = [
    {
        num: '01',
        title: 'Get the recognition your tech stack has earned.',
        body: 'The organisations below you in capability keep winning the contracts and the partnerships. That ends here.',
    },
    {
        num: '02',
        title: 'Become the obvious choice to enterprise buyers.',
        body: 'Decision-makers form a view before they reach your calendar. We make sure your platform works in your favour.',
    },
    {
        num: '03',
        title: 'Close projects faster with less friction.',
        body: 'Smaller firms lose mandates to less capable competitors every day simply because their technology doesn\'t instil confidence. We close that gap.',
    },
    {
        num: '04',
        title: 'Build a position competitors can\'t copy.',
        body: 'AI infrastructure, security architecture and digital systems that take years to earn — so once you\'re ahead, you stay ahead.',
    },
];

const FeatureCards = () => (
    <section className="why">
        <div className="container">
            {/* Header */}
            <div className="why__head">
                <p className="why__label">Why CYCUS?</p>
                <h2 className="why__title">
                    We Close The Gap Between<br />
                    <em>Your Scale And How The</em><br />
                    Market Sees You.
                </h2>
            </div>

            {/* 2×2 grid — Vercept's exact layout */}
            <div className="why__grid">
                {reasons.map((r, i) => (
                    <motion.div
                        key={r.num}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-40px' }}
                        transition={{ delay: i * 0.07, duration: 0.5, ease: 'easeOut' }}
                        className="why__card"
                    >
                        <div className="why__card-num">{r.num}</div>
                        <div className="why__card-content">
                            <h3 className="why__card-title">{r.title}</h3>
                            <p className="why__card-body">{r.body}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default FeatureCards;

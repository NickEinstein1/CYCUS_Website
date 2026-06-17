import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        quote: 'CYCUS transformed our entire infrastructure with AI-powered solutions. The security architecture is fortress-grade. Our uptime has reached 99.99%. Phenomenal work.',
        name: 'Sarah Mitchell',
        role: 'CTO, TechVision Inc.',
        image: 'https://i.pravatar.cc/80?img=1',
        project: 'Enterprise AI Infrastructure',
    },
    {
        id: 2,
        quote: "Working with CYCUS was a game-changer. Their cybersecurity solutions prevented multiple critical threats, and their expertise in sovereign intelligence is unmatched in the industry.",
        name: 'David Chen',
        role: 'CEO, FinanceFlow',
        image: 'https://i.pravatar.cc/80?img=13',
        project: 'Secure Payment Gateway',
    },
    {
        id: 3,
        quote: 'The AI models CYCUS deployed have revolutionised patient care. Their attention to data sovereignty and HIPAA compliance was exceptional. Highly recommended.',
        name: 'Amara Okonkwo',
        role: 'Director of Innovation, HealthTech Africa',
        image: 'https://i.pravatar.cc/80?img=5',
        project: 'Healthcare AI Platform',
    },
    {
        id: 4,
        quote: 'CYCUS delivered beyond expectations. Their edge computing solutions reduced our latency by 70%, and the global infrastructure handles millions of daily requests without issue.',
        name: 'James Rodriguez',
        role: 'VP Engineering, CloudScale',
        image: 'https://i.pravatar.cc/80?img=12',
        project: 'Global CDN Infrastructure',
    },
];

const Testimonials = () => {
    const [idx, setIdx] = useState(0);
    const t = testimonials[idx];

    const prev = () => setIdx(p => (p - 1 + testimonials.length) % testimonials.length);
    const next = () => setIdx(p => (p + 1) % testimonials.length);

    return (
        <section className="testi">
            <div className="container">
                <div className="testi__head">
                    <div>
                        <p className="testi__label">Client Outcomes</p>
                        <h2 className="testi__title">
                            Trusted by<br />
                            <em>Industry Leaders</em>
                        </h2>
                    </div>
                    <div className="testi__nav">
                        <button onClick={prev} className="testi__btn" aria-label="Previous">
                            <ChevronLeft size={20} />
                        </button>
                        <span className="testi__count">
                            {String(idx + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
                        </span>
                        <button onClick={next} className="testi__btn" aria-label="Next">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="testi__card"
                    >
                        <blockquote className="testi__quote">
                            &ldquo;{t.quote}&rdquo;
                        </blockquote>

                        <div className="testi__footer">
                            <div className="testi__author">
                                <img src={t.image} alt={t.name} className="testi__avatar" loading="lazy" />
                                <div>
                                    <div className="testi__name">{t.name}</div>
                                    <div className="testi__role">{t.role}</div>
                                </div>
                            </div>
                            <span className="testi__project">{t.project}</span>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dots */}
                <div className="testi__dots">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIdx(i)}
                            className={`testi__dot ${i === idx ? 'testi__dot--on' : ''}`}
                            aria-label={`Testimonial ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;

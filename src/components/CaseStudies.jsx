import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './CaseStudies.css';

const work = [
    {
        id: 1,
        client: 'FinSec Africa',
        industry: 'FinTech',
        title: 'AI-Powered Fraud Detection',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&q=80',
        result: '94% fraud reduction',
        tier: 'Enterprise®',
    },
    {
        id: 2,
        client: 'MedTech Innovations',
        industry: 'Healthcare',
        title: 'Healthcare Data Platform',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=700&fit=crop&q=80',
        result: '99.99% uptime · 10M+ records/day',
        tier: 'Elite®',
    },
    {
        id: 3,
        client: 'RetailGiant Corp',
        industry: 'E-Commerce',
        title: 'Global Commerce Scale-Up',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=900&h=700&fit=crop&q=80',
        result: '+400% traffic · $3.2M saved',
        tier: 'Enterprise®',
    },
    {
        id: 4,
        client: 'LogiPro Systems',
        industry: 'Logistics',
        title: 'Smart Fleet Intelligence',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=700&fit=crop&q=80',
        result: '-38% fuel costs · 60% less downtime',
        tier: 'Growth®',
    },
];

const CaseStudies = () => (
    <section className="work">
        <div className="container">
            {/* Header */}
            <div className="work__head">
                <div className="work__head-left">
                    <p className="work__label">Our Work</p>
                    <h2 className="work__title">
                        Case Studies.
                    </h2>
                </div>
                <p className="work__head-desc">
                    We build the platforms, AI systems and security architectures that come from
                    asking harder questions than anyone else in the room.
                </p>
            </div>

            {/* Grid — mirrors Vercept's project grid */}
            <div className="work__grid">
                {work.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ delay: (i % 2) * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        className="work__card"
                    >
                        {/* Image */}
                        <div className="work__img-wrap">
                            <img src={item.image} alt={item.title} className="work__img" loading="lazy" />
                            <div className="work__overlay" />

                            {/* Hover CTA — "Let's talk" like Vercept */}
                            <div className="work__hover-cta">
                                <Link to="/contact" className="work__talk-btn">
                                    Let's talk
                                </Link>
                            </div>
                        </div>

                        {/* Card body */}
                        <div className="work__card-body">
                            <div className="work__card-top">
                                <span className="work__client">{item.client}</span>
                                <Link to="/contact" className="work__talk-inline">Let's talk</Link>
                            </div>
                            <div className="work__card-mid">
                                <span className="work__industry">{item.industry}</span>
                                <Link to="/contact" className="work__talk-inline work__talk-inline--sm">Let's talk</Link>
                            </div>
                            <div className="work__card-bot">
                                <h3 className="work__card-title">{item.title}</h3>
                                <div className="work__card-footer">
                                    <span className="work__result">{item.result}</span>
                                    <span className="work__tier">{item.tier}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="work__foot">
                <Link to="/contact" className="work__foot-btn">
                    View Our Recent Work <ArrowUpRight size={15} />
                </Link>
            </div>
        </div>
    </section>
);

export default CaseStudies;

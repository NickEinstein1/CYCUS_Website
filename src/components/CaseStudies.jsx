import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './CaseStudies.css';

const work = [
    {
        id: 1,
        industry: 'FinTech',
        title: 'AI-Powered Fraud Detection',
        client: 'Global Financial Services',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=700&fit=crop&q=80',
        result: '94% fraud reduction',
        tag: 'AI / Machine Learning',
    },
    {
        id: 2,
        industry: 'Healthcare',
        title: 'Healthcare Data Platform',
        client: 'MedTech Innovations',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=700&fit=crop&q=80',
        result: '99.99% uptime · 10M+ records/day',
        tag: 'Cloud / Security',
    },
    {
        id: 3,
        industry: 'E-Commerce',
        title: 'Global E-Commerce Scale-Up',
        client: 'RetailGiant Corp',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=900&h=700&fit=crop&q=80',
        result: '+400% traffic capacity · $3.2M saved',
        tag: 'Infrastructure / Edge',
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
                        Real Results,<br />
                        <em>Real Impact</em>
                    </h2>
                </div>
                <p className="work__head-desc">
                    Selected case studies across FinTech, Healthcare, and
                    E-Commerce — where technology created measurable business outcomes.
                </p>
            </div>

            {/* Grid */}
            <div className="work__grid">
                {work.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ delay: (i % 2) * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className={`work__card ${i === 2 ? 'work__card--wide' : ''}`}
                    >
                        <div className="work__img-wrap">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="work__img"
                                loading="lazy"
                            />
                            <div className="work__img-overlay" />
                        </div>

                        <div className="work__card-body">
                            <div className="work__card-top">
                                <span className="work__industry">{item.industry}</span>
                                <span className="work__tag">{item.tag}</span>
                            </div>
                            <div className="work__card-bottom">
                                <h3 className="work__card-title">{item.title}</h3>
                                <div className="work__card-row">
                                    <span className="work__result">{item.result}</span>
                                    <span className="work__arrow"><ArrowUpRight size={18} /></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default CaseStudies;

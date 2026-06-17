import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus, Minus } from 'lucide-react';
import { servicesData } from '../data/services';
import './Services.css';

const ServicesSection = () => {
    const [open, setOpen] = useState(null);

    const toggle = (id) => setOpen(prev => (prev === id ? null : id));

    return (
        <section className="svc" id="services">
            <div className="container">
                {/* Header row */}
                <div className="svc__head">
                    <div className="svc__head-left">
                        <p className="svc__label">Our Services</p>
                        <h2 className="svc__title">
                            What We<br />
                            <em>Deliver</em>
                        </h2>
                    </div>
                    <p className="svc__head-desc">
                        End-to-end technology solutions for every layer of your organisation —
                        from AI strategy to infrastructure, security, and beyond.
                    </p>
                </div>

                {/* Accordion list */}
                <div className="svc__list">
                    {servicesData.map((svc, i) => {
                        const Icon = svc.icon;
                        const isOpen = open === svc.id;

                        return (
                            <div key={svc.id} className={`svc__row ${isOpen ? 'svc__row--open' : ''}`}>
                                <button
                                    className="svc__row-head"
                                    onClick={() => toggle(svc.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="svc__num">({String(i + 1).padStart(3, '0')})</span>

                                    <span className="svc__row-icon">
                                        <Icon size={18} strokeWidth={1.75} />
                                    </span>

                                    <span className="svc__row-title">{svc.title}</span>

                                    <div className="svc__row-tags">
                                        {svc.features.slice(0, 2).map((f, fi) => (
                                            <span key={fi} className="svc__tag">{f.split(' ').slice(0, 2).join(' ')}</span>
                                        ))}
                                    </div>

                                    <span className="svc__toggle">
                                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
                                            className="svc__row-body"
                                        >
                                            <div className="svc__row-body-inner">
                                                <p className="svc__row-desc">{svc.fullDescription}</p>
                                                <ul className="svc__row-features">
                                                    {svc.features.map((f, fi) => (
                                                        <li key={fi}>{f}</li>
                                                    ))}
                                                </ul>
                                                <Link to={`/services/${svc.id}`} className="svc__row-link">
                                                    View service <ArrowUpRight size={15} />
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className="svc__footer">
                    <Link to="/services" className="svc__all-link">
                        View all {servicesData.length} services <ArrowUpRight size={15} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle, ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import NotFound from './NotFound';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find((s) => s.id === id);
    const serviceIndex = servicesData.findIndex((s) => s.id === id);
    const related = servicesData.filter((s) => s.id !== id).slice(0, 3);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!service) return <NotFound />;

    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="detail"
        >
            {/* Hero */}
            <div className="detail__hero">
                <div className="detail__hero-glow" />
                <div className="container">
                    <button
                        onClick={() => navigate('/services')}
                        className="detail__back"
                    >
                        <ArrowLeft size={15} />
                        All Services
                    </button>

                    <div className="detail__hero-inner">
                        <div className="detail__hero-icon">
                            <Icon size={40} strokeWidth={1.5} />
                        </div>
                        <div className="detail__hero-text">
                            <span className="detail__hero-index">
                                {String(serviceIndex + 1).padStart(2, '0')} / {String(servicesData.length).padStart(2, '0')}
                            </span>
                            <h1 className="detail__hero-title">{service.title}</h1>
                            <p className="detail__hero-desc">{service.shortDescription}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="container detail__body">
                <div className="detail__layout">
                    {/* Main */}
                    <main className="detail__main">
                        <section className="detail__section">
                            <h2 className="detail__section-title">Overview</h2>
                            <p className="detail__overview">{service.fullDescription}</p>
                        </section>

                        <section className="detail__section">
                            <h2 className="detail__section-title">What's Included</h2>
                            <div className="detail__features">
                                {service.features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -16 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07, duration: 0.4 }}
                                        className="detail__feature"
                                    >
                                        <CheckCircle size={18} className="detail__feature-icon" />
                                        <span>{f}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Related Services */}
                        <section className="detail__section">
                            <h2 className="detail__section-title">Related Services</h2>
                            <div className="detail__related">
                                {related.map((s, i) => {
                                    const RelIcon = s.icon;
                                    return (
                                        <Link key={s.id} to={`/services/${s.id}`} className="detail__related-card">
                                            <div className="detail__related-icon">
                                                <RelIcon size={18} strokeWidth={1.75} />
                                            </div>
                                            <div className="detail__related-info">
                                                <div className="detail__related-title">{s.title}</div>
                                                <div className="detail__related-desc">{s.shortDescription}</div>
                                            </div>
                                            <ArrowUpRight size={16} className="detail__related-arrow" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </section>
                    </main>

                    {/* Sidebar */}
                    <aside className="detail__sidebar">
                        <div className="detail__cta-card">
                            <div className="detail__cta-icon">
                                <Icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="detail__cta-title">Ready to get started?</h3>
                            <p className="detail__cta-text">
                                Get a customised plan tailored to your {service.title} needs.
                                Our team will respond within 24 hours.
                            </p>
                            <Link to="/contact" className="btn btn-primary detail__cta-btn">
                                Contact Us
                                <ArrowRight size={16} />
                            </Link>
                            <Link to="/services" className="detail__cta-link">
                                Browse all services
                            </Link>
                        </div>

                        <div className="detail__info-card">
                            <h4 className="detail__info-title">Why CYCUS?</h4>
                            <ul className="detail__info-list">
                                {['500+ projects delivered', '24/7 expert support', '99.9% uptime guarantee', 'HIPAA & SOC2 compliant'].map((item, i) => (
                                    <li key={i}>
                                        <CheckCircle size={14} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;

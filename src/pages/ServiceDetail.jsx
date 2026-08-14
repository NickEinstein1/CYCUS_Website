import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/services';
import NotFound from './NotFound';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const service = servicesData.find((s) => s.id === id);
    const serviceIndex = servicesData.findIndex((s) => s.id === id);
    const related = servicesData.filter((s) => s.id !== id).slice(0, 3);

    useEffect(() => { window.scrollTo(0, 0); }, [id]);

    if (!service) return <NotFound />;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="detail"
        >
            {/* ── Hero ── */}
            <div className="detail__hero">
                <div className="container">
                    <div className="detail__breadcrumb">
                        <button onClick={() => navigate('/services')} className="detail__back">
                            <ArrowLeft size={14} />
                            All Services
                        </button>
                        <span className="detail__breadcrumb-sep">/</span>
                        <span className="detail__breadcrumb-cur">{service.title}</span>
                    </div>

                    <div className="detail__hero-top">
                        <span className="detail__hero-num">
                            ({String(serviceIndex + 1).padStart(3, '0')}) of {String(servicesData.length).padStart(2, '0')}
                        </span>
                        <span className="detail__hero-badge">Service</span>
                    </div>

                    <h1 className="detail__hero-title">{service.title}</h1>
                    <p className="detail__hero-desc">{service.shortDescription}</p>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="container detail__body">
                <div className="detail__layout">
                    {/* Main */}
                    <main className="detail__main">
                        <section className="detail__section">
                            <p className="detail__section-label">Overview</p>
                            <p className="detail__overview">{service.fullDescription}</p>
                        </section>

                        <section className="detail__section">
                            <p className="detail__section-label">What's Included</p>
                            <div className="detail__features">
                                {service.features.map((f, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -12 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.07 }}
                                        className="detail__feature"
                                    >
                                        <span className="detail__feature-num">{String(i + 1).padStart(2, '0')}</span>
                                        <span>{f}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Related */}
                        <section className="detail__section">
                            <p className="detail__section-label">Related Services</p>
                            <div className="detail__related">
                                {related.map((s, i) => (
                                    <Link key={s.id} to={`/services/${s.id}`} className="detail__related-row">
                                        <span className="detail__related-num">({String(servicesData.findIndex(x => x.id === s.id) + 1).padStart(3, '0')})</span>
                                        <span className="detail__related-title">{s.title}</span>
                                        <ArrowUpRight size={16} className="detail__related-arrow" />
                                    </Link>
                                ))}
                            </div>
                        </section>
                    </main>

                    {/* Sidebar */}
                    <aside className="detail__sidebar">
                        <div className="detail__cta-card">
                            <p className="detail__cta-label">Ready to begin?</p>
                            <h3 className="detail__cta-title">
                                Start your<br />{service.title} project
                            </h3>
                            <p className="detail__cta-text">
                                Get a tailored plan aligned to your specific goals.
                                We respond within 24 hours.
                            </p>
                            <Link to="/contact" className="detail__cta-btn">
                                Contact Us <ArrowUpRight size={15} />
                            </Link>
                            <Link to="/services" className="detail__cta-link">
                                Browse all services
                            </Link>
                        </div>
                    </aside>
                </div>
            </div>
        </motion.div>
    );
};

export default ServiceDetail;

import React from 'react';
import { motion } from 'framer-motion';
import { servicesData } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import ServicesSection from '../components/ServicesSection';
import '../components/Services.css';

const ServicesPage = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ paddingTop: 'var(--hh)' }}
    >
        {/* Page hero */}
        <div
            style={{
                padding: '5rem 0 4rem',
                borderBottom: '1px solid var(--border)',
            }}
        >
            <div className="container">
                <p
                    style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--gray-2)',
                        marginBottom: '1.25rem',
                    }}
                >
                    Services
                </p>
                <h1
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.045em',
                        lineHeight: 1.05,
                        color: 'var(--white)',
                        marginBottom: '1.5rem',
                    }}
                >
                    What We<br />
                    <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--gray-1)' }}>Deliver</em>
                </h1>
                <p
                    style={{
                        fontSize: '1rem',
                        lineHeight: 1.75,
                        color: 'var(--gray-1)',
                        maxWidth: '540px',
                    }}
                >
                    From enterprise AI to cybersecurity, cloud infrastructure, and beyond —
                    end-to-end technology capabilities built to move as fast as your ambition.
                </p>
            </div>
        </div>

        {/* Accordion */}
        <ServicesSection />

        {/* Card grid fallback */}
        <section className="services">
            <div className="container">
                <div className="services__header">
                    <p
                        style={{
                            fontSize: '0.68rem',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'var(--gray-2)',
                            marginBottom: '1rem',
                        }}
                    >
                        All Services
                    </p>
                    <h2 className="services__title">Browse by Service</h2>
                    <p className="services__subtitle">
                        Click any service to read the full scope, deliverables, and case studies.
                    </p>
                </div>
                <div className="services__grid">
                    {servicesData.map((svc, i) => (
                        <ServiceCard
                            key={svc.id}
                            id={svc.id}
                            title={svc.title}
                            shortDescription={svc.shortDescription}
                            icon={svc.icon}
                            index={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    </motion.div>
);

export default ServicesPage;

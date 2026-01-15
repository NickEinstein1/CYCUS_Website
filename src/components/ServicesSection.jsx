import React from 'react';
import ServiceCard from './ServiceCard';
import './Services.css';
import { servicesData } from '../data/services';

const ServicesSection = () => {
    return (
        <section id="services" className="services-section">
            {/* Section Header */}
            <div className="container services-header">
                <h2 className="services-title">
                    Our <span className="text-primary">Services</span>
                </h2>
                <p className="services-description">
                    Comprehensive technology and business solutions designed to propel your organization into the future.
                </p>
            </div>

            {/* Grid */}
            <div className="container services-grid">
                {servicesData.map((service, index) => (
                    <ServiceCard key={service.id} {...service} index={index} />
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ title, shortDescription, id, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: (index % 3) * 0.08, duration: 0.5, ease: 'easeOut' }}
    >
        <Link to={`/services/${id}`} className="service-card">
            <div className="service-card__head">
                <span className="service-card__num">({String(index + 1).padStart(3, '0')})</span>
            </div>
            <h3 className="service-card__title">{title}</h3>
            <p className="service-card__desc">{shortDescription}</p>
            <div className="service-card__footer">
                <span className="service-card__link">
                    Learn more <ArrowUpRight size={14} />
                </span>
            </div>
        </Link>
    </motion.div>
);

export default ServiceCard;

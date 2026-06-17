import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, shortDescription, id, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: (index % 3) * 0.1, duration: 0.5, ease: 'easeOut' }}
        >
            <Link to={`/services/${id}`} className="service-card">
                <div className="service-card__head">
                    <div className="service-card__icon">
                        <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <span className="service-card__index">
                        {String(index + 1).padStart(2, '0')}
                    </span>
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
};

export default ServiceCard;

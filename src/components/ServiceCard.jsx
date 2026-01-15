import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, shortDescription, id, index }) => {
    return (
        <Link to={`/services/${id}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="service-card h-full"
            >
                <div className="service-icon-wrapper">
                    <Icon size={28} />
                </div>
                <h3>{title}</h3>
                <p>{shortDescription}</p>
            </motion.div>
        </Link>
    );
};

export default ServiceCard;

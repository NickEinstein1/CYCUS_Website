import React from 'react';
import './Marquee.css';

const items = [
    'Enterprise AI',
    'Cyber Defense',
    'Secure Infrastructure',
    'Data Intelligence',
    'HealthTech',
    'Smart Logistics',
    'Web & Software',
    'IT Infrastructure',
    'Tailored Solutions',
];

const Marquee = ({ speed = 35, inverted = false }) => {
    const repeated = [...items, ...items, ...items];

    return (
        <div className={`marquee${inverted ? ' marquee--inverted' : ''}`}>
            <div
                className="marquee__track"
                style={{ animationDuration: `${speed}s`, animationDirection: inverted ? 'reverse' : 'normal' }}
            >
                {repeated.map((item, i) => (
                    <span key={i} className="marquee__item">
                        {item}
                        <span className="marquee__dot" aria-hidden="true">×</span>
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;

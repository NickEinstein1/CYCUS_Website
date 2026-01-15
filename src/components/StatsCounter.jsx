import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './StatsCounter.css';

const StatsCounter = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const stats = [
        { label: 'AI Models Deployed', value: 500, suffix: '+', prefix: '' },
        { label: 'Security Incidents Prevented', value: 99.9, suffix: '%', prefix: '' },
        { label: 'Enterprise Clients', value: 150, suffix: '+', prefix: '' },
        { label: 'Uptime Guarantee', value: 99.99, suffix: '%', prefix: '' }
    ];

    const Counter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
        const [count, setCount] = useState(0);
        const countRef = useRef(null);
        const isCountInView = useInView(countRef, { once: true });

        useEffect(() => {
            if (!isCountInView) return;

            let startTime;
            let animationFrame;

            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    setCount(end * progress);
                    animationFrame = requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            animationFrame = requestAnimationFrame(animate);

            return () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            };
        }, [end, duration, isCountInView]);

        return (
            <span ref={countRef}>
                {prefix}{count.toFixed(end % 1 !== 0 ? 2 : 0)}{suffix}
            </span>
        );
    };

    return (
        <div className="stats-section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="stats-grid"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="stat-card"
                        >
                            <div className="stat-glow"></div>
                            <div className="stat-value">
                                <Counter 
                                    end={stat.value} 
                                    suffix={stat.suffix}
                                    prefix={stat.prefix}
                                />
                            </div>
                            <div className="stat-label">{stat.label}</div>
                            <div className="stat-border"></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default StatsCounter;


import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, Lock, Globe, Cpu } from 'lucide-react';
import './FeatureCards.css';

const FeatureCards = () => {
    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Solutions',
            description: 'Advanced machine learning models that adapt and evolve with your business needs',
            color: '#06b6d4'
        },
        {
            icon: Shield,
            title: 'Military-Grade Security',
            description: 'Fortress-level protection with zero-trust architecture and quantum-resistant encryption',
            color: '#3b82f6'
        },
        {
            icon: Zap,
            title: 'Lightning Performance',
            description: 'Optimized infrastructure delivering microsecond response times at global scale',
            color: '#8b5cf6'
        },
        {
            icon: Lock,
            title: 'Data Sovereignty',
            description: 'Complete control over your data with on-premise and hybrid deployment options',
            color: '#ec4899'
        },
        {
            icon: Globe,
            title: 'Global Infrastructure',
            description: 'Distributed systems across 50+ regions ensuring 99.99% uptime worldwide',
            color: '#10b981'
        },
        {
            icon: Cpu,
            title: 'Edge Computing',
            description: 'Process data at the edge for real-time insights and reduced latency',
            color: '#f59e0b'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: 'easeOut'
            }
        }
    };

    return (
        <section id="services" className="features-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="features-header"
                >
                    <h2 className="features-title">
                        Next-Generation <span className="text-gradient">Capabilities</span>
                    </h2>
                    <p className="features-subtitle">
                        Cutting-edge technology stack designed for the future
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="features-grid"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ 
                                y: -10,
                                transition: { duration: 0.3 }
                            }}
                            className="feature-card"
                        >
                            <div className="feature-card-inner">
                                <div
                                    className="feature-icon-wrapper"
                                    style={{ '--feature-color': feature.color }}
                                >
                                    <feature.icon className="feature-icon" size={40} strokeWidth={2.5} />
                                    <div className="feature-icon-glow"></div>
                                </div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                                <div className="feature-card-border"></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeatureCards;


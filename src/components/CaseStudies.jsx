import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Clock, Users, Award } from 'lucide-react';
import './CaseStudies.css';

const CaseStudies = () => {
    const [activeCase, setActiveCase] = useState(0);

    const caseStudies = [
        {
            id: 1,
            title: 'AI-Powered Fraud Detection System',
            client: 'Global Financial Services',
            industry: 'FinTech',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
            challenge: 'A leading financial institution was losing $2M annually to fraudulent transactions and needed a real-time detection system.',
            solution: 'Deployed a custom AI model with machine learning algorithms that analyze transaction patterns in real-time, integrated with their existing infrastructure.',
            results: [
                { label: 'Fraud Reduction', value: '94%', icon: TrendingUp },
                { label: 'Detection Speed', value: '<100ms', icon: Clock },
                { label: 'False Positives', value: '-87%', icon: Award },
                { label: 'Annual Savings', value: '$1.8M', icon: TrendingUp }
            ],
            technologies: ['TensorFlow', 'Python', 'AWS', 'Real-time Analytics'],
            duration: '4 months',
            color: '#06b6d4'
        },
        {
            id: 2,
            title: 'Healthcare Data Platform',
            client: 'MedTech Innovations',
            industry: 'Healthcare',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
            challenge: 'Hospital network needed HIPAA-compliant platform to manage patient data across 50+ facilities with zero downtime.',
            solution: 'Built a distributed healthcare platform with end-to-end encryption, automated backups, and AI-powered patient insights.',
            results: [
                { label: 'Uptime', value: '99.99%', icon: TrendingUp },
                { label: 'Data Processing', value: '10M+/day', icon: Users },
                { label: 'Response Time', value: '-65%', icon: Clock },
                { label: 'Compliance Score', value: '100%', icon: Award }
            ],
            technologies: ['Node.js', 'MongoDB', 'Azure', 'HIPAA Compliance'],
            duration: '6 months',
            color: '#3b82f6'
        },
        {
            id: 3,
            title: 'Global E-Commerce Infrastructure',
            client: 'RetailGiant Corp',
            industry: 'E-Commerce',
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
            challenge: 'E-commerce platform experiencing crashes during peak traffic, losing $500K per hour of downtime.',
            solution: 'Implemented edge computing architecture with auto-scaling, CDN optimization, and microservices migration.',
            results: [
                { label: 'Traffic Capacity', value: '+400%', icon: TrendingUp },
                { label: 'Page Load Time', value: '-70%', icon: Clock },
                { label: 'Conversion Rate', value: '+45%', icon: Users },
                { label: 'Cost Savings', value: '$3.2M', icon: Award }
            ],
            technologies: ['Kubernetes', 'React', 'GraphQL', 'CloudFlare'],
            duration: '5 months',
            color: '#8b5cf6'
        }
    ];

    const currentCase = caseStudies[activeCase];

    return (
        <section className="case-studies-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="case-studies-header"
                >
                    <span className="section-badge">Success Stories</span>
                    <h2 className="section-title">
                        Real Results, <span className="text-gradient">Real Impact</span>
                    </h2>
                    <p className="section-subtitle">
                        Explore how we've helped industry leaders transform their businesses
                    </p>
                </motion.div>

                {/* Case Study Tabs */}
                <div className="case-tabs">
                    {caseStudies.map((study, index) => (
                        <button
                            key={study.id}
                            onClick={() => setActiveCase(index)}
                            className={`case-tab ${activeCase === index ? 'active' : ''}`}
                            style={{ '--tab-color': study.color }}
                        >
                            <span className="tab-industry">{study.industry}</span>
                            <span className="tab-title">{study.title}</span>
                        </button>
                    ))}
                </div>

                {/* Active Case Study */}
                <motion.div
                    key={activeCase}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="case-content"
                >
                    <div className="case-grid">
                        {/* Image */}
                        <div className="case-image-wrapper">
                            <img 
                                src={currentCase.image} 
                                alt={currentCase.title}
                                className="case-image"
                            />
                            <div className="case-overlay" style={{ background: `linear-gradient(135deg, ${currentCase.color}33, transparent)` }}></div>
                        </div>

                        {/* Details */}
                        <div className="case-details">
                            <div className="case-meta">
                                <span className="case-client">{currentCase.client}</span>
                                <span className="case-duration">
                                    <Clock size={16} />
                                    {currentCase.duration}
                                </span>
                            </div>

                            <h3 className="case-title">{currentCase.title}</h3>

                            <div className="case-section">
                                <h4>Challenge</h4>
                                <p>{currentCase.challenge}</p>
                            </div>

                            <div className="case-section">
                                <h4>Solution</h4>
                                <p>{currentCase.solution}</p>
                            </div>

                            <div className="case-technologies">
                                {currentCase.technologies.map((tech, i) => (
                                    <span key={i} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Results Grid */}
                    <div className="results-grid">
                        {currentCase.results.map((result, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="result-card"
                                style={{ '--result-color': currentCase.color }}
                            >
                                <result.icon className="result-icon" size={24} />
                                <div className="result-value">{result.value}</div>
                                <div className="result-label">{result.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CaseStudies;


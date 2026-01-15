import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            name: 'Sarah Mitchell',
            role: 'CTO, TechVision Inc.',
            company: 'TechVision Inc.',
            image: 'https://i.pravatar.cc/150?img=1',
            rating: 5,
            text: 'CYCUS transformed our entire infrastructure with their AI-powered solutions. The security architecture they implemented is fortress-grade, and our system uptime has reached 99.99%. Absolutely phenomenal work.',
            project: 'Enterprise AI Infrastructure'
        },
        {
            id: 2,
            name: 'David Chen',
            role: 'CEO, FinanceFlow',
            company: 'FinanceFlow',
            image: 'https://i.pravatar.cc/150?img=13',
            rating: 5,
            text: 'Working with CYCUS was a game-changer for our fintech platform. Their cybersecurity solutions prevented multiple threats, and their team\'s expertise in sovereign intelligence is unmatched in the industry.',
            project: 'Secure Payment Gateway'
        },
        {
            id: 3,
            name: 'Amara Okonkwo',
            role: 'Director of Innovation, HealthTech Africa',
            company: 'HealthTech Africa',
            image: 'https://i.pravatar.cc/150?img=5',
            rating: 5,
            text: 'The AI models CYCUS deployed for our healthcare platform have revolutionized patient care. Their attention to data sovereignty and HIPAA compliance was exceptional. Highly recommended!',
            project: 'Healthcare AI Platform'
        },
        {
            id: 4,
            name: 'James Rodriguez',
            role: 'VP Engineering, CloudScale',
            company: 'CloudScale',
            image: 'https://i.pravatar.cc/150?img=12',
            rating: 5,
            text: 'CYCUS delivered beyond expectations. Their edge computing solutions reduced our latency by 70%, and the global infrastructure they set up handles millions of requests seamlessly.',
            project: 'Global CDN Infrastructure'
        },
        {
            id: 5,
            name: 'Priya Sharma',
            role: 'Head of Security, DataGuard',
            company: 'DataGuard',
            image: 'https://i.pravatar.cc/150?img=9',
            rating: 5,
            text: 'The quantum-resistant encryption and zero-trust architecture CYCUS implemented has made our platform the most secure in our sector. Their expertise is truly world-class.',
            project: 'Zero-Trust Security System'
        }
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="testimonials-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="testimonials-header"
                >
                    <span className="section-badge">Client Success Stories</span>
                    <h2 className="section-title">
                        Trusted by <span className="text-gradient">Industry Leaders</span>
                    </h2>
                    <p className="section-subtitle">
                        See what our clients say about working with CYCUS
                    </p>
                </motion.div>

                <div className="testimonials-carousel">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="testimonial-card"
                        >
                            <div className="quote-icon">
                                <Quote size={48} />
                            </div>

                            <div className="rating">
                                {[...Array(currentTestimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            <p className="testimonial-text">{currentTestimonial.text}</p>

                            <div className="testimonial-author">
                                <img 
                                    src={currentTestimonial.image} 
                                    alt={currentTestimonial.name}
                                    className="author-image"
                                />
                                <div className="author-info">
                                    <h4 className="author-name">{currentTestimonial.name}</h4>
                                    <p className="author-role">{currentTestimonial.role}</p>
                                    <p className="author-company">{currentTestimonial.company}</p>
                                </div>
                            </div>

                            <div className="project-tag">
                                Project: {currentTestimonial.project}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <div className="carousel-controls">
                        <button onClick={prevTestimonial} className="carousel-btn" aria-label="Previous testimonial">
                            <ChevronLeft size={24} />
                        </button>
                        <div className="carousel-indicators">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`indicator ${index === currentIndex ? 'active' : ''}`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button onClick={nextTestimonial} className="carousel-btn" aria-label="Next testimonial">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


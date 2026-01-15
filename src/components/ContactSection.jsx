import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            {/* Background Elements */}
            <div className="contact-bg-glow" />

            <div className="container contact-grid">
                {/* Helper Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact-info-wrapper"
                >
                    <div>
                        <span className="contact-label">Get in Touch</span>
                        <h2 className="contact-title">Let's Build the <br /> Future Together</h2>
                        <p className="contact-description">
                            Whether you have a groundbreaking idea or need to optimize your existing infrastructure,
                            CYCUS is ready to partner with you. Reach out to us for a consultation.
                        </p>
                    </div>

                    <div className="contact-methods">
                        <div className="contact-method">
                            <div className="icon-box">
                                <Mail size={24} />
                            </div>
                            <div className="method-details">
                                <h4>Email Us</h4>
                                <a href="mailto:contact@cycus.co.ke">contact@cycus.co.ke</a>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="icon-box">
                                <MapPin size={24} />
                            </div>
                            <div className="method-details">
                                <h4>Visit Us</h4>
                                <p>Nairobi, Kenya</p>
                            </div>
                        </div>

                        <div className="contact-method">
                            <div className="icon-box">
                                <Phone size={24} />
                            </div>
                            <div className="method-details">
                                <h4>Call Us</h4>
                                <p>+254 (0) 700 872 051</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="contact-form-wrapper"
                >
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-control" placeholder="John" />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-control" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-control" placeholder="john@company.com" />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea rows="4" className="form-control" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <button type="button" className="submit-btn group">
                            Send Message
                            <Send size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;

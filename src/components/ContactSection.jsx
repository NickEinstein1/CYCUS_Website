import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

const ContactSection = () => {
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

    const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
    const onSubmit = e => { e.preventDefault(); setDone(true); };

    return (
        <section id="contact" className="ctct">
            <div className="container">
                <div className="ctct__inner">
                    {/* Left */}
                    <div className="ctct__left">
                        <p className="ctct__label">Start the Conversation</p>
                        <h2 className="ctct__title">
                            Have a project<br />
                            <em>in mind?</em>
                        </h2>
                        <p className="ctct__desc">
                            We work with ambitious organisations ready to leverage technology as a
                            competitive advantage. Tell us about your goals and we'll respond within 24 hours.
                        </p>

                        <div className="ctct__info">
                            <div className="ctct__info-item">
                                <span className="ctct__info-label">Email</span>
                                <a href="mailto:contact@cycus.co.ke" className="ctct__info-val">contact@cycus.co.ke</a>
                            </div>
                            <div className="ctct__info-item">
                                <span className="ctct__info-label">Phone</span>
                                <a href="tel:+254700872051" className="ctct__info-val">+254 700 872 051</a>
                            </div>
                            <div className="ctct__info-item">
                                <span className="ctct__info-label">Location</span>
                                <span className="ctct__info-val">Nairobi, Kenya</span>
                            </div>
                        </div>

                        <div className="ctct__avail">
                            <span className="ctct__avail-dot" />
                            Available Mon – Fri, 8 AM – 6 PM EAT
                        </div>
                    </div>

                    {/* Right — Form */}
                    <div className="ctct__right">
                        {done ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="ctct__success"
                            >
                                <CheckCircle size={48} className="ctct__success-icon" />
                                <h3>Message received.</h3>
                                <p>We'll be in touch within 24 hours. Looking forward to the conversation.</p>
                                <button
                                    onClick={() => { setDone(false); setForm({ name: '', email: '', service: '', message: '' }); }}
                                    className="btn btn-outline"
                                >
                                    Send another
                                </button>
                            </motion.div>
                        ) : (
                            <form className="ctct__form" onSubmit={onSubmit}>
                                <div className="ctct__group">
                                    <label className="ctct__field-label">Your name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={onChange}
                                        placeholder="John Doe"
                                        className="ctct__input"
                                        required
                                    />
                                </div>

                                <div className="ctct__group">
                                    <label className="ctct__field-label">Email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={onChange}
                                        placeholder="john@company.com"
                                        className="ctct__input"
                                        required
                                    />
                                </div>

                                <div className="ctct__group">
                                    <label className="ctct__field-label">Service of interest</label>
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={onChange}
                                        className="ctct__input ctct__select"
                                    >
                                        <option value="">Select a service…</option>
                                        <option value="web">Web &amp; Software Development</option>
                                        <option value="ai">AI &amp; Innovation</option>
                                        <option value="cyber">Cyber Defense</option>
                                        <option value="data">Data Intelligence</option>
                                        <option value="it">IT Infrastructure</option>
                                        <option value="health">HealthTech Solutions</option>
                                        <option value="logistics">Smart Logistics</option>
                                        <option value="custom">Tailored Solutions</option>
                                    </select>
                                </div>

                                <div className="ctct__group">
                                    <label className="ctct__field-label">Message</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={onChange}
                                        rows="5"
                                        placeholder="Tell us about your project, goals, and timeline…"
                                        className="ctct__input ctct__textarea"
                                        required
                                    />
                                </div>

                                <button type="submit" className="ctct__submit">
                                    Send Message <Send size={15} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;

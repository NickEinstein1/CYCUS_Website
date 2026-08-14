import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="ftr">
            {/* CTA block */}
            <div className="ftr__cta">
                <div className="container">
                    <div className="ftr__cta-inner">
                        <h2 className="ftr__cta-title">
                            Innovation<br />is key.
                        </h2>
                        <div className="ftr__cta-right">
                            <p className="ftr__cta-desc">
                                We work with organisations ready to ask harder questions — and build the answers that actually last.
                            </p>
                            <Link to="/contact" className="ftr__cta-btn">
                                Start the conversation →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main footer */}
            <div className="container">
                <div className="ftr__main">
                    {/* Brand */}
                    <div className="ftr__brand">
                        <Link to="/" className="ftr__logo">CY<span>CUS</span></Link>
                        <p className="ftr__tagline">
                        Built on hard questions<br />and impossible ideas.
                        </p>
                        <div className="ftr__social">
                            <a href="https://linkedin.com/company/cycus" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ftr__social-icon"><Linkedin size={15} /></a>
                        </div>
                    </div>

                    {/* Nav columns */}
                    <div className="ftr__cols">
                        <div className="ftr__col">
                            <h4 className="ftr__col-head">Services</h4>
                            <ul>
                                <li><Link to="/services/web-software-development">Web & Software Dev</Link></li>
                                <li><Link to="/services/ai-powered-solutions">AI & Innovation</Link></li>
                                <li><Link to="/services/cybersecurity-solutions">Cyber Defense</Link></li>
                                <li><Link to="/services/data-analytics">Data Intelligence</Link></li>
                                <li><Link to="/services/it-solutions">IT Infrastructure</Link></li>
                                <li><Link to="/services">All Services</Link></li>
                            </ul>
                        </div>

                        <div className="ftr__col">
                            <h4 className="ftr__col-head">Company</h4>
                            <ul>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </div>

                        <div className="ftr__col">
                            <h4 className="ftr__col-head">Contact</h4>
                            <ul>
                                <li><a href="mailto:contact@cycus.co.ke">contact@cycus.co.ke</a></li>
                                <li><a href="tel:+254700872051">+254 700 872 051</a></li>
                                <li><span>Nairobi, Kenya</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="ftr__bottom">
                    <span>&copy; {year} CYCUS Technologies. All rights reserved.</span>
                    <div className="ftr__bottom-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

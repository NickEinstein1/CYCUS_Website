import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const XIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="ftr">
            {/* CTA block */}
            <div className="ftr__cta">
                <div className="container">
                    <div className="ftr__cta-inner">
                        <h2 className="ftr__cta-title">
                            Have a project<br />in mind?
                        </h2>
                        <div className="ftr__cta-right">
                            <p className="ftr__cta-desc">
                                We work with ambitious organisations ready to leverage technology as a competitive advantage.
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
                            Reshaping industries through<br />advanced technology.
                        </p>
                        <div className="ftr__social">
                            <a href="https://linkedin.com/company/cycus" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="ftr__social-icon"><Linkedin size={15} /></a>
                            <a href="https://twitter.com/cycus" target="_blank" rel="noopener noreferrer" aria-label="X" className="ftr__social-icon"><XIcon size={15} /></a>
                            <a href="https://instagram.com/cycus" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="ftr__social-icon"><Instagram size={15} /></a>
                            <a href="https://facebook.com/cycus" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="ftr__social-icon"><Facebook size={15} /></a>
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

import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

// Custom X (Twitter) Icon
const XIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="logo-link">
                        <span className="text-white">CY</span>
                        <span className="text-primary">CUS</span>
                    </Link>
                    <p>
                        Reshaping industries and weaving advanced technology into the fabric of business.
                        We drive innovation that matters.
                    </p>
                    <div className="social-links">
                        <a href="https://linkedin.com/company/cycus" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://twitter.com/cycus" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                            <XIcon size={20} />
                        </a>
                        <a href="https://instagram.com/cycus" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                            <Instagram size={20} />
                        </a>
                        <a href="https://facebook.com/cycus" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4>Services</h4>
                    <ul className="footer-links">
                        <li><Link to="/services/web-software-development">Web & Software Development</Link></li>
                        <li><Link to="/services/ai-powered-solutions">AI & Innovation</Link></li>
                        <li><Link to="/services/data-analytics">Data Intelligence</Link></li>
                        <li><Link to="/services/cybersecurity-solutions">Cyber Defense</Link></li>
                    </ul>
                </div>

                <div>
                    <h4>Company</h4>
                    <ul className="footer-links">
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/services">All Services</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} CYCUS. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled,    setScrolled]    = useState(false);
    const [menuOpen,    setMenuOpen]    = useState(false);
    const location = useLocation();

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const isHome   = location.pathname === '/';
    const isActive = (p) => location.pathname === p;

    const links = [
        { name: 'Home',     href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About',    href: '/about' },
        { name: 'Contact',  href: '/contact' },
    ];

    return (
        <header className={`hdr ${scrolled || !isHome ? 'hdr--solid' : ''}`}>
            <div className="hdr__inner">
                <Link to="/" className="hdr__logo">CY<span>CUS</span></Link>

                <nav className="hdr__nav">
                    {links.map(l => (
                        <Link
                            key={l.name}
                            to={l.href}
                            className={`hdr__link ${isActive(l.href) ? 'hdr__link--on' : ''}`}
                        >
                            {l.name}
                        </Link>
                    ))}
                </nav>

                <div className="hdr__end">
                    <Link to="/contact" className="hdr__cta">Get Started</Link>
                    <button
                        className="hdr__burger"
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="hdr__mobile"
                    >
                        {links.map((l, i) => (
                            <motion.div
                                key={l.name}
                                initial={{ opacity: 0, x: -14 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.06 }}
                            >
                                <Link
                                    to={l.href}
                                    className={`hdr__mob-link ${isActive(l.href) ? 'hdr__mob-link--on' : ''}`}
                                >
                                    <span className="hdr__mob-num">0{i + 1}</span>
                                    {l.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.28 }}
                            className="hdr__mob-cta"
                        >
                            <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                                Get Started
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;

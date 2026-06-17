import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './NotFound.css';

const NotFound = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="nf"
    >
        <div className="container nf__container">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="nf__content"
            >
                <div className="nf__top">
                    <span className="nf__label">Error</span>
                    <span className="nf__status">404</span>
                </div>

                <h1 className="nf__code">404</h1>

                <div className="nf__bottom">
                    <div>
                        <h2 className="nf__title">Page not found.</h2>
                        <p className="nf__desc">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                    </div>
                    <div className="nf__actions">
                        <Link to="/" className="nf__btn-primary">
                            Go Home →
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="nf__btn-ghost"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    </motion.div>
);

export default NotFound;

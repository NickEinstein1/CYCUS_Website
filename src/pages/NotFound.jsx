import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';
import './NotFound.css';

const NotFound = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="notfound"
        >
            <div className="notfound__glow" />
            <div className="notfound__content">
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
                >
                    <p className="notfound__label">Error 404</p>
                    <h1 className="notfound__code">
                        <span className="text-gradient">404</span>
                    </h1>
                    <h2 className="notfound__title">Page Not Found</h2>
                    <p className="notfound__desc">
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>
                    <div className="notfound__actions">
                        <Link to="/" className="btn btn-primary">
                            <Home size={16} />
                            Go Home
                        </Link>
                        <button onClick={() => window.history.back()} className="btn btn-outline">
                            <ArrowLeft size={16} />
                            Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default NotFound;

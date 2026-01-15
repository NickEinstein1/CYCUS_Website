import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl font-bold text-[var(--color-primary)] mb-4">404</h1>
            <p className="text-xl text-gray-400 mb-8">Page not found</p>
            <Link to="/" className="btn btn-outline">Go Home</Link>
        </div>
    );
};

export default NotFound;

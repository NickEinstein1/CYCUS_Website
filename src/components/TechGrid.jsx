import React from 'react';
import './TechGrid.css';

const TechGrid = () => {
    return (
        <div className="tech-grid-container">
            <div className="tech-grid">
                <div className="grid-lines horizontal"></div>
                <div className="grid-lines vertical"></div>
            </div>
            <div className="tech-grid-glow glow-1"></div>
            <div className="tech-grid-glow glow-2"></div>
            <div className="tech-grid-glow glow-3"></div>
            <div className="tech-grid-scanline"></div>
        </div>
    );
};

export default TechGrid;


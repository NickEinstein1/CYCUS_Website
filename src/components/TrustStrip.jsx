import React from 'react';
import './TrustStrip.css';

/* Text-only trust logos — clean editorial style like Vercept's press strip */
const mentions = [
    'TechCrunch',
    'Business Daily Africa',
    'Kenya ICT Authority',
    'StartupBlink',
    'Disrupt Africa',
    'The Economist',
];

const TrustStrip = () => (
    <div className="trust">
        <div className="container">
            <div className="trust__inner">
                <span className="trust__label">Trusted by clients featured in</span>
                <div className="trust__logos">
                    {mentions.map((m, i) => (
                        <span key={i} className="trust__logo">{m}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default TrustStrip;

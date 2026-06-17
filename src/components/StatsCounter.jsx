import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import './StatsCounter.css';

const Counter = ({ end, suffix = '' }) => {
    const [val, setVal] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let raf;
        let start;
        const dur = 1800;
        const step = (ts) => {
            if (!start) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(end * eased);
            if (p < 1) raf = requestAnimationFrame(step);
            else setVal(end);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [end, inView]);

    return (
        <span ref={ref}>
            {val.toFixed(end % 1 !== 0 ? 2 : 0)}{suffix}
        </span>
    );
};

const stats = [
    { value: 500,   suffix: '+',  label: 'Projects Delivered',          desc: 'across enterprise clients' },
    { value: 150,   suffix: '+',  label: 'Enterprise Clients',           desc: 'in 20+ countries' },
    { value: 99.9,  suffix: '%',  label: 'Security Accuracy',            desc: 'incidents prevented' },
    { value: 99.99, suffix: '%',  label: 'Uptime Guarantee',             desc: 'on managed systems' },
];

const StatsCounter = () => (
    <section className="stats">
        <div className="container">
            <div className="stats__grid">
                {stats.map((s, i) => (
                    <div key={i} className="stats__item">
                        <div className="stats__val">
                            <Counter end={s.value} suffix={s.suffix} />
                        </div>
                        <div className="stats__label">{s.label}</div>
                        <div className="stats__desc">{s.desc}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default StatsCounter;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AIIntegrationShowcase = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    const features = [
        {
            title: "AUTONOMOUS DEFENSE",
            subtitle: "Drone Security & Surveillance",
            description: "AI-piloted drone swarms with computer vision for real-time perimeter breaches and threat tracking.",
            id: 'drone',
            image: 'drone_security_ai_vision_1767641811163.png'
        },
        {
            title: "BIO-INTELLIGENCE",
            subtitle: "Smart Healthcare Systems",
            description: "Predictive diagnostics and secure patient data monitoring powered by real-time biometric analysis.",
            id: 'health',
            image: 'smart_healthcare_ai_scan_1767641825892.png'
        },
        {
            title: "CYBER FORTRESS",
            subtitle: "Adaptive Network Security",
            description: "Self-healing security grids that neutralize zero-day exploits before they penetrate the core.",
            id: 'cyber',
            image: 'cybersecurity_ai_fortress_1767641857042.png'
        },
        {
            title: "GLOBAL LOGISTICS",
            subtitle: "Supply Chain Optimization",
            description: "Dynamic route calculation and fleet telematics to ensure military-grade delivery precision.",
            id: 'logistics',
            image: 'global_logistics_ai_map_1767641840402.png'
        }
    ];

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_20%)] opacity-10 blur-3xl" />

            <div className="container relative z-10">
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-2 mb-4"
                    >
                        <div className="h-[1px] w-12 bg-[var(--color-primary)]" />
                        <span className="text-[var(--color-primary)] tracking-[0.2em] text-sm font-bold">APPLIED INTELLIGENCE</span>
                        <div className="h-[1px] w-12 bg-[var(--color-primary)]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Intelligence Applied to <span className="text-gradient">Every Domain</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Visual Stage */}
                    <div className="aspect-square relative flex items-center justify-center bg-black rounded-3xl border border-white/10 overflow-hidden group">
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeFeature}
                                src={`/images/${features[activeFeature].image}`}
                                alt={features[activeFeature].title}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </AnimatePresence>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Status HUD */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-4 z-10">
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase tracking-wider">Active Module</span>
                                <span className="text-[var(--color-primary)] font-mono text-sm flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
                                    {features[activeFeature].id.toUpperCase()}_SYS
                                </span>
                            </div>
                            <div className="font-mono text-xs text-gray-400">
                                LIVE FEED // {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex flex-col gap-4">
                        {features.map((feature, index) => (
                            <motion.button
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setActiveFeature(index)}
                                className={`text-left p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${activeFeature === index
                                    ? 'bg-white/10 border-[var(--color-primary)]'
                                    : 'bg-transparent border-white/5 hover:bg-white/5 hover:border-white/20'
                                    }`}
                            >
                                {activeFeature === index && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-[var(--color-primary)]/5"
                                    />
                                )}
                                <div className="relative z-10">
                                    <span className="text-xs font-mono text-[var(--color-primary)] mb-1 block tracking-wider uppercase">{feature.subtitle}</span>
                                    <h3 className={`text-xl font-bold mb-2 ${activeFeature === index ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm max-w-md">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Industry Visual Components ---

const DroneScanner = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full h-full flex items-center justify-center overflow-hidden"
    >
        {/* Radar Sweep */}
        <div className="absolute w-[80%] h-[80%] border border-[var(--color-primary)]/30 rounded-full" />
        <div className="absolute w-[60%] h-[60%] border border-[var(--color-primary)]/20 rounded-full" />
        <div className="absolute w-[40%] h-[40%] border border-[var(--color-primary)]/10 rounded-full" />

        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80%] h-[80%] rounded-full bg-[conic-gradient(transparent_270deg,var(--color-primary)_360deg)] opacity-20"
        />

        {/* Drone Targets */}
        <motion.div
            animate={{ x: [0, 50, -20, 0], y: [0, -30, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute"
        >
            <div className="w-4 h-4 border border-red-500 flex items-center justify-center">
                <div className="w-1 h-1 bg-red-500" />
            </div>
            <div className="absolute -top-4 -left-2 text-[8px] text-red-500 font-mono whitespace-nowrap">TARGET LOCK</div>
        </motion.div>

        <motion.div
            animate={{ x: [20, -40, 30, 20], y: [-40, 20, -10, -40] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4"
        >
            <div className="w-3 h-3 border border-[var(--color-primary)] flex items-center justify-center">
                <div className="w-1 h-1 bg-[var(--color-primary)]" />
            </div>
            <div className="absolute -top-4 -left-2 text-[8px] text-[var(--color-primary)] font-mono whitespace-nowrap">DRONE 01</div>
        </motion.div>
    </motion.div>
);

const HealthMonitor = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative w-full h-full flex items-center justify-center flex-col gap-8"
    >
        {/* ECG Line */}
        <div className="w-[80%] h-24 relative overflow-hidden flex items-center">
            <div className="absolute inset-0 border-t border-b border-white/10" />
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                <motion.path
                    d="M0,50 L30,50 L40,20 L50,80 L60,50 L100,50 L110,10 L120,90 L130,50 L300,50"
                    fill="none"
                    stroke="var(--color-primary)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </svg>
        </div>

        {/* DNA Helix Representation */}
        <div className="flex gap-2">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ height: [10, 40, 10], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                    className="w-2 bg-[var(--color-primary)] rounded-full"
                />
            ))}
        </div>

        <div className="absolute top-10 right-10 flex flex-col items-end">
            <span className="text-2xl font-bold text-white">98 BPM</span>
            <span className="text-xs text-gray-400">VITALS NORMAL</span>
        </div>
    </motion.div>
);

const LogisticsMap = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative w-full h-full flex items-center justify-center"
    >
        {/* Map Grid */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
            {[...Array(36)].map((_, i) => (
                <div key={i} className="border border-white/30" />
            ))}
        </div>

        {/* Route Lines */}
        <svg className="absolute inset-0 w-full h-full p-8" style={{ overflow: 'visible' }}>
            <motion.path
                d="M50,250 L150,150 L250,150 L300,50"
                fill="none"
                stroke="var(--color-primary)"
                strokeWidth="2"
                strokeDasharray="5 5"
                animate={{ strokeDashoffset: [0, -20] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Moving Packet */}
            <motion.circle
                r="4"
                fill="white"
                animate={{
                    cx: [50, 150, 250, 300],
                    cy: [250, 150, 150, 50]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            {/* Supply Node */}
            <circle cx="50" cy="250" r="6" fill="var(--color-primary)" />
            <circle cx="300" cy="50" r="6" fill="var(--color-primary)" />
        </svg>

        <div className="absolute bottom-10 left-10 text-xs font-mono text-[var(--color-primary)] bg-black/50 px-2 py-1 border border-white/10">
            ROUTE OPTIMIZED<br />
            ETA: 14:00
        </div>
    </motion.div>
);

const CyberFortress = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-64 h-64 flex items-center justify-center"
    >
        {/* Rotating Shield Layers */}
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-[var(--color-primary)]/20 rounded-full border-t-[var(--color-primary)]"
        />
        <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-2 border-[var(--color-primary)]/40 rounded-full border-b-[var(--color-primary)]"
        />

        {/* Hex Grid Background */}
        <div className="absolute inset-8 rounded-full overflow-hidden opacity-30">
            <div className="w-full h-full bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>

        {/* Central Lock */}
        <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="z-10 bg-[var(--color-primary)]/10 p-4 rounded-full backdrop-blur-md border border-[var(--color-primary)]"
        >
            <div className="text-[var(--color-primary)] text-3xl font-bold">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            </div>
        </motion.div>
    </motion.div>
);

export default AIIntegrationShowcase;

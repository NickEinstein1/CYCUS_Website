import React from 'react';
import { motion } from 'framer-motion';

const SecurityArchitectureDiagram = () => {
    return (
        <div className="w-full flex flex-col items-center justify-center p-8 bg-black/20 rounded-2xl border border-white/5 backdrop-blur-sm overflow-hidden relative">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[var(--color-primary)]/5 blur-3xl rounded-full" />

            <div className="relative w-80 h-80 flex items-center justify-center">

                {/* Outer Ring - Network Perimeter */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-full border border-dashed border-[var(--color-primary)]/30 rounded-full"
                />

                {/* Middle Ring - Security Layers */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[80%] h-[80%] border-2 border-[var(--color-primary)]/50 rounded-full border-t-transparent border-b-transparent"
                />

                {/* Inner Ring - Encryption Layer */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-[60%] h-[60%] border border-[var(--color-primary)] rounded-full shadow-[0_0_15px_rgba(239,68,68,0.4)]"
                />

                {/* Core - The AI Model */}
                <motion.div
                    animate={{
                        boxShadow: ["0 0 20px rgba(239,68,68,0.2)", "0 0 40px rgba(239,68,68,0.6)", "0 0 20px rgba(239,68,68,0.2)"]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative z-10 w-[30%] h-[30%] bg-[var(--color-primary)] rounded-full flex items-center justify-center"
                >
                    <div className="text-white font-bold text-xs tracking-widest">AI CORE</div>
                </motion.div>

                {/* Orbiting Security Nodes */}
                <Node orbitDuration={8} offset={0} />
                <Node orbitDuration={8} offset={120} />
                <Node orbitDuration={8} offset={240} />

            </div>
        </div>
    );
};

const Node = ({ orbitDuration, offset }) => {
    return (
        <motion.div
            className="absolute w-full h-full"
            initial={{ rotate: offset }}
            animate={{ rotate: offset + 360 }}
            transition={{ duration: orbitDuration, repeat: Infinity, ease: "linear" }}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_white]" />
            </div>
        </motion.div>
    );
};

export default SecurityArchitectureDiagram;

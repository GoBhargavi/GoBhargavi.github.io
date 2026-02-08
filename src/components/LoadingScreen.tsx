'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);

    const statuses = [
        "AUTHENTICATING PROTOCOLS",
        "FETCHING ASSETS",
        "MOUNTING COMPONENTS",
        "OPTIMIZING RENDERING",
        "SYSTEM READY"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                const inc = Math.floor(Math.random() * 8) + 1;
                return prev + inc;
            });
        }, 120);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        if (progress > (statusIndex + 1) * 20) {
            setStatusIndex(prev => Math.min(prev + 1, statuses.length - 1));
        }
    }, [progress, statusIndex, statuses.length]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                y: -100,
                filter: "blur(20px)",
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 z-[100] bg-obsidian-950 flex flex-col items-center justify-center overflow-hidden font-outfit"
        >
            {/* Background High-Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffd70003_1px,transparent_1px),linear-gradient(to_bottom,#ffd70003_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />

            {/* Scanning Line Effect */}
            <motion.div
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/10 to-transparent z-0"
            />

            <div className="relative z-10 flex flex-col items-center">

                {/* Visual Loader - Circular Glow */}
                <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
                    {/* Rotating Rings */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 rounded-full border border-gold/5 border-t-gold/40 shadow-[0_0_20px_rgba(212,175,55,0.05)]"
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-2 rounded-full border border-gold/5 border-b-gold/20"
                    />

                    {/* Percentage Counter */}
                    <div className="flex flex-col items-center">
                        <span className="text-4xl font-bold text-white tracking-tighter">
                            {Math.min(progress, 100)}
                        </span>
                        <span className="text-[10px] text-gold/40 font-mono tracking-widest uppercase mt-[-4px]">Percent</span>
                    </div>
                </div>

                {/* Status Messaging */}
                <div className="text-center w-64 overflow-hidden">
                    <motion.div
                        key={statusIndex}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="h-6"
                    >
                        <span className="text-[11px] font-mono text-gold tracking-[0.3em] uppercase">
                            {statuses[statusIndex]}
                        </span>
                    </motion.div>

                    {/* Thinner, More Industrial Progress Bar */}
                    <div className="mt-4 h-[1px] w-full bg-white/5 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ type: "spring", stiffness: 40, damping: 20 }}
                        />
                    </div>
                </div>

                {/* Metadata Footnote */}
                <div className="absolute bottom-[-100px] flex gap-4 opacity-20">
                    <div className="w-1 h-1 bg-gold rounded-full animate-pulse" />
                    <div className="w-1 h-1 bg-gold rounded-full animate-pulse [animation-delay:0.2s]" />
                    <div className="w-1 h-1 bg-gold rounded-full animate-pulse [animation-delay:0.4s]" />
                </div>
            </div>

            {/* Border Accents */}
            <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-gold/20" />
            <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-gold/20" />
            <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-gold/20" />
            <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-gold/20" />
        </motion.div>
    );
};

export default LoadingScreen;

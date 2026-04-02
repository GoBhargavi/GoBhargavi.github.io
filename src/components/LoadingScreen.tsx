'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);

    const statuses = [
        "Initializing Portfolio",
        "Optimizing Assets",
        "Finalizing Experience"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 800);
                    return 100;
                }
                const inc = Math.floor(Math.random() * 8) + 2;
                return prev + inc;
            });
        }, 80);

        return () => clearInterval(interval);
    }, [onComplete]);

    useEffect(() => {
        if (progress > (statusIndex + 1) * 33) {
            setStatusIndex(prev => Math.min(prev + 1, statuses.length - 1));
        }
    }, [progress, statusIndex, statuses.length]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                transition: { duration: 0.6, ease: "easeInOut" }
            }}
            className="fixed inset-0 z-[100] bg-obsidian-950 flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="relative z-10 flex flex-col items-center max-w-sm w-full px-6">
                {/* Brand / Name */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-2xl font-bold text-white tracking-tight mb-2 font-mono">
                        Bhargavi Govardhanam
                    </h1>
                    <p className="text-[10px] text-slate-500 font-mono uppercase tracking-[0.3em]">
                        Senior AI Full-Stack Engineer
                    </p>
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-full">
                    <div className="flex justify-between items-end mb-2">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={statusIndex}
                                initial={{ opacity: 0, x: -5 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 5 }}
                                className="text-[10px] text-slate-500 font-mono uppercase tracking-widest"
                            >
                                {statuses[statusIndex]}
                            </motion.span>
                        </AnimatePresence>
                        <span className="text-[10px] text-white font-mono font-bold">
                            {Math.min(progress, 100)}%
                        </span>
                    </div>

                    {/* The Rail */}
                    <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-signal-orange"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.min(progress, 100)}%` }}
                            transition={{ ease: "linear" }}
                        />
                    </div>
                </div>

                {/* Subtle Decorative Element */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-12 opacity-10"
                >
                    <div className="w-8 h-[1px] bg-slate-400" />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;

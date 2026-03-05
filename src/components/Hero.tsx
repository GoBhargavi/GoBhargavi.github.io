'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';
import { useRecruiter } from '@/context/RecruiterContext';

const Hero = () => {
    const { isRecruiterMode } = useRecruiter();

    return (
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-obsidian-950 px-6 transition-colors duration-500">
            {/* Technical Metadata Overlays */}
            {!isRecruiterMode && (
                <>
                    <div className="absolute top-32 left-6 font-mono text-[10px] text-slate-500 hidden md:block uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-signal-orange animate-pulse" />
                            System Active: Node_Architect_v2.0
                        </div>
                        <div>Location: Dallas, TX // 32.7767° N, 96.7970° W</div>
                    </div>

                    <div className="absolute bottom-12 right-6 font-mono text-[10px] text-slate-500 hidden md:block text-right uppercase tracking-widest leading-loose">
                        <div>AI Architecture / Full Stack Systems</div>
                        <div>Production Environments Only</div>
                        <div className="text-signal-orange">Auth: HIPAA_COMPLIANT_READY</div>
                    </div>
                </>
            )}

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-4"
                >
                    <span className="font-mono text-[12px] text-signal-orange uppercase tracking-[0.4em]">
                        Engineering Intelligence
                    </span>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <h1 className="text-6xl md:text-[120px] font-mono font-bold leading-none tracking-tighter text-white uppercase text-center">
                        <span className={`block transition-all ${!isRecruiterMode ? 'hover:animate-glitch cursor-crosshair' : ''}`}>AI Architect</span>
                        <span className={`block lg:-mt-6 ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-slate-800'}`}>Bhargavi G<span className="text-signal-orange">.</span></span>
                    </h1>
                </motion.div>

                <div className="mt-12 w-full max-w-2xl">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className={`text-center leading-relaxed ${isRecruiterMode ? 'font-sans text-lg text-slate-600' : 'font-mono text-sm md:text-base text-slate-400'}`}
                    >
                        {isRecruiterMode ? (
                            "Senior AI Full-Stack Engineer with 10+ years of experience architecting production AI systems, RAG pipelines, and multi-agent workflows."
                        ) : (
                            "[SYSTEM INFO]: 10+ years experience in product delivery. The last 2+ years exclusively architecting production AI systems - RAG pipelines, multi-agent LLM workflows, and agentic systems."
                        )}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="mt-12"
                >
                    <a
                        href="#projects"
                        className="group relative px-12 py-4 bg-transparent border border-white/10 hover:border-signal-orange transition-all duration-300 overflow-hidden"
                    >
                        <span className={`relative z-10 uppercase tracking-[0.3em] transition-colors ${isRecruiterMode ? 'font-sans text-sm font-bold text-signal-orange' : 'font-mono text-[10px] text-white group-hover:text-signal-orange'}`}>
                            {isRecruiterMode ? 'View Case Studies' : 'Initialize Protocol'}
                        </span>
                        <div className="absolute inset-0 bg-signal-orange transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 opacity-5" />
                    </a>
                </motion.div>
            </div>

            {/* Background Texture Overlay */}
            {!isRecruiterMode && (
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] animate-pulse-slow">
                    <div className="absolute inset-0 bg-dot-pattern bg-dot-size" />
                </div>
            )}

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-signal-orange to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;

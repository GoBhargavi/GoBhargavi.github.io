'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-end p-6 md:p-12" aria-label="Hero Introduction">
            {/* Background elements - sleek dark mode deep glow effect */}
            <motion.div 
                style={{ y: yTransform }}
                className="absolute top-0 right-0 w-[120%] h-[120%] opacity-20 pointer-events-none"
            >
                {/* Repurposed neon accents for deep space aesthetic */}
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] border-[2px] border-signal-orange/40 rounded-full blur-[100px] animate-pulse-glow" />
                <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
                
                <div className="absolute top-[20%] right-[20%] grid grid-cols-12 gap-1 w-full h-full opacity-10">
                    {Array.from({length: 144}).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full" />
                    ))}
                </div>
            </motion.div>

            {/* Lower Asymmetric Layout */}
            <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12 mt-32">
                <div className="flex flex-col gap-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Status Badge */}
                        <div className="mb-8 inline-flex items-center gap-3 px-6 py-2 border border-signal-orange/30 bg-signal-orange/10 rounded-none backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-signal-orange opacity-75"></span>
                                <span className="relative inline-flex rounded-none h-2 w-2 bg-signal-orange"></span>
                            </span>
                            <span className="text-signal-orange text-[10px] font-mono uppercase tracking-[0.2em] font-bold">Open to Opportunities</span>
                        </div>

                        <h1 className="text-5xl md:text-[6rem] lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white">
                            <span className="block hover:text-signal-orange transition-colors duration-500">AI Full Stack</span>
                            <span className="block text-slate-400/80">Architect</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-2xl leading-relaxed">
                            Building production-grade LLM and RAG systems with end-to-end frontend, backend, and AI infrastructure for enterprise platforms.
                        </p>
                        <div className="mt-8 space-y-3">
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 bg-signal-orange rounded-full shadow-[0_0_8px_var(--signal-orange)]"></span>
                                <span>10+ years architecting scalable systems across pharma-tech and enterprise SaaS</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 bg-signal-orange rounded-full shadow-[0_0_8px_var(--signal-orange)]"></span>
                                <span>RAG pipelines and agentic workflows with LangChain/LangGraph</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-300">
                                <span className="w-1.5 h-1.5 bg-signal-orange rounded-full shadow-[0_0_8px_var(--signal-orange)]"></span>
                                <span>Enterprise-scale deployments on Azure and AWS</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="flex flex-wrap gap-3 font-mono text-xs md:text-sm tracking-wider uppercase text-slate-400 mt-6"
                    >
                        <span className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-none px-4 py-1.5 text-[10px]">Pharma-Tech</span>
                        <span className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-none px-4 py-1.5 text-[10px]">Enterprise SaaS</span>
                        <span className="border border-white/20 bg-white/5 backdrop-blur-sm rounded-none px-4 py-1.5 text-[10px]">Analytics</span>
                        <span className="border border-signal-orange/40 bg-signal-orange/10 text-signal-orange shadow-[2px_2px_0_rgba(0,240,255,0.2)] rounded-none px-4 py-1.5 text-[10px]">RAG Pipelines</span>
                        <span className="border border-signal-orange/40 bg-signal-orange/10 text-signal-orange shadow-[2px_2px_0_rgba(0,240,255,0.2)] rounded-none px-4 py-1.5 text-[10px]">Agentic ML</span>
                    </motion.div>
                </div>

                {/* Call to action pushed to the bottom right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="self-start md:self-end mb-4 flex flex-col gap-4"
                >
                    <a
                        href="#the-pitch"
                        className="group relative flex items-center justify-between gap-6 px-8 py-5 bg-white backdrop-blur-md rounded-none shadow-[4px_4px_0_rgba(255,255,255,0.1)] hover:bg-signal-orange hover:shadow-[4px_4px_0_var(--signal-orange)] hover:-translate-y-1 hover:-translate-x-1 text-obsidian-950 transition-all duration-300"
                    >
                        <span className="font-bold uppercase tracking-widest text-xs">
                            Discover Value
                        </span>
                        <ArrowDownRight size={20} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
            
            {/* Hard Line Break for Structural Tension */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-signal-orange via-white/10 to-transparent origin-left opacity-50"
            />
        </section>
    );
};

export default Hero;

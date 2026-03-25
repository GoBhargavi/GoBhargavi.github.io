'use client';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';
import { ArrowDownRight } from 'lucide-react';

const Hero = () => {
    const { isRecruiterMode } = useRecruiter();
    const { scrollYProgress } = useScroll();
    const yTransform = useTransform(scrollYProgress, [0, 1], [0, 300]);

    return (
        <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden bg-obsidian-950 flex flex-col justify-end p-6 md:p-12">
            {/* Background elements - extreme asymmetry */}
            <motion.div 
                style={{ y: yTransform }}
                className="absolute top-0 right-0 w-[120%] h-[120%] opacity-20 pointer-events-none"
            >
                <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] border-[1px] border-signal-orange/30 rounded-full blur-[120px]" />
                <div className="absolute top-[20%] right-[20%] grid grid-cols-12 gap-1 w-full h-full opacity-10">
                    {Array.from({length: 144}).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white" />
                    ))}
                </div>
            </motion.div>



            {/* Lower Asymmetric Layout (Content jammed bottom left) */}
            <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row justify-between items-end gap-12 mt-32">
                <div className="flex flex-col gap-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-bold tracking-tighter leading-[0.85] text-obsidian-900">
                            <span className="block hover:text-signal-orange transition-colors duration-300">AI Full Stack</span>
                            <span className="block hover:text-signal-orange transition-colors duration-300">Architect</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mt-6 max-w-3xl leading-relaxed">
                            Building production-grade LLM and RAG systems with end-to-end frontend, backend, and AI infrastructure for fintech and healthcare enterprises on cloud scale platforms.
                        </p>
                        <div className="mt-8 space-y-2">
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <span className="w-2 h-2 bg-signal-orange rounded-full"></span>
                                <span>10+ years architecting scalable systems across fintech and healthcare</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <span className="w-2 h-2 bg-signal-orange rounded-full"></span>
                                <span>RAG pipelines and agentic workflows with LangChain/LangGraph</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-slate-700">
                                <span className="w-2 h-2 bg-signal-orange rounded-full"></span>
                                <span>Enterprise-scale deployments on Azure and AWS</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="flex flex-wrap gap-3 font-mono text-xs md:text-sm tracking-wider uppercase text-slate-400 mt-4"
                    >
                        <span className="border border-white/20 px-3 py-1">Healthcare</span>
                        <span className="border border-white/20 px-3 py-1">Fintech</span>
                        <span className="border border-white/20 px-3 py-1">Analytics</span>
                        <span className="border border-signal-orange/40 text-signal-orange px-3 py-1">RAG Pipelines</span>
                        <span className="border border-signal-orange/40 text-signal-orange px-3 py-1">Agentic ML</span>
                    </motion.div>
                </div>

                {/* Call to action pushed to the bottom right */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="self-start md:self-end mb-4 flex flex-col gap-3"
                >
                    <a
                        href="#projects"
                        className="group relative flex items-center justify-between gap-6 px-8 py-6 bg-white hover:bg-signal-orange text-obsidian-950 transition-colors duration-300"
                    >
                        <span className="font-bold uppercase tracking-widest text-sm">
                            View Work
                        </span>
                        <ArrowDownRight size={24} className="group-hover:rotate-[-45deg] transition-transform duration-300" />
                    </a>
                    <a
                        href="#projects"
                        className="group relative flex items-center justify-center gap-3 px-6 py-4 border border-white/30 hover:border-signal-orange text-white hover:text-signal-orange transition-colors duration-300"
                    >
                        <span className="font-medium uppercase tracking-widest text-sm">
                            Explore Projects
                        </span>
                    </a>
                </motion.div>
            </div>
            
            {/* Hard Line Break for Structural Tension */}
            <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-signal-orange via-white/20 to-transparent origin-left"
            />
        </section>
    );
};

export default Hero;

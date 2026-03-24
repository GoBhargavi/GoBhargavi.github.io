'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';

const About = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="about" className={`relative min-h-[60svh] px-6 md:px-12 py-24 border-b border-white/10 ${isRecruiterMode ? 'bg-slate-50 text-slate-900 border-slate-200' : 'bg-obsidian-900 text-slate-300'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                
                {/* Asymmetric Structural Labeling */}
                <div className="md:col-span-3 flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.3em]">
                    <div className="w-12 h-[1px] bg-signal-orange mb-4" />
                    <span className={isRecruiterMode ? "text-slate-500" : "text-signal-orange"}>Operating Context</span>
                    <span className="opacity-50">10+ Years Runtime</span>
                </div>

                <div className="md:col-span-9">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <h2 className={`text-3xl md:text-5xl font-bold tracking-tight uppercase leading-snug ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                            From UI engineering to <span className="text-signal-orange">autonomous AI systems architecture.</span>
                        </h2>

                        <div className={`space-y-6 text-base md:text-xl font-light leading-relaxed max-w-4xl ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                            <p>
                                With over 10 years of experience delivering production-grade applications, I evolved from engineering high-performance frontend interfaces into architecting the deep intelligence that powers them. 
                                Through this arc, I&apos;ve maintained one constant: an obsession with performance and engineering quality. Today, I build production-grade agentic systems that don&apos;t just chat-they execute, but reason over it autonomously.
                            </p>
                            <p>
                                Today, I specialize in bridging the gap between theoretical ML models and real-world product delivery. I design and implement robust Agentic RAG pipelines, deploying multi-agent workflows using LangChain and LangGraph for complex decision support.
                            </p>
                            <p>
                                I operate with equal depth on both sides of the stack- engineering highly scalable React/FastAPI platforms and architecting the underlying LLM infrastructure that ensures deterministic, high-precision semantic retrieval in mission-critical environments.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

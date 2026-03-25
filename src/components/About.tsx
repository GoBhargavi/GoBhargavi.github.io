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
                            Production <span className="text-signal-orange">Impact</span>
                        </h2>

                        <ul className={`space-y-6 text-base md:text-xl font-light leading-relaxed max-w-4xl ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                            <li className="flex items-start gap-4">
                                <div className="mt-2 w-2 h-2 bg-signal-orange shrink-0" />
                                <span><strong className={isRecruiterMode ? 'text-slate-900' : 'text-white'}>Architected and delivered an end-to-end Agentic RAG platform</strong> for loan origination, driving context-aware decision support across complex financial workflows.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-2 w-2 h-2 bg-signal-orange shrink-0" />
                                <span><strong className={isRecruiterMode ? 'text-slate-900' : 'text-white'}>Led the migration of a cross-border escrow platform</strong> to modern frameworks and Go microservices, improving system performance and production stability on Azure Kubernetes Service.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-2 w-2 h-2 bg-signal-orange shrink-0" />
                                <span><strong className={isRecruiterMode ? 'text-slate-900' : 'text-white'}>Designed and integrated a GenAI-powered RAG chatbot</strong> for a healthcare platform, enabling robust natural language queries over sensitive resident care plans.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="mt-2 w-2 h-2 bg-signal-orange shrink-0" />
                                <span><strong className={isRecruiterMode ? 'text-slate-900' : 'text-white'}>Engineered intelligent predictive systems</strong> utilizing ARIMA and LSTM machine learning pipelines for dynamic visitor traffic forecasting and automated capacity decision support.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

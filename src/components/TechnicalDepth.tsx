'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';
import { BrainCircuit, ShieldCheck, Zap } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const TechnicalDepth = () => {
    const { isRecruiterMode } = useRecruiter();
    const { technicalDepth } = resumeData;

    return (
        <section id="technical-depth" className={`relative px-6 md:px-12 py-24 border-b border-white/10 ${isRecruiterMode ? 'bg-slate-50 text-slate-900 border-slate-200' : 'bg-obsidian-900 text-slate-300'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <div className="font-mono text-xs text-signal-orange uppercase tracking-[0.4em] mb-4">Engineering Standards</div>
                    <h2 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                        How I Build <span className="text-signal-orange">AI Systems</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* RAG Strategy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`p-8 border border-white/5 h-full flex flex-col ${isRecruiterMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-obsidian-950'}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BrainCircuit size={20} className="text-signal-orange" />
                            <h3 className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${isRecruiterMode ? 'text-slate-900' : 'text-slate-500'}`}>RAG Strategy</h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                            {technicalDepth.RAG_Pipeline_Approach}
                        </p>
                    </motion.div>

                    {/* Hallucination Handling */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={`p-8 border border-white/5 h-full flex flex-col ${isRecruiterMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-obsidian-950'}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <ShieldCheck size={20} className="text-signal-orange" />
                            <h3 className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${isRecruiterMode ? 'text-slate-900' : 'text-slate-500'}`}>Reliability</h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                            {technicalDepth.Hallucination_Handling}
                        </p>
                    </motion.div>

                    {/* Engineering Practices */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={`p-8 border border-white/5 h-full flex flex-col ${isRecruiterMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-obsidian-950'}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Zap size={20} className="text-signal-orange" />
                            <h3 className={`font-mono text-xs font-bold uppercase tracking-[0.2em] ${isRecruiterMode ? 'text-slate-900' : 'text-slate-500'}`}>Production Core</h3>
                        </div>
                        <p className={`text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                            {technicalDepth.Engineering_Practices}
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalDepth;

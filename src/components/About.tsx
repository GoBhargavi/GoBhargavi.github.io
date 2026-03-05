'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';

const About = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="about" className={`section-container transition-colors duration-500 ${isRecruiterMode ? 'bg-white' : ''}`}>
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    Identity / Philosophy
                </div>
            )}

            <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className={`text-4xl md:text-6xl mb-8 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold' : ''}`}>
                            I don't just integrate AI - <span className={`${isRecruiterMode ? 'text-signal-orange' : 'text-signal-orange italic'}`}>I architect it.</span>
                        </h2>

                        <div className={`space-y-6 text-lg leading-relaxed ${isRecruiterMode ? 'text-slate-600 font-sans' : 'text-slate-400 font-light'}`}>
                            <p>
                                Senior AI Full Stack Engineer with 10+ years of cross-functional experience. The last 2+ years have been dedicated exclusively to
                                architecting production-grade AI systems, including RAG pipelines, multi-agent workflows,
                                and specialized agentic systems for enterprise-scale healthcare and fintech clients.
                            </p>
                            <p>
                                I specialize in bridge the gap between AI research and product delivery. My focus is on
                                engineering autonomous systems capable of high-precision semantic retrieval and
                                complex reasoning, ensuring reliability, scalability, and HIPAA compliance in
                                mission-critical environments.
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="md:col-span-4 space-y-8">
                    <div className={isRecruiterMode ? 'p-6 bg-slate-50 border border-slate-200' : 'tech-panel'}>
                        <div className={`font-bold text-xs mb-2 ${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-signal-orange font-mono text-xs'}`}>LOCATION</div>
                        <div className={isRecruiterMode ? 'text-slate-900 text-xl font-bold' : 'text-white text-xl'}>Dallas, TX</div>
                    </div>
                    <div className={isRecruiterMode ? 'p-6 bg-slate-50 border border-slate-200' : 'tech-panel'}>
                        <div className={`font-bold text-xs mb-2 ${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-signal-orange font-mono text-xs'}`}>EXPERIENCE</div>
                        <div className={isRecruiterMode ? 'text-slate-900 text-xl font-bold' : 'text-white text-xl'}>10+ Years Total</div>
                    </div>
                    <div className={isRecruiterMode ? 'p-6 bg-slate-50 border border-slate-200' : 'tech-panel'}>
                        <div className={`font-bold text-xs mb-2 ${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-signal-orange font-mono text-xs'}`}>AI FOCUS</div>
                        <div className={isRecruiterMode ? 'text-slate-900 text-xl font-bold' : 'text-white text-xl'}>2+ Years Specialist</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

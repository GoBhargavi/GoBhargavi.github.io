'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';
import resumeData from '@/data/resumeData.json';

const Education = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="education" className={`relative px-6 md:px-12 py-24 border-b border-white/10 ${isRecruiterMode ? 'bg-white border-slate-200' : 'bg-obsidian-950'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="font-mono text-xs text-signal-orange uppercase tracking-[0.4em] mb-4">Foundation</div>
                    <h2 className={`text-4xl md:text-5xl font-bold uppercase tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                        Academic <span className="text-signal-orange">Background</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-500">
                                {edu.startDate} - {edu.endDate}
                            </div>
                            <h3 className={`text-2xl font-bold uppercase tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                                {edu.degree}
                            </h3>
                            <div className="text-signal-orange font-mono text-xs uppercase tracking-widest">
                                {edu.institution}
                            </div>
                            <p className={`text-base font-light leading-relaxed max-w-xl ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                                {edu.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

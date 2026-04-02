'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import SectionHeader from '@/components/SectionHeader';

const Experience = () => {
    const experiences = resumeData.experience;

    return (
        <section id="experience" className="relative px-6 md:px-12 py-24 border-b border-white/10 bg-obsidian-950">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="Professional History"
                    title="Career"
                    accent="Timeline"
                />

                <div className="space-y-24">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline"
                        >
                            {/* Date / Time Period */}
                            <div className="md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
                                {exp.startDate} - {exp.endDate}
                            </div>

                            {/* Job Details */}
                            <div className="md:col-span-9 space-y-4">
                                <div>
                                    <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                                        {exp.position}
                                    </h3>
                                    <div className="text-signal-orange font-mono text-xs uppercase tracking-widest mt-1">
                                        {exp.company}
                                    </div>
                                </div>
                                <ul className="space-y-4 text-base md:text-lg font-light leading-relaxed max-w-3xl text-slate-400">
                                    {exp.description.split('. ').filter(Boolean).map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-4">
                                            <div className="mt-2.5 w-1.5 h-1.5 bg-signal-orange shrink-0 rounded-full" />
                                            <span>{bullet}{!bullet.endsWith('.') && '.'}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

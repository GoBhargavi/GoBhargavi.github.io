'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import SectionHeader from '@/components/SectionHeader';

const Education = () => {
    return (
        <section id="education" className="relative px-6 md:px-12 py-24 border-b border-white/10 bg-obsidian-950">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="Foundation"
                    title="Academic"
                    accent="Background"
                />

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
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                                {edu.degree}
                            </h3>
                            <div className="text-signal-orange font-mono text-xs uppercase tracking-widest">
                                {edu.institution}
                            </div>
                            <p className="text-base font-light leading-relaxed max-w-xl text-slate-400">
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

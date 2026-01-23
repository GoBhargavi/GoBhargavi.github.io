'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { GraduationCap } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
                        <GraduationCap className="text-gold-400" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-platinum-400">Academic</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8 tracking-tighter">
                        <span className="text-gradient">Education Background</span>
                    </h2>
                </motion.div>

                <div className="grid gap-10">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="glass-card p-10 flex flex-col md:flex-row md:items-start gap-10"
                        >
                            <div className="flex-grow">
                                <h3 className="text-3xl font-bold text-white mb-2 font-outfit">{edu.institution}</h3>
                                <div className="text-gold-400 text-xl font-medium mb-2 font-outfit tracking-wide">{edu.degree}</div>
                                <div className="text-platinum-500 mb-6 font-semibold uppercase tracking-widest text-xs">
                                    {edu.startDate} — {edu.endDate}
                                </div>
                                <p className="text-platinum-300 leading-relaxed font-inter font-light text-lg">{edu.description}</p>
                            </div>

                            {edu.institutionUrl && (
                                <div className="flex-shrink-0">
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-8 py-3 bg-white text-obsidian-950 rounded-xl hover:bg-gold-500 hover:text-white transition-all text-sm font-bold"
                                    >
                                        Visit Institution
                                    </a>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

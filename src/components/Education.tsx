'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, BookOpen } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Education = () => {
    return (
        <section id="education" className="py-24 relative bg-obsidian-950">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Academic <span className="text-neon-cyan">Background</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-neon-cyan/20 transition-all duration-300"
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-neon-cyan/10 rounded-xl">
                                    <GraduationCap className="text-neon-cyan" size={24} />
                                </div>
                                <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                    {edu.startDate} — {edu.endDate}
                                </span>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors">
                                {edu.degree}
                            </h3>

                            <div className="mb-4">
                                {edu.institutionUrl ? (
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1 text-sm font-medium"
                                    >
                                        {edu.institution}
                                        <ExternalLink size={12} />
                                    </a>
                                ) : (
                                    <span className="text-slate-400 text-sm font-medium">{edu.institution}</span>
                                )}
                            </div>

                            {edu.description && (
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

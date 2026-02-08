'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Calendar, MapPin } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Education = () => {
    return (
        <section id="education" className="py-24 relative bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Academic <span className="text-gradient">Background</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        The theoretical foundation that powers my engineering practice.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-gold/50 transition-all duration-300 flex flex-col h-full relative"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                                    <GraduationCap className="text-gold w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 flex items-center gap-2">
                                    <Calendar size={12} className="text-gold/70" />
                                    {edu.startDate} — {edu.endDate}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors font-outfit">
                                {edu.degree}
                            </h3>

                            <div className="mb-6">
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

                            <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                                {edu.description}
                            </p>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

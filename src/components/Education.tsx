'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { GraduationCap, ExternalLink, BookOpen } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-obsidian-900" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                        <GraduationCap className="text-teal-400" size={16} />
                        <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">Education</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-4">
                        Academic Background
                    </h2>
                </motion.div>

                {/* Education Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    {resumeData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="p-3 rounded-xl bg-teal-500/10 w-fit mb-6">
                                <BookOpen className="text-teal-400" size={24} />
                            </div>

                            {/* Degree */}
                            <h3 className="text-xl font-bold text-white mb-2 font-outfit">
                                {edu.degree}
                            </h3>

                            {/* Institution */}
                            <div className="mb-4">
                                {edu.institutionUrl ? (
                                    <a
                                        href={edu.institutionUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-teal-400 hover:text-teal-300 transition-colors inline-flex items-center gap-1"
                                    >
                                        {edu.institution}
                                        <ExternalLink size={12} />
                                    </a>
                                ) : (
                                    <span className="text-teal-400">{edu.institution}</span>
                                )}
                            </div>

                            {/* Date */}
                            <div className="text-slate-500 text-sm mb-4">
                                {edu.startDate} — {edu.endDate}
                            </div>

                            {/* Description */}
                            {edu.description && (
                                <p className="text-slate-400 text-sm leading-relaxed">
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

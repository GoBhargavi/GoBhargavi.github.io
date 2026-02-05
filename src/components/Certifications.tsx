'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-obsidian-900" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-amber-500/10">
                            <Award className="text-amber-400" size={20} />
                        </div>
                        <h2 className="text-3xl font-bold font-outfit text-white">Certifications & Recognition</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Certifications */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-300 mb-6 uppercase tracking-wider text-sm">
                            Professional Certifications
                        </h3>
                        <div className="space-y-4">
                            {resumeData.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all cursor-default"
                                >
                                    <h4 className="text-base font-semibold text-white mb-1">{cert.name}</h4>
                                    {cert.date && (
                                        <div className="text-teal-400 text-xs font-medium mb-2">{cert.date}</div>
                                    )}
                                    {cert.description && (
                                        <p className="text-slate-500 text-sm">{cert.description}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Honors & Awards */}
                    <div>
                        <h3 className="text-lg font-semibold text-slate-300 mb-6 uppercase tracking-wider text-sm">
                            Recognition
                        </h3>
                        <div className="space-y-4">
                            {resumeData.honorsAwards.map((honor, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-5 rounded-xl bg-amber-500/5 border border-amber-500/10 hover:border-amber-500/30 transition-all cursor-default"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h4 className="text-base font-semibold text-white mb-1">{honor.name}</h4>
                                            {honor.date && (
                                                <div className="text-amber-400 text-xs font-medium mb-2">{honor.date}</div>
                                            )}
                                            {honor.description && (
                                                <p className="text-slate-500 text-sm">{honor.description}</p>
                                            )}
                                        </div>
                                        <Award className="text-amber-400 flex-shrink-0" size={20} />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Skills Tags */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-wider mb-6">
                        Core Technologies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-2">
                        {resumeData.skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="px-4 py-2 bg-white/[0.02] border border-white/5 text-slate-400 rounded-lg text-sm font-medium hover:border-teal-500/20 hover:text-white transition-all cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;

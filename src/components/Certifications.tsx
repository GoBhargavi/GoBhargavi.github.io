'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Award } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Certifications = () => {
    // Combine Certifications and Awards for a unified grid if desired, or keep separate columns but styled consistently.
    // Given the request for "redesign like other sections" (e.g. Projects), a grid is best.

    return (
        <section id="certifications" className="py-24 relative bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Certifications & <span className="text-gradient">Awards</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        Validation of expertise and recognition for impactful contributions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Render Certifications */}
                    {resumeData.certifications.map((cert, index) => (
                        <motion.div
                            key={`cert-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-gold/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                                    <ShieldCheck className="text-gold w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                    {cert.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors font-outfit">
                                {cert.name}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                                {cert.description}
                            </p>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                        </motion.div>
                    ))}

                    {/* Render Awards */}
                    {resumeData.honorsAwards.map((award, index) => (
                        <motion.div
                            key={`award-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (resumeData.certifications.length + index) * 0.1 }}
                            className="group p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-gold/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                                    <Trophy className="text-gold w-6 h-6" />
                                </div>
                                <span className="text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5">
                                    {award.date}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors font-outfit">
                                {award.name}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                                {award.description}
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

export default Certifications;

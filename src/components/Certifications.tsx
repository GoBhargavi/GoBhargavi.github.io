'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative bg-obsidian-950">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Certifications & <span className="text-neon-cyan">Awards</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Certifications Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <ShieldCheck className="text-neon-cyan" />
                            Credentials
                        </h3>
                        <div className="space-y-4">
                            {resumeData.certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-cyan/20 transition-all duration-300"
                                >
                                    <h4 className="font-bold text-white group-hover:text-neon-cyan transition-colors">
                                        {cert.name}
                                    </h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-xs font-mono text-slate-500">{cert.date}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2">{cert.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Awards Column */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Trophy className="text-gold-400" />
                            Recognition
                        </h3>
                        <div className="space-y-4">
                            {resumeData.honorsAwards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-gold-400/20 transition-all duration-300"
                                >
                                    <h4 className="font-bold text-white group-hover:text-gold-400 transition-colors">
                                        {award.name}
                                    </h4>
                                    <div className="flex justify-between items-center mt-2">
                                        <span className="text-xs font-mono text-slate-500">{award.date}</span>
                                    </div>
                                    <p className="text-slate-500 text-sm mt-2">{award.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

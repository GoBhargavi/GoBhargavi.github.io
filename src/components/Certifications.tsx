'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Award, Calendar } from 'lucide-react';

const Certifications = () => {
    return (
        <section id="certifications" className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gold-glow/10">
                            <Award className="text-gold-glow" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-outfit text-white">Certifications & Awards</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Certifications */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Award className="text-gold-glow" size={20} />
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
                                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold-glow/30 transition-all"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                                    {cert.date && (
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                            <Calendar size={14} />
                                            <span>{cert.date}</span>
                                        </div>
                                    )}
                                    {cert.description && (
                                        <p className="text-gray-400 text-sm">{cert.description}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Honors & Awards */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                            <Award className="text-gold-shimmer" size={20} />
                            Honors & Recognition
                        </h3>
                        <div className="space-y-4">
                            {resumeData.honorsAwards.map((honor, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold-shimmer/30 transition-all"
                                >
                                    <h4 className="text-lg font-semibold text-white mb-2">{honor.name}</h4>
                                    {honor.date && (
                                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                            <Calendar size={14} />
                                            <span>{honor.date}</span>
                                        </div>
                                    )}
                                    {honor.description && (
                                        <p className="text-gray-400 text-sm">{honor.description}</p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Additional Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <h3 className="text-xl font-semibold text-white mb-6 text-center">Core Competencies</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {resumeData.skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-4 py-2 bg-gradient-to-r from-gold-glow/10 to-gold-shimmer/10 border border-gold-glow/20 text-gold-glow rounded-full text-sm font-medium hover:from-gold-glow/20 hover:to-gold-shimmer/20 transition-all"
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

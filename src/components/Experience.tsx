'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-gold-glow/10">
                            <Briefcase className="text-gold-glow" size={24} />
                        </div>
                        <h2 className="text-4xl font-bold font-outfit text-white">Experience</h2>
                    </div>
                </motion.div>

                <div className="space-y-8">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-8 pb-8 border-l border-white/10 last:border-l-0"
                        >
                            <div className="absolute left-0 top-0 w-4 h-4 bg-gold-glow rounded-full -translate-x-1/2" />
                            
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-gold-shimmer/30 transition-all">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                                        <div className="text-gold-shimmer text-lg font-medium">{exp.company}</div>
                                        {exp.location && (
                                            <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-gray-500 text-sm font-medium">
                                        {exp.startDate} - {exp.endDate}
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                
                                {exp.companyUrl && (
                                    <div className="mt-4">
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-glow/10 border border-gold-glow/20 text-gold-glow rounded-full hover:bg-gold-glow/20 transition-all text-sm font-medium"
                                        >
                                            Visit Company
                                        </a>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

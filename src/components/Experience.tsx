'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase, MapPin } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
                        <Briefcase className="text-violet-400" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-platinum-400">Career</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8 tracking-tighter">
                        <span className="text-gradient">Professional Experience</span>
                    </h2>
                </motion.div>

                <div className="space-y-12">
                    {resumeData.experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="relative pl-12 pb-12 border-l-2 border-white/5 last:border-l-0"
                        >
                            <div className="absolute left-0 top-0 w-6 h-6 bg-obsidian-950 border-2 border-violet-500 rounded-full -translate-x-1/2 z-10" />

                            <div className="glass-card p-10 group">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 font-outfit">{exp.position}</h3>
                                        <div className="text-violet-400 text-xl font-medium font-outfit tracking-wide">{exp.company}</div>
                                        {exp.location && (
                                            <div className="flex items-center gap-2 text-platinum-500 text-sm mt-3 font-inter">
                                                <MapPin size={14} />
                                                <span>{exp.location}</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-platinum-400 text-sm font-semibold whitespace-nowrap">
                                        {exp.startDate} — {exp.endDate}
                                    </div>
                                </div>

                                <p className="text-platinum-300 leading-relaxed font-inter font-light text-lg mb-8">{exp.description}</p>

                                {exp.companyUrl && (
                                    <div className="mt-auto">
                                        <a
                                            href={exp.companyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-obsidian-950 rounded-xl hover:bg-violet-400 hover:text-white transition-all text-sm font-bold"
                                        >
                                            View Enterprise
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

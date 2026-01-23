'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { Briefcase } from 'lucide-react';

const Timeline = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative">
                    {/* Vertical Line - Refined */}
                    <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/20 via-gold-400/20 to-transparent md:-translate-x-1/2" />

                    <div className="flex flex-col gap-16">
                        {resumeData.experience.map((job, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col md:flex-row gap-12 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Dot - Enhanced */}
                                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-obsidian-950 border-2 border-violet-500 md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />

                                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'
                                    }`}>
                                    <div className="text-violet-400 font-outfit text-sm font-bold uppercase tracking-widest mb-3">
                                        {job.startDate} — {job.endDate}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2 font-outfit">{job.position}</h3>
                                    <div className="text-gold-400 font-medium mb-6 font-outfit text-lg">
                                        <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                                            {job.company}
                                        </a>
                                        <span className="text-white/20 mx-3">•</span>
                                        <span className="text-platinum-500 font-inter text-base uppercase tracking-tight">{job.location}</span>
                                    </div>
                                    <p className="glass-card p-8 text-platinum-300 leading-relaxed font-inter font-light text-lg">
                                        {job.description}
                                    </p>
                                </div>

                                {/* Empty half for desktop layout balance */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

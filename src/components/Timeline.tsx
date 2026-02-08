'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Timeline = () => {
    return (
        <section id="experience" className="py-24 relative bg-obsidian-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Professional <span className="text-gradient">Journey</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        A decade of technical leadership, architectural decisions, and impactful engineering across global enterprises.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent transform md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {resumeData.experience.map((job, index) => {
                            const isEven = index % 2 === 0;

                            return (
                                <div key={index} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}>

                                    {/* Date Bubble (Center) */}
                                    <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-gold/20 bg-obsidian-950 z-20 shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                                        <div className="w-3 h-3 rounded-full bg-gold animate-pulse-slow" />
                                    </div>

                                    {/* Content Card */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`w-full md:w-[calc(50%-3rem)] pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                                    >
                                        <div className="relative group p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-gold/50 transition-all duration-300">

                                            <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} gap-2 mb-4`}>
                                                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors font-outfit">
                                                    {job.position}
                                                </h3>
                                                <div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
                                                    <Building2 size={16} className="text-gold/70" />
                                                    <span>{job.company}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-mono text-slate-500 bg-white/5 px-3 py-1 rounded-full border border-white/5 w-fit">
                                                    <Calendar size={12} className="text-gold/70" />
                                                    {job.startDate} — {job.endDate}
                                                </div>
                                            </div>

                                            <p className="text-slate-400 leading-relaxed text-sm mb-4">
                                                {job.description}
                                            </p>

                                            <div className={`flex items-center gap-2 text-xs text-slate-500 font-mono ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                                <MapPin size={12} />
                                                {job.location}
                                            </div>

                                            {/* Hover Glow */}
                                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

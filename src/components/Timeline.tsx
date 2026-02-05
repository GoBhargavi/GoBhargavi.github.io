'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { MapPin, ExternalLink } from 'lucide-react';

const Timeline = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-obsidian-950" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-black font-outfit text-white mb-4 tracking-tight">
                        11-Year Journey
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        From foundational engineering to staff-level architecture across three continents.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/30 via-slate-700/30 to-transparent md:-translate-x-px" />

                    <div className="flex flex-col gap-12">
                        {resumeData.experience.map((job, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5 }}
                                    className={`relative flex flex-col md:flex-row gap-8 ${isLeft ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 md:left-1/2 top-0 w-3 h-3 rounded-full bg-obsidian-950 border-2 border-teal-500 md:-translate-x-1.5 z-10" />

                                    {/* Content Card */}
                                    <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? 'md:pl-12' : 'md:pr-12 md:text-right'
                                        }`}>
                                        {/* Date */}
                                        <div className="text-teal-400 text-sm font-semibold mb-2 tracking-wide">
                                            {job.startDate} — {job.endDate}
                                        </div>

                                        {/* Position */}
                                        <h3 className="text-2xl font-bold text-white mb-2 font-outfit">
                                            {job.position}
                                        </h3>

                                        {/* Company & Location */}
                                        <div className={`flex items-center gap-3 mb-4 text-sm ${isLeft ? '' : 'md:justify-end'
                                            }`}>
                                            {job.companyUrl ? (
                                                <a
                                                    href={job.companyUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                                                >
                                                    {job.company}
                                                    <ExternalLink size={12} />
                                                </a>
                                            ) : (
                                                <span className="text-amber-400">{job.company}</span>
                                            )}
                                            <span className="text-slate-600">•</span>
                                            <span className="text-slate-500 inline-flex items-center gap-1">
                                                <MapPin size={12} />
                                                {job.location}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="p-6 rounded-xl bg-white/[0.02] border border-white/5 text-slate-400 leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>

                                    {/* Spacer for alternating layout */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Building2, Calendar, ArrowRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Timeline = () => {
    const [expandedId, setExpandedId] = React.useState<number | null>(null);

    return (
        <section id="experience" className="py-24 relative bg-obsidian-950 overflow-hidden snap-start">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-4">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Journey</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        A timeline of technical leadership and architectural impact.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-white/5 ml-3 md:ml-6 space-y-8">
                    {resumeData.experience.map((job, index) => {
                        const isExpanded = expandedId === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative pl-8 md:pl-12"
                            >
                                {/* Connector Dot */}
                                <div
                                    className={`absolute -left-[9px] top-6 w-5 h-5 rounded-full border-4 border-obsidian-950 z-10 transition-colors duration-300 ${isExpanded ? 'bg-gold shadow-[0_0_15px_rgba(212,175,55,0.5)]' : 'bg-slate-700 group-hover:bg-gold/50'}`}
                                />

                                <motion.div
                                    layout
                                    onClick={() => setExpandedId(isExpanded ? null : index)}
                                    className={`relative bg-white/[0.02] border ${isExpanded ? 'border-gold/30 bg-white/[0.04]' : 'border-white/5 hover:border-gold/20'} rounded-2xl p-6 cursor-pointer overflow-hidden transition-colors duration-300 group`}
                                >
                                    <motion.div layout="position" className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div>
                                            <h3 className={`text-xl font-bold font-outfit mb-1 transition-colors ${isExpanded ? 'text-gold' : 'text-white'}`}>
                                                {job.position}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-400 font-medium text-sm">
                                                <Building2 size={16} className="text-gold/70" />
                                                <span>{job.company}</span>
                                            </div>
                                        </div>
                                        <div className="text-left md:text-right">
                                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gold/80 border border-gold/10">
                                                <Calendar size={12} />
                                                {job.startDate} — {job.endDate}
                                            </div>
                                        </div>
                                    </motion.div>

                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                                animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                                className="border-t border-white/5 pt-4"
                                            >
                                                <p className="text-slate-300 leading-relaxed text-sm mb-4">
                                                    {job.description}
                                                </p>
                                                <div className="flex items-center gap-2 text-xs text-slate-500">
                                                    <MapPin size={12} />
                                                    {job.location}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {!isExpanded && (
                                        <div className="mt-4 text-xs text-slate-500 flex items-center gap-1 group-hover:text-gold/70 transition-colors">
                                            Read more <ArrowRight size={12} />
                                        </div>
                                    )}
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Timeline;

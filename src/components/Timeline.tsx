'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { useRecruiter } from '@/context/RecruiterContext';

const Timeline = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="experience" className={`section-container transition-colors duration-500 ${isRecruiterMode ? 'bg-white' : 'bg-obsidian-950'}`}>
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    History / Log
                </div>
            )}

            <div className={`mb-16 ${isRecruiterMode ? 'text-center' : ''}`}>
                <h2 className={`text-4xl md:text-5xl mb-4 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold italic' : ''}`}>
                    Professional <span className="text-signal-orange">Journey</span>
                </h2>
                <p className={`${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-500 font-mono text-sm uppercase tracking-widest'}`}>
                    {isRecruiterMode ? 'A Decade of Strategic AI Leadership & Product Delivery' : 'A Decade of Architectural Evolution'}
                </p>
            </div>

            <div className="space-y-12">
                {resumeData.experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative pl-8 border-l pb-12 last:pb-0 ${isRecruiterMode ? 'border-slate-200' : 'border-white/5'}`}
                    >
                        {/* Dot */}
                        <div className={`absolute left-0 top-0 w-2 h-2 ${isRecruiterMode ? 'bg-signal-orange ring-4 ring-white' : 'bg-signal-orange'} -translate-x-1/2 mt-2`} />

                        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                            <div>
                                <h3 className={`text-xl font-bold uppercase tracking-tight ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-white'}`}>{job.position}</h3>
                                <div className={`font-bold text-xs mt-1 uppercase tracking-widest ${isRecruiterMode ? 'text-signal-orange font-sans' : 'text-signal-orange font-mono'}`}>{job.company}</div>
                            </div>
                            <div className={`text-[10px] uppercase px-2 py-1 h-fit border ${isRecruiterMode ? 'text-slate-500 font-sans border-slate-200' : 'font-mono text-slate-600 border-white/5'}`}>
                                {job.startDate} - {job.endDate}
                            </div>
                        </div>

                        <p className={`text-sm leading-relaxed max-w-3xl mb-4 ${isRecruiterMode ? 'text-slate-600 font-sans' : 'text-slate-400'}`}>
                            {job.description}
                        </p>

                        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-700 uppercase">
                            {/* Location removed from data core */}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Timeline;

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GraduationCap, Calendar, MapPin } from 'lucide-react';
import resumeData from '@/data/resumeData.json';
import { useRecruiter } from '@/context/RecruiterContext';

const Education = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="education" className={`section-container transition-colors duration-500 ${isRecruiterMode ? 'bg-white' : 'bg-obsidian-950/50'}`}>
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    Academic / Theory
                </div>
            )}

            <div className={`mb-16 ${isRecruiterMode ? 'text-center' : ''}`}>
                <h2 className={`text-4xl md:text-5xl mb-4 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold italic' : ''}`}>
                    Academic <span className="text-signal-orange">Background</span>
                </h2>
                <p className={`${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-500 font-mono text-sm uppercase tracking-widest'}`}>
                    {isRecruiterMode ? 'Educational Foundation and Core Theoretical Expertise' : 'The Theoretical Foundation of Systems'}
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {resumeData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative group border p-8 transition-all ${isRecruiterMode
                            ? 'bg-white border-slate-200'
                            : 'tech-panel'
                            }`}
                    >
                        <div className={`flex justify-between items-start mb-6 ${isRecruiterMode ? 'font-sans' : 'font-mono'}`}>
                            <div className={`px-3 py-1 uppercase tracking-widest text-[10px] ${isRecruiterMode ? 'bg-signal-orange/10 text-signal-orange' : 'bg-signal-orange/10 text-signal-orange'}`}>
                                {edu.degree.split(' - ')[0]}
                            </div>
                            <span className={`text-[10px] uppercase ${isRecruiterMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                {edu.startDate} - {edu.endDate}
                            </span>
                        </div>

                        <h3 className={`text-xl font-bold mb-2 ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-white'}`}>{edu.degree}</h3>
                        <div className={`text-sm mb-6 uppercase tracking-wider transition-all ${isRecruiterMode ? 'text-slate-500 font-sans font-bold' : 'text-slate-400 font-mono grayscale group-hover:grayscale-0'}`}>
                            {edu.institution}
                        </div>

                        <p className={`text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-600 font-sans' : 'text-slate-500'}`}>
                            {edu.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;

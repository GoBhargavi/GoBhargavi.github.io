'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Trophy, Award } from 'lucide-react';
import resumeData from '@/data/resumeData.json';
import { useRecruiter } from '@/context/RecruiterContext';

const Certifications = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="certifications" className={`section-container transition-colors duration-500 ${isRecruiterMode ? 'bg-white' : 'bg-obsidian-950/50'}`}>
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    Accreditation / Honors
                </div>
            )}

            <div className={`mb-16 ${isRecruiterMode ? 'text-center' : ''}`}>
                <h2 className={`text-4xl md:text-5xl mb-4 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold italic' : ''}`}>
                    Certifications & <span className="text-signal-orange">Awards</span>
                </h2>
                <p className={`${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-500 font-mono text-sm uppercase tracking-widest'}`}>
                    {isRecruiterMode ? 'Industry Validations & Professional Recognition' : 'Industry Validation & Academic Recognition'}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resumeData.certifications.map((cert, index) => (
                    <motion.div
                        key={`cert-${index}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`relative group border p-8 transition-all ${isRecruiterMode
                                ? 'bg-white border-slate-200'
                                : 'tech-panel'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <ShieldCheck className="text-signal-orange w-6 h-6" />
                            <span className={`text-[10px] uppercase tracking-widest ${isRecruiterMode ? 'text-slate-400 font-sans' : 'text-slate-500 font-mono'}`}>
                                {cert.date}
                            </span>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-white'}`}>{cert.name}</h3>
                        <p className={`text-xs uppercase tracking-wider ${isRecruiterMode ? 'text-slate-500 font-sans font-bold' : 'text-slate-500 font-mono'}`}>{cert.description}</p>
                    </motion.div>
                ))}

                {resumeData.honorsAwards.map((award, index) => (
                    <motion.div
                        key={`award-${index}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (resumeData.certifications.length + index) * 0.1 }}
                        className={`relative group border p-8 transition-all ${isRecruiterMode
                                ? 'bg-white border-slate-200 shadow-sm'
                                : 'tech-panel'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <Trophy className="text-signal-orange w-6 h-6" />
                            <span className={`text-[10px] uppercase tracking-widest ${isRecruiterMode ? 'text-slate-400 font-sans' : 'text-slate-500 font-mono'}`}>
                                {award.date}
                            </span>
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-white'}`}>{award.name}</h3>
                        <p className={`text-xs uppercase tracking-wider ${isRecruiterMode ? 'text-slate-500 font-sans font-bold' : 'text-slate-500 font-mono'}`}>{award.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;

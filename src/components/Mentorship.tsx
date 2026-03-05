'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import resumeData from '@/data/resumeData.json';
import { useRecruiter } from '@/context/RecruiterContext';

const Mentorship = () => {
    const { isRecruiterMode } = useRecruiter();
    return (
        <section id="mentorship" className={`section-container transition-colors duration-500 ${isRecruiterMode ? 'bg-white' : 'bg-obsidian-950'}`}>
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    Community / Impact
                </div>
            )}

            <div className={`mb-16 ${isRecruiterMode ? 'text-center' : ''}`}>
                <h2 className={`text-4xl md:text-5xl mb-4 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold italic' : ''}`}>
                    Mentorship & <span className="text-signal-orange">Community</span>
                </h2>
                <p className={`${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-500 font-mono text-sm uppercase tracking-widest'}`}>
                    {isRecruiterMode ? 'Investing in the Next Generation of Engineering Talent' : 'Guiding the Next Generation of AI Engineers'}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {resumeData.mentorship.testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className={`relative flex flex-col h-full border p-8 transition-all ${isRecruiterMode
                                ? 'bg-white border-slate-200 shadow-sm'
                                : 'tech-panel'
                            }`}
                    >
                        <div className="mb-6">
                            <Quote className="w-8 h-8 text-signal-orange/10 mb-4" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={12}
                                        className={`${i < testimonial.rating ? 'text-signal-orange fill-signal-orange' : 'text-slate-800'}`}
                                    />
                                ))}
                            </div>
                            <p className={`text-sm leading-relaxed italic font-light ${isRecruiterMode ? 'text-slate-600 font-sans' : 'text-slate-400'}`}>
                                "{testimonial.text}"
                            </p>
                        </div>

                        <div className={`mt-auto flex items-center gap-3 pt-6 border-t font-mono ${isRecruiterMode ? 'border-slate-100' : 'border-white/5'}`}>
                            <div className="w-8 h-8 bg-signal-orange/10 flex items-center justify-center text-signal-orange font-bold text-[10px]">
                                {testimonial.name.charAt(0)}
                            </div>
                            <div>
                                <div className={`text-xs uppercase tracking-wider ${isRecruiterMode ? 'text-slate-900 font-sans font-bold' : 'text-white'}`}>{testimonial.name}</div>
                                <div className={`text-[10px] uppercase ${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-600'}`}>{testimonial.date}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
            >
                <a
                    href={resumeData.mentorship.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative px-10 py-4 bg-transparent border transition-all duration-300 ${isRecruiterMode
                            ? 'border-signal-orange text-signal-orange font-sans font-bold text-sm hover:bg-signal-orange hover:text-white'
                            : 'border-signal-orange/30 hover:border-signal-orange text-signal-orange font-mono text-xs uppercase tracking-[0.2em]'
                        }`}
                >
                    {isRecruiterMode ? 'View Mentor Profile' : 'Initialize Mentorship Protocol'}
                </a>
            </motion.div>
        </section>
    );
};

export default Mentorship;

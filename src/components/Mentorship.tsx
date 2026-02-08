'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ArrowRight, ExternalLink } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Mentorship = () => {
    return (
        <section id="mentorship" className="py-24 relative bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Mentorship & <span className="text-gradient">Community</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        Empowering the next generation of developers through guidance, code reviews, and career strategy.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {resumeData.mentorship.testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold/30 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={16}
                                            className={`${i < testimonial.rating ? 'text-gold fill-gold' : 'text-slate-700'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>
                            </div>

                            <div className="mt-auto flex items-center gap-3 pt-6 border-t border-white/5">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center text-gold font-bold text-xs">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-medium text-sm">{testimonial.name}</div>
                                    <div className="text-slate-500 text-xs font-mono">{testimonial.date}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <a
                        href={resumeData.mentorship.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group px-8 py-4 bg-obsidian-900 border border-gold/30 text-gold font-bold rounded-full transition-all duration-300 hover:bg-gold hover:text-obsidian-950 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2"
                    >
                        Book a Free Session on Topmate
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Mentorship;

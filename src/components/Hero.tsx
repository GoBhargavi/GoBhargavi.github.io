'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code, Star, Download, Newspaper } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 pb-12">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-obsidian-950" />

            {/* Animated Background Orbs - Refined */}
            <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 -right-1/4 w-[700px] h-[700px] bg-gold-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass-panel mb-10 group hover:border-violet-500/40 transition-all duration-500 cursor-default"
                    >
                        <div className="relative">
                            <Star className="text-gold-400 w-4 h-4 animate-pulse" />
                            <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-md animate-ping" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-platinum-200">
                            Senior Full Stack & Frontend Architect
                        </span>
                    </motion.div>

                    {/* Premium Name Display */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 1 }}
                        className="text-7xl md:text-9xl font-black font-outfit tracking-tighter mb-8"
                    >
                        <span className="block text-white mb-2">
                            {resumeData.personalInfo.name.split(' ')[0]}
                        </span>
                        <span className="block text-gradient">
                            {resumeData.personalInfo.name.split(' ').slice(1).join(' ')}
                        </span>
                    </motion.h1>

                    {/* Enhanced Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mb-10"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                            <Briefcase className="text-violet-400 w-5 h-5" />
                            <span className="text-lg font-medium text-platinum-200 font-outfit uppercase tracking-wider">
                                Specializing in Angular, React, and Healthcare Innovation.
                            </span>
                        </div>
                        <div className="mt-6 text-platinum-400 font-outfit text-sm uppercase tracking-widest font-semibold">
                            4 Public Repositories <span className="text-gold-400 mx-2">•</span> 2 Live Healthcare Apps <span className="text-gold-400 mx-2">•</span> 1 Master's Thesis
                        </div>
                    </motion.div>

                    {/* Premium Summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-2xl text-platinum-400 max-w-3xl mx-auto mb-14 leading-relaxed font-light"
                    >
                        Transforming complex healthcare and fintech requirements into
                        <span className="text-white font-medium"> scalable, user-centric</span> digital solutions.
                        Innovator behind the <span className="text-violet-400 font-medium">DiaFriend</span> app.
                        11+ years delivering for Fortune 500 clients.
                    </motion.p>

                    {/* Premium CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="flex flex-col sm:flex-row gap-8 items-center justify-center mb-16"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative px-10 py-4 bg-white text-obsidian-950 font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                        >
                            <span className="relative z-10">View Work</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="/featured"
                            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                            whileTap={{ scale: 0.98 }}
                            className="group px-10 py-4 glass-panel text-white font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 text-lg"
                        >
                            <Newspaper className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                            Read Research News
                        </motion.a>
                    </motion.div>

                    {/* Quick Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: Code, label: "Projects", value: "50+", color: "text-rose-400" },
                            { icon: Briefcase, label: "Years", value: "11+", color: "text-emerald-400" },
                            { icon: Star, label: "Clients", value: "10+", color: "text-gold-glow" },
                            { icon: Code, label: "Tech Stack", value: "20+", color: "text-platinum-300" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="text-center"
                            >
                                <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-platinum-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 15, 0] }}
                transition={{ delay: 2, duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-platinum-400 text-sm font-medium">Scroll</span>
                    <div className="w-[2px] h-20 bg-gradient-to-b from-transparent via-gold-glow to-transparent rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;

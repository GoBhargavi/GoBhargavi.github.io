'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Briefcase, Globe, Zap } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Hero = () => {
    const stats = [
        { icon: Zap, label: "Years", value: "11+", description: "Engineering" },
        { icon: Globe, label: "Domains", value: "3", description: "Healthcare • Fintech • Enterprise" },
        { icon: Layers, label: "Scale", value: "M+", description: "Users Served" },
        { icon: Briefcase, label: "Clients", value: "10+", description: "Fortune 500" }
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
            {/* Premium Background */}
            <div className="absolute inset-0 bg-obsidian-950" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />

            {/* Ambient Glow Effects */}
            <div className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] bg-teal-500/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-amber-500/6 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                >
                    {/* Authority Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-8"
                    >
                        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-soft" />
                        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-teal-400">
                            11+ Years Engineering Excellence
                        </span>
                    </motion.div>

                    {/* Name Display */}
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black font-outfit tracking-tighter mb-4"
                    >
                        <span className="block text-white">
                            {resumeData.personalInfo.name.split(' ')[0]}
                        </span>
                        <span className="block text-gradient">
                            {resumeData.personalInfo.name.split(' ').slice(1).join(' ')}
                        </span>
                    </motion.h1>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mb-8"
                    >
                        <h2 className="text-xl md:text-2xl font-outfit font-medium text-slate-300 tracking-wide">
                            Senior Full-Stack Engineer
                        </h2>
                        <div className="mt-3 flex items-center justify-center gap-2 text-slate-500 text-sm">
                            <span>{resumeData.personalInfo.location}</span>
                            <span className="text-teal-500">•</span>
                            <span>Open to Opportunities</span>
                        </div>
                    </motion.div>

                    {/* Summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Building <span className="text-white font-medium">production systems</span> and
                        <span className="text-white font-medium"> scalable architectures</span> across
                        healthcare, fintech, and enterprise domains. From micro-frontends at Fortune 500
                        to <span className="text-teal-400 font-medium">award-winning healthcare apps</span>.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group px-8 py-4 bg-white text-obsidian-950 font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
                        >
                            <span>View My Work</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>

                        <motion.a
                            href="/journey"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 hover:bg-white/10 hover:border-white/20 cursor-pointer"
                        >
                            <span>11-Year Journey</span>
                        </motion.a>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/20 transition-all duration-300 cursor-default"
                            >
                                <stat.icon className="w-5 h-5 text-teal-400 mb-3 mx-auto" />
                                <div className="text-3xl font-bold text-white font-outfit mb-1">{stat.value}</div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-slate-600 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-slate-600 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

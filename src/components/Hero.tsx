'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Code, Star, Download } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-900 via-obsidian-800 to-obsidian-900" />
            
            {/* Animated Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-rose-500/20 to-emerald-500/20 rounded-full blur-[150px] pointer-events-none animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-gold-glow/20 to-platinum-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse delay-1000" />
            
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center"
                >
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-rose-500/10 to-emerald-500/10 border border-rose-500/20 backdrop-blur-sm mb-8 group hover:border-gold-glow/40 transition-all duration-300"
                    >
                        <div className="relative">
                            <Star className="text-gold-glow w-5 h-5 animate-pulse" />
                            <div className="absolute inset-0 bg-gold-glow/20 rounded-full blur-md animate-ping" />
                        </div>
                        <span className="text-sm font-semibold bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent">
                            Senior Full-Stack Engineer | 11+ Years Experience
                        </span>
                    </motion.div>

                    {/* Premium Name Display */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-black font-outfit tracking-tight mb-6"
                    >
                        <span className="block bg-gradient-to-r from-white via-platinum-200 to-gold-glow bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            {resumeData.personalInfo.name.split(' ')[0]}
                        </span>
                        <span className="block bg-gradient-to-r from-gold-glow via-rose-400 to-emerald-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                            {resumeData.personalInfo.name.split(' ').slice(1).join(' ')}
                        </span>
                    </motion.h1>

                    {/* Enhanced Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-platinum-500/10 to-gold-glow/10 border border-platinum-500/20 backdrop-blur-sm">
                            <Briefcase className="text-gold-glow w-5 h-5" />
                            <span className="text-xl font-semibold text-platinum-200">
                                {resumeData.personalInfo.title}
                            </span>
                        </div>
                    </motion.div>

                    {/* Premium Summary */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-xl md:text-2xl text-platinum-300 max-w-4xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Building scalable AI-powered applications and enterprise-grade web solutions 
                        with <span className="text-gold-glow font-semibold">React</span>, 
                        <span className="text-rose-400 font-semibold"> TypeScript</span>, and 
                        <span className="text-emerald-400 font-semibold"> Next.js</span>
                    </motion.p>

                    {/* Premium CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-emerald-500 text-white font-bold rounded-full shadow-2xl hover:shadow-rose-500/25 transition-all duration-300 flex items-center gap-3 text-lg"
                        >
                            <span className="relative z-10">View My Work</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group px-8 py-4 bg-gradient-to-r from-platinum-500/20 to-gold-glow/20 border border-platinum-500/30 text-platinum-200 font-semibold rounded-full hover:border-gold-glow/60 hover:text-white transition-all duration-300 flex items-center gap-3 text-lg backdrop-blur-sm"
                        >
                            <Download className="w-5 h-5" />
                            Get In Touch
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

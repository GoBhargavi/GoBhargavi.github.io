'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen flex flex-col justify-center items-center overflow-hidden snap-start bg-obsidian-950">
            {/* Anudeep-style Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffd70005_1px,transparent_1px),linear-gradient(to_bottom,#ffd70005_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Centered Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">

                {/* Top Badge (Role/Status) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 overflow-hidden"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                        </span>
                        <span className="text-xs font-bold text-gold tracking-widest uppercase">Senior Full-Stack Engineer</span>
                    </div>
                </motion.div>

                {/* Main Typography - Massive Name */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[12vw] leading-none font-bold font-outfit text-white tracking-tighter mix-blend-overlay opacity-90 select-none"
                    style={{ textShadow: "0 0 40px rgba(212,175,55,0.1)" }}
                >
                    BHARGAVI
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500">GOVARDHANAM</span>
                </motion.h1>

                {/* Subheadline / Narrative Hook */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 text-lg md:text-xl text-slate-400 max-w-2xl font-light leading-relaxed"
                >
                    Architecting <span className="text-gold font-medium">scalable systems</span> that survive real-world scale.
                    <br className="hidden md:block" />
                    11+ years turning complex problems into <span className="text-white border-b border-gold/30">elegant solutions</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-5"
                >
                    <a
                        href="#featured-work"
                        className="group px-8 py-4 bg-gold text-obsidian-950 font-bold rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Explore Work
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
                <span className="text-[10px] uppercase tracking-widest text-gold/60">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;

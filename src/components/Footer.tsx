'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-20 border-t border-white/5">
            {/* Background */}
            <div className="absolute inset-0 bg-obsidian-950" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    {/* Left Column - Brand */}
                    <div>
                        <a href="/" className="inline-flex items-center gap-1 mb-4">
                            <span className="text-3xl font-black font-outfit text-white tracking-tighter">
                                BG
                            </span>
                            <span className="text-teal-400 text-3xl font-black">.</span>
                        </a>
                        <p className="text-slate-400 max-w-md leading-relaxed mb-6">
                            Senior Full-Stack Engineer with 11+ years building production systems
                            across healthcare, fintech, and enterprise domains.
                        </p>
                        <div className="flex items-center gap-2 text-sm">
                            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-soft" />
                            <span className="text-slate-500">Open to new opportunities</span>
                        </div>
                    </div>

                    {/* Right Column - Connect */}
                    <div className="md:text-right">
                        <h3 className="text-white font-semibold mb-4">Let's Connect</h3>
                        <p className="text-slate-500 text-sm mb-6">
                            Interested in working together? Reach out.
                        </p>
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-obsidian-950 font-semibold rounded-xl hover:bg-teal-400 transition-colors cursor-pointer"
                        >
                            <Mail size={18} />
                            Get in Touch
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-white/5 mb-8" />

                {/* Bottom Row */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <div className="text-slate-600 text-sm">
                        © {currentYear} Bhargavi Govardhanam. Crafted with precision.
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-white hover:border-white/10 transition-all cursor-pointer"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-white hover:border-white/10 transition-all cursor-pointer"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            className="p-3 bg-white/5 border border-white/5 rounded-xl text-slate-400 hover:text-white hover:border-white/10 transition-all cursor-pointer"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="flex items-center gap-6 text-sm">
                        <a href="/journey" className="text-slate-500 hover:text-white transition-colors">
                            Journey
                        </a>
                        <a href="/featured" className="text-slate-500 hover:text-white transition-colors">
                            Featured
                        </a>
                        <a
                            href="https://github.com/GoBhargavi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-slate-500 hover:text-white transition-colors"
                        >
                            GitHub <ArrowUpRight size={12} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

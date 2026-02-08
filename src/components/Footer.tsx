'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-16 border-t border-white/5 bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <a href="/" className="text-xl font-bold text-white tracking-tight mb-2 block">
                            Bhargavi<span className="text-gold"> Govardhanam</span>
                        </a>
                        <p className="text-slate-500 text-sm">
                            Building scalable systems with precision.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href={resumeData.personalInfo.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-gold transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-gold transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href={`mailto:${resumeData.personalInfo.email}`}
                            className="text-slate-400 hover:text-gold transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="h-px bg-white/5 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
                    <div>
                        © {currentYear} Bhargavi Govardhanam. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="/featured" className="hover:text-gold transition-colors">Mentions</a>
                        <a href="https://github.com/GoBhargavi" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-1">
                            GitHub <ArrowUpRight size={12} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

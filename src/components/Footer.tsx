'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="footer" className="relative py-24 bg-obsidian-950 border-t border-white/5 overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column (Span 5) */}
                    <div className="md:col-span-5">
                        <a href="/" className="inline-flex items-center gap-3 mb-6 group">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/20 flex items-center justify-center text-gold font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                                B
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight group-hover:text-gold transition-colors font-outfit">
                                Bhargavi Govardhanam
                            </span>
                        </a>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-md">
                            Senior Full-Stack Engineer specializing in scalable architecture, distributed systems, and modern frontend performance.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={resumeData.personalInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gold/10 hover:border-gold/30 hover:scale-110 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href={resumeData.personalInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gold/10 hover:border-gold/30 hover:scale-110 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gold/10 hover:border-gold/30 hover:scale-110 transition-all duration-300"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid (Span 7) */}
                    <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">

                        {/* Column 1 */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Navigation</h4>
                            <ul className="space-y-4">
                                <li><a href="#hero" className="text-slate-400 hover:text-gold transition-colors">Home</a></li>
                                <li><a href="#featured-work" className="text-slate-400 hover:text-gold transition-colors">Featured Work</a></li>
                                <li><a href="#experience" className="text-slate-400 hover:text-gold transition-colors">Experience</a></li>
                                <li><a href="#mentorship" className="text-slate-400 hover:text-gold transition-colors">Mentorship</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <h4 className="text-white font-bold mb-6">Expertise</h4>
                            <ul className="space-y-4">
                                <li><a href="#skills" className="text-slate-400 hover:text-gold transition-colors">Full-Stack Development</a></li>
                                <li><a href="#projects" className="text-slate-400 hover:text-gold transition-colors">System Architecture</a></li>
                                <li><a href="#featured-work" className="text-slate-400 hover:text-gold transition-colors">AI & RAG Solutions</a></li>
                                <li><a href="#experience" className="text-slate-400 hover:text-gold transition-colors">Technical Leadership</a></li>
                            </ul>
                        </div>

                        {/* Column 3 - CTA */}
                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-white font-bold mb-6">Let's Connect</h4>
                            <p className="text-slate-400 mb-6 leading-relaxed">
                                Open to discussing new opportunities, collaborations, or technical challenges.
                            </p>
                            <a
                                href={`mailto:${resumeData.personalInfo.email}`}
                                className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all"
                            >
                                Drop a message <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-mono">
                    <div className="flex items-center gap-2">
                        <span>© {currentYear} Bhargavi Govardhanam.</span>
                        <span className="hidden md:inline">•</span>
                        <span>Crafted with <Heart size={12} className="inline text-gold fill-gold" /> & Next.js</span>
                    </div>
                    <div className="flex gap-8">
                        <a href="https://github.com/GoBhargavi/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                            Source Code
                        </a>
                        <a href="/sitemap.xml" className="hover:text-gold transition-colors">
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

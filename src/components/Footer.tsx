'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';

const Footer = () => {
    return (
        <footer id="contact" className="relative py-32 transition-colors duration-500 overflow-hidden bg-obsidian-950 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-8">
                        <h2 className="text-4xl md:text-8xl font-bold uppercase tracking-tighter mb-12 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                            Ready to <span className="text-signal-orange italic">architect</span> <br />
                            the future?
                        </h2>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl md:text-4xl transition-all duration-300 break-all text-slate-400 font-mono hover:text-signal-orange hover:shadow-[0_0_15px_var(--signal-orange)] block max-w-max"
                        >
                            LET&apos;S CONNECT ON LINKEDIN
                        </a>
                    </div>

                    <div className="md:col-span-4 flex flex-col justify-end md:items-end gap-8">
                        <div className="flex gap-6">
                            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="transition-all uppercase text-sm tracking-widest text-slate-400 hover:text-signal-orange font-mono hover:drop-shadow-[0_0_10px_var(--signal-orange)]">Github</a>
                            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="transition-all uppercase text-sm tracking-widest text-slate-400 hover:text-signal-orange font-mono hover:drop-shadow-[0_0_10px_var(--signal-orange)]">Linkedin</a>
                        </div>
                    </div>
                </div>

                {/* SEO-optimized & Recruiter-ready text block */}
                <div className="pt-12 border-t border-white/10 flex flex-col items-center justify-center text-center gap-4">
                    <p className="text-slate-400 font-mono text-sm">
                        © 2026 Bhargavi Govardhanam · Senior AI Full-Stack Engineer · gobhargavi.com
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

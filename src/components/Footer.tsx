'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from 'lucide-react';
import { useRecruiter } from '@/context/RecruiterContext';

const Footer = () => {
    const { isRecruiterMode } = useRecruiter();
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className={`relative py-32 transition-colors duration-500 overflow-hidden ${isRecruiterMode ? 'bg-white border-t border-slate-100' : 'bg-obsidian-950 border-t border-white/5'}`}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-12 gap-12 mb-32">
                    <div className="md:col-span-8">
                        <h2 className={`text-4xl md:text-8xl font-bold uppercase tracking-tighter mb-12 ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-white'}`}>
                            {isRecruiterMode ? 'Let\'s build the' : 'Ready to'} <span className={`${isRecruiterMode ? 'text-signal-orange' : 'text-signal-orange italic'}`}>{isRecruiterMode ? 'future' : 'architect'}</span> <br />
                            {isRecruiterMode ? 'together.' : 'the future?'}
                        </h2>
                        <a
                            href={resumeData.personalInfo.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xl md:text-4xl transition-colors break-all ${isRecruiterMode ? 'text-slate-600 font-sans font-bold hover:text-signal-orange' : 'text-slate-500 font-mono hover:text-signal-orange'}`}
                        >
                            LET'S CONNECT ON LINKEDIN
                        </a>
                    </div>

                    <div className="md:col-span-4 flex flex-col justify-end md:items-end gap-8">
                        <div className="flex gap-6">
                            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className={`transition-all uppercase text-xs tracking-widest ${isRecruiterMode ? 'text-slate-400 hover:text-signal-orange font-sans font-bold' : 'text-slate-500 hover:text-white font-mono'}`}>Github</a>
                            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={`transition-all uppercase text-xs tracking-widest ${isRecruiterMode ? 'text-slate-400 hover:text-signal-orange font-sans font-bold' : 'text-slate-500 hover:text-white font-mono'}`}>Linkedin</a>
                        </div>
                        <div className={`text-right ${isRecruiterMode ? 'text-slate-400 font-sans text-[10px]' : 'text-slate-700 font-mono text-[10px] uppercase tracking-[0.3em]'}`}>
                            {!isRecruiterMode && <>System Status: Ready for Deployment <br /></>}
                            © {currentYear} BHARGAVI GOVARDHANAM
                        </div>
                    </div>
                </div>

                <div className={`pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] ${isRecruiterMode ? 'border-slate-100 text-slate-400 font-sans font-bold' : 'border-white/5 text-slate-800 font-mono'}`}>
                    <div>{isRecruiterMode ? 'Bhargavi Govardhanam // Portfolio 2024' : 'Based in Dallas, TX // Remote Capability: 100%'}</div>
                    <div>{isRecruiterMode ? 'Expertise in AI Architecture & Full Stack Systems' : 'Built with Next.js + Tailwind + Engineering Pride'}</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

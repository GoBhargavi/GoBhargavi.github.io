'use client';
import React from 'react';
import resumeData from '@/data/resumeData.json';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-16 relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-obsidian-950/50 backdrop-blur-sm -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="text-center md:text-left">
                        <a href="/" className="text-2xl font-bold font-outfit text-white mb-4 block">
                            <span className="text-violet-400">{'<'}</span>
                            Bhargavi
                            <span className="text-gold-400">{' />'}</span>
                        </a>
                        <p className="text-platinum-500 font-inter text-sm max-w-xs font-light">
                            Senior Full-Stack AI Engineer | Architecting Intelligent Solutions
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-6">
                            {[
                                { icon: Github, href: resumeData.personalInfo.github, color: 'hover:text-violet-400' },
                                { icon: Linkedin, href: resumeData.personalInfo.linkedin, color: 'hover:text-gold-400' },
                                { icon: Mail, href: `mailto:${resumeData.personalInfo.email}`, color: 'hover:text-white' }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-platinum-400 transition-all duration-300 transform hover:scale-110 hover:border-white/20 ${social.color}`}
                                >
                                    <social.icon size={22} />
                                </a>
                            ))}
                        </div>
                        <div className="text-platinum-600 text-[10px] font-bold uppercase tracking-[0.2em] font-outfit">
                            &copy; {new Date().getFullYear()} Bhargavi. Built with Precision.
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

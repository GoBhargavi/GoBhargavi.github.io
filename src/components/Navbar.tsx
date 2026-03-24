'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import { useRecruiter } from '@/context/RecruiterContext';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { isRecruiterMode, toggleRecruiterMode } = useRecruiter();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Projects', href: '#projects' },
        { name: 'Enterprise AI', href: '#enterprise-ai' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-obsidian-950/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="font-mono text-white font-bold tracking-tighter text-xl">
                    BG<span className="text-signal-orange">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-signal-orange transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-signal-orange transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 mr-2">
                        <span className={`hidden lg:inline font-mono text-[8px] uppercase tracking-[0.2em] transition-colors ${!isRecruiterMode ? 'text-signal-orange' : 'text-slate-400'}`}>
                            Architect
                        </span>
                        <button
                            onClick={toggleRecruiterMode}
                            className={`relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none ${isRecruiterMode ? 'bg-signal-orange' : 'bg-white/10'
                                }`}
                            title={isRecruiterMode ? "Switch to Architect Mode" : "Switch to Recruiter Mode"}
                        >
                            <motion.div
                                className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full shadow-sm"
                                animate={{ x: isRecruiterMode ? 20 : 0 }}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                        </button>
                        <span className={`hidden lg:inline font-mono text-[8px] uppercase tracking-[0.2em] transition-colors ${isRecruiterMode ? 'text-signal-orange' : 'text-slate-400'}`}>
                            Recruiter
                        </span>
                    </div>

                    <a
                        href={resumeData.personalInfo.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all ${isRecruiterMode
                            ? 'border-slate-300 text-slate-600 hover:border-signal-orange hover:text-signal-orange'
                            : 'border-white/10 text-white hover:border-signal-orange hover:text-signal-orange'
                            }`}
                    >
                        Connect
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

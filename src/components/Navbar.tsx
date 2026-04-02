'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#the-pitch' },
        { name: 'Expertise', href: '#expertise' },
        { name: 'Projects', href: '#projects' },
        { name: 'Enterprise AI', href: '#enterprise-ai' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-black/80 backdrop-blur-sm py-6 border-b border-transparent'
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

                <a
                    href={resumeData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.2em] px-4 py-2 border transition-all border-white/10 text-white hover:border-signal-orange hover:text-signal-orange"
                >
                    Connect
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

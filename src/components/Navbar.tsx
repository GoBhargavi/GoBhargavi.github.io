'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Journey', href: '/journey' },
        { name: 'Featured', href: '/featured' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'h-16 glass-panel border-b border-white/5 shadow-2xl'
                    : 'h-20 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
                    <a href="/" className="text-xl font-bold font-outfit text-foreground">
                        <span className="text-gold-glow">{'<'}</span>
                        Bhargavi
                        <span className="text-gold-shimmer">{' />'}</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-semibold text-platinum-400 hover:text-white transition-all duration-300 relative group font-outfit uppercase tracking-widest"
                            >
                                {link.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-gold-400 group-hover:w-full transition-all duration-500" />
                            </a>
                        ))}

                        <div className="h-4 w-px bg-white/10" />

                        <div className="flex gap-5">
                            <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-platinum-400 hover:text-violet-400 transition-all duration-300 transform hover:scale-110">
                                <Github size={20} />
                            </a>
                            <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-platinum-400 hover:text-gold-400 transition-all duration-300 transform hover:scale-110">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden pt-24 px-6"
                    >
                        <div className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold text-foreground/80 hover:text-foreground"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-8">
                                <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

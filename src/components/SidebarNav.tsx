'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navItems = [
    { name: 'Profile', href: '#hero' },
    { name: 'Work', href: '#featured-work' },
    { name: 'Journey', href: '#experience' },
    { name: 'Contact', href: '#footer' },
];

const SidebarNav = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6 hidden md:flex"
        >
            {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                    <a
                        key={item.name}
                        href={item.href}
                        className="group relative flex items-center justify-end"
                        aria-label={item.name}
                    >
                        {/* Tooltip */}
                        <span className={`absolute right-12 px-2 py-1 bg-obsidian-900 border border-white/10 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap ${isActive ? 'text-gold' : ''}`}>
                            {item.name}
                        </span>

                        {/* Icon/Dot */}
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-gold ring-4 ring-gold/20 scale-125' : 'bg-slate-600 group-hover:bg-slate-400 group-hover:scale-110'}`} />
                    </a>
                );
            })}
        </motion.div>
    );
};

export default SidebarNav;

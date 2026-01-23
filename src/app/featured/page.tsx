'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, Award, Mic } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredItems = [
    {
        title: "Bhargavi Govardhanam '23 launches diabetes management app",
        publisher: "UMass Dartmouth News",
        date: "2023",
        category: "University Feature",
        icon: Newspaper,
        summary: "Profiled for developing 'DiaFriend,' a Flutter-based tool helping Portuguese-speaking patients manage Type 2 Diabetes.",
        link: "https://www.massachusetts.edu/news/bhargavi-govardhanam-23-launches-diabetes-management-app-google-play-store"
    },
    {
        title: "Innovation at UMass: Designing Apps for Research",
        publisher: "Center for Innovation & Entrepreneurship",
        date: "2023",
        category: "Research",
        icon: Award,
        summary: "Recognized for technical contributions to nursing research and community health impact through accessible technology.",
        link: "https://www.umassd.edu/innovate/news/"
    }
];

export default function FeaturedPage() {
    return (
        <main className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_800px_at_50%_-20%,#7c3aed1a,transparent)]"></div>

            <Navbar />

            <section className="pt-32 pb-20 flex-grow px-6">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-20"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
                            <Newspaper className="text-violet-400" size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest text-platinum-400">In The News</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-outfit mb-6 tracking-tighter">
                            <span className="text-gradient">Featured Mentions</span>
                        </h1>
                        <p className="text-platinum-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Recognized by leading institutions and publications for contributions to Artificial Intelligence and Software Engineering.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="glass-card p-8 group flex flex-col h-full"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold-500/30 transition-colors">
                                        <item.icon className="text-gold-400" size={24} />
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-semibold text-platinum-500 uppercase tracking-wider border border-white/5">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 font-outfit group-hover:text-violet-300 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
                                    {item.publisher}
                                </div>
                                <p className="text-platinum-300 mb-8 leading-relaxed font-light flex-grow">
                                    {item.summary}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-gold-400 transition-colors group/link"
                                >
                                    <span>Read Article</span>
                                    <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

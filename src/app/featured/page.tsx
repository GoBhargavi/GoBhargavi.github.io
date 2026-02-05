'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Newspaper, Award, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const featuredItems = [
    {
        title: "Bhargavi Govardhanam '23 launches diabetes management app",
        publisher: "UMass Dartmouth News",
        date: "2023",
        category: "University Feature",
        icon: Newspaper,
        summary: "Profiled for developing 'DiaFriend,' a Flutter-based tool helping Portuguese-speaking patients manage Type 2 Diabetes. The app has since been downloaded by 10,000+ users on Google Play Store.",
        link: "https://www.massachusetts.edu/news/bhargavi-govardhanam-23-launches-diabetes-management-app-google-play-store"
    },
    {
        title: "Innovation at UMass: Designing Apps for Research",
        publisher: "Center for Innovation & Entrepreneurship",
        date: "2023",
        category: "Research",
        icon: Award,
        summary: "Recognized for technical contributions to nursing research and community health impact through accessible technology design and deployment.",
        link: "https://www.umassd.edu/innovate/news/"
    }
];

export default function FeaturedPage() {
    return (
        <main className="min-h-screen bg-obsidian-950 relative overflow-hidden flex flex-col">
            {/* Background */}
            <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px]" />
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_800px_at_50%_-20%,rgba(20,184,166,0.08),transparent)]" />

            <Navbar />

            <section className="pt-32 pb-20 flex-grow px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                            <Star className="text-amber-400" size={16} />
                            <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Recognition</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black font-outfit mb-6 tracking-tight text-white">
                            Featured Mentions
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Recognized by leading institutions for contributions to healthcare technology and community impact.
                        </p>
                    </motion.div>

                    {/* Featured Items */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {featuredItems.map((item, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + index * 0.1 }}
                                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                                        <item.icon className="text-amber-400" size={24} />
                                    </div>
                                    <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium text-slate-400 border border-white/5">
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 font-outfit group-hover:text-teal-400 transition-colors">
                                    {item.title}
                                </h3>
                                <div className="text-teal-400 text-sm font-semibold uppercase tracking-wider mb-4">
                                    {item.publisher}
                                </div>
                                <p className="text-slate-400 mb-6 leading-relaxed">
                                    {item.summary}
                                </p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-teal-400 transition-colors"
                                >
                                    <span>Read Article</span>
                                    <ExternalLink size={14} />
                                </a>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

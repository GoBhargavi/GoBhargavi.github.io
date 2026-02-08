'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Newspaper, ExternalLink, ArrowLeft } from 'lucide-react';

const FeaturedPage = () => {
    // Data can be moved to JSON later
    const mentions = [
        {
            title: "DiaFriend App Launch",
            source: "UMass Dartmouth News",
            date: "May 2023",
            description: "Featured for developing an innovative diabetes management application impacting the SouthCoast Portuguese community.",
            url: "https://www.umassd.edu/news/2023/diafriend-app.html", // Placeholder URL
            tags: ["Usage Impact", "Healthcare"]
        },
        {
            title: "Innovation in Nursing Research",
            source: "Center for Innovation",
            date: "April 2023",
            description: "Recognized for technical contributions to automated nursing research tools and data collection efficiency.",
            url: "#",
            tags: ["Research", "Automation"]
        }
    ];

    return (
        <main className="min-h-screen bg-obsidian-950 text-slate-300 selection:bg-neon-cyan/20 selection:text-neon-cyan">
            <Navbar />

            <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <a href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-neon-cyan mb-8 transition-colors">
                    <ArrowLeft size={16} />
                    Back to Portfolio
                </a>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-black font-outfit text-white mb-6">
                        Press & <span className="text-neon-cyan">Mentions</span>
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Features, interviews, and recognition from across the tech community.
                    </p>
                </motion.div>

                <div className="grid gap-6">
                    {mentions.map((item, idx) => (
                        <motion.article
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-neon-cyan/30 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-start justify-between">
                                <div>
                                    <div className="flex items-center gap-3 mb-3 text-sm">
                                        <span className="font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded">
                                            {item.source}
                                        </span>
                                        <span className="text-slate-500">•</span>
                                        <span className="text-slate-500">{item.date}</span>
                                    </div>

                                    <h2 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors mb-3">
                                        {item.title}
                                    </h2>

                                    <p className="text-slate-400 leading-relaxed mb-4 max-w-2xl">
                                        {item.description}
                                    </p>

                                    <div className="flex gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-xs text-slate-500 border border-white/5 px-2 py-1 rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {item.url && item.url !== "#" && (
                                    <a
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="self-start md:self-center p-3 rounded-full bg-white/5 hover:bg-neon-cyan hover:text-obsidian-950 transition-all"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FeaturedPage;

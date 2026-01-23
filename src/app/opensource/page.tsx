'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openSourceProjects = [
    {
        title: "DiaFriend Production Release",
        tags: ["Flutter", "Dart", "Google Play"],
        description: "A localized diabetes management tool for the SouthCoast Portuguese community.",
        link: "https://play.google.com/store/apps/details?id=com.umassd.diafriend" // Assuming this or placeholder
    },
    {
        title: "Predictive Visitor Management (Thesis)",
        tags: ["Python", "Flask", "Machine Learning"],
        description: "A microservices-based system using ARIMA and LSTM algorithms to predict tourist traffic.",
        link: "https://github.com/GoBhargavi" // Placeholder to general github until specific repo known
    },
    {
        title: "ReLeaf Substance Support",
        tags: ["HealthTech", "Research"],
        description: "A digital intervention tool for substance abuse disorder support.",
        link: "https://github.com/GoBhargavi" // Placeholder
    }
];

export default function OpenSourcePage() {
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
                            <Code className="text-violet-400" size={18} />
                            <span className="text-xs font-bold uppercase tracking-widest text-platinum-400">Open Source</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black font-outfit mb-6 tracking-tighter">
                            <span className="text-gradient">Public Repositories</span>
                        </h1>
                        <p className="text-platinum-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Contributing to the developer community with impactful tools and research-backed applications.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {openSourceProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-gray-100 group"
                            >
                                <div className="mb-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-violet-50 text-violet-600 rounded-full text-xs font-bold uppercase tracking-wider">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl font-bold text-obsidian-900 mb-3 font-outfit group-hover:text-violet-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed font-light mb-6 flex-grow">
                                        {project.description}
                                    </p>
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-obsidian-900 text-white rounded-xl font-bold hover:bg-violet-600 transition-colors w-fit group/btn"
                                >
                                    <Github size={18} />
                                    <span>View Code</span>
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

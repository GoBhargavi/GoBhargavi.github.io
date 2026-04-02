'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, ExternalLink, Folder } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const openSourceProjects = [
    {
        title: "DiaFriend - Diabetes Management",
        tags: ["Flutter", "Dart", "Firebase", "ML Kit"],
        description: "Award-winning diabetes management app for the SouthCoast Portuguese community. Featured in UMass Dartmouth News. 10,000+ downloads on Google Play Store.",
        link: "https://play.google.com/store/apps/details?id=com.umassd.diafriend",
        isLive: true
    },
    {
        title: "Predictive Visitor Management",
        tags: ["Python", "Flask", "TensorFlow", "ARIMA"],
        description: "Master's thesis project using ARIMA and LSTM algorithms to predict tourist traffic patterns. Full microservices architecture with ML pipeline.",
        link: "https://github.com/GoBhargavi",
        isLive: false
    },
    {
        title: "RAG Chatbot System",
        tags: ["LangChain", "OpenAI", "React", "Vector DB"],
        description: "Production-grade conversational AI with retrieval-augmented generation, context grounding, and feedback mechanisms.",
        link: "https://github.com/GoBhargavi",
        isLive: false
    },
    {
        title: "ReLeaf Substance Support",
        tags: ["React Native", "Node.js", "HealthTech"],
        description: "Digital intervention tool for substance abuse disorder support, developed in collaboration with healthcare researchers.",
        link: "https://github.com/GoBhargavi",
        isLive: false
    }
];

export default function OpenSourcePage() {
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-signal-orange/10 border border-signal-orange/20 mb-6">
                            <Code className="text-teal-400" size={16} />
                            <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">Open Source</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black font-mono mb-6 tracking-tight text-white">
                            Public Projects
                        </h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                            Contributing to the developer community with AI-powered tools, healthcare applications, and research-backed systems.
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {openSourceProjects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-none bg-white/[0.02] border border-white/5 hover:border-signal-orange/30 transition-all duration-300 flex flex-col"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="p-3 rounded-none bg-white/5">
                                        <Folder className="text-teal-400" size={20} />
                                    </div>
                                    {project.isLive && (
                                        <span className="px-3 py-1 bg-signal-orange/20 border border-signal-orange/30 text-signal-orange flex-none text-[10px] uppercase tracking-widest font-mono font-semibold rounded-none">
                                            Live
                                        </span>
                                    )}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-3 font-mono group-hover:text-signal-orange transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 bg-white/5 text-slate-400 rounded-none text-xs border border-white/5"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Link */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 text-white rounded-none font-medium hover:bg-white/10 transition-all w-fit cursor-pointer uppercase tracking-widest text-xs"
                                >
                                    {project.isLive ? (
                                        <>
                                            <ExternalLink size={16} />
                                            View Live
                                        </>
                                    ) : (
                                        <>
                                            <Github size={16} />
                                            View Code
                                        </>
                                    )}
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* GitHub CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-16"
                    >
                        <a
                            href="https://github.com/GoBhargavi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-signal-orange/10 border border-signal-orange/30 text-signal-orange font-mono uppercase tracking-[0.2em] font-semibold rounded-none hover:bg-signal-orange hover:text-obsidian-950 transition-all cursor-pointer"
                        >
                            <Github size={20} />
                            View All on GitHub
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

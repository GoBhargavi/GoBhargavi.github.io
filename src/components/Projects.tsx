'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useRecruiter } from '@/context/RecruiterContext';

const Projects = () => {
    const { isRecruiterMode } = useRecruiter();
    const projects = [
        {
            title: "DiaFriend-1.0",
            description: "Production Android application for diabetes management with 10,000+ downloads. Features blood glucose tracking and medication reminders.",
            technologies: ["Flutter", "Dart", "Firebase", "GCP"],
            impact: "10K+ DOWNLOADS",
            githubUrl: "https://github.com/GoBhargavi/DiaFriend-1.0",
            featured: true
        },
        {
            title: "Log Insights Platform",
            description: "AI-driven technical log analysis tool using RAG. Bridges raw system data with actionable engineering insights using LLMs.",
            technologies: ["Python", "RAG", "FastAPI", "OpenAI"],
            impact: "AI INFRASTRUCTURE",
            githubUrl: "https://github.com/GoBhargavi/log-insights-platform",
            featured: true
        },
        {
            title: "PVMA",
            description: "Predictive Visitor Management utilizes ARIMA and LSTM models to optimize facility traffic and planning.",
            technologies: ["Python", "TensorFlow", "Scikit-learn"],
            impact: "ML RESEARCH",
            githubUrl: "https://github.com/GoBhargavi/PVMA",
            featured: true
        }
    ];

    return (
        <section id="projects" className="section-container">
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    Deployments / R&D
                </div>
            )}

            <div className={`mb-16 ${isRecruiterMode ? 'text-center' : ''}`}>
                <h2 className={`text-4xl md:text-5xl mb-4 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold' : ''}`}>
                    {isRecruiterMode ? 'Featured Projects' : 'Featured Projects'}
                </h2>
                <p className={`${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-500 font-mono text-sm uppercase tracking-widest'}`}>
                    {isRecruiterMode ? 'Production Software & Machine Learning Prototypes' : 'Production Systems & Research Prototype'}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`group relative flex flex-col h-full border transition-all duration-500 p-8 ${isRecruiterMode
                                ? 'bg-white border-slate-200 hover:shadow-xl hover:border-signal-orange/50'
                                : 'bg-obsidian-900 border-white/5 hover:border-signal-orange/30'
                            }`}
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-[10px] font-mono text-signal-orange uppercase tracking-widest bg-signal-orange/5 px-2 py-1">
                                {project.impact}
                            </div>
                            <div className="flex gap-4">
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                                    <Github size={18} />
                                </a>
                                <ArrowUpRight size={18} className="text-slate-700 group-hover:text-signal-orange transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </div>

                        <h3 className={`text-2xl font-bold mb-4 transition-colors ${isRecruiterMode ? 'text-slate-900 font-sans' : 'text-white group-hover:text-signal-orange'}`}>
                            {project.title}
                        </h3>

                        <p className={`text-sm leading-relaxed mb-8 flex-grow ${isRecruiterMode ? 'text-slate-600 font-sans' : 'text-slate-400'}`}>
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, tIdx) => (
                                <span key={tIdx} className="text-[10px] font-mono text-slate-600 uppercase border border-white/5 px-2 py-1">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Hover Decorative Element */}
                        {!isRecruiterMode && (
                            <div className="absolute bottom-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="absolute bottom-2 right-2 w-4 h-[1px] bg-signal-orange" />
                                <div className="absolute bottom-2 right-2 w-[1px] h-4 bg-signal-orange" />
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

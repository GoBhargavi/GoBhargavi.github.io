'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "ReLeafApp",
            description: "Recovery support platform for substance abuse disorder, featuring peer support networks and crisis resource mapping.",
            technologies: ["Flutter", "Firebase", "Android", "Web"],
            impact: "UMass Research",
            githubUrl: "https://github.com/GoBhargavi/ReLeafApp",
            liveUrl: "",
            featured: true
        },
        {
            title: "PVMA",
            description: "Predictive Visitor Management using ARIMA and LSTM models to optimize facility traffic analytics and planning.",
            technologies: ["Python", "TensorFlow", "scikit-learn", "Flask"],
            impact: "Master's Thesis",
            githubUrl: "https://github.com/GoBhargavi/PVMA",
            liveUrl: "",
            featured: true
        },
        {
            title: "In-Progress: Log Platform",
            description: "Implementing localized RAG for technical log synthesis and root-cause analysis suggesting solutions via LLMs.",
            technologies: ["Python", "RAG", "Ollama", "React"],
            impact: "AI Infrastructure",
            githubUrl: "https://github.com/GoBhargavi/log-insights-platform",
            liveUrl: "",
            featured: true
        },
        {
            title: "Modern Task Manager",
            description: "A collaborative task management tool built with high-performance React patterns and real-time state sync.",
            technologies: ["Next.js", "TypeScript", "Tailwind", "Prisma"],
            impact: "Personal Utility",
            githubUrl: "https://github.com/GoBhargavi/task-management-app",
            liveUrl: "",
            featured: false
        },
        {
            title: "Fastify Event Service",
            description: "High-throughput event processing backend service designed for scalability and minimal latency.",
            technologies: ["Node.js", "Fastify", "Redis", "TypeScript"],
            impact: "Backend Pattern",
            githubUrl: "https://github.com/GoBhargavi/fastify-event-service",
            liveUrl: "",
            featured: false
        }
    ];

    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 relative bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Featured <span className="text-neon-cyan">Work</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg">
                        Highlights from my portfolio of production systems and applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-neon-cyan/50 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-neon-cyan/10 rounded-lg">
                                    <Briefcase className="w-6 h-6 text-neon-cyan" />
                                </div>
                                <div className="flex gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                        >
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-full transition-colors"
                                        >
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-2 py-1 bg-white/5 text-slate-400 text-xs font-mono rounded border border-white/5"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-neon-cyan/20 transition-all duration-300 hover:translate-y-[-2px]"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <h4 className="text-base font-semibold text-slate-200 group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h4>
                                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-neon-cyan transition-colors" />
                            </div>
                            <p className="text-slate-500 text-sm line-clamp-2">
                                {project.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

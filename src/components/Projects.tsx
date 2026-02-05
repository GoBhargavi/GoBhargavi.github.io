'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "DiaFriend Healthcare App",
            description: "Award-winning Flutter diabetes management tool serving the SouthCoast Portuguese community. Featured in UMass Dartmouth News for community health impact.",
            technologies: ["Flutter", "Dart", "Firebase", "ML Kit"],
            impact: "10,000+ downloads on Google Play",
            githubUrl: "",
            liveUrl: "https://play.google.com/store/apps/details?id=com.umassd.diafriend",
            featured: true
        },
        {
            title: "Micro-Frontend Architecture",
            description: "Architected Angular 17 micro-frontends for senior living healthcare platform. Enabled 6 independent teams to deploy autonomously while maintaining shared design system.",
            technologies: ["Angular 17", "Module Federation", "NgRx", "TypeScript"],
            impact: "40% bundle reduction",
            githubUrl: "",
            liveUrl: "",
            featured: true
        },
        {
            title: "Enterprise Chat System",
            description: "Production-grade conversational interface with vector search, context-aware responses, and real-time feedback mechanisms for enterprise support workflows.",
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            impact: "40% reduction in support tickets",
            githubUrl: "",
            liveUrl: "",
            featured: true
        },
        {
            title: "Cross-Border Payments Platform",
            description: "Secure fintech escrow and payment processing with multi-step transaction workflows, KYC/AML compliance, and real-time validation for international transactions.",
            technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
            impact: "$50M+ transaction volume",
            githubUrl: "",
            liveUrl: "",
            featured: false
        },
        {
            title: "University Library Portal",
            description: "Complete redesign of university library platform with modern React 18 architecture, GraphQL API integration, and accessibility-first approach.",
            technologies: ["React 18", "Next.js", "GraphQL", "Tailwind"],
            impact: "Live production system",
            githubUrl: "",
            liveUrl: "",
            featured: false
        },
        {
            title: "Predictive Analytics Research",
            description: "Master's research on visitor traffic prediction using statistical and machine learning algorithms. Built full-stack microservices for data pipeline and visualization.",
            technologies: ["Python", "Flask", "React", "TensorFlow"],
            impact: "Published research",
            githubUrl: "https://github.com/GoBhargavi",
            liveUrl: "",
            featured: false
        }
    ];

    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-obsidian-950" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.03),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                        <Briefcase className="text-amber-400" size={16} />
                        <span className="text-xs font-semibold uppercase tracking-widest text-amber-400">Engineering Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit mb-6 tracking-tight text-white">
                        Featured Work
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Production systems serving millions. From healthcare apps to enterprise platforms that make a real difference.
                    </p>
                </motion.div>

                {/* Featured Projects - Large Cards */}
                <div className="grid lg:grid-cols-3 gap-6 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all duration-300 cursor-pointer"
                        >
                            {/* Impact Badge */}
                            <div className="absolute -top-3 right-6 px-3 py-1 bg-teal-500/20 border border-teal-500/30 text-teal-400 text-xs font-semibold rounded-full">
                                {project.impact}
                            </div>

                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors font-outfit">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-white/5 text-slate-400 text-xs rounded-md border border-white/5"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="px-2 py-1 text-slate-500 text-xs">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-slate-300 rounded-lg hover:bg-white/10 transition-all text-sm font-medium"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 text-teal-400 rounded-lg hover:bg-teal-500/20 transition-all text-sm font-medium"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <ExternalLink size={14} />
                                            Live
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Other Projects - Compact Row */}
                <div className="grid md:grid-cols-3 gap-4">
                    {otherProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group p-5 rounded-xl bg-white/[0.01] border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-start justify-between mb-2">
                                <h4 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                                    {project.title}
                                </h4>
                                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
                            </div>
                            <p className="text-slate-500 text-sm mb-3 line-clamp-2">
                                {project.description}
                            </p>
                            <div className="text-xs text-teal-500 font-medium">
                                {project.impact}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a
                        href="https://github.com/GoBhargavi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                        <Github size={18} />
                        View More on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;

'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    // Since projects array is empty in resumeData, I'll create some placeholder projects
    // You can update these with your actual projects
    const projects = [
        {
            title: "GenAI RAG Chatbot",
            description: "Production-grade conversational AI system with vector search, context-aware responses, and grounded answer display. Led frontend development for real-time chat interface with feedback mechanisms.",
            technologies: ["React", "TypeScript", "Next.js", "OpenAI", "Vector Search"],
            githubUrl: "",
            liveUrl: "",
            featured: true
        },
        {
            title: "University Library Platform",
            description: "Live production website for University Library with responsive design, accessibility compliance, and modern user experience. Currently serving academic operations.",
            technologies: ["React", "Next.js", "Tailwind CSS", "Node.js"],
            githubUrl: "",
            liveUrl: "",
            featured: true
        },
        {
            title: "Cross-Border Payments System",
            description: "Secure escrow and payment processing platform with multi-step transaction workflows, KYC compliance, and real-time validation.",
            technologies: ["Angular", "TypeScript", "RxJS", "AWS"],
            githubUrl: "",
            liveUrl: "",
            featured: false
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
                        <Code2 className="text-violet-400" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-platinum-400">Portfolio</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8 tracking-tighter">
                        <span className="text-gradient">Featured Projects</span>
                    </h2>
                    <p className="text-xl text-platinum-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Engineering intelligent solutions that scale, from production AI systems to high-performance enterprise platforms.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-gold-glow/30 transition-all ${project.featured ? 'ring-2 ring-gold-glow/20' : ''
                                }`}
                        >
                            {project.featured && (
                                <div className="absolute -top-3 -right-3 px-3 py-1 bg-gold-glow text-black text-xs font-bold rounded-full">
                                    Featured
                                </div>
                            )}

                            <div className="flex flex-col h-full">
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-glow transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-2 py-1 bg-gold-glow/10 border border-gold-glow/20 text-gold-glow text-xs rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/10 text-white rounded-lg hover:bg-white/10 transition-all text-sm"
                                        >
                                            <Github size={16} />
                                            Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3 py-2 bg-gold-glow/10 border border-gold-glow/20 text-gold-glow rounded-lg hover:bg-gold-glow/20 transition-all text-sm"
                                        >
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gold-glow text-black font-semibold rounded-full hover:bg-gold-shimmer transition-all"
                    >
                        Interested in collaborating?
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Projects;

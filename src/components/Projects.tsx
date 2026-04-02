'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import resumeData from '@/data/resumeData.json';
import SectionHeader from '@/components/SectionHeader';

const Projects = () => {
    const projects = resumeData.projects;

    return (
        <section id="projects" className="relative px-6 md:px-12 py-24 border-b border-white/10 bg-obsidian-950">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <SectionHeader
                        label="Selected Deployments"
                        title="Technical"
                        accent="Case Studies"
                    />
                </div>

                <div className="space-y-px bg-white/5 border border-white/5">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group relative grid grid-cols-1 lg:grid-cols-12 items-stretch bg-obsidian-900 border-b border-white/5"
                        >
                            {/* Project Header / Index */}
                            <div className="lg:col-span-3 p-10 border-r border-white/5 flex flex-col justify-between items-start gap-8">
                                <span className="font-mono text-xs text-slate-700 tracking-[0.5em]">0{idx + 1}</span>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter mb-4 text-white">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-4">
                                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-signal-orange transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <ArrowUpRight size={18} className="text-slate-700" />
                                    </div>
                                </div>
                            </div>

                            {/* Problem / Solution Narrative */}
                            <div className="lg:col-span-6 p-10 border-r border-white/5 flex flex-col justify-center gap-10">
                                <div className="space-y-4">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-signal-orange">Problem</div>
                                    <p className="text-sm md:text-base font-light leading-relaxed text-slate-400">
                                        {project.problem}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-signal-orange">Solution</div>
                                    <p className="text-sm md:text-base font-light leading-relaxed text-slate-400">
                                        {project.solution}
                                    </p>
                                </div>
                            </div>

                            {/* Tech & Impact Summary */}
                            <div className="lg:col-span-3 p-10 flex flex-col justify-between items-start gap-12 bg-white/[0.02] overflow-hidden">
                                <div className="w-full">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-4">Tech Stack</div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, tIdx) => (
                                            <span key={tIdx} className="text-[10px] font-mono text-slate-500 uppercase border border-white/10 px-2 py-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-2">Outcome</div>
                                    <p className="text-xs uppercase tracking-widest text-white leading-relaxed">
                                        {project.impact}
                                    </p>
                                </div>
                            </div>

                            {/* Hover Reveal Pattern */}
                            <div className="absolute top-0 right-0 w-2 h-0 group-hover:h-full bg-signal-orange transition-all duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

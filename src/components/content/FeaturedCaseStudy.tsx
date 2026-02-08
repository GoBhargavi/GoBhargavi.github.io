'use client';
import React from 'react';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const cases = [
    {
        slug: 'log-insights',
        title: 'Log Insights Platform',
        description: 'AI-driven technical log analysis tool using RAG to bridge raw data with engineering insights.',
        stats: 'RAG Implementation',
        iconName: 'Cpu',
        color: 'text-gold',
        bg: 'bg-gold/10',
        border: 'border-gold/20'
    },
    {
        slug: 'diafriend',
        title: 'DiaFriend-1.0',
        description: 'Production-ready diabetes management app with 10k+ downloads on the Google Play Store.',
        stats: '10K+ Downloads',
        iconName: 'Smartphone',
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20'
    },
    {
        slug: 'micro-frontend',
        title: 'Micro-Frontend Architecture',
        description: 'Decoupling massive monolithic healthcare platforms for autonomous team deployments.',
        stats: '40% Bundle Reduction',
        iconName: 'Layers',
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/20'
    }
];

const FeaturedCaseStudy = () => {
    return (
        <section className="py-20 bg-obsidian-950">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-outfit text-white mb-4">
                        Engineered for <span className="text-gradient">Impact</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                        I don't just write code. I solve complex business problems with robust technical architecture.
                        Here are a few diverse challenges I've tackled.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {cases.map((project, index) => {
                        const Icon = LucideIcons[project.iconName as keyof typeof LucideIcons] as React.ElementType;

                        return (
                            <motion.div
                                key={project.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group h-full"
                            >
                                <Link href={`/work/${project.slug}`} className="block h-full">
                                    <div className={`h-full p-8 rounded-2xl bg-obsidian-900/50 backdrop-blur-sm border ${project.border} hover:border-opacity-50 transition-all duration-300 relative overflow-hidden flex flex-col`}>

                                        {/* Icon & Badge */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`p-3 rounded-xl ${project.bg} ${project.color} bg-opacity-20`}>
                                                <Icon size={24} />
                                            </div>
                                            <span className={`text-xs font-mono px-3 py-1 rounded-full border ${project.border} ${project.color} bg-obsidian-950/50`}>
                                                {project.stats}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors font-outfit">
                                            {project.title}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-4 transition-all mt-auto">
                                            Read Case Study
                                            <LucideIcons.ArrowRight size={16} className="text-neon-cyan" />
                                        </div>

                                        {/* Hover Gradient */}
                                        <div className={`absolute inset-0 ${project.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCaseStudy;

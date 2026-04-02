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
    },
    {
        slug: 'diafriend',
        title: 'DiaFriend-1.0',
        description: 'Production-ready diabetes management app with 10k+ downloads on the Google Play Store.',
        stats: '10K+ Downloads',
        iconName: 'Smartphone',
    },
    {
        slug: 'micro-frontend',
        title: 'Micro-Frontend Architecture',
        description: 'Decoupling massive monolithic healthcare platforms for autonomous team deployments.',
        stats: '40% Bundle Reduction',
        iconName: 'Layers',
    }
];

const FeaturedCaseStudy = () => {
    return (
        <section id="featured-work" className="py-24 bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-mono text-white mb-6">
                        Engineered for <span className="text-gradient">Impact</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg font-light leading-relaxed">
                        I don&apos;t just write code. I solve complex business problems with robust technical architecture.
                        Here are a few diverse challenges I&apos;ve tackled.
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
                                    <div className="h-full p-8 rounded-none bg-obsidian-900 border border-white/5 hover:border-signal-orange/50 transition-all duration-300 relative overflow-hidden flex flex-col group-hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">

                                        {/* Icon & Badge */}
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 rounded-none bg-white/5 group-hover:bg-signal-orange/20 transition-colors">
                                                <Icon size={24} className="text-gold" />
                                            </div>
                                            <span className="text-xs font-mono px-3 py-1 rounded-none border border-white/5 text-slate-400 bg-white/5 group-hover:text-signal-orange group-hover:border-signal-orange/20 transition-colors">
                                                {project.stats}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-signal-orange transition-colors font-mono">
                                            {project.title}
                                        </h3>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
                                            {project.description}
                                        </p>

                                        <div className="flex items-center gap-2 text-sm font-medium text-white group-hover:gap-4 transition-all mt-auto group-hover:text-gold">
                                            Read Case Study
                                            <LucideIcons.ArrowRight size={16} className="text-gold" />
                                        </div>

                                        {/* Hover Gradient */}
                                        <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

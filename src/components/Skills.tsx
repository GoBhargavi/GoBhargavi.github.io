'use client';
import React from 'react';
import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';
import { skillCategories } from '@/data/skills';
import { Layout, Server, Cloud, Sparkles } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Frontend Architecture': Layout,
    'Backend & APIs': Server,
    'Cloud & DevOps': Cloud,
};

const Skills = () => {
    const getIconComponent = (iconName: string) => {
        const Icon = (Si as any)[iconName];
        return Icon ? Icon : null;
    };

    return (
        <section id="skills" className="py-24 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-obsidian-900" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.03),transparent_50%)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                        <Sparkles className="text-teal-400" size={16} />
                        <span className="text-xs font-semibold uppercase tracking-widest text-teal-400">Technical Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black font-outfit mb-6 tracking-tight">
                        <span className="text-white">Full-Stack</span>
                        <span className="text-gradient"> Engineering</span>
                    </h2>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                        11 years of hands-on experience across the entire stack, from frontend architecture to cloud infrastructure.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Layout;
                        const isFeatured = category.featured;

                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1, duration: 0.5 }}
                                className={`relative p-8 rounded-2xl border transition-all duration-300 cursor-default ${isFeatured
                                        ? 'bg-teal-500/5 border-teal-500/20 hover:border-teal-500/40'
                                        : 'bg-white/[0.02] border-white/5 hover:border-white/10'
                                    }`}
                            >
                                {/* Featured Badge */}
                                {isFeatured && (
                                    <div className="absolute -top-3 right-6 px-3 py-1 bg-teal-500 text-obsidian-950 text-xs font-bold rounded-full uppercase tracking-wider">
                                        Core Focus
                                    </div>
                                )}

                                {/* Category Header */}
                                <div className="flex items-center gap-4 mb-8">
                                    <div className={`p-3 rounded-xl ${isFeatured ? 'bg-teal-500/20' : 'bg-white/5'}`}>
                                        <CategoryIcon className={isFeatured ? 'text-teal-400' : 'text-slate-400'} size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white font-outfit">{category.name}</h3>
                                        <p className="text-sm text-slate-500">{category.description}</p>
                                    </div>
                                </div>

                                {/* Skills Pills */}
                                <div className="grid grid-cols-2 gap-3">
                                    {category.skills.map((skill) => {
                                        const Icon = getIconComponent(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ scale: 1.02 }}
                                                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-200 cursor-pointer"
                                            >
                                                {Icon && (
                                                    <div
                                                        className="text-xl opacity-70 group-hover:opacity-100 transition-opacity"
                                                        style={{ color: skill.color }}
                                                    >
                                                        <Icon />
                                                    </div>
                                                )}
                                                <span className="text-sm text-slate-300 group-hover:text-white transition-colors font-medium">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Additional Skills Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <p className="text-slate-500 text-sm">
                        Plus expertise in: <span className="text-slate-400">Cypress, Jest, Playwright, CI/CD, Agile, System Design</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;

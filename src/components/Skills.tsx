'use client';
import React from 'react';
import { motion } from 'framer-motion';
import * as Si from 'react-icons/si';
import { skillCategories } from '@/data/skills';
import { Code2, Layout, Cloud, Container } from 'lucide-react';

const categoryIcons: Record<string, React.ElementType> = {
    'Backend & AI/ML': Code2,
    'Frontend': Layout,
    'Cloud Platforms': Cloud,
    'DevOps & Deployment': Container,
};

const Skills = () => {
    const getIconComponent = (iconName: string) => {
        const Icon = (Si as any)[iconName];
        return Icon ? Icon : null;
    };

    return (
        <section id="skills" className="py-24 relative">
            <div className="absolute inset-0 bg-obsidian-900" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8">
                        <Code2 className="text-gold-400" size={18} />
                        <span className="text-xs font-bold uppercase tracking-widest text-platinum-400">Expertise</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8 tracking-tighter">
                        <span className="text-gradient">AI Engineering Stack</span>
                    </h2>
                    <p className="text-xl text-platinum-400 max-w-2xl mx-auto font-light leading-relaxed">
                        Cutting-edge AI technologies and full-stack expertise for building intelligent systems.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => {
                        const CategoryIcon = categoryIcons[category.name] || Code2;
                        return (
                            <motion.div
                                key={category.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: catIndex * 0.1, duration: 0.8 }}
                                className="glass-card p-10 group"
                            >
                                <div className="flex items-center gap-5 mb-10">
                                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold-500/50 transition-colors duration-500">
                                        <CategoryIcon className="text-gold-400" size={32} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white font-outfit mb-1">{category.name}</h3>
                                        <p className="text-sm text-platinum-500 font-inter">{category.description}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {category.skills.map((skill, index) => {
                                        const Icon = getIconComponent(skill.icon);
                                        return (
                                            <motion.div
                                                key={skill.name}
                                                whileHover={{ y: -5, scale: 1.02 }}
                                                className="group relative p-4 bg-white/5 border border-white/5 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:bg-white/10 hover:border-white/10"
                                            >
                                                <div
                                                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                                                    style={{ backgroundColor: skill.color }}
                                                />
                                                {Icon && (
                                                    <div className="text-3xl filter transition-all duration-300">
                                                        <Icon style={{ color: skill.color }} />
                                                    </div>
                                                )}
                                                <span className="text-[10px] font-bold text-platinum-400 group-hover:text-white transition-colors text-center uppercase tracking-widest">
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
            </div>
        </section>
    );
};

export default Skills;

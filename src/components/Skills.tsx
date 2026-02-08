'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Cloud, Container, Database, Terminal, Smartphone, Globe, Code2 } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            category: "Frontend Architecture",
            description: "Building responsive, accessible interfaces",
            icon: Layout,
            skills: [
                { name: "React / Next.js", desc: "SSR, Server Components" },
                { name: "Angular", desc: "Enterprise Applications" },
                { name: "TypeScript", desc: "Type-safe Development" },
                { name: "Tailwind CSS", desc: "Modern Styling" }
            ]
        },
        {
            category: "Backend Systems",
            description: "Scalable APIs & logic",
            icon: Server,
            skills: [
                { name: "Node.js", desc: "High-concurrency APIs" },
                { name: "Python / FastAPI", desc: "Data processing & services" },
                { name: "PostgreSQL", desc: "Relational Data Modeling" },
                { name: "GraphQL", desc: "Efficient Data Fetching" }
            ]
        },
        {
            category: "Cloud & DevOps",
            description: "Infrastructure as Code",
            icon: Cloud,
            skills: [
                { name: "AWS", desc: "Cloud Architecture" },
                { name: "Docker / K8s", desc: "Container Orchestration" },
                { name: "CI/CD", desc: "Automated Pipelines" },
                { name: "Terraform", desc: "Infrastructure Provisioning" }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 relative bg-obsidian-950">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit text-white mb-6">
                        Technical <span className="text-gradient">Arsenal</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
                        A comprehensive toolkit for building modern, scalable web applications from the metal up.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-8 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-gold/50 transition-all duration-300"
                        >
                            {/* Hover Glow */}
                            <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                            <div className="relative z-10">
                                <div className="p-3 bg-gold/10 w-fit rounded-xl mb-6 group-hover:bg-gold/20 transition-colors">
                                    <group.icon className="w-8 h-8 text-gold" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{group.category}</h3>
                                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{group.description}</p>

                                <div className="space-y-4">
                                    {group.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="flex items-start gap-3">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold/50" />
                                            <div>
                                                <div className="text-slate-200 font-medium">{skill.name}</div>
                                                <div className="text-xs text-slate-500 font-mono">{skill.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

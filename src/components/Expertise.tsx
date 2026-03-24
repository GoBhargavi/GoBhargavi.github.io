'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';
import { Cpu, Database, Layout, Cloud, Layers } from 'lucide-react'; 

const Expertise = () => {
    const { isRecruiterMode } = useRecruiter();
    
    const expertiseGroups = [
        {
            title: "AI Systems",
            icon: <Cpu className="text-signal-orange" size={20} />,
            items: ["RAG Pipelines", "Multi-Agent Workflows", "LangChain / LangGraph", "LLM Orchestration", "Vector Search"]
        },
        {
            title: "Backend & Data",
            icon: <Database className="text-signal-orange" size={20} />,
            items: ["FastAPI", "Python", "PostgreSQL", "MongoDB", "Redis", "Distributed Systems"]
        },
        {
            title: "Frontend Systems",
            icon: <Layout className="text-signal-orange" size={20} />,
            items: ["React 18", "Next.js", "TypeScript", "State Management", "Performance Optimization"]
        },
        {
            title: "Cloud & Infra",
            icon: <Cloud className="text-signal-orange" size={20} />,
            items: ["Azure (AKS)", "AWS", "Docker", "Kubernetes", "CI/CD Pipelines"]
        },
        {
            title: "System Design",
            icon: <Layers className="text-signal-orange" size={20} />,
            items: ["API Design", "Scalability", "RBAC / JWT", "HIPAA Awareness", "Product Delivery"]
        }
    ];

    return (
        <section id="expertise" className={`relative px-6 md:px-12 py-24 border-b border-white/10 ${isRecruiterMode ? 'bg-white border-slate-200' : 'bg-obsidian-950'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <div className="font-mono text-xs text-signal-orange uppercase tracking-[0.4em] mb-4">Core Capabilities</div>
                        <h2 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                            Technical <span className="text-signal-orange">Depth</span>
                        </h2>
                    </div>
                    <p className={`max-w-sm font-mono text-[10px] md:text-xs uppercase tracking-widest text-slate-500 leading-relaxed`}>
                        Operating at the intersection of production engineering and generative intelligence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 overflow-hidden">
                    {expertiseGroups.map((group, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-10 ${isRecruiterMode ? 'bg-slate-50 border border-slate-100' : 'bg-obsidian-900'} flex flex-col h-full`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                {group.icon}
                                <h3 className={`font-mono text-xs font-bold uppercase tracking-[0.3em] ${isRecruiterMode ? 'text-slate-900' : 'text-slate-500'}`}>
                                    {group.title}
                                </h3>
                            </div>
                            <ul className="space-y-4 flex-grow">
                                {group.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-3">
                                        <div className="mt-1.5 w-1 h-1 bg-signal-orange" />
                                        <span className={`text-base font-light ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;

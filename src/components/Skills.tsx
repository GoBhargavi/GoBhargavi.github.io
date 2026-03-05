'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';

const Skills = () => {
    const { isRecruiterMode } = useRecruiter();
    const skillGroups = [
        {
            category: "AI / LLM",
            skills: ["LangChain", "LangGraph", "RAG Pipelines", "Agentic Workflows", "Prompt Engineering", "Azure AI Search", "Pinecone", "FAISS", "OpenAI Embeddings", "LLM Evaluation"]
        },
        {
            category: "Full Stack",
            skills: ["React 18", "FastAPI", "Python", "TypeScript", "Next.js", "Node.js", "GraphQL", "WebSockets"]
        },
        {
            category: "Cloud / Infra",
            skills: ["Azure (AKS)", "AWS (S3)", "Docker", "Kubernetes", "GitHub Actions", "CI/CD"]
        },
        {
            category: "Data",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Azure Blob Storage"]
        },
        {
            category: "Auth / Security",
            skills: ["OAuth2", "JWT", "RBAC", "HIPAA Compliance"]
        }
    ];

    return (
        <section id="skills" className={`section-container transition-colors duration-500 ${isRecruiterMode ? 'bg-white' : 'bg-obsidian-950/50'}`}>
            {!isRecruiterMode && (
                <div className="vertical-label font-mono text-[10px] text-slate-700 uppercase tracking-[0.5em]">
                    Capabilities / Stack
                </div>
            )}

            <div className={`mb-16 ${isRecruiterMode ? 'text-center' : ''}`}>
                <h2 className={`text-4xl md:text-5xl mb-4 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold' : ''}`}>
                    Core <span className="text-signal-orange">Skills</span>
                </h2>
                <p className={`${isRecruiterMode ? 'text-slate-500 font-sans' : 'text-slate-500 font-mono text-sm uppercase tracking-widest'}`}>
                    {isRecruiterMode ? 'Key Technical Proficiencies & Specialized Domains' : 'Technological Arsenal & Architectural Focus'}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {skillGroups.map((group, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="space-y-6"
                    >
                        <h3 className={`text-xs uppercase tracking-[0.3em] border-b pb-2 ${isRecruiterMode ? 'text-slate-900 font-sans font-bold border-slate-200' : 'font-mono text-slate-500 border-white/5'}`}>
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="signal-chip">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

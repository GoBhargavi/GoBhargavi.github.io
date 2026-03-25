'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRecruiter } from '@/context/RecruiterContext';
import { Bot, ShieldCheck, Zap } from 'lucide-react';

const EnterpriseWork = () => {
    const { isRecruiterMode } = useRecruiter();
    
    const enterpriseProjects = [
        {
            title: "PVMA (ARIMA, LSTM)",
            context: "Automated forecasting pipelines leveraging deep learning and statistical models to predict facility traffic and prevent operational bottlenecks in real-time.",
            architecture: "Python, TensorFlow, scikit-learn",
            aiComponents: "ARIMA for baseline trends, LSTM for complex pattern recognition.",
            impact: "Optimized facility staffing and large-scale operations through predictive decision support."
        },
        {
            title: "Agentic RAG Lending Platform",
            context: "Driving autonomous financial document analysis and data structuring within distributed microservice architectures.",
            architecture: "React 18, Python FastAPI Microservices, Azure Kubernetes Service (AKS)",
            aiComponents: "Multi-agent orchestration (LangChain / LangGraph), Vector Search.",
            impact: "Enabled autonomous end-to-end financial data extraction and deterministic decision support."
        },
        {
            title: "Healthcare GenAI Chatbot",
            context: "Deterministic RAG pipeline enabling natural language discovery over sensitive resident care plans.",
            architecture: "React 18, HIPAA-compliant boundaries, Strict Guardrails",
            aiComponents: "Semantic search, LLM-based narrative generation, Medical entity extraction.",
            impact: "Demonstrates a core foundation in ML systems scaled into LLM-based architectures."
        }
    ];

    return (
        <section id="enterprise-ai" className={`relative px-6 md:px-12 py-24 border-b border-white/10 ${isRecruiterMode ? 'bg-slate-50 text-slate-900 border-slate-200' : 'bg-obsidian-950 text-slate-300'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <div className="font-mono text-xs text-signal-orange uppercase tracking-[0.4em] mb-4">Intelligent Architectures</div>
                    <h2 className={`text-4xl md:text-6xl font-bold uppercase tracking-tight ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                        AI <span className="text-signal-orange">Systems</span>
                    </h2>
                </div>

                <div className="space-y-32">
                    {enterpriseProjects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                        >
                            <div className="lg:col-span-4">
                                <h3 className={`text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4 ${isRecruiterMode ? 'text-slate-900' : 'text-white'}`}>
                                    {project.title}
                                </h3>
                                <p className="font-mono text-xs uppercase text-slate-500 tracking-widest leading-loose">
                                    {project.context}
                                </p>
                            </div>
                            
                            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className={`p-8 border border-white/5 ${isRecruiterMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-obsidian-900'}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Bot size={18} className="text-signal-orange" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">AI Architecture</span>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                                        {project.aiComponents}
                                    </p>
                                </div>

                                <div className={`p-8 border border-white/5 ${isRecruiterMode ? 'bg-white border-slate-200 shadow-sm' : 'bg-obsidian-900'}`}>
                                    <div className="flex items-center gap-3 mb-6">
                                        <Zap size={18} className="text-signal-orange" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">Infrastructure</span>
                                    </div>
                                    <p className={`text-sm leading-relaxed ${isRecruiterMode ? 'text-slate-700' : 'text-slate-400'}`}>
                                        {project.architecture}
                                    </p>
                                </div>

                                <div className={`md:col-span-2 p-8 border border-signal-orange/20 ${isRecruiterMode ? 'bg-orange-50/50' : 'bg-signal-orange/5'}`}>
                                    <div className="flex items-center gap-3 mb-4">
                                        <ShieldCheck size={18} className="text-signal-orange" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-signal-orange">Production Impact</span>
                                    </div>
                                    <p className={`text-base md:text-lg font-light ${isRecruiterMode ? 'text-slate-800' : 'text-white'}`}>
                                        {project.impact}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EnterpriseWork;

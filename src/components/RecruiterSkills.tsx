'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'AI & Intelligent Systems',
        skills: ['Generative AI', 'LLM Integration', 'RAG Pipelines', 'Prompt Engineering', 'Conversational AI', 'MLOps', 'Model Deployment', 'AI Automation']
    },
    {
        title: 'Backend & APIs',
        skills: ['Python', 'Node.js', 'FastAPI', 'Django', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
        title: 'Frontend & UX',
        skills: ['React', 'TypeScript', 'Angular', 'Next.js', 'Tailwind CSS', 'HTML5/CSS3', 'Ionic']
    },
    {
        title: 'Cloud & DevOps',
        skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
    },
    {
        title: 'Data & Storage',
        skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Vector DBs', 'Elasticsearch']
    },
    {
        title: 'Leadership & Delivery',
        skills: ['System Design', 'Technical Architecture', 'Agile/Scrum', 'Team Mentoring', 'Product Ownership']
    }
];

const RecruiterSkills = () => {
    return (
        <section className="section-container" aria-label="Core Capabilities">
            <div className="vertical-label">CORE CAPABILITIES</div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-12"
            >
                Technical Coverage
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, idx) => (
                    <motion.article
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="tech-panel"
                    >
                        <h3 className="text-sm font-mono text-signal-orange mb-4 border-b border-white/5 pb-2">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="signal-chip">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default RecruiterSkills;

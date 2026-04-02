'use client';
import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    {
        num: '01',
        title: 'SHE BUILDS WHAT OTHERS ONLY PROTOTYPE',
        desc: 'Most "AI engineers" stop at Jupyter notebooks. Bhargavi delivers production-grade AI applications — full architectures with robust backends, intelligent frontends, and deployment pipelines that scale. She has shipped AI-powered digital tools in pharma-tech that help teams make faster, smarter decisions. Not demo-ware — real products with real users.'
    },
    {
        num: '02',
        title: 'RARE FULL-STACK + AI DUAL FLUENCY',
        desc: 'The market is flooded with frontend devs who dabble in AI, or ML engineers who can\'t build a proper UI. Bhargavi is the unicorn: deep expertise across the entire stack plus genuine AI/ML architecture skills. She designs systems where the AI isn\'t bolted on — it\'s woven into the product DNA.'
    },
    {
        num: '03',
        title: 'ENTERPRISE-PROVEN, NOT JUST STARTUP-FAST',
        desc: 'She has delivered at scale across multiple industries — intelligent pharma platforms at Access Infinity, enterprise apps at Swayam Group, and full digital products in travel. She understands compliance, data governance, and the messy reality of enterprise software.'
    },
    {
        num: '04',
        title: 'SHE SHIPS — FAST AND CLEAN',
        desc: 'MCA in Computer Science. Progressive roles from developer → senior engineer → architect. A track record of taking ambiguous requirements and delivering polished, maintainable systems that teams can actually build on.'
    }
];

const RecruiterWhyHire = () => {
    return (
        <section className="section-container" aria-label="Why Reach Out Today">
            <div className="vertical-label">WHY REACH OUT TODAY</div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-12"
            >
                Four reasons recruiters don't wait
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reasons.map((reason, idx) => (
                    <motion.article
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="tech-panel group flex gap-6"
                    >
                        <div className="text-4xl font-mono text-white/10 group-hover:text-signal-orange/30 transition-colors">
                            {reason.num}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-signal-orange transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {reason.desc}
                            </p>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default RecruiterWhyHire;

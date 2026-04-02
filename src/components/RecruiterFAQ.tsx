'use client';
import React from 'react';
import { motion } from 'framer-motion';

const faqs = [
    {
        q: "We need someone who can build AI features into our existing product.",
        a: "She has done exactly this — integrating AI capabilities into established enterprise platforms, not just building greenfield demos."
    },
    {
        q: "We're drowning in ML prototypes that never reach production.",
        a: "Her superpower is the last mile: taking models from POC to production with proper error handling, monitoring, scaling, and UX."
    },
    {
        q: "We need one person who can do the work of three.",
        a: "Frontend + Backend + AI architecture. One engineer. One codebase owner. One person who understands the entire picture."
    },
    {
        q: "Our AI team and product team don't speak the same language.",
        a: "She is the translator — fluent in both ML concepts and product engineering, with the communication skills to align stakeholders."
    }
];

const RecruiterFAQ = () => {
    return (
        <section className="section-container" aria-label="What Hiring Managers Say">
            <div className="vertical-label">WHAT HIRING MANAGERS SAY</div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-12"
            >
                Overcoming Common Hesitations
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {faqs.map((faq, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="objection tech-panel flex flex-col gap-4"
                    >
                        <div className="question">
                            <span className="text-signal-orange font-bold font-mono text-xl mr-2">Q:</span>
                            <span className="text-white text-lg font-medium tracking-wide">"{faq.q}"</span>
                        </div>
                        <div className="answer mt-2 pl-6 border-l-2 border-white/10">
                            <p className="text-slate-300 leading-relaxed">
                                <span className="text-signal-orange font-bold mr-2">→</span>
                                {faq.a}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default RecruiterFAQ;

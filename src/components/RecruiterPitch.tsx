'use client';
import React from 'react';
import { motion } from 'framer-motion';

const RecruiterPitch = () => {
    return (
        <section id="the-pitch" className="section-container" aria-label="The 30-Second Pitch">
            <div className="vertical-label">THE 30-SECOND PITCH</div>
            
            <div className="max-w-4xl">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-8"
                >
                    The AI full-stack engineer your team is missing
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="space-y-8"
                >
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                        She bridges the gap that most teams struggle with — turning AI research into shipped, scalable, revenue-generating software. She has built intelligent platforms across pharma-tech, enterprise SaaS, and travel — bringing full-stack engineering rigor to every layer, from LLM integration and model deployment to pixel-perfect frontends and bulletproof APIs.
                    </p>

                    <div className="p-6 border-l-4 border-signal-orange bg-signal-orange/5 backdrop-blur-sm rounded-r-xl">
                        <p className="text-white font-semibold text-lg">
                            If your team needs someone who can own the entire AI product stack — from prompt engineering and RAG pipelines to React dashboards and cloud infrastructure — stop scrolling. <span className="text-signal-orange">This is who you hire.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RecruiterPitch;

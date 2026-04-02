'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import resumeData from '@/data/resumeData.json';

const RecruiterCTA = () => {
    const email = resumeData.personalInfo.email || 'contact@gobhargavi.com';

    return (
        <section className="section-container text-center py-32" aria-label="Call to Action">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto tech-panel relative overflow-hidden"
            >
                {/* Decorative glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-signal-orange/10 blur-[100px] pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-6 p-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Ready to hire your AI <span className="text-signal-orange">full-stack unicorn?</span>
                    </h2>
                    
                    <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
                        Don't send a generic InMail. Reference a project or mention the AI challenge your team is solving — she responds to recruiters who've done their homework.
                    </p>

                    <a 
                        href={`mailto:${email}`}
                        className="mt-6 inline-flex items-center gap-3 px-8 py-4 bg-white text-obsidian-950 hover:bg-signal-orange hover:shadow-[0_0_30px_rgba(0,240,255,0.4)] transition-all duration-300 rounded-none font-bold uppercase tracking-widest"
                    >
                        <Mail size={20} />
                        Get in Touch →
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default RecruiterCTA;

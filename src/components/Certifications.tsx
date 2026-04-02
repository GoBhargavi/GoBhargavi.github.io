'use client';
import React from 'react';
import { motion } from 'framer-motion';
import resumeData from '@/data/resumeData.json';
import SectionHeader from '@/components/SectionHeader';

const Certifications = () => {
    return (
        <section id="certifications" className="relative px-6 md:px-12 py-24 border-b border-white/10 bg-obsidian-900 text-slate-300">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="Accreditation"
                    title="Certifications"
                    accent=""
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resumeData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/5 bg-obsidian-950"
                        >
                            <div className="font-mono text-[10px] uppercase tracking-widest text-signal-orange mb-4">{cert.date}</div>
                            <h3 className="text-lg font-bold uppercase tracking-tight mb-2 text-white">
                                {cert.name}
                            </h3>
                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                {cert.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;

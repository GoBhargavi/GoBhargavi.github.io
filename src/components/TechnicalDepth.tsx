'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Network, Blocks, Activity } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

const TechnicalDepth = () => {

    return (
        <section id="technical-depth" className="relative px-6 md:px-12 py-24 border-b border-white/10 bg-obsidian-900 text-slate-300">
            <div className="max-w-7xl mx-auto">
                <SectionHeader
                    label="Core Principles"
                    title="How I Build"
                    accent="Systems"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Strategy 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-8 border border-white/5 h-full flex flex-col bg-obsidian-950"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Network size={20} className="text-signal-orange" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Designing for Scale, Not Just Delivery</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Prioritizing deep observability, isolated error boundaries, and elastic infrastructure to guarantee systems can handle 100x growth without architectural rewrites.
                        </p>
                    </motion.div>

                    {/* Strategy 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-8 border border-white/5 h-full flex flex-col bg-obsidian-950"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Blocks size={20} className="text-signal-orange" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Modular, Extensible Architectures</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Building core components and underlying services as highly independent, stateless primitives that can be robustly composed to solve expanding business domains.
                        </p>
                    </motion.div>

                    {/* Strategy 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="p-8 border border-white/5 h-full flex flex-col bg-obsidian-950"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <Activity size={20} className="text-signal-orange" />
                            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Bridging Product and Engineering</h3>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Aligning rigorous technical infrastructure decisions with core business metrics to deliver platforms that generate quantifiable, measurable user impact.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalDepth;

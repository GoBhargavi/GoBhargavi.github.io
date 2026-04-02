'use client';
import React from 'react';
import { motion } from 'framer-motion';

const roles = [
    {
        title: 'Senior AI Full-Stack Engineer',
        desc: 'Her title for a reason — she owns AI product delivery end to end'
    },
    {
        title: 'AI Architect',
        desc: 'Designs intelligent systems at the architecture level, not the prompt level'
    },
    {
        title: 'Staff / Principal Engineer',
        desc: 'The technical leader who unblocks the whole team on AI products'
    },
    {
        title: 'Full-Stack Engineer, AI/ML Team',
        desc: 'Bridges the gap between ML engineers and product engineers'
    },
    {
        title: 'Engineering Lead, AI Products',
        desc: 'Combines technical depth with delivery leadership'
    },
    {
        title: 'AI Solutions Architect',
        desc: 'Translates business problems into AI-powered technical solutions'
    }
];

const RecruiterRoles = () => {
    return (
        <section className="section-container" aria-label="Ideal Roles">
            <div className="vertical-label">IDEAL ROLES</div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Target Positions</h2>
                
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="py-4 px-6 text-sm font-mono text-signal-orange uppercase tracking-wider font-normal w-1/3">Target Role</th>
                                <th className="py-4 px-6 text-sm font-mono text-signal-orange uppercase tracking-wider font-normal">Why It's a Fit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {roles.map((role, idx) => (
                                <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                                    <td className="py-4 px-6 text-white font-semibold group-hover:text-signal-orange transition-colors">
                                        {role.title}
                                    </td>
                                    <td className="py-4 px-6 text-slate-400 text-sm">
                                        {role.desc}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>
        </section>
    );
};

export default RecruiterRoles;

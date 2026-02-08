'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

interface MetricCardProps {
    title: string;
    metric: string;
    description: string;
    chartData?: { name: string; value: number }[];
    trend?: 'up' | 'down';
}

const MetricCard: React.FC<MetricCardProps> = ({ title, metric, description, chartData, trend }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl bg-obsidian-900 border border-white/5 relative overflow-hidden group"
        >
            <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <h4 className="text-slate-400 text-sm font-medium mb-2 uppercase tracking-wider">{title}</h4>
                    <div className="flex items-baseline gap-2 mb-2">
                        <span className={`text-4xl font-bold font-outfit ${trend === 'up' ? 'text-green-400' : trend === 'down' ? 'text-red-400' : 'text-neon-cyan'}`}>
                            {metric}
                        </span>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">{description}</p>
                </div>

                {chartData && (
                    <div className="h-24 w-full mt-auto">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ background: '#0a0a0c', border: '1px solid #333', borderRadius: '8px' }}
                                />
                                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === chartData.length - 1 ? '#00f2ff' : '#334155'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>

            {/* Background Glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-neon-cyan/10 transition-colors duration-500`} />
        </motion.div>
    );
};

export default MetricCard;

import React from 'react';

interface SectionHeaderProps {
    label: string;
    title: string;
    accent: string;
    subtitle?: string;
}

const SectionHeader = ({ label, title, accent, subtitle }: SectionHeaderProps) => (
    <div className="mb-16">
        <div className="font-mono text-xs text-signal-orange uppercase tracking-[0.4em] mb-4">
            {label}
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            {title} <span className="text-signal-orange">{accent}</span>
        </h2>
        {subtitle && (
            <p className="max-w-sm font-mono text-[10px] md:text-xs uppercase tracking-widest text-slate-500 leading-relaxed mt-4">
                {subtitle}
            </p>
        )}
    </div>
);

export default SectionHeader;


import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getCaseStudyData, getCaseStudySlugs } from '@/lib/markdown';
import ArchitectureDiagram from '@/components/content/ArchitectureDiagram';
import MetricCard from '@/components/content/MetricCard';

// Helper to render HTML content safely
function DangerousHtml({ html }: { html: string }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function generateStaticParams() {
    const slugs = getCaseStudySlugs();
    return slugs.map((slug) => ({
        slug: slug.replace(/\.md$/, ''),
    }));
}

export default async function CaseStudyPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const postData = await getCaseStudyData(params.slug);

    // Dynamic component prop types
    type TrendType = 'up' | 'down';


    return (
        <main className="bg-obsidian-950 min-h-screen text-slate-300 selection:bg-signal-orange/20 selection:text-signal-orange pb-20">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-obsidian-900/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-12 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap gap-4 mb-6">
                        {postData.technologies.map((tech: string) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-none text-xs font-mono text-signal-orange/80 uppercase tracking-widest">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-6 leading-tight">
                        {postData.title}
                    </h1>

                    <p className="text-xl text-slate-400 leading-relaxed mb-8">
                        {postData.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-y border-white/10 py-6">
                        <div>
                            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Role</span>
                            <span className="text-white font-medium">{postData.role}</span>
                        </div>
                        <div>
                            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block mb-1">Impact</span>
                            <span className="text-signal-orange font-medium">{postData.impact}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="container mx-auto px-6">
                <article className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-mono prose-headings:uppercase prose-headings:text-white prose-a:text-signal-orange prose-img:rounded-none">
                    <DangerousHtml html={postData.contentHtml} />
                </article>
            </section>

            {/* Interactive Component Injection Area (Simulation) */}
            <section className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="my-12">
                    {/* 
                    Ideally, we'd use MDXRemote here to render components inside markdown. 
                    For this implementation, we will manually inject specific components based on the slug 
                    to demonstrate the "Interactive" requirement without full MDX setup complexity.
                 */}

                    {params.slug === 'micro-frontend' && (
                        <div className="space-y-12">
                            <h3 className="text-2xl font-bold text-white mb-4">Architecture Visualization</h3>
                            <ArchitectureDiagram type="micro-frontend" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <MetricCard
                                    title="Bundle Size"
                                    metric="-40%"
                                    description="Reduction in initial load JavaScript payload"
                                    trend={"up" as TrendType}
                                    chartData={[{ name: 'Monolith', value: 5.2 }, { name: 'MFE', value: 3.1 }]}
                                />
                                <MetricCard
                                    title="Deployment Freq"
                                    metric="3x"
                                    description="Increase in release velocity per sprint"
                                    trend={"up" as TrendType}
                                    chartData={[{ name: 'Before', value: 2 }, { name: 'After', value: 6 }]}
                                />
                            </div>
                        </div>
                    )}

                    {params.slug === 'enterprise-chat' && (
                        <div className="space-y-12">
                            <h3 className="text-2xl font-bold text-white mb-4">RAG Data Flow</h3>
                            <ArchitectureDiagram type="rag-chat" />
                            <MetricCard
                                title="Support Cost"
                                metric="-40%"
                                description="Reduction in Level 1 support tickets"
                                trend={"up" as TrendType}
                            />
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}

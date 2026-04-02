import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import resumeData from '@/data/resumeData.json';
import JsonLd from '@/components/JsonLd';
import ScraperBlock from '@/components/ScraperBlock';

const mono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-mono',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: `Bhargavi Govardhanam — Senior AI Full-Stack Engineer & AI Architect`,
    description: `Senior AI Full-Stack Engineer specializing in generative AI applications, LLM integration, RAG pipelines, React, Node.js, Python, and cloud architecture. Open to senior roles building AI-powered products.`,
    keywords: `AI Engineer, Full Stack Developer, AI Architect, LLM, Generative AI, RAG, React, Node.js, Python, Machine Learning, Senior Engineer, Hire AI Developer, Prompt Engineering, MLOps, Cloud Architecture, TypeScript, AWS, Azure, Microservices, Conversational AI, System Design`,
    authors: [{ name: "Bhargavi Govardhanam" }],
    robots: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large"
    },
    alternates: {
        canonical: "http://www.gobhargavi.com/"
    },
    openGraph: {
        type: 'profile',
        title: 'Bhargavi Govardhanam — Senior AI Full-Stack Engineer & AI Architect',
        description: 'Architecting production-grade AI systems end to end. Full-stack expertise across React, Python, Node.js, and cloud platforms with deep generative AI and LLM integration skills. Available for hire.',
        url: 'http://www.gobhargavi.com/',
        siteName: 'Bhargavi Govardhanam — AI Portfolio',
        firstName: 'Bhargavi',
        lastName: 'Govardhanam',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hire Bhargavi Govardhanam — Senior AI Full-Stack Engineer',
        description: 'From LLM pipelines to React dashboards. The AI full-stack engineer your team is missing.',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${mono.variable} ${inter.variable}`} suppressHydrationWarning>
            <head>
                <link rel="canonical" href="http://www.gobhargavi.com/" />
                <meta property="profile:first_name" content="Bhargavi" />
                <meta property="profile:last_name" content="Govardhanam" />
            </head>
            <body
                className="font-sans bg-obsidian-950 text-slate-300 antialiased transition-colors duration-500 overflow-x-hidden min-h-[100svh]"
                suppressHydrationWarning
                itemScope 
                itemType="https://schema.org/ProfilePage"
            >
                <ScraperBlock />
                <JsonLd />
                <div className="relative min-h-screen flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    );
}

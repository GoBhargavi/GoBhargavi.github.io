import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import './globals.css';
import resumeData from '@/data/resumeData.json';
import JsonLd from '@/components/JsonLd';
import { RecruiterProvider } from '@/context/RecruiterContext';

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
    title: `Bhargavi Govardhanam | AI Architect`,
    description: resumeData.personalInfo.summary,
    keywords: [
        "AI Architect",
        "AI Full Stack Engineer",
        "Lead Data Scientist",
        "RAG Pipelines",
        "Agentic Workflows",
        "LangChain",
        "FastAPI",
        "React",
        "Azure AI"
    ],
    authors: [{ name: resumeData.personalInfo.name }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${mono.variable} ${inter.variable} recruiter-mode`} suppressHydrationWarning>
            <body
                className="font-sans bg-obsidian-950 text-slate-400 antialiased transition-colors duration-500"
                suppressHydrationWarning
            >
                <RecruiterProvider>
                    <JsonLd />
                    <div className="relative min-h-screen flex flex-col">
                        {children}
                    </div>
                </RecruiterProvider>
            </body>
        </html>
    );
}

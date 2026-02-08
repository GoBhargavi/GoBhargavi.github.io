import type { Metadata } from 'next';
import { Outfit, Inter } from 'next/font/google';
import './globals.css';
import resumeData from '@/data/resumeData.json';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.role}`,
    description: resumeData.personalInfo.summary,
    keywords: [
        "Senior Full-Stack Engineer",
        "React",
        "Next.js",
        "Angular",
        "Node.js",
        "Software Architect",
        "Cloud Engineering",
        "AWS",
        "Dallas",
        "Frontend Architecture",
        "System Design"
    ],
    authors: [{ name: resumeData.personalInfo.name }],
    openGraph: {
        title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.role}`,
        description: resumeData.personalInfo.summary,
        url: 'https://gobhargavi.github.io', // Assuming this is the production URL
        siteName: `${resumeData.personalInfo.name} Portfolio`,
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/og-image.jpg', // Placeholder, user should add this
                width: 1200,
                height: 630,
                alt: `${resumeData.personalInfo.name} - ${resumeData.personalInfo.role}`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: `${resumeData.personalInfo.name} | ${resumeData.personalInfo.role}`,
        description: resumeData.personalInfo.summary,
        creator: '@GoBhargavi', // inferred from Github mostly
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/assets/logo.png',
        shortcut: '/assets/logo.png',
        apple: '/assets/logo.png', // Optional, good for mobile
    },
};

import JsonLd from '@/components/JsonLd';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${inter.variable} dark`} suppressHydrationWarning>
            <body
                className="font-inter bg-background text-foreground antialiased selection:bg-violet-500/30 selection:text-violet-200"
                suppressHydrationWarning
            >
                <JsonLd />
                <div className="relative min-h-screen flex flex-col">
                    {/* Background Grid Pattern */}
                    <div className="fixed inset-0 z-[-1] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    <div className="fixed inset-0 z-[-1] bg-[radial-gradient(circle_800px_at_50%_-20%,#7c3aed1a,transparent)]"></div>

                    {children}
                </div>
            </body>
        </html>
    );
}

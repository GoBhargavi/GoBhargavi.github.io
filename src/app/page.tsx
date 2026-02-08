'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import SidebarNav from '@/components/SidebarNav';
import Hero from '@/components/Hero';
import LoadingScreen from '@/components/LoadingScreen';
import FeaturedCaseStudy from '@/components/content/FeaturedCaseStudy';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main className="bg-obsidian-950 min-h-screen text-slate-300 selection:bg-neon-cyan/20 selection:text-neon-cyan relative">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <Navbar />
                    <SidebarNav />
                    <Hero />
                    <Skills />
                    <FeaturedCaseStudy />
                    <Timeline />
                    <Projects />
                    <Education />
                    <Certifications />
                    <Footer />
                </>
            )}
        </main>
    );
}

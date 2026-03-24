'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Hero from '@/components/Hero';
import LoadingScreen from '@/components/LoadingScreen';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import EnterpriseWork from '@/components/EnterpriseWork';
import TechnicalDepth from '@/components/TechnicalDepth';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Certifications from '@/components/Certifications';
import Footer from '@/components/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    React.useEffect(() => {
        if (!isLoading) {
            window.scrollTo(0, 0);
        }
    }, [isLoading]);

    return (
        <main className="bg-obsidian-950 min-h-screen text-slate-300 selection:bg-neon-cyan/20 selection:text-neon-cyan relative">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <Navbar />
                    <Hero />
                    <About />
                    <Expertise />
                    <Projects />
                    <EnterpriseWork />
                    <TechnicalDepth />
                    <Experience />
                    <Education />
                    <Certifications />
                    <Footer />
                </>
            )}
        </main>
    );
}

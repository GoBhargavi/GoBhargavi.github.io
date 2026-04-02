'use client';

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RecruiterPitch from '@/components/RecruiterPitch';
import RecruiterWhyHire from '@/components/RecruiterWhyHire';
import RecruiterSkills from '@/components/RecruiterSkills';
import RecruiterRoles from '@/components/RecruiterRoles';
import RecruiterFAQ from '@/components/RecruiterFAQ';
import RecruiterCTA from '@/components/RecruiterCTA';
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
        <main className="bg-obsidian-950 min-h-screen text-slate-300 selection:bg-signal-orange/30 selection:text-white relative">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
            </AnimatePresence>

            {!isLoading && (
                <>
                    <Navbar />
                    <Hero />
                    <RecruiterPitch />
                    <RecruiterWhyHire />
                    <RecruiterSkills />
                    <RecruiterRoles />
                    <RecruiterFAQ />
                    <Projects />
                    <EnterpriseWork />
                    <TechnicalDepth />
                    <Expertise />
                    <Experience />
                    <Education />
                    <Certifications />
                    <RecruiterCTA />
                    <Footer />
                </>
            )}
        </main>
    );
}

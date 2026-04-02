import { Suspense } from 'react';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Journey | 11 Years of Engineering Excellence',
    description: 'A timeline of 11+ years of professional experience in Full-Stack Development and AI Engineering, along with academic background.',
};

export default function JourneyPage() {
    return (
        <main className="min-h-screen bg-obsidian-950 flex flex-col">
            <Navbar />
            <div className="pt-20 flex-grow">
                <Suspense fallback={
                    <div className="flex justify-center items-center h-64">
                        <div className="w-8 h-8 border-2 border-signal-orange border-t-transparent rounded-full animate-spin" />
                    </div>
                }>
                    <Experience />
                    <Education />
                </Suspense>
            </div>
            <Footer />
        </main>
    );
}

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Skills />
            <Projects />
            <Certifications />
            <Footer />
        </main>
    );
}

import resumeData from '@/data/resumeData.json';

const JsonLd = () => {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: resumeData.personalInfo.name,
        jobTitle: resumeData.personalInfo.role,
        url: 'https://gobhargavi.github.io',
        sameAs: [
            resumeData.personalInfo.linkedin,
            resumeData.personalInfo.github,
        ],
        knowsAbout: [
            "Full-Stack Development",
            "Software Architecture",
            "React",
            "Next.js",
            "Cloud Engineering",
            "System Design"
        ],
        description: resumeData.personalInfo.summary,
        address: {
            '@type': 'PostalAddress',
            addressLocality: "Dallas",
            addressRegion: "TX",
            addressCountry: "US"
        },
        alumniOf: [
            {
                '@type': 'CollegeOrUniversity',
                name: 'University of Massachusetts Dartmouth'
            },
            {
                '@type': 'CollegeOrUniversity',
                name: 'Anna University Chennai'
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
};

export default JsonLd;

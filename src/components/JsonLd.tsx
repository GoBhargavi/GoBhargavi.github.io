const JsonLd = () => {
    const personBlock = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "dateModified": "2026-04-01",
      "mainEntity": {
        "@type": "Person",
        "@id": "http://www.gobhargavi.com/#person",
        "name": "Bhargavi Govardhanam",
        "givenName": "Bhargavi",
        "familyName": "Govardhanam",
        "jobTitle": "Senior AI Full-Stack Engineer",
        "alternateName": "AI Architect",
        "description": "Senior AI Full-Stack Engineer and AI Architect who ships production-grade intelligent systems. Specializes in generative AI application development, LLM integration, RAG pipelines, and full-stack product delivery across React, Node.js, Python, and cloud platforms.",
        "url": "http://www.gobhargavi.com/",
        "knowsAbout": [
          "Artificial Intelligence", "Generative AI", "Large Language Models (LLMs)",
          "Retrieval-Augmented Generation (RAG)", "Prompt Engineering",
          "Full-Stack Web Development", "React", "Angular", "Node.js", "Python",
          "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap",
          "REST APIs", "GraphQL", "Microservices Architecture",
          "PostgreSQL", "MongoDB", "Redis",
          "AWS", "Azure", "GCP", "Cloud Architecture",
          "Docker", "Kubernetes", "CI/CD Pipelines", "DevOps",
          "Machine Learning Operations (MLOps)", "Model Deployment",
          "Conversational AI", "Chatbot Development", "AI Automation",
          "Ionic Framework", "Cross-Platform Mobile Development",
          "Agile / Scrum", "Technical Architecture", "System Design"
        ],
        "hasOccupation": [
          {
            "@type": "Occupation",
            "name": "Senior AI Full-Stack Engineer",
            "occupationalCategory": "15-1256.00",
            "skills": "AI Architecture, Generative AI, LLM Integration, RAG Pipelines, Full-Stack Development, React, Python, Node.js, TypeScript, Cloud Platforms, MLOps, Prompt Engineering, System Design",
            "responsibilities": "Architecting and delivering production AI applications, building intelligent product features, designing scalable cloud infrastructure, leading full-stack engineering across frontend and backend"
          }
        ],
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Alluri Institute of Management Sciences",
            "description": "Master of Computer Applications (MCA) — Computer Science, 2014-2016"
          }
        ],
        "seeks": {
          "@type": "Demand",
          "description": "Senior AI Full-Stack Engineer, AI Architect, Staff Engineer, Principal Engineer, or Engineering Lead roles at companies shipping AI-powered products. Open to full-time, contract-to-hire, remote or hybrid."
        },
        "sameAs": []
      }
    };
    
    const websiteBlock = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Bhargavi Govardhanam — AI Full-Stack Portfolio",
      "url": "http://www.gobhargavi.com/"
    };
    
    const skillsBlock = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Core Technical Skills",
      "numberOfItems": 12,
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Generative AI & LLM Integration"},
        {"@type": "ListItem", "position": 2, "name": "RAG Pipeline Architecture"},
        {"@type": "ListItem", "position": 3, "name": "React / TypeScript / Next.js"},
        {"@type": "ListItem", "position": 4, "name": "Python / FastAPI / Django"},
        {"@type": "ListItem", "position": 5, "name": "Node.js / Express"},
        {"@type": "ListItem", "position": 6, "name": "Cloud Architecture (AWS, Azure, GCP)"},
        {"@type": "ListItem", "position": 7, "name": "Docker & Kubernetes"},
        {"@type": "ListItem", "position": 8, "name": "PostgreSQL / MongoDB / Redis"},
        {"@type": "ListItem", "position": 9, "name": "MLOps & Model Deployment"},
        {"@type": "ListItem", "position": 10, "name": "Prompt Engineering"},
        {"@type": "ListItem", "position": 11, "name": "CI/CD & DevOps"},
        {"@type": "ListItem", "position": 12, "name": "System Design & Technical Architecture"}
      ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personBlock) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteBlock) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(skillsBlock) }}
            />
        </>
    );
};

export default JsonLd;

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'src/content');

export interface CaseStudyData {
    slug: string;
    title: string;
    description: string;
    date: string;
    technologies: string[];
    role: string;
    impact: string;
    heroImage?: string;
    contentHtml: string;
    [key: string]: any;
}

export function getCaseStudySlugs() {
    const caseStudiesDir = path.join(contentDirectory, 'case-studies');
    if (!fs.existsSync(caseStudiesDir)) return [];
    return fs.readdirSync(caseStudiesDir);
}

export async function getCaseStudyData(slug: string): Promise<CaseStudyData> {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(contentDirectory, 'case-studies', `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
        slug: realSlug,
        contentHtml,
        ...(matterResult.data as any),
    };
}

export function getAllCaseStudies(): Omit<CaseStudyData, 'contentHtml'>[] {
    const slugs = getCaseStudySlugs();
    const allCaseStudies = slugs.map((slug) => {
        const realSlug = slug.replace(/\.md$/, '');
        const fullPath = path.join(contentDirectory, 'case-studies', slug);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
            slug: realSlug,
            ...(matterResult.data as any),
        };
    });

    // Sort case studies by date
    return allCaseStudies.sort((a, b) => (a.date < b.date ? 1 : -1));
}

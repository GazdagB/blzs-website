import React from 'react'
import { notFound } from 'next/navigation'
import CaseStudy from '@/app/components/CaseStudy'
import caseStudies from '@/app/utils/caseStudies'

async function getCaseStudy(slug: string) {
    return caseStudies.find((c) => c.slug === slug) || null;
}

// Update the interface to use PageProps
interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return caseStudies.map(({ slug }) => ({ slug }));
}

export default async function CaseStudyPage({ params }: PageProps) {
    // Await the params object before accessing its properties
    const resolvedParams = await params;
    const caseStudy = await getCaseStudy(resolvedParams.slug);
  
    if (!caseStudy) return notFound();
  
    return <CaseStudy work={caseStudy} />;
}
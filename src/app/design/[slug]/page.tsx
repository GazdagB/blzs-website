
import React from 'react'
import { notFound } from 'next/navigation'
import CaseStudy from '@/app/components/CaseStudy'
import caseStudies from '@/app/utils/caseStudies'

async function getCaseStudy(slug: string) {
    return caseStudies.find((c) => c.slug === slug) || null;
}

interface CaseStudyParams {
    params: {
      slug: string;
    };
}

export async function generateStaticParams() {
    return caseStudies.map(({ slug }) => ({ slug }));
}

export default async function CaseStudyPage({ params }: CaseStudyParams) {
    // Await the params object before accessing its properties
    const resolvedParams = await Promise.resolve(params);
    const caseStudy = await getCaseStudy(resolvedParams.slug);
  
    if (!caseStudy) return notFound();
  
    return <CaseStudy work={caseStudy} />;
}
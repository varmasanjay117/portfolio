import React from 'react';
import { ProjectCardSkeleton } from '@/components/partials/project-card';
export default function Loading() {
  return (
    <>
      {[...Array(12)].map((_, i) => (
        <ProjectCardSkeleton key={i} delay={i} />
      ))}
    </>
  );
}

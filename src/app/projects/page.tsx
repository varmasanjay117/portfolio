import React from 'react';
import { allProjects } from 'contentlayer/generated';
import ProjectCard from '@/components/partials/project-card';
type SearchParamsProps = {
  searchParams: {
    tag: string;
  };
};
export default function ProjectPage({ searchParams }: SearchParamsProps) {
  const { tag } = searchParams;
  let filteredProjects = tag
    ? allProjects.filter(project => project.tag.includes(tag))
    : allProjects;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
      {filteredProjects.map(project => (
        <ProjectCard key={project.title} data={project} />
      ))}
    </div>
  );
}

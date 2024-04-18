import React from 'react';
import { allProjects } from 'contentlayer/generated';
import MDXComponent from '@/components/partials/mdx-component';
import { notFound } from 'next/navigation';
type ParamsProps = { title: string };

async function getContent(params: ParamsProps) {
  const post = allProjects.find(
    post => post.title.toLowerCase() === params.title,
  );

  if (!post) null;
  return post;
}
export default async function Page({ params }: { params: ParamsProps }) {
  const content = await getContent(params);

  if (!content) return notFound();

  return (
    <MDXComponent
      code={content.body.code}
      className={
        'prose-h2:text-foreground font-sans prose-h3:text-foreground prose-p:text-muted-foreground prose-a:text-foreground prose-li:text-muted-foreground prose-img:w-2/3 prose-img:mx-auto prose-strong:text-foreground prose-h4:text-foreground prose-a:no-underline'
      }
    />
  );
}

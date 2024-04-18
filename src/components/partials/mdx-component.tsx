import React from 'react';
import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { useMDXComponent } from 'next-contentlayer/hooks';
export default function MDXComponent({
  code,
  className,
  transparentBg = true,
}: {
  code: string;
  className?: ClassValue;
  transparentBg?: boolean;
}) {
  const Component = useMDXComponent(code);
  return (
    <article
      className={cn(
        className,
        transparentBg ? 'prose-pre:!bg-transparent' : '',
        'prose min-w-full p-2.5 prose-pre:my-0  prose-pre:p-0 prose-pre:focus-visible:!ring-0 prose-pre:!outline-0 prose-img:aspect-video prose-img:object-cover prose-img:object-center',
      )}
    >
      <Component className="bg-red-500" />
    </article>
  );
}

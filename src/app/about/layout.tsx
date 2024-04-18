import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SiTypescript } from 'react-icons/si';
import AsideLink from '@/components/partials/aside-link';
import { allAbouts } from 'contentlayer/generated';
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 overflow-hidden h-full">
      <aside className="md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto">
        <Accordion type="single" collapsible defaultValue="about">
          <AccordionItem value={'about'} defaultChecked>
            <AccordionTrigger className="border-b border-lines px-5 py-2.5 text-left">
              About Me
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              {allAbouts.map(({ title }) => {
                return (
                  <AsideLink key={title} href={title} title={title}>
                    <SiTypescript className="w-4 h-4 shrink-0" />
                    {title}
                  </AsideLink>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className="md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto">
        {children}
      </section>
    </section>
  );
}

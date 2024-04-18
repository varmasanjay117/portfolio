import React, { Suspense } from 'react';
import { RiReactjsLine, RiHtml5Fill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { HiTerminal } from 'react-icons/hi';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AsideLink from '@/components/partials/aside-link';
export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 overflow-hidden h-full">
      <aside className="md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto">
        <Accordion type="single" collapsible defaultValue="item-0">
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger
                className="border-b border-lines px-5 py-2.5 text-left"
                data-umami-event="accordion-project"
              >
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="mt-5 space-y-1">
                {item.list.map((listItem, j) => (
                  <AsideLink
                    key={j}
                    href={listItem.href}
                    // startWith="/projects"
                    title={listItem.title}
                  >
                    {listItem.icon}
                    {listItem.title}
                  </AsideLink>
                ))}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
      <section className="md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto">
        {children}
      </section>
    </section>
  );
}

const data = [
  {
    title: 'Projects',
    list: [
      {
        title: 'All Projects',
        href: '/projects',
        icon: <HiTerminal className="w-4 h-4" />,
      },
      {
        title: 'React',
        href: '/projects?tag=React',
        icon: <RiReactjsLine className="w-4 h-4" />,
      },
      {
        title: 'React Native',
        href: '/projects?tag=React Native',
        icon: <RiReactjsLine className="w-4 h-4" />,
      },
      {
        title: 'Next',
        href: '/projects?tag=Next',
        icon: <TbBrandNextjs className="w-4 h-4" />,
      },
      {
        title: 'HTML',
        href: '/projects?tag=HTML',
        icon: <RiHtml5Fill className="w-4 h-4" />,
      },
    ],
  },
];

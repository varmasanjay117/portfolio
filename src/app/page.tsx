'use client';
import React from 'react';
import Image from 'next/image';
import { TypewriterEffectSmooth } from '@/components/partials/typewriter-effect';
import { Spotlight } from '@/components/partials/spotlight';
import { words } from '@/lib/form-data';
export default function Home() {
  return (
    <section className="flex items-center  gap-20 p-5">
      <div className="flex justify-center items-center h-full w-full">
        <div className="md:space-y-10 space-y-8 relative z-10">
          <header>
            <p className="text-muted-foreground text-lg font-extralight">
              Hi all. I am
            </p>

            <TypewriterEffectSmooth words={words} />
            <h2 className="text-muted-foreground md:text-2xl sm:text-xl text-base">
              <span className="animate-pulse">&gt; </span>
              Front-end developer
            </h2>

            <div className="absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse" />
          </header>

          <div className="space-y-2 sm:text-sm text-xs">
            <p className="text-muted-foreground">{`// you can also see it on my Github page`}</p>
            <p className="text-muted-foreground">
              <span className="text-purple">const</span>{' '}
              <span className="text-green">githubLink</span> ={' '}
              <a
                target="_blank"
                href="https://github.com/varmasanjay117/portfolio.git"
                className="text-light-brown hover:underline hover:text-foreground transition-colors"
              >
                &apos;https://github.com/varmasanjay117/portfolio.git&apos;
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-full relative ">
        <Spotlight className="-top-[26rem] left-10 " fill="white" />

        <Image
          src={
            'https://s3.us-east-2.wasabisys.com/ufaber-lms/files/90c3d09e02744c839f5981d53f46fe0a.png'
          }
          alt="varma"
          quality={100}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
}

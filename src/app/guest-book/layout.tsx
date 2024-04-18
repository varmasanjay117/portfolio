import React from 'react';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-12 overflow-hidden h-full gap-10">
      {children}
    </section>
  );
}

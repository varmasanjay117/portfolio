import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layouts/navbar';
import Footer from '@/components/layouts/footer';
import { ThemeWrapper } from '@/components/theme-wrapper';
import { NextConst } from '@/lib/constants';
import { SpeedInsights } from '@vercel/speed-insights/next';
import {
  NavbarProvider,
  NavbarMobile,
} from '@/components/layouts/navbar-mobile';
import { Toaster } from '@/components/ui/toaster';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: {
    default: 'Sanjay',
    template: '%s | Sanjay',
  },
  description:
    "Explore the professional portfolio of Sanjay Varma, a frontend developer and Electronic and Telecom engineering student. Discover interactive projects, a clean portfolio, and insights into technical expertise. Connect for collaboration or inspiration. Let's bring your vision to life!",
  openGraph: {
    title: 'Sanjay',
    description:
      "Explore the professional portfolio of Sanjay Varma, a frontend developer and Electronic and Telecom engineering student. Discover interactive projects, a clean portfolio, and insights into technical expertise. Connect for collaboration or inspiration. Let's bring your vision to life!",
    url: NextConst.NEXT_PUBLIC_WEBSITE_URL,
    siteName: 'Sanjay',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en suppressHydrationWarning">
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <main>
          <ThemeWrapper
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarProvider>
              <Navbar />
              <NavbarMobile />
            </NavbarProvider>

            {children}
            <Footer />
            <Toaster />
            <SpeedInsights />
          </ThemeWrapper>
        </main>
      </body>
    </html>
  );
}

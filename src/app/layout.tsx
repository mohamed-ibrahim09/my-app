import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Mohamed Ibrahim',
  description:
    'Portfolio of Mohamed Ibrahim — Junior DevOps and Cloud Engineer focused on automation, containers, CI/CD, and AWS infrastructure.',
  openGraph: {
    type: 'website',
    title: 'Mohamed Ibrahim',
    description:
      'Junior DevOps and Cloud Engineer focused on automation, containers, CI/CD, and AWS infrastructure.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
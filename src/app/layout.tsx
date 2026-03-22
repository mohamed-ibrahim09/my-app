import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamedelhadad.vercel.app'),
  title: 'Mohamed Elhadad — Junior DevOps & Cloud Engineer',
  description:
    'AI student with a Cybersecurity specialization building DevOps and cloud skills. Open to remote internships and freelance work.',
  openGraph: {
    title: 'Mohamed Elhadad — Junior DevOps & Cloud Engineer',
    description: 'AI student with a Cybersecurity specialization building DevOps and cloud skills.',
    url: 'https://mohamedelhadad.vercel.app',
    siteName: 'Mohamed Elhadad Portfolio',
    images: [{ url: '/og-preview.png', width: 1200, height: 630 }],
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
    <html lang="en" suppressHydrationWarning className="transition-[background-color,color] duration-300 ease-out">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(t!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen transition-[background-color,color] duration-300 ease-out">{children}</body>
    </html>
  );
}

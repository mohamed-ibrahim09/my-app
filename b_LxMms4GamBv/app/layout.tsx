import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { MatrixRain } from '@/components/MatrixRain'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Mohamed Elhadad - Matrix Dev',
  description: 'GitHub dark Matrix-themed portfolio showcasing AI, DevOps, and web development',
  metadataBase: new URL('https://v0-online-portfolio-beta.vercel.app'),
  openGraph: {
    title: 'Mohamed Elhadad - Matrix Dev',
    description: 'GitHub dark Matrix-themed portfolio showcasing AI, DevOps, and web development',
    url: 'https://v0-online-portfolio-beta.vercel.app',
    siteName: 'Mohamed Elhadad Portfolio',
    images: [
      {
        url: '/placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Elhadad portfolio preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mohamed Elhadad - Matrix Dev',
    description: 'GitHub dark Matrix-themed portfolio showcasing AI, DevOps, and web development',
    images: ['/placeholder.svg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="font-sans antialiased bg-background text-foreground relative overflow-x-hidden">
        <MatrixRain />
        <div className="relative z-10">
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

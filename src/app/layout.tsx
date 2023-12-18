import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from 'sonner'
import Footer from '@/components/layout/footer'
import { GeistSans } from 'geist/font/sans'
import dynamic from 'next/dynamic'
const MainNav = dynamic(() => import('@/components/layout/main-nav'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Syam Shukla',
  description: 'The',
  manifest: '/manifest.json',
  icons: { apple: '/icon.png' },
  metadataBase: new URL('https://syamshukla.tech/'),
  openGraph: {
    title: 'Syam Shukla',
    description: 'The',
    type: 'website',
    images: [
      {
        url: './opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: './opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <MainNav />
          {children}
          <Analytics />
          <Footer />
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  )
}

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
  // opengraph image
  openGraph: {
    title: 'Syam Shukla',
    description: 'The',
  },
  twitter: {
    title: 'Syam Shukla',
    description: 'The',
    card: 'summary_large_image',
    creator: '@syams0113',
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

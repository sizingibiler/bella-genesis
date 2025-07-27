import { Inter, Sora } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
})

export const metadata = {
  title: 'Bella Genesis - New Generation Marketing',
  description: 'A strategy brand focused on projects that create value in the crypto world. Not hype, but real impact.',
  keywords: 'crypto marketing, solana projects, blockchain marketing, crypto promotion, trending, exchange listing',
  author: 'Bella Genesis',
  openGraph: {
    title: 'Bella Genesis - New Generation Marketing',
    description: 'Professional crypto marketing and strategic services for visionary projects.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bella Genesis - New Generation Marketing',
    description: 'Professional crypto marketing and strategic services for visionary projects.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" href="/images/logo1.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0A0F1F" />
      </head>
      <body className="antialiased">
        <div className="min-h-screen bella-bg-pattern bella-bg-dots">
          {children}
        </div>
      </body>
    </html>
  )
}

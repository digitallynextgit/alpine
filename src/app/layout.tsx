import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer"
import Providers from '@/components/Providers'
import Contact from '@/components/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alpine Talent Solutions',
  description: 'Strategic Staffing Solutions for Your Business',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <Providers />
        {children}
        <Footer />
        <Contact />
      </body>
    </html>
  )
}


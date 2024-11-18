'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import SmoothScroll from '../components/SmoothScroll'
import LoadingScreen from '../components/LoadingScreen'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <head>
        <title>l1AK1l's Portfolio</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          href="/fonts/inter-var-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800`}>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <>
           <Navbar />
            <SmoothScroll>{children}</SmoothScroll>
          </>
        )}
      </body>
    </html>
  )
}
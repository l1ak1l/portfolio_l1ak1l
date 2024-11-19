
'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from '../components/SmoothScroll'
import Navbar from '@/components/Navbar'
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
    <html lang="en" className="min-h-screen">
      <head>
        <title>l1AK1l's Portfolio</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body 
        className={`${inter.className} min-h-screen overflow-x-hidden`}
        style={{
          background: 'linear-gradient(to bottom right, rgb(17, 24, 39), rgb(0, 0, 0), rgb(17, 24, 39))',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/40" />
        <div className="relative z-10">
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <>
           <Navbar />
            <SmoothScroll>{children}</SmoothScroll>
          </>
          )}
        </div>
      </body>
    </html>
  )
}


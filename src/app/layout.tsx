import './globals.css'
import { Inter } from 'next/font/google'
import SmoothScroll from '../components/SmoothScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ammar Ali Khan - AI Enthusiast',
  description: 'Portfolio of Ammar Ali Khan, exploring the frontiers of AI and software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
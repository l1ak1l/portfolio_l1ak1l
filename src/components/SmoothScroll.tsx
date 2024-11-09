'use client'

import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

interface SmoothScrollProps {
  children: React.ReactNode
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  return (
    <ParallaxProvider>
      {children}
    </ParallaxProvider>
  )
}

export default SmoothScroll
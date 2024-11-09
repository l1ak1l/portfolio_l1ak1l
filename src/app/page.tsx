'use client'

import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Socials from '@/components/Socials'
import EducationExperience from '@/components/Education-experiance'
export default function Home() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start('visible')
  }, [controls])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <EducationExperience />
        <Projects />
        <Socials />
      </main>
    </div>
  )
}
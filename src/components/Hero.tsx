'use client'

import React, { useEffect } from 'react'
import Typed from 'typed.js'
import { Parallax } from 'react-scroll-parallax'
import { motion } from 'framer-motion'

const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ['Hey, my name is Ammar Ali Khan, an AI enthusiast'],
      typeSpeed: 50,
      showCursor: false,
      onComplete: (self: any) => {
        const subtext = document.getElementById('subtext')
        if (subtext) {
          subtext.style.opacity = '1'
        }
      }
    }

    const typed = new Typed('#typed-text', options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center pb-32 p-4 relative overflow-hidden">
      
      <Parallax speed={-5}>
        <motion.div 
          className="text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl text-white/90 md:text-6xl font-bold mb-4">
            <span id="typed-text"></span>
          </h2>
          <p 
            id="subtext" 
            className="text-xl md:text-2xl text-purple-200 mb-8 opacity-0 transition-opacity duration-1000"
          >
            Exploring the frontiers of AI and software development
          </p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a
              href="https://t.me/I1AK1I"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 shadow-lg"
            >
              Let's talk
            </a>
            <a
              href="/path-to-your-resume.pdf"
              download
              className="bg-white/10 backdrop-blur-md text-white font-bold py-3 px-6 rounded-full border border-white/20 hover:bg-white/20 transition duration-300 shadow-lg"
            >
              Download my resume
            </a>
          </motion.div>
        </motion.div>
      </Parallax>
    </section>
  )
}

export default Hero
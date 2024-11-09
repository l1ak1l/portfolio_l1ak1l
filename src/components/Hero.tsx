'use client'

import { useEffect } from 'react'
import Typed from 'typed.js'
import { Parallax } from 'react-scroll-parallax'

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
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center p-4">
      <Parallax speed={-5}>
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span id="typed-text"></span>
          </h2>
          <p 
            id="subtext" 
            className="text-xl md:text-2xl text-purple-300 mb-8 opacity-0 transition-opacity duration-1000"
          >
            Exploring the frontiers of AI and software development
          </p>
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="https://t.me/yourusername"
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
          </div>
        </div>
      </Parallax>
    </section>
  )
}

export default Hero
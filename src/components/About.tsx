'use client'

import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-32 relative z-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 text-center text-white/90"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-200 mb-6 text-white/90">
            I'm a passionate AI enthusiast and software developer with a keen interest in pushing the boundaries of technology. My journey in the world of coding started with a fascination for problem-solving and has evolved into a deep love for creating innovative solutions.
          </p>
          <p className="text-lg text-gray-200 mb-6 text-white/90">
            With expertise in machine learning, data science, and full-stack development, I strive to bridge the gap between cutting-edge AI research and practical applications. I'm constantly learning and exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.
          </p>
          <p className="text-lg text-gray-200 text-white/90">
            When I'm not coding, you can find me reading about the latest advancements in AI, contributing to open-source projects, or sharing my knowledge through tech blogs and community meetups.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          A Data Science graduate with a passion for Generative AI and Software Development. 
          My journey in the world of Machine Learning has led me to explore the fascinating 
          intersections of technology and creativity. I'm constantly pushing the boundaries 
          of what's possible, crafting innovative solutions that bridge the gap between 
          data-driven insights and practical applications.
        </motion.p>
      </div>
    </motion.section>
  )
}

export default About
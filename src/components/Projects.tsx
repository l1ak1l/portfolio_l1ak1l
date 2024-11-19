'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const projects = [
  {
    title: 'Adaptive RAG System for AI Agents',
    description: 'A Retrieval-Augmented Generation (RAG) system designed to dynamically adapt to user inputs, enhancing AI agents with real-time contextual knowledge.',
    technologies: ['Python', 'TensorFlow', 'LangGraph', 'LangChain'],
  },
  {
    title: 'Corrective RAG System for AI Agents',
    description: 'A RAG system focused on correcting errors and improving the accuracy of responses in AI agents by integrating feedback loops and refined retrieval methods.',
    technologies: ['Python', 'TensorFlow', 'LangGraph', 'LangChain'],
  },
  {
    title: 'Full-Stack Real Estate Platform in MERN Stack',
    description: 'A comprehensive real estate platform built using the MERN stack, featuring property listings, user authentication, and dynamic search functionalities.',
    technologies: ['MERN', 'Redux', 'Firebase'],
  },
]

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <motion.section
      id="projects"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
    </motion.section>
  )
}

export default Projects
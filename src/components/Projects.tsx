'use client'

import { motion } from 'framer-motion'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ProjectProps {
  title: string;
  description: string;
}


const projects = [
  {
    title: 'Adaptive RAG System for AI Agents',
    description: 'A Retrieval-Augmented Generation (RAG) system designed to dynamically adapt to user inputs, enhancing AI agents with real-time contextual knowledge.',
  },
  {
    title: 'Corrective RAG System for AI Agents',
    description: 'A RAG system focused on correcting errors and improving the accuracy of responses in AI agents by integrating feedback loops and refined retrieval methods.',
  },
  {
    title: 'Full-Stack Real Estate Platform in MERN Stack',
    description: 'A comprehensive real estate platform built using the MERN stack, featuring property listings, user authentication, and dynamic search functionalities.',
  },
];


const ProjectCard = ({ title, description }: ProjectProps) => (
  <motion.div
    className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 m-4 borderborder-white/10"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white-300">{description}</p>
  </motion.div>
)

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
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-center"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </Slider>
      </div>
    </motion.section>
  )
}

export default Projects
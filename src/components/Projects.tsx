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
    title: 'AI Image Generator',
    description: 'A deep learning model that generates unique images based on text prompts.',
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'An NLP-based application that analyzes the sentiment of text inputs.',
  },
  {
    title: 'Predictive Maintenance System',
    description: 'A machine learning model that predicts equipment failures before they occur.',
  },
]

const ProjectCard = ({ title, description }: ProjectProps) => (
  <motion.div
    className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 m-4 border border-purple-500/20"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-purple-300">{description}</p>
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
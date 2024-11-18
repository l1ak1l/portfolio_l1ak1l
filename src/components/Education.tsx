'use client'

import { motion } from 'framer-motion'

const educationData = [
  {
    id: "01",
    institution: "FAST-NUCES",
    degree: "Bachelor's in Data Science",
    period: "2021-Currently"
  },
  {
    id: "02",
    institution: "Govt. College",
    degree: "Pre-Engineering",
    period: "2019-2021"
  },
  {
    id: "03",
    institution: "BEACONHOUSE",
    degree: "Matriculation",
    period: "2017-2019"
  }
]

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <div className="py-20">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2 
          className="text-4xl font-light text-white text-center mb-16"
          variants={itemVariants}
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/10" />
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              className="relative mb-16 last:mb-0"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-sm text-gray-400">{edu.id}</span>
                </div>
              </div>
              <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-colors">
                  <h3 className="text-xl font-semibold text-white mb-2">{edu.institution}</h3>
                  <p className="text-gray-300 mb-1">{edu.degree}</p>
                  <p className="text-sm text-gray-400">{edu.period}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
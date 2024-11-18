'use client'

import { motion } from 'framer-motion'

const experienceData = [
  {
    title: "NLP Engineer",
    company: "BitPix Soft",
    responsibilities: [
      "Started by building Retrieval-Augmented Generation (RAG) from scratch, focusing on core integration between retrieval and generation steps to enhance answer relevance.",
      "Progressed to LangChain, leveraging its modular tools for more streamlined RAG workflows, expanding functionality and efficiency in retrieval pipelines.",
      "Advanced RAG further by researching and incorporating vector databases and experimenting with techniques for long context retention in LLMs, optimizing for complex, memory-intensive queries."
    ]
  },
  {
    title: "Trainee Business Analyst",
    company: "Coca-Cola Pakistan",
    responsibilities: [
      "Gained expertise in advanced reporting techniques, focusing on effective data presentation and actionable insights for business stakeholders.",
      "Developed sales forecasts using historical yearly data, applying analytical methods to predict trends and support strategic planning.",
      "Utilized SQL and Excel to clean and analyze data, ensuring accuracy and reliability for decision-making."
    ]
  }
]

export default function Experience() {
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
      >
        <motion.h2 
          className="text-4xl font-light text-white text-center mb-16"
          variants={itemVariants}
        >
          Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto px-4">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="mb-8 last:mb-0"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-colors">
                <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-gray-400 italic mb-4">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 leading-relaxed">
                      • {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}


'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer)
          return 100
        }
        const diff = Math.random() * 10
        return Math.min(oldProgress + diff, 100)
      })
    }, 200)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const circleVariants = {
    animate: (i: number) => ({
      y: [0, -20, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        delay: i * 0.15,
      },
    }),
  }

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center space-x-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-purple-500 rounded-full"
            variants={circleVariants}
            animate="animate"
            custom={i}
          />
        ))}
      </div>
      <div className="absolute bottom-10 text-white font-bold">
        {Math.round(progress)}%
      </div>
    </motion.div>
  )
}

export default LoadingScreen
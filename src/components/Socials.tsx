'use client'

import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa'

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/in/yourusername' },
  { icon: FaTwitter, url: 'https://twitter.com/yourusername' },
  { icon: FaTelegram, url: 'https://t.me/yourusername' },
]

const Socials = () => {
  return (
    <motion.section
      id="socials"
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Connect With Me
        </motion.h2>
        <motion.div
          className="flex justify-center space-x-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Socials
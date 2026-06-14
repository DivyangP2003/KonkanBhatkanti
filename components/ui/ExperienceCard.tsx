'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface ExperienceCardProps {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
}

export default function ExperienceCard({
  icon: Icon,
  title,
  description,
  details,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(13, 92, 107, 0.15)' }}
      className="relative bg-white rounded-xl p-8 border border-primary-light/30 hover:border-primary-light/60 transition-all duration-300 group overflow-hidden"
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
        >
          <Icon size={32} className="text-white" />
        </motion.div>

        {/* Title */}
        <h3 className="font-serif text-2xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-text-secondary mb-6 leading-relaxed">
          {description}
        </p>

        {/* Details List */}
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm font-sans text-text-secondary"
            >
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>

        {/* CTA Link */}
        <motion.button
          whileHover={{ x: 5 }}
          className="mt-6 font-sans font-semibold text-primary text-sm hover:text-primary-dark transition-colors duration-200"
        >
          Learn More →
        </motion.button>
      </div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Compass, Flame, Palette, UtensilsCrossed, Music2, Leaf } from 'lucide-react'
import ExperienceCard from '@/components/ui/ExperienceCard'

const experiences = [
  {
    icon: Compass,
    title: 'Adventure',
    description: 'Thrilling outdoor activities for the adrenaline seekers',
    details: [
      'Water rafting in monsoons',
      'Trekking expeditions',
      'Rock climbing',
      'Paragliding experiences',
      'Zip-lining adventures',
    ],
  },
  {
    icon: Palette,
    title: 'Art & Culture',
    description: 'Immerse yourself in Konkan\'s rich artistic heritage',
    details: [
      'Traditional dance performances',
      'Art workshops',
      'Craft demonstrations',
      'Cultural festivals',
      'Artist studio visits',
    ],
  },
  {
    icon: UtensilsCrossed,
    title: 'Cuisine',
    description: 'Savor authentic flavors of coastal Konkan cooking',
    details: [
      'Cooking classes',
      'Food tours',
      'Local market visits',
      'Seafood delicacies',
      'Farm-to-table dining',
    ],
  },
  {
    icon: Music2,
    title: 'Festivals',
    description: 'Celebrate the vibrant festivals throughout the year',
    details: [
      'Ganesh Chaturthi',
      'Navaratri celebrations',
      'Shimga festival',
      'Jatra processions',
      'Local fair experiences',
    ],
  },
  {
    icon: Leaf,
    title: 'Wildlife',
    description: 'Explore diverse ecosystems and rare species',
    details: [
      'Wildlife sanctuaries',
      'Bird watching tours',
      'Nature conservation',
      'Photography safaris',
      'Eco-tourism trails',
    ],
  },
  {
    icon: Flame,
    title: 'Heritage',
    description: 'Discover centuries of history and architecture',
    details: [
      'Ancient fort explorations',
      'Temple visits',
      'Archaeological sites',
      'Historical narratives',
      'Heritage walks',
    ],
  },
]

export default function ExperiencesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experiences" className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-wider">
            Unique Experiences
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            What Konkan Has to Offer
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-2xl mx-auto">
            From adventure activities to cultural immersion, discover the diverse experiences that make Konkan a must-visit destination for every type of traveler.
          </p>
        </motion.div>

        {/* Experiences Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ExperienceCard {...experience} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-text-secondary mb-6">
            Ready to plan your perfect Konkan experience?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white rounded-full font-sans font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Customize Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  )
}

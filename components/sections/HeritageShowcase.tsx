'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Crown, MapPin, Calendar } from 'lucide-react'

const heritageItems = [
  {
    title: 'Kolhapur Fort',
    era: '12th Century',
    description: 'Ancient fort with intricate architecture and royal heritage',
    mythicLink: 'Associated with the legend of Prabhavatigupta and the Yadava dynasty',
    highlights: [
      'Mahalaxmi Temple with golden dome',
      'Royal Palace complex',
      'Historical museum',
      'Ancient manuscripts',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
  {
    title: 'Sindhudurg Fort',
    era: '17th Century',
    description: 'Magnificent sea fort built by Marathi warriors',
    mythicLink: 'Legendary stronghold of maritime kingdoms with tales of valor and sea battles',
    highlights: [
      'Sea surrounded structure',
      'Historical cannons',
      'Secret tunnels',
      'Naval museum',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
  {
    title: 'Jyotiba Temple',
    era: 'Ancient',
    description: 'Sacred hilltop temple with breathtaking architectural splendor',
    mythicLink: 'Dedicated to the sun god with astronomical significance in Hindu cosmology',
    highlights: [
      'Golden dome architecture',
      'Panoramic views',
      'Ancient rituals',
      'Pilgrimage destination',
    ],
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  },
]

export default function HeritageShowcase() {
  return (
    <section id="heritage" className="py-20 px-4 md:px-6 bg-cream">
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
            Historical Legacy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            Heritage & Monuments
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-2xl mx-auto">
            Walk through centuries of history. Explore ancient monuments, archaeological treasures, and the mythic linkages that shaped Konkan&apos;s identity.
          </p>
        </motion.div>

        {/* Heritage Cards */}
        <div className="space-y-12">
          {heritageItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Era Badge */}
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <Calendar size={18} className="text-primary" />
                  <span className="font-sans text-sm font-semibold text-primary">{item.era}</span>
                </motion.div>

                {/* Title */}
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-text-primary mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-text-secondary mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Mythic Linkage */}
                <motion.div
                  className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  <p className="font-sans text-sm italic text-text-secondary">
                    <span className="font-semibold text-primary">Mythic Linkage: </span>
                    {item.mythicLink}
                  </p>
                </motion.div>

                {/* Highlights */}
                <div>
                  <h4 className="font-serif font-bold text-text-primary mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-center gap-3 font-sans text-sm text-text-secondary"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + idx * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Crown size={16} className="text-primary flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-6 font-sans font-semibold text-primary text-sm hover:text-primary-dark transition-colors duration-200 inline-flex items-center gap-2"
                >
                  Explore Full History →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Archaeological Treasures CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Discover More Archaeological Treasures
          </h3>
          <p className="font-sans text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Explore hidden archaeological sites, museum collections, and lesser-known monuments that reveal the ancient stories of Konkan.
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-full font-sans font-bold hover:bg-sand transition-colors duration-300">
            View Archaeological Sites
          </button>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, MapPin, CheckCircle } from 'lucide-react'

const planningItems = [
  {
    icon: Calendar,
    title: 'Best Time to Visit',
    content:
      'October to March offers pleasant weather with moderate temperatures and minimal rainfall, perfect for exploring beaches and trekking. Monsoons (June-September) are ideal for water activities and green landscapes.',
    tips: [
      'Peak season: October - February',
      'Avoid summer (April-May): Very hot',
      'Monsoon magic: June-September',
      'Festival season: September-December',
    ],
  },
  {
    icon: Users,
    title: 'Travel with Family',
    content:
      'Konkan offers family-friendly activities suitable for all ages. From calm beaches to adventure parks, there\'s something for everyone. Plan longer stays to experience local life and culture.',
    tips: [
      'Beach days with kids',
      'Gentle hill station treks',
      'Cultural workshops',
      'Safety: Local guides recommended',
    ],
  },
  {
    icon: MapPin,
    title: 'Getting Around',
    content:
      'Konkan is well-connected by road. Rent a car for flexibility or use local buses for authentic experience. Train connectivity links major towns. Local taxis and auto-rickshaws are affordable options.',
    tips: [
      'Self-driving: Own the pace',
      'Trains: Scenic routes',
      'Local buses: Budget-friendly',
      'Motorcycle rentals: Adventure travel',
    ],
  },
  {
    icon: MapPin,
    title: 'Budget Planning',
    content:
      'Budget travel is possible with homestays and local eateries. Mid-range hotels offer comfort. Splurge on resort experiences during off-season for better deals and personalized services.',
    tips: [
      'Budget: ₹1,500-3,000/night',
      'Mid-range: ₹3,000-6,000/night',
      'Luxury: ₹6,000+/night',
      'Food: ₹200-800 per meal',
    ],
  },
]

export default function TripPlanningGuide() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0)

  return (
    <section id="planning" className="py-20 px-4 md:px-6 bg-white">
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
            Plan Your Adventure
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            Trip Planning Guide
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-2xl mx-auto">
            Practical tips and guidance to make your Konkan journey unforgettable. Learn when to visit, how to get around, and what to expect.
          </p>
        </motion.div>

        {/* Accordion Items */}
        <div className="space-y-4 mb-12">
          {planningItems.map((item, index) => {
            const Icon = item.icon
            const isExpanded = expandedIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-primary-light/30 rounded-lg overflow-hidden hover:border-primary-light/60 transition-colors"
              >
                {/* Header */}
                <button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-cream hover:bg-primary/5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-text-primary text-left">
                      {item.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle
                      size={24}
                      className={`transition-colors ${
                        isExpanded ? 'text-primary' : 'text-primary-light/50'
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-6 bg-white border-t border-primary-light/20">
                        <p className="font-sans text-text-secondary mb-6 leading-relaxed">
                          {item.content}
                        </p>

                        <h4 className="font-serif font-bold text-text-primary mb-4">
                          Pro Tips:
                        </h4>
                        <ul className="space-y-3">
                          {item.tips.map((tip, tipIndex) => (
                            <motion.li
                              key={tipIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: tipIndex * 0.05,
                              }}
                              className="flex items-start gap-3 font-sans text-sm text-text-secondary"
                            >
                              <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              {tip}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Itineraries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 to-sand/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="font-serif text-3xl font-bold text-text-primary mb-4">
            Pre-Planned Itineraries
          </h3>
          <p className="font-sans text-text-secondary mb-8">
            Don&apos;t know where to start? Choose from our curated itineraries designed by local experts.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: '3-Day Beach Escape',
                description: 'Perfect for weekend getaway with beaches, water sports, and relaxation',
              },
              {
                title: '5-Day Culture & Heritage',
                description: 'Deep dive into history, temples, forts, and archaeological sites',
              },
              {
                title: '7-Day Adventure Circuit',
                description: 'Complete Konkan experience with trekking, rafting, wildlife, and cuisine',
              },
            ].map((itinerary, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg p-6 border border-primary-light/30 hover:border-primary-light/60 transition-colors cursor-pointer"
              >
                <h4 className="font-serif font-bold text-text-primary mb-2">
                  {itinerary.title}
                </h4>
                <p className="font-sans text-sm text-text-secondary">
                  {itinerary.description}
                </p>
                <button className="mt-4 font-sans text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
                  View Itinerary →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-text-secondary mb-6">
            Need personalized trip planning assistance?
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-full font-sans font-bold text-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg">
            Get Expert Travel Advice
          </button>
        </motion.div>
      </div>
    </section>
  )
}

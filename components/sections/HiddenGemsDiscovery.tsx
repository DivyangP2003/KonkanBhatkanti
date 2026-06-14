'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Sparkles, MapPin, Users } from 'lucide-react'

const hiddenGems = [
  {
    name: 'Puri Hills',
    category: 'Scenic Viewpoint',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Panoramic viewpoint with sunset views over valleys',
    crowdLevel: 'Very Low',
    bestFor: 'Photography, Solitude',
  },
  {
    name: 'Amboli Waterfall',
    category: 'Nature Attraction',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Hidden waterfall with trekking trail through lush forests',
    crowdLevel: 'Low',
    bestFor: 'Trekking, Nature',
  },
  {
    name: 'Vijaydurg Beach',
    category: 'Beach',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop',
    description: 'Serene untouched beach with pristine sand and calm waters',
    crowdLevel: 'Very Low',
    bestFor: 'Swimming, Meditation',
  },
  {
    name: 'Phonda Fort',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Ancient ruins offering archaeological insights and nature trails',
    crowdLevel: 'Low',
    bestFor: 'History, Exploration',
  },
  {
    name: 'Vengurla Rocks',
    category: 'Marine Attraction',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Rocky formations home to sea birds and marine life',
    crowdLevel: 'Low',
    bestFor: 'Bird Watching, Marine Life',
  },
  {
    name: 'Bakal Village',
    category: 'Village Life',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Authentic village experience with local cuisine and traditions',
    crowdLevel: 'Very Low',
    bestFor: 'Cultural Immersion, Homestays',
  },
  {
    name: 'Murud Beach Cave',
    category: 'Adventure',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Cave exploration with beach access and historical significance',
    crowdLevel: 'Low',
    bestFor: 'Adventure, Exploration',
  },
  {
    name: 'Sawantwadi Palace',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Heritage palace showcasing Indo-Portuguese architecture',
    crowdLevel: 'Low',
    bestFor: 'Architecture, History',
  },
  {
    name: 'Dapoli Beach Markets',
    category: 'Culture',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop',
    description: 'Local markets with handicrafts, spices, and authentic food',
    crowdLevel: 'Low',
    bestFor: 'Shopping, Local Food',
  },
]

export default function HiddenGemsDiscovery() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="hidden-gems" className="py-20 px-4 md:px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
            <Sparkles size={16} />
            Off the Beaten Path
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-4 mb-4">
            Hidden Gems & Secret Spots
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-2xl mx-auto">
            Discover lesser-known treasures that showcase the authentic beauty and culture of Konkan, away from the crowds.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hiddenGems.map((gem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                index === 0 || index === 5 ? 'lg:col-span-1 lg:row-span-1' : ''
              }`}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-primary-light">
                <Image
                  src={gem.image}
                  alt={gem.name}
                  fill
                  className="object-cover group-hover:scale-125 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {gem.category}
                  </span>
                </div>

                {/* Crowd Level Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Users size={14} className="text-primary" />
                  <span className="text-xs font-medium text-text-primary">{gem.crowdLevel}</span>
                </div>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl font-bold mb-2">{gem.name}</h3>
                <p className="font-sans text-sm text-white/90 mb-4">{gem.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="font-sans text-xs font-semibold text-white/70">
                    Best for: {gem.bestFor}
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="text-sand"
                  >
                    →
                  </motion.div>
                </div>
              </div>

              {/* Hover State - Light Background Card */}
              <motion.div
                className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Map CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <MapPin size={40} className="mx-auto mb-4" />
          <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Explore Interactive Map
          </h3>
          <p className="font-sans text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Discover all hidden gems on our interactive map. Filter by activity, season, crowd level, and start your adventure.
          </p>
          <button className="px-8 py-3 bg-sand text-primary rounded-full font-sans font-bold hover:bg-sand/90 transition-colors duration-300">
            View Interactive Map
          </button>
        </motion.div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="font-serif text-2xl font-bold text-text-primary mb-3">
            Get Updates on New Discoveries
          </h3>
          <p className="font-sans text-text-secondary mb-6 max-w-xl mx-auto">
            Subscribe to our newsletter to get exclusive hidden gems recommendations and travel tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full border border-primary-light/50 focus:outline-none focus:border-primary bg-white"
            />
            <button className="px-6 py-3 bg-primary text-white rounded-full font-sans font-bold hover:bg-primary-dark transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

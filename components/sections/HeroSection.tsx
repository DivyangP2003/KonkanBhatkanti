'use client'

import { motion } from 'framer-motion'
import { ChevronDown, MapPin } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-primary to-primary-light/30 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '-10%', left: '-5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-primary-light/30 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, -80, 80, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-6">
          <MapPin size={20} className="text-sand" />
          <span className="text-sm md:text-base font-sans font-medium text-sand tracking-wider uppercase">
            Welcome to Konkan
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Discover the Soul of{' '}
          <span className="relative">
            <span className="relative z-10">Konkan</span>
            <motion.span
              className="absolute bottom-2 left-0 right-0 h-3 bg-sand/40 -z-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto font-sans leading-relaxed"
        >
          From pristine beaches and ancient monuments to vibrant festivals and hidden mountain hideaways. Explore the richness of culture, heritage, adventure, and natural beauty all in one enchanting destination.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="#destinations">
            <button className="px-8 py-4 bg-sand text-primary-dark rounded-full font-sans font-bold text-lg hover:bg-sand/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Start Exploring
            </button>
          </Link>
          <Link href="#planning">
            <button className="px-8 py-4 border-2 border-sand text-sand rounded-full font-sans font-bold text-lg hover:bg-sand hover:text-primary-dark transition-all duration-300">
              Plan Your Trip
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-sand" />
        </motion.div>
      </motion.div>
    </section>
  )
}

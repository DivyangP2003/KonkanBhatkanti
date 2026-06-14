'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

interface HeroSlide {
  id: number
  title: string
  description: string
  badge: string
  image: string
  category: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    title: 'Historic Forts & Heritage',
    description: 'Explore magnificent forts and ancient temples that tell the rich history of the Konkan region.',
    badge: 'Journey Through Time',
    image: '/images/hero-historic-forts.png',
    category: 'Heritage',
  },
  {
    id: 2,
    title: 'Thrilling Adventure Sports',
    description: 'Experience trekking, scuba diving, river rafting, and other exciting adventures along the Konkan coast.',
    badge: 'For the Adrenaline Junkie',
    image: '/images/hero-adventure-sports.png',
    category: 'Adventure',
  },
  {
    id: 3,
    title: 'Art & Cultural Heritage',
    description: 'Discover traditional Warli art, folk crafts, and the vibrant cultural expressions of Konkan communities.',
    badge: 'Celebrate Creativity',
    image: '/images/hero-culture-arts.png',
    category: 'Artisan',
  },
  {
    id: 4,
    title: 'Authentic Konkan Cuisine',
    description: 'Savor traditional seafood delicacies, coconut-based curries, and authentic flavors of the coast.',
    badge: 'A Culinary Journey',
    image: '/images/hero-cuisine.png',
    category: 'Cuisine',
  },
]

const CATEGORIES = [
  'Beaches',
  'Heritage',
  'Adventure',
  'Artisan',
  'Wildlife',
  'Cuisine',
  'Festivals',
  'Village Life',
  'Monsoon',
  'Backwaters',
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [autoPlay])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % HERO_SLIDES.length)
  }

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const slide = HERO_SLIDES[currentSlide]

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover"
            unoptimized
          />

          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6">
        <motion.div
          key={`badge-${currentSlide}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 px-4 py-2 border border-accent rounded-lg text-accent text-sm font-medium"
        >
          {slide.badge}
        </motion.div>

        <motion.h1
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white text-center mb-6 max-w-4xl leading-tight"
        >
          {slide.title}
        </motion.h1>

        <motion.p
          key={`desc-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-white/90 text-center max-w-2xl font-sans"
        >
          {slide.description}
        </motion.p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Category Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black via-black/70 to-transparent pt-12 pb-8 px-4"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          {CATEGORIES.map((cat, idx) => (
            <div key={cat} className="flex items-center">
              <button
                onClick={() => {
                  const categoryIndex = HERO_SLIDES.findIndex(
                    (s) => s.category === cat
                  )
                  if (categoryIndex !== -1) {
                    goToSlide(categoryIndex)
                  }
                }}
                className={`font-sans font-medium transition-colors ${
                  slide.category === cat
                    ? 'text-accent'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {cat}
              </button>
              {idx < CATEGORIES.length - 1 && (
                <span className="ml-4 sm:ml-6 text-white/30">|</span>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 sm:bottom-32 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentSlide
                ? 'w-8 bg-accent'
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

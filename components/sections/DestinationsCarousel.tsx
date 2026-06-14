'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import DestinationCard from '@/components/ui/DestinationCard'

const destinations = [
  {
    name: 'Alibaug Beach',
    description: 'Pristine white sand beaches with coconut palms and colonial fort ruins',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    category: 'Beach',
    rating: 4.8,
    bestFor: ['Swimming', 'Photography', 'Relaxation'],
  },
  {
    name: 'Mahabaleshwar',
    description: 'Hill station with strawberry farms, temples, and panoramic viewpoints',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Hill Station',
    rating: 4.7,
    bestFor: ['Trekking', 'Sightseeing', 'Adventure'],
  },
  {
    name: 'Sindhudurg Fort',
    description: 'Historic sea fort with 400+ years of history and breathtaking ocean views',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Heritage',
    rating: 4.6,
    bestFor: ['History', 'Photography', 'Heritage'],
  },
  {
    name: 'Kolad Village',
    description: 'Adventure hub for rafting, camping, and riverside exploration',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Adventure',
    rating: 4.5,
    bestFor: ['Rafting', 'Camping', 'Adventure'],
  },
  {
    name: 'Ganpatipule Beach',
    description: 'Sacred beach with temple and pristine waters for spiritual rejuvenation',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop',
    category: 'Spiritual',
    rating: 4.7,
    bestFor: ['Spiritual', 'Beach', 'Meditation'],
  },
  {
    name: 'Chikhaldara Wildlife Sanctuary',
    description: 'Biodiverse sanctuary home to leopards, tigers, and rare bird species',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Wildlife',
    rating: 4.6,
    bestFor: ['Wildlife', 'Trekking', 'Nature'],
  },
  {
    name: 'Panhala Fort',
    description: 'Ancient fort with museum, temples, and commanding views over valleys',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Heritage',
    rating: 4.7,
    bestFor: ['History', 'Trekking', 'Views'],
  },
  {
    name: 'Jyotiba Temple, Kolhapur',
    description: 'Ancient mountaintop temple with golden dome and panoramic town views',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    category: 'Spiritual',
    rating: 4.8,
    bestFor: ['Spiritual', 'Architecture', 'Photography'],
  },
]

export default function DestinationsCarousel() {
  const scrollContainer = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = 400
      scrollContainer.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="destinations" className="py-20 px-4 md:px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className="text-primary font-sans text-sm font-semibold uppercase tracking-wider">
            Popular Destinations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mt-2 mb-4">
            Explore Konkan&apos;s Iconic Spots
          </h2>
          <p className="font-sans text-lg text-text-secondary max-w-2xl">
            From pristine beaches to ancient heritage sites, discover the most visited and beloved destinations that showcase the true essence of Konkan.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Scroll Container */}
          <div
            ref={scrollContainer}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DestinationCard {...destination} />
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/3 -translate-y-1/2 -ml-6 z-20 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-lg"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/3 -translate-y-1/2 -mr-6 z-20 bg-primary text-white p-3 rounded-full hover:bg-primary-dark transition-colors duration-200 shadow-lg"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-sans font-bold hover:bg-primary hover:text-white transition-all duration-300">
            View All Destinations
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Star } from 'lucide-react'

interface DestinationCardProps {
  name: string
  description: string
  image: string
  category: string
  rating: number
  bestFor: string[]
}

export default function DestinationCard({
  name,
  description,
  image,
  category,
  rating,
  bestFor,
}: DestinationCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex-shrink-0 group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl h-80 shadow-lg">
        {/* Image */}
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-primary text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <Star size={16} className="text-sand fill-sand" />
          <span className="text-sm font-semibold text-text-primary">{rating}</span>
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <h3 className="font-serif text-2xl font-bold mb-2">{name}</h3>
          <p className="text-sm font-sans text-white/80 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {description}
          </p>

          {/* Best For Tags */}
          <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {bestFor.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-primary/80 px-2 py-1 rounded-full text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Info */}
      <div className="mt-4">
        <h3 className="font-serif text-lg font-bold text-text-primary mb-1">{name}</h3>
        <p className="font-sans text-sm text-text-secondary line-clamp-2">{description}</p>
      </div>
    </motion.div>
  )
}

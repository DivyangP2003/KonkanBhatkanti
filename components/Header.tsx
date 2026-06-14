'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Heritage', href: '#heritage' },
    { label: 'Trip Planning', href: '#planning' },
    { label: 'Hidden Gems', href: '#hidden-gems' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-cream border-b border-primary-light/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">K</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="font-serif font-bold text-primary-dark text-lg">Konkan</h1>
            <p className="font-sans text-xs text-primary uppercase tracking-wider">Bhatkanti</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-6 py-2 bg-primary text-white rounded-full font-sans text-sm font-medium hover:bg-primary-dark transition-colors duration-200">
            Plan Your Trip
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-primary-light/20 bg-cream">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full px-6 py-2 bg-primary text-white rounded-full font-sans text-sm font-medium hover:bg-primary-dark transition-colors duration-200">
              Plan Your Trip
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}

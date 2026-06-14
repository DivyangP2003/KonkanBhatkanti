'use client'

import Link from 'next/link'
import { Share2, Heart, MessageCircle, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    explore: [
      { label: 'Destinations', href: '#' },
      { label: 'Experiences', href: '#' },
      { label: 'Heritage Sites', href: '#' },
      { label: 'Hidden Gems', href: '#' },
    ],
    resources: [
      { label: 'Trip Planning Guide', href: '#' },
      { label: 'Travel Tips', href: '#' },
      { label: 'Itineraries', href: '#' },
      { label: 'Blog', href: '#' },
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <span className="text-primary-dark font-serif font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Konkan</h3>
                <p className="font-sans text-xs tracking-wider">Bhatkanti</p>
              </div>
            </Link>
            <p className="font-sans text-sm text-white/70 mt-4 leading-relaxed">
              Discover the soul of Konkan through culture, heritage, adventure, and natural beauty.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Explore</h4>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-sans text-sm text-white/70 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-primary-light mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-white/70">+91 (XXX) XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-primary-light mt-1 flex-shrink-0" />
                <a href="mailto:info@konkanbhatkanti.com" className="font-sans text-sm text-white/70 hover:text-white transition-colors break-all">
                  info@konkanbhatkanti.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-light mt-1 flex-shrink-0" />
                <span className="font-sans text-sm text-white/70">Konkan, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="text-white/70 hover:text-primary-light transition-colors" aria-label="Facebook">
              <Share2 size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-primary-light transition-colors" aria-label="Instagram">
              <Heart size={20} />
            </a>
            <a href="#" className="text-white/70 hover:text-primary-light transition-colors" aria-label="Twitter">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-sans text-sm text-white/50">
            © {currentYear} Konkan Bhatkanti. All rights reserved. Made with love for Konkan.
          </p>
        </div>
      </div>
    </footer>
  )
}

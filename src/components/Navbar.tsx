'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bella-dark/90 backdrop-blur-md border-b border-gray-800/50">
      <div className="bella-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative">
              <Image
                src="/images/logo1.jpg"
                alt="Bella Genesis"
                width={40}
                height={40}
                className="rounded-full border-2 border-bella-gold"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-xl font-bold bella-gradient-text">
                Bella Genesis
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-bella-blue to-bella-purple transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <a
              href="https://t.me/bella941_mkt"
              target="_blank"
              rel="noopener noreferrer"
              className="bella-button-primary"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-bella-gray/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-bella-dark/95 backdrop-blur-md border-b border-gray-800/50">
            <div className="flex flex-col space-y-4 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white font-medium py-2 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://t.me/bella941_mkt"
                target="_blank"
                rel="noopener noreferrer"
                className="bella-button-primary w-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

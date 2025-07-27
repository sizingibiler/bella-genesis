'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Send, Mail, Twitter, ExternalLink, Zap } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: 'Twitter Packages', href: '/services/twitter' },
      { label: 'Solana Projects', href: '/services/solana' },
      { label: 'Exchange Listings', href: '/services/exchange-listings' },
      { label: 'Trending Listings', href: '/services/trending-listings' },
    ],
    Company: [
      { label: 'About Us', href: '/about' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Partners', href: '/partners' },
      { label: 'Contact', href: '/contact' },
    ],
    Resources: [
      { label: 'Apply Now', href: '/apply' },
      { label: 'Partnership', href: '/partners' },
      { label: 'Support', href: 'https://t.me/Bella941', external: true as boolean },
    ]
  }

  const socialLinks = [
    {
      name: 'Telegram',
      href: 'https://t.me/Bella941',
      icon: <Send className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter/X',
      href: 'https://x.com/Bellamkt941',
      icon: <Twitter className="w-5 h-5" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:bellagenesis.contact@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:text-red-400'
    }
  ]

  return (
    <footer className="bg-bella-dark border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="bella-container py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo1.jpg"
                alt="Bella Genesis"
                width={48}
                height={48}
                className="rounded-full border-2 border-bella-gold"
              />
              <div>
                <h3 className="font-display text-xl font-bold bella-gradient-text">
                  Bella Genesis
                </h3>
                <p className="text-sm text-bella-gold">#GENMode</p>
              </div>
            </Link>
            
            <p className="bella-text mb-6 leading-relaxed">
              New generation power. New generation marketing. Building the future of crypto 
              with visionary projects that create real impact.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center w-10 h-10 bg-bella-gray/50 rounded-lg transition-all duration-300 hover:bg-bella-gray hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {(link as any).external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bella-text hover:text-bella-blue transition-colors duration-200 flex items-center group"
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="bella-text hover:text-bella-blue transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-2xl border border-bella-purple/20 text-center">
          <div className="flex items-center justify-center mb-4">
            <Zap className="w-6 h-6 text-bella-gold mr-2" />
            <h3 className="text-2xl font-bold text-white">Ready to Go #GENMode?</h3>
          </div>
          <p className="bella-text mb-6 max-w-2xl mx-auto">
            Join hundreds of successful projects that trusted Bella Genesis for their marketing needs.
          </p>
          <a
            href="https://t.me/Bella941?text=Hello, I'm ready to discuss my project and explore #GENMode opportunities!"
            target="_blank"
            rel="noopener noreferrer"
            className="bella-button-primary"
          >
            <Send className="w-5 h-5 mr-2" />
            Start Your Journey
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50">
        <div className="bella-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <p>&copy; {currentYear} Bella Genesis. All rights reserved.</p>
              <span className="text-bella-gold font-medium">#GENMode</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <p className="text-sm text-gray-400">
                Built with <span className="text-red-400">♥</span> for the future
              </p>
              <div className="flex items-center space-x-2 text-sm text-bella-blue">
                <Zap className="w-4 h-4" />
                <span>Always Innovating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

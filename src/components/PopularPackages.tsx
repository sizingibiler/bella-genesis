'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Twitter, TrendingUp, Sparkles } from 'lucide-react'

export default function PopularPackages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const section = document.getElementById('popular-packages')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const packages = [
    {
      icon: <Twitter className="w-8 h-8" />,
      title: "Twitter Packages",
      description: "Professional Twitter/X promotion campaigns with high-engagement influencers",
      features: ["10-14 Influencers", "Verified Accounts", "Targeted Audience", "Real Engagement"],
      color: "from-blue-500 to-blue-600",
      link: "/services/twitter",
      badge: "Most Popular"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Exchange Listings",
      description: "Direct support for listing your project on major centralized exchanges",
      features: ["16+ Exchanges", "Direct Contacts", "Fast Process", "Professional Support"],
      color: "from-green-500 to-emerald-600",
      link: "/services/trending-listings",
      badge: "Hot"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Solana VIP Package",
      description: "Premium promotion for Solana projects with comprehensive marketing",
      features: ["20 KOLs", "6 Influencers", "DEX Trending", "Full Coverage"],
      color: "from-bella-gold to-yellow-500",
      link: "/services/solana",
      badge: "VIP",
      isVip: true
    }
  ]

  const generateTelegramLink = (packageType: string) => {
    const codes = {
      'Twitter Packages': 'TW-PKG01',
      'Exchange Listings': 'EX-LIST01',
      'Solana VIP Package': 'SOL-VIP01'
    }
    const code = codes[packageType as keyof typeof codes] || 'GEN-01'
    return `https://t.me/bella941_mkt?text=Hello, I'd like more information about the ${packageType} (Code: ${code})`
  }

  return (
    <section id="popular-packages" className="bella-section bg-gradient-to-b from-bella-dark to-bella-gray/20">
      <div className="bella-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="bella-heading">Popular Packages</h2>
          <p className="bella-text text-xl max-w-3xl mx-auto">
            Discover our most requested services that have helped hundreds of projects 
            achieve remarkable success in the crypto space.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute -top-4 left-6 z-10 px-4 py-2 rounded-full text-sm font-bold ${
                  pkg.isVip 
                    ? 'bg-gradient-to-r from-bella-gold to-yellow-500 text-bella-dark' 
                    : 'bg-gradient-to-r from-bella-blue to-bella-purple text-white'
                }`}>
                  {pkg.badge}
                </div>
              )}

              {/* Card */}
              <div className={`${
                pkg.isVip ? 'bella-card-vip' : 'bella-card-hover'
              } h-full flex flex-col relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-full mb-6`}>
                    <div className="text-white">
                      {pkg.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-white mb-4">{pkg.title}</h3>
                  <p className="bella-text mb-6 flex-grow">{pkg.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <ul className="space-y-2">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${pkg.color} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                    <a
                      href={pkg.link}
                      className="bella-button-secondary flex-1 text-center group-hover:scale-105 transition-transform"
                    >
                      View Details
                    </a>
                    <a
                      href={generateTelegramLink(pkg.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bella-button flex-1 text-center bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg transition-all group-hover:scale-105`}
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-2xl p-8 border border-bella-blue/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Something Custom?
            </h3>
            <p className="bella-text mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us to create a tailored marketing strategy 
              that perfectly fits your vision and goals.
            </p>
            <a
              href="https://t.me/bella941_mkt?text=Hello, I'd like to discuss a custom marketing package for my project."
              target="_blank"
              rel="noopener noreferrer"
              className="bella-button-primary"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Discuss Custom Package
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

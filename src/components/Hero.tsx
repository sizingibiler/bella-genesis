'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Star, Zap } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-bella-dark via-bella-dark to-bella-gray/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(74,144,226,0.1)_0%,_transparent_50%)]"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-bella-blue rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-bella-purple rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-bella-gold rounded-full animate-pulse delay-2000"></div>

      <div className="bella-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="w-6 h-6 text-bella-gold" />
              <span className="text-bella-gold font-semibold text-sm uppercase tracking-wider">
                #GENMODE
              </span>
            </div>
            
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bella-gradient-text">Bella</span>{' '}
              <span className="text-white">Genesis</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-bella-gold font-semibold mb-4">
                We're building for the future.
              </p>
              <p className="bella-text text-lg md:text-xl leading-relaxed">
                A strategy brand focused on projects that create value in the crypto world. 
                Not hype, but real impact. A startup that makes a difference with its listings, 
                trending campaigns, and #GENMode vision.
              </p>
            </div>

            <div className="mb-8 p-6 bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-xl border border-bella-purple/20">
              <p className="text-bella-blue font-medium text-lg">
                → Bella Genesis – New generation power. New generation marketing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://t.me/Bella941"
                target="_blank"
                rel="noopener noreferrer"
                className="bella-button-primary group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/services"
                className="bella-button-secondary"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 mt-12">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-bella-gold fill-current" />
                  ))}
                </div>
                <p className="text-sm text-gray-400">Trusted by Projects</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold bella-gradient-text">24/7</p>
                <p className="text-sm text-gray-400">Support</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold bella-gradient-text">100+</p>
                <p className="text-sm text-gray-400">Successful Campaigns</p>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-bella-blue/20 to-bella-purple/20 rounded-full blur-3xl scale-110"></div>
              
              {/* Avatar Container */}
              <div className="relative floating">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  <div className="absolute inset-0 bg-gradient-to-r from-bella-gold to-bella-purple rounded-full p-1">
                    <div className="w-full h-full bg-bella-dark rounded-full p-2">
                      <Image
                        src="/images/logo1.jpg"
                        alt="Bella Genesis Avatar"
                        fill
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-bella-gold rounded-full flex items-center justify-center animate-pulse">
                    <Zap className="w-4 h-4 text-bella-dark" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-bella-blue rounded-full animate-bounce delay-1000"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-bella-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-bella-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

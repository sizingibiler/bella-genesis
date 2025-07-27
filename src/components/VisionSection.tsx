'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Target, Eye, Heart, Zap } from 'lucide-react'

export default function VisionSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const section = document.getElementById('vision')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Focus",
      description: "We don't just follow trends, we set them. Our strategic approach ensures every campaign delivers measurable impact."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Visionary Thinking",
      description: "Looking beyond the present, we anticipate future market movements and position projects for long-term success."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Impact",
      description: "Real results, not just numbers. We believe in creating genuine value and lasting relationships in the crypto space."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "#GENMode Energy",
      description: "Our unique approach combines innovation, dedication, and the relentless pursuit of excellence in everything we do."
    }
  ]

  return (
    <section id="vision" className="bella-section bg-gradient-to-b from-bella-dark to-bella-gray/20">
      <div className="bella-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="mb-8">
              <h2 className="bella-heading">Our Vision</h2>
              <p className="bella-text text-xl leading-relaxed">
                We're building for the future. A strategy brand focused on projects that create 
                value in the crypto world. Not hype, but real impact.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-xl p-6 border border-bella-purple/20">
                <h3 className="text-xl font-bold text-bella-gold mb-3">Our Mission</h3>
                <p className="bella-text">
                  To empower visionary crypto projects with cutting-edge marketing strategies 
                  that drive genuine growth, community engagement, and sustainable success.
                </p>
              </div>

              <div className="bg-gradient-to-r from-bella-gray/30 to-bella-blue/10 rounded-xl p-6 border border-bella-blue/20">
                <h3 className="text-xl font-bold text-bella-blue mb-3">What Makes Us Different</h3>
                <p className="bella-text">
                  We reject mediocrity and embrace #GENMode - a mindset of innovation, 
                  excellence, and unwavering commitment to our clients' success.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Avatar with Stats */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative">
              {/* Main Avatar */}
              <div className="relative floating">
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-bella-blue/20 to-bella-purple/20 rounded-full blur-3xl"></div>
                  <div className="relative w-full h-full bg-gradient-to-r from-bella-gold to-bella-purple rounded-full p-1">
                    <div className="w-full h-full bg-bella-dark rounded-full p-2">
                      <Image
                        src="/images/logo2.jpg"
                        alt="Bella Genesis Vision"
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-8 -left-8 bg-bella-gray/90 backdrop-blur-sm rounded-xl p-4 border border-bella-blue/30">
                <div className="text-center">
                  <p className="text-2xl font-bold bella-gradient-text">500+</p>
                  <p className="text-sm text-gray-300">Projects Served</p>
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-bella-gray/90 backdrop-blur-sm rounded-xl p-4 border border-bella-purple/30">
                <div className="text-center">
                  <p className="text-2xl font-bold text-bella-gold">24/7</p>
                  <p className="text-sm text-gray-300">Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-20">
          <div className={`text-center mb-16 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="bella-subheading">Our Core Values</h3>
            <p className="bella-text max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bella-card-hover text-center transition-all duration-1000 delay-${700 + index * 100} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-6">
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-4">
                  {value.title}
                </h4>
                
                <p className="bella-text text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

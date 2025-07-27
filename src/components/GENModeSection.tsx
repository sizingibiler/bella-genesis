'use client'

import { useState, useEffect } from 'react'
import { Zap, Target, Lightbulb, TrendingUp } from 'lucide-react'

export default function GENModeSection() {
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

    const section = document.getElementById('genmode-section')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Vision-Driven",
      description: "For those who reject mediocrity and have a clear vision for the future."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Not just following trends, but creating them with innovative strategies."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Industry Impact",
      description: "Making a real mark on the industry with measurable results."
    }
  ]

  return (
    <section id="genmode-section" className="bella-section bg-bella-dark">
      <div className="bella-container">
        <div className="text-center mb-16">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Header */}
            <div className="flex items-center justify-center space-x-3 mb-8">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-400 rounded-full pulse-glow">
                <Zap className="w-8 h-8 text-bella-dark" />
              </div>
              <h2 className="font-display text-5xl md:text-6xl font-bold bella-gradient-text">
                #GENMode
              </h2>
            </div>

            {/* Main Description */}
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                #GENMode is a mode for those who reject mediocrity, those with vision, 
                and those who want to make their mark on the industry.
              </p>
              
              <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-2xl p-8 border border-bella-purple/20">
                <p className="text-lg md:text-xl text-bella-blue font-medium">
                  It's not just a hashtag; it's a mindset, a movement, a vision for the future.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bella-card-hover text-center transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-6">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="bella-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-bella-dark via-bella-gray/20 to-bella-dark rounded-2xl p-8 border border-bella-gold/20">
            <h3 className="text-2xl md:text-3xl font-bold text-bella-gold mb-4">
              Ready to Enter #GENMode?
            </h3>
            <p className="bella-text mb-6 max-w-2xl mx-auto">
              Join the movement of visionary projects that are shaping the future of crypto. 
              Let's build something extraordinary together.
            </p>
            <a
              href="https://t.me/Bella941"
              target="_blank"
              rel="noopener noreferrer"
              className="bella-button-gold"
            >
              <Zap className="w-5 h-5 mr-2" />
              Activate #GENMode
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

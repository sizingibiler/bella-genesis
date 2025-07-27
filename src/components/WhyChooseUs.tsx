'use client'

import { useState, useEffect } from 'react'
import { Shield, Clock, Users, Trophy, Zap, ArrowRight } from 'lucide-react'

export default function WhyChooseUs() {
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

    const section = document.getElementById('why-choose-us')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const advantages = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "500+ successful campaigns with measurable results and satisfied clients across the crypto ecosystem.",
      stats: "500+ Projects"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Dedicated Support",
      description: "Round-the-clock support and communication. Your success is our priority, anytime, anywhere.",
      stats: "24/7 Available"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Network",
      description: "Access to premium KOLs, influencers, and industry connections that others simply don't have.",
      stats: "100+ Partners"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Industry Leaders",
      description: "Recognized as innovators in crypto marketing with cutting-edge strategies and #GENMode approach.",
      stats: "#1 Choice"
    }
  ]

  const testimonials = [
    {
      quote: "Bella Genesis transformed our project launch. Their #GENMode approach delivered results beyond our expectations.",
      author: "DeFi Project Founder",
    },
    {
      quote: "Professional, reliable, and incredibly effective. The team's strategic insight made all the difference.",
      author: "Solana Project Lead",
    },
    {
      quote: "Best marketing investment we ever made. Bella Genesis doesn't just promise results - they deliver them.",
      author: "NFT Collection Creator",
    }
  ]

  return (
    <section id="why-choose-us" className="bella-section bg-bella-dark">
      <div className="bella-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="bella-heading">Why Choose Bella Genesis?</h2>
          <p className="bella-text text-xl max-w-3xl mx-auto">
            We don't just provide services - we deliver transformation. Here's what sets us apart 
            from the competition.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`bella-card-hover relative overflow-hidden transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-bella-blue/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="relative z-10">
                {/* Icon & Stats */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full">
                    <div className="text-white">
                      {advantage.icon}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold bella-gradient-text">{advantage.stats}</p>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="bella-text leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className={`transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className="bella-subheading">What Our Clients Say</h3>
            <p className="bella-text">Real testimonials from real projects that achieved real success.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-bella-gray/30 to-bella-purple/10 rounded-xl p-8 border border-bella-purple/20 hover:border-bella-purple/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="flex text-bella-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-xl">★</span>
                    ))}
                  </div>
                  <p className="bella-text italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <p className="text-bella-blue font-semibold">{testimonial.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-2xl p-12 border border-bella-gold/20">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-bella-gold mr-3" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Experience the Difference?</h3>
            </div>
            
            <p className="bella-text text-xl mb-8 max-w-3xl mx-auto">
              Join hundreds of successful projects that chose Bella Genesis. 
              Let's discuss how we can elevate your project to new heights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/bella941_mkt?text=Hello, I'd like to learn more about Bella Genesis and how you can help my project succeed!"
                target="_blank"
                rel="noopener noreferrer"
                className="bella-button-gold group"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/services"
                className="bella-button-secondary"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

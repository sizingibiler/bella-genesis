'use client'

import { useState, useEffect } from 'react'
import { Send, Mail, Twitter, ExternalLink, Clock, MapPin, Phone, Zap } from 'lucide-react'

export default function ContactInfo() {
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

    const section = document.getElementById('contact-info')
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const contactMethods = [
    {
      icon: <Send className="w-8 h-8" />,
      title: "Telegram",
      description: "Our primary communication channel. Fast, secure, and always available.",
      contact: "@bella941_mkt",
      link: "https://t.me/bella941_mkt",
      color: "from-blue-500 to-blue-600",
      badge: "Recommended"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      description: "For detailed discussions and formal communications.",
      contact: "bellagenesis.contact@gmail.com",
      link: "mailto:bellagenesis.contact@gmail.com",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Twitter className="w-8 h-8" />,
      title: "Twitter/X",
      description: "Follow us for updates, insights, and industry news.",
      contact: "@Bellamkt941",
      link: "https://x.com/Bellamkt941",
      color: "from-sky-500 to-sky-600"
    }
  ]

  const quickInfo = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Availability",
      info: "24/7 Support"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Coverage",
      info: "Global Services"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Response Time",
      info: "< 1 Hour Average"
    }
  ]

  return (
    <section id="contact-info" className="bella-section bg-gradient-to-b from-bella-dark to-bella-gray/20">
      <div className="bella-container">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="bella-heading">Contact Information</h2>
          <p className="bella-text text-xl max-w-3xl mx-auto">
            Choose your preferred way to reach us. We're committed to providing fast, 
            professional responses to all inquiries.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* Badge */}
              {method.badge && (
                <div className="absolute -top-4 left-6 z-10 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-bella-gold to-yellow-500 text-bella-dark">
                  {method.badge}
                </div>
              )}

              {/* Card */}
              <div className="bella-card-hover h-full relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${method.color} rounded-full mb-6`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{method.title}</h3>
                  <p className="bella-text mb-6 leading-relaxed">{method.description}</p>

                  {/* Contact Info */}
                  <div className="mb-6">
                    <div className="bg-bella-gray/30 rounded-lg p-4 border border-gray-600/30">
                      <p className="text-bella-blue font-mono text-lg">{method.contact}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bella-button w-full bg-gradient-to-r ${method.color} text-white hover:shadow-lg transition-all group-hover:scale-105 flex items-center justify-center`}
                  >
                    <span>Contact via {method.title}</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Info */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {quickInfo.map((info, index) => (
            <div key={index} className="bella-card text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-4">
                <div className="text-white">
                  {info.icon}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{info.title}</h4>
              <p className="text-bella-blue font-medium">{info.info}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-2xl p-12 border border-bella-gold/20">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-bella-gold mr-3" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">Ready to Start?</h3>
            </div>
            
            <p className="bella-text text-xl mb-8 max-w-3xl mx-auto">
              Don't wait - the crypto market moves fast. Contact us now to discuss your project 
              and discover how #GENMode can accelerate your success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/bella941_mkt?text=Hello! I'm interested in learning more about Bella Genesis services. Can we discuss my project?"
                target="_blank"
                rel="noopener noreferrer"
                className="bella-button-gold group"
              >
                <Send className="w-5 h-5 mr-2" />
                <span>Start Conversation</span>
              </a>
              <a
                href="/services"
                className="bella-button-secondary"
              >
                Browse Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { MessageCircle, Users, Zap, ArrowRight, Star, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TelegramPage() {
  const packages = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Starter Package",
      description: "Perfect for new projects looking to build initial awareness",
      features: [
        "5 Telegram KOLs",
        "Simultaneous post sharing",
        "24-hour campaign duration",
        "Basic community engagement"
      ],
      color: "from-bella-blue to-bella-purple",
      code: "TG-STARTER"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Standard Package",
      description: "Balanced approach for growing projects seeking wider reach",
      features: [
        "10 Telegram KOLs",
        "Coordinated campaign timing",
        "Enhanced visibility boost",
        "Community growth support"
      ],
      color: "from-bella-purple to-pink-500",
      code: "TG-STANDARD"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Package",
      description: "Maximum impact for established projects",
      features: [
        "15 Telegram KOLs",
        "Strategic timing optimization",
        "Maximum community exposure",
        "Priority campaign support"
      ],
      color: "from-bella-gold to-yellow-500",
      code: "TG-PREMIUM"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-8">
                <MessageCircle className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="bella-heading mb-6">
                Telegram Marketing Services
              </h1>
              <p className="bella-text text-xl max-w-3xl mx-auto mb-8">
                Reach the crypto community where it matters most. Our Telegram KOL network 
                provides authentic engagement and targeted exposure for your project.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-blue mb-2">50+</div>
                  <div className="text-bella-light">Active KOLs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-gold mb-2">1M+</div>
                  <div className="text-bella-light">Combined Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-purple mb-2">24h</div>
                  <div className="text-bella-light">Campaign Duration</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-bella-light">Authentic Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Telegram Packages</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Choose the perfect package for your project's needs. All packages include 
                coordinated campaigns with verified KOLs.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {packages.map((pkg, index) => (
                <div key={index} className="bella-card-hover group">
                  <div className="bella-card h-full">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${pkg.color} rounded-xl mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {pkg.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{pkg.title}</h3>
                    <p className="bella-text mb-6">{pkg.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-white">Package Includes:</h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-blue rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="bg-bella-gray/20 rounded-lg p-3 text-center">
                        <span className="text-bella-gold font-mono text-sm">Code: {pkg.code}</span>
                      </div>
                      <a 
                        href={`https://t.me/Bella941?text=${pkg.code} package hakkında bilgi almak istiyorum`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bella-button-primary w-full flex items-center justify-center"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Custom Package */}
            <div className="max-w-4xl mx-auto">
              <div className="bella-card-hover">
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-bella-purple/10 border border-bella-gold/30">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full mx-auto mb-6">
                      <Users className="w-10 h-10 text-bella-dark" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-bella-gold mb-4">Custom Package</h3>
                    <p className="bella-text text-lg mb-6 max-w-2xl mx-auto">
                      Need something specific? We can create a tailored campaign based on your 
                      budget, target audience, and content requirements.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Custom KOL Count</div>
                        <div className="text-sm text-bella-light">Based on your needs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Flexible Budget</div>
                        <div className="text-sm text-bella-light">Tailored to your requirements</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Custom Duration</div>
                        <div className="text-sm text-bella-light">Extended campaigns available</div>
                      </div>
                    </div>

                    <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                      <span className="text-bella-gold font-mono text-sm">Code: TG-CUSTOM</span>
                    </div>
                    
                    <a 
                      href="https://t.me/Bella941?text=TG-CUSTOM package hakkında bilgi almak istiyorum"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bella-button-primary inline-flex items-center"
                    >
                      Discuss Custom Package
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">How It Works</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Our streamlined process ensures maximum impact for your Telegram marketing campaign.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-white mb-2">Choose Package</h3>
                <p className="bella-text text-sm">Select the package that fits your project's needs and budget</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-white mb-2">Contact Us</h3>
                <p className="bella-text text-sm">Send us a DM with your package code and project details</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-bella-dark font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-white mb-2">Campaign Setup</h3>
                <p className="bella-text text-sm">We coordinate with our KOL network and schedule your campaign</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="font-bold text-white mb-2">Go Live</h3>
                <p className="bella-text text-sm">Your campaign goes live across our KOL network simultaneously</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Ready to Amplify Your Reach?</h2>
              <p className="bella-text text-xl mb-8">
                Join hundreds of successful projects that have leveraged our Telegram KOL network 
                for authentic community growth and engagement.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/Bella941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center justify-center"
                >
                  Start Your Campaign
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <Link href="/contact" className="bella-button-secondary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
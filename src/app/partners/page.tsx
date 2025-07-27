'use client'

import { Users, TrendingUp, Globe, Zap, Target, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function PartnersPage() {
  const partnerTypes = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "KOL Network",
      description: "Influencers and content creators with engaged crypto audiences",
      benefits: [
        "Regular collaboration opportunities",
        "Competitive commission rates",
        "Exclusive campaign access",
        "Performance bonuses"
      ],
      color: "from-bella-blue to-bella-purple"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Marketing Agencies",
      description: "Complementary agencies for expanded service offerings",
      benefits: [
        "Referral partnerships",
        "Resource sharing",
        "Joint campaigns",
        "Market expansion"
      ],
      color: "from-bella-gold to-yellow-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Exchanges",
      description: "Trading platforms seeking quality project listings",
      benefits: [
        "Pre-qualified projects",
        "Marketing support",
        "Due diligence assistance",
        "Volume guarantees"
      ],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Tech Partners",
      description: "Development teams and blockchain infrastructure providers",
      benefits: [
        "Technical integrations",
        "Cross-promotion",
        "Product collaborations",
        "Ecosystem growth"
      ],
      color: "from-purple-600 to-pink-500"
    }
  ]

  const currentPartners = [
    {
      name: "Leading DeFi Protocol",
      type: "Strategic Partner",
      description: "Joint marketing campaigns and liquidity partnerships"
    },
    {
      name: "Top Tier Exchange",
      type: "Listing Partner", 
      description: "Streamlined listing process for qualified projects"
    },
    {
      name: "Crypto KOL Network",
      type: "Content Partners",
      description: "50+ verified influencers across multiple platforms"
    },
    {
      name: "Marketing Alliance",
      type: "Agency Network",
      description: "Collaborative campaigns and resource sharing"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container text-center">
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-8">
              <Users className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="bella-heading mb-6">
              Partner Network
            </h1>
            <p className="bella-text text-xl max-w-3xl mx-auto mb-12">
              Join forces with Bella Genesis and become part of the leading crypto marketing ecosystem. 
              Together, we can achieve exponential growth and success.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-bella-blue mb-2">50+</div>
                <div className="text-bella-light">Active Partners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bella-gold mb-2">100+</div>
                <div className="text-bella-light">Joint Campaigns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bella-purple mb-2">25M+</div>
                <div className="text-bella-light">Combined Reach</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-bella-light">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Partnership Opportunities</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                We welcome various types of strategic partnerships. Find the collaboration model 
                that best fits your organization and goals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bella-card-hover group">
                  <div className="bella-card h-full">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${type.color} rounded-xl mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {type.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{type.title}</h3>
                    <p className="bella-text mb-6">{type.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-white">Partner Benefits:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, i) => (
                          <li key={i} className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-blue rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DXC Foundation Partnership */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">DXC Foundation Partnership</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Strategic partnership providing real volume, direct investment, and proven impact for crypto projects.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-bella-gold mb-4">Real volume. Direct investment. Proven impact.</h3>
                  <p className="bella-text text-lg leading-relaxed">
                    The DXC Foundation, with its dedicated group of investors, offers a systematic investment 
                    structure that provides projects not only visibility but also direct capital and sustainable growth. 
                    Operating on a token-plus-equity model, this structure simultaneously fosters both organic growth 
                    and community support.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-bella-gray/30 to-bella-blue/10 rounded-xl p-6 border border-bella-blue/20">
                    <h4 className="text-xl font-bold text-bella-blue mb-3">Investment Model</h4>
                    <p className="bella-text mb-3">
                      Tokens received from the project are distributed to investors. Each investor contributes cash, 
                      tripling the total input.
                    </p>
                    <p className="text-bella-gold font-semibold">
                      Example: $30,000 in tokens → $90,000 total input
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-xl p-6 border border-bella-purple/20">
                    <h4 className="text-xl font-bold text-bella-purple mb-3">Community Support</h4>
                    <p className="bella-text">
                      Investors promote the project within their own communities, creating natural volume and engagement.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-bella-gray/30 to-bella-gold/10 rounded-xl p-6 border border-bella-gold/20">
                    <h4 className="text-xl font-bold text-bella-gold mb-3">Transparency</h4>
                    <p className="bella-text">
                      Purchases are documented with video/visual evidence and shared with the project team.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content - Logo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 md:w-96 md:h-96 relative floating">
                    <div className="absolute inset-0 bg-gradient-to-r from-bella-blue/20 to-bella-purple/20 rounded-full blur-3xl"></div>
                    <div className="relative w-full h-full bg-gradient-to-r from-bella-gold to-bella-purple rounded-full p-1">
                      <div className="w-full h-full bg-bella-dark rounded-full p-2">
                        <Image
                          src="/images/logo2.jpg"
                          alt="DXC Foundation"
                          fill
                          className="rounded-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Partnership Section */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h3 className="bella-subheading">DXC Foundation x Bella Genesis Strategic Partnership</h3>
                <p className="bella-text text-lg max-w-4xl mx-auto">
                  Bella Genesis builds systems that provide projects not only with visibility but also with real 
                  investment impact and volume. To this end, we are collaborating with our strategic investment 
                  partner, the DXC Foundation.
                </p>
              </div>

              {/* Links and Contact */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a 
                  href="https://linktr.ee/DxcFoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center"
                >
                  DXC Foundation Links
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                
                <a 
                  href="https://x.com/Dxc_Foundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bella-button-secondary flex items-center"
                >
                  Follow on X
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                
                <a 
                  href="https://t.me/bellagenesis" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center"
                >
                  Contact for Detailed Information
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Current Partners */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Our Partners</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                We're proud to work with industry leaders who share our vision 
                for authentic growth and successful crypto marketing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bella-card-hover">
                  <div className="bella-card flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-bella-blue to-bella-purple rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>
                      <div className="text-bella-blue font-medium mb-2">{partner.type}</div>
                      <p className="bella-text text-sm">{partner.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Benefits */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Why Partner With Us?</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Bella Genesis offers more than just marketing services. We provide 
                a complete ecosystem for growth and success.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-xl mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quality First</h3>
                <p className="bella-text">
                  We maintain high standards for all partnerships, ensuring mutual success 
                  and long-term value creation.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-xl mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-bella-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                <p className="bella-text">
                  Our track record speaks for itself. Partners benefit from our 
                  expertise and established market presence.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">True Partnership</h3>
                <p className="bella-text">
                  We believe in genuine collaboration, not just transactional relationships. 
                  Your success is our success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Partnership Application Process</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Ready to join our partner network? Here's how the application process works.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">Application</h3>
                  <p className="bella-text text-sm">Submit partnership application with your details</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">Review</h3>
                  <p className="bella-text text-sm">Our team reviews your application and credentials</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-bella-dark font-bold text-xl">3</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">Discussion</h3>
                  <p className="bella-text text-sm">Strategic discussion about partnership terms</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <h3 className="font-bold text-white mb-2">Launch</h3>
                  <p className="bella-text text-sm">Partnership agreement and collaboration begins</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Ready to Partner?</h2>
              <p className="bella-text text-xl mb-8">
                Join the #GENMode ecosystem and let's build something amazing together. 
                Strategic partnerships for exponential growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/apply" className="bella-button-primary flex items-center justify-center">
                  Apply for Partnership
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link href="/contact" className="bella-button-secondary">
                  Discuss Collaboration
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

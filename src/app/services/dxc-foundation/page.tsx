'use client'

import { TrendingUp, Users, Shield, ArrowRight, Target, Zap } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function DXCFoundationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h1 className="bella-heading mb-6">
                  DXC Foundation
                </h1>
                <h2 className="text-2xl font-bold text-bella-gold mb-6">
                  Real volume. Direct investment. Proven impact.
                </h2>
                <p className="bella-text text-lg leading-relaxed mb-8">
                  The DXC Foundation, with its dedicated group of investors, offers a systematic investment 
                  structure that provides projects not only visibility but also direct capital and sustainable growth. 
                  Operating on a token-plus-equity model, this structure simultaneously fosters both organic growth 
                  and community support.
                </p>
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
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">How It Works</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Our systematic approach ensures maximum impact for every project we support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Investment Model */}
              <div className="bella-card-hover">
                <div className="bella-card h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-xl mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-bella-blue mb-4">Investment Model</h3>
                  <p className="bella-text mb-4">
                    Tokens received from the project are distributed to investors. Each investor contributes cash, 
                    tripling the total input.
                  </p>
                  <div className="bg-gradient-to-r from-bella-gold/20 to-yellow-500/20 rounded-lg p-4 border border-bella-gold/30">
                    <p className="text-bella-gold font-semibold text-center">
                      Example: $30,000 in tokens → $90,000 total input
                    </p>
                  </div>
                </div>
              </div>

              {/* Community Support */}
              <div className="bella-card-hover">
                <div className="bella-card h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-xl mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-bella-purple mb-4">Community Support</h3>
                  <p className="bella-text">
                    Investors promote the project within their own communities, creating natural volume and engagement.
                  </p>
                </div>
              </div>

              {/* Transparency */}
              <div className="bella-card-hover">
                <div className="bella-card h-full">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-xl mb-6">
                    <Shield className="w-8 h-8 text-bella-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-bella-gold mb-4">Transparency</h3>
                  <p className="bella-text">
                    Purchases are documented with video/visual evidence and shared with the project team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Partnership Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">DXC Foundation x Bella Genesis Strategic Partnership</h2>
              <p className="bella-text text-xl max-w-4xl mx-auto">
                Bella Genesis builds systems that provide projects not only with visibility but also with real 
                investment impact and volume. To this end, we are collaborating with our strategic investment 
                partner, the DXC Foundation.
              </p>
            </div>

            {/* Partnership Benefits */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-bella-gray/30 to-bella-blue/10 rounded-xl p-6 border border-bella-blue/20">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-bella-blue mr-3" />
                    <h3 className="text-xl font-bold text-bella-blue">Proven Track Record</h3>
                  </div>
                  <p className="bella-text">
                    Our partnership has successfully supported numerous crypto projects with real volume 
                    and sustainable growth strategies.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-xl p-6 border border-bella-purple/20">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 text-bella-purple mr-3" />
                    <h3 className="text-xl font-bold text-bella-purple">Systematic Approach</h3>
                  </div>
                  <p className="bella-text">
                    We combine marketing expertise with direct investment to create comprehensive 
                    growth solutions for crypto projects.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-bella-gray/30 to-bella-gold/10 rounded-xl p-6 border border-bella-gold/20">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 text-bella-gold mr-3" />
                    <h3 className="text-xl font-bold text-bella-gold">Community Driven</h3>
                  </div>
                  <p className="bella-text">
                    Our investor network actively promotes projects within their communities, 
                    ensuring authentic engagement and organic growth.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-bella-gray/30 to-green-500/10 rounded-xl p-6 border border-green-500/20">
                  <div className="flex items-center mb-4">
                    <Shield className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-xl font-bold text-green-500">Full Transparency</h3>
                  </div>
                  <p className="bella-text">
                    Every investment and promotion activity is documented and shared with 
                    project teams for complete transparency.
                  </p>
                </div>
              </div>
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
                href="https://t.me/Bella941" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bella-button-primary flex items-center"
              >
                Contact for Detailed Information
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </section>

        {/* Why Choose DXC Foundation */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Why Choose DXC Foundation?</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                We don't just provide marketing services - we invest in your success with real capital and proven strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-bella-blue mb-2">3x</div>
                <div className="text-bella-light">Investment Multiplier</div>
                <p className="bella-text text-sm mt-2">Every token allocation is tripled through investor contributions</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-bella-gold mb-2">100%</div>
                <div className="text-bella-light">Transparency</div>
                <p className="bella-text text-sm mt-2">All activities documented with video evidence</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-bella-purple mb-2">50+</div>
                <div className="text-bella-light">Active Investors</div>
                <p className="bella-text text-sm mt-2">Dedicated community promoting your project</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-bella-light">Support</div>
                <p className="bella-text text-sm mt-2">Continuous support throughout the partnership</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Ready to Scale Your Project?</h2>
              <p className="bella-text text-xl mb-8">
                Partner with DXC Foundation and Bella Genesis for real investment impact, 
                authentic community growth, and proven results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/Bella941" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center justify-center"
                >
                  Start Partnership Discussion
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="https://linktr.ee/DxcFoundation" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bella-button-secondary"
                >
                  Learn More About DXC
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
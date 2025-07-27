'use client'

import { Music, TrendingUp, Users, ArrowRight, Zap, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function TikTokPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-8">
                <Music className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="bella-heading mb-6">
                TikTok Promotion Services
              </h1>
              <p className="bella-text text-xl max-w-3xl mx-auto mb-8">
                Reach the next generation of crypto enthusiasts on TikTok! Viral content 
                that captures attention and drives engagement for your project.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">1M+</div>
                  <div className="text-bella-light">Potential Reach</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-gold mb-2">Viral</div>
                  <div className="text-bella-light">Content Strategy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-purple mb-2">Gen Z</div>
                  <div className="text-bella-light">Audience Focus</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24h</div>
                  <div className="text-bella-light">Quick Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Package */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">TikTok Promotion Package</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Viral-ready content designed to capture the attention of young crypto enthusiasts.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bella-card-hover">
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-pink-500/10 border border-pink-500/30">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl mb-6">
                        <TrendingUp className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-pink-500 mb-4">TikTok Viral Campaign</h3>
                      <p className="bella-text text-lg mb-6">
                        Engaging short-form content designed to go viral and reach the younger 
                        crypto audience. Creative storytelling that makes your project memorable.
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="font-semibold text-white">Package Includes:</h4>
                        <ul className="space-y-2">
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            Viral-optimized content creation
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            1M+ potential reach
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            Gen Z focused messaging
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            Trending hashtag optimization
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                            Creative visual storytelling
                          </li>
                        </ul>
                      </div>

                      <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                        <span className="text-bella-gold font-mono text-sm">Code: TT-VIRAL</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="relative">
                        <div className="w-48 h-64 bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-pink-500/30">
                          <Music className="w-16 h-16 text-pink-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                          VIRAL
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-pink-500 mb-1">1M+</div>
                          <div className="text-sm text-bella-light">Potential Reach</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-bella-gold mb-1">Viral</div>
                          <div className="text-sm text-bella-light">Content</div>
                        </div>
                      </div>

                      <a 
                        href="https://t.me/bella941_mkt?text=TT-VIRAL package hakkında bilgi almak istiyorum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bella-button-primary flex items-center justify-center"
                      >
                        Get TikTok Promotion
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Package */}
            <div className="max-w-4xl mx-auto">
              <div className="bella-card-hover">
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-bella-purple/10 border border-bella-gold/30">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full mx-auto mb-6">
                      <Target className="w-10 h-10 text-bella-dark" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-bella-gold mb-4">Custom TikTok Package</h3>
                    <p className="bella-text text-lg mb-6 max-w-2xl mx-auto">
                      Need multiple videos, influencer collaborations, or extended campaigns? 
                      We can create a tailored TikTok strategy for maximum viral potential.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Multiple Videos</div>
                        <div className="text-sm text-bella-light">Series campaigns</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Influencer Collabs</div>
                        <div className="text-sm text-bella-light">Creator partnerships</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Viral Strategy</div>
                        <div className="text-sm text-bella-light">Trend optimization</div>
                      </div>
                    </div>

                    <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                      <span className="text-bella-gold font-mono text-sm">Code: TT-CUSTOM</span>
                    </div>
                    
                    <a 
                      href="https://t.me/bella941_mkt?text=TT-CUSTOM package hakkında bilgi almak istiyorum"
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

        {/* Features Section */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Why TikTok for Crypto?</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Reach the next generation of crypto investors with engaging, viral content.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Viral Potential</h3>
                <p className="bella-text">
                  TikTok's algorithm favors engaging content, giving your project 
                  the potential to reach millions organically.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-xl mx-auto mb-6">
                  <Users className="w-8 h-8 text-bella-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Young Audience</h3>
                <p className="bella-text">
                  Connect with Gen Z and millennial crypto enthusiasts who are 
                  actively exploring new investment opportunities.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-xl mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Quick Impact</h3>
                <p className="bella-text">
                  Short-form content delivers your message quickly and memorably, 
                  perfect for capturing attention in today's fast-paced world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Ready to Go Viral?</h2>
              <p className="bella-text text-xl mb-8">
                Let our TikTok promotion service create viral content that introduces 
                your project to the next generation of crypto enthusiasts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/bella941_mkt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center justify-center"
                >
                  Start TikTok Campaign
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
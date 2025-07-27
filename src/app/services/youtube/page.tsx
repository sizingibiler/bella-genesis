'use client'

import { Play, Eye, Users, ArrowRight, Video, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function YouTubePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mx-auto mb-8">
                <Play className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="bella-heading mb-6">
                YouTube Promotion Services
              </h1>
              <p className="bella-text text-xl max-w-3xl mx-auto mb-8">
                Discover your project with your target audience on YouTube! Professional video 
                content that reaches the right investors and community members.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-500 mb-2">100K+</div>
                  <div className="text-bella-light">View Potential</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-gold mb-2">24h</div>
                  <div className="text-bella-light">Delivery Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-purple mb-2">100%</div>
                  <div className="text-bella-light">Professional Content</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Custom</div>
                  <div className="text-bella-light">Script & Narration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Package */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">YouTube Promotion Package</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Professional video promotion designed to showcase your project to the crypto community.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="bella-card-hover">
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-red-500/10 border border-red-500/30">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mb-6">
                        <Video className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-red-500 mb-4">YouTube Video Promotion</h3>
                      <p className="bella-text text-lg mb-6">
                        Honest, analysis-focused content with project-specific script and narration. 
                        Professional content support for reliable promotion.
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="font-semibold text-white">Package Includes:</h4>
                        <ul className="space-y-2">
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            YouTube Video Promotion
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            100,000+ View Potential
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            Honest, analysis-focused content
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            Project-specific script and narration
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            Professional content support
                          </li>
                        </ul>
                      </div>

                      <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                        <span className="text-bella-gold font-mono text-sm">Code: YT-PROMO</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="relative">
                        <div className="w-64 h-36 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-6 border border-red-500/30">
                          <Play className="w-16 h-16 text-red-500" />
                        </div>
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          LIVE
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-red-500 mb-1">100K+</div>
                          <div className="text-sm text-bella-light">Potential Views</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-bella-gold mb-1">24h</div>
                          <div className="text-sm text-bella-light">Delivery</div>
                        </div>
                      </div>

                      <a 
                        href="https://t.me/bella941_mkt?text=YT-PROMO package hakkında bilgi almak istiyorum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bella-button-primary flex items-center justify-center"
                      >
                        Get YouTube Promotion
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
                    
                    <h3 className="text-2xl font-bold text-bella-gold mb-4">Custom YouTube Package</h3>
                    <p className="bella-text text-lg mb-6 max-w-2xl mx-auto">
                      Need multiple videos, specific targeting, or extended campaigns? We can create 
                      a tailored YouTube promotion strategy for your project.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Multiple Videos</div>
                        <div className="text-sm text-bella-light">Series campaigns available</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Custom Targeting</div>
                        <div className="text-sm text-bella-light">Specific audience focus</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Extended Reach</div>
                        <div className="text-sm text-bella-light">Multi-channel promotion</div>
                      </div>
                    </div>

                    <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                      <span className="text-bella-gold font-mono text-sm">Code: YT-CUSTOM</span>
                    </div>
                    
                    <a 
                      href="https://t.me/bella941_mkt?text=YT-CUSTOM package hakkında bilgi almak istiyorum"
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
              <h2 className="bella-heading mb-6">Why Choose Our YouTube Service?</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Professional video content that builds trust and drives real engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-xl mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">High Visibility</h3>
                <p className="bella-text">
                  Reach over 100,000 potential viewers in the crypto community with 
                  professionally crafted video content.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-xl mx-auto mb-6">
                  <Video className="w-8 h-8 text-bella-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Professional Content</h3>
                <p className="bella-text">
                  Honest, analysis-focused videos with custom scripts tailored 
                  specifically to your project's unique value proposition.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-xl mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Targeted Audience</h3>
                <p className="bella-text">
                  Connect with serious crypto investors and community members who 
                  are actively looking for quality projects.
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
                Let our professional YouTube promotion service showcase your project 
                to the crypto community with engaging, high-quality video content.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/bella941_mkt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center justify-center"
                >
                  Start YouTube Campaign
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
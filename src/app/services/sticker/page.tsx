'use client'

import { Palette, Image, Globe, ArrowRight, Sparkles, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function StickerPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-bella-purple to-pink-500 rounded-full mx-auto mb-8">
                <Palette className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="bella-heading mb-6">
                Sticker & Branding Services
              </h1>
              <p className="bella-text text-xl max-w-3xl mx-auto mb-8">
                A full-featured branding pack for your community! Complete visual identity 
                solution that makes your project stand out and builds strong community engagement.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-purple mb-2">Full</div>
                  <div className="text-bella-light">Branding Pack</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-gold mb-2">Custom</div>
                  <div className="text-bella-light">Design</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500 mb-2">Multi</div>
                  <div className="text-bella-light">Platform</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Pro</div>
                  <div className="text-bella-light">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Package */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Sticker & Branding Pack</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Everything you need to create a cohesive visual identity for your crypto project.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-12">
              <div className="bella-card-hover">
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-bella-purple/10 border border-bella-purple/30">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-bella-purple to-pink-500 rounded-xl mb-6">
                        <Sparkles className="w-10 h-10 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-bella-purple mb-4">Complete Branding Solution</h3>
                      <p className="bella-text text-lg mb-6">
                        A comprehensive visual identity package designed to strengthen your 
                        community engagement and brand recognition across all platforms.
                      </p>

                      <div className="space-y-3 mb-8">
                        <h4 className="font-semibold text-white">Package Includes:</h4>
                        <ul className="space-y-2">
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-purple rounded-full mr-3"></div>
                            Exclusive Sticker & Emoji Set
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-purple rounded-full mr-3"></div>
                            Buy Bot & Meme Images
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-purple rounded-full mr-3"></div>
                            Welcome Video
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-purple rounded-full mr-3"></div>
                            Twitter Banner + Logo
                          </li>
                          <li className="bella-text text-sm flex items-center">
                            <div className="w-2 h-2 bg-bella-purple rounded-full mr-3"></div>
                            Simple Website
                          </li>
                        </ul>
                      </div>

                      <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                        <span className="text-bella-gold font-mono text-sm">Code: STICKER-BRAND</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-r from-bella-purple/20 to-pink-500/20 rounded-xl p-4 border border-bella-purple/30">
                          <Image className="w-8 h-8 text-bella-purple mx-auto mb-2" />
                          <div className="text-sm text-white font-semibold">Stickers</div>
                          <div className="text-xs text-bella-light">Custom Set</div>
                        </div>
                        <div className="bg-gradient-to-r from-bella-gold/20 to-yellow-500/20 rounded-xl p-4 border border-bella-gold/30">
                          <Palette className="w-8 h-8 text-bella-gold mx-auto mb-2" />
                          <div className="text-sm text-white font-semibold">Branding</div>
                          <div className="text-xs text-bella-light">Full Package</div>
                        </div>
                        <div className="bg-gradient-to-r from-bella-blue/20 to-bella-purple/20 rounded-xl p-4 border border-bella-blue/30">
                          <Globe className="w-8 h-8 text-bella-blue mx-auto mb-2" />
                          <div className="text-sm text-white font-semibold">Website</div>
                          <div className="text-xs text-bella-light">Simple & Clean</div>
                        </div>
                        <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-xl p-4 border border-green-500/30">
                          <Sparkles className="w-8 h-8 text-green-500 mx-auto mb-2" />
                          <div className="text-sm text-white font-semibold">Video</div>
                          <div className="text-xs text-bella-light">Welcome</div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <div className="text-lg font-bold text-bella-purple mb-1">Complete Package</div>
                        <div className="text-sm text-bella-light">Everything you need for branding</div>
                      </div>

                      <a 
                        href="https://t.me/Bella941?text=STICKER-BRAND package hakkında bilgi almak istiyorum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bella-button-primary flex items-center justify-center"
                      >
                        Get Branding Package
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
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-bella-gold/10 border border-bella-gold/30">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full mx-auto mb-6">
                      <Target className="w-10 h-10 text-bella-dark" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-bella-gold mb-4">Custom Branding Package</h3>
                    <p className="bella-text text-lg mb-6 max-w-2xl mx-auto">
                      Need additional design elements, extended branding materials, or specific 
                      customizations? We can create a tailored branding solution for your project.
                    </p>
                    
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Extended Assets</div>
                        <div className="text-sm text-bella-light">Additional designs</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Custom Animations</div>
                        <div className="text-sm text-bella-light">Motion graphics</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-white mb-1">Brand Guidelines</div>
                        <div className="text-sm text-bella-light">Usage documentation</div>
                      </div>
                    </div>

                    <div className="bg-bella-gray/20 rounded-lg p-3 mb-6 inline-block">
                      <span className="text-bella-gold font-mono text-sm">Code: STICKER-CUSTOM</span>
                    </div>
                    
                    <a 
                      href="https://t.me/Bella941?text=STICKER-CUSTOM package hakkında bilgi almak istiyorum"
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
              <h2 className="bella-heading mb-6">Why Visual Branding Matters</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Strong visual identity builds trust, recognition, and community engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-xl mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Brand Recognition</h3>
                <p className="bella-text">
                  Consistent visual elements across all platforms help your community 
                  instantly recognize and remember your project.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-xl mx-auto mb-6">
                  <Image className="w-8 h-8 text-bella-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Engagement</h3>
                <p className="bella-text">
                  Custom stickers and emojis give your community unique ways to 
                  express themselves and build stronger connections.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-xl mx-auto mb-6">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Professional Presence</h3>
                <p className="bella-text">
                  A complete branding package including website and social media 
                  assets establishes credibility and professionalism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Ready to Build Your Brand?</h2>
              <p className="bella-text text-xl mb-8">
                Let our comprehensive branding package give your project the visual identity 
                it needs to stand out and build a strong community.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://t.me/Bella941"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bella-button-primary flex items-center justify-center"
                >
                  Start Branding Project
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
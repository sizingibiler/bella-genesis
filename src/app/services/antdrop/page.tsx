'use client'

import { Gift, Zap, Users, ArrowRight, Star, Target } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AntdropPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-8">
                <Gift className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="bella-heading mb-6">
                Antdrop Services
              </h1>
              <p className="bella-text text-xl max-w-3xl mx-auto mb-8">
                Revolutionary airdrop and community building solutions. Coming soon with 
                innovative features designed to maximize your project's reach and engagement.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">Soon</div>
                  <div className="text-bella-light">Launch Date</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-gold mb-2">Advanced</div>
                  <div className="text-bella-light">Features</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-bella-purple mb-2">Smart</div>
                  <div className="text-bella-light">Distribution</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">Max</div>
                  <div className="text-bella-light">Engagement</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Section */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="max-w-4xl mx-auto">
              <div className="bella-card-hover">
                <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-green-500/10 border border-green-500/30 text-center">
                  <div className="flex items-center justify-center w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-8">
                    <Gift className="w-16 h-16 text-white" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-green-500 mb-6">Antdrop - Coming Soon</h2>
                  <p className="bella-text text-xl mb-8 max-w-2xl mx-auto">
                    We're developing an innovative airdrop platform that will revolutionize 
                    how crypto projects distribute tokens and build communities.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-4">What to Expect:</h3>
                      <ul className="space-y-3">
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          Smart airdrop distribution system
                        </li>
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          Advanced targeting algorithms
                        </li>
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          Community engagement tools
                        </li>
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          Real-time analytics dashboard
                        </li>
                      </ul>
                    </div>

                    <div className="text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Key Features:</h3>
                      <ul className="space-y-3">
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-bella-gold rounded-full mr-3"></div>
                          Anti-bot protection
                        </li>
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-bella-gold rounded-full mr-3"></div>
                          Multi-chain support
                        </li>
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-bella-gold rounded-full mr-3"></div>
                          Customizable distribution rules
                        </li>
                        <li className="bella-text flex items-center">
                          <div className="w-2 h-2 bg-bella-gold rounded-full mr-3"></div>
                          Integrated marketing tools
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-600/20 rounded-xl p-6 mb-8 border border-green-500/30">
                    <h3 className="text-xl font-bold text-green-500 mb-3">Early Access Program</h3>
                    <p className="bella-text mb-4">
                      Be among the first to experience Antdrop when it launches. Contact us to 
                      join our early access program and get priority access to beta features.
                    </p>
                  </div>

                  <a 
                    href="https://t.me/Bella941?text=Antdrop early access program hakkında bilgi almak istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bella-button-primary inline-flex items-center text-lg px-8 py-4"
                  >
                    Join Early Access
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Antdrop Section */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Why Antdrop Will Be Different</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Built from the ground up to solve the common problems with traditional airdrop systems.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Smart Distribution</h3>
                <p className="bella-text">
                  Advanced algorithms ensure tokens reach real users, not bots, 
                  maximizing the impact of your airdrop campaign.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-xl mx-auto mb-6">
                  <Users className="w-8 h-8 text-bella-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Community Focus</h3>
                <p className="bella-text">
                  Built-in tools to turn airdrop recipients into active community 
                  members, creating lasting engagement beyond the initial drop.
                </p>
              </div>

              <div className="text-center bella-card">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-purple to-pink-500 rounded-xl mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Precise Targeting</h3>
                <p className="bella-text">
                  Target specific user segments based on on-chain behavior, 
                  ensuring your tokens reach the most relevant audience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="bella-card bg-gradient-to-r from-bella-gray/20 to-green-500/10 border border-green-500/30">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-6">
                  <Star className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="bella-heading mb-6">Stay Updated</h2>
                <p className="bella-text text-xl mb-8">
                  Get notified when Antdrop launches and be among the first to access 
                  revolutionary airdrop technology.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-500 mb-2">Q2 2025</div>
                    <div className="text-bella-light">Expected Launch</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-bella-gold mb-2">Beta</div>
                    <div className="text-bella-light">Early Access</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="https://t.me/Bella941?text=Antdrop launch updates hakkında bilgi almak istiyorum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bella-button-primary flex items-center justify-center"
                  >
                    Get Launch Updates
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                  <Link href="/contact" className="bella-button-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
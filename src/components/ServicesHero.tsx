'use client'

import { Sparkles } from 'lucide-react'

export default function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-bella-dark pt-16">
      <div className="bella-container text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-bella-blue to-bella-purple">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold bella-gradient-text">
            Our Services
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
          From Twitter campaigns to exchange listings, we provide comprehensive crypto marketing 
          solutions tailored to your project's unique needs and goals.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bella-card">
            <div className="text-3xl font-bold bella-gradient-text mb-2">500+</div>
            <div className="text-gray-300">Successful Campaigns</div>
          </div>
          <div className="bella-card">
            <div className="text-3xl font-bold text-bella-gold mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="bella-card">
            <div className="text-3xl font-bold text-bella-blue mb-2">16+</div>
            <div className="text-gray-300">Exchange Partners</div>
          </div>
        </div>
      </div>
    </section>
  )
}

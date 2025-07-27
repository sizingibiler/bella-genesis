'use client'

import { Users } from 'lucide-react'

export default function ApplyHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-bella-dark pt-16">
      <div className="bella-container text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-bella-blue to-bella-purple">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold bella-gradient-text">
            Join Our Network
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-8">
          Elevate your influence and expand your reach by partnering with Bella Genesis. 
          Unleash the power of collaboration and innovation across the crypto landscape.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#application-forms"
            className="bella-button-primary"
          >
            <span>I Want to Apply</span>
            <Users className="ml-2 w-5 h-5" />
          </a>
          <a
            href="https://t.me/bella941_mkt"
            target="_blank"
            rel="noopener noreferrer"
            className="bella-button-secondary"
          >
            Contact Us
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bella-card">
            <div className="text-2xl font-bold text-bella-gold mb-2">Global</div>
            <div className="text-gray-300">Opportunities</div>
          </div>
          <div className="bella-card">
            <div className="text-2xl font-bold bella-gradient-text mb-2">500+</div>
            <div className="text-gray-300">Successful Partnerships</div>
          </div>
          <div className="bella-card">
            <div className="text-2xl font-bold text-bella-blue mb-2">Strategic</div>
            <div className="text-gray-300">Advantages</div>
          </div>
        </div>
      </div>
    </section>
  )
}

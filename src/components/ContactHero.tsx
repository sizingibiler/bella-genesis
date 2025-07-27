'use client'

import { Send, MessageCircle } from 'lucide-react'

export default function ContactHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-bella-dark pt-16">
      <div className="bella-container text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-bella-blue to-bella-purple">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold bella-gradient-text">
            Get in Touch
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed mb-8">
          Ready to take your crypto project to the next level? We're here 24/7 to discuss 
          your marketing needs and create a strategy that delivers real results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/Bella941"
            target="_blank"
            rel="noopener noreferrer"
            className="bella-button-primary group"
          >
            <Send className="w-5 h-5 mr-2" />
            <span>Message on Telegram</span>
          </a>
          <a
            href="mailto:bellagenesis.contact@gmail.com"
            className="bella-button-secondary"
          >
            Send Email
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          <div className="bella-card">
            <div className="text-2xl font-bold text-bella-gold mb-2">24/7</div>
            <div className="text-gray-300">Available Support</div>
          </div>
          <div className="bella-card">
            <div className="text-2xl font-bold bella-gradient-text mb-2">&lt; 1hr</div>
            <div className="text-gray-300">Average Response</div>
          </div>
          <div className="bella-card">
            <div className="text-2xl font-bold text-bella-blue mb-2">Global</div>
            <div className="text-gray-300">Reach &amp; Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

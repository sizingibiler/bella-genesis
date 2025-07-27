'use client'

import { ArrowRight, Info } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-bella-dark pt-16">
      <div className="bella-container text-center py-20">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-bella-blue to-bella-purple">
              <Info className="w-8 h-8" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold bella-gradient-text">About Bella Genesis</h1>
          </div>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300">
            Discover the story behind Bella Genesis and our mission to lead innovation in the crypto marketing space.
          </p>
          <a
            href="#vision"
            className="mt-6 bella-button-primary flex items-center justify-center"
          >
            <span>Explore Our Vision</span>
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}

'use client'

interface ServicePageHeaderProps {
  title: string
  description: string
  icon: string
}

export default function ServicePageHeader({ title, description, icon }: ServicePageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center bg-bella-dark pt-16">
      <div className="bella-container text-center">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="text-6xl">{icon}</div>
          <h1 className="font-display text-4xl md:text-6xl font-bold bella-gradient-text">
            {title}
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl max-w-4xl mx-auto text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://t.me/Bella941"
            target="_blank"
            rel="noopener noreferrer"
            className="bella-button-primary"
          >
            Get Quote Now
          </a>
          <a
            href="/contact"
            className="bella-button-secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

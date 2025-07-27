'use client'

import { ArrowRight, MessageCircle } from 'lucide-react'

interface Package {
  title: string
  description: string
  features: string[]
  code: string
  color: string
  isVip?: boolean
}

interface PackageCardsProps {
  packages: Package[]
  serviceType: string
}

export default function PackageCards({ packages, serviceType }: PackageCardsProps) {
  const generateTelegramLink = (packageTitle: string, code: string) => {
    const message = `Hello! I'm interested in the ${packageTitle} for ${serviceType}.

Package Code: ${code}

Could you please provide more details about pricing and next steps?

Thank you!`
    
    return `https://t.me/bella941_mkt?text=${encodeURIComponent(message)}`
  }

  return (
    <section className="bella-section bg-bella-dark">
      <div className="bella-container">
        <div className="text-center mb-16">
          <h2 className="bella-heading">Available Packages</h2>
          <p className="bella-text text-xl max-w-3xl mx-auto">
            Choose the package that best fits your project's needs and budget. 
            All packages include professional support and detailed reporting.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-1000 delay-${index * 200}`}
            >
              {/* VIP Badge */}
              {pkg.isVip && (
                <div className="absolute -top-4 left-6 z-10 px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-bella-gold to-yellow-500 text-bella-dark">
                  VIP Package
                </div>
              )}

              {/* Card */}
              <div className={`${
                pkg.isVip ? 'bella-card-vip' : 'bella-card-hover'
              } h-full flex flex-col relative overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                    <p className="text-bella-blue font-medium">{pkg.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-4">Includes:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <div className={`w-2 h-2 bg-gradient-to-r ${pkg.color} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Code */}
                  <div className="mb-6">
                    <div className="bg-bella-gray/30 rounded-lg p-3 border border-gray-600/30">
                      <div className="text-xs text-gray-400 mb-1">Package Code:</div>
                      <div className="text-bella-blue font-mono font-bold">{pkg.code}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 mt-auto">
                    <a
                      href={generateTelegramLink(pkg.title, pkg.code)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`bella-button w-full bg-gradient-to-r ${pkg.color} text-white hover:shadow-lg transition-all group-hover:scale-105 flex items-center justify-center`}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <span>Get Quote</span>
                    </a>
                    
                    <button
                      onClick={() => navigator.clipboard.writeText(pkg.code)}
                      className="bella-button-secondary w-full text-center text-sm"
                    >
                      Copy Code: {pkg.code}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-2xl p-8 border border-bella-blue/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need a Custom Package?
            </h3>
            <p className="bella-text mb-6 max-w-2xl mx-auto">
              Every project is unique. Contact us to create a tailored {serviceType.toLowerCase()} strategy 
              that perfectly fits your specific needs and budget.
            </p>
            <a
              href={`https://t.me/bella941_mkt?text=Hello! I'm interested in a custom ${serviceType} package for my project. Could we discuss my specific requirements?`}
              target="_blank"
              rel="noopener noreferrer"
              className="bella-button-primary"
            >
              <ArrowRight className="w-5 h-5 mr-2" />
              Discuss Custom Package
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

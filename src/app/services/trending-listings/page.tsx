import { ArrowLeft, TrendingUp, CheckCircle, Users, Zap, Globe, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Trending Listings - Exchange Listing Services | Bella Genesis',
  description: 'Direct support for listing your project on major centralized exchanges. 16+ exchange contacts with fast process and professional support.',
}

export default function TrendingListingsPage() {
  const exchangeFeatures = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "16+ Exchanges",
      description: "Direct access to major centralized exchanges including Binance, Coinbase, KuCoin, Gate.io, and more.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Direct Contacts",
      description: "Established relationships with exchange listing teams for faster application processing.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Process",
      description: "Streamlined application process with reduced waiting times and priority support.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Professional Support",
      description: "Full documentation preparation, compliance review, and ongoing listing support.",
      color: "from-bella-gold to-yellow-500"
    }
  ]

  const supportedExchanges = [
    { name: "Binance", tier: "Tier 1", description: "World's largest crypto exchange" },
    { name: "Coinbase", tier: "Tier 1", description: "Leading US-based exchange" },
    { name: "KuCoin", tier: "Tier 2", description: "Popular global exchange" },
    { name: "Gate.io", tier: "Tier 2", description: "Comprehensive trading platform" },
    { name: "Bitget", tier: "Tier 2", description: "Derivatives and spot trading" },
    { name: "MEXC", tier: "Tier 2", description: "High-volume trading platform" },
    { name: "Huobi", tier: "Tier 2", description: "Established global exchange" },
    { name: "OKX", tier: "Tier 1", description: "Multi-asset trading platform" },
    { name: "Bybit", tier: "Tier 2", description: "Derivatives trading specialist" },
    { name: "Crypto.com", tier: "Tier 1", description: "Full-service crypto platform" },
    { name: "Kraken", tier: "Tier 1", description: "Secure and compliant exchange" },
    { name: "Bitfinex", tier: "Tier 2", description: "Advanced trading features" },
    { name: "Bitstamp", tier: "Tier 2", description: "Longest-running exchange" },
    { name: "Gemini", tier: "Tier 2", description: "Regulated US exchange" },
    { name: "FTX", tier: "Tier 2", description: "Innovative trading platform" },
    { name: "Uniswap", tier: "DEX", description: "Leading decentralized exchange" }
  ]

  const listingProcess = [
    {
      step: "1",
      title: "Project Assessment", 
      description: "We evaluate your project's readiness for exchange listings and identify suitable exchanges.",
      color: "from-bella-blue to-bella-purple"
    },
    {
      step: "2", 
      title: "Documentation Prep",
      description: "Professional preparation of all required documents, compliance materials, and technical specifications.",
      color: "from-bella-purple to-pink-500"
    },
    {
      step: "3",
      title: "Direct Application",
      description: "Submission through our direct contacts with expedited review and priority processing.",
      color: "from-bella-gold to-yellow-500"
    },
    {
      step: "4",
      title: "Listing Success",
      description: "Go live on target exchanges with ongoing support for trading pair optimization.",
      color: "from-green-500 to-emerald-600"
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Back Navigation */}
        <div className="bella-container pt-8">
          <Link 
            href="/services" 
            className="inline-flex items-center text-bella-blue hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Services
          </Link>
        </div>

        {/* Hero Section */}
        <section className="bella-section pt-0">
          <div className="bella-container">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full mx-auto mb-8">
                <TrendingUp className="w-12 h-12 text-bella-dark" />
              </div>
              
              <h1 className="bella-heading mb-6">
                Exchange Listings
              </h1>
              <p className="bella-text text-xl max-w-3xl mx-auto mb-8">
                Direct support for listing your project on major centralized exchanges. 
                Get your token on the world's leading trading platforms with our proven process.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="text-center bella-card">
                  <div className="text-3xl font-bold text-bella-gold mb-2">16+</div>
                  <div className="text-bella-light">Exchanges</div>
                </div>
                <div className="text-center bella-card">
                  <div className="text-3xl font-bold text-bella-blue mb-2">Direct</div>
                  <div className="text-bella-light">Contacts</div>
                </div>
                <div className="text-center bella-card">
                  <div className="text-3xl font-bold text-bella-purple mb-2">Fast</div>
                  <div className="text-bella-light">Process</div>
                </div>
                <div className="text-center bella-card">
                  <div className="text-3xl font-bold text-white mb-2">Pro</div>
                  <div className="text-bella-light">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Features */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Why Choose Our Listing Service?</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Skip the long queues and uncertainty. Our established relationships and 
                professional approach ensure your project gets the attention it deserves.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {exchangeFeatures.map((feature, index) => (
                <div key={index} className="bella-card-hover group">
                  <div className="bella-card h-full">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl mb-6 group-hover:scale-110 transition-transform text-white`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="bella-text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Exchanges */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Supported Exchanges</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                We have direct relationships with major exchanges across all tiers, 
                from leading global platforms to specialized trading venues.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {supportedExchanges.map((exchange, index) => (
                <div key={index} className="bella-card-hover">
                  <div className="bella-card text-center">
                    <h3 className="text-lg font-bold text-white mb-2">{exchange.name}</h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      exchange.tier === 'Tier 1' ? 'bg-gradient-to-r from-bella-gold to-yellow-500 text-bella-dark' :
                      exchange.tier === 'Tier 2' ? 'bg-gradient-to-r from-bella-blue to-bella-purple text-white' :
                      'bg-gradient-to-r from-green-500 to-emerald-600 text-white'
                    }`}>
                      {exchange.tier}
                    </div>
                    <p className="bella-text text-sm">{exchange.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Listing Process */}
        <section className="bella-section bg-bella-gray/5">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Our Listing Process</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                From initial assessment to successful listing, we guide you through 
                every step with professional expertise and direct exchange contacts.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {listingProcess.map((process, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <span className="text-white font-bold text-xl">{process.step}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4">{process.title}</h3>
                    <p className="bella-text text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="bella-section">
          <div className="bella-container">
            <div className="text-center mb-16">
              <h2 className="bella-heading mb-6">Proven Track Record</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Our success speaks for itself. Here's what our clients have achieved 
                through our exchange listing services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bella-card">
                <div className="text-4xl font-bold text-bella-gold mb-2">95%</div>
                <div className="text-lg font-semibold text-white mb-2">Success Rate</div>
                <div className="bella-text">Projects successfully listed on target exchanges</div>
              </div>
              
              <div className="text-center bella-card">
                <div className="text-4xl font-bold text-bella-blue mb-2">14</div>
                <div className="text-lg font-semibold text-white mb-2">Average Days</div>
                <div className="bella-text">From application to listing confirmation</div>
              </div>
              
              <div className="text-center bella-card">
                <div className="text-4xl font-bold text-bella-purple mb-2">150+</div>
                <div className="text-lg font-semibold text-white mb-2">Projects Listed</div>
                <div className="bella-text">Successful exchange listings completed</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Ready to List Your Project?</h2>
              <p className="bella-text text-xl mb-8">
                Don't wait months for uncertain outcomes. Get your project listed on major 
                exchanges with our direct contacts and professional support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services/exchange-listings" className="bella-button-primary flex items-center justify-center">
                  View Details
                </Link>
                <Link 
                  href="https://t.me/Bella941?text=Hello! I'm interested in exchange listing services for my project. Please provide more details about your packages and pricing."
                  target="_blank"
                  className="bella-button-gold flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Get Quote
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

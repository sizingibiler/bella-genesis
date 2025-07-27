'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Mail } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What is Bella Genesis and what do you do?",
          answer: "Bella Genesis is a professional crypto marketing agency specializing in comprehensive marketing solutions for blockchain projects. We offer services including Twitter/X marketing, Solana ecosystem promotion, exchange listings, community building, and KOL partnerships. Our #GENMode approach combines data-driven strategies with authentic community engagement."
        },
        {
          question: "How long have you been in the crypto marketing industry?",
          answer: "Our team has extensive experience in crypto marketing, with founders and core team members having worked in the blockchain space since 2018. We've helped launch and grow numerous successful projects across different blockchain ecosystems."
        },
        {
          question: "What makes Bella Genesis different from other marketing agencies?",
          answer: "Our #GENMode philosophy focuses on authentic, sustainable growth rather than artificial metrics. We combine traditional marketing expertise with deep crypto industry knowledge, maintain strong relationships with top-tier KOLs, and provide transparent reporting with measurable ROI."
        }
      ]
    },
    {
      category: "Services",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer comprehensive crypto marketing services including: Twitter/X marketing campaigns, Solana ecosystem marketing, exchange listing assistance, community building, KOL partnerships, content creation, social media management, PR campaigns, and strategic consulting."
        },
        {
          question: "Do you work with projects on all blockchains?",
          answer: "Yes, we work with projects across multiple blockchains including Ethereum, Solana, Binance Smart Chain, Polygon, Avalanche, and others. We have specialized expertise in Solana ecosystem marketing but serve projects on all major networks."
        },
        {
          question: "Can you help with exchange listings?",
          answer: "Absolutely! We offer comprehensive exchange listing services from DEX launches to Tier 1 CEX listings. Our services include application preparation, documentation review, marketing campaign coordination, and post-listing promotion strategies."
        },
        {
          question: "Do you provide ongoing marketing support or just one-time campaigns?",
          answer: "We offer both one-time campaigns and ongoing marketing partnerships. Many of our clients work with us long-term for sustained growth, while others engage us for specific launches or campaigns. We customize our approach based on your project's needs."
        }
      ]
    },
    {
      category: "Pricing & Packages",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies based on the service type, campaign scope, and duration. We offer packages ranging from affordable starter options to premium VIP campaigns. Contact us for a custom quote based on your specific needs and budget."
        },
        {
          question: "Do you offer custom packages?",
          answer: "Yes! While we have standard packages, we understand every project is unique. We create custom marketing strategies and packages tailored to your specific goals, budget, and timeline."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept various payment methods including major cryptocurrencies (BTC, ETH, USDT, USDC), bank transfers, and traditional payment methods. Payment terms are discussed during project consultation."
        },
        {
          question: "Do you require payment upfront?",
          answer: "Payment terms depend on the service type and project scope. For most campaigns, we require 50% upfront and 50% upon completion. For long-term partnerships, we offer flexible payment schedules."
        }
      ]
    },
    {
      category: "Results & Reporting",
      questions: [
        {
          question: "How do you measure campaign success?",
          answer: "We track multiple KPIs including reach, engagement rates, community growth, website traffic, conversion rates, and ROI. Each campaign includes detailed analytics reports with transparent metrics and insights."
        },
        {
          question: "What kind of results can I expect?",
          answer: "Results vary based on project type, market conditions, and campaign scope. However, our clients typically see 200-500% increases in social media engagement, significant community growth, and improved brand recognition. We provide realistic expectations during consultation."
        },
        {
          question: "How often do you provide updates and reports?",
          answer: "We provide real-time campaign monitoring and regular updates. Standard packages include weekly reports, while premium packages include daily updates and 24/7 dashboard access. All campaigns conclude with a comprehensive final report."
        }
      ]
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I get started with Bella Genesis?",
          answer: "Getting started is easy! Contact us through our website, Telegram (@Bella941), or email. We'll schedule a consultation to understand your project needs and create a customized marketing strategy."
        },
        {
          question: "What information do you need from my project?",
          answer: "We'll need basic project information including your goals, target audience, current marketing efforts, budget range, and timeline. Don't worry if you don't have everything ready - we'll guide you through the process."
        },
        {
          question: "How long does it take to start a campaign?",
          answer: "Campaign launch timeline depends on complexity and requirements. Simple social media campaigns can start within 24-48 hours, while comprehensive strategies may take 1-2 weeks to fully implement. We always work to meet your deadlines."
        },
        {
          question: "Do you sign NDAs or confidentiality agreements?",
          answer: "Yes, we understand the sensitive nature of crypto projects. We're happy to sign NDAs and maintain strict confidentiality regarding your project details, strategies, and business information."
        }
      ]
    }
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-bella-dark">
        {/* Hero Section */}
        <section className="bella-section pt-32">
          <div className="bella-container text-center">
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-8">
              <HelpCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className="bella-heading mb-6">
              Frequently Asked Questions
            </h1>
            <p className="bella-text text-xl max-w-3xl mx-auto mb-12">
              Find answers to common questions about our crypto marketing services, 
              processes, and how we can help grow your project.
            </p>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="bella-section pt-0">
          <div className="bella-container max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-bella-blue to-bella-purple rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{categoryIndex + 1}</span>
                  </div>
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 100 + faqIndex
                    const isOpen = openIndex === globalIndex
                    
                    return (
                      <div key={faqIndex} className="bella-card-hover">
                        <div className="bella-card">
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full flex items-center justify-between text-left focus:outline-none group"
                          >
                            <h3 className="text-lg font-semibold text-white group-hover:text-bella-blue transition-colors pr-4">
                              {faq.question}
                            </h3>
                            <div className="flex-shrink-0">
                              {isOpen ? (
                                <ChevronUp className="w-6 h-6 text-bella-blue" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-bella-light group-hover:text-bella-blue transition-colors" />
                              )}
                            </div>
                          </button>
                          
                          {isOpen && (
                            <div className="mt-6 pt-6 border-t border-bella-gray/20">
                              <p className="bella-text leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="bella-section bg-gradient-to-r from-bella-dark via-bella-gray/10 to-bella-dark">
          <div className="bella-container text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="bella-heading mb-6">Still Have Questions?</h2>
              <p className="bella-text text-xl mb-8">
                Can't find what you're looking for? Our team is here to help! 
                Reach out and we'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="https://t.me/Bella941" 
                  target="_blank"
                  className="bella-button-primary flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message on Telegram
                </Link>
                <Link 
                  href="/contact" 
                  className="bella-button-secondary flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
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

'use client'

import { useState } from 'react'
import { Users, UserPlus, Send, CheckCircle } from 'lucide-react'

interface FormData {
  name: string
  telegram: string
  email: string
  specialty: string
  experience: string
  portfolio: string
  additional: string
}

export default function ApplicationForms() {
  const [activeForm, setActiveForm] = useState<'kol' | 'partner' | null>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    telegram: '',
    email: '',
    specialty: '',
    experience: '',
    portfolio: '',
    additional: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      
      // Generate Telegram message
      const formType = activeForm === 'kol' ? 'KOL Application' : 'Partnership Application'
      const message = `🚀 ${formType} Submission

👤 Name: ${formData.name}
📱 Telegram: ${formData.telegram}  
📧 Email: ${formData.email}
🎯 Specialty: ${formData.specialty}
📋 Experience: ${formData.experience}
${formData.portfolio ? `🔗 Portfolio: ${formData.portfolio}` : ''}
${formData.additional ? `💬 Additional Info: ${formData.additional}` : ''}

#GENMode #Application`

      // Try multiple methods to open Telegram with message
      const telegramAppURL = `tg://msg_url?url=https://t.me/Bella941&text=${encodeURIComponent(message)}`
      const telegramWebURL = `https://t.me/Bella941?text=${encodeURIComponent(message)}`
      
      // Try opening Telegram app first
      try {
        window.open(telegramAppURL, '_blank')
        // After 2 seconds, if app didn't open, try web version
        setTimeout(() => {
          window.open(telegramWebURL, '_blank')
        }, 2000)
      } catch (error) {
        // Fallback to web version
        window.open(telegramWebURL, '_blank')
      }
      
      // Show instructions after 3 seconds
      setTimeout(() => {
        if (confirm('Did Telegram open correctly with your message? Click OK if yes, Cancel if you need to copy the message manually.')) {
          // User confirmed Telegram opened
          return
        } else {
          // User needs manual copy
          navigator.clipboard.writeText(message).then(() => {
            alert('Message copied to clipboard! Please paste it when you message @Bella941 on Telegram.')
          }).catch(() => {
            alert(`Please copy this message and send it to @Bella941:\n\n${message}`)
          })
        }
      }, 3000)
    }, 2000)
  }

  const resetForm = () => {
    setActiveForm(null)
    setFormData({
      name: '',
      telegram: '',
      email: '',
      specialty: '',
      experience: '',
      portfolio: '',
      additional: ''
    })
    setIsSubmitted(false)
  }

  const specialtyOptions = {
    kol: [
      'KOL / Influencer',
      'Content Creator',
      'Community Manager',
      'Crypto Analyst',
      'Twitter Influencer',
      'YouTube Creator',
      'TikTok Creator',
      'Other'
    ],
    partner: [
      'Exchange',
      'Marketing Agency',
      'Investment Fund',
      'Development Team',
      'Media Partner',
      'Service Provider',
      'Strategic Partner',
      'Other'
    ]
  }

  if (isSubmitted) {
    return (
      <section className="bella-section bg-bella-dark">
        <div className="bella-container text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full mx-auto mb-8">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="bella-heading mb-6">Application Submitted!</h2>
            <p className="bella-text text-xl mb-8">
              Thank you for your interest in joining Bella Genesis! We've opened Telegram 
              with your application details. Please send the message to complete your submission.
            </p>
            
            <div className="bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-xl p-6 border border-bella-purple/20 mb-8">
              <p className="text-bella-blue font-medium">
                💡 <strong>Next Steps:</strong> We'll review your application and respond within 24-48 hours 
                with next steps or additional questions.
              </p>
            </div>

            <button
              onClick={resetForm}
              className="bella-button-secondary"
            >
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="application-forms" className="bella-section bg-bella-dark">
      <div className="bella-container">
        {!activeForm ? (
          // Form Selection
          <div className="text-center">
            <div className="mb-16">
              <h2 className="bella-heading">Choose Application Type</h2>
              <p className="bella-text text-xl max-w-3xl mx-auto">
                Select the type of collaboration you're interested in. Both paths offer 
                exciting opportunities to be part of the #GENMode movement.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* KOL Application */}
              <div className="bella-card-hover group cursor-pointer" onClick={() => setActiveForm('kol')}>
                <div className="text-center p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Work With Us</h3>
                  <p className="bella-text mb-6">
                    Join our network of KOLs, influencers, and content creators. 
                    Collaborate on exciting crypto marketing campaigns.
                  </p>
                  
                  <div className="bella-button-primary w-full group-hover:scale-105 transition-transform">
                    Apply as KOL
                  </div>
                </div>
              </div>

              {/* Partnership Application */}
              <div className="bella-card-hover group cursor-pointer" onClick={() => setActiveForm('partner')}>
                <div className="text-center p-8">
                  <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-bella-gold to-yellow-500 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <UserPlus className="w-10 h-10 text-bella-dark" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">Partner With Us</h3>
                  <p className="bella-text mb-6">
                    Form strategic partnerships for mutual growth. Let's build 
                    the future of crypto marketing together.
                  </p>
                  
                  <div className="bella-button-gold w-full group-hover:scale-105 transition-transform">
                    Apply for Partnership
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Application Form
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className={`w-16 h-16 flex items-center justify-center rounded-full ${
                  activeForm === 'kol' 
                    ? 'bg-gradient-to-r from-bella-blue to-bella-purple' 
                    : 'bg-gradient-to-r from-bella-gold to-yellow-500'
                }`}>
                  {activeForm === 'kol' ? (
                    <Users className="w-8 h-8 text-white" />
                  ) : (
                    <UserPlus className="w-8 h-8 text-bella-dark" />
                  )}
                </div>
                <h2 className="bella-heading">
                  {activeForm === 'kol' ? 'KOL Application' : 'Partnership Application'}
                </h2>
              </div>
              
              <p className="bella-text text-xl">
                {activeForm === 'kol' 
                  ? 'Tell us about your influence and how you can help projects succeed.'
                  : 'Share your vision for strategic partnership and mutual growth.'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bella-card space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Full Name / Alias <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bella-input"
                    placeholder="Enter your name or alias"
                    required
                  />
                </div>

                {/* Telegram */}
                <div>
                  <label className="block text-white font-semibold mb-3">
                    Telegram Username <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="telegram"
                    value={formData.telegram}
                    onChange={handleInputChange}
                    className="bella-input"
                    placeholder="@yourusername"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bella-input"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Specialty */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Your Specialty <span className="text-red-400">*</span>
                </label>
                <select
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleInputChange}
                  className="bella-input"
                  required
                >
                  <option value="">Select your specialty</option>
                  {specialtyOptions[activeForm].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Experience / Brief Description <span className="text-red-400">*</span>
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="bella-textarea"
                  placeholder={activeForm === 'kol' 
                    ? "Describe your experience in crypto marketing, audience size, engagement rates, and notable collaborations..."
                    : "Describe your company/project, services offered, and how you envision our partnership..."
                  }
                  required
                />
              </div>

              {/* Portfolio */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Portfolio / Previous Work (Optional)
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="bella-input"
                  placeholder="https://yourportfolio.com or social media link"
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Additional Information (Optional)
                </label>
                <textarea
                  name="additional"
                  value={formData.additional}
                  onChange={handleInputChange}
                  className="bella-textarea"
                  placeholder="Any additional information you'd like to share..."
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button
                  type="button"
                  onClick={() => setActiveForm(null)}
                  className="bella-button-secondary flex-1"
                >
                  Back to Selection
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 bella-button ${
                    activeForm === 'kol' ? 'bella-button-primary' : 'bella-button-gold'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Info Box */}
            <div className="mt-12 bg-gradient-to-r from-bella-gray/30 to-bella-purple/10 rounded-xl p-6 border border-bella-blue/20">
              <h4 className="text-lg font-bold text-white mb-3">What happens next?</h4>
              <ul className="bella-text space-y-2">
                <li>✅ Your application will be reviewed by our team</li>
                <li>✅ We'll respond within 24-48 hours via Telegram or email</li>
                <li>✅ Qualified candidates will be invited for a brief discussion</li>
                <li>✅ Successful applicants join the #GENMode network</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

'use client'

import Link from 'next/link'
import { Video, Gift, Waves, TrendingUp, Box, ShieldAlert, Rocket, Package2 } from 'lucide-react'

export default function ServicesGrid() {
  const services = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Telegram Packages",
      href: "/services/telegram",
      description: "Engage with targeted communities on Telegram."
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "YouTube Promotion Service",
      href: "/services/youtube",
      description: "Reach wider audiences with professional YouTube promotions."
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "TikTok Promotion Service",
      href: "/services/tiktok",
      description: "Capture the attention of younger demographics through TikTok."
    },
    {
      icon: <Package2 className="w-8 h-8" />,
      title: "Special Sticker Service",
      href: "/services/sticker",
      description: "Add personality to your brand with custom stickers."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Solana Projects",
      href: "/services/solana",
      description: "Accelerate your Solana projects with end-to-end support."
    },
    {
      icon: <ShieldAlert className="w-8 h-8" />,
      title: "DXC Foundation",
      href: "/services/dxc-foundation",
      description: "Drive initiatives with reliable support from the DXC foundation."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Antdrop",
      href: "/services/antdrop",
      description: "Innovative solutions for airdrop management and execution."
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: "Exchange Listings",
      href: "/services/trending-listings",
      description: "Seamless listings on top exchanges with strategic marketing."
    }
  ]

  return (
    <section className="bella-section bg-bella-dark">
      <div className="bella-container text-center">
        <div className="mb-12">
          <h2 className="bella-heading">Our Services</h2>
          <p className="bella-text text-xl">
            Choose from our range of specialized crypto marketing services, each designed to meet the unique needs of your project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bella-card-hover flex items-center justify-center text-center transition-shadow duration-300"
            >
              <Link href={service.href} className="block p-8">
                <div className="flex flex-col items-center">
                  <div className="mb-4 flex items-center justify-center w-16 h-16 bg-gradient-to-r from-bella-blue to-bella-purple rounded-full">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="bella-text mt-2">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

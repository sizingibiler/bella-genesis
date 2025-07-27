import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicePageHeader from '@/components/ServicePageHeader'
import PackageCards from '@/components/PackageCards'

export const metadata = {
  title: 'Twitter/X Marketing Packages - Bella Genesis',
  description: 'Professional Twitter/X promotion campaigns with high-engagement influencers. Starter, Standard, and VIP packages available.',
}

export default function TwitterPage() {
  const packages = [
    {
      title: "🚀 Starter Pack",
      description: "Affordable, High-Quality Shares 🔥",
      features: [
        "10 Influencers",
        "Affordable sharing chain that reaches a wide audience",
        "Basic analytics report",
        "24-hour campaign duration"
      ],
      code: "TW-STARTER",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "🔵 Standard Promotion Package", 
      description: "Strong - Mid-Segment Accounts",
      features: [
        "Total 14 Influencers",
        "Provides good reach and engagement with a balanced budget",
        "Detailed analytics report",
        "48-hour campaign duration"
      ],
      code: "TW-STANDARD",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "🟣 VIP Promotion Package",
      description: "Highest Engagement and Powerful Accounts",
      features: [
        "8 Premium Influencers",
        "Provides maximum trust and visibility with prominent, high-profile accounts",
        "Comprehensive analytics report",
        "Premium support"
      ],
      code: "TW-VIP",
      color: "from-purple-600 to-purple-700",
      isVip: true
    }
  ]

  return (
    <>
      <Navbar />
      <main className="relative">
        <ServicePageHeader
          title="Twitter/X Marketing Packages"
          description="Professional Twitter/X promotion campaigns with high-engagement influencers to maximize your project's reach and impact."
          icon="🐦"
        />
        <PackageCards
          packages={packages}
          serviceType="Twitter/X Marketing"
        />
      </main>
      <Footer />
    </>
  )
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicePageHeader from '@/components/ServicePageHeader'
import PackageCards from '@/components/PackageCards'

export const metadata = {
  title: 'Solana Ecosystem Marketing - Bella Genesis',
  description: 'Comprehensive Solana blockchain marketing services. Community building, DeFi promotion, and ecosystem growth strategies.',
}

export default function SolanaPage() {
  const packages = [
    {
      title: "🌱 Ecosystem Entry",
      description: "Launch Your Solana Project",
      features: [
        "Solana community introduction",
        "Basic DeFi protocol promotion",
        "Initial ecosystem partnerships",
        "Community building foundation",
        "Twitter/Discord integration"
      ],
      code: "SOL-ENTRY01",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "⚡ Lightning Growth", 
      description: "Accelerated Solana Marketing",
      features: [
        "Multi-platform Solana campaigns",
        "DeFi community targeting",
        "NFT marketplace promotion",
        "Solana KOL partnerships",
        "Comprehensive analytics",
        "Cross-chain bridge marketing"
      ],
      code: "SOL-GROWTH01",
      color: "from-purple-600 to-indigo-700"
    },
    {
      title: "🚀 Ecosystem Domination",
      description: "Premium Solana Marketing Suite",
      features: [
        "Full ecosystem integration",
        "Premium Solana partnerships",
        "Major DeFi protocol collaboration",
        "Institutional investor outreach",
        "Custom campaign strategies",
        "24/7 dedicated support",
        "Exchange listing preparation"
      ],
      code: "SOL-VIP01",
      color: "from-gradient-start to-gradient-end",
      isVip: true
    }
  ]

  return (
    <>
      <Navbar />
      <main className="relative">
        <ServicePageHeader
          title="Solana Ecosystem Marketing"
          description="Specialized marketing services for the Solana blockchain ecosystem. From DeFi protocols to NFT projects, we help you succeed in the fastest-growing blockchain network."
          icon="⚡"
        />
        <PackageCards
          packages={packages}
          serviceType="Solana Marketing"
        />
      </main>
      <Footer />
    </>
  )
}

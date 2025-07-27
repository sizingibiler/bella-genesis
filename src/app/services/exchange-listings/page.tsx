import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicePageHeader from '@/components/ServicePageHeader'
import PackageCards from '@/components/PackageCards'

export const metadata = {
  title: 'Exchange Listings - Bella Genesis',
  description: 'Professional exchange listing services for crypto projects. From DEX to CEX listings with marketing support and application assistance.',
}

export default function ExchangeListingsPage() {
  const packages = [
    {
      title: "🎯 DEX Launch Package",
      description: "Decentralized Exchange Listings",
      features: [
        "Uniswap/SushiSwap listing prep",
        "Liquidity pool setup guidance",
        "Basic listing promotion",
        "Community announcement campaign",
        "Social media buzz creation"
      ],
      code: "EX-DEX01",
      color: "from-green-500 to-green-600"
    },
    {
      title: "🏛️ Tier 2 CEX Package", 
      description: "Mid-Tier Centralized Exchange Listings",
      features: [
        "Gate.io, KuCoin, Bitget applications",
        "Professional listing documentation",
        "Marketing campaign coordination",
        "Community building pre-launch",
        "Post-listing promotion strategy",
        "Application follow-up support"
      ],
      code: "EX-T2CEX01",
      color: "from-blue-600 to-indigo-700"
    },
    {
      title: "👑 Tier 1 CEX Elite",
      description: "Premium Exchange Listing Suite",
      features: [
        "Binance, Coinbase, Kraken preparation",
        "Full compliance documentation",
        "Legal review and support",
        "Premium marketing campaigns",
        "Institutional investor introductions",
        "Dedicated listing specialist",
        "Market maker connections",
        "Post-listing growth strategy"
      ],
      code: "EX-T1CEX01",
      color: "from-gradient-start to-gradient-end",
      isVip: true
    }
  ]

  return (
    <>
      <Navbar />
      <main className="relative">
        <ServicePageHeader
          title="Exchange Listings"
          description="Professional exchange listing services to get your token on major exchanges. From application preparation to post-listing marketing support."
          icon="🏦"
        />
        <PackageCards
          packages={packages}
          serviceType="Exchange Listings"
        />
      </main>
      <Footer />
    </>
  )
}

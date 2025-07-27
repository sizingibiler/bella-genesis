import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServicesHero from '@/components/ServicesHero'
import ServicesGrid from '@/components/ServicesGrid'

export const metadata = {
  title: 'Services - Bella Genesis | Crypto Marketing Solutions',
  description: 'Comprehensive crypto marketing services including Twitter campaigns, Solana projects, exchange listings, and strategic partnerships.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ServicesHero />
        <ServicesGrid />
      </main>
      <Footer />
    </>
  )
}

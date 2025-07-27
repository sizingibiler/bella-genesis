import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import GENModeSection from '@/components/GENModeSection'
import PopularPackages from '@/components/PopularPackages'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <GENModeSection />
        <PopularPackages />
      </main>
      <Footer />
    </>
  )
}

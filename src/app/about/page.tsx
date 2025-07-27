import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AboutHero from '@/components/AboutHero'
import VisionSection from '@/components/VisionSection'
import WhyChooseUs from '@/components/WhyChooseUs'

export const metadata = {
  title: 'About Us - Bella Genesis | New Generation Marketing',
  description: 'Learn about Bella Genesis, the strategy brand focused on creating real impact in the crypto world with innovative marketing solutions.',
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <AboutHero />
        <VisionSection />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}

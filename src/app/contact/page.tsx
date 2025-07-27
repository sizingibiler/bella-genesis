import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactHero from '@/components/ContactHero'
import ContactInfo from '@/components/ContactInfo'

export const metadata = {
  title: 'Contact Us - Bella Genesis | Get in Touch',
  description: 'Contact Bella Genesis for professional crypto marketing services. Available 24/7 via Telegram, Twitter, and email.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ContactHero />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}

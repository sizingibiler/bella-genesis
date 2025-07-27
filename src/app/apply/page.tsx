import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplyHero from '@/components/ApplyHero'
import ApplicationForms from '@/components/ApplicationForms'

export const metadata = {
  title: 'Apply - Bella Genesis | Join Our Network',
  description: 'Join the Bella Genesis network as a KOL or strategic partner. Apply now to be part of the #GENMode movement.',
}

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <ApplyHero />
        <ApplicationForms />
      </main>
      <Footer />
    </>
  )
}

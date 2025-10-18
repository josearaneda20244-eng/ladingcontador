import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Experience from '@/components/Experience'
import Authority from '@/components/Authority'
import Metrics from '@/components/Metrics'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Experience />
      <Authority />
      <Metrics />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  )
}


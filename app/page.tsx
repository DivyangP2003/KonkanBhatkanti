import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HeroSection from '@/components/sections/HeroSection'
import DestinationsCarousel from '@/components/sections/DestinationsCarousel'
import ExperiencesGrid from '@/components/sections/ExperiencesGrid'
import HeritageShowcase from '@/components/sections/HeritageShowcase'
import TripPlanningGuide from '@/components/sections/TripPlanningGuide'
import HiddenGemsDiscovery from '@/components/sections/HiddenGemsDiscovery'

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <HeroSection />
        <DestinationsCarousel />
        <ExperiencesGrid />
        <HeritageShowcase />
        <TripPlanningGuide />
        <HiddenGemsDiscovery />
      </main>
      <Footer />
    </>
  )
}

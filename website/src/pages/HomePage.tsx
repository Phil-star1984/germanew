import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { FilmSection } from '../sections/FilmSection'
import { HeroSection } from '../sections/HeroSection'
import { InitiatorSection } from '../sections/InitiatorSection'
import { MissionsSection } from '../sections/MissionsSection'
import { OffersSection } from '../sections/OffersSection'
import { PlatformSection } from '../sections/PlatformSection'
import { PressSection } from '../sections/PressSection'
import { SummarySection } from '../sections/SummarySection'
import { TimelineSection } from '../sections/TimelineSection'
import { TransparencySection } from '../sections/TransparencySection'
import { VisionGallerySection } from '../sections/VisionGallerySection'

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SummarySection />
        <VisionGallerySection />
        <FilmSection />
        <MissionsSection />
        <TimelineSection />
        <PlatformSection />
        <OffersSection />
        <InitiatorSection />
        <PressSection />
        <TransparencySection />
      </main>
      <Footer />
    </>
  )
}

import About from './components/About'
import Agenda from './components/Agenda'
import DrinksGrid from './components/DrinksGrid'
import ExperienceGallery from './components/ExperienceGallery'
import FinalCTA from './components/FinalCTA'
import FloatingMobileCTA from './components/FloatingMobileCTA'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Location from './components/Location'
import Marquee from './components/Marquee'
import SmashLab from './components/SmashLab'
import TapCarousel from './components/TapCarousel'

export default function App() {
  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee />
        <About />
        <TapCarousel />
        <DrinksGrid />
        <ExperienceGallery />
        <Agenda />
        <SmashLab />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingMobileCTA />
    </>
  )
}

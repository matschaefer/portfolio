import { useLenis } from '@/hooks/useLenis'
import Cursor from '@/components/Cursor'
import Nav from '@/components/Nav'
import Loader from '@/components/Loader'
import GridLines from '@/components/GridLines'
import Hero from '@/components/sections/Hero'
import Work from '@/components/sections/Work'
import About from '@/components/sections/About'
import Experience from '@/components/sections/Experience'
import Skills from '@/components/sections/Skills'
import Contact from '@/components/sections/Contact'

function App() {
  useLenis()

  return (
    <>
      <Loader />
      <Cursor />
      <div className="noise" />
      <GridLines />
      <Nav />
      <main className="relative z-10 bg-paper">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  )
}

export default App

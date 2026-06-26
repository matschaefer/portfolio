import { motion } from 'framer-motion'
import { useState } from 'react'
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
  const [loaded, setLoaded] = useState(false)

  useLenis()

  return (
    <>
      <Loader onReveal={() => setLoaded(true)} />
      <Cursor />
      <motion.div
        data-app-shell
        initial={false}
        animate={{ opacity: loaded ? 1 : 0 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        style={{ pointerEvents: loaded ? 'auto' : 'none' }}
      >
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
      </motion.div>
    </>
  )
}

export default App

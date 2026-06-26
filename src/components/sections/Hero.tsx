import { motion, useScroll, useTransform } from 'framer-motion'
import { lazy, Suspense, useRef } from 'react'
import ScrambleText from '@/components/ScrambleText'

const WaveField = lazy(() => import('@/components/WaveField'))

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-[100vh] flex-col justify-center overflow-hidden px-6 pt-24 md:px-12 lg:px-16"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-6 top-28 hidden h-[300px] w-[400px] overflow-hidden bg-ink md:right-12 md:block lg:right-16 lg:h-[380px] lg:w-[480px]"
      >
        <Suspense fallback={null}>
          <WaveField />
        </Suspense>
        <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
          /system.render
        </span>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col gap-0">
        <div className="reveal-mask pt-[0.28em]">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-fluid-hero font-black leading-[0.85] tracking-brutal"
          >
            MATTHIAS
          </motion.h1>
        </div>
        <div className="reveal-mask pt-[0.28em]">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-fluid-hero font-black leading-[0.85] tracking-brutal"
          >
            SCHAEFER
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 flex items-center gap-4 border-t border-ink pt-5"
        >
          <span className="font-display text-xs font-bold uppercase tracking-[0.2em]">
            Driven by
          </span>
          <ScrambleText
            text="ENGINEERING SYSTEMS ARCHITECTURE PERFORMANCE"
            trigger="mount"
            duration={1400}
            className="font-display text-sm font-black uppercase tracking-[0.05em]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-6 bottom-10 z-10 flex items-end justify-between md:inset-x-12 lg:inset-x-16"
      >
        <p className="max-w-xs font-display text-base font-medium leading-snug md:text-lg">
          Fullstack Developer building scalable digital systems.
        </p>
        <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-px bg-ink"
          />
          Scroll
        </div>
      </motion.div>
    </section>
  )
}

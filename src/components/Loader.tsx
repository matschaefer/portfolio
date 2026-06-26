import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onReveal }: { onReveal: () => void }) {
  const [visible, setVisible] = useState(true)
  const [release, setRelease] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1700

    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)

      if (pct >= 100) {
        clearInterval(interval)
        setRelease(true)
        setTimeout(onReveal, 180)
        setTimeout(() => setVisible(false), 900)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [onReveal])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] pointer-events-none overflow-hidden bg-paper px-6 py-6 text-ink md:px-12 lg:px-16"
        >
          <motion.div
            className="absolute inset-x-6 top-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-ink/45 md:inset-x-12 lg:inset-x-16"
            animate={{ opacity: release ? 0 : 1, y: release ? -8 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span>Portfolio</span>
            <span>{String(progress).padStart(2, '0')}%</span>
          </motion.div>

          <motion.div
            className="absolute inset-x-6 top-16 h-px bg-ink/10 md:inset-x-12 lg:inset-x-16"
            animate={{ opacity: release ? 0 : 1 }}
            transition={{ duration: 0.35 }}
          >
            <motion.div
              className="h-full origin-left bg-ink"
              animate={{ scaleX: progress / 100 }}
              transition={{ duration: 0.16, ease: 'linear' }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-x-6 top-1/2 -translate-y-1/2 md:inset-x-12 lg:inset-x-16"
            animate={{
              opacity: release ? 0 : 1,
              y: release ? -24 : 0,
              scale: release ? 0.985 : 1,
            }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[14vw] font-black uppercase leading-[0.82] tracking-brutal md:text-[10vw]"
              >
                Matthias
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '105%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[14vw] font-black uppercase leading-[0.82] tracking-brutal md:text-[10vw]"
              >
                Schaefer
              </motion.h1>
            </div>
          </motion.div>

          <motion.div
            className="absolute inset-x-6 bottom-6 flex items-end justify-between border-t border-ink/15 pt-4 md:inset-x-12 lg:inset-x-16"
            animate={{ opacity: release ? 0 : 1, y: release ? 10 : 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-ink/45">
              Fullstack Developer
            </span>
            <span className="h-2 w-2 bg-ink" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

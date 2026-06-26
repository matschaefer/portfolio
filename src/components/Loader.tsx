import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const SEGMENTS = 64
const ACCENT_LINES = [12, 26, 41, 53]

export default function Loader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const start = Date.now()
    const duration = 1500

    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const pct = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(pct)
      if (pct >= 100) {
        clearInterval(interval)
        setTimeout(() => setVisible(false), 350)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const filled = Math.round((progress / 100) * SEGMENTS)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-paper px-6 py-6 md:px-10 md:py-8"
        >
          <div className="flex items-center gap-px">
            {Array.from({ length: SEGMENTS }).map((_, i) => (
              <div
                key={i}
                className="h-5 flex-1 transition-colors duration-150"
                style={{
                  backgroundColor: i < filled ? '#111111' : 'rgba(17,17,17,0.1)',
                }}
              />
            ))}
            <span className="ml-4 shrink-0 font-mono text-sm tabular-nums">
              {String(progress).padStart(2, '0')}%
            </span>
          </div>

          <div className="relative flex items-end gap-2 overflow-hidden">
            {ACCENT_LINES.map((left, i) => (
              <motion.span
                key={left}
                className="absolute bottom-0 w-px bg-ink"
                style={{ left: `${left}%` }}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: ['0%', '60%', '20%'], opacity: [0, 1, 0.6] }}
                transition={{
                  duration: 1.8,
                  delay: i * 0.15,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <div className="reveal-mask">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-[14vw] font-black uppercase leading-[0.85] tracking-brutal md:text-[9vw]"
              >
                Schaefer
              </motion.h1>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ value }: { value: string }) {
  const target = parseInt(value, 10)
  const padLength = value.length
  const [display, setDisplay] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView || Number.isNaN(target)) return
    const duration = 900
    const start = performance.now()

    let frame: number
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      setDisplay(Math.round(progress * target))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target])

  return <span ref={ref}>{String(display).padStart(padLength, '0')}</span>
}

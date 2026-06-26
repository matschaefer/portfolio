import { useEffect, useRef, useState } from 'react'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

interface ScrambleTextProps {
  text: string
  className?: string
  trigger?: 'view' | 'hover' | 'mount'
  duration?: number
}

export default function ScrambleText({
  text,
  className = '',
  trigger = 'view',
  duration = 900,
}: ScrambleTextProps) {
  const [display, setDisplay] = useState(text)
  const ref = useRef<HTMLSpanElement>(null)
  const playedRef = useRef(false)
  const frameRef = useRef<number>()

  const scramble = () => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current)
    const start = performance.now()
    const len = text.length

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration)
      const revealCount = Math.floor(progress * len)
      let out = ''
      for (let i = 0; i < len; i++) {
        if (text[i] === ' ') {
          out += ' '
        } else if (i < revealCount) {
          out += text[i]
        } else {
          out += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setDisplay(out)
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      } else {
        setDisplay(text)
      }
    }
    frameRef.current = requestAnimationFrame(tick)
  }

  useEffect(() => {
    if (trigger === 'mount') {
      scramble()
      return
    }
    if (trigger !== 'view' || !ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !playedRef.current) {
          playedRef.current = true
          scramble()
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trigger])

  useEffect(() => {
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={trigger === 'hover' ? scramble : undefined}
    >
      {display}
    </span>
  )
}

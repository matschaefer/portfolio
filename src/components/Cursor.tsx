import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isTouch, setIsTouch] = useState(false)
  const [label, setLabel] = useState('')
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { damping: 30, stiffness: 400, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 400, mass: 0.4 })
  const visibleRef = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true)
      return
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      if (!visibleRef.current) {
        visibleRef.current = true
        setIsVisible(true)
      }

      const target = e.target as HTMLElement | null
      const interactive = target?.closest('[data-cursor="link"]') as HTMLElement | null

      if (interactive) {
        setIsPointer(true)
        setLabel(interactive.getAttribute('data-cursor-label') ?? '')
      } else {
        setIsPointer(false)
        setLabel('')
      }
    }

    const reset = () => {
      setIsPointer(false)
      setLabel('')
      visibleRef.current = false
      setIsVisible(false)
    }

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', reset)
    window.addEventListener('blur', reset)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', reset)
      window.removeEventListener('blur', reset)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (isTouch) return null

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[210] mix-blend-difference"
      style={{ x: springX, y: springY, opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-paper text-[10px] uppercase tracking-widest text-paper"
        animate={{
          width: isPointer ? 84 : 8,
          height: isPointer ? 84 : 8,
          marginLeft: isPointer ? -42 : -4,
          marginTop: isPointer ? -42 : -4,
          backgroundColor: isPointer ? 'transparent' : '#ffffff',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      >
        <span className="px-1 text-center leading-tight">{isPointer ? label : ''}</span>
      </motion.div>
    </motion.div>
  )
}

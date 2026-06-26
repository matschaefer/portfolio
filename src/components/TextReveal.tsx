import { motion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'

interface TextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}

export default function TextReveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: TextRevealProps) {
  const Wrapper = as as ElementType
  return (
    <motion.div
      className="reveal-mask"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      <motion.div
        variants={{ hidden: { y: '110%' }, visible: { y: '0%' } }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <Wrapper className={className}>{children}</Wrapper>
      </motion.div>
    </motion.div>
  )
}

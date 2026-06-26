import { motion } from 'framer-motion'
import { useState } from 'react'
import MenuOverlay from '@/components/MenuOverlay'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[140] flex items-center justify-between px-6 py-6 md:px-12 lg:px-16"
      >
        <a
          href="#top"
          data-cursor="link"
          data-cursor-label="Home"
          className="font-display text-sm font-black uppercase tracking-brutal"
        >
          M. Schaefer
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-ink bg-paper px-2 py-2 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="link"
              data-cursor-label="Go"
              className="rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors hover:bg-ink hover:text-paper"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          data-cursor="link"
          data-cursor-label="Menu"
          className="flex flex-col items-center gap-2 rounded-full border border-ink px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] md:hidden"
        >
          Menu
        </button>

        <div
          data-cursor="link"
          data-cursor-label="Available"
          className="hidden flex-col items-center gap-2 rounded-full border border-ink bg-ink px-3 py-3 text-paper md:flex"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-paper"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <span
            className="font-mono text-[10px] uppercase tracking-[0.15em]"
            style={{ writingMode: 'vertical-rl' }}
          >
            Available
          </span>
        </div>
      </motion.header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  )
}

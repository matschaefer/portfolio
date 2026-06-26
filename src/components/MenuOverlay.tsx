import { AnimatePresence, motion } from 'framer-motion'
import { contact } from '@/data/content'

const links = [
  { href: '#top', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { label: 'GH', href: contact.github },
  { label: 'IN', href: contact.linkedin },
  { label: 'EM', href: `mailto:${contact.email}` },
]

interface MenuOverlayProps {
  open: boolean
  onClose: () => void
}

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[150] flex flex-col justify-between bg-ink px-6 py-6 text-paper md:px-12 lg:px-16"
        >
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-black uppercase tracking-brutal">
              M. Schaefer
            </span>
            <button
              onClick={onClose}
              data-cursor="link"
              data-cursor-label="Close"
              className="font-display text-sm font-black uppercase tracking-brutal"
            >
              (Close)
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onClose}
                data-cursor="link"
                data-cursor-label="Go"
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group font-display text-6xl font-black uppercase leading-[1.05] tracking-brutal transition-opacity hover:opacity-50 md:text-8xl"
              >
                {link.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-paper/20 pt-6 text-sm uppercase tracking-[0.15em]">
            <span>Based in Germany — Remote-ready</span>
            <div className="flex gap-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="link"
                  data-cursor-label="↗"
                  className="transition-opacity hover:opacity-60"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

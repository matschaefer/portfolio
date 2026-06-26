import { motion } from 'framer-motion'
import TextReveal from '@/components/TextReveal'
import Eyebrow from '@/components/Eyebrow'
import LiveClock from '@/components/LiveClock'
import { contact } from '@/data/content'

const channels = [
  { label: 'Mail', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'GitHub', value: contact.githubHandle, href: contact.github },
  { label: 'LinkedIn', value: contact.linkedinHandle, href: contact.linkedin },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex min-h-[90vh] flex-col justify-between border-t border-line bg-ink px-6 py-32 text-paper md:px-12 lg:px-16"
    >
      <div>
        <Eyebrow inverted>Contact</Eyebrow>
        <TextReveal
          as="h2"
          className="mt-8 font-display text-fluid-h1 font-black uppercase leading-[0.9] tracking-brutal text-paper"
        >
          Let&apos;s build
        </TextReveal>
        <TextReveal
          as="h2"
          delay={0.1}
          className="font-display text-fluid-h1 font-black uppercase leading-[0.9] tracking-brutal text-paper"
        >
          something solid.
        </TextReveal>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/20 pt-8 md:max-w-md">
          {channels.map((channel, i) => (
            <motion.a
              key={channel.label}
              href={channel.href}
              target={channel.label === 'Mail' ? undefined : '_blank'}
              rel={channel.label === 'Mail' ? undefined : 'noreferrer'}
              data-cursor="link"
              data-cursor-label="↗"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-baseline justify-between border-b border-paper/20 pb-3 transition-colors hover:border-paper"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-paper">
                {channel.label}
              </span>
              <span className="font-mono text-sm text-paper transition-opacity group-hover:opacity-70">
                {channel.value}
              </span>
            </motion.a>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-6 border-t border-paper/20 pt-8 md:flex-row md:items-end md:justify-between">
        <LiveClock />
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-paper">
          © {new Date().getFullYear()} Matthias Schaefer
        </span>
      </div>

      <div className="mt-10 overflow-hidden border-t border-paper/20 py-6">
        <motion.div
          className="flex w-max gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display text-4xl font-black uppercase tracking-brutal text-paper md:text-6xl"
            >
              Matthias Schaefer
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

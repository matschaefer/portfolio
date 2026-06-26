import { motion } from 'framer-motion'
import TextReveal from '@/components/TextReveal'
import Eyebrow from '@/components/Eyebrow'
import CountUp from '@/components/CountUp'
import { stats, focusTags } from '@/data/content'

export default function About() {
  return (
    <section id="about" className="border-t border-line px-6 py-32 md:px-12 lg:px-16">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <Eyebrow>Intro</Eyebrow>
        </div>

        <div className="md:col-span-9">
          <TextReveal
            as="h2"
            className="font-display text-fluid-h2 font-black leading-[1.05] tracking-brutal"
          >
            I solve complex problems through software engineering — not as a
            craft of decoration, but of structure.
          </TextReveal>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl text-lg leading-relaxed text-mute"
          >
            I&apos;m at my best when I get to stay close to the craft —
            combining a strategic, systems-level view of architecture with
            hands-on execution across the full stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {focusTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line px-4 py-1.5 font-mono text-xs uppercase tracking-wide text-mute"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <div className="mt-16 border-t border-line pt-8">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-4xl font-bold tracking-tight md:text-5xl">
                      <CountUp value={stat.value} />
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.15em] text-mute">
                      [{stat.label}]
                    </span>
                  </div>
                  <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-mute">
                    {stat.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

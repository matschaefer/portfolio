import { motion } from 'framer-motion'
import { experience } from '@/data/content'
import TextReveal from '@/components/TextReveal'
import Eyebrow from '@/components/Eyebrow'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-line px-6 py-32 md:px-12 lg:px-16">
      <Eyebrow>Experience</Eyebrow>
      <TextReveal
        as="h2"
        className="mb-16 mt-4 font-display text-fluid-h1 font-black uppercase tracking-brutal"
      >
        Track Record
      </TextReveal>

      <div className="flex flex-col gap-6">
        {experience.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col gap-6 border border-line p-8 transition-colors duration-300 hover:bg-ink md:flex-row md:items-center md:justify-between md:p-12"
          >
            <div className="flex flex-col gap-1 md:w-1/4">
              <span className="font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-paper">
                /{String(i + 1).padStart(3, '0')}
              </span>
              <span className="font-display text-2xl font-black uppercase tracking-brutal transition-colors duration-300 group-hover:text-paper md:text-4xl">
                {item.year}
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <div>
                <h3 className="font-display text-2xl font-black uppercase tracking-brutal transition-colors duration-300 group-hover:text-paper md:text-4xl">
                  {item.role}
                </h3>
                <p className="mt-1 font-display text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 group-hover:text-paper">
                  {item.org}
                </p>
              </div>
              <p className="max-w-xl text-base leading-relaxed transition-colors duration-300 group-hover:text-paper">
                {item.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-3 py-1 font-display text-xs font-bold uppercase tracking-wide transition-colors duration-300 group-hover:border-paper group-hover:text-paper"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

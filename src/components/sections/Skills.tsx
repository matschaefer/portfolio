import { motion } from 'framer-motion'
import { skills } from '@/data/content'
import TextReveal from '@/components/TextReveal'
import ScrambleText from '@/components/ScrambleText'
import Eyebrow from '@/components/Eyebrow'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-line px-6 py-32 md:px-12 lg:px-16">
      <div className="mb-16 flex items-end justify-between border-b border-ink pb-8">
        <div>
          <Eyebrow>Technical Skills</Eyebrow>
          <TextReveal as="h2" className="mt-4 font-display text-fluid-h1 font-black uppercase tracking-brutal">
            Stack
          </TextReveal>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-mute md:block">
          {String(skills.length).padStart(2, '0')} Tools
        </span>
      </div>

      <div className="flex flex-col">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.6, delay: (i % 6) * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-baseline justify-between border-b border-line px-4 py-4 transition-all duration-300 hover:bg-ink"
          >
            <ScrambleText
              text={skill.toUpperCase()}
              trigger="hover"
              className="font-display text-3xl font-black uppercase tracking-brutal transition-all duration-300 group-hover:translate-x-2 group-hover:text-paper md:text-5xl"
            />
            <span className="font-mono text-xs transition-colors duration-300 group-hover:text-paper">
              /{String(i + 1).padStart(3, '0')}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

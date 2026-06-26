import { motion } from 'framer-motion'
import { projects } from '@/data/content'
import TextReveal from '@/components/TextReveal'
import ScrambleText from '@/components/ScrambleText'
import Eyebrow from '@/components/Eyebrow'

const BIG_ASPECT = 'aspect-[3/4]'
const SMALL_ASPECT = 'aspect-[16/10]'
const stripeAngles = [135, 45, 110, 70, 150, 30]

function getAspect(index: number) {
  const row = Math.floor(index / 2)
  const col = index % 2
  const bigCol = row % 2 === 0 ? 0 : 1
  return col === bigCol ? BIG_ASPECT : SMALL_ASPECT
}

export default function Work() {
  return (
    <section id="work" className="border-t border-line px-6 py-32 md:px-12 lg:px-16">
      <div className="mb-16 flex items-end justify-between border-b border-ink pb-8">
        <div>
          <Eyebrow>Selected Work</Eyebrow>
          <TextReveal
            as="h2"
            className="mt-4 font-display text-fluid-h1 font-black uppercase tracking-brutal"
          >
            Case Studies
          </TextReveal>
        </div>
        <span className="hidden font-mono text-xs uppercase tracking-[0.2em] text-mute md:block">
          {String(projects.length).padStart(2, '0')} Projects
        </span>
      </div>

      <div className="grid grid-cols-1 items-start gap-x-8 gap-y-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <a
        href="#"
        data-cursor="link"
        data-cursor-label="View"
        onClick={(e) => e.preventDefault()}
        className={`relative block w-full overflow-hidden bg-ink ${getAspect(index)}`}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.15 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectVisual index={index} />
        </motion.div>
        <motion.div
          className="absolute inset-0 bg-paper"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: 'right' }}
        />
      </a>

      <div className="flex flex-col gap-4 border-b border-line py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-mute">/{project.index}</span>
          <h3 className="font-display text-3xl font-black uppercase tracking-brutal md:text-4xl">
            <ScrambleText text={project.title} trigger="hover" />
          </h3>
        </div>
        <a
          href="#"
          data-cursor="link"
          data-cursor-label="Open"
          onClick={(e) => e.preventDefault()}
          className="shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-mute transition-colors hover:text-ink"
        >
          Case Study →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-6 py-5">
        <Meta label="Year" value={project.year} />
        <Meta label="Role" value={project.role} />
        <Meta label="Type" value={project.type} />
        <Meta label="Stack" value={project.stack.join(' / ')} />
      </div>

      <p className="max-w-md text-base leading-relaxed text-mute">
        {project.description}
      </p>
    </motion.div>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
        {label}
      </span>
      <p className="mt-1 font-mono text-sm text-ink">{value}</p>
    </div>
  )
}

function ProjectVisual({ index }: { index: number }) {
  const angle = stripeAngles[index % stripeAngles.length]
  return (
    <div className="relative h-full w-full overflow-hidden bg-ink transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `repeating-linear-gradient(${angle}deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 24px)`,
        }}
      />
      <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-[0.25em] text-paper">
        /{String(index + 1).padStart(3, '0')}
      </div>
    </div>
  )
}

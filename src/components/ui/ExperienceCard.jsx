import { motion, useReducedMotion } from 'framer-motion'
import { Briefcase, Calendar, FolderGit2 } from 'lucide-react'
import GlassCard from './GlassCard'

const EASE_OUT = [0.22, 1, 0.36, 1]

/**
 * Reusable timeline item card for internships and technical training.
 */
export default function ExperienceCard({ item, index = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.48, delay: index * 0.1, ease: EASE_OUT }}
      className="relative pl-8 sm:pl-10"
    >
      {/* Timeline Indicator Dot */}
      <span
        aria-hidden="true"
        className="absolute top-6 left-0 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent-secondary bg-surface-card shadow-soft"
      >
        <span className="h-2 w-2 rounded-full bg-accent-primary" />
      </span>

      <GlassCard hoverable padding="md" className="bg-surface-card">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent-primary">
              <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{item.organization}</span>
            </div>
            <h4 className="mt-1.5 font-heading text-lg font-semibold text-text-primary sm:text-xl">
              {item.role}
            </h4>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {item.duration && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg-primary px-3 py-1 text-xs font-medium text-text-secondary">
                <Calendar className="h-3 w-3 text-accent-primary" aria-hidden="true" />
                <span>{item.duration}</span>
              </span>
            )}
            <span className="rounded-full border border-border bg-bg-secondary px-3 py-1 text-xs font-medium text-accent-primary">
              {item.type}
            </span>
          </div>
        </div>

        <p className="mt-3.5 text-sm leading-relaxed text-text-secondary sm:text-base">
          {item.description}
        </p>

        {item.projectReference && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border bg-bg-primary px-3 py-1.5 text-xs font-medium text-text-primary">
            <FolderGit2 className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
            <span>Project reference: {item.projectReference}</span>
          </div>
        )}
      </GlassCard>
    </motion.div>
  )
}


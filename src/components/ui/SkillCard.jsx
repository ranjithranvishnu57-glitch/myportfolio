import { motion, useReducedMotion } from 'framer-motion'
import GlassCard from './GlassCard'
import SkillItem from './SkillItem'

const EASE_OUT = [0.22, 1, 0.36, 1]

/**
 * Reusable skill category card with category icon, title, and technology grid.
 */
export default function SkillCard({ title, icon: Icon, items, index = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: EASE_OUT }}
    >
      <GlassCard hoverable padding="md" className="h-full bg-surface-card">
        <div className="flex items-center gap-3.5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-primary">
            {Icon && <Icon className="h-5 w-5" aria-hidden="true" />}
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-text-primary sm:text-xl">
              {title}
            </h3>
            <p className="text-xs text-text-secondary">
              {items.length} {items.length === 1 ? 'technology' : 'technologies'}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {items.map((tech) => (
            <SkillItem key={tech.id} id={tech.id} name={tech.name} />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}


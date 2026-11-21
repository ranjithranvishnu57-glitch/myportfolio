import { motion, useReducedMotion } from 'framer-motion'
import TechIcon from './TechIcon'

/**
 * Reusable interactive technology tile inside a SkillCard.
 */
export default function SkillItem({ id, name }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      whileHover={prefersReducedMotion ? undefined : { y: -2 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className="group flex items-center gap-3 rounded-xl border border-border bg-bg-primary px-3.5 py-2.5 transition-colors duration-200 hover:border-accent-secondary hover:bg-surface-card hover:shadow-soft"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-card text-text-secondary transition-colors duration-200 group-hover:border-accent-secondary group-hover:text-accent-primary">
        <TechIcon id={id} className="h-4.5 w-4.5" />
      </span>
      <span className="text-sm font-medium text-text-primary">{name}</span>
    </motion.div>
  )
}


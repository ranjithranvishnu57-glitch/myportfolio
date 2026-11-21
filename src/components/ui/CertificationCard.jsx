import { motion, useReducedMotion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import Button from './Button'
import GlassCard from './GlassCard'

const EASE_OUT = [0.22, 1, 0.36, 1]

/**
 * Reusable certification card with subtle lavender accent and optional
 * View Certificate action when a verified URL is provided.
 */
export default function CertificationCard({ item, index = 0 }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.48, delay: index * 0.08, ease: EASE_OUT }}
    >
      <GlassCard
        hoverable
        padding="md"
        className="relative flex h-full flex-col justify-between overflow-hidden bg-surface-card"
      >
        {/* Subtle Top Lavender Gradient Accent */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent-primary/70 via-accent-secondary to-transparent"
        />

        <div>
          <div className="flex items-start justify-between gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-primary">
              <Award className="h-5 w-5" aria-hidden="true" />
            </div>

            <span className="rounded-full border border-border bg-bg-primary px-3 py-1 text-xs font-medium text-text-secondary">
              {item.issuer}
            </span>
          </div>

          <h4 className="mt-4 font-heading text-lg font-semibold leading-snug text-text-primary sm:text-xl">
            {item.title}
          </h4>

          <p className="mt-2 text-sm text-text-secondary">{item.category}</p>
        </div>

        {(item.issueDate || item.certificateUrl) && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            {item.issueDate && (
              <span className="text-xs font-medium text-text-secondary">
                Issued {item.issueDate}
              </span>
            )}
            {item.certificateUrl && (
              <Button
                href={item.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="sm"
                icon={ExternalLink}
              >
                View Certificate
              </Button>
            )}
          </div>
        )}
      </GlassCard>
    </motion.div>
  )
}


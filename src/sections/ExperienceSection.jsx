import { motion, useReducedMotion } from 'framer-motion'
import SectionContainer from '../components/layout/SectionContainer'
import CertificationCard from '../components/ui/CertificationCard'
import ExperienceCard from '../components/ui/ExperienceCard'
import SectionHeading from '../components/ui/SectionHeading'
import {
  CERTIFICATION_ITEMS,
  EXPERIENCE_HEADER,
  EXPERIENCE_ITEMS,
} from '../data/experience'

const EASE_OUT = [0.22, 1, 0.36, 1]

export default function ExperienceSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer id="experience" surface="secondary" className="relative overflow-hidden">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <SectionHeading
          eyebrow={EXPERIENCE_HEADER.eyebrow}
          title={EXPERIENCE_HEADER.title}
          description={EXPERIENCE_HEADER.description}
          titleId="experience-heading"
        />
      </motion.div>

      {/* Subsection A: Experience & Training */}
      <div className="mt-12">
        <div className="mb-6 flex items-center gap-3">
          <h3 className="font-heading text-xl font-semibold text-text-primary sm:text-2xl">
            Experience &amp; Training
          </h3>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="relative ml-2 border-l border-accent-secondary/80 space-y-6 sm:ml-3">
          {EXPERIENCE_ITEMS.map((item, index) => (
            <ExperienceCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>

      {/* Subsection B: Certifications */}
      <div className="mt-14">
        <div className="mb-6 flex items-center gap-3">
          <h3 className="font-heading text-xl font-semibold text-text-primary sm:text-2xl">
            Certifications
          </h3>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {CERTIFICATION_ITEMS.map((item, index) => (
            <CertificationCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}


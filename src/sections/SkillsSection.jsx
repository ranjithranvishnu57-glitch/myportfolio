import { motion, useReducedMotion } from 'framer-motion'
import SectionContainer from '../components/layout/SectionContainer'
import SectionHeading from '../components/ui/SectionHeading'
import SkillCard from '../components/ui/SkillCard'
import { SKILL_CATEGORIES, SKILLS_HEADER } from '../data/skills'

const EASE_OUT = [0.22, 1, 0.36, 1]

export default function SkillsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer id="skills" surface="secondary" className="relative overflow-hidden">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <SectionHeading
          eyebrow={SKILLS_HEADER.eyebrow}
          title={SKILLS_HEADER.title}
          description={SKILLS_HEADER.description}
          titleId="skills-heading"
        />
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
        {SKILL_CATEGORIES.map((category, index) => (
          <SkillCard
            key={category.id}
            title={category.title}
            icon={category.icon}
            items={category.items}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  )
}


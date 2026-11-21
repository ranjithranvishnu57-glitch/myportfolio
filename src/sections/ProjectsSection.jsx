import { motion, useReducedMotion } from 'framer-motion'
import SectionContainer from '../components/layout/SectionContainer'
import ProjectShowcase from '../components/ui/ProjectShowcase'
import SectionHeading from '../components/ui/SectionHeading'
import { PROJECTS, PROJECTS_HEADER } from '../data/projects'

const EASE_OUT = [0.22, 1, 0.36, 1]

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <SectionContainer id="projects" surface="primary" className="relative overflow-hidden">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: EASE_OUT }}
      >
        <SectionHeading
          eyebrow={PROJECTS_HEADER.eyebrow}
          title={PROJECTS_HEADER.title}
          description={PROJECTS_HEADER.description}
          titleId="projects-heading"
        />
      </motion.div>

      <ProjectShowcase projects={PROJECTS} />
    </SectionContainer>
  )
}


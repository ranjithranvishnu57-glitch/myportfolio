import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import Button from './Button'
import GlassCard from './GlassCard'
import ProjectPreview from './ProjectPreview'
import TechIcon from './TechIcon'

const EASE_OUT = [0.22, 1, 0.36, 1]

function GithubMark({ className }) {
  return <TechIcon id="github" className={className} />
}

/**
 * Editorial-style alternating project card with prominent preview area,
 * technology tags, and safe GitHub / Live Demo link states.
 */
export default function ProjectCard({ project, index = 0 }) {
  const prefersReducedMotion = useReducedMotion()
  const isReversed = index % 2 === 1

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.52, delay: index * 0.06, ease: EASE_OUT }}
    >
      <GlassCard
        padding="md"
        className="group bg-surface-card transition-all duration-300 hover:border-accent-secondary hover:shadow-elevated"
      >
        <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
          {/* Project Preview Area */}
          <div
            className={[
              'lg:col-span-7',
              isReversed ? 'lg:order-2' : 'lg:order-1',
            ].join(' ')}
          >
            <ProjectPreview
              title={project.title}
              image={project.image}
              variant={project.previewVariant}
              number={project.number}
            />
          </div>

          {/* Editorial Content Area */}
          <div
            className={[
              'flex flex-col justify-between lg:col-span-5',
              isReversed ? 'lg:order-1' : 'lg:order-2',
            ].join(' ')}
          >
            <div>
              <div className="flex items-center gap-3">
                <span className="font-heading text-xs font-semibold tracking-wider text-accent-primary">
                  PROJECT {project.number}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-text-secondary">
                {project.category}
              </p>

              <h3 className="mt-1.5 font-heading text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                {project.title}
              </h3>

              <p className="mt-3.5 text-sm leading-relaxed text-text-secondary sm:text-base">
                {project.description}
              </p>

              {/* Technology Tags */}
              <ul
                aria-label={`${project.title} technologies`}
                className="mt-5 flex flex-wrap gap-2"
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border bg-bg-primary px-3 py-1 text-xs font-medium text-text-primary transition-colors duration-200 hover:border-accent-secondary hover:bg-bg-secondary hover:text-accent-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Links — only clickable when real URLs are provided */}
            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-5">
              {project.githubUrl ? (
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                  icon={GithubMark}
                  iconPosition="left"
                >
                  GitHub
                </Button>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-bg-primary px-3.5 text-xs font-medium text-text-secondary select-none"
                >
                  <TechIcon id="github" className="h-3.5 w-3.5" />
                  <span>Repo Coming Soon</span>
                </span>
              )}

              {project.liveUrl ? (
                <Button
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="sm"
                  icon={ArrowUpRight}
                  className="group/btn"
                >
                  Live Demo
                </Button>
              ) : (
                <span
                  aria-disabled="true"
                  className="inline-flex h-9 items-center gap-2 rounded-xl border border-border bg-bg-secondary/70 px-3.5 text-xs font-medium text-text-secondary select-none"
                >
                  <Clock className="h-3.5 w-3.5 text-accent-primary" aria-hidden="true" />
                  <span>Live Demo Coming Soon</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}

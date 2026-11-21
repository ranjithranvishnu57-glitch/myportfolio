import { motion, useReducedMotion } from 'framer-motion'
import { Compass, Target } from 'lucide-react'
import profileImg from '../assets/ranjith.jpg'
import SectionContainer from '../components/layout/SectionContainer'
import GlassCard from '../components/ui/GlassCard'
import SectionHeading from '../components/ui/SectionHeading'
import { ABOUT_CONTENT } from '../data/about'

const EASE_OUT = [0.22, 1, 0.36, 1]

export default function AboutSection() {
  const prefersReducedMotion = useReducedMotion()

  const revealProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.5, delay, ease: EASE_OUT },
        }

  return (
    <SectionContainer id="about" surface="primary" className="relative overflow-hidden">
      {/* Subtle Ambient Lavender Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-12 right-[-12%] h-80 w-80 rounded-full bg-bg-secondary blur-3xl"
      />

      <div className="relative z-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        {/* LEFT COLUMN: Editorial Introduction & Profile */}
        <motion.div {...revealProps(0.05)} className="lg:col-span-7">
          <SectionHeading
            eyebrow={ABOUT_CONTENT.eyebrow}
            title={ABOUT_CONTENT.title}
            titleId="about-heading"
          />

          {/* Profile Quick-Info Bar */}
          <div className="mt-7 flex flex-col gap-4 rounded-2xl border border-border bg-surface-card p-4 shadow-soft sm:flex-row sm:items-center sm:gap-5">
            <div className="relative shrink-0">
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-secondary opacity-30 blur-sm"
              />
              <img
                src={profileImg}
                alt="Ranjith M"
                width={80}
                height={80}
                className="relative h-20 w-20 rounded-xl border border-white object-cover object-top shadow-soft"
              />
            </div>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-heading text-lg font-bold text-text-primary">
                  Ranjith M
                </h3>
                <span className="rounded-full border border-accent-secondary/50 bg-bg-secondary px-2.5 py-0.5 text-xs font-medium text-accent-primary">
                  Full Stack Developer
                </span>
              </div>
              <p className="text-xs text-text-secondary sm:text-sm">
                B.E. Computer Science &amp; Engineering &bull; Sri Sakthi Institute of Engineering and Technology
              </p>
              <p className="text-xs text-text-secondary">
                Coimbatore, Tamil Nadu
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-secondary">
            {ABOUT_CONTENT.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Focus Areas & Goal Cards */}
        <div className="grid grid-cols-1 gap-5 lg:col-span-5 lg:pt-14">
          {/* Card 1 — Focus Areas */}
          <motion.div {...revealProps(0.12)}>
            <GlassCard hoverable padding="md" className="bg-surface-card">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-primary">
                  <Compass className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent-primary">
                    {ABOUT_CONTENT.focusAreas.label}
                  </span>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                    {ABOUT_CONTENT.focusAreas.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-border bg-bg-primary px-3 py-2 text-sm font-medium text-text-primary"
                      >
                        <span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Card 2 — Current Goal */}
          <motion.div {...revealProps(0.2)}>
            <GlassCard hoverable padding="md" className="bg-surface-card">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-primary">
                  <Target className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs font-medium uppercase tracking-wider text-accent-primary">
                    {ABOUT_CONTENT.currentGoal.label}
                  </span>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary sm:text-base">
                    {ABOUT_CONTENT.currentGoal.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Design & Engineering Quote Badge */}
          <motion.div {...revealProps(0.28)}>
            <div className="rounded-2xl border border-border bg-bg-secondary/70 p-4.5">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-6 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
                <span className="text-xs font-medium uppercase tracking-wider text-accent-primary">
                  Design &amp; Engineering
                </span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-text-secondary sm:text-sm">
                {ABOUT_CONTENT.interestsNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  )
}

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Code2, Mail, Sparkles } from 'lucide-react'
import profileImg from '../assets/ranjith.jpg'
import Button from '../components/ui/Button'
import TechIcon from '../components/ui/TechIcon'
import { scrollToSection } from '../utils/scrollToSection'

const HERO_TECH_STACK = [
  'React.js',
  'Node.js',
  'MongoDB',
  'Express.js',
  'JavaScript',
]

const LINKEDIN_URL = 'https://www.linkedin.com/in/ranjithm57/'
const GITHUB_URL = 'https://github.com/ranjithranvishnu57-glitch'

const EASE_OUT = [0.22, 1, 0.36, 1]

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = (delay = 0) =>
    prefersReducedMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: EASE_OUT },
        }

  const handleCtaClick = (event, targetId) => {
    event.preventDefault()
    scrollToSection(targetId)
  }

  return (
    <section
      id="home"
      data-section="home"
      className="relative flex min-h-[calc(100dvh-72px)] flex-col justify-between overflow-hidden bg-bg-primary pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-8"
    >
      {/* Subtle Ambient Light-Mode Backdrop Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-accent-secondary/20 blur-3xl sm:h-[540px] sm:w-[540px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-8%] h-[300px] w-[300px] rounded-full bg-bg-secondary blur-3xl"
      />

      <div className="container-shell relative z-10 my-auto">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* LEFT COLUMN: Editorial Typography & CTAs */}
          <div className="lg:col-span-6">
            {/* Main Heading */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]"
            >
              Hi, I&apos;m Ranjith.
            </motion.h1>

            {/* Professional Title & Student Subtitle */}
            <motion.div {...fadeUp(0.22)} className="mt-3 space-y-1">
              <p className="font-heading text-xl font-semibold tracking-tight text-accent-primary sm:text-2xl lg:text-[1.65rem]">
                Aspiring Full Stack Developer
              </p>
              <p className="font-heading text-sm font-medium tracking-wide text-text-secondary sm:text-base">
                3rd Year B.E. Computer Science Student
              </p>
            </motion.div>

            {/* Supporting Text */}
            <motion.p
              {...fadeUp(0.3)}
              className="mt-4 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
            >
              I build modern web applications using the MERN stack and explore
              emerging AI technologies. Passionate about learning,
              problem-solving, and creating meaningful digital experiences.
            </motion.p>

            {/* Compact Technology Stack Row */}
            <motion.ul
              {...fadeUp(0.34)}
              aria-label="Core technology stack"
              className="mt-5 flex flex-wrap items-center gap-2"
            >
              {HERO_TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border bg-surface-card px-3 py-1 text-xs font-medium text-text-primary shadow-soft transition-colors duration-200 hover:border-accent-secondary hover:bg-bg-secondary/70"
                >
                  {tech}
                </li>
              ))}
            </motion.ul>

            {/* CTA Group & Social Links */}
            <motion.div
              {...fadeUp(0.4)}
              className="mt-7 flex flex-wrap items-center gap-3.5 sm:gap-4"
            >
              <Button
                href="#projects"
                onClick={(e) => handleCtaClick(e, 'projects')}
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                View My Projects
              </Button>

              <Button
                href="#contact"
                onClick={(e) => handleCtaClick(e, 'contact')}
                variant="secondary"
                size="lg"
                icon={Mail}
                iconPosition="left"
              >
                Contact Me
              </Button>

              <div className="flex items-center gap-2 sm:ml-1">
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-card text-text-secondary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-secondary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
                >
                  <TechIcon id="linkedin" className="h-5 w-5" />
                </a>

                {GITHUB_URL ? (
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-card text-text-secondary shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-accent-secondary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
                  >
                    <TechIcon id="github" className="h-5 w-5" />
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    title="GitHub profile URL not added yet"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-bg-secondary/60 text-text-secondary/60 select-none"
                  >
                    <TechIcon id="github" className="h-5 w-5" />
                  </span>
                )}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Premium Profile Portrait Showcase */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE_OUT }}
            className="flex justify-center lg:col-span-6 lg:justify-end lg:translate-x-6"
          >
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[400px] lg:mr-0 lg:ml-auto lg:max-w-[430px]">
              {/* Outer Glow & Decorative Gradient Aura */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-accent-primary/25 via-accent-secondary/30 to-purple-300/20 blur-2xl"
              />

              {/* Main Portrait Card */}
              <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-surface-card/90 p-3 shadow-elevated backdrop-blur-xl transition-all duration-300 hover:shadow-glow">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-bg-secondary">
                  <img
                    src={profileImg}
                    alt="Ranjith M — Full Stack Developer"
                    width={430}
                    height={570}
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out hover:scale-[1.03]"
                  />
                  {/* Subtle glass reflection highlight */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg-primary/50 via-transparent to-white/10"
                  />
                </div>

                {/* Floating Status Pill */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-border/80 bg-surface-card/95 px-3 py-1.5 shadow-soft backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-primary" />
                  </span>
                  <span className="font-heading text-xs font-semibold text-text-primary">
                    Full Stack Developer
                  </span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute right-6 bottom-6 left-6 flex items-center justify-between rounded-xl border border-white/80 bg-surface-card/95 p-3.5 shadow-elevated backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-bg-secondary text-accent-primary">
                      <Code2 className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <p className="font-heading text-xs font-bold text-text-primary">
                        MERN &amp; AI
                      </p>
                      <p className="text-[11px] text-text-secondary">
                        Modern Web Systems
                      </p>
                    </div>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent-secondary/30 text-accent-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        {...fadeUp(0.48)}
        className="container-shell relative z-10 mt-6 flex justify-center lg:mt-4"
      >
        <a
          href="#about"
          onClick={(e) => handleCtaClick(e, 'about')}
          aria-label="Scroll to next section"
          className="group inline-flex flex-col items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
        >
          <span>Scroll to explore</span>
          <motion.span
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, 5, 0] }
            }
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </motion.span>
        </a>
      </motion.div>
    </section>
  )
}


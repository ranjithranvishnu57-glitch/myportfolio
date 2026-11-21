import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../../data/navigation'
import Button from '../ui/Button'

/**
 * Sticky responsive navigation bar with "RM" monogram logo,
 * center section links with active indicator, and "Let's Talk" CTA.
 */
export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]'))
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-section')
          if (id) setActiveSection(id)
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mobileMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  const scrollToSection = (event, id) => {
    event.preventDefault()
    setActiveSection(id)
    setMobileMenuOpen(false)

    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState(null, '', `#${id}`)
    }
  }

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-bg-primary/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-bg-primary/60 backdrop-blur-md',
      ].join(' ')}
    >
      <div className="container-shell">
        <div className="flex h-16 items-center justify-between gap-4 sm:h-[72px]">
          {/* LEFT: Minimal Personal Logo ("RM") */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            aria-label="RM — Back to top"
            className="group inline-flex items-center rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-card font-heading text-sm font-bold tracking-tight text-text-primary shadow-soft transition-all duration-200 group-hover:border-accent-secondary group-hover:text-accent-primary">
              RM
            </span>
          </a>

          {/* CENTER: Desktop Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center rounded-full border border-border bg-surface-card/85 p-1 shadow-soft"
          >
            {NAV_LINKS.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.id)}
                  aria-current={isActive ? 'location' : undefined}
                  className={[
                    'relative rounded-full px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors duration-200 lg:px-3.5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40',
                    isActive
                      ? 'text-text-primary'
                      : 'text-text-secondary hover:text-text-primary',
                  ].join(' ')}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      className="absolute inset-0 -z-10 rounded-full bg-bg-secondary"
                    />
                  )}
                  {item.label}
                </a>
              )
            })}
          </nav>

          {/* RIGHT: CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <div className="hidden md:block">
              <Button
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                size="sm"
                icon={ArrowUpRight}
              >
                Let&apos;s Talk
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-card text-text-primary shadow-soft transition-colors hover:border-accent-secondary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-bg-primary/95 backdrop-blur-xl md:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="container-shell flex flex-col gap-1 py-4"
            >
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.id)}
                    aria-current={isActive ? 'location' : undefined}
                    className={[
                      'flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40',
                      isActive
                        ? 'bg-bg-secondary text-accent-primary'
                        : 'text-text-secondary hover:bg-bg-secondary/60 hover:text-text-primary',
                    ].join(' ')}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" />
                    )}
                  </a>
                )
              })}

              <div className="mt-3 pt-3 border-t border-border">
                <Button
                  href="#contact"
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="w-full"
                  icon={ArrowUpRight}
                >
                  Let&apos;s Talk
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


import { ArrowUp } from 'lucide-react'
import { CONTACT_INFO } from '../../data/contact'
import { scrollToSection } from '../../utils/scrollToSection'

const CURRENT_YEAR = new Date().getFullYear()

/**
 * Minimal, responsive portfolio footer with RM monogram, dynamic year,
 * Back to Top action, and verified social links (when configured).
 */
export default function Footer() {
  const verifiedSocials = CONTACT_INFO.channels.filter((channel) => Boolean(channel.href))

  const handleBackToTop = (event) => {
    event.preventDefault()
    scrollToSection('home')
  }

  return (
    <footer className="border-t border-border bg-bg-primary py-10">
      <div className="container-shell">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left: Monogram & Credit */}
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-surface-card font-heading text-sm font-bold text-text-primary shadow-soft">
              RM
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-text-primary">
                Designed &amp; Built by Ranjith
              </p>
              <p className="text-xs text-text-secondary">
                &copy; {CURRENT_YEAR} All rights reserved.
              </p>
            </div>
          </div>

          {/* Right: Verified Socials (if configured) & Back to Top */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {verifiedSocials.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.id !== 'email' && item.id !== 'phone' ? '_blank' : undefined}
                rel={item.id !== 'email' && item.id !== 'phone' ? 'noopener noreferrer' : undefined}
                className="text-xs font-medium text-text-secondary transition-colors hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 rounded-lg px-2 py-1"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#home"
              onClick={handleBackToTop}
              className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-surface-card px-3.5 py-2 text-xs font-medium text-text-primary shadow-soft transition-colors hover:border-accent-secondary hover:text-accent-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

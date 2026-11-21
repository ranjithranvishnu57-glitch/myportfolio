import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'
import GlassCard from './GlassCard'
import TechIcon from './TechIcon'

function ChannelIcon({ id }) {
  if (id === 'email') {
    return <Mail className="h-5 w-5" aria-hidden="true" />
  }
  if (id === 'phone') {
    return <Phone className="h-5 w-5" aria-hidden="true" />
  }
  if (id === 'location') {
    return <MapPin className="h-5 w-5" aria-hidden="true" />
  }
  if (id === 'linkedin') {
    return <TechIcon id="linkedin" className="h-5 w-5" />
  }
  return <TechIcon id="github" className="h-5 w-5" />
}

/**
 * Reusable contact channel card supporting verified links and safe placeholders.
 */
export default function ContactInfoCard({ channel }) {
  const isConfigured = Boolean(channel.href)
  const isExternal = channel.id !== 'email' && channel.id !== 'phone'

  const innerContent = (
    <GlassCard
      hoverable={isConfigured}
      padding="sm"
      className="flex items-center justify-between gap-4 bg-surface-card"
    >
      <div className="flex min-w-0 items-center gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-secondary text-accent-primary">
          <ChannelIcon id={channel.id} />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wider text-text-secondary">
            {channel.label}
          </p>
          <p className="truncate text-sm font-medium text-text-primary">
            {channel.value ?? channel.placeholder}
          </p>
        </div>
      </div>

      {isConfigured && (
        <ArrowUpRight
          className="h-4 w-4 shrink-0 text-text-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-primary"
          aria-hidden="true"
        />
      )}
    </GlassCard>
  )

  if (!isConfigured) {
    return innerContent
  }

  return (
    <a
      href={channel.href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2"
    >
      {innerContent}
    </a>
  )
}

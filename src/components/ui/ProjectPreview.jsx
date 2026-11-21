import { CheckSquare, Compass, Layers, Sparkles, Users } from 'lucide-react'

const VARIANT_META = {
  minicrm: {
    icon: Users,
    label: 'RESTful CRM & Lead Workflow',
    gradient: 'from-[#EDE9FE] via-[#FAFAFF] to-[#F1F0FA]',
  },
  mcqtest: {
    icon: CheckSquare,
    label: 'Interactive Quiz & Scoring UI',
    gradient: 'from-[#FAFAFF] via-[#F1F0FA] to-[#E9E4FD]',
  },
  pathbridge: {
    icon: Compass,
    label: 'AI / Full Stack Concept',
    gradient: 'from-[#F1F0FA] via-[#FAFAFF] to-[#EDE9FE]',
  },
  smartfocus: {
    icon: Layers,
    label: 'Focus & Productivity Concept',
    gradient: 'from-[#FAFAFF] via-[#F1F0FA] to-[#E9E4FD]',
  },
  portfolio: {
    icon: Sparkles,
    label: 'Interactive 3D Web Experience',
    gradient: 'from-[#F1F0FA] via-[#EDE9FE] to-[#FAFAFF]',
  },
}

/**
 * Renders an actual project screenshot when `image` is provided,
 * or a project-specific abstract visual composition placeholder.
 */
export default function ProjectPreview({ title, image, variant = 'pathbridge', number }) {
  const meta = VARIANT_META[variant] ?? VARIANT_META.pathbridge
  const Icon = meta.icon

  if (image) {
    return (
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-bg-secondary p-1.5 sm:p-2">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full rounded-xl object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
      </div>
    )
  }

  return (
    <div
      className={[
        'relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border bg-gradient-to-br p-6 sm:p-8',
        meta.gradient,
      ].join(' ')}
    >
      {/* Subtle geometric background composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      >
        <div className="absolute -top-10 -right-10 h-44 w-44 rounded-full border border-accent-secondary/60 bg-surface-card/45" />
        <div className="absolute -bottom-12 -left-10 h-48 w-48 rounded-full border border-border bg-accent-secondary/20" />
        <div className="absolute top-1/2 left-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-3xl border border-accent-secondary/50 bg-surface-card/60 shadow-soft backdrop-blur-sm" />
      </div>

      {/* Foreground abstract preview badge & project number */}
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-card/90 px-3 py-1 text-xs font-medium text-text-secondary shadow-soft backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-primary" aria-hidden="true" />
            Concept Preview
          </span>
          <span className="font-heading text-sm font-semibold text-accent-primary">
            {number}
          </span>
        </div>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-card text-accent-primary shadow-elevated transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-text-secondary">{meta.label}</span>
          <span className="h-1.5 w-10 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary" />
        </div>
      </div>
    </div>
  )
}


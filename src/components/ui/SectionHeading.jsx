/**
 * Reusable section heading with optional eyebrow label and supporting copy.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  titleId,
  className = '',
}) {
  const isCentered = align === 'center'

  return (
    <div
      className={[
        'max-w-2xl',
        isCentered ? 'mx-auto text-center' : 'text-left',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center rounded-full border border-border bg-bg-secondary px-3.5 py-1 text-xs font-medium tracking-wide text-accent-primary">
          {eyebrow}
        </span>
      )}

      <h2
        id={titleId}
        className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-4xl"
      >
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-base leading-relaxed text-text-secondary sm:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}


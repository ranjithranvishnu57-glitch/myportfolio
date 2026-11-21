const SURFACE_CLASSES = {
  primary: 'bg-bg-primary',
  secondary: 'bg-bg-secondary/60',
}

/**
 * Reusable section wrapper providing consistent vertical rhythm,
 * sticky-navbar scroll offset, and container width.
 */
export default function SectionContainer({
  id,
  surface = 'primary',
  children,
  className = '',
  innerClassName = '',
  ...props
}) {
  return (
    <section
      id={id}
      data-section={id}
      className={[
        'scroll-mt-24 py-16 sm:py-24',
        SURFACE_CLASSES[surface] ?? SURFACE_CLASSES.primary,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div className={['container-shell', innerClassName].filter(Boolean).join(' ')}>
        {children}
      </div>
    </section>
  )
}


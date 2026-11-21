const PADDING_CLASSES = {
  none: '',
  sm: 'p-4 sm:p-5',
  md: 'p-6 sm:p-8',
  lg: 'p-8 sm:p-10',
}

/**
 * Reusable frosted-glass card surface with #EAE8F2 border and soft elevation.
 */
export default function GlassCard({
  children,
  padding = 'md',
  hoverable = false,
  as: Component = 'div',
  className = '',
  ...props
}) {
  const classes = [
    'glass-surface rounded-2xl',
    PADDING_CLASSES[padding] ?? PADDING_CLASSES.md,
    hoverable
      ? 'transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-secondary hover:shadow-elevated'
      : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}


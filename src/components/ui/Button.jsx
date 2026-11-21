import { motion } from 'framer-motion'

const VARIANT_CLASSES = {
  primary:
    'bg-accent-primary text-white shadow-soft hover:bg-[#7C3AED] hover:shadow-elevated border border-transparent',
  secondary:
    'bg-surface-card text-text-primary border border-border shadow-soft hover:border-accent-secondary hover:bg-bg-secondary/60',
  ghost:
    'bg-transparent text-text-secondary border border-transparent hover:text-text-primary hover:bg-bg-secondary/70',
}

const SIZE_CLASSES = {
  sm: 'h-9 px-4 text-sm rounded-xl gap-2',
  md: 'h-11 px-5 text-sm rounded-xl gap-2.5',
  lg: 'h-12 px-6 text-base rounded-2xl gap-2.5',
}

/**
 * Reusable Button component supporting button and anchor rendering,
 * subtle Framer Motion interactions, and light-theme design tokens.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  className = '',
  ...props
}) {
  const classes = [
    'inline-flex items-center justify-center font-medium select-none cursor-pointer',
    'transition-colors duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
    'disabled:opacity-50 disabled:pointer-events-none',
    VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary,
    SIZE_CLASSES[size] ?? SIZE_CLASSES.md,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && iconPosition === 'left' && (
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && (
        <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
    </>
  )

  const motionProps = {
    whileHover: { y: -1 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} className={classes} {...motionProps} {...props}>
      {content}
    </motion.button>
  )
}


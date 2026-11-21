/**
 * Clean, lightweight inline SVG technology marks for the Skills section.
 */
export default function TechIcon({ id, className = 'h-5 w-5' }) {
  switch (id) {
    case 'c':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.5 20.5 7.25v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M15.2 9.2a4.2 4.2 0 1 0 0 5.6"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.5 20.5 7.25v9.5L12 21.5l-8.5-4.75v-9.5L12 2.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M11.6 9.3a3.6 3.6 0 1 0 0 5.4M14.2 12h2.4M15.4 10.8v2.4M17.6 12h1.8M18.5 11.1v1.8"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'python':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 3c-2.8 0-3.5 1.2-3.5 3v2h5v1H7.2C5.2 9 4 10.3 4 12.6c0 2.3 1.1 3.4 3 3.4h1.5v-2.2c0-1.6 1.3-2.8 3-2.8h4.2c1.4 0 2.3-.9 2.3-2.3V6c0-1.8-1.5-3-6-3Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinejoin="round"
          />
          <path
            d="M12 21c2.8 0 3.5-1.2 3.5-3v-2h-5v-1h6.3c2 0 3.2-1.3 3.2-3.6 0-2.3-1.1-3.4-3-3.4h-1.5v2.2c0 1.6-1.3 2.8-3 2.8H8.3c-1.4 0-2.3.9-2.3 2.3V18c0 1.8 1.5 3 6 3Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M10.5 10.5v5a1.8 1.8 0 0 1-3.2 1.1M16.5 11.2c-.4-.5-1-.7-1.7-.7-1 0-1.7.5-1.7 1.3 0 1.7 3.5 1.1 3.5 3.1 0 1-.8 1.6-2 1.6-.9 0-1.6-.3-2.1-.9"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'html5':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M4.5 3.5h15l-1.4 14.8L12 20.5l-6.1-2.2L4.5 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 7.5H8.7l.3 3.5h6.1l-.4 4.2-2.7.9-2.7-.9-.2-1.8"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'css3':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M4.5 3.5h15l-1.4 14.8L12 20.5l-6.1-2.2L4.5 3.5Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 7.5h7l-.4 3.5H9.2m5.9 0-.4 4.2-2.7.9-2.7-.9-.2-1.8"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'react':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="12" cy="12" r="1.8" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" stroke="currentColor" strokeWidth="1.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(60 12 12)"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9"
            ry="3.6"
            transform="rotate(120 12 12)"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'tailwindcss':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M7.5 10.5c.8-2.4 2.4-3.6 4.8-3.6 3.2 0 3.6 2.4 5.2 2.8 1.1.3 2-.1 2.8-1.1-.8 2.4-2.4 3.6-4.8 3.6-3.2 0-3.6-2.4-5.2-2.8-1.1-.3-2 .1-2.8 1.1ZM3.7 15.8c.8-2.4 2.4-3.6 4.8-3.6 3.2 0 3.6 2.4 5.2 2.8 1.1.3 2-.1 2.8-1.1-.8 2.4-2.4 3.6-4.8 3.6-3.2 0-3.6-2.4-5.2-2.8-1.1-.3-2 .1-2.8 1.1Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'nodejs':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 2.75 20 7.4v9.2L12 21.25 4 16.6V7.4L12 2.75Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 14.5v-5l5 5v-5"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'express':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect
            x="3.5"
            y="5"
            width="17"
            height="14"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M7.5 14.5v-5h3.2M7.5 12h2.6M13.5 9.5l3.5 5M17 9.5l-3.5 5"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mongodb':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M12 3c3.5 3.6 5.2 6.8 5.2 10.1 0 3.1-2.1 5.6-5.2 6.9-3.1-1.3-5.2-3.8-5.2-6.9C6.8 9.8 8.5 6.6 12 3Z"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />
          <path
            d="M12 7.5V21"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <circle cx="7" cy="6.5" r="2" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="7" cy="17.5" r="2" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17" cy="9.5" r="2" stroke="currentColor" strokeWidth="1.75" />
          <path
            d="M7 8.5v7M7 8.5c0 2.8 2.2 3.5 5 3.5h1.5a1.5 1.5 0 0 0 1.5-1.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M9 19c-4 1.2-4-2-5.5-2.5m11 4.5v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.5-1.3 5.5-5.9a4.6 4.6 0 0 0-1.2-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0C6.3 3 5.3 3.3 5.3 3.3a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.7c0 4.6 2.8 5.6 5.5 5.9a2.8 2.8 0 0 0-.8 2.2V21"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M16.8 3.5 20.5 5.2v13.6l-3.7 1.7-8.8-8L4.5 15l-1.5-1 3.8-2-3.8-2 1.5-1 3.5 2.5 8.8-8Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinejoin="round"
          />
          <path d="M16.8 3.5v17" stroke="currentColor" strokeWidth="1.65" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="3.5"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M8 10.5v6M8 7.5v.5M12 16.5v-6m0 2c0-1.4 1.1-2.2 2.4-2.2 1.3 0 2.1.8 2.1 2.2v4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'figma':
      return (
        <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
          <path
            d="M9.5 3.5h2.5v5.5H9.5a2.75 2.75 0 1 1 0-5.5ZM12 3.5h2.5a2.75 2.75 0 1 1 0 5.5H12V3.5ZM9.5 9H12v5.5H9.5a2.75 2.75 0 1 1 0-5.5ZM9.5 14.5H12v2.75a2.75 2.75 0 1 1-2.5-2.75ZM14.75 9a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5Z"
            stroke="currentColor"
            strokeWidth="1.65"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return null
  }
}


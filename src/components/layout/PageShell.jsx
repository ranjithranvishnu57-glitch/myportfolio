import Navbar from './Navbar'

export default function PageShell({ children }) {
  return (
    <div className="min-h-dvh bg-bg-primary text-text-primary font-body">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-xl focus:bg-accent-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-elevated"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
    </div>
  )
}

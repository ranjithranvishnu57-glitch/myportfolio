import { Canvas } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import { Component, Suspense, useEffect, useState } from 'react'
import HeroSculpture from './HeroSculpture'

class CanvasErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex h-full w-full items-center justify-center rounded-3xl border border-border bg-bg-secondary/50 p-6 text-center">
          <p className="text-sm text-text-secondary">
            3D preview unavailable in this browser environment.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

/**
 * Responsive React Three Fiber canvas wrapper with reduced-motion support,
 * mobile DPR optimization, and graceful WebGL fallback.
 */
export default function HeroCanvas() {
  const prefersReducedMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(mediaQuery.matches)

    updateViewport()
    mediaQuery.addEventListener('change', updateViewport)
    return () => mediaQuery.removeEventListener('change', updateViewport)
  }, [])

  return (
    <CanvasErrorBoundary>
      <div
        className="relative h-full w-full select-none"
        aria-label="Interactive 3D lavender glass sculpture"
        role="img"
      >
        <Canvas
          dpr={isMobile ? [1, 1.5] : [1, 2]}
          camera={{ position: [0, 0, isMobile ? 6.2 : 5.4], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <HeroSculpture
              isMobile={isMobile}
              reducedMotion={Boolean(prefersReducedMotion)}
            />
          </Suspense>
        </Canvas>
      </div>
    </CanvasErrorBoundary>
  )
}


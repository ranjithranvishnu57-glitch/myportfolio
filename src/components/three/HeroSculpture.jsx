import { ContactShadows, Environment, Lightformer } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useMemo, useRef } from 'react'
import * as THREE from 'three'

/**
 * Interactive floating lavender glass sculpture with studio lightformers,
 * gentle floating motion, and subtle pointer-driven rotation.
 */
const HeroSculpture = memo(function HeroSculpture({
  isMobile = false,
  reducedMotion = false,
}) {
  const groupRef = useRef(null)
  const ringRef = useRef(null)
  const accentSpheresRef = useRef(null)

  const knotArgs = useMemo(
    () => (isMobile ? [1.02, 0.33, 96, 20, 2, 3] : [1.05, 0.34, 180, 36, 2, 3]),
    [isMobile],
  )

  const ringArgs = useMemo(
    () => (isMobile ? [1.72, 0.032, 16, 64] : [1.76, 0.034, 24, 100]),
    [isMobile],
  )

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05)
    const elapsed = state.clock.elapsedTime

    if (groupRef.current) {
      if (reducedMotion) {
        groupRef.current.position.y = 0
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          0.18,
          dt * 3,
        )
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          -0.25,
          dt * 3,
        )
      } else {
        const targetRotX = 0.18 + state.pointer.y * 0.28
        const targetRotY = elapsed * 0.22 + state.pointer.x * 0.42

        groupRef.current.position.y = Math.sin(elapsed * 1.15) * 0.14
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          targetRotX,
          dt * 3.5,
        )
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          targetRotY,
          dt * 3.5,
        )
      }
    }

    if (ringRef.current && !reducedMotion) {
      ringRef.current.rotation.z = elapsed * 0.16
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(elapsed * 0.6) * 0.08
    }

    if (accentSpheresRef.current && !reducedMotion) {
      accentSpheresRef.current.rotation.y = -elapsed * 0.18
    }
  })

  return (
    <>
      {/* Procedural Studio Environment — zero external network requests */}
      <Environment resolution={256} frames={1}>
        <Lightformer
          form="rect"
          intensity={2.4}
          color="#FFFFFF"
          position={[0, 5, 4]}
          scale={[10, 4, 1]}
          target={[0, 0, 0]}
        />
        <Lightformer
          form="circle"
          intensity={2.2}
          color="#EDE9FE"
          position={[-5, 2, 3]}
          scale={5}
          target={[0, 0, 0]}
        />
        <Lightformer
          form="circle"
          intensity={1.8}
          color="#C4B5FD"
          position={[5, -1, 3]}
          scale={4}
          target={[0, 0, 0]}
        />
        <Lightformer
          form="rect"
          intensity={1.4}
          color="#FFFFFF"
          position={[0, -4, -3]}
          scale={[8, 4, 1]}
          target={[0, 0, 0]}
        />
      </Environment>

      {/* Soft Studio Lighting */}
      <ambientLight intensity={0.85} color="#FAFAFF" />
      <directionalLight position={[4, 6, 5]} intensity={1.35} color="#FFFFFF" />
      <directionalLight position={[-4, -2, 3]} intensity={0.65} color="#C4B5FD" />
      <pointLight position={[2.5, 1.5, 3]} intensity={0.9} color="#8B5CF6" />

      <group ref={groupRef}>
        {/* Primary Lavender Glass Sculpture */}
        <mesh castShadow receiveShadow>
          <torusKnotGeometry args={knotArgs} />
          <meshPhysicalMaterial
            color="#D8CCFF"
            attenuationColor="#8B5CF6"
            attenuationDistance={1.9}
            transmission={isMobile ? 0.72 : 0.88}
            thickness={1.25}
            roughness={0.08}
            metalness={0.04}
            ior={1.46}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.35}
          />
        </mesh>

        {/* Orbiting Frosted Lavender Ring */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0.25, 0]}>
          <torusGeometry args={ringArgs} />
          <meshPhysicalMaterial
            color="#C4B5FD"
            roughness={0.18}
            metalness={0.15}
            transmission={0.55}
            thickness={0.4}
            clearcoat={0.9}
            envMapIntensity={1.2}
          />
        </mesh>

        {/* Subtle Orbiting Accent Spheres */}
        <group ref={accentSpheresRef}>
          <mesh position={[1.9, 0.45, -0.4]}>
            <sphereGeometry args={[0.11, 24, 24]} />
            <meshPhysicalMaterial
              color="#8B5CF6"
              roughness={0.15}
              metalness={0.1}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[-1.75, -0.55, 0.5]}>
            <sphereGeometry args={[0.085, 24, 24]} />
            <meshPhysicalMaterial
              color="#C4B5FD"
              roughness={0.12}
              metalness={0.08}
              clearcoat={1}
            />
          </mesh>
          <mesh position={[0.2, 1.85, -0.5]}>
            <sphereGeometry args={[0.065, 20, 20]} />
            <meshPhysicalMaterial
              color="#DDD6FE"
              roughness={0.15}
              metalness={0.1}
              clearcoat={1}
            />
          </mesh>
        </group>
      </group>

      {/* Delicate Grounding Shadow */}
      <ContactShadows
        position={[0, -2.05, 0]}
        opacity={0.26}
        scale={7.5}
        blur={2.5}
        far={4.2}
        color="#6D28D9"
        frames={isMobile ? 1 : Infinity}
      />
    </>
  )
})

export default HeroSculpture


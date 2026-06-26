import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js'

export default function WaveField() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const simplex = new SimplexNoise()

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
    camera.position.set(0, 1.1, 2.1)
    camera.lookAt(0, -0.15, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    container.appendChild(renderer.domElement)

    const cols = 130
    const rows = 90
    const geometry = new THREE.PlaneGeometry(5, 3.4, cols, rows)
    const pos = geometry.getAttribute('position') as THREE.BufferAttribute
    const count = pos.count

    const colors = new Float32Array(count * 3)
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const points = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        size: 0.018,
        vertexColors: true,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    )
    points.rotation.x = -Math.PI / 2.25
    scene.add(points)

    let frame: number
    let destroyed = false

    const resize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }

    const tick = (now: number) => {
      if (destroyed) return
      const t = now / 1000

      for (let i = 0; i < count; i++) {
        const x = pos.getX(i)
        const y = pos.getY(i)
        const n1 = simplex.noise(x * 0.55 + t * 0.18, y * 0.55 - t * 0.12)
        const n2 = simplex.noise(x * 1.3 - t * 0.25, y * 1.3 + t * 0.2) * 0.4
        const z = (n1 + n2) * 0.32

        pos.setZ(i, z)

        const brightness = THREE.MathUtils.clamp(0.35 + z * 1.4, 0.08, 1)
        colors[i * 3] = brightness
        colors[i * 3 + 1] = brightness
        colors[i * 3 + 2] = brightness
      }
      pos.needsUpdate = true
      ;(geometry.getAttribute('color') as THREE.BufferAttribute).needsUpdate = true

      points.rotation.z = Math.sin(t * 0.05) * 0.04

      renderer.render(scene, camera)
      frame = requestAnimationFrame(tick)
    }

    resize()
    frame = requestAnimationFrame(tick)

    const observer = new ResizeObserver(resize)
    observer.observe(container)

    return () => {
      destroyed = true
      cancelAnimationFrame(frame)
      observer.disconnect()
      geometry.dispose()
      ;(points.material as THREE.Material).dispose()
      renderer.dispose()
      container.removeChild(renderer.domElement)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

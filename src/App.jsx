import { useEffect, useState } from 'react'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CursorTrail from './components/CursorTrail'

function App() {
  const [particles, setParticles] = useState(null)

  useEffect(() => {
    loadSlim().then(setParticles)
  }, [])

  return (
    <div className="min-h-screen bg-[#141212] text-white relative overflow-x-hidden">
      {particles && (
        <Particles
          id="tsparticles"
          className="particles-bg"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              color: { value: ['#2E2C2B', '#3A3836'] },
              links: { color: '#2E2C2B', distance: 140, enable: true, opacity: 0.2, width: 1 },
              move: { enable: true, speed: 0.6, outModes: { default: 'bounce' } },
              number: { value: 40, density: { enable: true, area: 900 } },
              opacity: { value: 0.2 },
              size: { value: { min: 1, max: 2 } },
            },
            detectRetina: true,
          }}
          init={particles}
        />
      )}

      <CursorTrail />
      <Header />

      <main className="relative z-10">
        {/* Single scrollable page — sections are id-anchored */}
        <Home />

        {/* Projects lives at its own id anchor, rendered below Home */}
        <section id="projects">
          <Projects />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App

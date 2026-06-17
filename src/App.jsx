import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Particles } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import CursorTrail from './components/CursorTrail'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [particles, setParticles] = useState(null)

  useEffect(() => {
    loadSlim().then(setParticles)
  }, [])

  const pages = {
    home: <Home />,
    about: <About />,
    projects: <Projects />,
    skills: <Skills />,
    contact: <Contact />
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      {/* Particles Background */}
      {particles && (
        <Particles
          id="tsparticles"
          className="particles-bg"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#00f5ff", "#bf00ff", "#00ffff"],
              },
              links: {
                color: "#00f5ff",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          init={particles}
        />
      )}

      {/* Cursor Trail */}
      <CursorTrail />

      {/* Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Content */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {pages[currentPage]}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
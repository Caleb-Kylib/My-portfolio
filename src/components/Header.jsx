import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'hero',     label: 'Home' },
  { id: 'about',    label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills',   label: 'Skills' },
  { id: 'contact',  label: 'Contact' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const Header = () => {
  const [isScrolled,      setScrolled]   = useState(false)
  const [mobileOpen,      setMobileOpen] = useState(false)
  const [activeSection,   setActive]     = useState('hero')

  // scroll spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // find which section is closest to the top
      const offsets = navItems.map(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return { id, top: Infinity }
        return { id, top: Math.abs(el.getBoundingClientRect().top) }
      })
      offsets.sort((a, b) => a.top - b.top)
      if (offsets[0]) setActive(offsets[0].id)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#141212]/90 backdrop-blur-md border-b border-[#2E2C2B]' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <span className="text-[#141212] font-black text-xs leading-none">LC</span>
            </div>
            <span className="text-white font-semibold text-[0.95rem] tracking-tight">Lemayian Caleb</span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ id, label }) => (
              <motion.button
                key={id}
                whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeSection === id
                    ? 'bg-[#2A2827] text-white'
                    : 'text-[#A19E9B] hover:text-white hover:bg-[#1C1A19]'
                }`}
              >
                {label}
              </motion.button>
            ))}
          </div>

          {/* Hamburger */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#A19E9B] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </motion.button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-4 space-y-1 border-t border-[#2E2C2B] mt-3">
                {navItems.map(({ id, label }) => (
                  <motion.button
                    key={id}
                    whileHover={{ x: 6 }}
                    onClick={() => { scrollTo(id); setMobileOpen(false) }}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      activeSection === id
                        ? 'bg-[#2A2827] text-white'
                        : 'text-[#A19E9B] hover:text-white hover:bg-[#1C1A19]'
                    }`}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

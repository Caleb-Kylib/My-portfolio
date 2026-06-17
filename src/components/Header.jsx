import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled]         = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'home',     label: 'Home' },
    { id: 'about',    label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills',   label: 'Skills' },
    { id: 'contact',  label: 'Contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141212]/90 backdrop-blur-md border-b border-[#2E2C2B]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setCurrentPage('home')}
            className="flex items-center gap-2.5"
          >
            <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
              <span className="text-[#141212] font-black text-xs leading-none">LC</span>
            </div>
            <span className="text-white font-semibold text-[0.95rem] tracking-tight">
              Lemayian Caleb
            </span>
          </motion.button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.id
                    ? 'bg-[#2A2827] text-white'
                    : 'text-[#A19E9B] hover:text-white hover:bg-[#1C1A19]'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#A19E9B] hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </motion.button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-4 space-y-1 border-t border-[#2E2C2B] mt-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ x: 6 }}
                    onClick={() => { setCurrentPage(item.id); setMobileMenuOpen(false) }}
                    className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      currentPage === item.id
                        ? 'bg-[#2A2827] text-white'
                        : 'text-[#A19E9B] hover:text-white hover:bg-[#1C1A19]'
                    }`}
                  >
                    {item.label}
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

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Main cursor trail */}
      <motion.div
        className="cursor-trail"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Secondary glow effect */}
      <motion.div
        className="fixed w-40 h-40 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 80,
          y: mousePosition.y - 80,
          opacity: isVisible ? 0.3 : 0
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 20
        }}
      />
    </>
  )
}

export default CursorTrail

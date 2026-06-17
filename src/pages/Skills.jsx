import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// ── Inline SVG icons with official brand colours ──────────────────────────────
const icons = {
  JavaScript: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <rect width="32" height="32" rx="4" fill="#F7DF1E"/>
      <path fill="#000" d="M9.5 25.3c.6 1 1.4 1.7 2.9 1.7 1.2 0 2-.6 2-1.4 0-1-.8-1.3-2.2-1.9l-.7-.3c-2.2-.9-3.6-2.1-3.6-4.5 0-2.2 1.7-3.9 4.4-3.9 1.9 0 3.3.7 4.3 2.4l-2.3 1.5c-.5-.9-1.1-1.3-1.9-1.3-.9 0-1.4.5-1.4 1.2 0 .8.5 1.2 1.8 1.7l.7.3c2.6 1.1 4 2.2 4 4.7 0 2.7-2.1 4.1-4.9 4.1-2.8 0-4.5-1.3-5.4-3.1l2.3-1.2zm11 .3c.4.8.8 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.8v-9.9h2.8v10c0 3-1.7 4.3-4.3 4.3-2.3 0-3.6-1.2-4.3-2.6l2.5-1.4z"/>
    </svg>
  ),
  TypeScript: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <rect width="32" height="32" rx="4" fill="#3178C6"/>
      <path fill="#fff" d="M18.3 20v1.8c.5.2 1 .4 1.6.4.7 0 1.2-.2 1.6-.5.3-.3.5-.8.5-1.4 0-.5-.1-.9-.4-1.2-.3-.3-.8-.6-1.5-.9-.5-.2-.8-.4-.9-.5-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.2-.1.4-.2.7-.2.6 0 1.1.2 1.6.7v-1.7a4 4 0 00-1.7-.4c-.7 0-1.2.2-1.6.5-.4.3-.6.8-.6 1.4 0 .9.5 1.5 1.5 2 .6.2.9.4 1.1.6.1.1.2.3.2.5s-.1.4-.3.5c-.2.1-.4.2-.7.2-.7 0-1.3-.3-1.8-.8zm-4.8-3.6H16v-1.6H10v1.6h2.5V26h1.9v-9.6z"/>
    </svg>
  ),
  'React JS': (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#20232A"/>
      <circle cx="16" cy="16" r="3" fill="#61DAFB"/>
      <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.3"/>
      <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(60 16 16)"/>
      <ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(120 16 16)"/>
    </svg>
  ),
  Angular: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#DD0031"/>
      <path fill="#fff" d="M16 4L5 8.5l1.7 14L16 28l9.3-5.5L27 8.5 16 4zm0 3l7.2 3.2-1.3 10.5L16 23.5l-5.9-2.8L8.8 10.2 16 7z"/>
      <path fill="#fff" d="M16 10l-4 8h1.5l.8-2h3.4l.8 2H20l-4-8zm0 2.5l1.2 2.5h-2.4L16 12.5z"/>
    </svg>
  ),
  'Tailwind CSS': (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#0F172A"/>
      <path fill="#38BDF8" d="M16 9c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.4 10.2 18.3 9 16 9zm-4.8 6c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2-2.2-4.3-2.2z"/>
    </svg>
  ),
  Bootstrap: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#7952B3"/>
      <path fill="#fff" d="M10 8h7.5c3.3 0 5.3 1.7 5.3 4.3 0 1.8-1 3.1-2.5 3.7 1.9.5 3.1 1.9 3.1 3.9 0 2.8-2.2 4.6-5.8 4.6H10V8zm3 3v4h3.8c1.5 0 2.4-.7 2.4-2s-.9-2-2.4-2H13zm0 6.7v4.4h4.2c1.7 0 2.6-.8 2.6-2.2s-1-2.2-2.6-2.2H13z"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#1E1E1E"/>
      <path fill="#3776AB" d="M16 5c-1.8 0-3.4.2-4.6.5C8.7 6.2 8 7.5 8 9v2.5h8v1H6.5C5 12.5 4 13.8 4 16s1 3.5 2.5 4l.5.1V22c0 1.5.7 2.8 3.4 3.5 1.2.3 2.8.5 4.6.5 1.8 0 3.4-.2 4.6-.5 2.7-.7 3.4-2 3.4-3.5v-2.5h-8v-1h9.5c1.5 0 2.5-1.3 2.5-3.5s-1-3.5-2.5-4l-.5-.1V9c0-1.5-.7-2.8-3.4-3.5C19.4 5.2 17.8 5 16 5zm-2 3a1 1 0 110 2 1 1 0 010-2zm4 14a1 1 0 110 2 1 1 0 010-2z"/>
    </svg>
  ),
  Django: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#092E20"/>
      <path fill="#44B78B" d="M17 7h3v13.5c-1.5.3-2.7.4-4 .4-3.7 0-5.7-1.7-5.7-4.9s2-5 5.2-5c.6 0 1 .1 1.5.2V7zm0 7c-.4-.1-.8-.2-1.3-.2-1.5 0-2.4.9-2.4 2.6 0 1.6.9 2.5 2.4 2.5.4 0 .8 0 1.3-.1V14z"/>
      <path fill="#44B78B" d="M21 7h3v3h-3zm0 5h3v11h-3z"/>
    </svg>
  ),
  PHP: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#4F5B93"/>
      <ellipse cx="16" cy="16" rx="13" ry="6" fill="#6c7fc4" opacity=".5"/>
      <ellipse cx="16" cy="16" rx="13" ry="6" fill="none" stroke="#fff" strokeWidth=".8" opacity=".6"/>
      <path fill="#fff" d="M9 13.5h2.5c1.5 0 2.5.7 2.5 2s-1 2-2.5 2H10V19H9v-5.5zm1 1v2h1.3c.8 0 1.2-.3 1.2-1s-.4-1-1.2-1H10zm5 0h2.5c1.5 0 2.5.7 2.5 2s-1 2-2.5 2H16V19h-1v-5.5zm1 1v2h1.3c.8 0 1.2-.3 1.2-1s-.4-1-1.2-1H16zm4.5-1H22l.8 3.3.8-3.3h1.4l-1.5 5.5h-1.5l-1.5-5.5z"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#001E2B"/>
      <path fill="#00ED64" d="M16 5s-5 5.5-5 10.5c0 2.8 2.2 5 5 5s5-2.2 5-5C21 10.5 16 5 16 5zm0 17v5"/>
      <path fill="#00ED64" stroke="#00ED64" strokeWidth="1.5" d="M16 22v5" strokeLinecap="round"/>
    </svg>
  ),
  MySQL: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#00546B"/>
      <path fill="#F29111" d="M8 11c0-1.1 3.6-2 8-2s8 .9 8 2v2c0 1.1-3.6 2-8 2s-8-.9-8-2v-2z"/>
      <path fill="#fff" opacity=".3" d="M8 11c0-1.1 3.6-2 8-2s8 .9 8 2-3.6 2-8 2-8-.9-8-2z"/>
      <path fill="#F29111" d="M8 15v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2c-1.4.8-4.3 1.3-8 1.3S9.4 15.8 8 15z"/>
      <path fill="#F29111" d="M8 19v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2c-1.4.8-4.3 1.3-8 1.3S9.4 19.8 8 19z"/>
    </svg>
  ),
  Firebase: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#1C1C1C"/>
      <path fill="#FFA000" d="M10 24l2.8-16.7 4.7 8.9L10 24z"/>
      <path fill="#F57F17" d="M22 24l-4.5-17-2.7 5.2L22 24z"/>
      <path fill="#FFCA28" d="M10 24l12 0-6-11z"/>
    </svg>
  ),
  'Google Cloud': (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#1A1A2E"/>
      <path fill="#4285F4" d="M19.7 13.3H16l-1.6 2.7 1.6 2.7h3.7l1.6-2.7z"/>
      <path fill="#34A853" d="M16 18.7l-1.8 3.2H10l1.8-3.2z"/>
      <path fill="#FBBC04" d="M10 18.7l-1.8-3.2L10 12.3h4.2L12.4 16l1.8 2.7z"/>
      <path fill="#EA4335" d="M16 13.3l-1.8-3.2H10l1.8 3.2z"/>
    </svg>
  ),
  AWS: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#1A1A1A"/>
      <path fill="#FF9900" d="M10 18.5c-1.5-.6-2.5-2-2.5-3.5 0-2.2 1.8-4 4-4 .3 0 .6 0 .9.1C13 9.6 14.4 8.5 16 8.5c1.8 0 3.3 1.2 3.7 2.9.2 0 .5-.1.8-.1 1.7 0 3 1.3 3 3 0 1.4-.9 2.6-2.2 2.9"/>
      <path fill="#FF9900" d="M9 21.5c3.3 1.3 7.7 1.3 11 0" strokeLinecap="round"/>
      <path fill="#FF9900" d="M9 21.5l-1 1m12 0l1-1" opacity=".7"/>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#1E1E1E"/>
      <path fill="#F24E1E" d="M12 8h4v5h-4a2.5 2.5 0 010-5z"/>
      <path fill="#FF7262" d="M16 8h4a2.5 2.5 0 010 5h-4V8z"/>
      <path fill="#A259FF" d="M16 13h4a2.5 2.5 0 010 5h-4v-5z"/>
      <path fill="#1ABCFE" d="M16 18a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"/>
      <path fill="#0ACF83" d="M12 13h4v5h-4a2.5 2.5 0 010-5z"/>
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#F05032"/>
      <path fill="#fff" d="M27.6 14.6L17.4 4.4a1.5 1.5 0 00-2.1 0l-2.1 2.1 2.6 2.6a1.8 1.8 0 012.3 2.3l2.5 2.5a1.8 1.8 0 11-1.1 1.1l-2.3-2.4v6a1.8 1.8 0 11-1.5 0V12a1.8 1.8 0 01-1-2.4L12.1 7 4.4 14.6a1.5 1.5 0 000 2.1l10.2 10.2a1.5 1.5 0 002.1 0l10.9-10.9a1.5 1.5 0 000-2.1-.3-.3z"/>
    </svg>
  ),
  'GitHub Actions': (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#161B22"/>
      <path fill="#2088FF" d="M16 6a10 10 0 100 20A10 10 0 0016 6zm0 3a7 7 0 110 14A7 7 0 0116 9z" opacity=".4"/>
      <path fill="#2088FF" d="M20 14l-6 4V10l6 4z"/>
    </svg>
  ),
  'Claude Code': (
    <svg viewBox="0 0 32 32" className="w-9 h-9">
      <circle cx="16" cy="16" r="16" fill="#CC785C"/>
      <path fill="#fff" d="M10 20l4-8 4 8M11.5 17.5h5"/>
      <path fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-8 4 8M11.5 17.5h5"/>
    </svg>
  ),
}

const skills = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React JS' },
  { name: 'Angular' },
  { name: 'Tailwind CSS' },
  { name: 'Bootstrap' },
  { name: 'Python' },
  { name: 'Django' },
  { name: 'PHP' },
  { name: 'MongoDB' },
  { name: 'MySQL' },
  { name: 'Firebase' },
  { name: 'Google Cloud' },
  { name: 'AWS' },
  { name: 'Figma' },
  { name: 'Git' },
  { name: 'GitHub Actions' },
  { name: 'Claude Code' },
]

const Skills = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <div className="min-h-screen bg-[#141212] py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="space-y-3"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">
            Skills &amp; Expertise
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            What I work with
          </h1>
          <p className="text-[#A19E9B] text-[1rem] leading-relaxed max-w-xl">
            A comprehensive overview of my technical skills and learning journey.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 mt-14 justify-center items-center">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.045, duration: 0.45, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              {/* Icon square */}
              <motion.div
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ duration: 0.2 }}
                className="w-20 h-20 bg-[#1C1A19] rounded-2xl flex items-center justify-center shadow-lg mx-auto border border-[#2E2C2B] hover:border-[#3A3836] transition-colors duration-200"
              >
                {icons[skill.name] ?? (
                  <span className="text-3xl opacity-40">?</span>
                )}
              </motion.div>

              {/* Label */}
              <p className="mt-3 text-center font-medium text-sm md:text-base text-white leading-tight px-1">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills

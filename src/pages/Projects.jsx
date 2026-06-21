import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Tech pill icon map ────────────────────────────────────────────────────────
const TECH_ICONS = {
  'HTML5':          '🌐',
  'CSS3':           '🎨',
  'JavaScript':     '🟨',
  'Bootstrap':      '🅱️',
  'Bootstrap 5':    '🅱️',
  'Python':         '🐍',
  'Pillow':         '🖼️',
  'Formspree':      '📬',
  'AOS':            '✨',
  'Font Awesome':   '🔣',
  'Vercel':         '▲',
  'Git':            '🌿',
  'React':          '⚛️',
  'Vite':           '⚡',
  'Tailwind CSS':   '💨',
  'Framer Motion':  '🎞️',
  'Node.js':        '🟩',
  'Express.js':     '🚂',
  'MongoDB':        '🍃',
  'JWT':            '🔑',
  'Africa\'s Talking': '📡',
}

const MAX_PILLS = 5

// ── SVG icons ─────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z"/>
  </svg>
)

const ExternalLinkIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/>
  </svg>
)

// ── Project card ──────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpen }) => {
  const [imgHovered, setImgHovered] = useState(false)
  const visible  = project.tools.slice(0, MAX_PILLS)
  const overflow = project.tools.length - MAX_PILLS

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="flex flex-col bg-[#1C1A19] rounded-3xl overflow-hidden border border-[#2E2C2B] hover:border-[#3A3836] transition-colors duration-300 shadow-2xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}
        onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)}>
        <motion.div animate={{ scale: imgHovered ? 1.05 : 1 }} transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full">
          <div className="w-full h-full bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] flex items-center justify-center">
            <span className="text-7xl opacity-20 select-none">{project.emoji}</span>
          </div>
        </motion.div>

        {/* Buttons top-right */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <motion.a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            onClick={e => e.stopPropagation()} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }}
            title="View Source"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:border-white/50 transition-colors duration-200 shadow-lg">
            <GithubIcon />
          </motion.a>
          {project.liveUrl && (
            <motion.a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              onClick={e => e.stopPropagation()} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.92 }}
              title="Live Site"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:border-white/50 transition-colors duration-200 shadow-lg">
              <ExternalLinkIcon />
            </motion.a>
          )}
        </div>

        {/* Status chip top-left */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md border ${
            project.live
              ? 'bg-emerald-900/60 border-emerald-500/40 text-emerald-300'
              : 'bg-black/50 border-white/15 text-white/70'
          }`}>
            {project.live ? '🟢 Live' : '🔧 In Progress'}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-7 gap-4">
        <h3 className="text-[1.1rem] font-bold text-white leading-snug">
          {project.title}
          {project.tagline && <span className="text-[#706E6B] font-normal"> — {project.tagline}</span>}
        </h3>

        <p className="text-[0.875rem] text-[#A19E9B] leading-relaxed">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-col gap-2 mt-auto">
          <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#706E6B]">Tech Stack</span>
          <div className="flex flex-wrap gap-2">
            {visible.map(tech => (
              <span key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A2827] text-white text-[0.75rem] font-medium border border-[#3A3836] select-none">
                {TECH_ICONS[tech] && <span className="text-[0.85rem] leading-none" aria-hidden="true">{TECH_ICONS[tech]}</span>}
                {tech}
              </span>
            ))}
            {overflow > 0 && (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2A2827] text-[#706E6B] text-[0.75rem] font-medium border border-[#3A3836]">
                +{overflow}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={() => onOpen(project)}
          className="mt-2 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#232120] border border-[#3A3836] text-white text-[0.875rem] font-semibold hover:bg-[#2E2C2B] hover:border-[#555250] transition-all duration-200">
          View Project <ExternalLinkIcon className="w-4 h-4 opacity-60" />
        </motion.button>
      </div>
    </motion.div>
  )
}

// ── Projects data ─────────────────────────────────────────────────────────────
const ALL_PROJECTS = [
  {
    id: 1,
    title: 'Hakiline Advocates',
    tagline: 'Property law, made accessible',
    description:
      'A clean, professional website for a Nairobi-based legal firm specialising in property law in Kenya. Built as a pure HTML/CSS/JS site and deployed on Vercel, it delivers fast load times and a polished brand presence for the firm\'s clients.',
    emoji: '⚖️',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Vercel', 'Git'],
    category: 'Frontend',
    live: true,
    liveUrl: 'https://hakiline-advocates.vercel.app',
    githubUrl: 'https://github.com/Caleb-Kylib/HK',
    problem: 'A legal firm needed a credible online presence to reach clients seeking property law services in Kenya.',
    solution: 'Designed and deployed a fast, responsive static website that clearly communicates the firm\'s practice areas and contact details.',
    lessons: 'Reinforced the value of clean semantic HTML, accessible design, and the speed advantage of static deployment on Vercel.',
  },
  {
    id: 2,
    title: 'Little Feet Academy',
    tagline: 'A digital home for early childhood education',
    description:
      'Multi-page website for a Kenyan childcare and early-education institution. Features a parent FAQ chatbot, Formspree-powered contact forms with honeypot spam protection, scroll animations, and Python maintenance scripts for image optimisation and CSS deduplication.',
    emoji: '🎒',
    tools: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Python', 'Pillow', 'Formspree', 'Vercel'],
    category: 'Frontend',
    live: true,
    liveUrl: 'https://littlefeetacademy.co.ke',
    githubUrl: 'https://github.com/Caleb-Kylib/little-feet-academy',
    problem: 'The school needed a trustworthy website where parents could learn about the curriculum, ask questions, and get in touch easily.',
    solution: 'Built a fully responsive multi-page site with an interactive chatbot, protected contact forms, and automated Python tooling to keep assets lean.',
    lessons: 'Gained experience integrating third-party form services, building lightweight chatbots, and automating front-end maintenance tasks with Python.',
  },
  {
    id: 3,
    title: 'Geo Axis Surveyors',
    tagline: 'Precision land surveying, online',
    description:
      'Professional website for a licensed Nairobi-based land surveying firm. Showcases boundary, topographic, cadastral, RTK/GNSS, UAV/drone surveys, and estate subdivisions. Fully responsive with AOS scroll animations and SEO optimisation.',
    emoji: '🗺️',
    tools: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'Font Awesome', 'AOS', 'Git'],
    category: 'Frontend',
    live: true,
    liveUrl: 'https://geoaxissurveyors.co.ke',
    githubUrl: 'https://github.com/Caleb-Kylib/geo-axis-surveyors',
    problem: 'A licensed surveying firm lacked an online presence to showcase its service offerings and attract new clients across Kenya.',
    solution: 'Created a professional, SEO-friendly website with clear service pages, scroll-triggered animations, and a responsive layout for all devices.',
    lessons: 'Strengthened skills in Bootstrap layout, the AOS animation library, and on-page SEO best practices for service-based businesses.',
  },
  {
    id: 4,
    title: 'FreshCart',
    tagline: 'Fresh groceries, delivered fast',
    description:
      'A modern React + Vite grocery e-commerce frontend with a clean product catalogue, cart management, and a responsive checkout flow. Built with component-driven architecture and fast HMR development tooling.',
    emoji: '🛒',
    tools: ['React', 'Vite', 'JavaScript', 'CSS3'],
    category: 'Frontend',
    live: false,
    liveUrl: null,
    githubUrl: 'https://github.com/Caleb-Kylib/freshcart',
    problem: 'Needed a practical project to deepen React skills while building something tangible — a grocery shopping experience.',
    solution: 'Developed a component-driven e-commerce UI with product listings, a dynamic cart, and Vite\'s fast build tooling for a smooth development experience.',
    lessons: 'Deepened understanding of React state management, component composition, and modern front-end build tooling with Vite.',
  },
  {
    id: 5,
    title: 'Vista Kenya',
    tagline: 'Student housing, simplified',
    description:
      'A specialised real estate platform for students and young professionals near Kenyan universities. Features verified listings with KES 8,000–18,000 price caps, co-living and roommate matching with automated rent splitting, and flexible Pay-As-You-Stay payments. Includes offline access via a USSD simulator and SMS alerts through Africa\'s Talking.',
    emoji: '🏘️',
    tools: ['React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express.js', 'MongoDB', 'JWT', "Africa's Talking"],
    category: 'Full Stack',
    live: false,
    liveUrl: null,
    githubUrl: 'https://github.com/Caleb-Kylib/vistakenya',
    problem: 'Students near Kenyan universities struggle to find affordable, verified housing with payment terms that match student cash-flow patterns.',
    solution: 'Built a full-stack platform with verified listings, roommate matching, automated rent splitting, weekly/monthly payment flexibility, and USSD/SMS support for offline users.',
    lessons: 'Gained deep experience integrating Africa\'s Talking USSD/SMS APIs, designing flexible payment systems, and building role-based auth with JWT and Bcrypt.',
  },
]

// ── Main component ────────────────────────────────────────────────────────────
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected]             = useState(null)

  const categories = ['All', 'Frontend', 'Full Stack']

  const filtered = activeCategory === 'All'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.category === activeCategory)

  return (
    <div className="bg-[#141212] min-h-screen py-24 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.55 }}
          className="space-y-3 mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Work</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">My Projects</h1>
          <p className="text-[#A19E9B] text-[1rem] leading-relaxed max-w-2xl">
            A curated set of real-world projects — from live client sites to products in active development.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12">
          {categories.map(cat => (
            <motion.button key={cat} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-[#141212] border-white'
                  : 'bg-[#1C1A19] text-[#A19E9B] border-[#2E2C2B] hover:text-white hover:border-[#706E6B]'
              }`}>
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory} initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onOpen={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              className="bg-[#1C1A19] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#2E2C2B] shadow-2xl"
              onClick={e => e.stopPropagation()}>

              {/* Modal hero */}
              <div className="relative w-full rounded-t-3xl overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <div className="w-full h-full bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] flex items-center justify-center">
                  <span className="text-8xl opacity-20 select-none">{selected.emoji}</span>
                </div>
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </motion.button>
              </div>

              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="text-2xl font-bold text-white leading-snug">
                      {selected.title}
                      {selected.tagline && <span className="text-[#706E6B] font-normal"> — {selected.tagline}</span>}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2A2827] text-[#A19E9B] border border-[#3A3836]">
                        {selected.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                        selected.live
                          ? 'bg-emerald-900/40 border-emerald-500/30 text-emerald-300'
                          : 'bg-[#2A2827] border-[#3A3836] text-[#706E6B]'
                      }`}>
                        {selected.live ? '🟢 Live' : '🔧 In Progress'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Problem</h3>
                    <p className="text-[#A19E9B] text-sm leading-relaxed">{selected.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Solution</h3>
                    <p className="text-[#A19E9B] text-sm leading-relaxed">{selected.solution}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selected.tools.map(tech => (
                      <span key={tech}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2A2827] text-white text-[0.75rem] font-medium border border-[#3A3836]">
                        {TECH_ICONS[tech] && <span className="text-[0.85rem] leading-none" aria-hidden="true">{TECH_ICONS[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Lessons Learned</h3>
                  <p className="text-[#A19E9B] text-sm leading-relaxed">{selected.lessons}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  {selected.liveUrl ? (
                    <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      href={selected.liveUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-white text-[#141212] font-semibold rounded-xl text-sm hover:bg-[#e5e5e5] transition-colors">
                      Live Site <ExternalLinkIcon />
                    </motion.a>
                  ) : (
                    <span className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-[#2A2827] text-[#706E6B] font-semibold rounded-xl text-sm border border-[#3A3836] cursor-not-allowed select-none">
                      Not Deployed Yet
                    </span>
                  )}
                  <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    href={selected.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border border-[#3A3836] text-white font-semibold rounded-xl text-sm bg-[#232120] hover:bg-[#2E2C2B] hover:border-[#706E6B] transition-colors">
                    <GithubIcon /> View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects

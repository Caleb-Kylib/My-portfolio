import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Tech icon map (inline SVG paths / emoji fallbacks) ──────────────────────
const TECH_ICONS = {
  'React':          { icon: '⚛️',  color: '#61DAFB' },
  'Node.js':        { icon: '🟩',  color: '#8CC84B' },
  'MongoDB':        { icon: '🍃',  color: '#4DB33D' },
  'Stripe':         { icon: '💳',  color: '#635BFF' },
  'Express':        { icon: '🚂',  color: '#888888' },
  'Tailwind CSS':   { icon: '🎨',  color: '#38BDF8' },
  'Socket.io':      { icon: '🔌',  color: '#FFFFFF' },
  'PostgreSQL':     { icon: '🐘',  color: '#336791' },
  'Redis':          { icon: '🔴',  color: '#DC382D' },
  'TypeScript':     { icon: '🔷',  color: '#3178C6' },
  'Framer Motion':  { icon: '🎞️',  color: '#BB4EFF' },
  'Chart.js':       { icon: '📊',  color: '#FF6384' },
  'OpenWeather API':{ icon: '🌤️',  color: '#EB6E4B' },
  'PWA':            { icon: '📱',  color: '#5A0FC8' },
  'Service Workers':{ icon: '⚙️',  color: '#999999' },
  'CSS Grid':       { icon: '🔲',  color: '#E44D26' },
  'Three.js':       { icon: '🎲',  color: '#FFFFFF' },
  'GSAP':           { icon: '💚',  color: '#88CE02' },
  'Vite':           { icon: '⚡',  color: '#646CFF' },
  'Swagger':        { icon: '🟢',  color: '#85EA2D' },
  'JWT':            { icon: '🔑',  color: '#F4C430' },
  'OpenAPI':        { icon: '📖',  color: '#6BA539' },
  'Monaco Editor':  { icon: '📝',  color: '#0078D4' },
  'D3.js':          { icon: '📈',  color: '#F9A03C' },
  'REST APIs':      { icon: '🔗',  color: '#00f5ff' },
  'Docker':         { icon: '🐳',  color: '#2496ED' },
  'Git':            { icon: '🌿',  color: '#F05032' },
  'Postman':        { icon: '📬',  color: '#FF6C37' },
  'Django':         { icon: '🎸',  color: '#092E20' },
  'Python':         { icon: '🐍',  color: '#3776AB' },
  'Go':             { icon: '🐹',  color: '#00ADD8' },
}

const MAX_VISIBLE_PILLS = 5

// ─── Single project card ──────────────────────────────────────────────────────
const ProjectCard = ({ project, index, onOpen }) => {
  const [imgHovered, setImgHovered] = useState(false)

  const visibleTech  = project.tools.slice(0, MAX_VISIBLE_PILLS)
  const overflowCount = project.tools.length - MAX_VISIBLE_PILLS

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
      className="flex flex-col bg-[#1c1a19] rounded-3xl overflow-hidden border border-[#2e2c2b] hover:border-[#3e3c3a] transition-colors duration-300 shadow-2xl"
    >
      {/* ── Image container ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/9' }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        {/* Actual image / gradient placeholder */}
        <motion.div
          animate={{ scale: imgHovered ? 1.06 : 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {project.image && !project.image.includes('placeholder') ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] flex items-center justify-center">
              <span className="text-7xl opacity-30 select-none">{project.emoji ?? '🚀'}</span>
            </div>
          )}
        </motion.div>

        {/* Top-right icon buttons */}
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          {/* GitHub */}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            title="View Source"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:border-white/50 transition-colors duration-200 shadow-lg"
          >
            <GithubIcon />
          </motion.a>

          {/* Live link */}
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
            title="Live Demo"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 hover:border-white/50 transition-colors duration-200 shadow-lg"
          >
            <ExternalLinkIcon />
          </motion.a>
        </div>

        {/* Category chip – top left */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide bg-black/50 backdrop-blur-md border border-white/15 text-white/80">
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-7 gap-4">

        {/* Title + tagline */}
        <div>
          <h3 className="text-[1.15rem] font-bold text-white leading-snug">
            {project.title}
            {project.tagline && (
              <span className="text-gray-400 font-normal"> — {project.tagline}</span>
            )}
          </h3>
        </div>

        {/* Description */}
        <p className="text-[0.88rem] text-gray-400 leading-relaxed flex-shrink-0">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-col gap-2 mt-auto">
          <span className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-500">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-2">
            {visibleTech.map((tech) => {
              const meta = TECH_ICONS[tech]
              return (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2827] text-white text-[0.78rem] font-medium border border-[#3a3836] select-none"
                >
                  {meta ? (
                    <span className="text-[0.9rem] leading-none" aria-hidden="true">
                      {meta.icon}
                    </span>
                  ) : null}
                  {tech}
                </span>
              )
            })}
            {overflowCount > 0 && (
              <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#2a2827] text-gray-400 text-[0.78rem] font-medium border border-[#3a3836]">
                +{overflowCount}
              </span>
            )}
          </div>
        </div>

        {/* View Project button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onOpen(project)}
          className="mt-3 w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#232120] border border-[#3a3836] text-white text-[0.88rem] font-semibold hover:bg-[#2e2c2b] hover:border-[#555250] transition-all duration-200"
        >
          View Project
          <ExternalLinkIcon className="w-4 h-4 opacity-70" />
        </motion.button>
      </div>
    </motion.div>
  )
}

// ─── Inline SVG icons ─────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
  </svg>
)

const ExternalLinkIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
  </svg>
)

// ─── Main Projects page ───────────────────────────────────────────────────────
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      tagline: 'Full-stack shopping, scaled right',
      description:
        'A production-ready e-commerce system built on React and Node.js, featuring a role-based admin dashboard, real-time inventory management, Stripe payment integration, and a fully responsive storefront architected for growth.',
      emoji: '🛒',
      image: '/api/placeholder/800/450',
      tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'JWT'],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      status: 'Completed',
      problem: 'Small businesses needed an affordable, scalable e-commerce solution.',
      solution: 'Comprehensive platform with admin dashboard, inventory management, and payment processing.',
      lessons: 'Learned about payment integration, database optimisation, and UX design for e-commerce.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      tagline: 'Collaborate at the speed of thought',
      description:
        'Real-time collaborative task manager powered by Socket.io and PostgreSQL. Supports drag-and-drop board management, team workspaces, live cursor presence, and granular permission roles across projects.',
      emoji: '📋',
      image: '/api/placeholder/800/450',
      tools: ['React', 'Socket.io', 'PostgreSQL', 'Redis', 'TypeScript', 'Framer Motion'],
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Redis'],
      category: 'Full Stack',
      status: 'In Progress',
      problem: 'Teams needed a better way to collaborate with real-time visibility.',
      solution: 'Real-time platform with drag-and-drop, team management, and progress tracking.',
      lessons: 'Mastered real-time communication, collaborative state, and WebSocket implementation.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      tagline: 'Beautiful forecasts, anywhere offline',
      description:
        'A Progressive Web App delivering interactive 7-day forecasts, hourly breakdowns, and rich Chart.js visualisations. Uses the OpenWeather API with service-worker caching for full offline capability.',
      emoji: '🌤️',
      image: '/api/placeholder/800/450',
      tools: ['React', 'Chart.js', 'OpenWeather API', 'PWA', 'Service Workers', 'CSS Grid'],
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'PWA'],
      category: 'Frontend',
      status: 'Completed',
      problem: 'Users wanted a more intuitive weather app with detailed charts.',
      solution: 'PWA with interactive charts, location services, and offline functionality.',
      lessons: 'Learned PWA development, API integration, and data visualisation patterns.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      tagline: 'Where code meets craft',
      description:
        'This very portfolio — a performance-focused React SPA with Framer Motion scroll animations, a custom cursor trail, tsParticles background, and a dark-themed design system built entirely in Tailwind CSS.',
      emoji: '✨',
      image: '/api/placeholder/800/450',
      tools: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js', 'GSAP', 'Vite'],
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
      category: 'Frontend',
      status: 'Completed',
      problem: 'Needed a unique, interactive portfolio to showcase skills effectively.',
      solution: 'Animated portfolio with 3D elements, smooth transitions, and engaging interactions.',
      lessons: 'Mastered advanced animations, 3D web development, and creative UI design.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'API Documentation Tool',
      tagline: 'Test & ship APIs with confidence',
      description:
        'An interactive developer portal that auto-generates OpenAPI documentation with live request sandboxing, JWT auth flows, and a Monaco-powered code editor for instant snippets in multiple languages.',
      emoji: '📡',
      image: '/api/placeholder/800/450',
      tools: ['React', 'Swagger', 'Express', 'JWT', 'OpenAPI', 'Monaco Editor', 'Postman'],
      technologies: ['React', 'Swagger', 'Express', 'JWT'],
      category: 'Backend',
      status: 'In Progress',
      problem: 'Developers needed a better way to document and test APIs interactively.',
      solution: 'Interactive documentation platform with live API testing and code generation.',
      lessons: 'Learned API design, authentication, code generation, and developer tooling.',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      tagline: 'One view for every metric that matters',
      description:
        'A centralised analytics platform that aggregates cross-platform social data, renders real-time D3 visualisations, and exports branded PDF reports — all backed by a Node/MongoDB micro-service layer.',
      emoji: '📊',
      image: '/api/placeholder/800/450',
      tools: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js', 'REST APIs', 'Docker', 'Git'],
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      status: 'Completed',
      problem: 'Social media managers needed a centralised dashboard across platforms.',
      solution: 'Comprehensive analytics platform with real-time visualisation and reporting.',
      lessons: 'Mastered data visualisation, real-time analytics, and complex state management.',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* ── Page header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A curated collection of work that reflects my approach to problem-solving,
            architecture, and design.
          </p>
        </motion.div>

        {/* ── Category filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-250 border ${
                activeCategory === cat
                  ? 'bg-neon-cyan text-dark-bg border-neon-cyan shadow-[0_0_16px_rgba(0,255,255,0.35)]'
                  : 'bg-[#1c1a19] text-gray-300 border-[#2e2c2b] hover:border-gray-500 hover:text-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* ── Projects grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={setSelectedProject}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Detail modal ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 260 }}
              className="bg-[#1c1a19] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#2e2c2b] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal image */}
              <div className="relative w-full overflow-hidden rounded-t-3xl" style={{ aspectRatio: '16/9' }}>
                {selectedProject.image && !selectedProject.image.includes('placeholder') ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1f2937] via-[#111827] to-[#0f172a] flex items-center justify-center">
                    <span className="text-8xl opacity-25 select-none">{selectedProject.emoji ?? '🚀'}</span>
                  </div>
                )}
                {/* Close */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-black/80 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <div className="p-8 space-y-6">
                {/* Title */}
                <div>
                  <h2 className="text-2xl font-bold text-white leading-snug">
                    {selectedProject.title}
                    {selectedProject.tagline && (
                      <span className="text-gray-400 font-normal"> — {selectedProject.tagline}</span>
                    )}
                  </h2>
                  <span className="mt-2 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#2a2827] text-gray-300 border border-[#3a3836]">
                    {selectedProject.category}
                  </span>
                </div>

                {/* Problem / Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-neon-cyan">Problem</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-neon-cyan">Solution</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Tech stack */}
                <div className="space-y-3">
                  <h3 className="text-[0.72rem] font-semibold uppercase tracking-widest text-gray-500">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tech) => {
                      const meta = TECH_ICONS[tech]
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2a2827] text-white text-[0.78rem] font-medium border border-[#3a3836]"
                        >
                          {meta && <span className="text-[0.9rem] leading-none" aria-hidden="true">{meta.icon}</span>}
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                </div>

                {/* Lessons */}
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold uppercase tracking-widest text-neon-cyan">Lessons Learned</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{selectedProject.lessons}</p>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-neon-cyan text-dark-bg font-semibold rounded-xl text-sm hover:bg-neon-cyan/90 transition-colors"
                  >
                    Live Demo <ExternalLinkIcon />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-6 border border-[#3a3836] text-white font-semibold rounded-xl text-sm bg-[#232120] hover:bg-[#2e2c2b] hover:border-gray-500 transition-colors"
                  >
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

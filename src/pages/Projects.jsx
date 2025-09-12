import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'Full Stack',
      status: 'Completed',
      problem: 'Small businesses needed an affordable, scalable e-commerce solution that could handle growing inventory and customer base.',
      solution: 'Built a comprehensive platform with admin dashboard, inventory management, payment processing, and responsive design.',
      tools: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      lessons: 'Learned about payment integration, database optimization, and user experience design for e-commerce.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team features',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Socket.io', 'PostgreSQL', 'Redis'],
      category: 'Frontend',
      status: 'In Progress',
      problem: 'Teams needed a better way to collaborate on tasks with real-time updates and clear project visibility.',
      solution: 'Created a real-time collaborative platform with drag-and-drop functionality, team management, and progress tracking.',
      tools: ['React', 'Socket.io', 'PostgreSQL', 'Redis', 'Framer Motion', 'TypeScript'],
      lessons: 'Mastered real-time communication, state management for collaborative features, and WebSocket implementation.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts and data visualization',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Chart.js', 'OpenWeather API', 'PWA'],
      category: 'Frontend',
      status: 'Completed',
      problem: 'Users wanted a more intuitive and visually appealing weather app with detailed forecasts and charts.',
      solution: 'Developed a PWA with interactive charts, location services, and offline functionality.',
      tools: ['React', 'Chart.js', 'OpenWeather API', 'PWA', 'Service Workers', 'CSS Grid'],
      lessons: 'Learned about PWA development, API integration, data visualization, and responsive design patterns.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Personal portfolio with animations and interactive elements',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js'],
      category: 'Frontend',
      status: 'Completed',
      problem: 'Needed a unique, interactive portfolio to showcase skills and projects effectively.',
      solution: 'Built an animated portfolio with 3D elements, smooth transitions, and engaging user interactions.',
      tools: ['React', 'Framer Motion', 'Tailwind CSS', 'Three.js', 'GSAP', 'Vite'],
      lessons: 'Mastered advanced animations, 3D web development, performance optimization, and creative UI design.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'API Documentation Tool',
      description: 'Interactive API documentation with testing capabilities',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'Swagger', 'Express', 'JWT'],
      category: 'Backend',
      status: 'In Progress',
      problem: 'Developers needed a better way to document and test APIs with interactive examples.',
      solution: 'Created an interactive documentation platform with live API testing and code generation.',
      tools: ['React', 'Swagger', 'Express', 'JWT', 'OpenAPI', 'Monaco Editor'],
      lessons: 'Learned about API design, authentication, code generation, and developer tooling.',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: '/api/placeholder/400/300',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      category: 'Full Stack',
      status: 'Completed',
      problem: 'Social media managers needed a centralized dashboard to track performance across platforms.',
      solution: 'Built a comprehensive analytics platform with real-time data visualization and reporting features.',
      tools: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Chart.js', 'REST APIs'],
      lessons: 'Mastered data visualization, real-time analytics, and complex state management.',
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack']
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for web development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-neon-cyan text-dark-bg glow-border'
                    : 'bg-dark-surface text-gray-300 hover:bg-neon-blue/20 hover:text-neon-blue'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.2 }
                }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="bg-dark-surface rounded-2xl overflow-hidden border border-dark-border hover:border-neon-cyan/50 transition-all duration-300 group-hover:glow-border">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center">
                      <div className="text-6xl opacity-50">🚀</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-neon-cyan/20 text-neon-cyan">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-dark-bg text-neon-blue text-xs rounded-full border border-neon-blue/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 py-2 px-4 bg-neon-cyan text-dark-bg font-medium rounded-lg hover:bg-neon-cyan/90 transition-colors"
                      >
                        View Details
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 border border-neon-blue text-neon-blue rounded-lg hover:bg-neon-blue/10 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-dark-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 space-y-6">
                {/* Modal Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-400">{selectedProject.description}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </motion.button>
                </div>

                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-xl flex items-center justify-center">
                  <div className="text-8xl opacity-50">🚀</div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neon-cyan">Problem</h3>
                    <p className="text-gray-300">{selectedProject.problem}</p>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-neon-cyan">Solution</h3>
                    <p className="text-gray-300">{selectedProject.solution}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neon-cyan">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 bg-neon-blue/20 text-neon-blue rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-neon-cyan">Lessons Learned</h3>
                  <p className="text-gray-300">{selectedProject.lessons}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 pt-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.liveUrl}
                    className="flex-1 py-3 px-6 bg-neon-cyan text-dark-bg font-semibold rounded-lg text-center hover:bg-neon-cyan/90 transition-colors"
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={selectedProject.githubUrl}
                    className="flex-1 py-3 px-6 border border-neon-blue text-neon-blue font-semibold rounded-lg text-center hover:bg-neon-blue/10 transition-colors"
                  >
                    View Code
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

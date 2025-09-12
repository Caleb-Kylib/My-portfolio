import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Roadmap = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const roadmapData = [
    {
      phase: 'Phase 1',
      title: 'Foundation Building',
      period: 'Q1 2024',
      status: 'completed',
      color: 'from-green-500 to-green-400',
      items: [
        'Mastered React fundamentals and hooks',
        'Learned modern CSS with Tailwind',
        'Built first portfolio website',
        'Completed JavaScript algorithms course'
      ],
      achievements: ['Portfolio Website', 'Weather App', 'Task Manager']
    },
    {
      phase: 'Phase 2',
      title: 'Frontend Mastery',
      period: 'Q2 2024',
      status: 'completed',
      color: 'from-blue-500 to-blue-400',
      items: [
        'Advanced React patterns and optimization',
        'State management with Redux/Zustand',
        'Testing with Jest and React Testing Library',
        'Performance optimization techniques'
      ],
      achievements: ['E-commerce Platform', 'Social Dashboard', 'API Documentation Tool']
    },
    {
      phase: 'Phase 3',
      title: 'Backend Learning',
      period: 'Q3 2024',
      status: 'in-progress',
      color: 'from-yellow-500 to-yellow-400',
      items: [
        'Node.js and Express.js fundamentals',
        'Database design with PostgreSQL',
        'RESTful API development',
        'Authentication and security'
      ],
      achievements: ['Task Management API', 'User Authentication System']
    },
    {
      phase: 'Phase 4',
      title: 'Full-Stack Integration',
      period: 'Q4 2024',
      status: 'upcoming',
      color: 'from-purple-500 to-purple-400',
      items: [
        'Full-stack application development',
        'Microservices architecture',
        'Cloud deployment (AWS/Azure)',
        'CI/CD pipeline setup'
      ],
      achievements: []
    },
    {
      phase: 'Phase 5',
      title: 'Advanced Specialization',
      period: 'Q1 2025',
      status: 'upcoming',
      color: 'from-pink-500 to-pink-400',
      items: [
        'System design and architecture',
        'DevOps and containerization',
        'Advanced database optimization',
        'Open source contributions'
      ],
      achievements: []
    },
    {
      phase: 'Phase 6',
      title: 'Leadership & Mentoring',
      period: 'Q2 2025',
      status: 'upcoming',
      color: 'from-cyan-500 to-cyan-400',
      items: [
        'Technical leadership skills',
        'Mentoring junior developers',
        'Conference speaking',
        'Technical writing and blogging'
      ],
      achievements: []
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return '✅'
      case 'in-progress':
        return '🚧'
      case 'upcoming':
        return '🎯'
      default:
        return '📋'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400'
      case 'in-progress':
        return 'text-yellow-400'
      case 'upcoming':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Learning Roadmap
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My journey from frontend developer to full-stack engineer and beyond
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-cyan rounded-full"></div>

            {roadmapData.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ delay: index * 0.2 }}
                className="relative flex items-start space-x-8 mb-16 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold border-4 border-dark-bg ${
                      phase.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : phase.status === 'in-progress'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-dark-border text-gray-400'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {getStatusIcon(phase.status)}
                  </motion.div>
                  
                  {/* Pulse effect for in-progress */}
                  {phase.status === 'in-progress' && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-yellow-500 opacity-30"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0, 0.3]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut'
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 bg-dark-surface rounded-2xl p-8 border border-dark-border hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className={`text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r ${phase.color} text-white`}>
                            {phase.phase}
                          </span>
                          <span className={`text-sm font-medium ${getStatusColor(phase.status)}`}>
                            {phase.status.replace('-', ' ').toUpperCase()}
                          </span>
                        </div>
                        <h2 className="text-2xl font-bold text-white">{phase.title}</h2>
                        <p className="text-neon-cyan font-medium">{phase.period}</p>
                      </div>
                    </div>

                    {/* Learning Items */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-gray-300">Learning Focus:</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, itemIndex) => (
                          <motion.li
                            key={itemIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <span className="text-neon-cyan mt-1">•</span>
                            <span className="text-gray-400">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    {phase.achievements.length > 0 && (
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-gray-300">Key Achievements:</h3>
                        <div className="flex flex-wrap gap-2">
                          {phase.achievements.map((achievement, achievementIndex) => (
                            <motion.span
                              key={achievementIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                              className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm font-medium"
                            >
                              {achievement}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Progress Bar for in-progress */}
                    {phase.status === 'in-progress' && (
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-300">Progress</span>
                          <span className="text-sm font-medium text-yellow-400">65%</span>
                        </div>
                        <div className="w-full bg-dark-border rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400"
                            initial={{ width: 0 }}
                            animate={isInView ? { width: '65%' } : { width: 0 }}
                            transition={{ duration: 1.5, delay: index * 0.2 + 0.5 }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Current Focus */}
          <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-8 border border-dark-border">
            <h2 className="text-3xl font-bold text-center text-neon-cyan mb-8">Current Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">This Month's Goals</h3>
                <ul className="space-y-2">
                  {[
                    'Complete Node.js backend course',
                    'Build a full-stack application',
                    'Learn PostgreSQL optimization',
                    'Write technical blog posts'
                  ].map((goal, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-neon-cyan">🎯</span>
                      <span className="text-gray-300">{goal}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Learning Resources</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Node.js Complete Guide', progress: 75 },
                    { name: 'Database Design Course', progress: 40 },
                    { name: 'System Design Interview', progress: 20 }
                  ].map((resource, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 text-sm">{resource.name}</span>
                        <span className="text-neon-cyan text-sm">{resource.progress}%</span>
                      </div>
                      <div className="w-full bg-dark-border rounded-full h-1">
                        <motion.div
                          className="h-1 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${resource.progress}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Roadmap

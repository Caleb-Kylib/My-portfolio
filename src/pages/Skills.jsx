import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: 'Frontend Development',
      color: 'from-neon-blue to-neon-cyan',
      skills: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'JavaScript', level: 85, icon: '🟨' },
        { name: 'TypeScript', level: 80, icon: '🔷' },
        { name: 'HTML5', level: 95, icon: '🌐' },
        { name: 'CSS3', level: 90, icon: '🎨' },
        { name: 'Tailwind CSS', level: 85, icon: '💨' },
        { name: 'Sass/SCSS', level: 75, icon: '💅' },
        { name: 'Next.js', level: 70, icon: '▲' }
      ]
    },
    {
      title: 'Backend Learning',
      color: 'from-neon-purple to-neon-blue',
      skills: [
        { name: 'Node.js', level: 60, icon: '🟢' },
        { name: 'Express.js', level: 55, icon: '🚀' },
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'Django', level: 45, icon: '🎯' },
        { name: 'PostgreSQL', level: 50, icon: '🐘' },
        { name: 'MongoDB', level: 65, icon: '🍃' },
        { name: 'REST APIs', level: 70, icon: '🔌' },
        { name: 'GraphQL', level: 40, icon: '📊' }
      ]
    },
    {
      title: 'Tools & Technologies',
      color: 'from-neon-cyan to-neon-purple',
      skills: [
        { name: 'Git', level: 85, icon: '📝' },
        { name: 'Docker', level: 60, icon: '🐳' },
        { name: 'AWS', level: 45, icon: '☁️' },
        { name: 'Figma', level: 80, icon: '🎨' },
        { name: 'VS Code', level: 90, icon: '💻' },
        { name: 'Webpack', level: 65, icon: '📦' },
        { name: 'Jest', level: 70, icon: '🧪' },
        { name: 'Cypress', level: 55, icon: '🔍' }
      ]
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

  const CircularProgress = ({ skill, index }) => {
    const circumference = 2 * Math.PI * 45
    const strokeDasharray = circumference
    const strokeDashoffset = circumference - (skill.level / 100) * circumference

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ delay: index * 0.1 }}
        className="relative w-32 h-32 group"
      >
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-dark-border"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00f5ff" />
              <stop offset="100%" stopColor="#bf00ff" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl mb-1">{skill.icon}</div>
          <div className="text-lg font-bold text-neon-cyan">{skill.level}%</div>
        </div>

        {/* Tooltip */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-dark-surface text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10 border border-dark-border">
          {skill.name}
        </div>
      </motion.div>
    )
  }

  const LinearProgress = ({ skill, index }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ delay: index * 0.1 }}
        className="space-y-2"
      >
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-lg">{skill.icon}</span>
            <span className="text-gray-300 font-medium">{skill.name}</span>
          </div>
          <span className="text-neon-cyan font-semibold">{skill.level}%</span>
        </div>
        <div className="w-full bg-dark-border rounded-full h-2">
          <motion.div
            className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple"
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-7xl">
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
                Skills & Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and learning journey
            </p>
          </motion.div>

          {/* Skills Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="space-y-8"
            >
              {/* Category Header */}
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-2">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h2>
                <div className={`h-1 w-24 mx-auto bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-surface rounded-2xl p-6 border border-dark-border hover:border-neon-cyan/50 transition-all duration-300 group"
                  >
                    {/* Circular Progress for larger screens */}
                    <div className="hidden md:block">
                      <CircularProgress skill={skill} index={skillIndex} />
                    </div>
                    
                    {/* Linear Progress for mobile */}
                    <div className="md:hidden">
                      <LinearProgress skill={skill} index={skillIndex} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Learning Path */}
          <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-8 border border-dark-border">
            <h2 className="text-3xl font-bold text-center text-neon-cyan mb-8">Learning Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">✅</span>
                </div>
                <h3 className="text-xl font-semibold text-green-400">Completed</h3>
                <p className="text-gray-400 text-sm">
                  Frontend fundamentals, React ecosystem, and modern CSS frameworks
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚧</span>
                </div>
                <h3 className="text-xl font-semibold text-yellow-400">In Progress</h3>
                <p className="text-gray-400 text-sm">
                  Backend development, database design, and cloud technologies
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-blue-400">Next Goals</h3>
                <p className="text-gray-400 text-sm">
                  Full-stack mastery, DevOps practices, and advanced system design
                </p>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-neon-cyan">Certifications & Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'React Developer Certification', issuer: 'Meta', year: '2024', status: 'Completed' },
                { name: 'JavaScript Algorithms', issuer: 'freeCodeCamp', year: '2023', status: 'Completed' },
                { name: 'AWS Cloud Practitioner', issuer: 'Amazon', year: '2024', status: 'In Progress' }
              ].map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-dark-surface rounded-xl p-6 border border-dark-border hover:border-neon-cyan/50 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-neon-cyan text-sm">{cert.year}</span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cert.status === 'Completed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills

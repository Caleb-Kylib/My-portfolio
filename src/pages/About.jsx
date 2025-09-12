import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const timelineData = [
    {
      year: '2024',
      title: 'Frontend Developer',
      company: 'Current Role',
      description: 'Building modern web applications with React, TypeScript, and modern CSS frameworks.',
      status: 'current'
    },
    {
      year: '2023',
      title: 'UI/UX Designer',
      company: 'Previous Role',
      description: 'Designed user interfaces and experiences for web and mobile applications.',
      status: 'completed'
    },
    {
      year: '2022',
      title: 'Web Development Bootcamp',
      company: 'Self-Taught',
      description: 'Intensive learning of HTML, CSS, JavaScript, and React fundamentals.',
      status: 'completed'
    },
    {
      year: '2021',
      title: 'Computer Science Student',
      company: 'University',
      description: 'Started formal education in computer science and programming.',
      status: 'completed'
    }
  ]

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'CSS/Tailwind', level: 95 },
    { name: 'Node.js', level: 60 },
    { name: 'Python', level: 70 }
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

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-20"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate developer with a love for creating beautiful, functional web experiences
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple p-1 glow-border">
                  <div className="w-full h-full rounded-full bg-dark-surface flex items-center justify-center">
                    <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-neon-cyan">
                      JD
                    </div>
                  </div>
                </div>
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-purple opacity-20 blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </motion.div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-neon-cyan">Hello, I'm John Doe</h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate frontend developer with a strong foundation in modern web technologies. 
                  My journey began with a curiosity about how websites work, which led me to dive deep 
                  into the world of web development.
                </p>
                <p>
                  Currently, I'm focused on mastering React and expanding my skills into backend development. 
                  I believe in continuous learning and staying up-to-date with the latest technologies and 
                  best practices in the industry.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-neon-cyan">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-neon-cyan">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-dark-border rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-neon-blue to-neon-purple h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-neon-cyan">Career Timeline</h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue to-neon-purple"></div>
              
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start space-x-6 mb-12"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-sm font-bold ${
                        item.status === 'current'
                          ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white glow-border'
                          : 'bg-dark-border text-gray-400'
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.year}
                    </motion.div>
                    {item.status === 'current' && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-neon-cyan opacity-30"
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
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-neon-cyan font-medium">{item.company}</p>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-8 border border-dark-border">
            <h2 className="text-2xl font-bold text-center text-neon-cyan mb-8">Fun Facts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '☕', fact: 'Coffee consumed daily', value: '5+ cups' },
                { icon: '🚀', fact: 'Projects completed', value: '20+' },
                { icon: '📚', fact: 'Books read this year', value: '12' }
              ].map((fact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center space-y-2 p-4 rounded-lg bg-dark-bg border border-dark-border"
                >
                  <div className="text-3xl">{fact.icon}</div>
                  <div className="text-2xl font-bold text-neon-cyan">{fact.value}</div>
                  <div className="text-gray-400 text-sm">{fact.fact}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About

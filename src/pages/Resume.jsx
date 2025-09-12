import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Resume = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experience = [
    {
      title: 'Frontend Developer',
      company: 'Tech Company Inc.',
      period: '2023 - Present',
      description: 'Developing modern web applications using React, TypeScript, and modern CSS frameworks.',
      achievements: [
        'Built responsive web applications serving 10,000+ users',
        'Improved application performance by 40% through code optimization',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Mentored junior developers and conducted code reviews'
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'Design Studio',
      period: '2022 - 2023',
      description: 'Created user-centered designs for web and mobile applications.',
      achievements: [
        'Designed 20+ user interfaces for various clients',
        'Conducted user research and usability testing',
        'Created design systems and component libraries',
        'Collaborated with developers to ensure design implementation'
      ]
    },
    {
      title: 'Web Development Intern',
      company: 'StartupXYZ',
      period: '2021 - 2022',
      description: 'Learned web development fundamentals and contributed to real projects.',
      achievements: [
        'Assisted in building company website using HTML, CSS, and JavaScript',
        'Learned version control with Git and GitHub',
        'Participated in agile development processes',
        'Gained experience with responsive design principles'
      ]
    }
  ]

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Technology',
      year: '2021 - 2024',
      gpa: '3.8/4.0'
    },
    {
      degree: 'Web Development Bootcamp',
      school: 'Code Academy',
      year: '2022',
      gpa: 'Certificate'
    }
  ]

  const skills = {
    'Frontend': ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass', 'Next.js'],
    'Backend': ['Node.js', 'Express.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    'Tools': ['Git', 'Docker', 'AWS', 'Figma', 'VS Code', 'Jest', 'Cypress']
  }

  const certifications = [
    'Meta React Developer Certificate (2024)',
    'AWS Cloud Practitioner (2024)',
    'JavaScript Algorithms and Data Structures - freeCodeCamp (2023)',
    'Responsive Web Design - freeCodeCamp (2022)'
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

  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Placeholder path
    link.download = 'John_Doe_Resume.pdf'
    link.click()
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
                Resume & CV
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Download my resume or explore my professional experience and qualifications
            </p>
            
            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownload}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold rounded-lg glow-border hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Download PDF Resume</span>
            </motion.button>
          </motion.div>

          {/* Resume Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-1 space-y-8">
              {/* Contact Info */}
              <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-neon-cyan mb-4">Contact Information</h2>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-neon-blue">📧</span>
                    <span className="text-gray-300">john.doe@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-neon-blue">📱</span>
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-neon-blue">📍</span>
                    <span className="text-gray-300">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-neon-blue">💼</span>
                    <span className="text-gray-300">linkedin.com/in/johndoe</span>
                  </div>
                </div>
              </motion.div>

              {/* Skills */}
              <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-neon-cyan mb-4">Technical Skills</h2>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h3 className="text-sm font-semibold text-gray-300 mb-2">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-neon-blue/20 text-neon-blue text-xs rounded-full border border-neon-blue/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-neon-cyan mb-4">Certifications</h2>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-neon-cyan mt-1">🏆</span>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Professional Summary */}
              <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-neon-cyan mb-4">Professional Summary</h2>
                <p className="text-gray-300 leading-relaxed">
                  Passionate frontend developer with 2+ years of experience building modern web applications. 
                  Strong foundation in React, JavaScript, and modern CSS frameworks. Currently expanding 
                  skills into backend development to become a full-stack engineer. Proven track record of 
                  delivering high-quality, user-centered solutions and collaborating effectively with 
                  cross-functional teams.
                </p>
              </motion.div>

              {/* Experience */}
              <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-neon-cyan mb-6">Professional Experience</h2>
                <div className="space-y-8">
                  {experience.map((job, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-l-2 border-neon-blue/30 pl-6"
                    >
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                          <p className="text-neon-cyan font-medium">{job.company}</p>
                          <p className="text-gray-400 text-sm">{job.period}</p>
                        </div>
                        <p className="text-gray-300 text-sm">{job.description}</p>
                        <ul className="space-y-1">
                          {job.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-gray-400">
                              <span className="text-neon-cyan mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-6 border border-dark-border">
                <h2 className="text-xl font-bold text-neon-cyan mb-6">Education</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex justify-between items-start"
                    >
                      <div>
                        <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                        <p className="text-neon-cyan font-medium">{edu.school}</p>
                        <p className="text-gray-400 text-sm">{edu.year}</p>
                      </div>
                      <span className="text-neon-cyan font-semibold">{edu.gpa}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Additional Actions */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-neon-cyan">Ready to Connect?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Feel free to reach out if you'd like to discuss potential collaborations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-neon-cyan text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan/90 transition-colors"
              >
                Get In Touch
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue/10 transition-colors"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume

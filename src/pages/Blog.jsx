import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const blogPosts = [
    {
      id: 1,
      title: 'My Journey from Designer to Developer',
      excerpt: 'How I transitioned from UI/UX design to frontend development and the lessons I learned along the way.',
      content: 'Starting as a designer gave me a unique perspective on user experience and visual design. When I decided to learn to code, I brought that design sensibility with me, which has been invaluable in creating user-friendly applications...',
      category: 'Career',
      date: '2024-01-15',
      readTime: '5 min read',
      tags: ['Career', 'Design', 'Development'],
      image: '/api/placeholder/400/250',
      featured: true
    },
    {
      id: 2,
      title: 'Building My First Full-Stack Application',
      excerpt: 'A deep dive into the challenges and triumphs of creating a complete web application from scratch.',
      content: 'Building my first full-stack application was both exciting and overwhelming. I learned about database design, API development, and the importance of proper error handling...',
      category: 'Technical',
      date: '2024-01-10',
      readTime: '8 min read',
      tags: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 3,
      title: 'The Power of Framer Motion in React',
      excerpt: 'Exploring how Framer Motion can transform your React applications with smooth, engaging animations.',
      content: 'Framer Motion has revolutionized how I approach animations in React. The declarative API makes it easy to create complex animations that would be difficult with CSS alone...',
      category: 'Technical',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['React', 'Animation', 'Framer Motion', 'UI/UX'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 4,
      title: 'Learning Backend Development: My First Month',
      excerpt: 'Reflections on diving into backend development and the key concepts I\'ve learned so far.',
      content: 'After months of frontend development, I decided to expand my skills into backend development. The learning curve has been steep but incredibly rewarding...',
      category: 'Learning',
      date: '2024-01-01',
      readTime: '7 min read',
      tags: ['Backend', 'Node.js', 'Learning', 'Career Growth'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 5,
      title: 'Why I Chose Tailwind CSS Over Traditional CSS',
      excerpt: 'My experience with utility-first CSS and how it has improved my development workflow.',
      content: 'Initially skeptical of utility-first CSS, I was surprised by how much Tailwind CSS improved my development speed and consistency...',
      category: 'Technical',
      date: '2023-12-28',
      readTime: '4 min read',
      tags: ['CSS', 'Tailwind', 'Productivity', 'Styling'],
      image: '/api/placeholder/400/250',
      featured: false
    },
    {
      id: 6,
      title: 'The Importance of Code Reviews in Learning',
      excerpt: 'How participating in code reviews has accelerated my learning and improved my code quality.',
      content: 'Code reviews have been one of the most valuable learning experiences in my development journey. They\'ve taught me not just about code quality, but about communication and collaboration...',
      category: 'Learning',
      date: '2023-12-20',
      readTime: '5 min read',
      tags: ['Code Review', 'Learning', 'Collaboration', 'Best Practices'],
      image: '/api/placeholder/400/250',
      featured: false
    }
  ]

  const categories = ['All', 'Technical', 'Career', 'Learning']

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

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
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
                Blog & Learning Journey
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Sharing my experiences, insights, and lessons learned on my development journey
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-neon-cyan text-dark-bg glow-border'
                    : 'bg-dark-surface text-gray-300 hover:bg-neon-blue/20 hover:text-neon-blue'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && (
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-2xl font-bold text-neon-cyan">Featured Post</h2>
              <motion.article
                whileHover={{ y: -5 }}
                className="bg-dark-surface rounded-2xl overflow-hidden border border-dark-border hover:border-neon-cyan/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center">
                      <div className="text-6xl opacity-50">📝</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <span className="text-neon-cyan">{featuredPost.category}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                      {featuredPost.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {featuredPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-dark-bg text-neon-blue text-xs rounded-full border border-neon-blue/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-neon-cyan hover:text-neon-blue transition-colors"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl font-bold text-neon-cyan">
              {selectedCategory === 'All' ? 'All Posts' : `${selectedCategory} Posts`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-dark-surface rounded-2xl overflow-hidden border border-dark-border hover:border-neon-cyan/50 transition-all duration-300 group cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-neon-purple/10 flex items-center justify-center">
                      <div className="text-4xl opacity-50">📝</div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-neon-cyan transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-dark-bg text-neon-blue text-xs rounded-full border border-neon-blue/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center space-x-2 text-neon-cyan hover:text-neon-blue transition-colors text-sm"
                    >
                      <span>Read More</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div variants={itemVariants} className="bg-dark-surface rounded-2xl p-8 border border-dark-border text-center">
            <h2 className="text-2xl font-bold text-neon-cyan mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Subscribe to get notified about new posts, tutorials, and insights from my development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-dark-bg border border-dark-border rounded-lg text-white placeholder-gray-400 focus:border-neon-cyan focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-neon-cyan text-dark-bg font-semibold rounded-lg hover:bg-neon-cyan/90 transition-colors"
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Blog

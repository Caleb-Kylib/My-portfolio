import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const timeline = [
  {
    year: '2024',
    title: 'Frontend Developer',
    company: 'Current Role',
    description:
      'Building modern web applications with React, TypeScript, and Tailwind CSS — focused on performance and clean architecture.',
    current: true,
  },
  {
    year: '2023',
    title: 'UI/UX Designer',
    company: 'Freelance',
    description:
      'Designed user interfaces and experiences for web and mobile applications, working closely with product teams.',
    current: false,
  },
  {
    year: '2022',
    title: 'Web Development Bootcamp',
    company: 'Self-Taught',
    description:
      'Intensive deep-dive into HTML, CSS, JavaScript, and the React ecosystem.',
    current: false,
  },
  {
    year: '2021',
    title: 'Computer Science Student',
    company: 'University',
    description:
      'Began formal education in computer science, algorithms, and software engineering fundamentals.',
    current: false,
  },
]

const stats = [
  { value: '20+', label: 'Projects completed' },
  { value: '3+',  label: 'Years of experience' },
  { value: '10+', label: 'Technologies mastered' },
]

const About = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <div className="min-h-screen bg-[#141212] py-24 px-6">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-20"
        >

          {/* ── Section header ── */}
          <motion.div variants={fadeUp} className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">
              About Me
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              The person behind the code
            </h1>
            <p className="text-[#A19E9B] text-[1rem] leading-relaxed max-w-2xl">
              A quick look at my background, how I got here, and what drives
              me to keep building.
            </p>
          </motion.div>

          {/* ── Bio + portrait ── */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Portrait */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="rounded-3xl overflow-hidden border-2 border-[#2E2C2B] shadow-2xl bg-[#1C1A19]"
                style={{ width: 'clamp(200px, 24vw, 280px)' }}
              >
                <img
                  src="/profile.jpg"
                  alt="Lemayian Caleb"
                  className="w-full object-cover object-top"
                  style={{ aspectRatio: '3/4' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.setAttribute('data-empty', 'true')
                  }}
                />
                <style>{`
                  [data-empty="true"] {
                    aspect-ratio: 3/4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                  }
                  [data-empty="true"]::after {
                    content: '👤';
                    font-size: 4.5rem;
                    opacity: 0.12;
                  }
                `}</style>
              </div>
            </div>

            {/* Bio text */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-white">
                Hello, I'm Lemayian Caleb
              </h2>
              <div className="space-y-4 text-[#A19E9B] text-[0.95rem] leading-relaxed">
                <p>
                  I'm a full-stack developer with a genuine passion for
                  building things on the web. My journey started with simple
                  curiosity — tinkering with HTML and wondering how everything
                  fit together — and grew into a career built around clean code
                  and great design.
                </p>
                <p>
                  Today I work across the full stack: React and Tailwind on the
                  front, Node.js and Python on the back, and cloud platforms
                  like AWS and Google Cloud to tie it all together. I care as
                  much about performance and maintainability as I do about how
                  something looks and feels.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring design trends,
                  contributing to open-source, or mentoring others just getting
                  started in the field.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#1C1A19] border border-[#2E2C2B] rounded-2xl p-4 text-center"
                  >
                    <p className="text-2xl font-extrabold text-white">{s.value}</p>
                    <p className="text-[0.72rem] text-[#706E6B] mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Timeline ── */}
          <motion.div variants={fadeUp} className="space-y-6">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">
                Experience
              </p>
              <h2 className="text-2xl font-bold text-white">Career Timeline</h2>
            </div>

            <div className="relative space-y-0">
              {/* vertical line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-[#2E2C2B]" />

              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                  className="relative flex gap-6 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div className="relative z-10 mt-1 flex-shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-[0.65rem] font-bold border ${
                        item.current
                          ? 'bg-white text-[#141212] border-white'
                          : 'bg-[#1C1A19] text-[#706E6B] border-[#2E2C2B]'
                      }`}
                    >
                      {item.year.slice(2)}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-[#1C1A19] border border-[#2E2C2B] rounded-2xl p-5 space-y-1.5">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <h3 className="font-semibold text-white text-[0.95rem]">{item.title}</h3>
                      <span className="text-[0.72rem] text-[#706E6B] border border-[#2E2C2B] rounded-full px-2.5 py-0.5 bg-[#2A2827]">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-[0.78rem] font-medium text-[#706E6B] uppercase tracking-wide">
                      {item.company}
                    </p>
                    <p className="text-[#A19E9B] text-sm leading-relaxed">{item.description}</p>
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

export default About

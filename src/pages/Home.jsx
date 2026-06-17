import { motion } from 'framer-motion'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75, ease: 'easeOut' } },
}

const Home = () => (
  <section className="min-h-screen bg-[#141212] flex items-center">
    <div className="container mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* ── Left: text ── */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]"
          >
            Hi, I'm Lemayian Caleb
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight"
          >
            <span className="mr-3" role="img" aria-label="waving hand">👋</span>
            Full-Stack Developer &amp;&nbsp;UI Craftsman
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[1rem] text-[#A19E9B] leading-relaxed max-w-lg"
          >
            I build clean, performant web applications from the ground up —
            spanning React front-ends, Node.js APIs, and thoughtful database
            design. I care deeply about the craft: readable code, fast
            interfaces, and experiences that feel effortless to use.
          </motion.p>
        </motion.div>

        {/* ── Right: portrait card ── */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-end"
        >
          <div
            className="rounded-3xl overflow-hidden border-2 border-[#2E2C2B] shadow-2xl bg-[#1C1A19]"
            style={{ width: 'clamp(220px, 26vw, 300px)' }}
          >
            <img
              src="/profile.jpg"
              alt="Lemayian Caleb — profile photo"
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
                font-size: 5rem;
                opacity: 0.12;
              }
            `}</style>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
)

export default Home

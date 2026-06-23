import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

// ── asset imports ─────────────────────────────────────────────────────────────
import meImg           from '../assets/me.jpg'
import jsLogoImg       from '../assets/javascript-logo.png'
import phpImg          from '../assets/php-logo.png'
import gcImg           from '../assets/google-cloud.png'
import ghActionsImg    from '../assets/github-actions.png'
import claudeImg       from '../assets/claudecode-color.png'

// ── animation presets ────────────────────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}
const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.75 } },
}

// ── thin section divider ──────────────────────────────────────────────────────
const Divider = () => (
  <div className="container mx-auto max-w-5xl px-6">
    <div className="h-px bg-[#2E2C2B]" />
  </div>
)

// ─────────────────────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────────────────────
const Hero = () => (
  <section id="hero" className="min-h-screen bg-[#141212] flex items-center">
    <div className="container mx-auto max-w-6xl px-6 py-28 md:py-36">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Text */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-6">
          <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">
            Hi, I'm Lemayian Caleb
          </motion.p>
              <motion.h1
  variants={fadeUp}
   className="text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight">
  <span className="mr-3" role="img" aria-label="waving hand">
    👋
  </span>
  Full-Stack Developer
</motion.h1>

    <motion.h2
     variants={fadeUp}
     className="mt-2 text-xl md:text-2xl font-medium text-[#A19E9B]">
     Digital Solutions Builder
   </motion.h2>

    <motion.p
    variants={fadeUp}
     className="mt-6 text-[1rem] text-[#A19E9B] leading-relaxed max-w-lg">
    I help businesses bring their ideas to life through modern web
    applications that are fast, scalable, and user-friendly. From crafting
     seamless interfaces to building secure back-end systems, I create
     solutions that drive growth and deliver real value.
     </motion.p>
      </motion.div>

        {/* Portrait */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible"
          className="flex justify-center md:justify-end">
          <div className="rounded-3xl overflow-hidden border-2 border-[#2E2C2B] shadow-2xl bg-[#1C1A19]"
            style={{ width: 'clamp(200px, 26vw, 290px)' }}>
            <img src={meImg} alt="Lemayian Caleb"
              className="w-full object-cover object-top" style={{ aspectRatio: '3/4' }} />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
)

// ─────────────────────────────────────────────────────────────────────────────
// ABOUT  (no timeline, no portrait, updated bio, only 2 stats)
// ─────────────────────────────────────────────────────────────────────────────
const stats = [
  { value: '20+', label: 'Projects completed' },
  { value: '3+',  label: 'Years experience'   },
]

const AboutSection = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="about" ref={ref} className="bg-[#141212] py-24 px-6">
      <div className="container mx-auto max-w-5xl space-y-10">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.55 }} className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">About Me</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The person behind the code
          </h2>
          <p className="text-[#A19E9B] text-[1rem] leading-relaxed max-w-2xl">
            A quick look at my background, how I got here, and what drives me to keep building.
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.55, delay:0.1 }} className="space-y-5 max-w-3xl">
          <h3 className="text-2xl font-bold text-white">Hello, I'm Lemayian Caleb</h3>
          <div className="space-y-4 text-[#A19E9B] text-[0.95rem] leading-relaxed">
            <p>
              I'm a Full-Stack Developer passionate about building modern web applications that are both visually engaging and 
              technically robust. I enjoy transforming ideas into digital products that solve real-world problems, 
              combining intuitive user experiences with scalable back-end systems.
            </p>
            <p>
              My development toolkit includes React and Tailwind CSS for creating responsive, user-friendly interfaces, alongside Node.js, Express.js, Django
               and PHP for developing reliable server-side applications. I work with MongoDB, MySQL 
              and PostgreSQL to design efficient, data-driven solutions that support business growth and long-term scalability.
            </p>
            <p>
              Beyond application development, I'm expanding my expertise in cloud technologies through Google Cloud, learning how to deploy, monitor 
              and scale applications in production environments while following modern DevOps and software engineering practices.
            </p>
            <p>
              Outside of coding, you'll often find me participating in hackathons, exploring emerging technologies and collaborating with fellow developers. I'm driven by curiosity, 
              continuous learning, and the challenge of building products that create meaningful impact for the people who use them
            </p>
          </div>

          {/* 2-stat row */}
          <div className="grid grid-cols-2 gap-4 pt-2 max-w-xs">
            {stats.map(s => (
              <div key={s.label} className="bg-[#1C1A19] border border-[#2E2C2B] rounded-2xl p-4 text-center">
                <p className="text-2xl font-extrabold text-white">{s.value}</p>
                <p className="text-[0.72rem] text-[#706E6B] mt-1 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// SKILLS  (PNG assets for 5 skills, inline SVG for rest)
// ─────────────────────────────────────────────────────────────────────────────
const PngIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-9 h-9 object-contain" />
)

const skillIcons = {
  // ── PNG assets ──────────────────────────────────────────────────────────
  'PHP':            <PngIcon src={phpImg}        alt="PHP" />,
  'Google Cloud':   <PngIcon src={gcImg}         alt="Google Cloud" />,
  'GitHub Actions': <PngIcon src={ghActionsImg}  alt="GitHub Actions" />,
  'Claude Code':    <PngIcon src={claudeImg}     alt="Claude Code" />,

  // ── Inline SVG ───────────────────────────────────────────────────────────
  'JavaScript':     <PngIcon src={jsLogoImg}     alt="JavaScript" />,
  'TypeScript':   (<svg viewBox="0 0 32 32" className="w-9 h-9"><rect width="32" height="32" rx="4" fill="#3178C6"/><path fill="#fff" d="M18.3 20v1.8c.5.2 1 .4 1.6.4.7 0 1.2-.2 1.6-.5.3-.3.5-.8.5-1.4 0-.5-.1-.9-.4-1.2-.3-.3-.8-.6-1.5-.9-.5-.2-.8-.4-.9-.5-.1-.1-.2-.3-.2-.5s.1-.4.2-.5c.2-.1.4-.2.7-.2.6 0 1.1.2 1.6.7v-1.7a4 4 0 00-1.7-.4c-.7 0-1.2.2-1.6.5-.4.3-.6.8-.6 1.4 0 .9.5 1.5 1.5 2 .6.2.9.4 1.1.6.1.1.2.3.2.5s-.1.4-.3.5c-.2.1-.4.2-.7.2-.7 0-1.3-.3-1.8-.8zm-4.8-3.6H16v-1.6H10v1.6h2.5V26h1.9v-9.6z"/></svg>),
  'React JS':     (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#20232A"/><circle cx="16" cy="16" r="3" fill="#61DAFB"/><ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.3"/><ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(60 16 16)"/><ellipse cx="16" cy="16" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.3" transform="rotate(120 16 16)"/></svg>),
  'Angular':      (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#DD0031"/><path fill="#fff" d="M16 4L5 8.5l1.7 14L16 28l9.3-5.5L27 8.5 16 4zm0 3l7.2 3.2-1.3 10.5L16 23.5l-5.9-2.8L8.8 10.2 16 7z"/><path fill="#fff" d="M16 10l-4 8h1.5l.8-2h3.4l.8 2H20l-4-8zm0 2.5l1.2 2.5h-2.4L16 12.5z"/></svg>),
  'Tailwind CSS': (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#0F172A"/><path fill="#38BDF8" d="M16 9c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3C19.4 10.2 18.3 9 16 9zm-4.8 6c-2.7 0-4.4 1.3-5.1 4 1-1.3 2.2-1.8 3.5-1.5.8.2 1.3.7 1.9 1.3.9 1 2 2.2 4.3 2.2 2.7 0 4.4-1.3 5.1-4-1 1.3-2.2 1.8-3.5 1.5-.8-.2-1.3-.7-1.9-1.3-.9-1-2-2.2-4.3-2.2z"/></svg>),
  'Bootstrap':    (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#7952B3"/><path fill="#fff" d="M10 8h7.5c3.3 0 5.3 1.7 5.3 4.3 0 1.8-1 3.1-2.5 3.7 1.9.5 3.1 1.9 3.1 3.9 0 2.8-2.2 4.6-5.8 4.6H10V8zm3 3v4h3.8c1.5 0 2.4-.7 2.4-2s-.9-2-2.4-2H13zm0 6.7v4.4h4.2c1.7 0 2.6-.8 2.6-2.2s-1-2.2-2.6-2.2H13z"/></svg>),
  'Python':       (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#1E1E1E"/><path fill="#3776AB" d="M16 5c-1.8 0-3.4.2-4.6.5C8.7 6.2 8 7.5 8 9v2.5h8v1H6.5C5 12.5 4 13.8 4 16s1 3.5 2.5 4l.5.1V22c0 1.5.7 2.8 3.4 3.5 1.2.3 2.8.5 4.6.5 1.8 0 3.4-.2 4.6-.5 2.7-.7 3.4-2 3.4-3.5v-2.5h-8v-1h9.5c1.5 0 2.5-1.3 2.5-3.5s-1-3.5-2.5-4l-.5-.1V9c0-1.5-.7-2.8-3.4-3.5C19.4 5.2 17.8 5 16 5zm-2 3a1 1 0 110 2 1 1 0 010-2zm4 14a1 1 0 110 2 1 1 0 010-2z"/></svg>),
  'Django':       (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#092E20"/><path fill="#44B78B" d="M17 7h3v13.5c-1.5.3-2.7.4-4 .4-3.7 0-5.7-1.7-5.7-4.9s2-5 5.2-5c.6 0 1 .1 1.5.2V7zm0 7c-.4-.1-.8-.2-1.3-.2-1.5 0-2.4.9-2.4 2.6 0 1.6.9 2.5 2.4 2.5.4 0 .8 0 1.3-.1V14z"/><path fill="#44B78B" d="M21 7h3v3h-3zm0 5h3v11h-3z"/></svg>),
  'MongoDB':      (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#001E2B"/><path fill="#00ED64" d="M16 5s-5 5.5-5 10.5c0 2.8 2.2 5 5 5s5-2.2 5-5C21 10.5 16 5 16 5z"/><path fill="none" stroke="#00ED64" strokeWidth="1.5" strokeLinecap="round" d="M16 20.5v6.5"/></svg>),
  'MySQL':        (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#00546B"/><path fill="#F29111" d="M8 11c0-1.1 3.6-2 8-2s8 .9 8 2v2c0 1.1-3.6 2-8 2s-8-.9-8-2v-2z"/><path fill="#F29111" d="M8 15v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2c-1.4.8-4.3 1.3-8 1.3S9.4 15.8 8 15z"/><path fill="#F29111" d="M8 19v2c0 1.1 3.6 2 8 2s8-.9 8-2v-2c-1.4.8-4.3 1.3-8 1.3S9.4 19.8 8 19z"/></svg>),
  'Firebase':     (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#1C1C1C"/><path fill="#FFA000" d="M10 24l2.8-16.7 4.7 8.9L10 24z"/><path fill="#F57F17" d="M22 24l-4.5-17-2.7 5.2L22 24z"/><path fill="#FFCA28" d="M10 24h12l-6-11z"/></svg>),
  'AWS':          (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#1A1A1A"/><path fill="#FF9900" d="M10 17.5c-1.5-.6-2.5-2-2.5-3.5 0-2.2 1.8-4 4-4 .3 0 .6 0 .9.1C13 8.6 14.4 7.5 16 7.5c1.8 0 3.3 1.2 3.7 2.9.3 0 .5-.1.8-.1 1.7 0 3 1.3 3 3 0 1.4-.9 2.6-2.2 2.9"/><path stroke="#FF9900" strokeWidth="1.3" strokeLinecap="round" fill="none" d="M7.5 19.5q3.5 1.5 8.5 1.5t8.5-1.5M22.5 21l1-1m-15 1-1-1"/></svg>),
  'Figma':        (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#1E1E1E"/><path fill="#F24E1E" d="M12 8h4v5h-4a2.5 2.5 0 010-5z"/><path fill="#FF7262" d="M16 8h4a2.5 2.5 0 010 5h-4V8z"/><path fill="#A259FF" d="M16 13h4a2.5 2.5 0 010 5h-4v-5z"/><path fill="#1ABCFE" d="M16 18a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z"/><path fill="#0ACF83" d="M12 13h4v5h-4a2.5 2.5 0 010-5z"/></svg>),
  'Git':          (<svg viewBox="0 0 32 32" className="w-9 h-9"><circle cx="16" cy="16" r="16" fill="#F05032"/><path fill="#fff" d="M27.6 14.6L17.4 4.4a1.5 1.5 0 00-2.1 0l-2.1 2.1 2.6 2.6a1.8 1.8 0 012.3 2.3l2.5 2.5a1.8 1.8 0 11-1.1 1.1l-2.3-2.4v6a1.8 1.8 0 11-1.5 0V12a1.8 1.8 0 01-1-2.4L12.1 7 4.4 14.6a1.5 1.5 0 000 2.1l10.2 10.2a1.5 1.5 0 002.1 0l10.9-10.9a1.5 1.5 0 000-2.1z"/></svg>),
}

const skillsList = [
  'JavaScript','TypeScript','React JS','Angular',
  'Tailwind CSS','Bootstrap',
  'Python','Django','PHP',
  'MongoDB','MySQL','Firebase',
  'Google Cloud','AWS',
  'Figma','Git',
  'GitHub Actions','Claude Code',
]

const SkillsSection = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="skills" ref={ref} className="bg-[#141212] py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.55 }} className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Skills &amp; Expertise</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">What I work with</h2>
          <p className="text-[#A19E9B] text-[1rem] leading-relaxed max-w-xl">
            A comprehensive overview of my technical skills and learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-10 mt-14 items-center">
          {skillsList.map((name, i) => (
            <motion.div key={name}
              initial={{ opacity:0, y:20 }} animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ delay: i * 0.04, duration: 0.42 }}
              className="flex flex-col items-center">
              <motion.div whileHover={{ scale:1.08, y:-3 }} transition={{ duration:0.2 }}
                className="w-20 h-20 bg-[#1C1A19] rounded-2xl flex items-center justify-center shadow-lg mx-auto border border-[#2E2C2B] hover:border-[#3A3836] transition-colors duration-200">
                {skillIcons[name] ?? <span className="text-3xl opacity-30">?</span>}
              </motion.div>
              <p className="mt-3 text-center font-medium text-sm md:text-base text-white leading-tight px-1">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTACT
// ─────────────────────────────────────────────────────────────────────────────
const contactDetails = [
  { emoji:'📧', title:'Email',    value:'lemayiancaleb18@gmail.com', sub:'Send me an email anytime',   href:'mailto:lemayiancaleb18@gmail.com' },
  { emoji:'📱', title:'Phone',    value:'+254 796 609626',           sub:'Call me for urgent matters',  href:'tel:+254796609626' },
  { emoji:'📍', title:'Location', value:'Nairobi, Kenya',            sub:'Available for remote work',   href:null },
  { emoji:'💼', title:'LinkedIn', value:'lemayian-murero',           sub:'Connect professionally',      href:'https://linkedin.com/in/lemayian-murero' },
]
const GhIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z"/></svg>)
const LiIcon = () => (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>)

const ContactSection = () => {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const [form, setForm]       = useState({ name:'', email:'', subject:'', message:'' })
  const [sending, setSending] = useState(false)
  const [sent,    setSent]    = useState(false)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const onSubmit = async e => {
    e.preventDefault(); setSending(true)
    await new Promise(r => setTimeout(r, 1800))
    setForm({ name:'', email:'', subject:'', message:'' })
    setSending(false); setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputCls = "w-full px-4 py-3 rounded-xl bg-[#1C1A19] border border-[#2E2C2B] text-white text-sm placeholder-[#706E6B] focus:outline-none focus:border-[#706E6B] transition-colors duration-200"

  return (
    <section id="contact" ref={ref} className="bg-[#141212] py-24 px-6">
      <div className="container mx-auto max-w-5xl space-y-12">

        <motion.div initial={{ opacity:0, y:24 }} animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:0.55 }} className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#706E6B]">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Get in touch</h2>
          <p className="text-[#A19E9B] text-[1rem] leading-relaxed max-w-xl">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Form */}
          <motion.div initial={{ opacity:0, x:-20 }} animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.55, delay:0.1 }}>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#706E6B] uppercase tracking-wide">Name</label>
                  <input type="text" name="name" value={form.name} onChange={onChange} required placeholder="Your name" className={inputCls}/>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#706E6B] uppercase tracking-wide">Email</label>
                  <input type="email" name="email" value={form.email} onChange={onChange} required placeholder="you@example.com" className={inputCls}/>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#706E6B] uppercase tracking-wide">Subject</label>
                <input type="text" name="subject" value={form.subject} onChange={onChange} required placeholder="What's this about?" className={inputCls}/>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-[#706E6B] uppercase tracking-wide">Message</label>
                <textarea name="message" value={form.message} onChange={onChange} required rows={5} placeholder="Tell me about your project…" className={`${inputCls} resize-none`}/>
              </div>
              <motion.button type="submit" disabled={sending} whileHover={{ scale:1.02 }} whileTap={{ scale:0.97 }}
                className="w-full py-3.5 rounded-xl bg-white text-[#141212] font-semibold text-sm hover:bg-[#e5e5e5] transition-colors duration-200 disabled:opacity-50 flex items-center justify-center gap-2">
                {sending
                  ? (<><span className="w-4 h-4 border-2 border-[#141212] border-t-transparent rounded-full animate-spin"/><span>Sending…</span></>)
                  : sent ? '✓ Message sent!' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity:0, x:20 }} animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:0.55, delay:0.15 }} className="space-y-4">
            {contactDetails.map((c, i) => (
              <motion.div key={i} initial={{ opacity:0, y:12 }} animate={inView ? { opacity:1, y:0 } : {}}
                transition={{ delay: i * 0.08 + 0.2 }}
                className="flex items-start gap-4 p-4 bg-[#1C1A19] border border-[#2E2C2B] rounded-2xl hover:border-[#3A3836] transition-colors duration-200">
                <span className="text-xl mt-0.5">{c.emoji}</span>
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#706E6B]">{c.title}</p>
                  {c.href
                    ? <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-medium hover:text-[#A19E9B] transition-colors">{c.value}</a>
                    : <p className="text-white text-sm font-medium">{c.value}</p>}
                  <p className="text-[#706E6B] text-xs mt-0.5">{c.sub}</p>
                </div>
              </motion.div>
            ))}

            <div className="flex gap-3 pt-1">
              {[
                { label:'GitHub',   href:'https://github.com/Caleb-Kylib',           icon:<GhIcon/> },
                { label:'LinkedIn', href:'https://linkedin.com/in/lemayian-murero',   icon:<LiIcon/> },
              ].map(s => (
                <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale:1.1 }} whileTap={{ scale:0.93 }} aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#1C1A19] border border-[#2E2C2B] text-[#A19E9B] hover:text-white hover:border-[#706E6B] transition-colors duration-200">
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE EXPORT
// ─────────────────────────────────────────────────────────────────────────────
const Home = () => (
  <div className="bg-[#141212]">
    <Hero />
    <Divider />
    <AboutSection />
    <Divider />
    <SkillsSection />
    <Divider />
  </div>
)

export { ContactSection }
export default Home

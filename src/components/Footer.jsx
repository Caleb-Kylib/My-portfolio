import { motion } from 'framer-motion'

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.509 11.509 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z"/>
  </svg>
)
const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)
const TwitterIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const Footer = () => {
  const navLinks  = ['Home', 'About', 'Projects', 'Skills', 'Contact']
  const socials   = [
    { name: 'GitHub',   icon: <GithubIcon />,   href: 'https://github.com/Caleb-Kylib' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, href: 'https://linkedin.com/in/lemayian-murero' },
    { name: 'Twitter',  icon: <TwitterIcon />,  href: 'https://twitter.com/lemayianmurero' },
  ]

  return (
    <footer className="bg-[#1C1A19] border-t border-[#2E2C2B]">
      <div className="container mx-auto max-w-5xl px-6 py-14">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[#2E2C2B]">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-[#141212] font-black text-xs leading-none">LC</span>
              </div>
              <span className="text-white font-semibold text-[0.95rem] tracking-tight">Lemayian Caleb</span>
            </div>
            <p className="text-[#A19E9B] text-sm leading-relaxed max-w-xs">
              Full-stack developer building clean, performant web applications
              with a sharp eye for design and detail.
            </p>
            {/* Social icons */}
            <div className="flex gap-2.5 pt-1">
              {socials.map(s => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.93 }}
                  aria-label={s.name}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#2A2827] border border-[#3A3836] text-[#A19E9B] hover:text-white hover:border-[#706E6B] transition-colors duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#706E6B]">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l}>
                  <span className="text-[#A19E9B] text-sm hover:text-white transition-colors duration-200 cursor-pointer">
                    {l}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snapshot */}
          <div className="space-y-4">
            <h3 className="text-[0.7rem] font-semibold uppercase tracking-widest text-[#706E6B]">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:lemayiancaleb18@gmail.com" className="text-[#A19E9B] text-sm hover:text-white transition-colors duration-200 break-all">
                  lemayiancaleb18@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+254796609626" className="text-[#A19E9B] text-sm hover:text-white transition-colors duration-200">
                  +254 796 609626
                </a>
              </li>
              <li>
                <span className="text-[#A19E9B] text-sm">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#706E6B] text-xs">
            © 2026 Lemayian Caleb. All rights reserved.
          </p>
          <p className="text-[#706E6B] text-xs">
            Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

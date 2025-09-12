# Modern Developer Portfolio

A stunning, modern portfolio website built with React, Tailwind CSS, and Framer Motion. Features a dark theme with neon accents, smooth animations, and a fully responsive design.

## ✨ Features

- **Dark Mode Design**: Beautiful dark theme with neon blue/purple/cyan accents
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Particle Background**: Interactive particle system using TSParticles
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, minimal design with hover effects and micro-interactions
- **Page Transitions**: Smooth transitions between different sections
- **Interactive Elements**: Hover effects, scroll animations, and cursor trails

## 🚀 Pages & Sections

### Home / Landing Page
- Hero section with animated typing effect
- Call-to-action buttons with hover animations
- Particle background animation
- Floating elements and gradient effects

### About Me
- Personal biography and profile image
- Animated skills progress bars
- Career timeline with scroll animations
- Fun facts section

### Projects
- Project cards with hover tilt effects
- Case study modals with detailed information
- Category filtering system
- Technology tags and status indicators

### Skills
- Categorized skill sections (Frontend, Backend, Tools)
- Animated progress indicators (circular and linear)
- Learning path visualization
- Certifications and achievements

### Future Roadmap
- Timeline-style learning journey
- Scroll-triggered animations
- Progress tracking for current goals
- Learning resources section

### Blog / Learning Journey
- Blog post cards with hover effects
- Category filtering
- Featured post highlighting
- Newsletter signup

### Resume / CV
- Professional experience timeline
- Skills and certifications
- Download functionality
- Contact information

### Contact
- Interactive contact form with validation
- Social media links
- Contact information cards
- Animated form inputs

## 🛠️ Tech Stack

- **React 19** - Modern React with hooks
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **TSParticles** - Particle system
- **Vite** - Fast build tool and dev server

## 🎨 Design System

### Colors
- **Primary**: Neon Blue (#00f5ff)
- **Secondary**: Neon Purple (#bf00ff)
- **Accent**: Neon Cyan (#00ffff)
- **Background**: Dark (#0a0a0a)
- **Surface**: Dark Gray (#1a1a1a)

### Typography
- **Font**: JetBrains Mono (monospace)
- **Weights**: 300, 400, 500, 600, 700

### Animations
- Smooth page transitions
- Scroll-triggered reveals
- Hover micro-interactions
- Cursor trail effects
- Particle animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── CursorTrail.jsx # Cursor animation effect
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About me page
│   ├── Projects.jsx    # Projects showcase
│   ├── Skills.jsx      # Skills and expertise
│   ├── Roadmap.jsx     # Learning roadmap
│   ├── Blog.jsx        # Blog posts
│   ├── Resume.jsx      # Resume/CV page
│   └── Contact.jsx     # Contact form
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── utils/              # Utility functions
│   └── animations.js   # Animation variants
├── assets/             # Static assets
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🎯 Customization

### Personal Information
Update the following files with your personal information:
- `src/pages/Home.jsx` - Hero section content
- `src/pages/About.jsx` - Biography and timeline
- `src/pages/Projects.jsx` - Your projects
- `src/pages/Resume.jsx` - Professional experience
- `src/pages/Contact.jsx` - Contact information

### Styling
- Modify `tailwind.config.js` for color scheme changes
- Update `src/index.css` for global styles
- Customize animations in `src/utils/animations.js`

### Content
- Replace placeholder images with your own
- Update project data in the respective page components
- Modify the blog posts array in `src/pages/Blog.jsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🎨 Animation Features

- **Page Transitions**: Smooth fade/slide transitions between pages
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states on buttons and cards
- **Micro-interactions**: Subtle animations for better UX
- **Particle System**: Dynamic background particles
- **Cursor Trail**: Glowing cursor effect

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📞 Support

If you have any questions or need help, feel free to reach out:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
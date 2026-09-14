'use client'

import { ArrowDownToLine, ArrowUpRight, BriefcaseBusiness, Code2, ExternalLink, GitBranch, Mail, Menu, Phone, Terminal, UserRound, X } from 'lucide-react'
import { useState } from 'react'

const skills = [
  { label: 'Python', level: 'Programming language', icon: 'PY' },
  { label: 'JavaScript', level: 'Programming language', icon: 'JS' },
  { label: 'React / Next.js', level: 'Frontend development', icon: 'RE' },
  { label: 'Node / Express', level: 'Backend development', icon: 'ND' },
  { label: 'MySQL / MongoDB', level: 'Databases', icon: 'DB' },
  { label: 'Git / GitHub', level: 'Tools & platforms', icon: 'GH' },
  { label: 'PHP', level: 'Web development', icon: 'PH' },
  { label: 'Tailwind CSS', level: 'Interface styling', icon: 'TW' },
  { label: 'Postman / Vercel', level: 'Development tools', icon: 'VT' },
]

const projects = [
  { title: 'MediLocate', description: 'A healthcare discovery platform with interactive maps, specialty filters, radius selection, and a booking interface.', tech: 'JavaScript · Leaflet · OpenStreetMap · Overpass API', href: 'https://github.com/sabarish-es', className: 'project-1' },
  { title: 'Student File Management', description: 'A final-year web application for student information, attendance, study materials, billing, and administration.', tech: 'PHP · MySQL · JavaScript · HTML · CSS · XAMPP', href: 'https://github.com/sabarish-es', className: 'project-2' },
  { title: 'FoodieHub', description: 'A restaurant and POS management application for orders, products, customers, and day-to-day operations.', tech: 'React · Node.js · Express.js · MySQL', href: 'https://github.com/sabarish-es', className: 'project-3' },
  { title: 'Construction Monitoring', description: 'A database-driven application for task management, progress tracking, and resource management.', tech: 'React · Node.js · MySQL', href: 'https://github.com/sabarish-es', className: 'project-4' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="portfolio-shell min-h-screen bg-[#020a18] text-slate-100" onPointerMove={(event) => setCursor({ x: event.clientX, y: event.clientY })} onPointerDown={() => setIsDragging(true)} onPointerUp={() => setIsDragging(false)} onPointerLeave={() => setIsDragging(false)}>
      <div className={`cursor-orb ${isDragging ? 'is-dragging' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true"><span /></div>
      <div className="drag-hint" aria-hidden="true">{isDragging ? 'release' : 'drag me'}</div>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand-mark"><span className="brand-icon"><Terminal size={20} /></span><span><strong>sabarish.in</strong><small>Software Developer & Trainer</small></span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Analytics'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="availability"><span /> Available for opportunities <b>·</b> Open to work</div>
          <h1>Hi, I&apos;m <span>Sabarish E</span></h1>
          <h2><Code2 size={22} /> Software Developer & Trainer</h2>
          <p className="hero-intro">B.Sc. Computer Science graduate, software developer, and Software Trainer at Besant Technologies. I build practical applications, solve technical problems, and help others learn through hands-on development.</p>
          <div className="contact-pills"><a href="mailto:sabarishs094@gmail.com"><Mail size={16} /> sabarishs094@gmail.com</a><a href="tel:+916369721553"><Phone size={16} /> +91 63697 21553</a></div>
          <div className="hero-actions"><a className="primary-button" href="#projects"><Code2 size={17} /> View Projects</a><a className="secondary-button" href="https://github.com/sabarish-es" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a className="secondary-button" href="/Sabarish-E-Resume.pdf" download><ArrowDownToLine size={17} /> Download Resume</a></div>
        </div>
        <div className="orbit-art" aria-label="Developer profile illustration"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="profile-core"><div className="avatar-face">S<span>.</span></div></div><span className="orbit-chip chip-python">PY</span><span className="orbit-chip chip-django">RE</span><span className="orbit-chip chip-js">JS</span><span className="orbit-chip chip-html">DB</span><span className="orbit-chip chip-css">GH</span></div>
        <div className="social-rail"><a href="https://github.com/sabarish-es" aria-label="GitHub" target="_blank" rel="noreferrer"><GitBranch /></a><a href="https://www.linkedin.com/in/sabarish-es/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><UserRound /></a><a href="#contact" aria-label="Contact"><Mail /></a></div>
      </section>

      <section id="about" className="stats-section"><div className="stat-card"><strong>2025</strong><span>B.Sc. Computer Science graduate</span></div><div className="stat-card"><strong>4</strong><span>Featured practical projects</span></div><div className="stat-card"><strong>01</strong><span>Teaching role at Besant Technologies</span></div></section>
      <section className="company-strip"><div><span className="section-kicker">what I do</span><h2>Build, teach, and<br /><em>share what works.</em></h2></div><p>Practical software development and technical mentoring, grounded in real projects.</p></section>

      <section id="skills" className="content-section"><div className="section-heading"><span>01 / toolkit</span><h2>Skills that turn<br /><em>ideas into impact.</em></h2></div><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.label}><div className="skill-icon">{skill.icon}</div><div><h3>{skill.label}</h3><p>{skill.level}</p></div></article>)}</div></section>

      <section id="projects" className="content-section projects-section"><div className="section-heading"><span>02 / selected work</span><h2>Projects that<br /><em>solve real things.</em></h2></div><div className="projects-grid">{projects.map((project, index) => <article className={`portfolio-project ${project.className}`} key={project.title}><div className="project-top"><span>0{index + 1}</span><ExternalLink /></div><div><p>{project.tech}</p><h3>{project.title}</h3><span>{project.description}</span><a href={project.href} target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight /></a></div></article>)}</div></section>

      <section id="experience" className="content-section experience-section"><div className="section-heading"><span>03 / experience</span><h2>Growing through<br /><em>every build.</em></h2></div><div className="timeline"><article><div className="timeline-dot"><BriefcaseBusiness size={13} /></div><div><p className="timeline-date">SOFTWARE TRAINER · PRESENT</p><h3>Software Trainer — Besant Technologies</h3><p>Training students in Python, SQL, MySQL, web development, and practical software workflows through coding exercises and projects.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">2025 · EDUCATION</p><h3>B.Sc. Computer Science</h3><p>Built a strong foundation in programming, databases, web technologies, and problem solving.</p></div></article></div></section>

      <section id="analytics" className="content-section analytics-section"><div className="section-heading"><span>04 / GitHub analytics</span><h2>A transparent look<br /><em>at my activity.</em></h2></div><div className="analytics-grid"><article><strong>GitHub</strong><span>github.com/sabarish-es</span><a href="https://github.com/sabarish-es" target="_blank" rel="noreferrer">View profile <ArrowUpRight /></a></article><article><strong>Focus</strong><span>Python · Full Stack · Teaching</span><p>Building practical software and sharing technical knowledge.</p></article><article><strong>Stack</strong><span>React · Node.js · MySQL</span><p>Frontend, backend, and database development.</p></article></div></section>

      <section id="contact" className="contact-section"><div><span className="section-kicker">05 / let&apos;s connect</span><h2>Have a project<br /><em>in mind?</em></h2><p>I&apos;m open to opportunities, collaborations, and conversations about building useful digital experiences.</p></div><a className="primary-button" href="mailto:sabarishs094@gmail.com"><Mail size={17} /> Start a conversation</a></section>
      <footer><span>© 2025 Sabarish E</span><span>Built with purpose · Tamil Nadu, India</span></footer>
    </main>
  )
}

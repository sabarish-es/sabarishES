'use client'

import { ArrowDownToLine, ArrowUpRight, Code2, ExternalLink, GitBranch, Mail, Menu, Moon, Phone, Send, Sun, Terminal, UserRound, X } from 'lucide-react'
import { FormEvent, useState } from 'react'

const skills = [
  { label: 'Python', level: 'Advanced', icon: 'PY' },
  { label: 'Django', level: 'Advanced', icon: 'DJ' },
  { label: 'React', level: 'Intermediate', icon: 'RX' },
  { label: 'JavaScript', level: 'Intermediate', icon: 'JS' },
  { label: 'MySQL', level: 'Advanced', icon: 'DB' },
  { label: 'HTML / CSS', level: 'Advanced', icon: '</>' },
]

const projects = [
  { title: 'Restaurant Platform', description: 'A freelance restaurant experience with a focused menu, ordering flow, and responsive customer interface.', tech: 'Python · Web Development · GitHub', href: 'https://github.com/sabarish-es/restuarant.git', className: 'project-1' },
  { title: 'Dharsha Lab Form', description: 'A freelance lab form website designed to make patient information and lab workflows easier to manage online.', tech: 'Web Application · Firebase', href: 'https://dharsha-lab-form-2026.web.app', className: 'project-2' },
  { title: 'FindMyDoc', description: 'A patient-first doctor discovery and appointment booking platform built around a simple, reliable experience.', tech: 'Node.js · MySQL · Bootstrap', href: '#contact', className: 'project-3' },
  { title: 'ClassVault', description: 'A responsive student and faculty administration portal for managing academic records and workflows.', tech: 'PHP · MySQL · JavaScript', href: '#contact', className: 'project-4' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = encodeURIComponent(`Portfolio enquiry from ${data.get('name')}`)
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`)
    window.location.href = `mailto:sabarishs094@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <main className={`portfolio-shell min-h-screen ${isLight ? 'theme-light' : ''}`} onPointerMove={(event) => setCursor({ x: event.clientX, y: event.clientY })} onPointerDown={() => setIsDragging(true)} onPointerUp={() => setIsDragging(false)} onPointerLeave={() => setIsDragging(false)}>
      <div className={`cursor-orb ${isDragging ? 'is-dragging' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true"><span /></div>
      <div className="drag-hint" aria-hidden="true">{isDragging ? 'release' : 'drag me'}</div>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand-mark"><span className="brand-icon"><Terminal size={20} /></span><span><strong>sabarish.in</strong><small>Software Trainer</small></span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['Home', 'Achievements', 'Skills', 'GitHub Analytics', 'Projects', 'Experience'].map((item) => <a key={item} href={`#${item === 'GitHub Analytics' ? 'github' : item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
        </div>
        <div className="nav-actions"><button className="theme-button" onClick={() => setIsLight(!isLight)} aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}>{isLight ? <Moon /> : <Sun />}</button><button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="availability"><span /> Software Trainer at Besant Technologies <b>·</b> Freelance developer <b>·</b> Open to connect</div>
          <h1 className="hero-name">Hi, I&apos;m <span className="name-reveal">Sabarish E</span></h1>
          <h2><Code2 size={22} /> Software Trainer &amp; Full Stack Developer</h2>
          <p className="hero-intro">I help aspiring developers build strong foundations in Python full stack development through practical learning, clear explanations, and real-world projects.</p>
          <div className="contact-pills"><a href="mailto:sabarishs094@gmail.com"><Mail size={16} /> sabarishs094@gmail.com</a><a href="tel:+916369721553"><Phone size={16} /> +91 63697 21553</a></div>
          <div className="hero-actions"><a className="primary-button" href="#contact"><Mail size={17} /> Get in touch</a><a className="secondary-button" href="https://github.com/sabarish-es" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a className="secondary-button" href="/Sabarish-E-Resume.pdf" download><ArrowDownToLine size={17} /> Download Resume</a></div>
        </div>
        <div className="orbit-art" aria-label="Software trainer profile illustration"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="profile-core"><div className="avatar-face">S<span>.</span></div></div><span className="orbit-chip chip-python">PY</span><span className="orbit-chip chip-django">DJ</span><span className="orbit-chip chip-js">JS</span><span className="orbit-chip chip-html">5</span><span className="orbit-chip chip-css">3</span></div>
        <div className="social-rail"><a href="https://github.com/sabarish-es" aria-label="GitHub" target="_blank" rel="noreferrer"><GitBranch /></a><a href="https://www.linkedin.com/in/sabarish-es/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><UserRound /></a><a href="#contact" aria-label="Contact"><Mail /></a></div>
      </section>

      <section id="achievements" className="stats-section"><div className="stat-card"><strong>2025</strong><span>Computer Science graduate</span></div><div className="stat-card"><strong>01</strong><span>Software trainer role</span></div><div className="stat-card"><strong>2+</strong><span>Freelance projects shipped</span></div><div className="stat-card"><strong>02</strong><span>Professional course completions</span></div></section>
      <section className="company-strip"><div><span className="section-kicker">professional experience</span><h2>Training developers at <em>Besant Technologies.</em></h2></div><a href="https://www.besanttechnologies.com/" target="_blank" rel="noreferrer">Visit Besant Technologies <ArrowUpRight /></a></section>

      <section id="skills" className="content-section"><div className="section-heading"><span>01 / toolkit</span><h2>Skills that turn<br /><em>learning into confidence.</em></h2></div><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.label}><div className="skill-icon">{skill.icon}</div><div><h3>{skill.label}</h3><p>{skill.level}</p></div></article>)}</div></section>

      <section id="github" className="github-section content-section"><div className="section-heading"><span>02 / open source activity</span><h2>Code, learn,<br /><em>share consistently.</em></h2></div><div className="github-analytics"><a className="analytics-card analytics-wide" href="https://github.com/sabarish-es" target="_blank" rel="noreferrer"><img className="github-visual" src="https://raw.githubusercontent.com/sabarish-es/sabarish-es/main/assets/github-stats.svg" alt="GitHub statistics for Sabarish E" /><div className="analytics-badges"><img src="https://img.shields.io/github/followers/sabarish-es?label=Followers&style=for-the-badge&color=0ea5e9" alt="Sabarish E GitHub followers" /><img src="https://img.shields.io/github/stars/sabarish-es/restuarant?label=Restaurant%20project%20stars&style=for-the-badge&color=8b5cf6" alt="Stars on Sabarish E restaurant project" /><img src="https://img.shields.io/github/last-commit/sabarish-es/restuarant?label=Latest%20commit&style=for-the-badge&color=22d3ee" alt="Latest commit on Sabarish E restaurant project" /></div><span>View GitHub profile and activity <ArrowUpRight /></span></a><a className="analytics-card" href="https://github.com/sabarish-es?tab=repositories" target="_blank" rel="noreferrer"><img className="github-visual" src="https://raw.githubusercontent.com/sabarish-es/sabarish-es/main/assets/github-activity.svg" alt="GitHub activity graph for Sabarish E" /><div className="technology-badges" aria-label="Technologies used across Sabarish E GitHub repositories"><img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python" /><img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" /><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111827" alt="JavaScript" /><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /><img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" /></div><span>Explore repositories and technologies <ArrowUpRight /></span></a></div></section>

      <section id="projects" className="content-section projects-section"><div className="section-heading"><span>03 / selected work</span><h2>Projects that<br /><em>solve real things.</em></h2></div><div className="projects-grid">{projects.map((project, index) => <article className={`portfolio-project ${project.className}`} key={project.title}><div className="project-top"><span>0{index + 1}</span><ExternalLink /></div><div><p>{project.tech}</p><h3>{project.title}</h3><span>{project.description}</span><a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>View project <ArrowUpRight /></a></div></article>)}</div></section>

      <section id="experience" className="content-section experience-section"><div className="section-heading"><span>04 / journey</span><h2>Teaching through<br /><em>every build.</em></h2></div><div className="timeline"><article><div className="timeline-dot" /><div><p className="timeline-date">CURRENT ROLE</p><h3>Software Trainer · Besant Technologies</h3><p>Guiding learners through Python, web development, databases, and full stack application development with hands-on, career-focused training.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">FREELANCE</p><h3>Freelance Full Stack Developer</h3><p>Building practical websites and web applications for clients, from responsive interfaces to reliable backend workflows.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">COURSE COMPLETION · SLA</p><h3>Python Full Stack Development</h3><p>Completed professional training in Python full stack development at SLA, covering frontend, backend, databases, and application development.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">COURSE COMPLETION · MASTERMIND TECHNO SOLUTIONS</p><h3>Python with Flask</h3><p>Completed Python with Flask course training at Mastermind Techno Solutions, with practical experience building lightweight web applications.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">EDUCATION</p><h3>B.Sc. Computer Science</h3><p>Developed a strong foundation in programming, databases, web technologies, and problem solving.</p></div></article></div></section>

      <section id="contact" className="contact-section"><div><span className="section-kicker">05 / let&apos;s connect</span><h2>Have a question<br /><em>or a project?</em></h2><p>Reach out for training conversations, collaborations, freelance work, or anything you would like to build together.</p></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Name<input id="name" name="name" required placeholder="Your name" /></label><label htmlFor="email">Email<input id="email" name="email" required type="email" placeholder="you@example.com" /></label><label htmlFor="message">Message<textarea id="message" name="message" required rows={4} placeholder="Tell me a little about your message" /></label><button className="primary-button" type="submit"><Send size={17} /> Send message</button></form></section>
      <footer><span>© 2025 Sabarish E</span><span>Built with purpose · Tamil Nadu, India</span></footer>
    </main>
  )
}

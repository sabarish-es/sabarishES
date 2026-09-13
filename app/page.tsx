'use client'

import { ArrowDownToLine, ArrowUpRight, Code2, ExternalLink, GitBranch, Mail, Menu, Phone, Terminal, UserRound, X } from 'lucide-react'
import { useState } from 'react'

const skills = [
  { label: 'Python', level: 'Advanced', icon: '🐍' },
  { label: 'Django', level: 'Advanced', icon: 'dj' },
  { label: 'React', level: 'Intermediate', icon: '⚛' },
  { label: 'JavaScript', level: 'Intermediate', icon: 'JS' },
  { label: 'MySQL', level: 'Advanced', icon: 'db' },
  { label: 'HTML / CSS', level: 'Advanced', icon: '</>' },
]

const projects = [
  { title: 'FindMyDoc', description: 'A patient-first doctor discovery and appointment booking platform built around a simple, reliable experience.', tech: 'Node.js · MySQL · Bootstrap', href: '#contact' },
  { title: 'ClassValut', description: 'A responsive student and faculty administration portal for managing academic records and workflows.', tech: 'PHP · MySQL · JavaScript', href: '#contact' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="portfolio-shell min-h-screen bg-[#020a18] text-slate-100">
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand-mark"><span className="brand-icon"><Terminal size={20} /></span><span><strong>sabarish.in</strong><small>Python Full Stack</small></span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['Home', 'Achievements', 'Skills', 'Projects', 'Experience'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="availability"><span /> Available for opportunities <b>·</b> Open to work</div>
          <h1>Hi, I&apos;m <span>Sabarish E</span></h1>
          <h2><Code2 size={22} /> Python Full Stack Developer</h2>
          <p className="hero-intro">B.Sc. Computer Science graduate passionate about building powerful applications. I turn ideas into reliable, responsive products with Python, SQL, React, and backend development.</p>
          <div className="contact-pills"><a href="mailto:sabarishs094@gmail.com"><Mail size={16} /> sabarishs094@gmail.com</a><a href="tel:+916369721553"><Phone size={16} /> +91 63697 21553</a></div>
          <div className="hero-actions"><a className="primary-button" href="#projects"><Code2 size={17} /> View Projects</a><a className="secondary-button" href="https://github.com/sabarish-es" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a className="secondary-button" href="/Sabarish-E-Resume.pdf" download><ArrowDownToLine size={17} /> Download Resume</a></div>
        </div>
        <div className="orbit-art" aria-label="Developer profile illustration"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="profile-core"><div className="avatar-face">S<span>.</span></div></div><span className="orbit-chip chip-python">🐍</span><span className="orbit-chip chip-django">dj</span><span className="orbit-chip chip-js">JS</span><span className="orbit-chip chip-html">5</span><span className="orbit-chip chip-css">3</span></div>
        <div className="social-rail"><a href="https://github.com/sabarish-es" aria-label="GitHub" target="_blank" rel="noreferrer"><GitBranch /></a><a href="https://www.linkedin.com/in/sabarish-es/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><UserRound /></a><a href="#contact" aria-label="Contact"><Mail /></a></div>
      </section>

      <section id="achievements" className="stats-section"><div className="stat-card"><strong>2025</strong><span>Computer Science graduate</span></div><div className="stat-card"><strong>2+</strong><span>Full stack projects</span></div><div className="stat-card"><strong>∞</strong><span>Always learning</span></div></section>

      <section id="skills" className="content-section"><div className="section-heading"><span>01 / toolkit</span><h2>Skills that turn<br /><em>ideas into impact.</em></h2></div><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.label}><div className="skill-icon">{skill.icon}</div><div><h3>{skill.label}</h3><p>{skill.level}</p></div></article>)}</div></section>

      <section id="projects" className="content-section projects-section"><div className="section-heading"><span>02 / selected work</span><h2>Projects that<br /><em>solve real things.</em></h2></div><div className="projects-grid">{projects.map((project, index) => <article className={`portfolio-project project-${index + 1}`} key={project.title}><div className="project-top"><span>0{index + 1}</span><ExternalLink /></div><div><p>{project.tech}</p><h3>{project.title}</h3><span>{project.description}</span><a href={project.href}>View project <ArrowUpRight /></a></div></article>)}</div></section>

      <section id="experience" className="content-section experience-section"><div className="section-heading"><span>03 / journey</span><h2>Growing through<br /><em>every build.</em></h2></div><div className="timeline"><article><div className="timeline-dot" /><div><p className="timeline-date">2024 — PRESENT</p><h3>Python Full Stack Developer</h3><p>Building web applications and strengthening expertise across Python, Django, React, SQL, and modern product development.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">EDUCATION</p><h3>B.Sc. Computer Science</h3><p>Developed a strong foundation in programming, databases, web technologies, and problem solving.</p></div></article></div></section>

      <section id="contact" className="contact-section"><div><span className="section-kicker">04 / let&apos;s connect</span><h2>Have a project<br /><em>in mind?</em></h2><p>I&apos;m open to opportunities, collaborations, and conversations about building useful digital experiences.</p></div><a className="primary-button" href="mailto:sabarishs094@gmail.com"><Mail size={17} /> Start a conversation</a></section>
      <footer><span>© 2025 Sabarish E</span><span>Built with purpose · Tamil Nadu, India</span></footer>
    </main>
  )
}

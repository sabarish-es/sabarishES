'use client'

import { ArrowDownToLine, ArrowUpRight, Code2, ExternalLink, GitBranch, Mail, Menu, Phone, Send, Terminal, UserRound, X } from 'lucide-react'
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
    <main className="portfolio-shell min-h-screen bg-[#020a18] text-slate-100" onPointerMove={(event) => setCursor({ x: event.clientX, y: event.clientY })} onPointerDown={() => setIsDragging(true)} onPointerUp={() => setIsDragging(false)} onPointerLeave={() => setIsDragging(false)}>
      <div className={`cursor-orb ${isDragging ? 'is-dragging' : ''}`} style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }} aria-hidden="true"><span /></div>
      <div className="drag-hint" aria-hidden="true">{isDragging ? 'release' : 'drag me'}</div>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#home" className="brand-mark"><span className="brand-icon"><Terminal size={20} /></span><span><strong>sabarish.in</strong><small>Software Trainer</small></span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {['Home', 'Achievements', 'Skills', 'GitHub Analytics', 'Projects', 'Experience'].map((item) => <a key={item} href={`#${item === 'GitHub Analytics' ? 'github' : item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a href="#contact" className="nav-contact" onClick={closeMenu}>Contact</a>
        </div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-copy">
          <div className="availability"><span /> Software Trainer at Besant Technologies <b>·</b> Open to connect</div>
          <h1>Hi, I&apos;m <span>Sabarish E</span></h1>
          <h2><Code2 size={22} /> Software Trainer &amp; Full Stack Developer</h2>
          <p className="hero-intro">I help aspiring developers build strong foundations in Python full stack development through practical learning, clear explanations, and real-world projects.</p>
          <div className="contact-pills"><a href="mailto:sabarishs094@gmail.com"><Mail size={16} /> sabarishs094@gmail.com</a><a href="tel:+916369721553"><Phone size={16} /> +91 63697 21553</a></div>
          <div className="hero-actions"><a className="primary-button" href="#contact"><Mail size={17} /> Get in touch</a><a className="secondary-button" href="https://github.com/sabarish-es" target="_blank" rel="noreferrer"><GitBranch size={17} /> GitHub</a><a className="secondary-button" href="/Sabarish-E-Resume.pdf" download><ArrowDownToLine size={17} /> Download Resume</a></div>
        </div>
        <div className="orbit-art" aria-label="Software trainer profile illustration"><div className="orbit-ring ring-one" /><div className="orbit-ring ring-two" /><div className="profile-core"><div className="avatar-face">S<span>.</span></div></div><span className="orbit-chip chip-python">PY</span><span className="orbit-chip chip-django">DJ</span><span className="orbit-chip chip-js">JS</span><span className="orbit-chip chip-html">5</span><span className="orbit-chip chip-css">3</span></div>
        <div className="social-rail"><a href="https://github.com/sabarish-es" aria-label="GitHub" target="_blank" rel="noreferrer"><GitBranch /></a><a href="https://www.linkedin.com/in/sabarish-es/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><UserRound /></a><a href="#contact" aria-label="Contact"><Mail /></a></div>
      </section>

      <section id="achievements" className="stats-section"><div className="stat-card"><strong>2025</strong><span>Computer Science graduate</span></div><div className="stat-card"><strong>01</strong><span>Software trainer role</span></div><div className="stat-card"><strong>2+</strong><span>Freelance projects shipped</span></div></section>
      <section className="company-strip"><div><span className="section-kicker">professional experience</span><h2>Training developers at <em>Besant Technologies.</em></h2></div><a href="https://www.besanttechnologies.com/" target="_blank" rel="noreferrer">Visit Besant Technologies <ArrowUpRight /></a></section>

      <section id="skills" className="content-section"><div className="section-heading"><span>01 / toolkit</span><h2>Skills that turn<br /><em>learning into confidence.</em></h2></div><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.label}><div className="skill-icon">{skill.icon}</div><div><h3>{skill.label}</h3><p>{skill.level}</p></div></article>)}</div></section>

      <section id="github" className="github-section content-section"><div className="section-heading"><span>02 / open source activity</span><h2>Code, learn,<br /><em>share consistently.</em></h2></div><div className="github-analytics"><img src="https://github-readme-stats.vercel.app/api?username=sabarish-es&show_icons=true&hide_border=true&title_color=38bdf8&icon_color=a78bfa&text_color=94a3b8&bg_color=00000000" alt="Sabarish E GitHub statistics" /><img src="https://github-readme-stats.vercel.app/api/top-langs/?username=sabarish-es&layout=compact&hide_border=true&title_color=38bdf8&text_color=94a3b8&bg_color=00000000" alt="Sabarish E most used programming languages on GitHub" /></div></section>

      <section id="projects" className="content-section projects-section"><div className="section-heading"><span>03 / selected work</span><h2>Projects that<br /><em>solve real things.</em></h2></div><div className="projects-grid">{projects.map((project, index) => <article className={`portfolio-project ${project.className}`} key={project.title}><div className="project-top"><span>0{index + 1}</span><ExternalLink /></div><div><p>{project.tech}</p><h3>{project.title}</h3><span>{project.description}</span><a href={project.href} target={project.href.startsWith('http') ? '_blank' : undefined} rel={project.href.startsWith('http') ? 'noreferrer' : undefined}>View project <ArrowUpRight /></a></div></article>)}</div></section>

      <section id="experience" className="content-section experience-section"><div className="section-heading"><span>04 / journey</span><h2>Teaching through<br /><em>every build.</em></h2></div><div className="timeline"><article><div className="timeline-dot" /><div><p className="timeline-date">CURRENT ROLE</p><h3>Software Trainer · Besant Technologies</h3><p>Guiding learners through Python, web development, databases, and full stack application development with hands-on, career-focused training.</p></div></article><article><div className="timeline-dot" /><div><p className="timeline-date">EDUCATION</p><h3>B.Sc. Computer Science</h3><p>Developed a strong foundation in programming, databases, web technologies, and problem solving.</p></div></article></div></section>

      <section id="contact" className="contact-section"><div><span className="section-kicker">05 / let&apos;s connect</span><h2>Have a question<br /><em>or a project?</em></h2><p>Reach out for training conversations, collaborations, freelance work, or anything you would like to build together.</p></div><form className="contact-form" onSubmit={handleSubmit}><label htmlFor="name">Name<input id="name" name="name" required placeholder="Your name" /></label><label htmlFor="email">Email<input id="email" name="email" required type="email" placeholder="you@example.com" /></label><label htmlFor="message">Message<textarea id="message" name="message" required rows={4} placeholder="Tell me a little about your message" /></label><button className="primary-button" type="submit"><Send size={17} /> Send message</button></form></section>
      <footer><span>© 2025 Sabarish E</span><span>Built with purpose · Tamil Nadu, India</span></footer>
    </main>
  )
}

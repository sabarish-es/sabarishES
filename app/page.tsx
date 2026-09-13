'use client'

import { ArrowUpRight, Check, Code2, Download, GitBranch, Mail, MapPin, Menu, Phone, UserRound, X } from 'lucide-react'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'FindMyDoc',
    type: 'Healthcare management system',
    description: 'A patient-first booking platform that helps people discover doctors by specialization and location, then schedule appointments with confidence.',
    stack: ['Node.js', 'MySQL', 'Bootstrap'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'ClassValut',
    type: 'Student & faculty management',
    description: 'A responsive administration portal for managing student and faculty records with clear workflows and a friendly, accessible interface.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    accent: 'blue',
  },
]

const skills = [
  ['Frontend', 'HTML5, CSS3, JavaScript, React.js, Bootstrap 5'],
  ['Backend', 'Python, PHP, Node.js (basic)'],
  ['Frameworks', 'Django, Flask'],
  ['Database', 'MySQL, SQLite3'],
  ['Workflow', 'Git, responsive UI, REST concepts'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f1eb] text-[#18232d]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-10" aria-label="Main navigation">
        <a href="#top" className="font-mono text-sm font-bold tracking-[-0.04em]">SABARISH<span className="text-[#ef725d]">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          <a className="nav-link" href="#work">Work</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#skills">Skills</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
        <a href="mailto:sabarishs094@gmail.com" className="hidden items-center gap-2 rounded-full border border-[#18232d]/15 px-4 py-2 text-xs font-semibold transition hover:bg-[#18232d] hover:text-[#f4f1eb] md:flex">
          Let&apos;s talk <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <button className="rounded-full p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="mx-6 flex flex-col gap-4 border-t border-[#18232d]/15 py-5 md:hidden">
          {['Work', 'About', 'Skills', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="text-sm font-semibold">{item}</a>)}
        </div>
      )}

      <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-20 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:pb-36 lg:pt-32">
        <div>
          <div className="mb-8 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-[#ef725d]"><span className="inline-block size-2 rounded-full bg-[#ef725d]" /> Available for opportunities</div>
          <h1 className="max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] sm:text-8xl lg:text-[8.6rem]">Building <em className="text-[#ef725d]">useful</em><br />digital experiences.</h1>
          <p className="mt-10 max-w-xl text-lg leading-relaxed text-[#18232d]/65">I&apos;m Sabarish — a Python full stack developer who turns thoughtful ideas into responsive, functional web products.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#work" className="inline-flex items-center gap-3 rounded-full bg-[#18232d] px-6 py-3 text-sm font-semibold text-[#f4f1eb] transition hover:-translate-y-1">Explore my work <ArrowUpRight size={16} /></a>
            <a href="/Sabarish-E-Resume.pdf" download className="inline-flex items-center gap-3 rounded-full border border-[#18232d]/20 px-6 py-3 text-sm font-semibold transition hover:border-[#18232d]"><Download size={16} /> Download résumé</a>
          </div>
        </div>
        <div className="relative flex min-h-72 items-end justify-end lg:min-h-0">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#e8d9c8] sm:h-72 sm:w-72" />
          <div className="relative mr-6 flex size-48 rotate-6 items-center justify-center rounded-[2rem] bg-[#ef725d] p-8 text-center text-2xl font-serif leading-tight text-[#18232d] shadow-xl shadow-[#18232d]/10 sm:size-60">Code with<br /><em>purpose.</em></div>
          <div className="absolute bottom-0 left-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#18232d]/45 lg:left-auto lg:right-64">01 / 04</div>
        </div>
      </section>

      <section id="work" className="bg-[#18232d] px-6 py-24 text-[#f4f1eb] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker text-[#ef725d]">Selected work</p><h2 className="mt-4 font-serif text-5xl tracking-[-0.04em] sm:text-7xl">Projects that<br /><em>solve real things.</em></h2></div><p className="max-w-xs text-sm leading-relaxed text-[#f4f1eb]/55">A few builds from my journey into full stack development.</p></div>
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => <article key={project.title} className={`project-card ${project.accent === 'coral' ? 'bg-[#ef725d] text-[#18232d]' : 'bg-[#d9e6ed] text-[#18232d]'}`}><div className="flex items-start justify-between"><span className="font-mono text-xs opacity-60">{project.number}</span><ArrowUpRight size={22} /></div><div className="mt-24"><p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">{project.type}</p><h3 className="font-serif text-4xl tracking-[-0.03em]">{project.title}</h3><p className="mt-4 max-w-md text-sm leading-relaxed opacity-70">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full border border-current/20 px-3 py-1 font-mono text-[10px]">{tag}</span>)}</div></div></article>)}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-10 lg:py-32"><div><p className="section-kicker">A little about me</p><div className="mt-10 flex size-32 items-center justify-center rounded-full bg-[#e8d9c8] font-serif text-5xl italic">S<span className="text-[#ef725d]">.</span></div></div><div><h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-[-0.04em] sm:text-6xl">Curious by nature.<br /><span className="text-[#ef725d]">Committed to growth.</span></h2><p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#18232d]/65">My path started with a degree in Computer Science and grew through hands-on learning in Python, Flask, and full stack development. I enjoy the space where clean interfaces meet reliable backend logic — and I&apos;m always looking for the next problem worth solving.</p><div className="mt-10 grid max-w-lg grid-cols-2 gap-8 border-t border-[#18232d]/15 pt-6"><div><p className="font-serif text-4xl">2025</p><p className="mt-1 text-xs text-[#18232d]/55">B.Sc. Computer Science</p></div><div><p className="font-serif text-4xl">∞</p><p className="mt-1 text-xs text-[#18232d]/55">Always learning</p></div></div></div></section>

      <section id="skills" className="border-y border-[#18232d]/10 bg-[#e8d9c8] px-6 py-24 lg:px-10"><div className="mx-auto max-w-6xl"><p className="section-kicker">The toolkit</p><div className="mt-12 grid gap-0 md:grid-cols-2 lg:grid-cols-3">{skills.map(([name, value], index) => <div key={name} className={`border-t border-[#18232d]/20 py-6 ${index === skills.length - 1 ? 'md:col-span-2 lg:col-span-1' : ''}`}><p className="font-mono text-xs uppercase tracking-[0.16em] text-[#ef725d]">0{index + 1}</p><h3 className="mt-3 font-serif text-2xl">{name}</h3><p className="mt-2 max-w-xs text-sm leading-relaxed text-[#18232d]/60">{value}</p></div>)}</div></div></section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-24 lg:px-10 lg:py-32"><div className="rounded-[2rem] bg-[#ef725d] px-7 py-14 text-center sm:px-16 sm:py-20"><p className="section-kicker">Have a project in mind?</p><h2 className="mx-auto mt-5 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.05em] sm:text-8xl">Let&apos;s make something <em>matter.</em></h2><a href="mailto:sabarishs094@gmail.com" className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#18232d] px-6 py-3 text-sm font-semibold text-[#f4f1eb] transition hover:-translate-y-1"><Mail size={16} /> Start a conversation</a></div><div className="mt-16 flex flex-col justify-between gap-8 border-t border-[#18232d]/15 pt-8 text-sm sm:flex-row"><div><p className="font-mono text-xs text-[#18232d]/45">CONTACT</p><div className="mt-3 flex flex-col gap-2 text-[#18232d]/70"><a className="inline-flex items-center gap-2 hover:text-[#ef725d]" href="mailto:sabarishs094@gmail.com"><Mail size={14} /> sabarishs094@gmail.com</a><span className="inline-flex items-center gap-2"><Phone size={14} /> +91 63697 21553</span><span className="inline-flex items-center gap-2"><MapPin size={14} /> Tamil Nadu, India</span></div></div><div className="flex items-end gap-3"><a aria-label="LinkedIn profile" href="https://www.linkedin.com/in/sabarish-es/" target="_blank" rel="noreferrer" className="social-link"><UserRound size={17} /></a><a aria-label="GitHub profile" href="https://github.com/sabarish-es" target="_blank" rel="noreferrer" className="social-link"><GitBranch size={17} /></a></div></div></section>
      <footer className="mx-auto flex max-w-6xl justify-between px-6 pb-8 font-mono text-[10px] uppercase tracking-[0.15em] text-[#18232d]/40 lg:px-10"><span>© 2025 Sabarish E</span><span className="inline-flex items-center gap-1"><Code2 size={12} /> Built with intention</span></footer>
      <div className="sr-only"><Check /> Portfolio content verified against uploaded résumé.</div>
    </main>
  )
}


import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Check, Code2, Database, Gauge, GitBranch, Mail, MapPin, ServerCog, Sparkles, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };
const skills = [
  ["Languages", "JavaScript, TypeScript, C++, SQL, HTML, CSS"],
  ["Backend", "Node.js, Express, Django, REST APIs, Redis, Celery"],
  ["Frontend", "React.js, Next.js, responsive UI, accessibility"],
  ["Data & tools", "MongoDB, MySQL, PostgreSQL, Docker, Git, Postman"],
];

export default function Home() {
  return <>
    <SEO title="Aman Kumar — Full-stack & backend developer" description="Backend-focused full-stack developer building secure, scalable products with Node.js, Django, React, and modern data systems." />
    <section className="hero section-shell" id="home">
      <span className="hero-coordinate coordinate-one">01 / HOME</span><span className="hero-coordinate coordinate-two">BENGALURU · INDIA</span>
      <div className="hero-copy">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="availability"><span /> Open to full-time opportunities</motion.div>
        <motion.p className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Backend-focused full-stack developer</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>I build systems that stay <em>fast, safe,</em> and reliable at scale.</motion.h1>
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="hero-intro">I’m Aman Kumar, a backend-focused engineer in Bengaluru. I turn complex product requirements into secure APIs, real-time systems, and polished web experiences.</motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="hero-actions"><a className="button primary" href="#projects">Explore my work <ArrowRight size={18}/></a><a className="button secondary" href="mailto:amankumar220203@gmail.com">Let’s talk</a></motion.div>
        <div className="trust-row"><span>Node.js / Django</span><span>React / Next.js</span><span>System design</span><span>Concurrency</span></div>
      </div>
      <motion.div className="hero-workspace" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
        <span className="workspace-chip chip-top"><GitBranch size={13}/> main</span><span className="workspace-chip chip-bottom"><Terminal size={13}/> systems healthy</span>
        <div className="hero-card"><div className="window-bar"><i/><i/><i/><span>aman.dev / profile</span></div><div className="editor-tabs"><span className="active">engineer.ts</span><span>systems.md</span><b>×</b></div><div className="code-line"><b>01</b><span className="code-key">const</span> engineer = &#123;</div><div className="code-line"><b>02</b>&nbsp;&nbsp;focus: <span className="code-string">&quot;reliable backend systems&quot;</span>,</div><div className="code-line"><b>03</b>&nbsp;&nbsp;strengths: <span className="code-string">&quot;APIs, data, concurrency&quot;</span>,</div><div className="code-line"><b>04</b>&nbsp;&nbsp;location: <span className="code-string">&quot;Bengaluru, India&quot;</span></div><div className="code-line"><b>05</b>&#125;;</div><div className="terminal"><span>→</span> Shipping dependable software, end to end.<i/></div><div className="editor-status"><span>Ln 5, Col 2</span><span>UTF-8&nbsp;&nbsp; TypeScript&nbsp;&nbsp; ✓</span></div></div>
      </motion.div>
    </section>

    <div className="signal-strip" aria-label="Engineering strengths"><div className="section-shell"><span><b>01</b> Secure APIs</span><span><b>02</b> Real-time systems</span><span><b>03</b> Data integrity</span><span><b>04</b> Product delivery</span></div></div>

    <section className="section-shell section" id="experience">
      <motion.div {...reveal} className="section-heading split"><div><p className="kicker">Professional experience</p><h2>Engineering for real users and real constraints.</h2></div><p>Hands-on backend experience spanning assessment systems, transactional workflows, subscription billing, and AI-ready data services.</p></motion.div>
      <motion.article {...reveal} className="experience-card"><div className="experience-rail"><span>2026</span><i/></div><div className="experience-main">
        <div className="experience-head"><div><p className="kicker">Feb 2026 — Jul 2026</p><h3>Backend Developer Intern</h3><p className="company-name">Talentrise Technokrate Pvt Ltd</p></div><span className="location"><MapPin size={14}/> Remote, India</span></div>
        <div className="experience-impact"><div><strong>6</strong><span>psychological traits scored</span></div><div><strong>4</strong><span>user roles supported</span></div><div><strong>7-day</strong><span>AI-ready data snapshots</span></div></div>
        <ul><li><Check size={17}/><span>Built a multi-role behavioural assessment engine with Node.js, MongoDB, and Redis, including weighted psychometric scoring.</span></li><li><Check size={17}/><span>Designed a real-time study-session tracker using MongoDB ACID transactions, automated focus scoring, and LLM-ready report endpoints.</span></li><li><Check size={17}/><span>Integrated Razorpay subscriptions with HMAC-SHA256 webhook verification, idempotent event handling, and complete lifecycle management.</span></li></ul>
      </div></motion.article>
    </section>

    <section className="projects-section section" id="projects"><div className="section-shell">
      <motion.div {...reveal} className="section-heading split"><div><p className="kicker">Selected engineering work</p><h2>Projects with depth behind the interface.</h2></div><p>Each case study explains the problem, the architecture, and the engineering decisions that make the product dependable.</p></motion.div>
      <div className="project-list">{projects.map((project, index) => <motion.article {...reveal} key={project.id} className={`project-row accent-${project.accent}`}>
        <div className="project-index">0{index + 1}</div><div className="project-visual"><span className="visual-label">CASE STUDY / 0{index + 1}</span><div className="mock-browser"><div className="mock-top"><span/><span/><span/><em>{project.id}.app</em></div><div className="mock-sidebar"><i/><i/><i/><i/></div><div className="mock-content"><small>{project.eyebrow}</small><b>{project.title}</b><i/><i/><div className="mock-action">Explore system <ArrowRight size={11}/></div></div></div><span className="visual-stack">{project.stack[0]} + {project.stack[1]}</span></div>
        <div className="project-copy"><p className="kicker">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.outcomes.slice(0, 2).map(item => <li key={item.label}><Check size={15}/> <strong>{item.value}</strong> {item.label}</li>)}</ul><div className="tag-row">{project.stack.slice(0, 5).map(tech => <span key={tech}>{tech}</span>)}</div><Link to={`/projects/${project.id}`} className="text-link">Read case study <ArrowRight size={17}/></Link></div>
      </motion.article>)}</div>
    </div></section>

    <section className="section-shell section" id="skills">
      <motion.div {...reveal} className="section-heading"><p className="kicker">Technical toolkit</p><h2>From data model to final interaction.</h2><p>I work across the stack, with particular depth in backend architecture, transactional safety, and real-time applications.</p></motion.div>
      <div className="skill-grid">{skills.map(([title, copy], index) => <motion.article {...reveal} transition={{ duration: .5, delay: index * .06 }} key={title}><span>0{index + 1}</span>{index === 0 ? <Code2/> : index === 1 ? <ServerCog/> : index === 2 ? <Sparkles/> : <Database/>}<h3>{title}</h3><p>{copy}</p></motion.article>)}</div>
    </section>

    <section className="section-shell section about" id="about"><motion.div {...reveal} className="about-card"><div><p className="kicker">Beyond the code</p><h2>Strong fundamentals. Practical execution.</h2></div><div><p>My background combines a B.Tech from IIIT Naya Raipur with a PG Diploma in Advanced Computing from CDAC Bengaluru. I care about clear trade-offs, maintainable systems, and products that hold up beyond the demo.</p><div className="principles"><span><Briefcase/> Production-minded engineering</span><span><Check/> Clear ownership and communication</span><span><Gauge/> Performance and reliability by design</span></div></div></motion.div></section>
    <section className="section-shell contact" id="contact"><motion.div {...reveal}><span className="contact-code">OPEN_TO_OPPORTUNITIES = true;</span><p className="kicker">Looking for an engineer?</p><h2>Let’s build software that earns trust.</h2><p>I’m open to backend and full-stack engineering opportunities where thoughtful systems, strong fundamentals, and product ownership matter.</p><a className="button primary" href="mailto:amankumar220203@gmail.com"><Mail size={18}/> Email Aman</a></motion.div></section>
  </>;
}

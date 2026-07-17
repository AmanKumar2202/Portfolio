import { motion } from "framer-motion";
import { ArrowRight, Check, Code2, Gauge, Layers3, Mail, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { projects } from "../data/projects";

const reveal = { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.55 } };

export default function Home() {
  return (
    <>
      <SEO title="Aman Kumar — Full-stack developer" description="Full-stack developer building thoughtful, fast web products for startups and growing teams." />
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="availability"><span /> Available for select projects</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
            I build web products that feel <em>clear, fast,</em> and genuinely useful.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .12 }} className="hero-intro">
            I’m Aman, a full-stack developer turning ambitious ideas into polished digital products—from the first system decision to the final interaction.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }} className="hero-actions">
            <a className="button primary" href="#projects">Explore my work <ArrowRight size={18} /></a>
            <a className="button secondary" href="mailto:amankumar220203@gmail.com">Start a conversation</a>
          </motion.div>
          <div className="trust-row"><span>React / Next.js</span><span>Node.js</span><span>TypeScript</span><span>AI integrations</span></div>
        </div>
        <motion.div className="hero-card" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }}>
          <div className="window-bar"><i/><i/><i/><span>aman.dev / now</span></div>
          <div className="code-line"><b>01</b><span className="code-key">const</span> developer = &#123;</div>
          <div className="code-line"><b>02</b>&nbsp;&nbsp;focus: <span className="code-string">&quot;useful products&quot;</span>,</div>
          <div className="code-line"><b>03</b>&nbsp;&nbsp;approach: <span className="code-string">&quot;thoughtful & pragmatic&quot;</span>,</div>
          <div className="code-line"><b>04</b>&nbsp;&nbsp;status: <span className="code-string">&quot;ready to collaborate&quot;</span></div>
          <div className="code-line"><b>05</b>&#125;;</div>
          <div className="terminal"><span>→</span> Building reliable experiences, one commit at a time.<i /></div>
        </motion.div>
      </section>

      <section className="section-shell section" id="services">
        <motion.div {...reveal} className="section-heading"><p className="kicker">What I bring</p><h2>From idea to shipped product.</h2><p>I help small teams and founders move from a rough brief to software that is maintainable, performant, and easy to use.</p></motion.div>
        <div className="service-grid">
          {[
            [<Layers3/>, "Product development", "Full-stack web applications with solid foundations and interfaces people understand."],
            [<Sparkles/>, "AI features", "Practical AI integrations that improve a workflow instead of adding novelty for its own sake."],
            [<Gauge/>, "Performance & polish", "Responsive, accessible experiences with attention to speed, detail, and edge cases."],
          ].map(([icon, title, copy], index) => <motion.article {...reveal} transition={{ duration: .5, delay: index * .08 }} className="service-card" key={String(title)}><div className="icon-box">{icon}</div><h3>{title}</h3><p>{copy}</p><span>Strategy · Design · Development</span></motion.article>)}
        </div>
      </section>

      <section className="projects-section section" id="projects">
        <div className="section-shell">
          <motion.div {...reveal} className="section-heading split"><div><p className="kicker">Selected work</p><h2>Products built around real problems.</h2></div><p>Each project is a complete case study—from the challenge and technical choices to the outcome.</p></motion.div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article {...reveal} key={project.id} className={`project-row accent-${project.accent}`}>
                <div className="project-index">0{index + 1}</div>
                <div className="project-visual"><div className="mock-browser"><div className="mock-top"><span/><span/><span/></div><div className="mock-sidebar"/><div className="mock-content"><i/><i/><i/><b>{project.title}</b></div></div></div>
                <div className="project-copy"><p className="kicker">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.outcomes.slice(0, 2).map(item => <li key={item.label}><Check size={15}/> {item.value} {item.label}</li>)}</ul><div className="tag-row">{project.stack.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div><Link to={`/projects/${project.id}`} className="text-link">Read case study <ArrowRight size={17}/></Link></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section about" id="about">
        <motion.div {...reveal} className="about-card"><div><p className="kicker">A reliable partner</p><h2>Code is only half the job.</h2></div><div><p>Strong project work starts with clear communication. I ask the right questions, explain trade-offs without jargon, and keep progress visible from kickoff to launch.</p><div className="principles"><span><Code2/> Clean, maintainable builds</span><span><Check/> Clear scope and updates</span><span><Gauge/> Performance from day one</span></div></div></motion.div>
      </section>

      <section className="section-shell contact" id="contact"><motion.div {...reveal}><p className="kicker">Have a project in mind?</p><h2>Let’s make something people enjoy using.</h2><p>Tell me what you’re building, where you’re stuck, and what success looks like. I’ll reply with a practical next step.</p><a className="button primary" href="mailto:amankumar220203@gmail.com"><Mail size={18}/> Email Aman</a></motion.div></section>
    </>
  );
}

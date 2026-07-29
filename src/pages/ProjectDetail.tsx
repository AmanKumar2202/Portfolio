import { lazy, Suspense } from "react";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "../components/SEO";
import { getProject } from "../data/projects";
const AutoCode = lazy(() => import("./AutoCode"));
const ChatbotService = lazy(() => import("./ChatbotService"));
const WhisprAI = lazy(() => import("./WhisprAI"));

const CaseStudyFallback = () => <div className="grid min-h-screen place-items-center bg-slate-950 text-sm text-slate-400">Loading case study…</div>;

export default function ProjectDetail() {
  const { projectId } = useParams();
  if (projectId === "whispr-intelligence") return <Suspense fallback={<CaseStudyFallback />}><ChatbotService /></Suspense>;
  if (projectId === "auto-code") return <Suspense fallback={<CaseStudyFallback />}><AutoCode /></Suspense>;
  if (projectId === "whispr-ai") return <Suspense fallback={<CaseStudyFallback />}><WhisprAI /></Suspense>;
  const project = getProject(projectId);
  if (!project) return <Navigate to="/" replace />;
  return <>
    <SEO title={`${project.title} case study — Aman Kumar`} description={project.summary} />
    <article className={`case-study accent-${project.accent}`}>
      <header className="case-hero section-shell"><Link className="back-link" to="/#projects"><ArrowLeft size={17}/> All projects</Link><p className="kicker">{project.eyebrow} · Case study</p><h1>{project.title}</h1><p className="case-lead">{project.description}</p><div className="case-meta"><div><span>Role</span><b>{project.role}</b></div><div><span>Year</span><b>{project.year}</b></div><div><span>Stack</span><b>{project.stack.slice(0, 3).join(", ")}</b></div></div>{project.liveUrl && <a className="button primary" href={project.liveUrl} target="_blank" rel="noreferrer">View live product <ArrowUpRight size={18}/></a>}</header>
      <section className="case-showcase section-shell"><div className="large-mock"><div className="mock-top"><span/><span/><span/></div><div className="showcase-grid"><aside>{project.stack.map(x => <i key={x}>{x}</i>)}</aside><main><p>{project.eyebrow}</p><h2>{project.title}</h2><div className="showcase-lines"><i/><i/><i/></div></main></div></div></section>
      <section className="section-shell case-section"><div className="section-heading"><p className="kicker">What it delivers</p><h2>Built around the core experience.</h2></div><div className="feature-grid">{project.features.map((feature, i) => <article key={feature.title}><span>0{i+1}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div></section>
      <section className="outcomes"><div className="section-shell"><p className="kicker">Outcomes</p><div className="outcome-grid">{project.outcomes.map(item => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}</div><div className="built-list">{["Responsive across screen sizes", "Reusable component architecture", "Clear feedback and interaction states"].map(x => <span key={x}><CheckCircle2 size={18}/>{x}</span>)}</div></div></section>
    </article>
  </>;
}

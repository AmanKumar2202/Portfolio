import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; localStorage.setItem("theme", dark ? "dark" : "light"); }, [dark]);
  useEffect(() => setOpen(false), [location]);
  const href = (hash: string) => location.pathname === "/" ? hash : `/${hash}`;
  return <header className="site-header"><nav className="nav-shell" aria-label="Main navigation">
    <Link className="brand" to="/" aria-label="Aman Kumar home"><span>AK</span><b>Aman Kumar</b></Link>
    <div className={`nav-links ${open ? "open" : ""}`}><a href={href("#projects")}>Work</a><a href={href("#services")}>Services</a><a href={href("#about")}>About</a><a href={href("#contact")}>Contact</a></div>
    <div className="nav-actions"><button className="theme-toggle" onClick={() => setDark(x => !x)} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button><a className="nav-cta" href="mailto:amankumar220203@gmail.com">Let’s work together</a><button className="menu-toggle" onClick={() => setOpen(x => !x)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button></div>
  </nav></header>;
}

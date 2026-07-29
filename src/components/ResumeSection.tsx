import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Eye, FileText, Loader2 } from "lucide-react";

const resumeId = "1m1mcZJXRDmu2eZZXbw5yYWJEKp5IBP6s";
const previewUrl = `https://drive.google.com/file/d/${resumeId}/preview`;
const viewUrl = `https://drive.google.com/file/d/${resumeId}/view`;
const downloadUrl = `https://drive.google.com/uc?export=download&id=${resumeId}`;

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.55 },
};

export default function ResumeSection() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="resume-section section" id="resume">
      <div className="section-shell">
        <motion.div {...reveal} className="resume-heading">
          <div>
            <p className="kicker">Resume / Curriculum vitae</p>
            <h2>A closer look at my experience.</h2>
          </div>
          <div className="resume-intro">
            <p>
              Review my experience, education, technical skills, and project work
              in one place.
            </p>
            <div className="resume-actions">
              <a
                className="button primary"
                href={viewUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Eye size={17} /> Open full screen
                <ArrowUpRight size={15} />
              </a>
              <a
                className="button secondary"
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                download
              >
                <Download size={17} /> Download resume
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div {...reveal} className="resume-viewer">
          <div className="resume-toolbar">
            <div className="resume-file">
              <span><FileText size={17} /></span>
              <div>
                <strong>Aman Kumar — Resume</strong>
                <small>Google Drive document</small>
              </div>
            </div>
            <div className="resume-status">
              <i />
              Ready to view
            </div>
          </div>

          <div className={`resume-frame ${loaded ? "is-loaded" : ""}`}>
            {!loaded && (
              <div className="resume-loader" aria-live="polite">
                <Loader2 size={28} />
                <span>Loading resume preview…</span>
              </div>
            )}
            <iframe
              src={previewUrl}
              title="Aman Kumar resume"
              loading="lazy"
              allow="autoplay"
              onLoad={() => setLoaded(true)}
            />
          </div>

          <div className="resume-viewer-footer">
            <span>Prefer a separate window?</span>
            <a href={viewUrl} target="_blank" rel="noreferrer">
              View directly on Google Drive <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

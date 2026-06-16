"use client";

import { useEffect, useState } from "react";

import { ui } from "@/lib/ui";
import { t, type Locale, type SiteSettings } from "@/lib/types";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Cv({ settings }: { settings: SiteSettings }) {
  const { locale } = useLang();
  const heading = settings.cvHeading ?? {};

  const [cvLang, setCvLang] = useState<Locale>(locale);
  // Follow the site language when the user toggles it.
  useEffect(() => setCvLang(locale), [locale]);

  const trUrl = settings.cvFileTrUrl || "/cv-tr.pdf";
  const enUrl = settings.cvFileEnUrl || "/cv-en.pdf";
  const file = cvLang === "tr" ? trUrl : enUrl;
  const downloadName =
    cvLang === "tr" ? "Poyraz_Inan_CV_TR.pdf" : "Poyraz_Inan_CV_EN.pdf";

  return (
    <section id="cv">
      <SectionLabel n="06">{t(heading.label, locale)}</SectionLabel>
      <Reveal as="h2" className="sec-title">
        {t(heading.title, locale)}
      </Reveal>
      <Reveal
        as="p"
        style={{ color: "var(--muted)", maxWidth: "54ch", marginBottom: 30 }}
      >
        {t(settings.cvDescription, locale)}
      </Reveal>
      <Reveal className="cv-panel">
        <div className="cv-head">
          <div className="cv-tabs">
            <button
              className={`cv-tab${cvLang === "tr" ? " active" : ""}`}
              onClick={() => setCvLang("tr")}
            >
              <span className="flag">🇹🇷</span> <span>{ui("cv.tr", locale)}</span>
            </button>
            <button
              className={`cv-tab${cvLang === "en" ? " active" : ""}`}
              onClick={() => setCvLang("en")}
            >
              <span className="flag">🇬🇧</span> <span>{ui("cv.en", locale)}</span>
            </button>
          </div>
          <div className="cv-actions">
            <a className="btn" href={file} target="_blank" rel="noopener noreferrer">
              <span>{ui("cv.open", locale)}</span> <span className="arw">↗</span>
            </a>
            <a className="btn primary" href={file} download={downloadName}>
              <span>{ui("cv.download", locale)}</span> ↓
            </a>
          </div>
        </div>
        <div className="cv-viewer">
          <iframe
            key={file}
            src={`${file}#toolbar=0&navpanes=0&view=FitH`}
            title="CV"
          />
        </div>
      </Reveal>
    </section>
  );
}

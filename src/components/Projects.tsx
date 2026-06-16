import { t, type Project, type SiteSettings } from "@/lib/types";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Projects({
  settings,
  projects,
}: {
  settings: SiteSettings;
  projects: Project[];
}) {
  const { locale } = useLang();
  const heading = settings.projectsHeading ?? {};

  return (
    <section id="work">
      <SectionLabel n="05">{t(heading.label, locale)}</SectionLabel>
      <Reveal as="h2" className="sec-title">
        {t(heading.title, locale)}
      </Reveal>
      <Reveal className="proj-grid" style={{ marginTop: 34 }}>
        {projects.map((p) => (
          <a
            className="proj"
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            key={p._id}
          >
            <div className="proj-top">
              <div>
                <h4>
                  {p.name} <span className="arw">↗</span>
                </h4>
                {p.repo ? <div className="repo">{p.repo}</div> : null}
              </div>
            </div>
            <p>{t(p.description, locale)}</p>
            <div className="proj-meta">
              <span className="lang">
                <span
                  className="swatch"
                  style={{ background: p.languageColor ?? "#b07219" }}
                />
                {p.language}
              </span>
              <span className="star">★ {p.stars ?? 0}</span>
            </div>
          </a>
        ))}
      </Reveal>
    </section>
  );
}

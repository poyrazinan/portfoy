import { t, type SiteSettings } from "@/lib/types";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About({ settings }: { settings: SiteSettings }) {
  const { locale } = useLang();
  const heading = settings.aboutHeading ?? {};
  const paragraphs = settings.aboutParagraphs ?? [];
  const facts = settings.facts ?? [];

  return (
    <section id="about">
      <SectionLabel n="01">{t(heading.label, locale)}</SectionLabel>
      <Reveal as="h2" className="sec-title">
        {t(heading.title, locale)}
      </Reveal>
      <div className="about-grid" style={{ marginTop: 34 }}>
        <Reveal>
          {paragraphs.map((p, i) => (
            <p key={i}>{t(p, locale)}</p>
          ))}
        </Reveal>
        <Reveal className="facts">
          {facts.map((fact, i) => (
            <div className="fact" key={i}>
              <span className="k">{t(fact.key, locale)}</span>
              <span className="v">
                {fact.url ? (
                  <a href={fact.url} target="_blank" rel="noopener noreferrer">
                    {t(fact.value, locale)} ↗
                  </a>
                ) : (
                  t(fact.value, locale)
                )}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

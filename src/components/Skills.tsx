import { t, type SiteSettings, type SkillCategory } from "@/lib/types";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Skills({
  settings,
  skills,
}: {
  settings: SiteSettings;
  skills: SkillCategory[];
}) {
  const { locale } = useLang();
  const heading = settings.skillsHeading ?? {};

  return (
    <section id="skills">
      <SectionLabel n="02">{t(heading.label, locale)}</SectionLabel>
      <Reveal as="h2" className="sec-title">
        {t(heading.title, locale)}
      </Reveal>
      <Reveal className="skills-grid" style={{ marginTop: 34 }}>
        {skills.map((cat) => (
          <div className="skill-cat" key={cat._id}>
            <h3>{t(cat.title, locale)}</h3>
            <ul>
              {(cat.items ?? []).map((item, i) => (
                <li key={i}>{t(item, locale)}</li>
              ))}
            </ul>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

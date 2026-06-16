import {
  t,
  type Education,
  type Experience,
  type SiteSettings,
} from "@/lib/types";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function ExperienceEducation({
  settings,
  experience,
  education,
}: {
  settings: SiteSettings;
  experience: Experience[];
  education: Education[];
}) {
  const { locale } = useLang();
  const expHeading = settings.experienceHeading ?? {};
  const eduHeading = settings.educationHeading ?? {};

  return (
    <section id="experience">
      <div className="two-col">
        <div>
          <SectionLabel n="03">{t(expHeading.label, locale)}</SectionLabel>
          <Reveal as="h2" className="sec-title">
            {t(expHeading.title, locale)}
          </Reveal>
          <Reveal className="timeline" style={{ marginTop: 30 }}>
            {experience.map((item) => (
              <div className="tl-item" key={item._id}>
                <div className="when">{t(item.when, locale)}</div>
                <h4>{t(item.role, locale)}</h4>
                <div className="org">{t(item.org, locale)}</div>
                <p>{t(item.description, locale)}</p>
              </div>
            ))}
          </Reveal>
        </div>
        <div>
          <SectionLabel n="04">{t(eduHeading.label, locale)}</SectionLabel>
          <Reveal as="h2" className="sec-title">
            {t(eduHeading.title, locale)}
          </Reveal>
          <Reveal className="timeline" style={{ marginTop: 30 }}>
            {education.map((item) => (
              <div className="tl-item" key={item._id}>
                <div className="when">{t(item.when, locale)}</div>
                <h4>{t(item.degree, locale)}</h4>
                <div className="org">{t(item.org, locale)}</div>
                <p>{t(item.description, locale)}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

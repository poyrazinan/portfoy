import { t, type SiteSettings } from "@/lib/types";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Contact({ settings }: { settings: SiteSettings }) {
  const { locale } = useLang();
  const heading = settings.contactHeading ?? {};
  const links = settings.contactLinks ?? [];

  return (
    <section id="contact">
      <SectionLabel n="07">{t(heading.label, locale)}</SectionLabel>
      <div className="contact-grid" style={{ marginTop: 18 }}>
        <Reveal>
          <p className="contact-lead">
            {t(settings.contactLeadStart, locale)}
            <span className="accent">{t(settings.contactLeadAccent, locale)}</span>
            {t(settings.contactLeadEnd, locale)}
          </p>
        </Reveal>
        <Reveal className="contact-links">
          {links.map((link, i) => (
            <a
              className="clink"
              href={link.href}
              key={i}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <span className="l">
                <span className="t">{t(link.label, locale)}</span>
                <span className="v">{link.value}</span>
              </span>
              <span className="arw">↗</span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

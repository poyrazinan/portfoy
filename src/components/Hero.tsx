import { ui } from "@/lib/ui";
import { t, type SiteSettings } from "@/lib/types";
import { urlForImage } from "@/sanity/image";
import { useLang } from "./LangContext";
import { Reveal } from "./Reveal";

export function Hero({ settings }: { settings: SiteSettings }) {
  const { locale } = useLang();
  const hero = settings.hero ?? {};

  const photo = settings.profileImage
    ? urlForImage(settings.profileImage).width(680).height(850).fit("crop").url()
    : "/pp.jpg";

  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <Reveal>
          <span className="avail">
            <span className="pulse" />
            <span>{t(hero.badge, locale)}</span>
          </span>
          <h1>
            <span>{t(hero.titleLine1, locale)}</span>
            <br />
            <span className="accent">{t(hero.titleLine2, locale)}</span>
          </h1>
          <div className="role">{t(hero.role, locale)}</div>
          <p className="lede">{t(hero.lede, locale)}</p>
          <div className="hero-cta">
            <a className="btn primary" href="#cv">
              <span>{ui("hero.cta1", locale)}</span> <span className="arw">↗</span>
            </a>
            <a className="btn" href="#work">
              <span>{ui("hero.cta2", locale)}</span>
            </a>
            <a
              className="btn"
              href="https://github.com/poyrazinan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span className="arw">↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="hero-portrait">
          <div className="portrait-frame">
            <span className="tag">// poyraz.jpg</span>
            {photo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img className="portrait" src={photo} alt="Poyraz İnan" />
            ) : (
              <div className="portrait portrait-empty">// fotoğraf eklenmedi</div>
            )}
          </div>
          <div className="portrait-meta">
            <span>{hero.photoLocation ?? "Antalya / Türkiye"}</span>
            <span>{hero.photoEst ?? "EST. 2018"}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

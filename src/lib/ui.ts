import type { Locale } from "./types";

/** Fixed UI strings that aren't worth managing in the CMS (nav, buttons). */
export const UI = {
  tr: {
    "nav.about": "Hakkımda",
    "nav.skills": "Yetenekler",
    "nav.exp": "Deneyim",
    "nav.work": "Projeler",
    "nav.cv": "CV",
    "nav.contact": "İletişim",
    "hero.cta1": "CV'mi gör",
    "hero.cta2": "Projeler",
    "cv.tr": "Türkçe CV",
    "cv.en": "English CV",
    "cv.open": "Yeni sekme",
    "cv.download": "İndir",
    "foot.top": "↑ Yukarı",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.exp": "Experience",
    "nav.work": "Projects",
    "nav.cv": "CV",
    "nav.contact": "Contact",
    "hero.cta1": "View my CV",
    "hero.cta2": "Projects",
    "cv.tr": "Turkish CV",
    "cv.en": "English CV",
    "cv.open": "New tab",
    "cv.download": "Download",
    "foot.top": "↑ Top",
  },
} as const;

export type UIKey = keyof (typeof UI)["tr"];

export function ui(key: UIKey, locale: Locale): string {
  return UI[locale][key];
}

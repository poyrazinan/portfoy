import type { Image } from "sanity";

export type Locale = "tr" | "en";

export type LocaleString = { tr?: string; en?: string } | null | undefined;

export type Heading = {
  label?: LocaleString;
  title?: LocaleString;
};

export type Fact = {
  key?: LocaleString;
  value?: LocaleString;
  url?: string;
};

export type ContactLink = {
  label?: LocaleString;
  value?: string;
  href?: string;
  external?: boolean;
};

export type SiteSettings = {
  profileImage?: Image | null;
  hero?: {
    badge?: LocaleString;
    titleLine1?: LocaleString;
    titleLine2?: LocaleString;
    role?: LocaleString;
    lede?: LocaleString;
    photoLocation?: string;
    photoEst?: string;
  };
  aboutHeading?: Heading;
  aboutParagraphs?: LocaleString[];
  facts?: Fact[];
  skillsHeading?: Heading;
  experienceHeading?: Heading;
  educationHeading?: Heading;
  projectsHeading?: Heading;
  cvHeading?: Heading;
  cvDescription?: LocaleString;
  cvFileTrUrl?: string | null;
  cvFileEnUrl?: string | null;
  contactHeading?: Heading;
  contactLeadStart?: LocaleString;
  contactLeadAccent?: LocaleString;
  contactLeadEnd?: LocaleString;
  contactLinks?: ContactLink[];
  footerRights?: LocaleString;
  footerMade?: LocaleString;
};

export type SkillCategory = {
  _id: string;
  title?: LocaleString;
  items?: LocaleString[];
};

export type Experience = {
  _id: string;
  when?: LocaleString;
  role?: LocaleString;
  org?: LocaleString;
  description?: LocaleString;
};

export type Education = {
  _id: string;
  when?: LocaleString;
  degree?: LocaleString;
  org?: LocaleString;
  description?: LocaleString;
};

export type Project = {
  _id: string;
  name?: string;
  repo?: string;
  description?: LocaleString;
  language?: string;
  languageColor?: string;
  stars?: number;
  url?: string;
};

export type HomeData = {
  settings: SiteSettings;
  skills: SkillCategory[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
};

/** Pick the active-language string, falling back to the other language. */
export function t(value: LocaleString, locale: Locale): string {
  if (!value) return "";
  return (locale === "tr" ? value.tr : value.en) ?? value.tr ?? value.en ?? "";
}

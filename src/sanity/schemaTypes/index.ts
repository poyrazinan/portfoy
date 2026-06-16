import type { SchemaTypeDefinition } from "sanity";

import { localeString, localeText } from "./localeString";
import { siteSettings } from "./siteSettings";
import { project } from "./project";
import { experience } from "./experience";
import { education } from "./education";
import { skillCategory } from "./skillCategory";
import { consultantPeak } from "./consultantPeak";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    localeText,
    siteSettings,
    skillCategory,
    experience,
    education,
    project,
    consultantPeak,
  ],
};

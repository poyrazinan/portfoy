import { defineType, defineField } from "sanity";

const heading = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: "object",
    options: { collapsible: true, collapsed: true },
    fields: [
      defineField({ name: "label", title: "Label", type: "localeString" }),
      defineField({ name: "title", title: "Title", type: "localeString" }),
    ],
  });

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "about", title: "About" },
    { name: "headings", title: "Section headings" },
    { name: "cv", title: "CV" },
    { name: "contact", title: "Contact" },
    { name: "footer", title: "Footer" },
  ],
  fields: [
    // ---------- HERO ----------
    defineField({
      name: "profileImage",
      title: "Profile photo",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({ name: "badge", title: "Availability badge", type: "localeString" }),
        defineField({ name: "titleLine1", title: "Title — line 1", type: "localeString" }),
        defineField({ name: "titleLine2", title: "Title — line 2 (accent)", type: "localeString" }),
        defineField({ name: "role", title: "Role line", type: "localeString" }),
        defineField({ name: "lede", title: "Lede", type: "localeText" }),
        defineField({ name: "photoLocation", title: "Photo meta — location", type: "string" }),
        defineField({ name: "photoEst", title: "Photo meta — EST.", type: "string" }),
      ],
    }),

    // ---------- ABOUT ----------
    heading("aboutHeading", "About heading"),
    defineField({
      name: "aboutParagraphs",
      title: "About paragraphs",
      type: "array",
      group: "about",
      of: [{ type: "localeText" }],
    }),
    defineField({
      name: "facts",
      title: "Facts",
      type: "array",
      group: "about",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "key", title: "Key", type: "localeString" }),
            defineField({ name: "value", title: "Value", type: "localeString" }),
            defineField({
              name: "url",
              title: "URL (optional)",
              type: "url",
              validation: (r) => r.uri({ allowRelative: false, scheme: ["http", "https", "mailto"] }),
            }),
          ],
          preview: { select: { title: "key.tr", subtitle: "value.tr" } },
        },
      ],
    }),

    // ---------- SECTION HEADINGS ----------
    { ...heading("skillsHeading", "Skills heading"), group: "headings" },
    { ...heading("experienceHeading", "Experience heading"), group: "headings" },
    { ...heading("educationHeading", "Education heading"), group: "headings" },
    { ...heading("projectsHeading", "Projects heading"), group: "headings" },

    // ---------- CV ----------
    { ...heading("cvHeading", "CV heading"), group: "cv" },
    defineField({
      name: "cvDescription",
      title: "CV description",
      type: "localeText",
      group: "cv",
    }),
    defineField({
      name: "cvFileTr",
      title: "CV — Turkish (PDF)",
      type: "file",
      group: "cv",
      options: { accept: ".pdf" },
    }),
    defineField({
      name: "cvFileEn",
      title: "CV — English (PDF)",
      type: "file",
      group: "cv",
      options: { accept: ".pdf" },
    }),

    // ---------- CONTACT ----------
    { ...heading("contactHeading", "Contact heading"), group: "contact" },
    defineField({
      name: "contactLeadStart",
      title: "Contact lead — start",
      type: "localeString",
      group: "contact",
    }),
    defineField({
      name: "contactLeadAccent",
      title: "Contact lead — accent (green)",
      type: "localeString",
      group: "contact",
    }),
    defineField({
      name: "contactLeadEnd",
      title: "Contact lead — end",
      type: "localeString",
      group: "contact",
    }),
    defineField({
      name: "contactLinks",
      title: "Contact links",
      type: "array",
      group: "contact",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "localeString" }),
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "href", title: "Href", type: "string" }),
            defineField({ name: "external", title: "Opens in new tab", type: "boolean", initialValue: true }),
          ],
          preview: { select: { title: "value", subtitle: "href" } },
        },
      ],
    }),

    // ---------- FOOTER ----------
    defineField({
      name: "footerRights",
      title: "Footer — rights text",
      type: "localeString",
      group: "footer",
    }),
    defineField({
      name: "footerMade",
      title: "Footer — made-with text",
      type: "localeString",
      group: "footer",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site settings" }),
  },
});

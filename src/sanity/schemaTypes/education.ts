import { defineType, defineField } from "sanity";

export const education = defineType({
  name: "education",
  title: "Education",
  type: "document",
  fields: [
    defineField({
      name: "when",
      title: "Date range",
      type: "localeString",
      description: "e.g. 2019 — 2023",
    }),
    defineField({
      name: "degree",
      title: "Degree",
      type: "localeString",
      validation: (r) => r.required(),
    }),
    defineField({ name: "org", title: "Institution", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "degree.tr", subtitle: "org.tr" },
  },
});

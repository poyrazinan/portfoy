import { defineType, defineField } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    defineField({
      name: "when",
      title: "Date range",
      type: "localeString",
      description: "e.g. 2024 — present / 2024 — günümüz",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "localeString",
      validation: (r) => r.required(),
    }),
    defineField({ name: "org", title: "Organization", type: "localeString" }),
    defineField({ name: "description", title: "Description", type: "localeText" }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first (most recent on top)",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "role.tr", subtitle: "org.tr" },
  },
});

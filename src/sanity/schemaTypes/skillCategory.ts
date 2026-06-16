import { defineType, defineField } from "sanity";

export const skillCategory = defineType({
  name: "skillCategory",
  title: "Skill category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "localeString" }],
      description: "Each skill in the category (most are language-neutral, but you can localize)",
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    }),
  ],
  orderings: [
    { title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title.tr" },
  },
});

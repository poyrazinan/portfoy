import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "repo",
      title: "Repo path",
      type: "string",
      description: "e.g. poyrazinan/JavaLicense",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "localeText",
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "e.g. Java, PHP, Python",
    }),
    defineField({
      name: "languageColor",
      title: "Language color",
      type: "string",
      description: "Hex swatch color, e.g. #b07219",
      initialValue: "#b07219",
    }),
    defineField({
      name: "stars",
      title: "Stars",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "repo" },
  },
});

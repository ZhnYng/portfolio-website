import { defineField, defineType } from "sanity";

const technology = defineType({
  name: "technology",
  title: "Technologies",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Technology name",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Enter a name for the technology.`),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
      validation: (rule) =>
        rule.required().error(`Provide an image for the technology.`),
    }),
    defineField({
      name: "url",
      title: "Documentation URL",
      type: "url",
      validation: (rule) =>
        rule.required().error(`Provide a documentation URL for the technology.`),
    })
  ]
});

export default technology;
import { defineField, defineType } from "sanity";

const project = defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) =>
        rule.required().error(`Enter a name for the project.`),
    }),
    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
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
        rule.required().error(`Provide an image for the project.`),
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (rule) =>
        rule.required().error(`Create a slug for the project.`),
    }),
    defineField({
      name: "projectUrl",
      title: "Project URL",
      type: "url",
    }),
    defineField({
      name: "repositoryUrl",
      title: "Repository URL",
      type: "url",
      validation: (rule) =>
        rule.required().error(`Enter a repository URL for the project.`),
    }),
    defineField({
      name: "elevatorPitch",
      title: "Elevator Pitch",
      type: "text",
      description: "Keep it short and intriguing.",
      validation: (rule) => {
        return (
          rule.required().error(`Enter an elevator pitch for the project.`),
          rule.max(300).error("Elevator pitch must be 300 characters or less.")
        )
      }
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
      description:
        "You can be as detailed as you want here. Markdown is supported.",
      validation: (rule) =>
        rule.required().error(`Enter more details for the project.`),
    }),
  ],
});

export default project;
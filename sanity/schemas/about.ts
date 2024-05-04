import { defineField, validation } from "sanity";

const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "introduction",
      title: "Introduction",
      type: "text",
      validation: (rule) => {
        return (
          rule.required().error(`Enter an elevator pitch for the project.`),
          rule.max(300).error("Elevator pitch must be 300 characters or less.")
        );
      },
    }),
    defineField({
      name: "image1",
      title: "First image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
          description: "A short description of the image. E.g. the location",
        },
        {
          name: "footer",
          title: "Footer",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image2",
      title: "Second image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
          description: "A short description of the image. E.g. the location",
        },
        {
          name: "footer",
          title: "Footer",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "image3",
      title: "Third image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "title",
          title: "Title",
          type: "string",
        },
        {
          name: "description",
          title: "Description",
          type: "string",
          description: "A short description of the image. E.g. the location",
        },
        {
          name: "footer",
          title: "Footer",
          type: "string",
        },
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    }),
  ],
};

export default about;

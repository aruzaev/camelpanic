export default {
  name: "post",
  type: "document",
  title: "Blog Post",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published at",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "body",
      type: "array",
      title: "Body",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};

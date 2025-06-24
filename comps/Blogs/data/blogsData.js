// src/data/blogsData.js
const blogsData = [
    {
      id: "1",
      slug: "first-blog-post",
      createdOn: new Date("2024-06-01T10:00:00"),
      sections: [
        { type: "title", value: "First Blog Post" },
        { type: "image", value: "https://m.media-amazon.com/images/I/61wlEyqfRwL._SY741_.jpg", alt: "Blog 1 Image" },
        { type: "paragraph", value: "This is the first paragraph of the blog." },
        { type: "h2", value: "Subheading" },
        { type: "paragraph", value: "More content here..." },
      ],
    },
    {
      id: "2",
      slug: "second-blog-post",
      createdOn: new Date("2024-06-10T15:30:00"),
      sections: [
        { type: "title", value: "Second Blog Post" },
        { type: "image", value: "https://m.media-amazon.com/images/I/61wlEyqfRwL._SY741_.jpg", alt: "Blog 2 Image" },
        { type: "paragraph", value: "Welcome to the second blog." },
      ],
    },
  ];
  
  export default blogsData;
  
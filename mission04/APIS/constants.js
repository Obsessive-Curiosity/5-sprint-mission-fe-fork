export const REQUIRED_FIELDS = {
  POST: {
    articles: [
      ["title", "string"],
      ["content", "string"],
      ["image", "string"],
    ],
    products: [
      ["name", "string"],
      ["description", "string"],
      ["price", "number"],
      ["manufacturer", "string"],
      ["tags", "object"],
      ["images", "object"],
    ],
  },
  PATCH: {
    articles: [
      ["title", "string"],
      ["content", "string"],
      ["image", "string"],
    ],
    products: [
      ["name", "string"],
      ["description", "string"],
      ["price", "number"],
      ["manufacturer", "string"],
      ["tags", "object"],
      ["images", "object"],
    ],
  },
};

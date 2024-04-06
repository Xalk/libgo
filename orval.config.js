module.exports = {
  main: {
    input: "./src/shared/api/swagger-books-api.json",
    output: {
      target: "./src/shared/api/books-generated.ts",
      prettier: true,
      override: {
        mutator: {
          path: "./src/shared/api/api-instance.ts",
          name: "createInstance",
        },
      },
    },
  },
};

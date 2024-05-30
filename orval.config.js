module.exports = {
  main: {
    input: "./src/shared/api/swagger-users-api.json",
    output: {
      target: "./src/shared/api/users-generated.ts",
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

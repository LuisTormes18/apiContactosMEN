const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contact Book Api",
      version: "1.0.0",
      description: "A simple express API",
    },
    servers: [
      {
        url: "http://localhost:4001",
      },
    ],

  },
  apis: ["./routes*.js"],
};

module.exports = options
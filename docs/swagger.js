const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

// swagger options
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Api de Contactos",
      version: "1.0.0",
      description: "Una api hecha en Express",
    },
    servers: [
      {
        url: "http://localhost:4001/api",
        // url:"https://api-contactos1.herokuapp.com",
      },
    ],

  },
  apis: ["./docs/*.js"],
};

const specs = swaggerJsDoc(options);
router.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router
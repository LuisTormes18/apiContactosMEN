const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const options = require('./swaggerOptions');

const specs = swaggerJsDoc(options);
router.use('/', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = router
const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const options = {
  explorer: false,

  swaggerOptions: {
    get:{
      tags: ["Todo CRUD operations"], // operation's tag.
    description: "Get a todo", // operation's desc.
    operationId: "getTodo", // unique operation id
    }
  }
}

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(null,options));

module.exports = router;
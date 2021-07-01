const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const options = {
  explorer: false,

  swaggerOptions: {
    urls: [
      {
        url: './swagger.json',
        name: 'Spec1'
      },
    ]
  }
}

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(null,options));

module.exports = router;
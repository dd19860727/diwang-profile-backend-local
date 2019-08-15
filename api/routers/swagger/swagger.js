const express = require("../../../node_modules/express");
const swaggerRouter = express.Router();

const swaggerUi = require('../../../node_modules/swagger-ui-express');
const swaggerDocument = require('../../swagger/swagger-ui.json');


swaggerRouter.use('/swagger', swaggerUi.serve);
swaggerRouter.get('/swagger', swaggerUi.setup(swaggerDocument));

module.exports = swaggerRouter;
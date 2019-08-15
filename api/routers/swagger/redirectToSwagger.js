const express = require("../../../node_modules/express");
const redirectToSwagger = express.Router();
const redirectController = require('../../controller/swagger/redirectToSwagger');

redirectToSwagger.get("/", redirectController.redirectToSwagger);

module.exports = redirectToSwagger;
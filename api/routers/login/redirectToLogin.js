const express = require("../../../node_modules/express");
const redirectToLogin = express.Router();
const redirectController = require('../../controller/login/redirectToLogin');

redirectToLogin.get("/", redirectController.redirectToLogin);

module.exports = redirectToLogin;
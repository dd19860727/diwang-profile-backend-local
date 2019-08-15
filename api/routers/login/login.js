const express = require("../../../node_modules/express");
const loginRouter = express.Router();
const loginController = require('../../controller/login/loginController');
const root = "/login";

loginRouter.get(root, loginController.login);
loginRouter.post(root+"/user-submit", loginController.user_submit);

module.exports = loginRouter;
const express = require("../../../node_modules/express");
const apiRouter = express.Router();
const testController = require('../../controller/test');
const authController = require('../../controller/auth/authController');

apiRouter.get("/test", authController.verify_token, testController.test_get_all);
apiRouter.post("/testpost", testController.test_post);

apiRouter.get("/token", authController.req_token);

module.exports = apiRouter;
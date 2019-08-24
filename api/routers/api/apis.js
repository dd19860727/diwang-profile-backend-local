const express = require("express");
const apiRouter = express.Router();
const testController = require('../../controller/test');
const authController = require('../../controller/auth/authController');

apiRouter.get("/test", authController.verify_token, testController.test_get_all);
apiRouter.post("/testpost", testController.test_post);
apiRouter.get("/getId/:testId", testController.test_get_by_id);
apiRouter.patch("/updateId/:testId", testController.test_update);
apiRouter.delete("/deleteId/:testId", testController.test_delete);

apiRouter.get("/token", authController.req_token);
apiRouter.post("/create-token", authController.create_token_api);

module.exports = apiRouter;
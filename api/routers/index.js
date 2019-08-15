const loginRouter = require("./login/login");
const apiRouter = require("./test/test");
const swaggerRouter = require("./swagger/swagger");
//const redirectToSwagger = require("./swagger/redirectToSwagger");
const redirectToLogin = require("./login/redirectToLogin");
const addResHeader = require("./common/resHeader");

module.exports.redirectToLogin = redirectToLogin;
//module.exports.redirectToSwagger = redirectToSwagger;
module.exports.loginRouter = loginRouter;
module.exports.apiRouter = apiRouter;
module.exports.swaggerRouter = swaggerRouter;
module.exports.addResHeader = addResHeader;

const notFoundError = require("./app-config/errors/not-found");
const logError = require("./app-config/errors/log-error");
const clientErrorHandler = require("./app-config/errors/clientErrorHandler");
const errorHandler = require("./app-config/errors/error-handler");
const corsOptions = require('./app-config/cors/cors-options');

module.exports.loadErrors = [
    logError,
    notFoundError,
    clientErrorHandler,
    errorHandler
];

module.exports.loadCorsConfig = corsOptions;
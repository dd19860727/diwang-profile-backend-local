const express = require("express");
const addResHeader = express.Router();
const resHeaderController = require("../../controller/resHeaders/resHeaderController");
addResHeader.all('*', resHeaderController.add_res_header);

module.exports = addResHeader;
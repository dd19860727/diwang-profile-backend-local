const test = require("../models/test");
const jwt = require("jsonwebtoken");
const authController = require('./auth/authController');

exports.test_get_all = (req, res) => {
     const resObj = {message: 'Test'};
     authController.jwt_verify(req, res, resObj);
};

exports.test_post = (req, res) => {
    const test = {
        name: req.body.name,
        id: req.body.id
    };
    res.status(200).json({
        message: "Post Successfully",
        createPost: test
    });
};


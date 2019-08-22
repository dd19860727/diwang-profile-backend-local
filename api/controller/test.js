const Test = require("../models/test");
const mongoose = require('mongoose');
const authController = require('./auth/authController');

exports.test_get_all = (req, res) => {
     const resObj = {message: 'Test'};
     authController.jwt_verify(req, res, resObj);
};

exports.test_post = (req, res) => {
    const test = new Test({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        password:req.body.password
    });
    test.save().then(result =>{
        console.log(result);
    }).catch(err => console.log(err));
    res.status(200).json({
        message: "Post Successfully",
        createPost: test
    });
};


exports.test_get_by_id = (req, res) =>{
    const id = req.params.id;
    console.log("id", id);
    Test.findById(id).exec().then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    }).catch(err => {
        res.status(500).json({error:err});
    });
};

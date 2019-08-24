const Test = require("../models/test");
const mongoose = require('mongoose');
const authController = require('./auth/authController');
const errorController = require('./errors/errorController');
const dbController = require('./db/dbController');

exports.test_get_all = (req, res) => {
    Test.find().exec()
        .then(docs => {
            if (docs.length) {
                authController.jwt_verify(req, res, docs);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                })
            }
        }).catch(err => {
            errorController.db_error_handler(res, err);
        });
};

exports.test_post = (req, res) => {
    const test = new Test({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        password: req.body.password
    });

    test.save().catch(err => {
        errorController.db_error_handler(res, err);
    });

    res.status(200).json({
        message: "Post Successfully",
        createPost: test
    });
};


exports.test_get_by_id = (req, res) => {
    const id = req.params.testId;
    Test.findById(id).exec().then(doc => {
        if (doc) {
            dbController.success_retrun(res, doc);
        } else {
            res.status(404).json({ message: "No valid entry found" });
        }

    }).catch(err => {
        errorController.db_error_handler(res, err);
    });
};

exports.test_update = (req, res) => {
    const id = req.params.testId;
    const updateParams = req.body;
    Test.update({ _id: id }, { $set: updateParams }).exec().then(result => {
        dbController.success_retrun(res, result);
    }).catch(err => {
        errorController.db_error_handler(res, err);
    });
};

exports.test_delete = (req, res) => {
    const id = req.params.testId;
    Test.remove({ _id: id }).exec().then(result => {
        dbController.success_retrun(res, result);
    }).catch(err => {
        errorController.db_error_handler(res, err);
    });
};

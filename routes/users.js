'use strict';
var express = require('express');
var router = express.Router();
var passport = require('passport');
var bcrypt = require('bcryptjs');
var userModel = require('../models/user');

/* GET users listing. */
router.get('/', function (req, res) {
    userModel.find({}, function (err, docs) {
        var userID = {};
        var userName = {};

        if (!err) {
            var counter = 0;
            docs.forEach(function (docs) {
                userID[counter] = docs._id;
                userName[counter] = docs.username;
                counter++;
            });
            //res.send(userID);
            //res.send(userName);
            res.render('users', { user: req.user, userID: userID, userName: userName });
        }
        else {
             console.log(err);
        }
    });
});

module.exports = router;

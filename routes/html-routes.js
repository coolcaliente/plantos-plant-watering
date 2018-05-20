var path = require("path");
var authRoute = require('./auth.js');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
//var authController = require('../controllers/authcontroller.js');
//var passport = require('passport');
module.exports = function (app) {

    app.get("/", function (req, res) {
        if (req.user) {
            res.redirect("/myPlants");
          }
        var hbsObj = {
            title: "LogIn",
            bodyClass: "signInBody"
        }
        res.render("login", hbsObj)
    });
    //added route for login buttons
    app.get("/login", function (req, res) {
        var hbsObj = {
            title: "LogIn"
        }
        res.render("login", hbsObj)
    });


    //app.get('/signup', authController.signup);

    app.get("/signup", function (req, res) {
        var hbsObj = {
            title: "signup",
            bodyClass: "blue"
        }
        res.render("signup", hbsObj)
    });
    //after signing up or in, direct to myPlants
    //logo takes user to myPlants

    //myPlants = home page
    app.get("/myPlants", isAuthenticated, function (req, res) {
        var hbsObj = {
            title: "My Plants",
            bodyClass: "addPlantBody"
        }
        res.render("myPlants", hbsObj)
    });

    app.get("/addPlant", isAuthenticated, function (req, res) {
        var hbsObj = {
            title: "Add a Plant",
            bodyClass: ""
        }
        res.render("addPlant", hbsObj)
    });

    app.get("/about", function (req, res) {
        var hbsObj = {
            title: "About Plantos"
        }
        res.render("about", hbsObj)
    });



   
};


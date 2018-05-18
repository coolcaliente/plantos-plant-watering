var path = require("path");
var authRoute = require('./auth.js');
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
var authController = require('../controllers/authcontroller.js');
var passport = require('passport');
module.exports = function(app) {

    app.get("/", function(req, res) {
        var hbsObj={
            title:"LogIn",
            bodyClass: "signInBody"
        }
        res.render("login", hbsObj)
    });
    //added route for login buttons
    app.get("/login", function(req, res) {
        var hbsObj={
            title:"LogIn"
        }
        res.render("login", hbsObj)
    });

 
    //app.get('/signup', authController.signup);
     
    app.get("/signup", function(req, res) {
        var hbsObj={
            title:"signup",
        }
        res.render("signup", hbsObj)
    });
    //after signing up or in, direct to myPlants
    //logo takes user to myPlants

    //myPlants = home page
    app.get("/myPlants", function(req, res) {
        var hbsObj={
            title:"My Plants",
            bodyClass: ""
        }
        res.render("myPlants", hbsObj)
    });

    app.get("/addPlant", function(req, res) {
        var hbsObj={
        title:"Add a Plant",
        bodyClass: ""
    }
        res.render("addPlant", hbsObj)
    });
    
    app.get("/about", function(req, res) {
        var hbsObj={
            title:"About Plantos"
        }
        res.render("about", hbsObj)
    });

  
    
      // Here we've add our isAuthenticated middleware to this route.
      // If a user who is not logged in tries to access this route they will be redirected to the signup page
      app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/members.html"));
      });
      app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: 'about',
    
        failureRedirect: 'signup'
    }
    
    ));      
};


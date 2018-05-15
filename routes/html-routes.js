var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");


module.exports = function(app) {

    app.get("/signup", function(req, res) {
        var hbsObj={
            title:"LogIn"
        }
        res.render("pages/login", hbsObj)
    });
    //after signing up or in, direct to myPlants
    //logo takes user to myPlants

    //myPlants = home page
    app.get("/myPlants", function(req, res) {
        var hbsObj={
            title:"My Plants"
        }
        res.render("pages/myPlants", hbsObj)
    });

    app.get("/addPlant", function(req, res) {
        var hbsObj={
        title:"Add a Plant"
    }
        res.render("pages/addPlant", hbsObj)
    });
    
    app.get("/about", function(req, res) {
        var hbsObj={
            title:"About Plantos"
        }
        res.render("pages/about", hbsObj)
    });

    
      // Here we've add our isAuthenticated middleware to this route.
      // If a user who is not logged in tries to access this route they will be redirected to the signup page
      app.get("/members", isAuthenticated, function(req, res) {
        res.sendFile(path.join(__dirname, "../public/members.html"));
      });
      
};
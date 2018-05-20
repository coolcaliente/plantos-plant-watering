var express = require("express");
var bodyParser = require("body-parser");
//session is necessary for passport to work
var session = require('express-session');
// Requiring passport as we've configured it
var passport = require("./config/passport");
var env = require('dotenv').load()

//load passport strategies
require('./config/passport.js');;

var app = express();
var PORT = process.env.PORT || 8080;
var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public")); 



var exphbs = require("express-handlebars");
//app.set('views', 'views')//from passport
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


//this functionality is in config
// var mysql = require("mysql");

//change force back to true
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT" + PORT);
    })
});